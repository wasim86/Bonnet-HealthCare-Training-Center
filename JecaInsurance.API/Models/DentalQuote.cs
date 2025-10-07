using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Dental insurance quote entity - ONLY form with file attachments
    /// </summary>
    public class DentalQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        [Required]
        [StringLength(10)]
        public string NumberOfPeople { get; set; } = string.Empty;
        
        [Required]
        public DateTime PolicyStartDate { get; set; }
        
        // Record Types Needed (boolean flags)
        public bool DentalRecords { get; set; }
        public bool XrayImages { get; set; }
        public bool TreatmentHistory { get; set; }
        public bool InsuranceCards { get; set; }
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
