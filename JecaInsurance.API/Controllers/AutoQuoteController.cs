using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AutoQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<AutoQuoteController> _logger;

    public AutoQuoteController(JecaInsuranceDbContext context, ILogger<AutoQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all auto quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetAutoQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Auto")
                .Include(q => q.AutoQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Auto"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Auto"))
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Auto");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving auto quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific auto quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetAutoQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Auto")
                .Include(q => q.AutoQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Auto"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Auto"))
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Auto quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving auto quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new auto quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateAutoQuote([FromBody] AutoQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Auto",
                QuoteNumber = await GenerateQuoteNumber("AUTO"),
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

            // Create auto-specific quote
            var autoQuote = new AutoQuote
            {
                QuoteId = quote.Id
            };

            // Add vehicles
            if (request.Vehicles != null && request.Vehicles.Any())
            {
                foreach (var vehicleRequest in request.Vehicles)
                {
                    var vehicle = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Auto",
                        IsPrimary = vehicleRequest.IsPrimary,
                        Year = vehicleRequest.Year,
                        Make = vehicleRequest.Make,
                        Model = vehicleRequest.Model,
                        DriveToWorkSchool = vehicleRequest.DriveToWorkSchool,
                        IsLeased = vehicleRequest.IsLeased,
                        WorkSchoolDistance = vehicleRequest.WorkSchoolDistance,
                        CollisionDeductible = vehicleRequest.CollisionDeductible,
                        AnnualMileage = vehicleRequest.AnnualMileage,
                        ComprehensiveDeductible = vehicleRequest.ComprehensiveDeductible,
                        MoreThanTwoVehicles = vehicleRequest.MoreThanTwoVehicles,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(vehicle);
                }
            }

            // Add drivers
            if (request.Drivers != null && request.Drivers.Any())
            {
                foreach (var driverRequest in request.Drivers)
                {
                    var driver = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Auto",
                        Name = driverRequest.Name,
                        Gender = driverRequest.Gender,
                        DateOfBirth = driverRequest.DateOfBirth,
                        Married = driverRequest.Married,
                        Status = driverRequest.Status,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(driver);
                }
            }

            _context.Quotes.Add(quote);
            _context.AutoQuotes.Add(autoQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Auto quote created successfully with ID: {QuoteId}", quote.Id);

            // Return a simple response to avoid circular reference issues
            var response = new AutoQuoteResponse
            {
                Id = quote.Id,
                QuoteNumber = quote.QuoteNumber,
                Status = quote.Status,
                Message = "Auto quote created successfully"
            };

            return CreatedAtAction(nameof(GetAutoQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating auto quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing auto quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateAutoQuote(Guid id, [FromBody] AutoQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.AutoQuote)
                .Include(q => q.Vehicles)
                .Include(q => q.Drivers)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Auto");

            if (quote == null)
            {
                return NotFound($"Auto quote with ID {id} not found");
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

            // Update vehicles (simple approach: remove all and re-add)
            _context.Vehicles.RemoveRange(quote.Vehicles);
            if (request.Vehicles != null && request.Vehicles.Any())
            {
                foreach (var vehicleRequest in request.Vehicles)
                {
                    var vehicle = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Auto",
                        IsPrimary = vehicleRequest.IsPrimary,
                        Year = vehicleRequest.Year,
                        Make = vehicleRequest.Make,
                        Model = vehicleRequest.Model,
                        DriveToWorkSchool = vehicleRequest.DriveToWorkSchool,
                        IsLeased = vehicleRequest.IsLeased,
                        WorkSchoolDistance = vehicleRequest.WorkSchoolDistance,
                        CollisionDeductible = vehicleRequest.CollisionDeductible,
                        AnnualMileage = vehicleRequest.AnnualMileage,
                        ComprehensiveDeductible = vehicleRequest.ComprehensiveDeductible,
                        MoreThanTwoVehicles = vehicleRequest.MoreThanTwoVehicles,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(vehicle);
                }
            }

            // Update drivers (simple approach: remove all and re-add)
            _context.Drivers.RemoveRange(quote.Drivers);
            if (request.Drivers != null && request.Drivers.Any())
            {
                foreach (var driverRequest in request.Drivers)
                {
                    var driver = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Auto",
                        Name = driverRequest.Name,
                        Gender = driverRequest.Gender,
                        DateOfBirth = driverRequest.DateOfBirth,
                        Married = driverRequest.Married,
                        Status = driverRequest.Status,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(driver);
                }
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Auto quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating auto quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete an auto quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAutoQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Auto");

            if (quote == null)
            {
                return NotFound($"Auto quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Auto quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting auto quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Auto");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{(count + 1):D4}";
    }
}

// Request DTOs
public class AutoQuoteRequest
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
    
    public List<AutoVehicleRequest>? Vehicles { get; set; }
    public List<AutoDriverRequest>? Drivers { get; set; }
}

public class AutoVehicleRequest
{
    public bool IsPrimary { get; set; }
    public string Year { get; set; } = string.Empty;
    public string Make { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public string? DriveToWorkSchool { get; set; }
    public string? IsLeased { get; set; }
    public string? WorkSchoolDistance { get; set; }
    public string? CollisionDeductible { get; set; }
    public string? AnnualMileage { get; set; }
    public string? ComprehensiveDeductible { get; set; }
    public string? MoreThanTwoVehicles { get; set; }
}

public class AutoDriverRequest
{
    public string Name { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string Married { get; set; } = string.Empty;
    public string? Status { get; set; }
}

public class AutoQuoteResponse
{
    public Guid Id { get; set; }
    public string QuoteNumber { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
