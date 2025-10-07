using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultationController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<ConsultationController> _logger;

        public ConsultationController(JecaInsuranceDbContext context, ILogger<ConsultationController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Consultation
        [HttpGet]
        public async Task<ActionResult<ConsultationsResponse>> GetConsultations(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null,
            [FromQuery] string? consultationType = null)
        {
            try
            {
                var query = _context.Consultations.AsQueryable();

                if (!string.IsNullOrEmpty(status))
                {
                    query = query.Where(c => c.Status == status);
                }

                if (!string.IsNullOrEmpty(consultationType))
                {
                    query = query.Where(c => c.ConsultationType == consultationType);
                }

                var totalCount = await query.CountAsync();
                var consultations = await query
                    .OrderByDescending(c => c.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                var response = new ConsultationsResponse
                {
                    Consultations = consultations,
                    TotalCount = totalCount,
                    Page = page,
                    PageSize = pageSize,
                    TotalPages = (int)Math.Ceiling((double)totalCount / pageSize)
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving consultations");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/Consultation/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Consultation>> GetConsultation(Guid id)
        {
            try
            {
                var consultation = await _context.Consultations.FindAsync(id);

                if (consultation == null)
                {
                    return NotFound();
                }

                return Ok(consultation);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving consultation with ID: {ConsultationId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/Consultation
        [HttpPost]
        public async Task<ActionResult<Consultation>> CreateConsultation(ConsultationRequest request)
        {
            try
            {
                // Create consultation
                var consultation = new Consultation
                {
                    Id = Guid.NewGuid(),
                    ConsultationNumber = await GenerateConsultationNumberAsync(),
                    ConsultationType = request.ConsultationType,
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

                _context.Consultations.Add(consultation);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Consultation created successfully with ID: {ConsultationId}", consultation.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = consultation.Id,
                    consultationNumber = consultation.ConsultationNumber,
                    status = consultation.Status,
                    message = "Consultation request submitted successfully"
                };

                return CreatedAtAction(nameof(GetConsultation), new { id = consultation.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating consultation");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/Consultation/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateConsultation(Guid id, ConsultationUpdateRequest request)
        {
            try
            {
                var consultation = await _context.Consultations.FindAsync(id);

                if (consultation == null)
                {
                    return NotFound();
                }

                // Update fields
                consultation.Status = request.Status ?? consultation.Status;
                consultation.Notes = request.Notes ?? consultation.Notes;
                consultation.AssignedAgent = request.AssignedAgent ?? consultation.AssignedAgent;

                if (request.ScheduledDate.HasValue)
                {
                    consultation.ScheduledDate = request.ScheduledDate.Value;
                }

                if (request.Status == "Completed" && consultation.CompletedDate == null)
                {
                    consultation.CompletedDate = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();

                _logger.LogInformation("Consultation updated successfully with ID: {ConsultationId}", id);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating consultation with ID: {ConsultationId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/Consultation/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsultation(Guid id)
        {
            try
            {
                var consultation = await _context.Consultations.FindAsync(id);

                if (consultation == null)
                {
                    return NotFound();
                }

                _context.Consultations.Remove(consultation);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Consultation deleted successfully with ID: {ConsultationId}", id);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting consultation with ID: {ConsultationId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateConsultationNumberAsync()
        {
            var lastConsultation = await _context.Consultations
                .OrderByDescending(c => c.CreatedDate)
                .FirstOrDefaultAsync();

            var nextNumber = 1;
            if (lastConsultation != null && !string.IsNullOrEmpty(lastConsultation.ConsultationNumber))
            {
                var lastNumberPart = lastConsultation.ConsultationNumber.Substring(2); // Remove "CS" prefix
                if (int.TryParse(lastNumberPart, out var lastNumber))
                {
                    nextNumber = lastNumber + 1;
                }
            }

            return $"CS{nextNumber:D6}"; // Format: CS000001, CS000002, etc.
        }
    }

    // DTOs
    public class ConsultationRequest
    {
        public string ConsultationType { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string DiscussionTopics { get; set; } = string.Empty;
        public bool InformationSecure { get; set; }
    }

    public class ConsultationUpdateRequest
    {
        public string? Status { get; set; }
        public string? Notes { get; set; }
        public string? AssignedAgent { get; set; }
        public DateTime? ScheduledDate { get; set; }
    }

    public class ConsultationResponse
    {
        public Guid Id { get; set; }
        public string ConsultationNumber { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
    }

    public class ConsultationsResponse
    {
        public List<Consultation> Consultations { get; set; } = new();
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public int TotalPages { get; set; }
    }
}
