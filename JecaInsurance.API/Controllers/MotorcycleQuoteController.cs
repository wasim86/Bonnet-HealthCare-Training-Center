using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MotorcycleQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<MotorcycleQuoteController> _logger;

    public MotorcycleQuoteController(JecaInsuranceDbContext context, ILogger<MotorcycleQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all motorcycle quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetMotorcycleQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Motorcycle")
                .Include(q => q.MotorcycleQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Motorcycle"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Motorcycle"))
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Motorcycle");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving motorcycle quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific motorcycle quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetMotorcycleQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Motorcycle")
                .Include(q => q.MotorcycleQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Motorcycle"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Motorcycle"))
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Motorcycle quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving motorcycle quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new motorcycle quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<MotorcycleQuoteResponse>> CreateMotorcycleQuote([FromBody] MotorcycleQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Motorcycle",
                QuoteNumber = await GenerateQuoteNumber("MOTO"),
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

            // Create motorcycle-specific quote
            var motorcycleQuote = new MotorcycleQuote
            {
                QuoteId = quote.Id
            };

            // Add motorcycles
            if (request.Motorcycles != null && request.Motorcycles.Any())
            {
                foreach (var motorcycleRequest in request.Motorcycles)
                {
                    var motorcycle = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Motorcycle",
                        IsPrimary = motorcycleRequest.IsPrimary,
                        Year = motorcycleRequest.Year,
                        Make = motorcycleRequest.Make,
                        Model = motorcycleRequest.Model,
                        DriveToWorkSchool = motorcycleRequest.DriveToWorkSchool,
                        IsLeased = motorcycleRequest.IsLeased,
                        WorkSchoolDistance = motorcycleRequest.WorkSchoolDistance,
                        CollisionDeductible = motorcycleRequest.CollisionDeductible,
                        AnnualMileage = motorcycleRequest.AnnualMileage,
                        ComprehensiveDeductible = motorcycleRequest.ComprehensiveDeductible,
                        MoreThanTwoVehicles = motorcycleRequest.MoreThan2Motorcycles,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(motorcycle);
                }
            }

            // Add riders
            if (request.Riders != null && request.Riders.Any())
            {
                foreach (var riderRequest in request.Riders)
                {
                    var rider = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Motorcycle",
                        Name = riderRequest.Name,
                        Gender = riderRequest.Gender,
                        DateOfBirth = riderRequest.DateOfBirth,
                        Married = riderRequest.Married,
                        Status = riderRequest.Status,
                        AccidentsTickets = riderRequest.AccidentsTickets,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(rider);
                }
            }

            _context.Quotes.Add(quote);
            _context.MotorcycleQuotes.Add(motorcycleQuote);
            await _context.SaveChangesAsync();

            // Create response DTO to avoid circular references
            var response = new MotorcycleQuoteResponse
            {
                Id = quote.Id,
                QuoteNumber = quote.QuoteNumber,
                QuoteType = quote.QuoteType,
                Status = quote.Status,
                CreatedDate = quote.CreatedDate
            };

            _logger.LogInformation("Motorcycle quote created successfully with ID: {QuoteId}", quote.Id);
            return CreatedAtAction(nameof(GetMotorcycleQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating motorcycle quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing motorcycle quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMotorcycleQuote(Guid id, [FromBody] MotorcycleQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.MotorcycleQuote)
                .Include(q => q.Vehicles)
                .Include(q => q.Drivers)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Motorcycle");

            if (quote == null)
            {
                return NotFound($"Motorcycle quote with ID {id} not found");
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

            // Update motorcycles (remove all and re-add)
            _context.Vehicles.RemoveRange(quote.Vehicles);
            if (request.Motorcycles != null && request.Motorcycles.Any())
            {
                foreach (var motorcycleRequest in request.Motorcycles)
                {
                    var motorcycle = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Motorcycle",
                        IsPrimary = motorcycleRequest.IsPrimary,
                        Year = motorcycleRequest.Year,
                        Make = motorcycleRequest.Make,
                        Model = motorcycleRequest.Model,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(motorcycle);
                }
            }

            // Update riders (remove all and re-add)
            _context.Drivers.RemoveRange(quote.Drivers);
            if (request.Riders != null && request.Riders.Any())
            {
                foreach (var riderRequest in request.Riders)
                {
                    var rider = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Motorcycle",
                        Name = riderRequest.Name,
                        Gender = riderRequest.Gender,
                        DateOfBirth = riderRequest.DateOfBirth,
                        Married = riderRequest.Married,
                        AccidentsTickets = riderRequest.AccidentsTickets,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(rider);
                }
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Motorcycle quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating motorcycle quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a motorcycle quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMotorcycleQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Motorcycle");

            if (quote == null)
            {
                return NotFound($"Motorcycle quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Motorcycle quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting motorcycle quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Motorcycle");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTOs
public class MotorcycleQuoteRequest
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
    
    public List<MotorcycleVehicleRequest>? Motorcycles { get; set; }
    public List<MotorcycleRiderRequest>? Riders { get; set; }
}

public class MotorcycleVehicleRequest
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
    public string? MoreThan2Motorcycles { get; set; }
}

public class MotorcycleRiderRequest
{
    public string Name { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string Married { get; set; } = string.Empty;
    public string? Status { get; set; }
    public string? AccidentsTickets { get; set; }
}

public class MotorcycleQuoteResponse
{
    public Guid Id { get; set; }
    public string QuoteNumber { get; set; } = string.Empty;
    public string QuoteType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public DateTime CreatedDate { get; set; }
}
