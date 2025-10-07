using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisionQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<VisionQuoteController> _logger;

        public VisionQuoteController(JecaInsuranceDbContext context, ILogger<VisionQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/VisionQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetVisionQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "Vision")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "Vision")
                    .Include(q => q.VisionQuote)
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
                _logger.LogError(ex, "Error retrieving vision quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/VisionQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetVisionQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.VisionQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Vision");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving vision quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/VisionQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateVisionQuote(VisionQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "Vision",
                    QuoteNumber = await GenerateQuoteNumberAsync("VIS"),
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

                // Create vision-specific quote
                var visionQuote = new VisionQuote
                {
                    QuoteId = quote.Id,
                    NumberOfPeople = request.NumberOfPeople ?? "1",
                    PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30)
                };

                _context.VisionQuotes.Add(visionQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Vision quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Vision quote created successfully"
                };

                return CreatedAtAction(nameof(GetVisionQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating vision quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/VisionQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVisionQuote(Guid id, VisionQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.VisionQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Vision");

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

                // Update vision-specific fields
                if (quote.VisionQuote != null)
                {
                    quote.VisionQuote.NumberOfPeople = request.NumberOfPeople ?? quote.VisionQuote.NumberOfPeople;
                    quote.VisionQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.VisionQuote.PolicyStartDate;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating vision quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/VisionQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVisionQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.VisionQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Vision");

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
                _logger.LogError(ex, "Error deleting vision quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Vision");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class VisionQuoteRequest
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

        // Vision-specific fields
        public string? NumberOfPeople { get; set; }
        public string? PolicyStartDate { get; set; }
    }
}
