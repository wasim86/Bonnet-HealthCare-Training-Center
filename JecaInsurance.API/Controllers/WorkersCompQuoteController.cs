using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WorkersCompQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<WorkersCompQuoteController> _logger;

    public WorkersCompQuoteController(JecaInsuranceDbContext context, ILogger<WorkersCompQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all workers comp quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetWorkersCompQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "WorkersComp")
                .Include(q => q.WorkersCompQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "WorkersComp");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving workers comp quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific workers comp quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetWorkersCompQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "WorkersComp")
                .Include(q => q.WorkersCompQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Workers comp quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving workers comp quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new workers comp quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateWorkersCompQuote([FromBody] WorkersCompQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "WorkersComp",
                QuoteNumber = await GenerateQuoteNumber("WC"),
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

            // Create workers comp-specific quote
            var workersCompQuote = new WorkersCompQuote
            {
                QuoteId = quote.Id,
                BusinessName = request.BusinessName ?? "Business Name",
                NumberOfEmployees = request.NumberOfEmployees ?? "1"
            };

            _context.Quotes.Add(quote);
            _context.WorkersCompQuotes.Add(workersCompQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Workers comp quote created successfully with ID: {QuoteId}", quote.Id);

            // Return simple object to avoid circular reference issues
            var response = new
            {
                id = quote.Id,
                quoteNumber = quote.QuoteNumber,
                status = quote.Status,
                message = "Workers comp quote created successfully"
            };

            return CreatedAtAction(nameof(GetWorkersCompQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating workers comp quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing workers comp quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWorkersCompQuote(Guid id, [FromBody] WorkersCompQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.WorkersCompQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "WorkersComp");

            if (quote == null)
            {
                return NotFound($"Workers comp quote with ID {id} not found");
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

            // Update workers comp-specific fields
            if (quote.WorkersCompQuote != null)
            {
                quote.WorkersCompQuote.BusinessName = request.BusinessName ?? quote.WorkersCompQuote.BusinessName;
                quote.WorkersCompQuote.NumberOfEmployees = request.NumberOfEmployees ?? quote.WorkersCompQuote.NumberOfEmployees;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Workers comp quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating workers comp quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a workers comp quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWorkersCompQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "WorkersComp");

            if (quote == null)
            {
                return NotFound($"Workers comp quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Workers comp quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting workers comp quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "WorkersComp");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTO
public class WorkersCompQuoteRequest
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
    
    // Workers comp-specific fields
    public string? BusinessName { get; set; }
    public string? NumberOfEmployees { get; set; }
}
