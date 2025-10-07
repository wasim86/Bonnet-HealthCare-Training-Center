using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    public class PolicyReview
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string ReviewNumber { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string ReviewMethod { get; set; } = string.Empty;

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

        [StringLength(2000)]
        public string? DiscussionTopics { get; set; }

        public bool InformationSecure { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        [StringLength(50)]
        public string Status { get; set; } = "Requested";

        public DateTime? ScheduledDate { get; set; }

        [StringLength(500)]
        public string? Notes { get; set; }
    }
}
