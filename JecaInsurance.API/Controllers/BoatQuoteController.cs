using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BoatQuoteController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<BoatQuoteController> _logger;

    public BoatQuoteController(JecaInsuranceDbContext context, ILogger<BoatQuoteController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all boat quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetBoatQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10)
    {
        try
        {
            var skip = (page - 1) * pageSize;
            
            var quotes = await _context.Quotes
                .Where(q => q.QuoteType == "Boat")
                .Include(q => q.BoatQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Boat"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Boat"))
                .OrderByDescending(q => q.CreatedDate)
                .Skip(skip)
                .Take(pageSize)
                .ToListAsync();

            var totalCount = await _context.Quotes.CountAsync(q => q.QuoteType == "Boat");

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving boat quotes");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Get a specific boat quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetBoatQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Where(q => q.Id == id && q.QuoteType == "Boat")
                .Include(q => q.BoatQuote)
                .Include(q => q.Vehicles.Where(v => v.VehicleType == "Boat"))
                .Include(q => q.Drivers.Where(d => d.DriverType == "Boat"))
                .FirstOrDefaultAsync();

            if (quote == null)
            {
                return NotFound($"Boat quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving boat quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Create a new boat quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateBoatQuote([FromBody] BoatQuoteRequest request)
    {
        try
        {
            // Create base quote
            var quote = new Quote
            {
                Id = Guid.NewGuid(),
                QuoteType = "Boat",
                QuoteNumber = await GenerateQuoteNumber("BOAT"),
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

            // Create boat-specific quote
            var boatQuote = new BoatQuote
            {
                QuoteId = quote.Id
            };

            // Add watercraft
            if (request.Watercraft != null && request.Watercraft.Any())
            {
                foreach (var watercraftRequest in request.Watercraft)
                {
                    var watercraft = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Boat",
                        IsPrimary = watercraftRequest.IsPrimary,
                        Year = watercraftRequest.Year,
                        Make = watercraftRequest.Make,
                        Model = watercraftRequest.Model,
                        Manufacturer = watercraftRequest.Manufacturer,
                        WatercraftType = watercraftRequest.WatercraftType,
                        Length = watercraftRequest.Length,
                        BoatUse = watercraftRequest.BoatUse,
                        MarketValue = watercraftRequest.MarketValue,
                        NumberOfEngines = watercraftRequest.NumberOfEngines,
                        TotalHorsepower = watercraftRequest.TotalHorsepower,
                        EngineType = watercraftRequest.EngineType,
                        Deductible = watercraftRequest.Deductible,
                        HullMaterial = watercraftRequest.HullMaterial,
                        TrailerCoverage = watercraftRequest.TrailerCoverage,
                        StorageLocation = watercraftRequest.StorageLocation,
                        StructuralModifications = watercraftRequest.StructuralModifications,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(watercraft);
                }
            }

            // Add operators
            if (request.Operators != null && request.Operators.Any())
            {
                foreach (var operatorRequest in request.Operators)
                {
                    var boatOperator = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Boat",
                        Name = operatorRequest.Name,
                        Gender = operatorRequest.Gender,
                        DateOfBirth = operatorRequest.DateOfBirth,
                        Married = operatorRequest.Married,
                        AccidentsTickets = operatorRequest.AccidentsTickets,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(boatOperator);
                }
            }

            _context.Quotes.Add(quote);
            _context.BoatQuotes.Add(boatQuote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Boat quote created successfully with ID: {QuoteId}", quote.Id);

            // Return a simple response to avoid circular reference issues
            var response = new BoatQuoteResponse
            {
                Id = quote.Id,
                QuoteNumber = quote.QuoteNumber,
                Status = quote.Status,
                Message = "Boat quote created successfully"
            };

            return CreatedAtAction(nameof(GetBoatQuote), new { id = quote.Id }, response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating boat quote");
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Update an existing boat quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBoatQuote(Guid id, [FromBody] BoatQuoteRequest request)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.BoatQuote)
                .Include(q => q.Vehicles)
                .Include(q => q.Drivers)
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Boat");

            if (quote == null)
            {
                return NotFound($"Boat quote with ID {id} not found");
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

            // Update watercraft (remove all and re-add)
            _context.Vehicles.RemoveRange(quote.Vehicles);
            if (request.Watercraft != null && request.Watercraft.Any())
            {
                foreach (var watercraftRequest in request.Watercraft)
                {
                    var watercraft = new Vehicle
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        VehicleType = "Boat",
                        IsPrimary = watercraftRequest.IsPrimary,
                        Year = watercraftRequest.Year,
                        Make = watercraftRequest.Make,
                        Model = watercraftRequest.Model,
                        Manufacturer = watercraftRequest.Manufacturer,
                        WatercraftType = watercraftRequest.WatercraftType,
                        Length = watercraftRequest.Length,
                        BoatUse = watercraftRequest.BoatUse,
                        MarketValue = watercraftRequest.MarketValue,
                        NumberOfEngines = watercraftRequest.NumberOfEngines,
                        TotalHorsepower = watercraftRequest.TotalHorsepower,
                        EngineType = watercraftRequest.EngineType,
                        Deductible = watercraftRequest.Deductible,
                        HullMaterial = watercraftRequest.HullMaterial,
                        TrailerCoverage = watercraftRequest.TrailerCoverage,
                        StorageLocation = watercraftRequest.StorageLocation,
                        StructuralModifications = watercraftRequest.StructuralModifications,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Vehicles.Add(watercraft);
                }
            }

            // Update operators (remove all and re-add)
            _context.Drivers.RemoveRange(quote.Drivers);
            if (request.Operators != null && request.Operators.Any())
            {
                foreach (var operatorRequest in request.Operators)
                {
                    var boatOperator = new Driver
                    {
                        Id = Guid.NewGuid(),
                        QuoteId = quote.Id,
                        DriverType = "Boat",
                        Name = operatorRequest.Name,
                        Gender = operatorRequest.Gender,
                        DateOfBirth = operatorRequest.DateOfBirth,
                        Married = operatorRequest.Married,
                        AccidentsTickets = operatorRequest.AccidentsTickets,
                        CreatedDate = DateTime.UtcNow
                    };
                    quote.Drivers.Add(boatOperator);
                }
            }

            await _context.SaveChangesAsync();

            _logger.LogInformation("Boat quote updated successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating boat quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Delete a boat quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBoatQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .FirstOrDefaultAsync(q => q.Id == id && q.QuoteType == "Boat");

            if (quote == null)
            {
                return NotFound($"Boat quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Boat quote deleted successfully: {QuoteId}", id);
            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting boat quote {QuoteId}", id);
            return StatusCode(500, "Internal server error");
        }
    }

    private async Task<string> GenerateQuoteNumber(string prefix)
    {
        var count = await _context.Quotes.CountAsync(q => q.QuoteType == "Boat");
        return $"{prefix}-{DateTime.UtcNow:yyyyMMdd}-{count + 1:D4}";
    }
}

// Request DTOs
public class BoatQuoteRequest
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
    
    public List<BoatWatercraftRequest>? Watercraft { get; set; }
    public List<BoatOperatorRequest>? Operators { get; set; }
}

public class BoatWatercraftRequest
{
    public bool IsPrimary { get; set; }
    public string Year { get; set; } = string.Empty;
    public string Make { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public string? Manufacturer { get; set; }
    public string? WatercraftType { get; set; }
    public string? Length { get; set; }
    public string? BoatUse { get; set; }
    public string? MarketValue { get; set; }
    public string? NumberOfEngines { get; set; }
    public string? TotalHorsepower { get; set; }
    public string? EngineType { get; set; }
    public string? Deductible { get; set; }
    public string? HullMaterial { get; set; }
    public string? TrailerCoverage { get; set; }
    public string? StorageLocation { get; set; }
    public string? StructuralModifications { get; set; }
}

public class BoatOperatorRequest
{
    public string Name { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string Married { get; set; } = string.Empty;
    public string? AccidentsTickets { get; set; }
}

public class BoatQuoteResponse
{
    public Guid Id { get; set; }
    public string QuoteNumber { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string Message { get; set; } = string.Empty;
}
