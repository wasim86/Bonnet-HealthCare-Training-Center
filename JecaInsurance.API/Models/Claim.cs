using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JecaInsurance.API.Models
{
    public class Claim
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(100)]
        public string ClaimNumber { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string ClaimType { get; set; } = string.Empty;

        [Required]
        [StringLength(2000)]
        public string IncidentDescription { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string InsuranceCarrier { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string PolicyNumber { get; set; } = string.Empty;

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

        [StringLength(1000)]
        public string? AdditionalComments { get; set; }

        public bool InformationSecure { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        [StringLength(50)]
        public string Status { get; set; } = "Submitted";
    }
}
