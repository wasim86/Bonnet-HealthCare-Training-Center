using Microsoft.EntityFrameworkCore;
using Serilog;
using JecaInsurance.API.Data;

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    // .WriteTo.File("logs/jeca-insurance-.txt", rollingInterval: RollingInterval.Day)
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

    // CORS Configuration
    builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowFrontend", policy =>
        {
            policy.WithOrigins(
                "http://localhost:3000",  // Next.js development
                "http://localhost:3001",  // Next.js development (alternate port)
                "https://localhost:3000", // Next.js development HTTPS
                "https://localhost:3001", // Next.js development HTTPS (alternate port)
                "https://jecainsurance.com", // Production domain
                "https://www.jecainsurance.com" // Production www domain
            )
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .WithExposedHeaders("X-Total-Count", "X-Page", "X-Page-Size", "X-Total-Pages");
        });
    });

    // Health Checks
    builder.Services.AddHealthChecks()
        .AddDbContextCheck<JecaInsuranceDbContext>()
        .AddSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")!);

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
        c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
        {
            Title = "JECA Insurance API",
            Version = "v1",
            Description = "API for JECA Insurance quote management system",
            Contact = new Microsoft.OpenApi.Models.OpenApiContact
            {
                Name = "JECA Insurance Support",
                Email = "support@jecainsurance.com"
            }
        });
    });

    // =====================================================
    // APPLICATION PIPELINE
    // =====================================================

    var app = builder.Build();

    // Development Configuration
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "JECA Insurance API v1");
            c.RoutePrefix = string.Empty; // Serve Swagger UI at root
        });
    }
    else
    {
        // Production Configuration
        app.UseHsts();
        app.UseHttpsRedirection();
    }

    // CORS
    app.UseCors("AllowFrontend");

    // Request Logging
    app.UseSerilogRequestLogging();

    // Health Checks
    app.UseHealthChecks("/health");

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
