using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<HomeQuoteController> _logger;

    public HomeQuoteController(JecaInsuranceDbContext context, ILogger<HomeQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all home quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetHomeQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Home")
                .Include(q => q.HomeQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Home");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving home quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific home quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetHomeQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Home")
                .Include(q => q.HomeQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Home quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving home quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new home quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateHomeQuote([FromBody] HomeQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Home",
                QuoteNumber = await GenerateQuoteNumber("HOME"),
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

            // Create home-specific quote
            var homeQuote = new HomeQuote
            {
                QuoteId = quote.Id,
                HomeType = request.HomeType ?? string.Empty,
                YearBuilt = request.YearBuilt ?? string.Empty,
                SquareFootage = request.SquareFootage ?? string.Empty,
                ConstructionType = request.ConstructionType ?? string.Empty,
                PrimaryHeating = request.PrimaryHeating ?? string.Empty,
                Foundation = request.Foundation ?? string.Empty,
                Bedrooms = request.Bedrooms ?? string.Empty,
                RoofType = request.RoofType ?? string.Empty,
                Bathrooms = request.Bathrooms ?? string.Empty,
                RoofAge = request.RoofAge ?? string.Empty,
                Stories = request.Stories ?? string.Empty,
                GarageType = request.GarageType ?? string.Empty,
                DeadBolts = request.DeadBolts,
                FireExtinguishers = request.FireExtinguishers,
                Trampoline = request.Trampoline,
                CoveredDeckPatio = request.CoveredDeckPatio,
                SwimmingPool = request.SwimmingPool,
                FloodPlan = request.FloodPlan ?? string.Empty,
                SecuritySystem = request.SecuritySystem ?? string.Empty,
                MunicipalLocation = request.MunicipalLocation ?? string.Empty,
                FireAlarm = request.FireAlarm ?? string.Empty,
                DogBreeds = request.DogBreeds,
                ReplacementCost = request.ReplacementCost ?? string.Empty,
                PersonalLiability = request.PersonalLiability ?? string.Empty,
                DesiredDeductible = request.DesiredDeductible ?? string.Empty,
                CreditRating = request.CreditRating ?? string.Empty,
                ReportedClaims = request.ReportedClaims ?? string.Empty,
                ReplaceExistingPolicy = request.ReplaceExistingPolicy ?? string.Empty,
                PolicyStartDate = request.PolicyStartDate
            };

            _context.Quotes.Add(quote);
            _context.HomeQuotes.Add(homeQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Home quote created successfully with ID: {QuoteId}", quote.Id);

            var response = new HomeQuoteResponse
            {
                Id = quote.Id,
                QuoteNumber = quote.QuoteNumber,
                QuoteType = quote.QuoteType,
                Status = quote.Status,
                CreatedDate = quote.CreatedDate
            };

            return CreatedAtAction(nameof(GetHomeQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating home quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing home quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateHomeQuote(Guid id, [FromBody] HomeQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.HomeQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Home");

            if (quote == null)
            {
                return NotFound($"Home quote with ID {id} not found");
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

            // Update home-specific fields
            if (quote.HomeQuote != null)
            {
                quote.HomeQuote.HomeType = request.HomeType ?? string.Empty;
                quote.HomeQuote.YearBuilt = request.YearBuilt ?? string.Empty;
                quote.HomeQuote.SquareFootage = request.SquareFootage ?? string.Empty;
                quote.HomeQuote.ConstructionType = request.ConstructionType ?? string.Empty;
                quote.HomeQuote.PrimaryHeating = request.PrimaryHeating ?? string.Empty;
                quote.HomeQuote.Foundation = request.Foundation ?? string.Empty;
                quote.HomeQuote.Bedrooms = request.Bedrooms ?? string.Empty;
                quote.HomeQuote.RoofType = request.RoofType ?? string.Empty;
                quote.HomeQuote.Bathrooms = request.Bathrooms ?? string.Empty;
                quote.HomeQuote.RoofAge = request.RoofAge ?? string.Empty;
                quote.HomeQuote.Stories = request.Stories ?? string.Empty;
                quote.HomeQuote.GarageType = request.GarageType ?? string.Empty;
                quote.HomeQuote.DeadBolts = request.DeadBolts;
                quote.HomeQuote.FireExtinguishers = request.FireExtinguishers;
                quote.HomeQuote.Trampoline = request.Trampoline;
                quote.HomeQuote.CoveredDeckPatio = request.CoveredDeckPatio;
                quote.HomeQuote.SwimmingPool = request.SwimmingPool;
                quote.HomeQuote.FloodPlan = request.FloodPlan ?? string.Empty;
                quote.HomeQuote.SecuritySystem = request.SecuritySystem ?? string.Empty;
                quote.HomeQuote.MunicipalLocation = request.MunicipalLocation ?? string.Empty;
                quote.HomeQuote.FireAlarm = request.FireAlarm ?? string.Empty;
                quote.HomeQuote.DogBreeds = request.DogBreeds;
                quote.HomeQuote.ReplacementCost = request.ReplacementCost ?? string.Empty;
                quote.HomeQuote.PersonalLiability = request.PersonalLiability ?? string.Empty;
                quote.HomeQuote.DesiredDeductible = request.DesiredDeductible ?? string.Empty;
                quote.HomeQuote.CreditRating = request.CreditRating ?? string.Empty;
                quote.HomeQuote.ReportedClaims = request.ReportedClaims ?? string.Empty;
                quote.HomeQuote.ReplaceExistingPolicy = request.ReplaceExistingPolicy ?? string.Empty;
                quote.HomeQuote.PolicyStartDate = request.PolicyStartDate;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Home quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating home quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a home quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHomeQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Home");

            if (quote == null)
            {
                return NotFound($"Home quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Home quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting home quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Home");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
    }
}

// Request DTO
public class HomeQuoteRequest
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
    
    // Home-specific fields
    public string? HomeType { get; set; }
    public string? YearBuilt { get; set; }
    public string? SquareFootage { get; set; }
    public string? ConstructionType { get; set; }
    public string? PrimaryHeating { get; set; }
    public string? Foundation { get; set; }
    public string? Bedrooms { get; set; }
    public string? RoofType { get; set; }
    public string? Bathrooms { get; set; }
    public string? RoofAge { get; set; }
    public string? Stories { get; set; }
    public string? GarageType { get; set; }
    public bool DeadBolts { get; set; }
    public bool FireExtinguishers { get; set; }
    public bool Trampoline { get; set; }
    public bool CoveredDeckPatio { get; set; }
    public bool SwimmingPool { get; set; }
    public string? FloodPlan { get; set; }
    public string? SecuritySystem { get; set; }
    public string? MunicipalLocation { get; set; }
    public string? FireAlarm { get; set; }
    public string? DogBreeds { get; set; }
    public string? ReplacementCost { get; set; }
    public string? PersonalLiability { get; set; }
    public string? DesiredDeductible { get; set; }
    public string? CreditRating { get; set; }
    public string? ReportedClaims { get; set; }
    public string? ReplaceExistingPolicy { get; set; }
    public DateTime PolicyStartDate { get; set; }
}

// Response DTO
public class HomeQuoteResponse
{
    public Guid Id { get; set; }
    public string QuoteNumber { get; set; } = string.Empty;
    public string QuoteType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
}
