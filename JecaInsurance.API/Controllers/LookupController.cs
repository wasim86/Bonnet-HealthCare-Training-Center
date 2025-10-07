using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LookupController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<LookupController> _logger;

    public LookupController(JecaInsuranceDbContext context, ILogger<LookupController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all continuous coverage options
    /// </summary>
    [HttpGet("continuous-coverage")]
    public async Task<ActionResult<IEnumerable<ContinuousCoverageOption>>> GetContinuousCoverageOptions()
    {
        try
        {
            var options = await _context.ContinuousCoverageOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving continuous coverage options");
            return StatusCode(500, "An error occurred while retrieving continuous coverage options");
        }
    }

    /// <summary>
    /// Get all policy expires in options
    /// </summary>
    [HttpGet("policy-expires-in")]
    public async Task<ActionResult<IEnumerable<PolicyExpiresInOption>>> GetPolicyExpiresInOptions()
    {
        try
        {
            var options = await _context.PolicyExpiresInOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving policy expires in options");
            return StatusCode(500, "An error occurred while retrieving policy expires in options");
        }
    }

    /// <summary>
    /// Get all claims in 3 years options
    /// </summary>
    [HttpGet("claims-in-3-years")]
    public async Task<ActionResult<IEnumerable<ClaimsIn3YearsOption>>> GetClaimsIn3YearsOptions()
    {
        try
        {
            var options = await _context.ClaimsIn3YearsOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving claims in 3 years options");
            return StatusCode(500, "An error occurred while retrieving claims in 3 years options");
        }
    }

    /// <summary>
    /// Get all tickets in 3 years options
    /// </summary>
    [HttpGet("tickets-in-3-years")]
    public async Task<ActionResult<IEnumerable<TicketsIn3YearsOption>>> GetTicketsIn3YearsOptions()
    {
        try
        {
            var options = await _context.TicketsIn3YearsOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving tickets in 3 years options");
            return StatusCode(500, "An error occurred while retrieving tickets in 3 years options");
        }
    }

    /// <summary>
    /// Get all coverage desired options
    /// </summary>
    [HttpGet("coverage-desired")]
    public async Task<ActionResult<IEnumerable<CoverageDesiredOption>>> GetCoverageDesiredOptions()
    {
        try
        {
            var options = await _context.CoverageDesiredOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving coverage desired options");
            return StatusCode(500, "An error occurred while retrieving coverage desired options");
        }
    }

    /// <summary>
    /// Get all work school distance options
    /// </summary>
    [HttpGet("work-school-distance")]
    public async Task<ActionResult<IEnumerable<WorkSchoolDistanceOption>>> GetWorkSchoolDistanceOptions()
    {
        try
        {
            var options = await _context.WorkSchoolDistanceOptions
                .OrderBy(o => o.DisplayOrder)
                .ToListAsync();
            return Ok(options);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving work school distance options");
            return StatusCode(500, "An error occurred while retrieving work school distance options");
        }
    }

    /// <summary>
    /// Get all watercraft types
    /// </summary>
    [HttpGet("watercraft-types")]
    public async Task<ActionResult<IEnumerable<WatercraftType>>> GetWatercraftTypes()
    {
        try
        {
            var types = await _context.WatercraftTypes
                .OrderBy(t => t.DisplayOrder)
                .ToListAsync();
            return Ok(types);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving watercraft types");
            return StatusCode(500, "An error occurred while retrieving watercraft types");
        }
    }

    /// <summary>
    /// Get all lookup data in a single request
    /// </summary>
    [HttpGet("all")]
    public async Task<ActionResult<object>> GetAllLookupData()
    {
        try
        {
            var lookupData = new
            {
                ContinuousCoverage = await _context.ContinuousCoverageOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                PolicyExpiresIn = await _context.PolicyExpiresInOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                ClaimsIn3Years = await _context.ClaimsIn3YearsOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                TicketsIn3Years = await _context.TicketsIn3YearsOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                CoverageDesired = await _context.CoverageDesiredOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                WorkSchoolDistance = await _context.WorkSchoolDistanceOptions
                    .OrderBy(o => o.DisplayOrder)
                    .ToListAsync(),
                WatercraftTypes = await _context.WatercraftTypes
                    .OrderBy(t => t.DisplayOrder)
                    .ToListAsync()
            };

            return Ok(lookupData);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving all lookup data");
            return StatusCode(500, "An error occurred while retrieving lookup data");
        }
    }

    /// <summary>
    /// Get quote types
    /// </summary>
    [HttpGet("quote-types")]
    public ActionResult<IEnumerable<object>> GetQuoteTypes()
    {
        try
        {
            var quoteTypes = new[]
            {
                new { Value = "Auto", Label = "Auto Insurance" },
                new { Value = "Boat", Label = "Boat Insurance" },
                new { Value = "Motorcycle", Label = "Motorcycle Insurance" },
                new { Value = "Home", Label = "Home Insurance" },
                new { Value = "Flood", Label = "Flood Insurance" },
                new { Value = "Renters", Label = "Renters Insurance" },
                new { Value = "Landlords", Label = "Landlords Insurance" },
                new { Value = "Business", Label = "Business Insurance" },
                new { Value = "BOP", Label = "Business Owners Package" },
                new { Value = "WorkersComp", Label = "Workers Compensation" },
                new { Value = "Health", Label = "Health Insurance" },
                new { Value = "Dental", Label = "Dental Insurance" },
                new { Value = "LifeInsurance", Label = "Life Insurance" },
                new { Value = "UmbrellaInsurance", Label = "Umbrella Insurance" },
                new { Value = "DisabilityInsurance", Label = "Disability Insurance" },
                new { Value = "MedicareAdvantage", Label = "Medicare Advantage" },
                new { Value = "MedicareSupplement", Label = "Medicare Supplement" },
                new { Value = "Vision", Label = "Vision Insurance" },
                new { Value = "Annuity", Label = "Annuity" }
            };

            return Ok(quoteTypes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving quote types");
            return StatusCode(500, "An error occurred while retrieving quote types");
        }
    }
}
