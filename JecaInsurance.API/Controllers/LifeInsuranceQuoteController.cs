using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LifeInsuranceQuoteController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<LifeInsuranceQuoteController> _logger;

        public LifeInsuranceQuoteController(JecaInsuranceDbContext context, ILogger<LifeInsuranceQuoteController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/LifeInsuranceQuote
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quote>>> GetLifeInsuranceQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var totalCount = await _context.Quotes
                    .Where(q => q.QuoteType == "LifeInsurance")
                    .CountAsync();

                var quotes = await _context.Quotes
                    .Where(q => q.QuoteType == "LifeInsurance")
                    .Include(q => q.LifeInsuranceQuote)
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
                _logger.LogError(ex, "Error retrieving life insurance quotes");
                return StatusCode(500, "Internal server error");
            }
        }

        // GET: api/LifeInsuranceQuote/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Quote>> GetLifeInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.LifeInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "LifeInsurance");

                if (quote == null)
                {
                    return NotFound();
                }

                return Ok(quote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving life insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // POST: api/LifeInsuranceQuote
        [HttpPost]
        public async Task<ActionResult<Quote>> CreateLifeInsuranceQuote(LifeInsuranceQuoteRequest request)
        {
            try
            {
                // Create base quote
                var quote = new Quote
                {
                    Id = Guid.NewGuid(),
                    QuoteType = "LifeInsurance",
                    QuoteNumber = await GenerateQuoteNumberAsync("LI"),
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

                // Create life insurance-specific quote
                var lifeInsuranceQuote = new LifeInsuranceQuote
                {
                    QuoteId = quote.Id,
                    CoverageType = request.CoverageType ?? "Term Life",
                    AmountOfCoverage = request.AmountOfCoverage ?? "$250,000",
                    PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30),
                    Birthdate = !string.IsNullOrEmpty(request.Birthdate) ? DateTime.Parse(request.Birthdate) : DateTime.UtcNow.AddYears(-35),
                    Height = request.Height ?? "5'8\"",
                    Weight = request.Weight ?? "160 lbs",
                    Gender = request.Gender ?? "Male",
                    TobaccoUse = request.TobaccoUse ?? "No",
                    MajorDiseases = request.MajorDiseases ?? "No",
                    StrokeHeartAttack = request.StrokeHeartAttack ?? "No",
                    CancerDiagnosis = request.CancerDiagnosis ?? "No",
                    BusinessHobby = request.BusinessHobby ?? "No"
                };

                _context.LifeInsuranceQuotes.Add(lifeInsuranceQuote);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Life insurance quote created successfully with ID: {QuoteId}", quote.Id);

                // Return simple object to avoid circular reference issues
                var response = new
                {
                    id = quote.Id,
                    quoteNumber = quote.QuoteNumber,
                    status = quote.Status,
                    message = "Life insurance quote created successfully"
                };

                return CreatedAtAction(nameof(GetLifeInsuranceQuote), new { id = quote.Id }, response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating life insurance quote");
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT: api/LifeInsuranceQuote/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLifeInsuranceQuote(Guid id, LifeInsuranceQuoteRequest request)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.LifeInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "LifeInsurance");

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

                // Update life insurance-specific fields
                if (quote.LifeInsuranceQuote != null)
                {
                    quote.LifeInsuranceQuote.CoverageType = request.CoverageType ?? quote.LifeInsuranceQuote.CoverageType;
                    quote.LifeInsuranceQuote.AmountOfCoverage = request.AmountOfCoverage ?? quote.LifeInsuranceQuote.AmountOfCoverage;
                    quote.LifeInsuranceQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.LifeInsuranceQuote.PolicyStartDate;
                    quote.LifeInsuranceQuote.Birthdate = !string.IsNullOrEmpty(request.Birthdate) ? DateTime.Parse(request.Birthdate) : quote.LifeInsuranceQuote.Birthdate;
                    quote.LifeInsuranceQuote.Height = request.Height ?? quote.LifeInsuranceQuote.Height;
                    quote.LifeInsuranceQuote.Weight = request.Weight ?? quote.LifeInsuranceQuote.Weight;
                    quote.LifeInsuranceQuote.Gender = request.Gender ?? quote.LifeInsuranceQuote.Gender;
                    quote.LifeInsuranceQuote.TobaccoUse = request.TobaccoUse ?? quote.LifeInsuranceQuote.TobaccoUse;
                    quote.LifeInsuranceQuote.MajorDiseases = request.MajorDiseases ?? quote.LifeInsuranceQuote.MajorDiseases;
                    quote.LifeInsuranceQuote.StrokeHeartAttack = request.StrokeHeartAttack ?? quote.LifeInsuranceQuote.StrokeHeartAttack;
                    quote.LifeInsuranceQuote.CancerDiagnosis = request.CancerDiagnosis ?? quote.LifeInsuranceQuote.CancerDiagnosis;
                    quote.LifeInsuranceQuote.BusinessHobby = request.BusinessHobby ?? quote.LifeInsuranceQuote.BusinessHobby;
                }

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating life insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        // DELETE: api/LifeInsuranceQuote/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLifeInsuranceQuote(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.LifeInsuranceQuote)
                    .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "LifeInsurance");

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
                _logger.LogError(ex, "Error deleting life insurance quote {QuoteId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        private async Task<string> GenerateQuoteNumberAsync(string prefix)
        {
            var count = await _context.Quotes.CountAsync(q => q.QuoteType == "LifeInsurance");
            return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
        }
    }

    public class LifeInsuranceQuoteRequest
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

        // Life insurance-specific fields
        public string? CoverageType { get; set; }
        public string? AmountOfCoverage { get; set; }
        public string? PolicyStartDate { get; set; }
        public string? Birthdate { get; set; }
        public string? Height { get; set; }
        public string? Weight { get; set; }
        public string? Gender { get; set; }
        public string? TobaccoUse { get; set; }
        public string? MajorDiseases { get; set; }
        public string? StrokeHeartAttack { get; set; }
        public string? CancerDiagnosis { get; set; }
        public string? BusinessHobby { get; set; }
    }
}
