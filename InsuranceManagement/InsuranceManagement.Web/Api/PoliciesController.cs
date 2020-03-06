using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [RoutePrefix("api/policies")]
    public class PoliciesController : ApiController
    {
        private readonly IPolicyDomainService _policyDomainService;

        private const string PoliciyGetById = "PoliciyGetById";

        public PoliciesController(IPolicyDomainService policyDomainService)
        {
            _policyDomainService = policyDomainService;
        }

        [HttpGet, Route("", Name = "GetAllPolicies")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(PolicyDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Get()
        {
            try
            {
                var response = _policyDomainService.GetPolicies();

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

        [HttpGet, Route("{policyId}", Name = PoliciyGetById)]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(PolicyDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult GetById(int policyId)
        {
            try
            {
                if (policyId <= 0)
                {
                    return BadRequest();
                }

                var response = _policyDomainService.GetPolicyById(policyId);

                if (response == null)
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

        [HttpGet, Route("customerPolicies/{customerId}", Name = "GetPolicyByCustomer")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(PolicyDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult GetPoliciesByCustomer(int customerId)
        {
            try
            {
                if (customerId <= 0)
                {
                    return BadRequest();
                }

                var response = _policyDomainService.GetPoliciesByCustomer(customerId);

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

        [HttpPost, Route("")]
        [SwaggerResponseRemoveDefaults]
        [SwaggerResponse(HttpStatusCode.Created, Type = typeof(PolicyDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Post([FromBody]PolicyDto policy)
        {
            try
            {
                if (policy == null)
                {
                    return BadRequest();
                }

                var response = _policyDomainService.CreatePolicy(policy);

                if(!string.IsNullOrEmpty(response.ValidationMessage))
                {
                    return BadRequest(response.ValidationMessage);
                }

                return Ok(response.Policy);
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPut, Route("")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(PolicyDto))]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Put(int id, [FromBody]PolicyDto policy)
        {
            try
            {
                if (policy == null)
                {
                    return BadRequest();
                }

                var response = _policyDomainService.UpdatePolicy(id, policy);

                if (!string.IsNullOrEmpty(response.ValidationMessage))
                {
                    return BadRequest(response.ValidationMessage);
                }

                if (response.Policy == null)
                {
                    return NotFound();
                }

                return Ok(response.Policy);
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpDelete, Route("{policyId}")]
        [SwaggerResponse(HttpStatusCode.OK)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Delete(int policyId)
        {
            try
            {
                if (policyId <= 0)
                {
                    return BadRequest();
                }

                _policyDomainService.DeletePolicies(policyId);

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}