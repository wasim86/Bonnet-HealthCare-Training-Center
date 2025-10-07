using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Models
{
    /// <summary>
    /// Contact message entity for general inquiries from the contact form
    /// </summary>
    public class ContactMessage
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [StringLength(100)]
        public string ContactNumber { get; set; } = string.Empty;

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

        [Phone]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }

        [Required]
        [StringLength(200)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;

        [StringLength(50)]
        public string? InquiryType { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedDate { get; set; } = DateTime.UtcNow;

        [StringLength(50)]
        public string Status { get; set; } = "New";

        public DateTime? ProcessedDate { get; set; }

        [StringLength(1000)]
        public string? ProcessingNotes { get; set; }

        [StringLength(100)]
        public string? AssignedTo { get; set; }
    }
}
