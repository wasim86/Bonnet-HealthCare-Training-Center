using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<HealthQuoteController> _logger;

    public HealthQuoteController(JecaInsuranceDbContext context, ILogger<HealthQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all health quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetHealthQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Health")
                .Include(q => q.HealthQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Health");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving health quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific health quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetHealthQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Health")
                .Include(q => q.HealthQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Health quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving health quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new health quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateHealthQuote([FromBody] HealthQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Health",
                QuoteNumber = await GenerateQuoteNumber("HEALTH"),
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

            // Create health-specific quote
            var healthQuote = new HealthQuote
            {
                QuoteId = quote.Id,
                Gender = request.Gender,
                DateOfBirth = DateTime.Parse(request.DateOfBirth),
                Smoker = request.Smoker,
                Pregnant = request.Pregnant,
                Dependents = request.Dependents,
                AnnualHouseholdIncome = request.AnnualHouseholdIncome,
                SpouseFirstName = request.SpouseFirstName,
                SpouseLastName = request.SpouseLastName,
                SpouseGender = request.SpouseGender,
                SpouseDateOfBirth = !string.IsNullOrEmpty(request.SpouseDateOfBirth) ? DateTime.Parse(request.SpouseDateOfBirth) : null,
                SpouseSmoker = request.SpouseSmoker,
                SpousePregnant = request.SpousePregnant,
                Message = request.Message
            };

            _context.Quotes.Add(quote);
            _context.HealthQuotes.Add(healthQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Health quote created successfully with ID: {QuoteId}", quote.Id);

            // Return simple object to avoid circular reference issues
            var response = new
            {
                id = quote.Id,
                quoteNumber = quote.QuoteNumber,
                status = quote.Status,
                message = "Health quote created successfully"
            };

            return CreatedAtAction(nameof(GetHealthQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating health quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing health quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHealthQuote(Guid id, [FromBody] HealthQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.HealthQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Health");

            if (quote == null)
            {
                return NotFound($"Health quote with ID {id} not found");
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

            // Update health-specific fields
            if (quote.HealthQuote != null)
            {
                quote.HealthQuote.Gender = request.Gender;
                quote.HealthQuote.DateOfBirth = DateTime.Parse(request.DateOfBirth);
                quote.HealthQuote.Smoker = request.Smoker;
                quote.HealthQuote.Pregnant = request.Pregnant;
                quote.HealthQuote.Dependents = request.Dependents;
                quote.HealthQuote.AnnualHouseholdIncome = request.AnnualHouseholdIncome;
                quote.HealthQuote.SpouseFirstName = request.SpouseFirstName;
                quote.HealthQuote.SpouseLastName = request.SpouseLastName;
                quote.HealthQuote.SpouseGender = request.SpouseGender;
                quote.HealthQuote.SpouseDateOfBirth = !string.IsNullOrEmpty(request.SpouseDateOfBirth) ? DateTime.Parse(request.SpouseDateOfBirth) : null;
                quote.HealthQuote.SpouseSmoker = request.SpouseSmoker;
                quote.HealthQuote.SpousePregnant = request.SpousePregnant;
                quote.HealthQuote.Message = request.Message;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Health quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating health quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a health quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHealthQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Health");

            if (quote == null)
            {
                return NotFound($"Health quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Health quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting health quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Health");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
    }
}

// Request DTO
public class HealthQuoteRequest
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
    
    // Health-specific fields
    public string Gender { get; set; } = string.Empty;
    public string DateOfBirth { get; set; } = string.Empty;
    public string Smoker { get; set; } = string.Empty;
    public string Pregnant { get; set; } = string.Empty;
    public string Dependents { get; set; } = string.Empty;
    public string AnnualHouseholdIncome { get; set; } = string.Empty;

    // Spouse information
    public string? SpouseFirstName { get; set; }
    public string? SpouseLastName { get; set; }
    public string? SpouseGender { get; set; }
    public string? SpouseDateOfBirth { get; set; }
    public string? SpouseSmoker { get; set; }
    public string? SpousePregnant { get; set; }
    public string? Message { get; set; }
}
