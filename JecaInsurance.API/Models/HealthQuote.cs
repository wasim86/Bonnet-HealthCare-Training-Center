using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Health insurance quote entity for individual and family coverage
    /// </summary>
    public class HealthQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Primary Individual
        [Required]
        [StringLength(10)]
        public string Gender { get; set; } = string.Empty;
        
        [Required]
        public DateTime DateOfBirth { get; set; }
        
        [Required]
        [StringLength(10)]
        public string Smoker { get; set; } = string.Empty;
        
        [Required]
        [StringLength(10)]
        public string Pregnant { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string Dependents { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string AnnualHouseholdIncome { get; set; } = string.Empty;
        
        // Additional Insureds (Spouse)
        [StringLength(100)]
        public string? SpouseFirstName { get; set; }
        
        [StringLength(100)]
        public string? SpouseLastName { get; set; }
        
        [StringLength(10)]
        public string? SpouseGender { get; set; }
        
        public DateTime? SpouseDateOfBirth { get; set; }
        
        [StringLength(10)]
        public string? SpouseSmoker { get; set; }
        
        [StringLength(10)]
        public string? SpousePregnant { get; set; }
        
        // Additional Information
        public string? Message { get; set; }
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
