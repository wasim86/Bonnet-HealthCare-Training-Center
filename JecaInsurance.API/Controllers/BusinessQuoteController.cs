using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BusinessQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<BusinessQuoteController> _logger;

    public BusinessQuoteController(JecaInsuranceDbContext context, ILogger<BusinessQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all business quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetBusinessQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Business")
                .Include(q => q.BusinessQuote)
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Business");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving business quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific business quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetBusinessQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Business")
                .Include(q => q.BusinessQuote)
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Business quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving business quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new business quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateBusinessQuote([FromBody] BusinessQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Business",
                QuoteNumber = await GenerateQuoteNumber("BIZ"),
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

            // Create business-specific quote
            var businessQuote = new BusinessQuote
            {
                QuoteId = quote.Id,
                BusinessName = request.BusinessName,
                YearsInBusiness = request.YearsInBusiness,
                LegalEntity = request.LegalEntity,
                PartnersOwners = request.PartnersOwners,
                FullTimeEmployees = request.FullTimeEmployees,
                PartTimeEmployees = request.PartTimeEmployees,
                SubContractors = request.SubContractors,
                OneTimeOrSeasonal = request.OneTimeOrSeasonal,
                AnnualRevenue = request.AnnualRevenue,
                ReplaceExistingPolicy = request.ReplaceExistingPolicy,
                BusinessDescription = request.BusinessDescription,
                GeneralLiability = request.GeneralLiability,
                CommercialAuto = request.CommercialAuto,
                CommercialProperty = request.CommercialProperty,
                CyberLiability = request.CyberLiability,
                ProfessionalLiability = request.ProfessionalLiability,
                DirectorsOfficersLiability = request.DirectorsOfficersLiability,
                BusinessOwnersPackage = request.BusinessOwnersPackage,
                WorkersCompensation = request.WorkersCompensation,
                CommercialCrime = request.CommercialCrime,
                GroupHealthInsurance = request.GroupHealthInsurance,
                GroupLifeInsurance = request.GroupLifeInsurance,
                GroupDisabilityInsurance = request.GroupDisabilityInsurance,
                RetirementPlans = request.RetirementPlans,
                SupplementalPlans = request.SupplementalPlans,
                KeyManLifeInsurance = request.KeyManLifeInsurance,
                KeyManDisabilityInsurance = request.KeyManDisabilityInsurance,
                DeferredCompensation = request.DeferredCompensation
            };

            _context.Quotes.Add(quote);
            _context.BusinessQuotes.Add(businessQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Business quote created successfully with ID: {QuoteId}", quote.Id);

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

            return CreatedAtAction(nameof(GetBusinessQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating business quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing business quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBusinessQuote(Guid id, [FromBody] BusinessQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.BusinessQuote)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Business");

            if (quote == null)
            {
                return NotFound($"Business quote with ID {id} not found");
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

            // Update business-specific fields
            if (quote.BusinessQuote != null)
            {
                quote.BusinessQuote.BusinessName = request.BusinessName;
                quote.BusinessQuote.YearsInBusiness = request.YearsInBusiness;
                quote.BusinessQuote.LegalEntity = request.LegalEntity;
                quote.BusinessQuote.PartnersOwners = request.PartnersOwners;
                quote.BusinessQuote.FullTimeEmployees = request.FullTimeEmployees;
                quote.BusinessQuote.PartTimeEmployees = request.PartTimeEmployees;
                quote.BusinessQuote.SubContractors = request.SubContractors;
                quote.BusinessQuote.OneTimeOrSeasonal = request.OneTimeOrSeasonal;
                quote.BusinessQuote.AnnualRevenue = request.AnnualRevenue;
                quote.BusinessQuote.ReplaceExistingPolicy = request.ReplaceExistingPolicy;
                quote.BusinessQuote.BusinessDescription = request.BusinessDescription;
                quote.BusinessQuote.GeneralLiability = request.GeneralLiability;
                quote.BusinessQuote.CommercialAuto = request.CommercialAuto;
                quote.BusinessQuote.CommercialProperty = request.CommercialProperty;
                quote.BusinessQuote.CyberLiability = request.CyberLiability;
                quote.BusinessQuote.ProfessionalLiability = request.ProfessionalLiability;
                quote.BusinessQuote.DirectorsOfficersLiability = request.DirectorsOfficersLiability;
                quote.BusinessQuote.BusinessOwnersPackage = request.BusinessOwnersPackage;
                quote.BusinessQuote.WorkersCompensation = request.WorkersCompensation;
                quote.BusinessQuote.CommercialCrime = request.CommercialCrime;
                quote.BusinessQuote.GroupHealthInsurance = request.GroupHealthInsurance;
                quote.BusinessQuote.GroupLifeInsurance = request.GroupLifeInsurance;
                quote.BusinessQuote.GroupDisabilityInsurance = request.GroupDisabilityInsurance;
                quote.BusinessQuote.RetirementPlans = request.RetirementPlans;
                quote.BusinessQuote.SupplementalPlans = request.SupplementalPlans;
                quote.BusinessQuote.KeyManLifeInsurance = request.KeyManLifeInsurance;
                quote.BusinessQuote.KeyManDisabilityInsurance = request.KeyManDisabilityInsurance;
                quote.BusinessQuote.DeferredCompensation = request.DeferredCompensation;
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Business quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating business quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a business quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBusinessQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Business");

            if (quote == null)
            {
                return NotFound($"Business quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Business quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting business quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Business");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
    }
}

// Request DTO
public class BusinessQuoteRequest
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
    
    // Business-specific fields
    public string BusinessName { get; set; } = string.Empty;
    public string YearsInBusiness { get; set; } = string.Empty;
    public string LegalEntity { get; set; } = string.Empty;
    public string PartnersOwners { get; set; } = string.Empty;
    public string FullTimeEmployees { get; set; } = string.Empty;
    public string PartTimeEmployees { get; set; } = string.Empty;
    public string SubContractors { get; set; } = string.Empty;
    public string OneTimeOrSeasonal { get; set; } = string.Empty;
    public string AnnualRevenue { get; set; } = string.Empty;
    public string ReplaceExistingPolicy { get; set; } = string.Empty;
    public string BusinessDescription { get; set; } = string.Empty;

    // Insurance type selections (boolean flags)
    public bool GeneralLiability { get; set; }
    public bool CommercialAuto { get; set; }
    public bool CommercialProperty { get; set; }
    public bool CyberLiability { get; set; }
    public bool ProfessionalLiability { get; set; }
    public bool DirectorsOfficersLiability { get; set; }
    public bool BusinessOwnersPackage { get; set; }
    public bool WorkersCompensation { get; set; }
    public bool CommercialCrime { get; set; }
    public bool GroupHealthInsurance { get; set; }
    public bool GroupLifeInsurance { get; set; }
    public bool GroupDisabilityInsurance { get; set; }
    public bool RetirementPlans { get; set; }
    public bool SupplementalPlans { get; set; }
    public bool KeyManLifeInsurance { get; set; }
    public bool KeyManDisabilityInsurance { get; set; }
    public bool DeferredCompensation { get; set; }
}
