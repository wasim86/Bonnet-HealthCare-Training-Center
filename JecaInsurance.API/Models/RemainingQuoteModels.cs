using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    // =====================================================
    // PROPERTY INSURANCE QUOTES
    // =====================================================
    
    public class FloodQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Property Information
        [Required]
        [StringLength(100)]
        public string PolicyOwner { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string HomeType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string BuildingPurpose { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string RentingHome { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string FloodClaims { get; set; } = string.Empty;
        
        // Coverage Information
        [Required]
        [StringLength(50)]
        public string DesiredContents { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string DesiredBuilding { get; set; } = string.Empty;
        
        // Additional Information
        public string? Comments { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class RentersQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Property Information
        [Required]
        [StringLength(100)]
        public string TypeOfHome { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string EstimatedSquareFootage { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string TotalNumberOfRooms { get; set; } = string.Empty;
        
        [StringLength(200)]
        public string? DogBreeds { get; set; }
        
        // Property Features (Boolean fields)
        public bool DeadBolts { get; set; }
        public bool FireExtinguishers { get; set; }
        public bool Trampoline { get; set; }
        public bool CoveredDeckPatio { get; set; }
        public bool SwimmingPool { get; set; }
        
        // Policy Information
        [Required]
        [StringLength(50)]
        public string ReplacementValue { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string PersonalLiabilityCoverage { get; set; } = string.Empty;
        
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
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class LandlordsQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(10)]
        public string NumberOfUnits { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string TotalSquareFeet { get; set; } = string.Empty;
        
        public string? Message { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // BUSINESS INSURANCE QUOTES
    // =====================================================
    
    public class BOPQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(200)]
        public string BusinessName { get; set; } = string.Empty;
        
        [Required]
        public string BusinessDescription { get; set; } = string.Empty;
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class WorkersCompQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(200)]
        public string BusinessName { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string NumberOfEmployees { get; set; } = string.Empty;
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // LIFE & SPECIALTY INSURANCE QUOTES
    // =====================================================
    
    public class LifeInsuranceQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Coverage Information
        [Required]
        [StringLength(100)]
        public string CoverageType { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string AmountOfCoverage { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        // Health Information
        [Required]
        public DateTime Birthdate { get; set; }
        
        [Required]
        [StringLength(20)]
        public string Height { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string Weight { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Gender { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string TobaccoUse { get; set; } = string.Empty;
        
        [Required]
        [StringLength(200)]
        public string MajorDiseases { get; set; } = string.Empty;
        
        [Required]
        [StringLength(200)]
        public string StrokeHeartAttack { get; set; } = string.Empty;
        
        [Required]
        [StringLength(200)]
        public string CancerDiagnosis { get; set; } = string.Empty;
        
        [Required]
        [StringLength(200)]
        public string BusinessHobby { get; set; } = string.Empty;
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class UmbrellaInsuranceQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Risk Assessment
        [Required]
        [StringLength(50)]
        public string VehiclesOwned { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string PropertiesOwned { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string HouseholdAccidents { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string AmountOfCoverage { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string TrafficTickets { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class DisabilityInsuranceQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Disability Specific
        [Required]
        [StringLength(200)]
        public string Occupation { get; set; } = string.Empty;
        
        [Required]
        public DateTime Birthdate { get; set; }
        
        [Required]
        [StringLength(100)]
        public string MonthlyIncome { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Gender { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string TobaccoUse { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    // =====================================================
    // MEDICARE & SIMPLE QUOTES
    // =====================================================
    
    public class MedicareAdvantageQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        [Required]
        public DateTime DateOfBirth { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class MedicareSupplementQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        [Required]
        public DateTime DateOfBirth { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class VisionQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(10)]
        public string NumberOfPeople { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
    
    public class AnnuityQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Simple contact form - all data in base Quotes table
        
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
