using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RentersQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<RentersQuoteController> _logger;

    public RentersQuoteController(JecaInsuranceDbContext context, ILogger<RentersQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all renters quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetRentersQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Renters")
                .Include(q => q.RentersQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Renters");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving renters quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific renters quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetRentersQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Renters")
                .Include(q => q.RentersQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Renters quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving renters quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new renters quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateRentersQuote([FromBody] RentersQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Renters",
                QuoteNumber = await GenerateQuoteNumber("RENT"),
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

            // Create renters-specific quote
            var rentersQuote = new RentersQuote
            {
                QuoteId = quote.Id,
                TypeOfHome = request.TypeOfHome ?? "Apartment",
                EstimatedSquareFootage = request.EstimatedSquareFootage ?? "1000",
                TotalNumberOfRooms = request.TotalNumberOfRooms ?? "3",
                DogBreeds = request.DogBreeds,
                DeadBolts = request.DeadBolts,
                FireExtinguishers = request.FireExtinguishers,
                Trampoline = request.Trampoline,
                CoveredDeckPatio = request.CoveredDeckPatio,
                SwimmingPool = request.SwimmingPool,
                ReplacementValue = request.ReplacementValue ?? "$25,000",
                PersonalLiabilityCoverage = request.PersonalLiabilityCoverage ?? "$100,000",
                DesiredDeductible = request.DesiredDeductible ?? "$500",
                CreditRating = request.CreditRating ?? "Good",
                ReportedClaims = request.ReportedClaims ?? "No",
                ReplaceExistingPolicy = request.ReplaceExistingPolicy ?? "No"
            };

            _context.Quotes.Add(quote);
            _context.RentersQuotes.Add(rentersQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Renters quote created successfully with ID: {QuoteId}", quote.Id);

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

            return CreatedAtAction(nameof(GetRentersQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating renters quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing renters quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateRentersQuote(Guid id, [FromBody] RentersQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.RentersQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Renters");

            if (quote == null)
            {
                return NotFound($"Renters quote with ID {id} not found");
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

            // Update renters-specific fields
            if (quote.RentersQuote != null)
            {
                quote.RentersQuote.TypeOfHome = request.TypeOfHome ?? quote.RentersQuote.TypeOfHome;
                quote.RentersQuote.EstimatedSquareFootage = request.EstimatedSquareFootage ?? quote.RentersQuote.EstimatedSquareFootage;
                quote.RentersQuote.TotalNumberOfRooms = request.TotalNumberOfRooms ?? quote.RentersQuote.TotalNumberOfRooms;
                quote.RentersQuote.DogBreeds = request.DogBreeds;
                quote.RentersQuote.DeadBolts = request.DeadBolts;
                quote.RentersQuote.FireExtinguishers = request.FireExtinguishers;
                quote.RentersQuote.Trampoline = request.Trampoline;
                quote.RentersQuote.CoveredDeckPatio = request.CoveredDeckPatio;
                quote.RentersQuote.SwimmingPool = request.SwimmingPool;
                quote.RentersQuote.ReplacementValue = request.ReplacementValue ?? quote.RentersQuote.ReplacementValue;
                quote.RentersQuote.PersonalLiabilityCoverage = request.PersonalLiabilityCoverage ?? quote.RentersQuote.PersonalLiabilityCoverage;
                quote.RentersQuote.DesiredDeductible = request.DesiredDeductible ?? quote.RentersQuote.DesiredDeductible;
                quote.RentersQuote.CreditRating = request.CreditRating ?? quote.RentersQuote.CreditRating;
                quote.RentersQuote.ReportedClaims = request.ReportedClaims ?? quote.RentersQuote.ReportedClaims;
                quote.RentersQuote.ReplaceExistingPolicy = request.ReplaceExistingPolicy ?? quote.RentersQuote.ReplaceExistingPolicy;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Renters quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating renters quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a renters quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRentersQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Renters");

            if (quote == null)
            {
                return NotFound($"Renters quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Renters quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting renters quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Renters");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTO
public class RentersQuoteRequest
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
    
    // Renters-specific fields
    public string? TypeOfHome { get; set; }
    public string? EstimatedSquareFootage { get; set; }
    public string? TotalNumberOfRooms { get; set; }
    public string? DogBreeds { get; set; }
    public bool DeadBolts { get; set; }
    public bool FireExtinguishers { get; set; }
    public bool Trampoline { get; set; }
    public bool CoveredDeckPatio { get; set; }
    public bool SwimmingPool { get; set; }
    public string? ReplacementValue { get; set; }
    public string? PersonalLiabilityCoverage { get; set; }
    public string? DesiredDeductible { get; set; }
    public string? CreditRating { get; set; }
    public string? ReportedClaims { get; set; }
    public string? ReplaceExistingPolicy { get; set; }
}
