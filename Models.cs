using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    // =====================================================
    // BASE QUOTE MODEL
    // =====================================================
    
    public class Quote
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        [StringLength(50)]
        public string QuoteType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string QuoteNumber { get; set; } = string.Empty;
        
        // Contact Information
        [Required]
        [StringLength(100)]
        public string FirstName { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string LastName { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        [Phone]
        [StringLength(20)]
        public string PhoneNumber { get; set; } = string.Empty;
        
        [StringLength(255)]
        public string? Address { get; set; }
        
        [StringLength(100)]
        public string? City { get; set; }
        
        [StringLength(50)]
        public string? State { get; set; }
        
        [StringLength(20)]
        public string? ZipCode { get; set; }
        
        [StringLength(100)]
        public string? Country { get; set; }
        
        // Insurance History
        [StringLength(100)]
        public string? CurrentInsuranceCompany { get; set; }
        
        [StringLength(50)]
        public string? ContinuousCoverage { get; set; }
        
        [StringLength(50)]
        public string? PolicyExpiresIn { get; set; }
        
        [StringLength(10)]
        public string? ClaimsIn3Years { get; set; }
        
        [StringLength(10)]
        public string? TicketsIn3Years { get; set; }
        
        [StringLength(50)]
        public string? CoverageDesired { get; set; }
        
        [StringLength(100)]
        public string? WhenToStart { get; set; }
        
        // Common Fields
        public string? AdditionalComments { get; set; }
        
        [Required]
        public bool InformationSecure { get; set; }
        
        // Audit Fields
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedDate { get; set; } = DateTime.UtcNow;
        
        [Required]
        [StringLength(20)]
        public string Status { get; set; } = "Pending";
        
        // Navigation Properties
        public virtual AutoQuote? AutoQuote { get; set; }
        public virtual HomeQuote? HomeQuote { get; set; }
        public virtual BusinessQuote? BusinessQuote { get; set; }
        public virtual HealthQuote? HealthQuote { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
        public virtual ICollection<Driver> Drivers { get; set; } = new List<Driver>();
        public virtual ICollection<FileAttachment> FileAttachments { get; set; } = new List<FileAttachment>();
    }
    
    // =====================================================
    // VEHICLE MODELS
    // =====================================================
    
    public class Vehicle
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(20)]
        public string VehicleType { get; set; } = string.Empty; // Auto, Boat, Motorcycle
        
        public bool IsPrimary { get; set; }
        
        // Common Vehicle Fields
        [Required]
        [StringLength(10)]
        public string Year { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string Make { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string Model { get; set; } = string.Empty;
        
        // Auto/Motorcycle Specific
        [StringLength(10)]
        public string? DriveToWorkSchool { get; set; }
        
        [StringLength(10)]
        public string? IsLeased { get; set; }
        
        [StringLength(50)]
        public string? WorkSchoolDistance { get; set; }
        
        [StringLength(50)]
        public string? CollisionDeductible { get; set; }
        
        [StringLength(50)]
        public string? AnnualMileage { get; set; }
        
        [StringLength(50)]
        public string? ComprehensiveDeductible { get; set; }
        
        [StringLength(10)]
        public string? MoreThanTwoVehicles { get; set; }
        
        // Boat Specific
        [StringLength(100)]
        public string? Manufacturer { get; set; }
        
        [StringLength(50)]
        public string? WatercraftType { get; set; }
        
        [StringLength(20)]
        public string? Length { get; set; }
        
        [StringLength(50)]
        public string? BoatUse { get; set; }
        
        [StringLength(50)]
        public string? MarketValue { get; set; }
        
        [StringLength(10)]
        public string? NumberOfEngines { get; set; }
        
        [StringLength(20)]
        public string? TotalHorsepower { get; set; }
        
        [StringLength(50)]
        public string? EngineType { get; set; }
        
        [StringLength(50)]
        public string? Deductible { get; set; }
        
        [StringLength(50)]
        public string? HullMaterial { get; set; }
        
        [StringLength(10)]
        public string? TrailerCoverage { get; set; }
        
        [StringLength(50)]
        public string? StorageLocation { get; set; }
        
        [StringLength(500)]
        public string? StructuralModifications { get; set; }
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // DRIVER MODELS
    // =====================================================
    
    public class Driver
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(20)]
        public string DriverType { get; set; } = string.Empty; // Auto, Boat, Motorcycle
        
        public bool IsPrimary { get; set; }
        
        // Common Driver Fields
        [Required]
        [StringLength(200)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Gender { get; set; } = string.Empty;
        
        [Required]
        public DateTime DateOfBirth { get; set; }
        
        [Required]
        [StringLength(10)]
        public string Married { get; set; } = string.Empty;
        
        // Auto Driver Specific
        [StringLength(50)]
        public string? Status { get; set; } // Employed, Student, Retired, Other
        
        // Boat Operator Specific
        [StringLength(10)]
        public string? AccidentsTickets { get; set; } // 0, 1, 2, 3, 4+
        
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // SPECIFIC QUOTE MODELS
    // =====================================================
    
    public class AutoQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Auto-specific fields (most data is in Vehicles and Drivers tables)
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class HomeQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Building Information
        [Required]
        [StringLength(100)]
        public string HomeType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string YearBuilt { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string SquareFootage { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string ConstructionType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string PrimaryHeating { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string Foundation { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Bedrooms { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string RoofType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Bathrooms { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string RoofAge { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Stories { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string GarageType { get; set; } = string.Empty;
        
        // Property Features
        public bool DeadBolts { get; set; }
        public bool FireExtinguishers { get; set; }
        public bool Trampoline { get; set; }
        public bool CoveredDeckPatio { get; set; }
        public bool SwimmingPool { get; set; }
        
        // Location & Safety
        [Required]
        [StringLength(100)]
        public string FloodPlan { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string SecuritySystem { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string MunicipalLocation { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string FireAlarm { get; set; } = string.Empty;
        
        [StringLength(200)]
        public string? DogBreeds { get; set; }
        
        // Policy Information
        [Required]
        [StringLength(50)]
        public string ReplacementCost { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string PersonalLiability { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string DesiredDeductible { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string CreditRating { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string ReportedClaims { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string ReplaceExistingPolicy { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // FILE ATTACHMENT MODEL
    // =====================================================
    
    public class FileAttachment
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        
        [Required]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(255)]
        public string FileName { get; set; } = string.Empty;
        
        [Required]
        [StringLength(255)]
        public string OriginalFileName { get; set; } = string.Empty;
        
        [Required]
        public long FileSize { get; set; }
        
        [Required]
        [StringLength(100)]
        public string ContentType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string FileCategory { get; set; } = string.Empty; // DentalRecords, XrayImages, etc.
        
        [Required]
        [StringLength(500)]
        public string StoragePath { get; set; } = string.Empty;
        
        public DateTime UploadedDate { get; set; } = DateTime.UtcNow;
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
