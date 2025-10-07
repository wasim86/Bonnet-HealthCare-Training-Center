using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    public class ContactUpdate
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string UpdateNumber { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string ChangeType { get; set; } = string.Empty;

        [Required]
        [StringLength(2000)]
        public string ChangeDescription { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [Phone]
        [StringLength(20)]
        public string PhoneNumber { get; set; } = string.Empty;

        public bool InformationSecure { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        [StringLength(50)]
        public string Status { get; set; } = "Requested";

        public DateTime? ProcessedDate { get; set; }

        [StringLength(500)]
        public string? ProcessingNotes { get; set; }
    }
}
