using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Data
{
    public class JecaInsuranceDbContext : DbContext
    {
        public JecaInsuranceDbContext(DbContextOptions<JecaInsuranceDbContext> options) : base(options)
        {
        }
        
        // Main Tables
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<FileAttachment> FileAttachments { get; set; }
        
        // Specific Quote Tables
        public DbSet<AutoQuote> AutoQuotes { get; set; }
        public DbSet<HomeQuote> HomeQuotes { get; set; }
        public DbSet<BusinessQuote> BusinessQuotes { get; set; }
        public DbSet<HealthQuote> HealthQuotes { get; set; }
        public DbSet<FloodQuote> FloodQuotes { get; set; }
        public DbSet<RentersQuote> RentersQuotes { get; set; }
        public DbSet<LandlordsQuote> LandlordsQuotes { get; set; }
        public DbSet<BOPQuote> BOPQuotes { get; set; }
        public DbSet<WorkersCompQuote> WorkersCompQuotes { get; set; }
        public DbSet<DentalQuote> DentalQuotes { get; set; }
        public DbSet<LifeInsuranceQuote> LifeInsuranceQuotes { get; set; }
        public DbSet<UmbrellaInsuranceQuote> UmbrellaInsuranceQuotes { get; set; }
        public DbSet<DisabilityInsuranceQuote> DisabilityInsuranceQuotes { get; set; }
        public DbSet<MedicareAdvantageQuote> MedicareAdvantageQuotes { get; set; }
        public DbSet<MedicareSupplementQuote> MedicareSupplementQuotes { get; set; }
        public DbSet<VisionQuote> VisionQuotes { get; set; }
        public DbSet<AnnuityQuote> AnnuityQuotes { get; set; }
        
        // Lookup Tables
        public DbSet<ContinuousCoverageOption> ContinuousCoverageOptions { get; set; }
        public DbSet<PolicyExpiresInOption> PolicyExpiresInOptions { get; set; }
        public DbSet<ClaimsIn3YearsOption> ClaimsIn3YearsOptions { get; set; }
        public DbSet<TicketsIn3YearsOption> TicketsIn3YearsOptions { get; set; }
        public DbSet<CoverageDesiredOption> CoverageDesiredOptions { get; set; }
        public DbSet<WorkSchoolDistanceOption> WorkSchoolDistanceOptions { get; set; }
        public DbSet<WatercraftType> WatercraftTypes { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Configure Quote entity
            modelBuilder.Entity<Quote>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");
                
                // Indexes
                entity.HasIndex(e => e.QuoteType).HasDatabaseName("IX_Quotes_QuoteType");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_Quotes_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_Quotes_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_Quotes_Status");
                entity.HasIndex(e => e.QuoteNumber).IsUnique().HasDatabaseName("IX_Quotes_QuoteNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_Quotes_FirstName_LastName");
            });
            
            // Configure Vehicle entity
            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                
                // Relationships
                entity.HasOne(e => e.Quote)
                      .WithMany(e => e.Vehicles)
                      .HasForeignKey(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
                
                // Indexes
                entity.HasIndex(e => e.QuoteId).HasDatabaseName("IX_Vehicles_QuoteId");
                entity.HasIndex(e => e.VehicleType).HasDatabaseName("IX_Vehicles_VehicleType");
                entity.HasIndex(e => new { e.Year, e.Make, e.Model }).HasDatabaseName("IX_Vehicles_Year_Make_Model");
            });
            
            // Configure Driver entity
            modelBuilder.Entity<Driver>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                
                // Relationships
                entity.HasOne(e => e.Quote)
                      .WithMany(e => e.Drivers)
                      .HasForeignKey(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
                
                // Indexes
                entity.HasIndex(e => e.QuoteId).HasDatabaseName("IX_Drivers_QuoteId");
                entity.HasIndex(e => e.DriverType).HasDatabaseName("IX_Drivers_DriverType");
                entity.HasIndex(e => e.DateOfBirth).HasDatabaseName("IX_Drivers_DateOfBirth");
            });
            
            // Configure FileAttachment entity
            modelBuilder.Entity<FileAttachment>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.UploadedDate).HasDefaultValueSql("GETDATE()");
                
                // Relationships
                entity.HasOne(e => e.Quote)
                      .WithMany(e => e.FileAttachments)
                      .HasForeignKey(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
                
                // Indexes
                entity.HasIndex(e => e.QuoteId).HasDatabaseName("IX_FileAttachments_QuoteId");
                entity.HasIndex(e => e.FileCategory).HasDatabaseName("IX_FileAttachments_FileCategory");
            });
            
            // Configure specific quote entities
            ConfigureSpecificQuoteEntities(modelBuilder);
            
            // Configure lookup tables
            ConfigureLookupTables(modelBuilder);
            
            // Seed lookup data
            SeedLookupData(modelBuilder);
        }
        
        private void ConfigureSpecificQuoteEntities(ModelBuilder modelBuilder)
        {
            // AutoQuote
            modelBuilder.Entity<AutoQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.AutoQuote)
                      .HasForeignKey<AutoQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // HomeQuote
            modelBuilder.Entity<HomeQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.HomeQuote)
                      .HasForeignKey<HomeQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
                      
                entity.HasIndex(e => e.PolicyStartDate).HasDatabaseName("IX_HomeQuotes_PolicyStartDate");
            });
            
            // BusinessQuote
            modelBuilder.Entity<BusinessQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.BusinessQuote)
                      .HasForeignKey<BusinessQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
                      
                entity.HasIndex(e => e.BusinessName).HasDatabaseName("IX_BusinessQuotes_BusinessName");
            });
            
            // HealthQuote
            modelBuilder.Entity<HealthQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.HealthQuote)
                      .HasForeignKey<HealthQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // Add other specific quote configurations...
        }
        
        private void ConfigureLookupTables(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContinuousCoverageOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            modelBuilder.Entity<PolicyExpiresInOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            // Add other lookup table configurations...
        }
        
        private void SeedLookupData(ModelBuilder modelBuilder)
        {
            // Seed Continuous Coverage Options
            modelBuilder.Entity<ContinuousCoverageOption>().HasData(
                new ContinuousCoverageOption { Id = 1, Value = "3+ Years", DisplayOrder = 1 },
                new ContinuousCoverageOption { Id = 2, Value = "2 Years", DisplayOrder = 2 },
                new ContinuousCoverageOption { Id = 3, Value = "1 Year", DisplayOrder = 3 },
                new ContinuousCoverageOption { Id = 4, Value = "6 Months", DisplayOrder = 4 },
                new ContinuousCoverageOption { Id = 5, Value = "Under 6 months", DisplayOrder = 5 },
                new ContinuousCoverageOption { Id = 6, Value = "Not Currently Insured", DisplayOrder = 6 }
            );
            
            // Seed Policy Expires In Options
            modelBuilder.Entity<PolicyExpiresInOption>().HasData(
                new PolicyExpiresInOption { Id = 1, Value = "Not sure", DisplayOrder = 1 },
                new PolicyExpiresInOption { Id = 2, Value = "A Few days", DisplayOrder = 2 },
                new PolicyExpiresInOption { Id = 3, Value = "2 weeks", DisplayOrder = 3 },
                new PolicyExpiresInOption { Id = 4, Value = "1 Month", DisplayOrder = 4 },
                new PolicyExpiresInOption { Id = 5, Value = "2 Months", DisplayOrder = 5 },
                new PolicyExpiresInOption { Id = 6, Value = "3 Months", DisplayOrder = 6 },
                new PolicyExpiresInOption { Id = 7, Value = "3-6 Months", DisplayOrder = 7 },
                new PolicyExpiresInOption { Id = 8, Value = "6+ Months", DisplayOrder = 8 }
            );
            
            // Seed Claims In 3 Years Options
            modelBuilder.Entity<ClaimsIn3YearsOption>().HasData(
                new ClaimsIn3YearsOption { Id = 1, Value = "None", DisplayOrder = 1 },
                new ClaimsIn3YearsOption { Id = 2, Value = "1", DisplayOrder = 2 },
                new ClaimsIn3YearsOption { Id = 3, Value = "2", DisplayOrder = 3 },
                new ClaimsIn3YearsOption { Id = 4, Value = "3", DisplayOrder = 4 },
                new ClaimsIn3YearsOption { Id = 5, Value = "4+", DisplayOrder = 5 }
            );
            
            // Seed Tickets In 3 Years Options
            modelBuilder.Entity<TicketsIn3YearsOption>().HasData(
                new TicketsIn3YearsOption { Id = 1, Value = "None", DisplayOrder = 1 },
                new TicketsIn3YearsOption { Id = 2, Value = "1", DisplayOrder = 2 },
                new TicketsIn3YearsOption { Id = 3, Value = "2", DisplayOrder = 3 },
                new TicketsIn3YearsOption { Id = 4, Value = "3", DisplayOrder = 4 },
                new TicketsIn3YearsOption { Id = 5, Value = "4", DisplayOrder = 5 },
                new TicketsIn3YearsOption { Id = 6, Value = "5", DisplayOrder = 6 },
                new TicketsIn3YearsOption { Id = 7, Value = "6+", DisplayOrder = 7 }
            );
            
            // Seed Coverage Desired Options
            modelBuilder.Entity<CoverageDesiredOption>().HasData(
                new CoverageDesiredOption { Id = 1, Value = "State Minimum", DisplayOrder = 1 },
                new CoverageDesiredOption { Id = 2, Value = "Standard Coverage", DisplayOrder = 2 },
                new CoverageDesiredOption { Id = 3, Value = "Premium Coverage", DisplayOrder = 3 }
            );
            
            // Seed Work School Distance Options
            modelBuilder.Entity<WorkSchoolDistanceOption>().HasData(
                new WorkSchoolDistanceOption { Id = 1, Value = "Less than 5 Miles", DisplayOrder = 1 },
                new WorkSchoolDistanceOption { Id = 2, Value = "5 Miles", DisplayOrder = 2 },
                new WorkSchoolDistanceOption { Id = 3, Value = "10 Miles", DisplayOrder = 3 },
                new WorkSchoolDistanceOption { Id = 4, Value = "15 Miles", DisplayOrder = 4 },
                new WorkSchoolDistanceOption { Id = 5, Value = "20 Miles", DisplayOrder = 5 },
                new WorkSchoolDistanceOption { Id = 6, Value = "30 Miles", DisplayOrder = 6 },
                new WorkSchoolDistanceOption { Id = 7, Value = "Over 30 Miles", DisplayOrder = 7 },
                new WorkSchoolDistanceOption { Id = 8, Value = "N/A", DisplayOrder = 8 }
            );
            
            // Seed Watercraft Types
            modelBuilder.Entity<WatercraftType>().HasData(
                new WatercraftType { Id = 1, Value = "Runaboat", DisplayOrder = 1 },
                new WatercraftType { Id = 2, Value = "Bass Boat", DisplayOrder = 2 },
                new WatercraftType { Id = 3, Value = "Cabin Cruiser", DisplayOrder = 3 },
                new WatercraftType { Id = 4, Value = "Pontoon", DisplayOrder = 4 },
                new WatercraftType { Id = 5, Value = "Sail Boat - Single-Hull", DisplayOrder = 5 },
                new WatercraftType { Id = 6, Value = "Sail Boat - Multi-Hull", DisplayOrder = 6 },
                new WatercraftType { Id = 7, Value = "Houseboat", DisplayOrder = 7 },
                new WatercraftType { Id = 8, Value = "Inflatable", DisplayOrder = 8 }
            );
        }
        
        public override int SaveChanges()
        {
            UpdateTimestamps();
            return base.SaveChanges();
        }
        
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            UpdateTimestamps();
            return await base.SaveChangesAsync(cancellationToken);
        }
        
        private void UpdateTimestamps()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => e.Entity is Quote && e.State == EntityState.Modified);
                
            foreach (var entry in entries)
            {
                ((Quote)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }
        }
    }
    
    // =====================================================
    // LOOKUP TABLE MODELS
    // =====================================================
    
    public class ContinuousCoverageOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class PolicyExpiresInOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class ClaimsIn3YearsOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class TicketsIn3YearsOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class CoverageDesiredOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class WorkSchoolDistanceOption
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
    
    public class WatercraftType
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int DisplayOrder { get; set; }
    }
}
