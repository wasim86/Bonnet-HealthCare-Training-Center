using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProofOfInsuranceController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<ProofOfInsuranceController> _logger;

        public ProofOfInsuranceController(JecaInsuranceDbContext context, ILogger<ProofOfInsuranceController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/ProofOfInsurance
        [HttpGet]
        public async Task<ActionResult<ProofOfInsurancesResponse>> GetProofOfInsurances(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null,
            [FromQuery] string? proofType = null)
        {
            try
            {
                var query = _context.ProofOfInsurances.AsQueryable();

                if (!string.IsNullOrEmpty(status))
                {
                    query = query.Where(p => p.Status == status);
                }

                if (!string.IsNullOrEmpty(proofType))
                {
                    query = query.Where(p => p.ProofType == proofType);
                }

                var totalCount = await query.CountAsync();
                var proofRequests = await query
                    .OrderByDescending(p => p.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                var response = new ProofOfInsurancesResponse
                {
                    ProofRequests = proofRequests,
                    TotalCount = totalCount,
                    Page = page,
                    PageSize = pageSize,
                    TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving proof of insurance requests");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/ProofOfInsurance/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ProofOfInsurance>> GetProofOfInsurance(Guid id)
        {
            try
            {
                var proofRequest = await _context.ProofOfInsurances.FindAsync(id);

                if (proofRequest == null)
                {
                    return NotFound();
                }

                return Ok(proofRequest);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving proof of insurance request with ID: {ProofRequestId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/ProofOfInsurance
        [HttpPost]
        public async Task<ActionResult<ProofOfInsurance>> CreateProofOfInsurance(ProofOfInsuranceRequest request)
        {
            try
            {
                // Create proof of insurance request
                var proofRequest = new ProofOfInsurance
                {
                    Id = Guid.NewGuid(),
                    RequestNumber = await GenerateRequestNumberAsync(),
                    ProofType = request.ProofType,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    InsuranceCarrier = request.InsuranceCarrier,
                    PolicyNumber = request.PolicyNumber,
                    RequestDescription = request.RequestDescription,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    InformationSecure = request.InformationSecure,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "Requested"
                };

                _context.ProofOfInsurances.Add(proofRequest);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Proof of insurance request created successfully with ID: {ProofRequestId}", proofRequest.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = proofRequest.Id,
                    requestNumber = proofRequest.RequestNumber,
                    status = proofRequest.Status,
                    message = "Proof of insurance request submitted successfully"
                };

                return CreatedAtAction(nameof(GetProofOfInsurance), new { id = proofRequest.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating proof of insurance request");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/ProofOfInsurance/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProofOfInsurance(Guid id, ProofOfInsuranceUpdateRequest request)
        {
            try
            {
                var proofRequest = await _context.ProofOfInsurances.FindAsync(id);

                if (proofRequest == null)
                {
                    return NotFound();
                }

                // Update fields
                proofRequest.Status = request.Status ?? proofRequest.Status;
                proofRequest.ProcessingNotes = request.ProcessingNotes ?? proofRequest.ProcessingNotes;
                proofRequest.DocumentPath = request.DocumentPath ?? proofRequest.DocumentPath;

                if (request.Status == "Processed" && proofRequest.ProcessedDate == null)
                {
                    proofRequest.ProcessedDate = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();

                _logger.LogInformation("Proof of insurance request updated successfully with ID: {ProofRequestId}", id);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating proof of insurance request with ID: {ProofRequestId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/ProofOfInsurance/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProofOfInsurance(Guid id)
        {
            try
            {
                var proofRequest = await _context.ProofOfInsurances.FindAsync(id);

                if (proofRequest == null)
                {
                    return NotFound();
                }

                _context.ProofOfInsurances.Remove(proofRequest);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Proof of insurance request deleted successfully with ID: {ProofRequestId}", id);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting proof of insurance request with ID: {ProofRequestId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateRequestNumberAsync()
        {
            var lastRequest = await _context.ProofOfInsurances
                .OrderByDescending(p => p.CreatedDate)
                .FirstOrDefaultAsync();

            var nextNumber = 1;
            if (lastRequest != null && !string.IsNullOrEmpty(lastRequest.RequestNumber))
            {
                var lastNumberPart = lastRequest.RequestNumber.Substring(2); // Remove "PI" prefix
                if (int.TryParse(lastNumberPart, out var lastNumber))
                {
                    nextNumber = lastNumber + 1;
                }
            }

            return $"PI{nextNumber:D6}"; // Format: PI000001, PI000002, etc.
        }
    }

    // DTOs
    public class ProofOfInsuranceRequest
    {
        public string ProofType { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string InsuranceCarrier { get; set; } = string.Empty;
        public string PolicyNumber { get; set; } = string.Empty;
        public string RequestDescription { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public bool InformationSecure { get; set; }
    }

    public class ProofOfInsuranceUpdateRequest
    {
        public string? Status { get; set; }
        public string? ProcessingNotes { get; set; }
        public string? DocumentPath { get; set; }
    }

    public class ProofOfInsuranceResponse
    {
        public Guid Id { get; set; }
        public string RequestNumber { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }

    public class ProofOfInsurancesResponse
    {
        public List<ProofOfInsurance> ProofRequests { get; set; } = new();
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
    }
}
