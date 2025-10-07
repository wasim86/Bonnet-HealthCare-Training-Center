using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Vehicle entity for Auto, Boat, and Motorcycle quotes
    /// </summary>
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
        
        // Auto/Motorcycle Specific Fields
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
        
        // Boat Specific Fields
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
        
        [StringLength(20)]
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
}
