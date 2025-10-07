using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;
using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactUpdateController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<ContactUpdateController> _logger;

        public ContactUpdateController(JecaInsuranceDbContext context, ILogger<ContactUpdateController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/ContactUpdate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactUpdate>>> GetContactUpdates(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.ContactUpdates.CountAsync();

                var contactUpdates = await _context.ContactUpdates
                    .OrderByDescending(cu => cu.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();

                return Ok(contactUpdates);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving contact updates");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/ContactUpdate/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactUpdate>> GetContactUpdate(Guid id)
        {
            try
            {
                var contactUpdate = await _context.ContactUpdates
                    .FirstOrDefaultAsync(cu => cu.Id == id);

                if (contactUpdate == null)
                {
                    return NotFound();
                }

                return Ok(contactUpdate);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving contact update {ContactUpdateId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/ContactUpdate
        [HttpPost]
        public async Task<ActionResult<ContactUpdate>> CreateContactUpdate(ContactUpdateRequest request)
        {
            try
            {
                // Create contact update
                var contactUpdate = new ContactUpdate
                {
                    Id = Guid.NewGuid(),
                    UpdateNumber = await GenerateUpdateNumberAsync(),
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    ChangeType = request.ChangeType,
                    ChangeDescription = request.ChangeDescription,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    InformationSecure = request.InformationSecure,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "Requested"
                };

                _context.ContactUpdates.Add(contactUpdate);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Contact update created successfully with ID: {ContactUpdateId}", contactUpdate.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = contactUpdate.Id,
                    updateNumber = contactUpdate.UpdateNumber,
                    status = contactUpdate.Status,
                    message = "Contact update request submitted successfully"
                };

                return CreatedAtAction(nameof(GetContactUpdate), new { id = contactUpdate.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating contact update");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/ContactUpdate/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContactUpdate(Guid id, ContactUpdateUpdateRequest request)
        {
            try
            {
                var contactUpdate = await _context.ContactUpdates.FindAsync(id);
                if (contactUpdate == null)
                {
                    return NotFound();
                }

                // Update contact update properties
                contactUpdate.FirstName = request.FirstName ?? contactUpdate.FirstName;
                contactUpdate.LastName = request.LastName ?? contactUpdate.LastName;
                contactUpdate.ChangeType = request.ChangeType ?? contactUpdate.ChangeType;
                contactUpdate.ChangeDescription = request.ChangeDescription ?? contactUpdate.ChangeDescription;
                contactUpdate.Email = request.Email ?? contactUpdate.Email;
                contactUpdate.PhoneNumber = request.PhoneNumber ?? contactUpdate.PhoneNumber;
                contactUpdate.Status = request.Status ?? contactUpdate.Status;
                contactUpdate.ProcessedDate = request.ProcessedDate ?? contactUpdate.ProcessedDate;
                contactUpdate.ProcessingNotes = request.ProcessingNotes ?? contactUpdate.ProcessingNotes;
                contactUpdate.UpdatedDate = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                _logger.LogInformation("Contact update updated successfully with ID: {ContactUpdateId}", contactUpdate.Id);

                return Ok(new
                {
                    id = contactUpdate.Id,
                    updateNumber = contactUpdate.UpdateNumber,
                    status = contactUpdate.Status,
                    message = "Contact update updated successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating contact update {ContactUpdateId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/ContactUpdate/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactUpdate(Guid id)
        {
            try
            {
                var contactUpdate = await _context.ContactUpdates.FindAsync(id);
                if (contactUpdate == null)
                {
                    return NotFound();
                }

                _context.ContactUpdates.Remove(contactUpdate);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Contact update deleted successfully with ID: {ContactUpdateId}", contactUpdate.Id);

                return Ok(new { message = "Contact update deleted successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting contact update {ContactUpdateId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateUpdateNumberAsync()
        {
            var lastUpdate = await _context.ContactUpdates
                .OrderByDescending(cu => cu.CreatedDate)
                .FirstOrDefaultAsync();

            var nextNumber = 1;
            if (lastUpdate != null && !string.IsNullOrEmpty(lastUpdate.UpdateNumber))
            {
                var lastNumberPart = lastUpdate.UpdateNumber.Substring(2); // Remove "CU" prefix
                if (int.TryParse(lastNumberPart, out var lastNumber))
                {
                    nextNumber = lastNumber + 1;
                }
            }

            return $"CU{nextNumber:D6}"; // Format: CU000001, CU000002, etc.
        }
    }

    // DTOs for ContactUpdate requests
    public class ContactUpdateRequest
    {
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
    }

    public class ContactUpdateUpdateRequest
    {
        [StringLength(100)]
        public string? FirstName { get; set; }

        [StringLength(100)]
        public string? LastName { get; set; }

        [StringLength(50)]
        public string? ChangeType { get; set; }

        [StringLength(2000)]
        public string? ChangeDescription { get; set; }

        [EmailAddress]
        [StringLength(255)]
        public string? Email { get; set; }

        [Phone]
        [StringLength(20)]
        public string? PhoneNumber { get; set; }

        [StringLength(50)]
        public string? Status { get; set; }

        public DateTime? ProcessedDate { get; set; }

        [StringLength(500)]
        public string? ProcessingNotes { get; set; }
    }
}
