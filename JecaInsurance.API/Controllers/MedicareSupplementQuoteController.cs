using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicareSupplementQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<MedicareSupplementQuoteController> _logger;

        public MedicareSupplementQuoteController(JecaInsuranceDbContext context, ILogger<MedicareSupplementQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/MedicareSupplementQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetMedicareSupplementQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "MedicareSupplement")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "MedicareSupplement")
                    .Include(q => q.MedicareSupplementQuote)
                    .OrderByDescending(q => q.CreatedDate)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();

                return Ok(quotes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving Medicare Supplement quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/MedicareSupplementQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetMedicareSupplementQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareSupplementQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareSupplement");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving Medicare Supplement quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/MedicareSupplementQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateMedicareSupplementQuote(MedicareSupplementQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "MedicareSupplement",
                    QuoteNumber = await GenerateQuoteNumberAsync("MS"),
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    PhoneNumber = request.PhoneNumber,
                    Address = request.Address,
                    City = request.City,
                    State = request.State,
                    ZipCode = request.ZipCode,
                    Country = request.Country ?? "United States",
                    CurrentInsuranceCompany = request.CurrentInsuranceCompany,
                    ContinuousCoverage = request.ContinuousCoverage,
                    PolicyExpiresIn = request.PolicyExpiresIn,
                    ClaimsIn3Years = request.ClaimsIn3Years,
                    TicketsIn3Years = request.TicketsIn3Years,
                    CoverageDesired = request.CoverageDesired,
                    WhenToStart = request.WhenToStart,
                    AdditionalComments = request.AdditionalComments,
                    InformationSecure = request.InformationSecure,
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow,
                    Status = "Active"
                };

                _context.Quotes.Add(quote);

                // Create Medicare Supplement-specific quote
                var medicareSupplementQuote = new MedicareSupplementQuote
                {
                    QuoteId = quote.Id,
                    PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30),
                    DateOfBirth = !string.IsNullOrEmpty(request.DateOfBirth) ? DateTime.Parse(request.DateOfBirth) : DateTime.UtcNow.AddYears(-65)
                };

                _context.MedicareSupplementQuotes.Add(medicareSupplementQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Medicare Supplement quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Medicare Supplement quote created successfully"
                };

                return CreatedAtAction(nameof(GetMedicareSupplementQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating Medicare Supplement quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/MedicareSupplementQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicareSupplementQuote(Guid id, MedicareSupplementQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareSupplementQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareSupplement");

                if (quote == null)
                {
                    return NotFound();
                }

                // Update base quote fields
                quote.FirstName = request.FirstName;
                quote.LastName = request.LastName;
                quote.Email = request.Email;
                quote.PhoneNumber = request.PhoneNumber;
                quote.Address = request.Address;
                quote.City = request.City;
                quote.State = request.State;
                quote.ZipCode = request.ZipCode;
                quote.Country = request.Country ?? quote.Country;
                quote.CurrentInsuranceCompany = request.CurrentInsuranceCompany;
                quote.ContinuousCoverage = request.ContinuousCoverage;
                quote.PolicyExpiresIn = request.PolicyExpiresIn;
                quote.ClaimsIn3Years = request.ClaimsIn3Years;
                quote.TicketsIn3Years = request.TicketsIn3Years;
                quote.CoverageDesired = request.CoverageDesired;
                quote.WhenToStart = request.WhenToStart;
                quote.AdditionalComments = request.AdditionalComments;
                quote.InformationSecure = request.InformationSecure;
                quote.UpdatedDate = DateTime.UtcNow;

                // Update Medicare Supplement-specific fields
                if (quote.MedicareSupplementQuote != null)
                {
                    quote.MedicareSupplementQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.MedicareSupplementQuote.PolicyStartDate;
                    quote.MedicareSupplementQuote.DateOfBirth = !string.IsNullOrEmpty(request.DateOfBirth) ? DateTime.Parse(request.DateOfBirth) : quote.MedicareSupplementQuote.DateOfBirth;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating Medicare Supplement quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/MedicareSupplementQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicareSupplementQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareSupplementQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareSupplement");

                if (quote == null)
                {
                    return NotFound();
                }

                _context.Quotes.Remove(quote);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting Medicare Supplement quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "MedicareSupplement");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class MedicareSupplementQuoteRequest
    {
        // Base quote fields
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? ZipCode { get; set; }
        public string? Country { get; set; }
        public string? CurrentInsuranceCompany { get; set; }
        public string? ContinuousCoverage { get; set; }
        public string? PolicyExpiresIn { get; set; }
        public string? ClaimsIn3Years { get; set; }
        public string? TicketsIn3Years { get; set; }
        public string? CoverageDesired { get; set; }
        public string? WhenToStart { get; set; }
        public string? AdditionalComments { get; set; }
        public bool InformationSecure { get; set; }

        // Medicare Supplement-specific fields
        public string? PolicyStartDate { get; set; }
        public string? DateOfBirth { get; set; }
    }
}
