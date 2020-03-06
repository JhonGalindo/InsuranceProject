using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [RoutePrefix("api/coveringtypes")]
    public class CoveringTypeController : ApiController
    {
        private readonly ICoveringTypeDomainService _coveringTypeDomainService;

        public CoveringTypeController(ICoveringTypeDomainService coveringTypeDomainService)
        {
            _coveringTypeDomainService = coveringTypeDomainService;
        }

        [HttpGet, Route("", Name = "GetAllCoveringTypes")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(CoveringTypeDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Get()
        {
            try
            {
                var response = _coveringTypeDomainService.GetCoveringTypes();

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
