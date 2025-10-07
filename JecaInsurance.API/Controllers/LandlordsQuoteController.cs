using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LandlordsQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<LandlordsQuoteController> _logger;

    public LandlordsQuoteController(JecaInsuranceDbContext context, ILogger<LandlordsQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all landlords quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetLandlordsQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Landlords")
                .Include(q => q.LandlordsQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Landlords");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving landlords quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific landlords quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetLandlordsQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Landlords")
                .Include(q => q.LandlordsQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Landlords quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving landlords quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new landlords quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateLandlordsQuote([FromBody] LandlordsQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Landlords",
                QuoteNumber = await GenerateQuoteNumber("LAND"),
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                Address = request.Address,
                City = request.City,
                State = request.State,
                ZipCode = request.ZipCode,
                Country = request.Country ?? "USA",
                CurrentInsuranceCompany = request.CurrentInsuranceCompany,
                ContinuousCoverage = request.ContinuousCoverage,
                PolicyExpiresIn = request.PolicyExpiresIn,
                ClaimsIn3Years = request.ClaimsIn3Years,
                TicketsIn3Years = request.TicketsIn3Years,
                CoverageDesired = request.CoverageDesired,
                WhenToStart = request.WhenToStart,
                AdditionalComments = request.AdditionalComments,
                InformationSecure = request.InformationSecure,
                Status = "New",
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow
            };

            // Create landlords-specific quote
            var landlordsQuote = new LandlordsQuote
            {
                QuoteId = quote.Id,
                NumberOfUnits = request.NumberOfUnits ?? "1",
                TotalSquareFeet = request.TotalSquareFeet ?? "1000",
                Message = request.Message
            };

            _context.Quotes.Add(quote);
            _context.LandlordsQuotes.Add(landlordsQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Landlords quote created successfully with ID: {QuoteId}", quote.Id);

            // Return a simple response to avoid circular reference issues
            var response = new
            {
                id = quote.Id,
                quoteNumber = quote.QuoteNumber,
                quoteType = quote.QuoteType,
                firstName = quote.FirstName,
                lastName = quote.LastName,
                email = quote.Email,
                status = quote.Status,
                createdDate = quote.CreatedDate
            };

            return CreatedAtAction(nameof(GetLandlordsQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating landlords quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing landlords quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateLandlordsQuote(Guid id, [FromBody] LandlordsQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.LandlordsQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Landlords");

            if (quote == null)
            {
                return NotFound($"Landlords quote with ID {id} not found");
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

            // Update landlords-specific fields
            if (quote.LandlordsQuote != null)
            {
                quote.LandlordsQuote.NumberOfUnits = request.NumberOfUnits ?? quote.LandlordsQuote.NumberOfUnits;
                quote.LandlordsQuote.TotalSquareFeet = request.TotalSquareFeet ?? quote.LandlordsQuote.TotalSquareFeet;
                quote.LandlordsQuote.Message = request.Message;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Landlords quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating landlords quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a landlords quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteLandlordsQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Landlords");

            if (quote == null)
            {
                return NotFound($"Landlords quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Landlords quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting landlords quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Landlords");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTO
public class LandlordsQuoteRequest
{
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
    
    // Landlords-specific fields
    public string? NumberOfUnits { get; set; }
    public string? TotalSquareFeet { get; set; }
    public string? Message { get; set; }
}
