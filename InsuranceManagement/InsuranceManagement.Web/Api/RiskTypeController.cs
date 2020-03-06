using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [RoutePrefix("api/risktypes")]
    public class RiskTypeController : ApiController
    {
        private readonly IRiskTypeDomainService _riskTypeDomainService;

        public RiskTypeController(IRiskTypeDomainService riskTypeDomainService)
        {
            _riskTypeDomainService = riskTypeDomainService;
        }

        [HttpGet, Route("", Name = "GetAllRiskTypes")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(RiskTypeDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Get()
        {
            try
            {
                var response = _riskTypeDomainService.GetRiskTypes();

                if (response == null || !response.Any())
                {
                    return NotFound();
                }

                return Ok(response);
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
