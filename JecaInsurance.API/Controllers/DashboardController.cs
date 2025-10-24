using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers
{
    /// <summary>
    /// Dashboard controller for unified quote management and analytics
    /// </summary>
    [ApiController]
    [Route("api/dashboard")]
    [Produces("application/json")]
    public class DashboardController : ControllerBase
    {
        private readonly JecaInsuranceDbContext _context;
        private readonly ILogger<DashboardController> _logger;

        public DashboardController(JecaInsuranceDbContext context, ILogger<DashboardController> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Get all quotes across all types with advanced filtering and search
        /// </summary>
        [HttpGet("quotes")]
        public async Task<ActionResult<IEnumerable<Quote>>> GetAllQuotes(
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10,
            [FromQuery] string? quoteType = null,
            [FromQuery] string? search = null,
            [FromQuery] string? status = null,
            [FromQuery] DateTime? startDate = null,
            [FromQuery] DateTime? endDate = null,
            [FromQuery] string? sortBy = "CreatedDate",
            [FromQuery] string? sortOrder = "desc")
        {
            try
            {
                var query = _context.Quotes.AsQueryable();

                // Apply quote type filter
                if (!string.IsNullOrEmpty(quoteType) && quoteType != "All")
                {
                    query = query.Where(q => q.QuoteType == quoteType);
                }

                // Apply search filter (search across multiple fields)
                if (!string.IsNullOrEmpty(search))
                {
                    var searchLower = search.ToLower();
                    query = query.Where(q => 
                        q.FirstName.ToLower().Contains(searchLower) ||
                        q.LastName.ToLower().Contains(searchLower) ||
                        q.Email.ToLower().Contains(searchLower) ||
                        q.PhoneNumber.Contains(search) ||
                        q.QuoteNumber.ToLower().Contains(searchLower) ||
                        (q.City != null && q.City.ToLower().Contains(searchLower)) ||
                        (q.State != null && q.State.ToLower().Contains(searchLower))
                    );
                }

                // Apply status filter
                if (!string.IsNullOrEmpty(status) && status != "All")
                {
                    query = query.Where(q => q.Status == status);
                }

                // Apply date range filter
                if (startDate.HasValue)
                {
                    query = query.Where(q => q.CreatedDate >= startDate.Value);
                }

                if (endDate.HasValue)
                {
                    query = query.Where(q => q.CreatedDate <= endDate.Value.AddDays(1));
                }

                // Apply sorting
                query = sortBy?.ToLower() switch
                {
                    "firstname" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.FirstName) 
                        : query.OrderByDescending(q => q.FirstName),
                    "lastname" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.LastName) 
                        : query.OrderByDescending(q => q.LastName),
                    "email" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.Email) 
                        : query.OrderByDescending(q => q.Email),
                    "quotenumber" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.QuoteNumber) 
                        : query.OrderByDescending(q => q.QuoteNumber),
                    "quotetype" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.QuoteType) 
                        : query.OrderByDescending(q => q.QuoteType),
                    "status" => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.Status) 
                        : query.OrderByDescending(q => q.Status),
                    _ => sortOrder?.ToLower() == "asc" 
                        ? query.OrderBy(q => q.CreatedDate) 
                        : query.OrderByDescending(q => q.CreatedDate)
                };

                // Get total count for pagination
                var totalCount = await query.CountAsync();

                // Apply pagination
                var quotes = await query
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                // Set pagination headers
                Response.Headers["X-Total-Count"] = totalCount.ToString();
                Response.Headers["X-Page"] = page.ToString();
                Response.Headers["X-Page-Size"] = pageSize.ToString();
                Response.Headers["X-Total-Pages"] = ((int)Math.Ceiling((double)totalCount / pageSize)).ToString();

                _logger.LogInformation($"Retrieved {quotes.Count} quotes out of {totalCount} total quotes");

                return Ok(quotes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving dashboard quotes");
                return StatusCode(500, new { message = "An error occurred while retrieving quotes", error = ex.Message });
            }
        }

        /// <summary>
        /// Get comprehensive dashboard statistics
        /// </summary>
        [HttpGet("statistics")]
        public async Task<ActionResult<object>> GetDashboardStatistics()
        {
            try
            {
                var now = DateTime.UtcNow;
                var thirtyDaysAgo = now.AddDays(-30);
                var sevenDaysAgo = now.AddDays(-7);

                // Basic counts
                var totalQuotes = await _context.Quotes.CountAsync();
                var quotesThisMonth = await _context.Quotes
                    .Where(q => q.CreatedDate >= thirtyDaysAgo)
                    .CountAsync();
                var quotesThisWeek = await _context.Quotes
                    .Where(q => q.CreatedDate >= sevenDaysAgo)
                    .CountAsync();

                // Quotes by type
                var quotesByType = await _context.Quotes
                    .GroupBy(q => q.QuoteType)
                    .Select(g => new { QuoteType = g.Key, Count = g.Count() })
                    .OrderByDescending(x => x.Count)
                    .ToListAsync();

                // Quotes by status
                var quotesByStatus = await _context.Quotes
                    .GroupBy(q => q.Status)
                    .Select(g => new { Status = g.Key, Count = g.Count() })
                    .ToListAsync();

                // Recent trends (last 7 days)
                var dailyQuotes = await _context.Quotes
                    .Where(q => q.CreatedDate >= sevenDaysAgo)
                    .GroupBy(q => q.CreatedDate.Date)
                    .Select(g => new { Date = g.Key, Count = g.Count() })
                    .OrderBy(x => x.Date)
                    .ToListAsync();

                // Top quote types this month
                var topQuoteTypesThisMonth = await _context.Quotes
                    .Where(q => q.CreatedDate >= thirtyDaysAgo)
                    .GroupBy(q => q.QuoteType)
                    .Select(g => new { QuoteType = g.Key, Count = g.Count() })
                    .OrderByDescending(x => x.Count)
                    .Take(5)
                    .ToListAsync();

                // Average quotes per day
                var avgQuotesPerDay = totalQuotes > 0 ? 
                    Math.Round((double)quotesThisMonth / 30, 1) : 0;

                var statistics = new
                {
                    TotalQuotes = totalQuotes,
                    QuotesThisMonth = quotesThisMonth,
                    QuotesThisWeek = quotesThisWeek,
                    AverageQuotesPerDay = avgQuotesPerDay,
                    QuotesByType = quotesByType,
                    QuotesByStatus = quotesByStatus,
                    DailyTrend = dailyQuotes,
                    TopQuoteTypesThisMonth = topQuoteTypesThisMonth,
                    LastUpdated = now
                };

                _logger.LogInformation("Retrieved dashboard statistics successfully");

                return Ok(statistics);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving dashboard statistics");
                return StatusCode(500, new { message = "An error occurred while retrieving statistics", error = ex.Message });
            }
        }

        /// <summary>
        /// Get recent activity feed
        /// </summary>
        [HttpGet("recent-activity")]
        public async Task<ActionResult<object>> GetRecentActivity([FromQuery] int limit = 10)
        {
            try
            {
                var recentQuotes = await _context.Quotes
                    .OrderByDescending(q => q.CreatedDate)
                    .Take(limit)
                    .Select(q => new
                    {
                        q.Id,
                        q.QuoteNumber,
                        q.QuoteType,
                        q.FirstName,
                        q.LastName,
                        q.Email,
                        q.Status,
                        q.CreatedDate,
                        Activity = "Quote Submitted"
                    })
                    .ToListAsync();

                _logger.LogInformation($"Retrieved {recentQuotes.Count} recent activities");

                return Ok(recentQuotes);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving recent activity");
                return StatusCode(500, new { message = "An error occurred while retrieving recent activity", error = ex.Message });
            }
        }

        /// <summary>
        /// Get quote details by ID with related data
        /// </summary>
        [HttpGet("quotes/{id}")]
        public async Task<ActionResult<object>> GetQuoteDetails(Guid id)
        {
            try
            {
                var quote = await _context.Quotes
                    .Include(q => q.Vehicles)
                    .Include(q => q.Drivers)
                    .Include(q => q.AutoQuote)
                    .Include(q => q.HomeQuote)
                    .Include(q => q.BoatQuote)
                    .Include(q => q.MotorcycleQuote)
                    .Include(q => q.HealthQuote)
                    .Include(q => q.BusinessQuote)
                    .Include(q => q.BOPQuote)
                    .Include(q => q.WorkersCompQuote)
                    .Include(q => q.DentalQuote)
                    .Include(q => q.LifeInsuranceQuote)
                    .Include(q => q.UmbrellaInsuranceQuote)
                    .Include(q => q.DisabilityInsuranceQuote)
                    .Include(q => q.FloodQuote)
                    .Include(q => q.RentersQuote)
                    .Include(q => q.LandlordsQuote)
                    .Include(q => q.MedicareAdvantageQuote)
                    .Include(q => q.MedicareSupplementQuote)
                    .Include(q => q.VisionQuote)
                    .Include(q => q.AnnuityQuote)
                    .FirstOrDefaultAsync(q => q.Id == id);

                if (quote == null)
                {
                    return NotFound(new { message = "Quote not found" });
                }

                // Create a clean DTO to avoid circular references
                var quoteDetails = new
                {
                    quote.Id,
                    quote.QuoteType,
                    quote.QuoteNumber,
                    quote.FirstName,
                    quote.LastName,
                    quote.Email,
                    quote.PhoneNumber,
                    quote.Address,
                    quote.City,
                    quote.State,
                    quote.ZipCode,
                    quote.Country,
                    quote.CurrentInsuranceCompany,
                    quote.ContinuousCoverage,
                    quote.PolicyExpiresIn,
                    quote.ClaimsIn3Years,
                    quote.TicketsIn3Years,
                    quote.CoverageDesired,
                    quote.WhenToStart,
                    quote.AdditionalComments,
                    quote.InformationSecure,
                    quote.CreatedDate,
                    quote.UpdatedDate,
                    quote.Status,

                    // Include vehicles without circular references
                    Vehicles = quote.Vehicles?.Select(v => new
                    {
                        v.Id,
                        v.IsPrimary,
                        v.Year,
                        v.Make,
                        v.Model,
                        v.VehicleType,
                        v.AnnualMileage,
                        v.DriveToWorkSchool,
                        v.IsLeased,
                        v.WorkSchoolDistance,
                        v.CollisionDeductible,
                        v.ComprehensiveDeductible,
                        v.MoreThanTwoVehicles,
                        v.Manufacturer
                    }).ToList(),

                    // Include drivers without circular references
                    Drivers = quote.Drivers?.Select(d => new
                    {
                        d.Id,
                        d.IsPrimary,
                        d.Name,
                        d.Gender,
                        d.DateOfBirth,
                        d.Married,
                        d.Status,
                        d.DriverType,
                        d.AccidentsTickets
                    }).ToList(),

                    // Include specific quote type data without circular references
                    AutoQuote = quote.AutoQuote != null ? new
                    {
                        quote.AutoQuote.QuoteId
                    } : null,

                    HomeQuote = quote.HomeQuote != null ? new
                    {
                        quote.HomeQuote.QuoteId,
                        quote.HomeQuote.HomeType,
                        quote.HomeQuote.YearBuilt,
                        quote.HomeQuote.SquareFootage,
                        quote.HomeQuote.ConstructionType,
                        quote.HomeQuote.PrimaryHeating,
                        quote.HomeQuote.Foundation,
                        quote.HomeQuote.Bedrooms,
                        quote.HomeQuote.RoofType,
                        quote.HomeQuote.Bathrooms,
                        quote.HomeQuote.RoofAge,
                        quote.HomeQuote.Stories,
                        quote.HomeQuote.GarageType,
                        quote.HomeQuote.DeadBolts,
                        quote.HomeQuote.FireExtinguishers,
                        quote.HomeQuote.Trampoline,
                        quote.HomeQuote.CoveredDeckPatio,
                        quote.HomeQuote.SwimmingPool,
                        quote.HomeQuote.FloodPlan,
                        quote.HomeQuote.SecuritySystem,
                        quote.HomeQuote.MunicipalLocation,
                        quote.HomeQuote.FireAlarm,
                        quote.HomeQuote.DogBreeds,
                        quote.HomeQuote.ReplacementCost,
                        quote.HomeQuote.PersonalLiability,
                        quote.HomeQuote.DesiredDeductible,
                        quote.HomeQuote.CreditRating,
                        quote.HomeQuote.ReportedClaims,
                        quote.HomeQuote.ReplaceExistingPolicy,
                        quote.HomeQuote.PolicyStartDate
                    } : null,

                    BoatQuote = quote.BoatQuote != null ? new
                    {
                        quote.BoatQuote.QuoteId
                    } : null,

                    MotorcycleQuote = quote.MotorcycleQuote != null ? new
                    {
                        quote.MotorcycleQuote.QuoteId
                    } : null,

                    BusinessQuote = quote.BusinessQuote != null ? new
                    {
                        quote.BusinessQuote.QuoteId,
                        quote.BusinessQuote.BusinessName,
                        quote.BusinessQuote.YearsInBusiness,
                        quote.BusinessQuote.LegalEntity,
                        quote.BusinessQuote.PartnersOwners,
                        quote.BusinessQuote.FullTimeEmployees,
                        quote.BusinessQuote.PartTimeEmployees,
                        quote.BusinessQuote.SubContractors,
                        quote.BusinessQuote.OneTimeOrSeasonal,
                        quote.BusinessQuote.AnnualRevenue,
                        quote.BusinessQuote.ReplaceExistingPolicy,
                        quote.BusinessQuote.BusinessDescription,
                        quote.BusinessQuote.GeneralLiability,
                        quote.BusinessQuote.CommercialAuto,
                        quote.BusinessQuote.CommercialProperty,
                        quote.BusinessQuote.CyberLiability,
                        quote.BusinessQuote.ProfessionalLiability,
                        quote.BusinessQuote.DirectorsOfficersLiability,
                        quote.BusinessQuote.BusinessOwnersPackage,
                        quote.BusinessQuote.WorkersCompensation,
                        quote.BusinessQuote.CommercialCrime,
                        quote.BusinessQuote.GroupHealthInsurance,
                        quote.BusinessQuote.GroupLifeInsurance,
                        quote.BusinessQuote.GroupDisabilityInsurance,
                        quote.BusinessQuote.RetirementPlans,
                        quote.BusinessQuote.SupplementalPlans,
                        quote.BusinessQuote.KeyManLifeInsurance,
                        quote.BusinessQuote.KeyManDisabilityInsurance,
                        quote.BusinessQuote.DeferredCompensation
                    } : null,

                    UmbrellaInsuranceQuote = quote.UmbrellaInsuranceQuote != null ? new
                    {
                        quote.UmbrellaInsuranceQuote.QuoteId,
                        quote.UmbrellaInsuranceQuote.VehiclesOwned,
                        quote.UmbrellaInsuranceQuote.PropertiesOwned,
                        quote.UmbrellaInsuranceQuote.HouseholdAccidents,
                        quote.UmbrellaInsuranceQuote.AmountOfCoverage,
                        quote.UmbrellaInsuranceQuote.TrafficTickets,
                        quote.UmbrellaInsuranceQuote.PolicyStartDate
                    } : null,

                    HealthQuote = quote.HealthQuote != null ? new
                    {
                        quote.HealthQuote.QuoteId,
                        quote.HealthQuote.Gender,
                        quote.HealthQuote.DateOfBirth,
                        quote.HealthQuote.Smoker,
                        quote.HealthQuote.Pregnant,
                        quote.HealthQuote.Dependents,
                        quote.HealthQuote.AnnualHouseholdIncome,
                        quote.HealthQuote.SpouseFirstName,
                        quote.HealthQuote.SpouseLastName,
                        quote.HealthQuote.SpouseGender,
                        quote.HealthQuote.SpouseDateOfBirth,
                        quote.HealthQuote.SpouseSmoker,
                        quote.HealthQuote.SpousePregnant
                    } : null,

                    FloodQuote = quote.FloodQuote != null ? new
                    {
                        quote.FloodQuote.QuoteId,
                        quote.FloodQuote.PolicyOwner,
                        quote.FloodQuote.HomeType,
                        quote.FloodQuote.BuildingPurpose,
                        quote.FloodQuote.RentingHome,
                        quote.FloodQuote.FloodClaims,
                        quote.FloodQuote.DesiredContents,
                        quote.FloodQuote.DesiredBuilding,
                        quote.FloodQuote.Comments
                    } : null,

                    // Life & Specialty Insurance Quotes with detailed info
                    LifeInsuranceQuote = quote.LifeInsuranceQuote != null ? new
                    {
                        quote.LifeInsuranceQuote.QuoteId,
                        quote.LifeInsuranceQuote.CoverageType,
                        quote.LifeInsuranceQuote.AmountOfCoverage,
                        quote.LifeInsuranceQuote.PolicyStartDate,
                        quote.LifeInsuranceQuote.Birthdate,
                        quote.LifeInsuranceQuote.Height,
                        quote.LifeInsuranceQuote.Weight,
                        quote.LifeInsuranceQuote.Gender,
                        quote.LifeInsuranceQuote.TobaccoUse,
                        quote.LifeInsuranceQuote.MajorDiseases,
                        quote.LifeInsuranceQuote.StrokeHeartAttack,
                        quote.LifeInsuranceQuote.CancerDiagnosis,
                        quote.LifeInsuranceQuote.BusinessHobby
                    } : null,

                    VisionQuote = quote.VisionQuote != null ? new
                    {
                        quote.VisionQuote.QuoteId,
                        quote.VisionQuote.NumberOfPeople,
                        quote.VisionQuote.PolicyStartDate
                    } : null,

                    AnnuityQuote = quote.AnnuityQuote != null ? new
                    {
                        quote.AnnuityQuote.QuoteId
                    } : null,

                    DisabilityInsuranceQuote = quote.DisabilityInsuranceQuote != null ? new
                    {
                        quote.DisabilityInsuranceQuote.QuoteId,
                        quote.DisabilityInsuranceQuote.Occupation,
                        quote.DisabilityInsuranceQuote.Birthdate,
                        quote.DisabilityInsuranceQuote.MonthlyIncome,
                        quote.DisabilityInsuranceQuote.Gender,
                        quote.DisabilityInsuranceQuote.TobaccoUse,
                        quote.DisabilityInsuranceQuote.PolicyStartDate
                    } : null,

                    DentalQuote = quote.DentalQuote != null ? new
                    {
                        quote.DentalQuote.QuoteId,
                        quote.DentalQuote.NumberOfPeople,
                        quote.DentalQuote.PolicyStartDate,
                        quote.DentalQuote.DentalRecords,
                        quote.DentalQuote.XrayImages,
                        quote.DentalQuote.TreatmentHistory,
                        quote.DentalQuote.InsuranceCards
                    } : null,

                    RentersQuote = quote.RentersQuote != null ? new
                    {
                        quote.RentersQuote.QuoteId,
                        quote.RentersQuote.TypeOfHome,
                        quote.RentersQuote.EstimatedSquareFootage,
                        quote.RentersQuote.TotalNumberOfRooms,
                        quote.RentersQuote.DogBreeds,
                        quote.RentersQuote.DeadBolts,
                        quote.RentersQuote.FireExtinguishers,
                        quote.RentersQuote.Trampoline,
                        quote.RentersQuote.CoveredDeckPatio,
                        quote.RentersQuote.SwimmingPool,
                        quote.RentersQuote.ReplacementValue,
                        quote.RentersQuote.PersonalLiabilityCoverage,
                        quote.RentersQuote.DesiredDeductible,
                        quote.RentersQuote.CreditRating,
                        quote.RentersQuote.ReportedClaims,
                        quote.RentersQuote.ReplaceExistingPolicy
                    } : null,

                    LandlordsQuote = quote.LandlordsQuote != null ? new
                    {
                        quote.LandlordsQuote.QuoteId,
                        quote.LandlordsQuote.NumberOfUnits,
                        quote.LandlordsQuote.TotalSquareFeet,
                        quote.LandlordsQuote.Message
                    } : null,

                    BOPQuote = quote.BOPQuote != null ? new
                    {
                        quote.BOPQuote.QuoteId,
                        quote.BOPQuote.BusinessName,
                        quote.BOPQuote.BusinessDescription
                    } : null,

                    WorkersCompQuote = quote.WorkersCompQuote != null ? new
                    {
                        quote.WorkersCompQuote.QuoteId,
                        quote.WorkersCompQuote.BusinessName,
                        quote.WorkersCompQuote.NumberOfEmployees
                    } : null,

                    MedicareAdvantageQuote = quote.MedicareAdvantageQuote != null ? new
                    {
                        quote.MedicareAdvantageQuote.QuoteId,
                        quote.MedicareAdvantageQuote.PolicyStartDate,
                        quote.MedicareAdvantageQuote.DateOfBirth
                    } : null,

                    MedicareSupplementQuote = quote.MedicareSupplementQuote != null ? new
                    {
                        quote.MedicareSupplementQuote.QuoteId,
                        quote.MedicareSupplementQuote.PolicyStartDate,
                        quote.MedicareSupplementQuote.DateOfBirth
                    } : null
                };

                _logger.LogInformation($"Retrieved quote details for ID: {id}");

                // Debug logging for HomeQuote
                if (quote.HomeQuote != null)
                {
                    _logger.LogInformation($"HomeQuote found - QuoteId: {quote.HomeQuote.QuoteId}, HomeType: '{quote.HomeQuote.HomeType}', YearBuilt: '{quote.HomeQuote.YearBuilt}'");
                }
                else
                {
                    _logger.LogInformation($"HomeQuote is null for quote ID: {id}");
                }

                return Ok(quoteDetails);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error retrieving quote details for ID: {id}");
                return StatusCode(500, new { message = "An error occurred while retrieving quote details", error = ex.Message });
            }
        }

        /// <summary>
        /// Update quote status
        /// </summary>
        [HttpPatch("quotes/{id}/status")]
        public async Task<ActionResult> UpdateQuoteStatus(Guid id, [FromBody] UpdateStatusRequest request)
        {
            try
            {
                var quote = await _context.Quotes.FindAsync(id);
                if (quote == null)
                {
                    return NotFound(new { message = "Quote not found" });
                }

                quote.Status = request.Status;
                quote.UpdatedDate = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                _logger.LogInformation($"Updated quote {id} status to {request.Status}");

                return Ok(new { message = "Quote status updated successfully", status = request.Status });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error updating quote status for ID: {id}");
                return StatusCode(500, new { message = "An error occurred while updating quote status", error = ex.Message });
            }
        }
    }

    /// <summary>
    /// Request model for updating quote status
    /// </summary>
    public class UpdateStatusRequest
    {
        public string Status { get; set; } = string.Empty;
    }
}
