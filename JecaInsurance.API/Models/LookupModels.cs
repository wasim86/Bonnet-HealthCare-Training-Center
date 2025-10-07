using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Models
{
    // =====================================================
    // LOOKUP TABLE MODELS FOR DROPDOWN VALUES
    // =====================================================
    
    public class ContinuousCoverageOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class PolicyExpiresInOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class ClaimsIn3YearsOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(10)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class TicketsIn3YearsOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(10)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class CoverageDesiredOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class WorkSchoolDistanceOption
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
    
    public class WatercraftType
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Value { get; set; } = string.Empty;
        
        public int DisplayOrder { get; set; }
    }
}
