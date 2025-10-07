using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicareAdvantageQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<MedicareAdvantageQuoteController> _logger;

        public MedicareAdvantageQuoteController(JecaInsuranceDbContext context, ILogger<MedicareAdvantageQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/MedicareAdvantageQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetMedicareAdvantageQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "MedicareAdvantage")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "MedicareAdvantage")
                    .Include(q => q.MedicareAdvantageQuote)
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
                _logger.LogError(ex, "Error retrieving Medicare Advantage quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/MedicareAdvantageQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetMedicareAdvantageQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareAdvantageQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareAdvantage");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving Medicare Advantage quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/MedicareAdvantageQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateMedicareAdvantageQuote(MedicareAdvantageQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "MedicareAdvantage",
                    QuoteNumber = await GenerateQuoteNumberAsync("MA"),
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

                // Create Medicare Advantage-specific quote
                var medicareAdvantageQuote = new MedicareAdvantageQuote
                {
                    QuoteId = quote.Id,
                    PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30),
                    DateOfBirth = !string.IsNullOrEmpty(request.DateOfBirth) ? DateTime.Parse(request.DateOfBirth) : DateTime.UtcNow.AddYears(-65)
                };

                _context.MedicareAdvantageQuotes.Add(medicareAdvantageQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Medicare Advantage quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Medicare Advantage quote created successfully"
                };

                return CreatedAtAction(nameof(GetMedicareAdvantageQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating Medicare Advantage quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/MedicareAdvantageQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedicareAdvantageQuote(Guid id, MedicareAdvantageQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareAdvantageQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareAdvantage");

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

                // Update Medicare Advantage-specific fields
                if (quote.MedicareAdvantageQuote != null)
                {
                    quote.MedicareAdvantageQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.MedicareAdvantageQuote.PolicyStartDate;
                    quote.MedicareAdvantageQuote.DateOfBirth = !string.IsNullOrEmpty(request.DateOfBirth) ? DateTime.Parse(request.DateOfBirth) : quote.MedicareAdvantageQuote.DateOfBirth;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating Medicare Advantage quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/MedicareAdvantageQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicareAdvantageQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.MedicareAdvantageQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "MedicareAdvantage");

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
                _logger.LogError(ex, "Error deleting Medicare Advantage quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "MedicareAdvantage");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class MedicareAdvantageQuoteRequest
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

        // Medicare Advantage-specific fields
        public string? PolicyStartDate { get; set; }
        public string? DateOfBirth { get; set; }
    }
}
