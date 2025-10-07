using Microsoft.EntityFrameworkCore;
using FluentValidation;
using Serilog;
using JecaInsurance.API.Data;
using JecaInsurance.API.Services;
using JecaInsurance.API.Validators;
using JecaInsurance.API.Middleware;
using Microsoft.AspNetCore.RateLimiting;
using System.Threading.RateLimiting;
using Microsoft.OpenApi.Models;
using System.Reflection;

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("logs/jeca-insurance-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);
    
    // Use Serilog
    builder.Host.UseSerilog();
    
    // =====================================================
    // SERVICES CONFIGURATION
    // =====================================================
    
    // Database Configuration
    builder.Services.AddDbContext<JecaInsuranceDbContext>(options =>
        options.UseSqlServer(
            builder.Configuration.GetConnectionString("DefaultConnection"),
            sqlOptions => sqlOptions.EnableRetryOnFailure(
                maxRetryCount: 3,
                maxRetryDelay: TimeSpan.FromSeconds(30),
                errorNumbersToAdd: null
            )
        )
    );
    
    // AutoMapper
    builder.Services.AddAutoMapper(typeof(Program));
    
    // FluentValidation
    builder.Services.AddValidatorsFromAssemblyContaining<AutoQuoteRequestValidator>();
    builder.Services.AddFluentValidationAutoValidation();
    
    // Application Services
    builder.Services.AddScoped<IQuoteService, QuoteService>();
    builder.Services.AddScoped<IFileService, FileService>();
    builder.Services.AddScoped<ILookupService, LookupService>();
    builder.Services.AddScoped<IEmailService, EmailService>();
    builder.Services.AddScoped<IQuoteNumberService, QuoteNumberService>();
    
    // File Storage Configuration
    if (builder.Configuration.GetValue<bool>("UseAzureStorage"))
    {
        builder.Services.AddScoped<IFileStorageService, AzureBlobStorageService>();
    }
    else
    {
        builder.Services.AddScoped<IFileStorageService, LocalFileStorageService>();
    }
    
    // Caching
    if (builder.Configuration.GetConnectionString("Redis") != null)
    {
        builder.Services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = builder.Configuration.GetConnectionString("Redis");
        });
    }
    else
    {
        builder.Services.AddMemoryCache();
    }
    
    // Rate Limiting
    builder.Services.AddRateLimiter(options =>
    {
        options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(httpContext =>
            RateLimitPartition.GetFixedWindowLimiter(
                partitionKey: httpContext.User.Identity?.Name ?? httpContext.Request.Headers.Host.ToString(),
                factory: partition => new FixedWindowRateLimiterOptions
                {
                    AutoReplenishment = true,
                    PermitLimit = 100,
                    Window = TimeSpan.FromMinutes(1)
                }));
        
        options.OnRejected = async (context, token) =>
        {
            context.HttpContext.Response.StatusCode = 429;
            await context.HttpContext.Response.WriteAsync("Too many requests. Please try again later.", cancellationToken: token);
        };
    });
    
    // CORS Configuration
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowFrontend", policy =>
        {
            policy.WithOrigins(
                "http://localhost:3000",  // Next.js development
                "https://localhost:3000", // Next.js development HTTPS
                "https://jecainsurance.com", // Production domain
                "https://www.jecainsurance.com" // Production www domain
            )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
        });
    });
    
    // Health Checks
    builder.Services.AddHealthChecks()
        .AddEntityFrameworkCore<JecaInsuranceDbContext>()
        .AddSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")!);
    
    // API Versioning
    builder.Services.AddApiVersioning(options =>
    {
        options.AssumeDefaultVersionWhenUnspecified = true;
        options.DefaultApiVersion = new Microsoft.AspNetCore.Mvc.ApiVersion(1, 0);
        options.ApiVersionReader = Microsoft.AspNetCore.Mvc.ApiVersionReader.Combine(
            new Microsoft.AspNetCore.Mvc.QueryStringApiVersionReader("version"),
            new Microsoft.AspNetCore.Mvc.HeaderApiVersionReader("X-Version"),
            new Microsoft.AspNetCore.Mvc.UrlSegmentApiVersionReader()
        );
    });
    
    builder.Services.AddVersionedApiExplorer(setup =>
    {
        setup.GroupNameFormat = "'v'VVV";
        setup.SubstituteApiVersionInUrl = true;
    });
    
    // Controllers
    builder.Services.AddControllers()
        .AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase;
            options.JsonSerializerOptions.WriteIndented = true;
        });
    
    // Swagger/OpenAPI
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new OpenApiInfo
        {
            Title = "JECA Insurance API",
            Version = "v1",
            Description = "API for JECA Insurance quote management system",
            Contact = new OpenApiContact
            {
                Name = "JECA Insurance Support",
                Email = "support@jecainsurance.com"
            }
        });
        
        // Include XML comments
        var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments(xmlPath);
        
        // Add file upload support
        c.OperationFilter<FileUploadOperationFilter>();
        
        // Add JWT authentication support (future)
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey,
            Scheme = "Bearer"
        });
        
        c.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                new string[] {}
            }
        });
    });
    
    // Background Services (Hangfire)
    if (builder.Configuration.GetValue<bool>("EnableBackgroundJobs"))
    {
        builder.Services.AddHangfire(configuration => configuration
            .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings()
            .UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
        
        builder.Services.AddHangfireServer();
    }
    
    // Application Insights (if configured)
    if (!string.IsNullOrEmpty(builder.Configuration["ApplicationInsights:InstrumentationKey"]))
    {
        builder.Services.AddApplicationInsightsTelemetry();
    }
    
    // =====================================================
    // APPLICATION PIPELINE
    // =====================================================
    
    var app = builder.Build();
    
    // Global Exception Handling
    app.UseMiddleware<GlobalExceptionMiddleware>();
    
    // Development Configuration
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "JECA Insurance API v1");
            c.RoutePrefix = string.Empty; // Serve Swagger UI at root
        });
        
        // Enable MiniProfiler in development
        app.UseMiniProfiler();
    }
    else
    {
        // Production Configuration
        app.UseHsts();
        app.UseHttpsRedirection();
    }
    
    // Security Headers
    app.UseMiddleware<SecurityHeadersMiddleware>();
    
    // Rate Limiting
    app.UseRateLimiter();
    
    // CORS
    app.UseCors("AllowFrontend");
    
    // Authentication & Authorization (when implemented)
    // app.UseAuthentication();
    // app.UseAuthorization();
    
    // Request Logging
    app.UseSerilogRequestLogging();
    
    // Health Checks
    app.UseHealthChecks("/health");
    app.UseHealthChecks("/health/ready", new Microsoft.AspNetCore.Diagnostics.HealthChecks.HealthCheckOptions
    {
        Predicate = check => check.Tags.Contains("ready")
    });
    app.UseHealthChecks("/health/live", new Microsoft.AspNetCore.Diagnostics.HealthChecks.HealthCheckOptions
    {
        Predicate = _ => false
    });
    
    // Background Jobs Dashboard (if enabled)
    if (builder.Configuration.GetValue<bool>("EnableBackgroundJobs"))
    {
        app.UseHangfireDashboard("/hangfire", new Hangfire.DashboardOptions
        {
            Authorization = new[] { new HangfireAuthorizationFilter() }
        });
    }
    
    // Controllers
    app.MapControllers();
    
    // Database Migration and Seeding
    using (var scope = app.Services.CreateScope())
    {
        var context = scope.ServiceProvider.GetRequiredService<JecaInsuranceDbContext>();
        
        if (app.Environment.IsDevelopment())
        {
            // Auto-migrate in development
            await context.Database.MigrateAsync();
        }
        
        // Seed lookup data if needed
        await SeedLookupDataAsync(context);
    }
    
    Log.Information("JECA Insurance API starting up...");
    
    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "Application terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}

