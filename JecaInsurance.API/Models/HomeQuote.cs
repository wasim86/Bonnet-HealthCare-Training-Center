using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Home insurance quote entity with comprehensive property details
    /// </summary>
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
        
        // Property Features (Boolean fields)
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
}
