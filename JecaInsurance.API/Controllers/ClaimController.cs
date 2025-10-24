using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;
using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/Claim")]
    public class ClaimController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<ClaimController> _logger;

        public ClaimController(JecaInsuranceDbContext context, ILogger<ClaimController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Claim
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Claim>>> GetClaims(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Claims.CountAsync();

                var claims = await _context.Claims
                    .OrderByDescending(c => c.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();

                return Ok(claims);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving claims");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/Claim/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Claim>> GetClaim(Guid id)
        {
            try
            {
                var claim = await _context.Claims
                    .FirstOrDefaultAsync(c => c.Id == id);

                if (claim == null)
                {
                    return NotFound();
                }

                return Ok(claim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving claim {ClaimId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/Claim
        [HttpPost]
        public async Task<ActionResult<Claim>> CreateClaim(ClaimRequest request)
        {
            try
            {
                // Create claim
                var claim = new Claim
                {
                    Id = Guid.NewGuid(),
                    ClaimNumber = await GenerateClaimNumberAsync(),
                    ClaimType = request.ClaimType,
                    IncidentDescription = request.IncidentDescription,
                    InsuranceCarrier = request.InsuranceCarrier,
                    PolicyNumber = request.PolicyNumber,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    AdditionalComments = request.AdditionalComments,
                    InformationSecure = request.InformationSecure,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "Submitted"
                };

                _context.Claims.Add(claim);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Claim created successfully with ID: {ClaimId}", claim.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = claim.Id,
                    claimNumber = claim.ClaimNumber,
                    status = claim.Status,
                    message = "Claim submitted successfully"
                };

                return CreatedAtAction(nameof(GetClaim), new { id = claim.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating claim");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/Claim/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateClaim(Guid id, ClaimUpdateRequest request)
        {
            try
            {
                var claim = await _context.Claims.FindAsync(id);
                if (claim == null)
                {
                    return NotFound();
                }

                // Update claim properties
                claim.ClaimType = request.ClaimType ?? claim.ClaimType;
                claim.IncidentDescription = request.IncidentDescription ?? claim.IncidentDescription;
                claim.InsuranceCarrier = request.InsuranceCarrier ?? claim.InsuranceCarrier;
                claim.PolicyNumber = request.PolicyNumber ?? claim.PolicyNumber;
                claim.FirstName = request.FirstName ?? claim.FirstName;
                claim.LastName = request.LastName ?? claim.LastName;
                claim.Email = request.Email ?? claim.Email;
                claim.PhoneNumber = request.PhoneNumber ?? claim.PhoneNumber;
                claim.AdditionalComments = request.AdditionalComments ?? claim.AdditionalComments;
                claim.Status = request.Status ?? claim.Status;
                claim.UpdatedDate = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                _logger.LogInformation("Claim updated successfully with ID: {ClaimId}", claim.Id);

                return Ok(new
                {
                    id = claim.Id,
                    claimNumber = claim.ClaimNumber,
                    status = claim.Status,
                    message = "Claim updated successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating claim {ClaimId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/Claim/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClaim(Guid id)
        {
            try
            {
                var claim = await _context.Claims.FindAsync(id);
                if (claim == null)
                {
                    return NotFound();
                }

                _context.Claims.Remove(claim);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Claim deleted successfully with ID: {ClaimId}", claim.Id);

                return Ok(new { message = "Claim deleted successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting claim {ClaimId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateClaimNumberAsync()
        {
            var lastClaim = await _context.Claims
                .OrderByDescending(c => c.CreatedDate)
                .FirstOrDefaultAsync();

            var nextNumber = 1;
            if (lastClaim != null && !string.IsNullOrEmpty(lastClaim.ClaimNumber))
            {
                var lastNumberPart = lastClaim.ClaimNumber.Substring(2); // Remove "CL" prefix
                if (int.TryParse(lastNumberPart, out var lastNumber))
                {
                    nextNumber = lastNumber + 1;
                }
            }

            return $"CL{nextNumber:D6}"; // Format: CL000001, CL000002, etc.
        }
    }

    // DTOs for Claim requests
    public class ClaimRequest
    {
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
    }

    public class ClaimUpdateRequest
    {
        [StringLength(100)]
        public string? ClaimType { get; set; }

        [StringLength(2000)]
        public string? IncidentDescription { get; set; }

        [StringLength(100)]
        public string? InsuranceCarrier { get; set; }

        [StringLength(50)]
        public string? PolicyNumber { get; set; }

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

        [StringLength(1000)]
        public string? AdditionalComments { get; set; }

        [StringLength(50)]
        public string? Status { get; set; }
    }
}