// =====================================================
// HELPER METHODS
// =====================================================

static async Task SeedLookupDataAsync(JecaInsuranceDbContext context)
{
    // Check if lookup data already exists
    if (await context.ContinuousCoverageOptions.AnyAsync())
        return;
    
    // Seed will be handled by Entity Framework migrations
    // This is just a placeholder for any additional seeding logic
    Log.Information("Lookup data seeding completed");
}

// =====================================================
// CUSTOM FILTERS AND MIDDLEWARE
// =====================================================

public class FileUploadOperationFilter : Swashbuckle.AspNetCore.SwaggerGen.IOperationFilter
{
    public void Apply(Microsoft.OpenApi.Models.OpenApiOperation operation, Swashbuckle.AspNetCore.SwaggerGen.OperationFilterContext context)
    {
        var fileParameters = context.MethodInfo.GetParameters()
            .Where(p => p.ParameterType == typeof(IFormFile) || p.ParameterType == typeof(IFormFile[]))
            .ToList();
        
        if (fileParameters.Any())
        {
            operation.RequestBody = new OpenApiRequestBody
            {
                Content = new Dictionary<string, Microsoft.OpenApi.Models.OpenApiMediaType>
                {
                    ["multipart/form-data"] = new Microsoft.OpenApi.Models.OpenApiMediaType
                    {
                        Schema = new Microsoft.OpenApi.Models.OpenApiSchema
                        {
                            Type = "object",
                            Properties = fileParameters.ToDictionary(
                                p => p.Name!,
                                p => new Microsoft.OpenApi.Models.OpenApiSchema
                                {
                                    Type = "string",
                                    Format = "binary"
                                }
                            )
                        }
                    }
                }
            };
        }
    }
}

public class HangfireAuthorizationFilter : Hangfire.Dashboard.IDashboardAuthorizationFilter
{
    public bool Authorize(Hangfire.Dashboard.DashboardContext context)
    {
        // In production, implement proper authorization
        return true;
    }
}
