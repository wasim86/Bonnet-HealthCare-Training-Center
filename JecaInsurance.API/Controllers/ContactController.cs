using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;
using System.ComponentModel.DataAnnotations;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/contact")]
    public class ContactController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<ContactController> _logger;

        public ContactController(JecaInsuranceDbContext context, ILogger<ContactController> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Get all contact messages with pagination
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetContactMessages(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? status = null)
        {
            try
            {
                var query = _context.ContactMessages.AsQueryable();

                if (!string.IsNullOrEmpty(status))
                {
                    query = query.Where(cm => cm.Status == status);
                }

                var totalCount = await query.CountAsync();

                var contactMessages = await query
                    .OrderByDescending(cm => cm.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();

                return Ok(contactMessages);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving contact messages");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Get a specific contact message by ID
        /// </summary>
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactMessage>> GetContactMessage(Guid id)
        {
            try
            {
                var contactMessage = await _context.ContactMessages
                    .FirstOrDefaultAsync(cm => cm.Id == id);

                if (contactMessage == null)
                {
                    return NotFound();
                }

                return Ok(contactMessage);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving contact message {ContactMessageId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Submit a new contact message
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<ContactMessage>> CreateContactMessage(ContactMessageRequest request)
        {
            try
            {
                // Create contact message
                var contactMessage = new ContactMessage
                {
                    Id = Guid.NewGuid(),
                    ContactNumber = await GenerateContactNumberAsync(),
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    Subject = request.Subject,
                    Message = request.Message,
                    InquiryType = request.InquiryType,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "New"
                };

                _context.ContactMessages.Add(contactMessage);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Contact message created successfully with ID: {ContactMessageId}", contactMessage.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = contactMessage.Id,
                    contactNumber = contactMessage.ContactNumber,
                    status = contactMessage.Status,
                    message = "Contact message submitted successfully"
                };

                return CreatedAtAction(nameof(GetContactMessage), new { id = contactMessage.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating contact message");
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Update contact message status and notes (admin only)
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContactMessage(Guid id, ContactMessageUpdateRequest request)
        {
            try
            {
                var contactMessage = await _context.ContactMessages.FindAsync(id);
                if (contactMessage == null)
                {
                    return NotFound();
                }

                contactMessage.Status = request.Status;
                contactMessage.ProcessingNotes = request.ProcessingNotes;
                contactMessage.AssignedTo = request.AssignedTo;
                contactMessage.UpdatedDate = DateTime.UtcNow;

                if (request.Status == "Resolved" || request.Status == "Closed")
                {
                    contactMessage.ProcessedDate = DateTime.UtcNow;
                }

                await _context.SaveChangesAsync();

                _logger.LogInformation("Contact message {ContactMessageId} updated successfully", id);

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating contact message {ContactMessageId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        /// <summary>
        /// Generate a unique contact number
        /// </summary>
        private async Task<string> GenerateContactNumberAsync()
        {
            var prefix = "CONT";
            var timestamp = DateTime.UtcNow.ToString("yyyyMMdd");
            var random = new Random();
            
            string contactNumber;
            bool isUnique;
            
            do
            {
                var sequence = random.Next(1000, 9999);
                contactNumber = $"{prefix}-{timestamp}-{sequence}";
                isUnique = !await _context.ContactMessages.AnyAsync(cm => cm.ContactNumber == contactNumber);
            } while (!isUnique);
            
            return contactNumber;
        }
    }

    // DTOs for Contact Message requests
    public class ContactMessageRequest
    {
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
    }

    public class ContactMessageUpdateRequest
    {
        [Required]
        [StringLength(50)]
        public string Status { get; set; } = string.Empty;

        [StringLength(1000)]
        public string? ProcessingNotes { get; set; }

        [StringLength(100)]
        public string? AssignedTo { get; set; }
    }
}
