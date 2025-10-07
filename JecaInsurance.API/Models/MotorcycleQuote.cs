using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Motorcycle insurance quote entity
    /// Most data is stored in related Vehicle and Driver entities
    /// </summary>
    public class MotorcycleQuote
    {
        [Key]
        public Guid QuoteId { get; set; }
        
        // Motorcycle-specific fields (most data is in Vehicles and Drivers tables)
        // Additional motorcycle-specific fields can be added here as needed
        
        // Navigation Properties
        [ForeignKey("QuoteId")]
        public virtual Quote Quote { get; set; } = null!;
    }
}
