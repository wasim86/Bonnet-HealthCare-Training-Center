using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;
using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PolicyReviewController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<PolicyReviewController> _logger;

        public PolicyReviewController(JecaInsuranceDbContext context, ILogger<PolicyReviewController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/PolicyReview
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PolicyReview>>> GetPolicyReviews(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.PolicyReviews.CountAsync();

                var policyReviews = await _context.PolicyReviews
                    .OrderByDescending(pr => pr.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();

                return Ok(policyReviews);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving policy reviews");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/PolicyReview/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<PolicyReview>> GetPolicyReview(Guid id)
        {
            try
            {
                var policyReview = await _context.PolicyReviews
                    .FirstOrDefaultAsync(pr => pr.Id == id);

                if (policyReview == null)
                {
                    return NotFound();
                }

                return Ok(policyReview);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving policy review {PolicyReviewId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/PolicyReview
        [HttpPost]
        public async Task<ActionResult<PolicyReview>> CreatePolicyReview(PolicyReviewRequest request)
        {
            try
            {
                // Create policy review
                var policyReview = new PolicyReview
                {
                    Id = Guid.NewGuid(),
                    ReviewNumber = await GenerateReviewNumberAsync(),
                    ReviewMethod = request.ReviewMethod,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    DiscussionTopics = request.DiscussionTopics,
                    InformationSecure = request.InformationSecure,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "Requested"
                };

                _context.PolicyReviews.Add(policyReview);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Policy review created successfully with ID: {PolicyReviewId}", policyReview.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = policyReview.Id,
                    reviewNumber = policyReview.ReviewNumber,
                    status = policyReview.Status,
                    message = "Policy review request submitted successfully"
                };

                return CreatedAtAction(nameof(GetPolicyReview), new { id = policyReview.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating policy review");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/PolicyReview/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePolicyReview(Guid id, PolicyReviewUpdateRequest request)
        {
            try
            {
                var policyReview = await _context.PolicyReviews.FindAsync(id);
                if (policyReview == null)
                {
                    return NotFound();
                }

                // Update policy review properties
                policyReview.ReviewMethod = request.ReviewMethod ?? policyReview.ReviewMethod;
                policyReview.FirstName = request.FirstName ?? policyReview.FirstName;
                policyReview.LastName = request.LastName ?? policyReview.LastName;
                policyReview.Email = request.Email ?? policyReview.Email;
                policyReview.PhoneNumber = request.PhoneNumber ?? policyReview.PhoneNumber;
                policyReview.DiscussionTopics = request.DiscussionTopics ?? policyReview.DiscussionTopics;
                policyReview.Status = request.Status ?? policyReview.Status;
                policyReview.ScheduledDate = request.ScheduledDate ?? policyReview.ScheduledDate;
                policyReview.Notes = request.Notes ?? policyReview.Notes;
                policyReview.UpdatedDate = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                _logger.LogInformation("Policy review updated successfully with ID: {PolicyReviewId}", policyReview.Id);

                return Ok(new
                {
                    id = policyReview.Id,
                    reviewNumber = policyReview.ReviewNumber,
                    status = policyReview.Status,
                    message = "Policy review updated successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating policy review {PolicyReviewId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/PolicyReview/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePolicyReview(Guid id)
        {
            try
            {
                var policyReview = await _context.PolicyReviews.FindAsync(id);
                if (policyReview == null)
                {
                    return NotFound();
                }

                _context.PolicyReviews.Remove(policyReview);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Policy review deleted successfully with ID: {PolicyReviewId}", policyReview.Id);

                return Ok(new { message = "Policy review deleted successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting policy review {PolicyReviewId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateReviewNumberAsync()
        {
            var lastReview = await _context.PolicyReviews
                .OrderByDescending(pr => pr.CreatedDate)
                .FirstOrDefaultAsync();

            var nextNumber = 1;
            if (lastReview != null && !string.IsNullOrEmpty(lastReview.ReviewNumber))
            {
                var lastNumberPart = lastReview.ReviewNumber.Substring(2); // Remove "PR" prefix
                if (int.TryParse(lastNumberPart, out var lastNumber))
                {
                    nextNumber = lastNumber + 1;
                }
            }

            return $"PR{nextNumber:D6}"; // Format: PR000001, PR000002, etc.
        }
    }

    // DTOs for PolicyReview requests
    public class PolicyReviewRequest
    {
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
    }

    public class PolicyReviewUpdateRequest
    {
        [StringLength(50)]
        public string? ReviewMethod { get; set; }

        [StringLength(100)]
        public string? FirstName { get; set; }

        [StringLength(100)]
        public string? LastName { get; set; }

        [EmailAddress]
        [StringLength(255)]
        public string? Email { get; set; }

        [Phone]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }

        [StringLength(2000)]
        public string? DiscussionTopics { get; set; }

        [StringLength(50)]
        public string? Status { get; set; }

        public DateTime? ScheduledDate { get; set; }

        [StringLength(500)]
        public string? Notes { get; set; }
    }
}
