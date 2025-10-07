using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FloodQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<FloodQuoteController> _logger;

    public FloodQuoteController(JecaInsuranceDbContext context, ILogger<FloodQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all flood quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetFloodQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Flood")
                .Include(q => q.FloodQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Flood");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving flood quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific flood quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetFloodQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Flood")
                .Include(q => q.FloodQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Flood quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving flood quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new flood quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateFloodQuote([FromBody] FloodQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Flood",
                QuoteNumber = await GenerateQuoteNumber("FLOOD"),
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

            // Create flood-specific quote
            var floodQuote = new FloodQuote
            {
                QuoteId = quote.Id,
                PolicyOwner = request.PolicyOwner ?? "Owner",
                HomeType = request.HomeType ?? "Single Family",
                BuildingPurpose = request.BuildingPurpose ?? "Primary Residence",
                RentingHome = request.RentingHome ?? "No",
                FloodClaims = request.FloodClaims ?? "No",
                DesiredContents = request.DesiredContents ?? "$25,000",
                DesiredBuilding = request.DesiredBuilding ?? "$100,000",
                Comments = request.Comments
            };

            _context.Quotes.Add(quote);
            _context.FloodQuotes.Add(floodQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Flood quote created successfully with ID: {QuoteId}", quote.Id);

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

            return CreatedAtAction(nameof(GetFloodQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating flood quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing flood quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateFloodQuote(Guid id, [FromBody] FloodQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.FloodQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Flood");

            if (quote == null)
            {
                return NotFound($"Flood quote with ID {id} not found");
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

            // Update flood-specific fields
            if (quote.FloodQuote != null)
            {
                quote.FloodQuote.PolicyOwner = request.PolicyOwner ?? quote.FloodQuote.PolicyOwner;
                quote.FloodQuote.HomeType = request.HomeType ?? quote.FloodQuote.HomeType;
                quote.FloodQuote.BuildingPurpose = request.BuildingPurpose ?? quote.FloodQuote.BuildingPurpose;
                quote.FloodQuote.RentingHome = request.RentingHome ?? quote.FloodQuote.RentingHome;
                quote.FloodQuote.FloodClaims = request.FloodClaims ?? quote.FloodQuote.FloodClaims;
                quote.FloodQuote.DesiredContents = request.DesiredContents ?? quote.FloodQuote.DesiredContents;
                quote.FloodQuote.DesiredBuilding = request.DesiredBuilding ?? quote.FloodQuote.DesiredBuilding;
                quote.FloodQuote.Comments = request.Comments;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Flood quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating flood quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a flood quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFloodQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Flood");

            if (quote == null)
            {
                return NotFound($"Flood quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Flood quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting flood quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Flood");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTO
public class FloodQuoteRequest
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
    
    // Flood-specific fields
    public string? PolicyOwner { get; set; }
    public string? HomeType { get; set; }
    public string? BuildingPurpose { get; set; }
    public string? RentingHome { get; set; }
    public string? FloodClaims { get; set; }
    public string? DesiredContents { get; set; }
    public string? DesiredBuilding { get; set; }
    public string? Comments { get; set; }
}
