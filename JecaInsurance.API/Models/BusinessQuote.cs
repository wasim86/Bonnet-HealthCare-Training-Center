using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Business insurance quote entity with complex business information
    /// </summary>
    public class BusinessQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Business Information
        [Required]
        [StringLength(200)]
        public string BusinessName { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string YearsInBusiness { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string LegalEntity { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string PartnersOwners { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string FullTimeEmployees { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string PartTimeEmployees { get; set; } = string.Empty;
        
        [Required]
        [StringLength(20)]
        public string SubContractors { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string OneTimeOrSeasonal { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string AnnualRevenue { get; set; } = string.Empty;
        
        [Required]
        [StringLength(50)]
        public string ReplaceExistingPolicy { get; set; } = string.Empty;
        
        [Required]
        public string BusinessDescription { get; set; } = string.Empty;
        
        // Insurance Types (Boolean fields - 17 types)
        public bool GeneralLiability { get; set; }
        public bool CommercialAuto { get; set; }
        public bool CommercialProperty { get; set; }
        public bool CyberLiability { get; set; }
        public bool ProfessionalLiability { get; set; }
        public bool DirectorsOfficersLiability { get; set; }
        public bool BusinessOwnersPackage { get; set; }
        public bool WorkersCompensation { get; set; }
        public bool CommercialCrime { get; set; }
        public bool GroupHealthInsurance { get; set; }
        public bool GroupLifeInsurance { get; set; }
        public bool GroupDisabilityInsurance { get; set; }
        public bool RetirementPlans { get; set; }
        public bool SupplementalPlans { get; set; }
        public bool KeyManLifeInsurance { get; set; }
        public bool KeyManDisabilityInsurance { get; set; }
        public bool DeferredCompensation { get; set; }
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
