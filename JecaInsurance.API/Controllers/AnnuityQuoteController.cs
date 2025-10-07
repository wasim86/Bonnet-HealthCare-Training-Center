using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnnuityQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<AnnuityQuoteController> _logger;

        public AnnuityQuoteController(JecaInsuranceDbContext context, ILogger<AnnuityQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/AnnuityQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetAnnuityQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "Annuity")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "Annuity")
                    .Include(q => q.AnnuityQuote)
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
                _logger.LogError(ex, "Error retrieving annuity quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/AnnuityQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetAnnuityQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.AnnuityQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Annuity");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving annuity quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/AnnuityQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateAnnuityQuote(AnnuityQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "Annuity",
                    QuoteNumber = await GenerateQuoteNumberAsync("ANN"),
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

                // Create annuity-specific quote (minimal fields)
                var annuityQuote = new AnnuityQuote
                {
                    QuoteId = quote.Id
                };

                _context.AnnuityQuotes.Add(annuityQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Annuity quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Annuity quote created successfully"
                };

                return CreatedAtAction(nameof(GetAnnuityQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating annuity quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/AnnuityQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnnuityQuote(Guid id, AnnuityQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.AnnuityQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Annuity");

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

                // Annuity quote has no specific fields to update

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating annuity quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/AnnuityQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnnuityQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.AnnuityQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Annuity");

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
                _logger.LogError(ex, "Error deleting annuity quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Annuity");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class AnnuityQuoteRequest
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

        // No annuity-specific fields - this is a simple contact form
    }
}
