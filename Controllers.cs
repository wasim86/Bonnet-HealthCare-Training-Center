using Microsoft.AspNetCore.Mvc;
using JecaInsurance.API.Services;
using JecaInsurance.API.DTOs;
using FluentValidation;

namespace JecaInsurance.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class QuotesController : ControllerBase
    {
        private readonly IQuoteService _quoteService;
        private readonly IFileService _fileService;
        private readonly ILogger<QuotesController> _logger;
        
        public QuotesController(
            IQuoteService quoteService,
            IFileService fileService,
            ILogger<QuotesController> logger)
        {
            _quoteService = quoteService;
            _fileService = fileService;
            _logger = logger;
        }
        
        // =====================================================
        // VEHICLE INSURANCE ENDPOINTS
        // =====================================================
        
        /// <summary>
        /// Submit an auto insurance quote
        /// </summary>
        [HttpPost("auto")]
        [ProducesResponseType(typeof(ApiResponse<QuoteResponseDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 400)]
        public async Task<IActionResult> SubmitAutoQuote([FromBody] AutoQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateAutoQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Auto quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting auto quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        /// <summary>
        /// Submit a boat insurance quote
        /// </summary>
        [HttpPost("boat")]
        [ProducesResponseType(typeof(ApiResponse<QuoteResponseDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 400)]
        public async Task<IActionResult> SubmitBoatQuote([FromBody] BoatQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateBoatQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Boat quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting boat quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        /// <summary>
        /// Submit a motorcycle insurance quote
        /// </summary>
        [HttpPost("motorcycle")]
        [ProducesResponseType(typeof(ApiResponse<QuoteResponseDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 400)]
        public async Task<IActionResult> SubmitMotorcycleQuote([FromBody] MotorcycleQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateMotorcycleQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Motorcycle quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting motorcycle quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        // =====================================================
        // PROPERTY INSURANCE ENDPOINTS
        // =====================================================
        
        /// <summary>
        /// Submit a home insurance quote
        /// </summary>
        [HttpPost("home")]
        [ProducesResponseType(typeof(ApiResponse<QuoteResponseDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 400)]
        public async Task<IActionResult> SubmitHomeQuote([FromBody] HomeQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateHomeQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Home quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting home quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        /// <summary>
        /// Submit a flood insurance quote
        /// </summary>
        [HttpPost("flood")]
        public async Task<IActionResult> SubmitFloodQuote([FromBody] FloodQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateFloodQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Flood quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting flood quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        // =====================================================
        // BUSINESS INSURANCE ENDPOINTS
        // =====================================================
        
        /// <summary>
        /// Submit a business insurance quote
        /// </summary>
        [HttpPost("business")]
        public async Task<IActionResult> SubmitBusinessQuote([FromBody] BusinessQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateBusinessQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Business quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting business quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        // =====================================================
        // HEALTH & LIFE INSURANCE ENDPOINTS
        // =====================================================
        
        /// <summary>
        /// Submit a health insurance quote
        /// </summary>
        [HttpPost("health")]
        public async Task<IActionResult> SubmitHealthQuote([FromBody] HealthQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateHealthQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Health quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting health quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        /// <summary>
        /// Submit a dental insurance quote with file attachments
        /// </summary>
        [HttpPost("dental")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> SubmitDentalQuote([FromForm] DentalQuoteRequestDto request)
        {
            try
            {
                var result = await _quoteService.CreateDentalQuoteAsync(request);
                return Ok(new ApiResponse<QuoteResponseDto>
                {
                    Success = true,
                    Data = result,
                    Message = "Dental quote submitted successfully"
                });
            }
            catch (ValidationException ex)
            {
                return BadRequest(new ApiResponse<object>
                {
                    Success = false,
                    Message = "Validation failed",
                    Errors = ex.Errors.Select(e => new ErrorDetail
                    {
                        Field = e.PropertyName,
                        Message = e.ErrorMessage
                    }).ToList()
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting dental quote");
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while processing your request"
                });
            }
        }
        
        // =====================================================
        // UTILITY ENDPOINTS
        // =====================================================
        
        /// <summary>
        /// Get quote by ID
        /// </summary>
        [HttpGet("{quoteId:guid}")]
        [ProducesResponseType(typeof(ApiResponse<QuoteDetailDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 404)]
        public async Task<IActionResult> GetQuote(Guid quoteId)
        {
            try
            {
                var quote = await _quoteService.GetQuoteByIdAsync(quoteId);
                if (quote == null)
                {
                    return NotFound(new ApiResponse<object>
                    {
                        Success = false,
                        Message = "Quote not found"
                    });
                }
                
                return Ok(new ApiResponse<QuoteDetailDto>
                {
                    Success = true,
                    Data = quote,
                    Message = "Quote retrieved successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving quote {QuoteId}", quoteId);
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while retrieving the quote"
                });
            }
        }
        
        /// <summary>
        /// Get quote by quote number
        /// </summary>
        [HttpGet("number/{quoteNumber}")]
        [ProducesResponseType(typeof(ApiResponse<QuoteDetailDto>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 404)]
        public async Task<IActionResult> GetQuoteByNumber(string quoteNumber)
        {
            try
            {
                var quote = await _quoteService.GetQuoteByNumberAsync(quoteNumber);
                if (quote == null)
                {
                    return NotFound(new ApiResponse<object>
                    {
                        Success = false,
                        Message = "Quote not found"
                    });
                }
                
                return Ok(new ApiResponse<QuoteDetailDto>
                {
                    Success = true,
                    Data = quote,
                    Message = "Quote retrieved successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving quote {QuoteNumber}", quoteNumber);
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while retrieving the quote"
                });
            }
        }
        
        /// <summary>
        /// Update quote status
        /// </summary>
        [HttpPatch("{quoteId:guid}/status")]
        [ProducesResponseType(typeof(ApiResponse<object>), 200)]
        [ProducesResponseType(typeof(ApiResponse<object>), 404)]
        public async Task<IActionResult> UpdateQuoteStatus(Guid quoteId, [FromBody] UpdateQuoteStatusDto request)
        {
            try
            {
                var success = await _quoteService.UpdateQuoteStatusAsync(quoteId, request.Status, request.Notes);
                if (!success)
                {
                    return NotFound(new ApiResponse<object>
                    {
                        Success = false,
                        Message = "Quote not found"
                    });
                }
                
                return Ok(new ApiResponse<object>
                {
                    Success = true,
                    Message = "Quote status updated successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating quote status {QuoteId}", quoteId);
                return StatusCode(500, new ApiResponse<object>
                {
                    Success = false,
                    Message = "An error occurred while updating the quote status"
                });
            }
        }
    }
    
    // =====================================================
    // LOOKUP CONTROLLER
    // =====================================================
    
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class LookupController : ControllerBase
    {
        private readonly ILookupService _lookupService;
        
        public LookupController(ILookupService lookupService)
        {
            _lookupService = lookupService;
        }
        
        [HttpGet("continuous-coverage")]
        public async Task<IActionResult> GetContinuousCoverageOptions()
        {
            var options = await _lookupService.GetContinuousCoverageOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("policy-expires-in")]
        public async Task<IActionResult> GetPolicyExpiresInOptions()
        {
            var options = await _lookupService.GetPolicyExpiresInOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("claims-in-3-years")]
        public async Task<IActionResult> GetClaimsIn3YearsOptions()
        {
            var options = await _lookupService.GetClaimsIn3YearsOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("tickets-in-3-years")]
        public async Task<IActionResult> GetTicketsIn3YearsOptions()
        {
            var options = await _lookupService.GetTicketsIn3YearsOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("coverage-desired")]
        public async Task<IActionResult> GetCoverageDesiredOptions()
        {
            var options = await _lookupService.GetCoverageDesiredOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("work-school-distance")]
        public async Task<IActionResult> GetWorkSchoolDistanceOptions()
        {
            var options = await _lookupService.GetWorkSchoolDistanceOptionsAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
        
        [HttpGet("watercraft-types")]
        public async Task<IActionResult> GetWatercraftTypes()
        {
            var options = await _lookupService.GetWatercraftTypesAsync();
            return Ok(new ApiResponse<IEnumerable<LookupOptionDto>>
            {
                Success = true,
                Data = options,
                Message = "Options retrieved successfully"
            });
        }
    }
}
