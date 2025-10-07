using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UmbrellaInsuranceQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<UmbrellaInsuranceQuoteController> _logger;

        public UmbrellaInsuranceQuoteController(JecaInsuranceDbContext context, ILogger<UmbrellaInsuranceQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/UmbrellaInsuranceQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetUmbrellaInsuranceQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "UmbrellaInsurance")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "UmbrellaInsurance")
                    .Include(q => q.UmbrellaInsuranceQuote)
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
                _logger.LogError(ex, "Error retrieving umbrella insurance quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/UmbrellaInsuranceQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetUmbrellaInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.UmbrellaInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "UmbrellaInsurance");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving umbrella insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/UmbrellaInsuranceQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateUmbrellaInsuranceQuote(UmbrellaInsuranceQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "UmbrellaInsurance",
                    QuoteNumber = await GenerateQuoteNumberAsync("UI"),
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

                // Create umbrella insurance-specific quote
                var umbrellaInsuranceQuote = new UmbrellaInsuranceQuote
                {
                    QuoteId = quote.Id,
                    VehiclesOwned = request.VehiclesOwned ?? "1-2",
                    PropertiesOwned = request.PropertiesOwned ?? "1",
                    HouseholdAccidents = request.HouseholdAccidents ?? "No",
                    AmountOfCoverage = request.AmountOfCoverage ?? "$1,000,000",
                    TrafficTickets = request.TrafficTickets ?? "No",
                    PolicyStartDate = request.PolicyStartDate ?? DateTime.UtcNow.AddDays(30)
                };

                _context.UmbrellaInsuranceQuotes.Add(umbrellaInsuranceQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Umbrella insurance quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Umbrella insurance quote created successfully"
                };

                return CreatedAtAction(nameof(GetUmbrellaInsuranceQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating umbrella insurance quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/UmbrellaInsuranceQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUmbrellaInsuranceQuote(Guid id, UmbrellaInsuranceQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.UmbrellaInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "UmbrellaInsurance");

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

                // Update umbrella insurance-specific fields
                if (quote.UmbrellaInsuranceQuote != null)
                {
                    quote.UmbrellaInsuranceQuote.VehiclesOwned = request.VehiclesOwned ?? quote.UmbrellaInsuranceQuote.VehiclesOwned;
                    quote.UmbrellaInsuranceQuote.PropertiesOwned = request.PropertiesOwned ?? quote.UmbrellaInsuranceQuote.PropertiesOwned;
                    quote.UmbrellaInsuranceQuote.HouseholdAccidents = request.HouseholdAccidents ?? quote.UmbrellaInsuranceQuote.HouseholdAccidents;
                    quote.UmbrellaInsuranceQuote.AmountOfCoverage = request.AmountOfCoverage ?? quote.UmbrellaInsuranceQuote.AmountOfCoverage;
                    quote.UmbrellaInsuranceQuote.TrafficTickets = request.TrafficTickets ?? quote.UmbrellaInsuranceQuote.TrafficTickets;
                    quote.UmbrellaInsuranceQuote.PolicyStartDate = request.PolicyStartDate ?? quote.UmbrellaInsuranceQuote.PolicyStartDate;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating umbrella insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/UmbrellaInsuranceQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUmbrellaInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.UmbrellaInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "UmbrellaInsurance");

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
                _logger.LogError(ex, "Error deleting umbrella insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "UmbrellaInsurance");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class UmbrellaInsuranceQuoteRequest
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

        // Umbrella insurance-specific fields
        public string? VehiclesOwned { get; set; }
        public string? PropertiesOwned { get; set; }
        public string? HouseholdAccidents { get; set; }
        public string? AmountOfCoverage { get; set; }
        public string? TrafficTickets { get; set; }
        public DateTime? PolicyStartDate { get; set; }
    }
}
