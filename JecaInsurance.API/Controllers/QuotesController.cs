using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JecaInsurance.API.Data;
using JecaInsurance.API.Models;

namespace JecaInsurance.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuotesController : ControllerBase
{
    private readonly JecaInsuranceDbContext _context;
    private readonly ILogger<QuotesController> _logger;

    public QuotesController(JecaInsuranceDbContext context, ILogger<QuotesController> logger)
    {
        _context = context;
        _logger = logger;
    }

    /// <summary>
    /// Get all quotes with pagination
    /// </summary>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Quote>>> GetQuotes(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10,
        [FromQuery] string? quoteType = null)
    {
        try
        {
            var query = _context.Quotes.AsQueryable();

            // Filter by quote type if provided
            if (!string.IsNullOrEmpty(quoteType))
            {
                query = query.Where(q => q.QuoteType == quoteType);
            }

            // Apply pagination
            var totalCount = await query.CountAsync();
            var quotes = await query
                .OrderByDescending(q => q.CreatedDate)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();

            Response.Headers["X-Total-Count"] = totalCount.ToString();
            Response.Headers["X-Page"] = page.ToString();
            Response.Headers["X-Page-Size"] = pageSize.ToString();

            return Ok(quotes);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving quotes");
            return StatusCode(500, "An error occurred while retrieving quotes");
        }
    }

    /// <summary>
    /// Get a specific quote by ID
    /// </summary>
    [HttpGet("{id}")]
    public async Task<ActionResult<Quote>> GetQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes
                .Include(q => q.Vehicles)
                .Include(q => q.Drivers)
                .FirstOrDefaultAsync(q => q.Id == id);

            if (quote == null)
            {
                return NotFound($"Quote with ID {id} not found");
            }

            return Ok(quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving quote {QuoteId}", id);
            return StatusCode(500, "An error occurred while retrieving the quote");
        }
    }

    /// <summary>
    /// Create a new quote
    /// </summary>
    [HttpPost]
    public async Task<ActionResult<Quote>> CreateQuote([FromBody] Quote quote)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Generate quote number
            quote.QuoteNumber = await GenerateQuoteNumber(quote.QuoteType);
            quote.CreatedDate = DateTime.UtcNow;
            quote.UpdatedDate = DateTime.UtcNow;
            quote.Status = "Pending";

            _context.Quotes.Add(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Quote created successfully with ID {QuoteId}", quote.Id);

            return CreatedAtAction(nameof(GetQuote), new { id = quote.Id }, quote);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating quote");
            return StatusCode(500, "An error occurred while creating the quote");
        }
    }

    /// <summary>
    /// Update an existing quote
    /// </summary>
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuote(Guid id, [FromBody] Quote quote)
    {
        try
        {
            if (id != quote.Id)
            {
                return BadRequest("Quote ID mismatch");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var existingQuote = await _context.Quotes.FindAsync(id);
            if (existingQuote == null)
            {
                return NotFound($"Quote with ID {id} not found");
            }

            // Update properties
            _context.Entry(existingQuote).CurrentValues.SetValues(quote);
            existingQuote.UpdatedDate = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            _logger.LogInformation("Quote updated successfully with ID {QuoteId}", id);

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error updating quote {QuoteId}", id);
            return StatusCode(500, "An error occurred while updating the quote");
        }
    }

    /// <summary>
    /// Delete a quote
    /// </summary>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteQuote(Guid id)
    {
        try
        {
            var quote = await _context.Quotes.FindAsync(id);
            if (quote == null)
            {
                return NotFound($"Quote with ID {id} not found");
            }

            _context.Quotes.Remove(quote);
            await _context.SaveChangesAsync();

            _logger.LogInformation("Quote deleted successfully with ID {QuoteId}", id);

            return NoContent();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting quote {QuoteId}", id);
            return StatusCode(500, "An error occurred while deleting the quote");
        }
    }

    /// <summary>
    /// Get quote statistics
    /// </summary>
    [HttpGet("statistics")]
    public async Task<ActionResult<object>> GetQuoteStatistics()
    {
        try
        {
            var totalQuotes = await _context.Quotes.CountAsync();
            var quotesByType = await _context.Quotes
                .GroupBy(q => q.QuoteType)
                .Select(g => new { QuoteType = g.Key, Count = g.Count() })
                .ToListAsync();

            var quotesByStatus = await _context.Quotes
                .GroupBy(q => q.Status)
                .Select(g => new { Status = g.Key, Count = g.Count() })
                .ToListAsync();

            var recentQuotes = await _context.Quotes
                .Where(q => q.CreatedDate >= DateTime.UtcNow.AddDays(-30))
                .CountAsync();

            var statistics = new
            {
                TotalQuotes = totalQuotes,
                QuotesByType = quotesByType,
                QuotesByStatus = quotesByStatus,
                RecentQuotes = recentQuotes
            };

            return Ok(statistics);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving quote statistics");
            return StatusCode(500, "An error occurred while retrieving statistics");
        }
    }

    private async Task<string> GenerateQuoteNumber(string quoteType)
    {
        var prefix = quoteType.ToUpper().Substring(0, Math.Min(3, quoteType.Length));
        var today = DateTime.UtcNow.ToString("yyyyMMdd");
        
        var lastQuote = await _context.Quotes
            .Where(q => q.QuoteType == quoteType && q.CreatedDate.Date == DateTime.UtcNow.Date)
            .OrderByDescending(q => q.CreatedDate)
            .FirstOrDefaultAsync();

        var sequence = 1;
        if (lastQuote != null && lastQuote.QuoteNumber.Contains(today))
        {
            var lastSequence = lastQuote.QuoteNumber.Split('-').LastOrDefault();
            if (int.TryParse(lastSequence, out var lastSeq))
            {
                sequence = lastSeq + 1;
            }
        }

        return $"{prefix}-{today}-{sequence:D3}";
    }
}
