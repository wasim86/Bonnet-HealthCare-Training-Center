using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DisabilityInsuranceQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<DisabilityInsuranceQuoteController> _logger;

        public DisabilityInsuranceQuoteController(JecaInsuranceDbContext context, ILogger<DisabilityInsuranceQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/DisabilityInsuranceQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetDisabilityInsuranceQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "DisabilityInsurance")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "DisabilityInsurance")
                    .Include(q => q.DisabilityInsuranceQuote)
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
                _logger.LogError(ex, "Error retrieving disability insurance quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/DisabilityInsuranceQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetDisabilityInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.DisabilityInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "DisabilityInsurance");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving disability insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/DisabilityInsuranceQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateDisabilityInsuranceQuote(DisabilityInsuranceQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "DisabilityInsurance",
                    QuoteNumber = await GenerateQuoteNumberAsync("DI"),
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

                // Create disability insurance-specific quote
                var disabilityInsuranceQuote = new DisabilityInsuranceQuote
                {
                    QuoteId = quote.Id,
                    Occupation = request.Occupation ?? "Professional",
                    Birthdate = !string.IsNullOrEmpty(request.Birthdate) ? DateTime.Parse(request.Birthdate) : DateTime.UtcNow.AddYears(-35),
                    MonthlyIncome = request.MonthlyIncome ?? "$5,000",
                    Gender = request.Gender ?? "Male",
                    TobaccoUse = request.TobaccoUse ?? "No",
                    PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30)
                };

                _context.DisabilityInsuranceQuotes.Add(disabilityInsuranceQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Disability insurance quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Disability insurance quote created successfully"
                };

                return CreatedAtAction(nameof(GetDisabilityInsuranceQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating disability insurance quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/DisabilityInsuranceQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDisabilityInsuranceQuote(Guid id, DisabilityInsuranceQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.DisabilityInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "DisabilityInsurance");

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

                // Update disability insurance-specific fields
                if (quote.DisabilityInsuranceQuote != null)
                {
                    quote.DisabilityInsuranceQuote.Occupation = request.Occupation ?? quote.DisabilityInsuranceQuote.Occupation;
                    quote.DisabilityInsuranceQuote.Birthdate = !string.IsNullOrEmpty(request.Birthdate) ? DateTime.Parse(request.Birthdate) : quote.DisabilityInsuranceQuote.Birthdate;
                    quote.DisabilityInsuranceQuote.MonthlyIncome = request.MonthlyIncome ?? quote.DisabilityInsuranceQuote.MonthlyIncome;
                    quote.DisabilityInsuranceQuote.Gender = request.Gender ?? quote.DisabilityInsuranceQuote.Gender;
                    quote.DisabilityInsuranceQuote.TobaccoUse = request.TobaccoUse ?? quote.DisabilityInsuranceQuote.TobaccoUse;
                    quote.DisabilityInsuranceQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.DisabilityInsuranceQuote.PolicyStartDate;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating disability insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/DisabilityInsuranceQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDisabilityInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.DisabilityInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "DisabilityInsurance");

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
                _logger.LogError(ex, "Error deleting disability insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "DisabilityInsurance");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class DisabilityInsuranceQuoteRequest
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

        // Disability insurance-specific fields
        public string? Occupation { get; set; }
        public string? Birthdate { get; set; }
        public string? MonthlyIncome { get; set; }
        public string? Gender { get; set; }
        public string? TobaccoUse { get; set; }
        public string? PolicyStartDate { get; set; }
    }
}
