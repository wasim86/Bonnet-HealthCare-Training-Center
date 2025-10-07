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
        public DbSet<Claim> Claims { get; set; }
        public DbSet<PolicyReview> PolicyReviews { get; set; }
        public DbSet<ContactUpdate> ContactUpdates { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<ProofOfInsurance> ProofOfInsurances { get; set; }
        public DbSet<Consultation> Consultations { get; set; }
        
        // Specific Quote Tables
        public DbSet<AutoQuote> AutoQuotes { get; set; }
        public DbSet<BoatQuote> BoatQuotes { get; set; }
        public DbSet<MotorcycleQuote> MotorcycleQuotes { get; set; }
        public DbSet<HomeQuote> HomeQuotes { get; set; }
        public DbSet<FloodQuote> FloodQuotes { get; set; }
        public DbSet<RentersQuote> RentersQuotes { get; set; }
        public DbSet<LandlordsQuote> LandlordsQuotes { get; set; }
        public DbSet<BusinessQuote> BusinessQuotes { get; set; }
        public DbSet<BOPQuote> BOPQuotes { get; set; }
        public DbSet<WorkersCompQuote> WorkersCompQuotes { get; set; }
        public DbSet<HealthQuote> HealthQuotes { get; set; }
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

            // Configure Claim entity
            modelBuilder.Entity<Claim>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ClaimType).HasDatabaseName("IX_Claims_ClaimType");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_Claims_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_Claims_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_Claims_Status");
                entity.HasIndex(e => e.ClaimNumber).IsUnique().HasDatabaseName("IX_Claims_ClaimNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_Claims_FirstName_LastName");
                entity.HasIndex(e => e.PolicyNumber).HasDatabaseName("IX_Claims_PolicyNumber");
                entity.HasIndex(e => e.InsuranceCarrier).HasDatabaseName("IX_Claims_InsuranceCarrier");
            });

            // Configure PolicyReview entity
            modelBuilder.Entity<PolicyReview>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ReviewMethod).HasDatabaseName("IX_PolicyReviews_ReviewMethod");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_PolicyReviews_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_PolicyReviews_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_PolicyReviews_Status");
                entity.HasIndex(e => e.ReviewNumber).IsUnique().HasDatabaseName("IX_PolicyReviews_ReviewNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_PolicyReviews_FirstName_LastName");
                entity.HasIndex(e => e.ScheduledDate).HasDatabaseName("IX_PolicyReviews_ScheduledDate");
            });

            // Configure ContactUpdate entity
            modelBuilder.Entity<ContactUpdate>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ChangeType).HasDatabaseName("IX_ContactUpdates_ChangeType");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_ContactUpdates_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_ContactUpdates_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_ContactUpdates_Status");
                entity.HasIndex(e => e.UpdateNumber).IsUnique().HasDatabaseName("IX_ContactUpdates_UpdateNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_ContactUpdates_FirstName_LastName");
                entity.HasIndex(e => e.ProcessedDate).HasDatabaseName("IX_ContactUpdates_ProcessedDate");
            });

            // Configure ProofOfInsurance entity
            modelBuilder.Entity<ProofOfInsurance>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ProofType).HasDatabaseName("IX_ProofOfInsurances_ProofType");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_ProofOfInsurances_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_ProofOfInsurances_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_ProofOfInsurances_Status");
                entity.HasIndex(e => e.RequestNumber).IsUnique().HasDatabaseName("IX_ProofOfInsurances_RequestNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_ProofOfInsurances_FirstName_LastName");
                entity.HasIndex(e => e.PolicyNumber).HasDatabaseName("IX_ProofOfInsurances_PolicyNumber");
                entity.HasIndex(e => e.InsuranceCarrier).HasDatabaseName("IX_ProofOfInsurances_InsuranceCarrier");
                entity.HasIndex(e => e.ProcessedDate).HasDatabaseName("IX_ProofOfInsurances_ProcessedDate");
            });

            // Configure Consultation entity
            modelBuilder.Entity<Consultation>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ConsultationType).HasDatabaseName("IX_Consultations_ConsultationType");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_Consultations_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_Consultations_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_Consultations_Status");
                entity.HasIndex(e => e.ConsultationNumber).IsUnique().HasDatabaseName("IX_Consultations_ConsultationNumber");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_Consultations_FirstName_LastName");
                entity.HasIndex(e => e.ScheduledDate).HasDatabaseName("IX_Consultations_ScheduledDate");
                entity.HasIndex(e => e.CompletedDate).HasDatabaseName("IX_Consultations_CompletedDate");
                entity.HasIndex(e => e.AssignedAgent).HasDatabaseName("IX_Consultations_AssignedAgent");
            });

            // Configure ContactMessage entity
            modelBuilder.Entity<ContactMessage>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).HasDefaultValueSql("NEWID()");
                entity.Property(e => e.CreatedDate).HasDefaultValueSql("GETDATE()");
                entity.Property(e => e.UpdatedDate).HasDefaultValueSql("GETDATE()");

                // Indexes
                entity.HasIndex(e => e.ContactNumber).IsUnique().HasDatabaseName("IX_ContactMessages_ContactNumber");
                entity.HasIndex(e => e.Email).HasDatabaseName("IX_ContactMessages_Email");
                entity.HasIndex(e => e.CreatedDate).HasDatabaseName("IX_ContactMessages_CreatedDate");
                entity.HasIndex(e => e.Status).HasDatabaseName("IX_ContactMessages_Status");
                entity.HasIndex(e => new { e.FirstName, e.LastName }).HasDatabaseName("IX_ContactMessages_FirstName_LastName");
                entity.HasIndex(e => e.InquiryType).HasDatabaseName("IX_ContactMessages_InquiryType");
                entity.HasIndex(e => e.ProcessedDate).HasDatabaseName("IX_ContactMessages_ProcessedDate");
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
            
            // BoatQuote
            modelBuilder.Entity<BoatQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.BoatQuote)
                      .HasForeignKey<BoatQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // MotorcycleQuote
            modelBuilder.Entity<MotorcycleQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.MotorcycleQuote)
                      .HasForeignKey<MotorcycleQuote>(e => e.QuoteId)
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
            
            // FloodQuote
            modelBuilder.Entity<FloodQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.FloodQuote)
                      .HasForeignKey<FloodQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // RentersQuote
            modelBuilder.Entity<RentersQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.RentersQuote)
                      .HasForeignKey<RentersQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // LandlordsQuote
            modelBuilder.Entity<LandlordsQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.LandlordsQuote)
                      .HasForeignKey<LandlordsQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
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
            
            // BOPQuote
            modelBuilder.Entity<BOPQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.BOPQuote)
                      .HasForeignKey<BOPQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // WorkersCompQuote
            modelBuilder.Entity<WorkersCompQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.WorkersCompQuote)
                      .HasForeignKey<WorkersCompQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
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
            
            // DentalQuote
            modelBuilder.Entity<DentalQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.DentalQuote)
                      .HasForeignKey<DentalQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // LifeInsuranceQuote
            modelBuilder.Entity<LifeInsuranceQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.LifeInsuranceQuote)
                      .HasForeignKey<LifeInsuranceQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // UmbrellaInsuranceQuote
            modelBuilder.Entity<UmbrellaInsuranceQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.UmbrellaInsuranceQuote)
                      .HasForeignKey<UmbrellaInsuranceQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // DisabilityInsuranceQuote
            modelBuilder.Entity<DisabilityInsuranceQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.DisabilityInsuranceQuote)
                      .HasForeignKey<DisabilityInsuranceQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // MedicareAdvantageQuote
            modelBuilder.Entity<MedicareAdvantageQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.MedicareAdvantageQuote)
                      .HasForeignKey<MedicareAdvantageQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // MedicareSupplementQuote
            modelBuilder.Entity<MedicareSupplementQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.MedicareSupplementQuote)
                      .HasForeignKey<MedicareSupplementQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // VisionQuote
            modelBuilder.Entity<VisionQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.VisionQuote)
                      .HasForeignKey<VisionQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
            
            // AnnuityQuote
            modelBuilder.Entity<AnnuityQuote>(entity =>
            {
                entity.HasKey(e => e.QuoteId);
                entity.HasOne(e => e.Quote)
                      .WithOne(e => e.AnnuityQuote)
                      .HasForeignKey<AnnuityQuote>(e => e.QuoteId)
                      .OnDelete(DeleteBehavior.Cascade);
            });
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
            
            modelBuilder.Entity<ClaimsIn3YearsOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            modelBuilder.Entity<TicketsIn3YearsOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            modelBuilder.Entity<CoverageDesiredOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            modelBuilder.Entity<WorkSchoolDistanceOption>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
            
            modelBuilder.Entity<WatercraftType>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
                entity.HasIndex(e => e.Value).IsUnique();
            });
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
            var quoteEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is Quote && e.State == EntityState.Modified);

            foreach (var entry in quoteEntries)
            {
                ((Quote)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var claimEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is Claim && e.State == EntityState.Modified);

            foreach (var entry in claimEntries)
            {
                ((Claim)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var policyReviewEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is PolicyReview && e.State == EntityState.Modified);

            foreach (var entry in policyReviewEntries)
            {
                ((PolicyReview)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var contactUpdateEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is ContactUpdate && e.State == EntityState.Modified);

            foreach (var entry in contactUpdateEntries)
            {
                ((ContactUpdate)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var proofOfInsuranceEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is ProofOfInsurance && e.State == EntityState.Modified);

            foreach (var entry in proofOfInsuranceEntries)
            {
                ((ProofOfInsurance)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var consultationEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is Consultation && e.State == EntityState.Modified);

            foreach (var entry in consultationEntries)
            {
                ((Consultation)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }

            var contactMessageEntries = ChangeTracker.Entries()
                .Where(e => e.Entity is ContactMessage && e.State == EntityState.Modified);

            foreach (var entry in contactMessageEntries)
            {
                ((ContactMessage)entry.Entity).UpdatedDate = DateTime.UtcNow;
            }
        }
    }
}
