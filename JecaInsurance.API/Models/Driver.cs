using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Driver/Operator entity for Auto, Boat, and Motorcycle quotes
    /// </summary>
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
}
