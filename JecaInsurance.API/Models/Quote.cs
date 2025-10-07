using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Base Quote entity representing all insurance quotes
    /// </summary>
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
        
        // Insurance History (from Additional Information Forms)
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
        public virtual BoatQuote? BoatQuote { get; set; }
        public virtual MotorcycleQuote? MotorcycleQuote { get; set; }
        public virtual HomeQuote? HomeQuote { get; set; }
        public virtual FloodQuote? FloodQuote { get; set; }
        public virtual RentersQuote? RentersQuote { get; set; }
        public virtual LandlordsQuote? LandlordsQuote { get; set; }
        public virtual BusinessQuote? BusinessQuote { get; set; }
        public virtual BOPQuote? BOPQuote { get; set; }
        public virtual WorkersCompQuote? WorkersCompQuote { get; set; }
        public virtual HealthQuote? HealthQuote { get; set; }
        public virtual DentalQuote? DentalQuote { get; set; }
        public virtual LifeInsuranceQuote? LifeInsuranceQuote { get; set; }
        public virtual UmbrellaInsuranceQuote? UmbrellaInsuranceQuote { get; set; }
        public virtual DisabilityInsuranceQuote? DisabilityInsuranceQuote { get; set; }
        public virtual MedicareAdvantageQuote? MedicareAdvantageQuote { get; set; }
        public virtual MedicareSupplementQuote? MedicareSupplementQuote { get; set; }
        public virtual VisionQuote? VisionQuote { get; set; }
        public virtual AnnuityQuote? AnnuityQuote { get; set; }
        
        public virtual ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
        public virtual ICollection<Driver> Drivers { get; set; } = new List<Driver>();
    }
}
