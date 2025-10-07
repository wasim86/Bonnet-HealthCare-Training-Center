using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DentalQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<DentalQuoteController> _logger;

    public DentalQuoteController(JecaInsuranceDbContext context, ILogger<DentalQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all dental quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetDentalQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Dental")
                .Include(q => q.DentalQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Dental");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving dental quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific dental quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetDentalQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Dental")
                .Include(q => q.DentalQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Dental quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving dental quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new dental quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateDentalQuote([FromBody] DentalQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Dental",
                QuoteNumber = await GenerateQuoteNumber("DENTAL"),
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

            // Create dental-specific quote
            var dentalQuote = new DentalQuote
            {
                QuoteId = quote.Id,
                NumberOfPeople = request.NumberOfPeople ?? "1",
                PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : DateTime.UtcNow.AddDays(30),
                DentalRecords = request.DentalRecords,
                XrayImages = request.XrayImages,
                TreatmentHistory = request.TreatmentHistory,
                InsuranceCards = request.InsuranceCards
            };

            _context.Quotes.Add(quote);
            _context.DentalQuotes.Add(dentalQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Dental quote created successfully with ID: {QuoteId}", quote.Id);

            // Return simple object to avoid circular reference issues
            var response = new
            {
                id = quote.Id,
                quoteNumber = quote.QuoteNumber,
                status = quote.Status,
                message = "Dental quote created successfully"
            };

            return CreatedAtAction(nameof(GetDentalQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating dental quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing dental quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateDentalQuote(Guid id, [FromBody] DentalQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.DentalQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Dental");

            if (quote == null)
            {
                return NotFound($"Dental quote with ID {id} not found");
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

            // Update dental-specific fields
            if (quote.DentalQuote != null)
            {
                quote.DentalQuote.NumberOfPeople = request.NumberOfPeople ?? quote.DentalQuote.NumberOfPeople;
                quote.DentalQuote.PolicyStartDate = !string.IsNullOrEmpty(request.PolicyStartDate) ? DateTime.Parse(request.PolicyStartDate) : quote.DentalQuote.PolicyStartDate;
                quote.DentalQuote.DentalRecords = request.DentalRecords;
                quote.DentalQuote.XrayImages = request.XrayImages;
                quote.DentalQuote.TreatmentHistory = request.TreatmentHistory;
                quote.DentalQuote.InsuranceCards = request.InsuranceCards;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Dental quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating dental quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a dental quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDentalQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Dental");

            if (quote == null)
            {
                return NotFound($"Dental quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Dental quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting dental quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Dental");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTO
public class DentalQuoteRequest
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
    
    // Dental-specific fields
    public string? NumberOfPeople { get; set; }
    public string? PolicyStartDate { get; set; }
    public bool DentalRecords { get; set; }
    public bool XrayImages { get; set; }
    public bool TreatmentHistory { get; set; }
    public bool InsuranceCards { get; set; }
}
