using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [RoutePrefix("policies")]
    public class PoliciesController : ApiController
    {
        private readonly IPolicyDomainService _policyDomainService;

        public PoliciesController(IPolicyDomainService policyDomainService)
        {
            _policyDomainService = policyDomainService;
        }

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var response = _policyDomainService.GetPolicies();

            if (response == null)
            {
                return NotFound();
            }
            return Ok(response);
        }

        [HttpGet]
        [ActionName("policyId")]
        public IHttpActionResult GetById(int id)
        {
            var response = _policyDomainService.GetPolicyById(id);

            if (response == null)
            {
                return NotFound();
            }
            return Ok(new Response<PolicyDto>
            {
                result = response,
                status = (int)HttpStatusCode.OK
            });
        }

        [HttpGet]
        [ActionName("customerPolicies")]
        public IHttpActionResult GetPoliciesByCustomer(int customerId)
        {
            var response = _policyDomainService.GetPoliciesByCustomer(customerId);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(new Response<List<PolicyDto>>
            {
                result = response,
                status = (int)HttpStatusCode.OK
            });
        }

        public IHttpActionResult Post([FromBody]PolicyDto policy)
        {
            try
            {
                _policyDomainService.CreatePolicy(policy);

                return Ok(new Response<string>
                {
                    status = (int)HttpStatusCode.OK
                });
            }
            catch (Exception ex)
            {
                return Ok(new Response<string>
                {
                    message = ex.Message,
                    status = (int)HttpStatusCode.BadRequest
                });
            }
        }

        public IHttpActionResult Put(int id, [FromBody]PolicyDto policy)
        {
            try
            {
                _policyDomainService.UpdatePolicy(policy);

                return Ok(new Response<string>
                {
                    status = (int)HttpStatusCode.OK
                });
            }
            catch (Exception ex)
            {
                return Ok(new Response<string>
                {
                    message = ex.Message,
                    status = (int)HttpStatusCode.BadRequest
                });
            }
        }

        public IHttpActionResult Delete(List<int> policyIds)
        {
            _policyDomainService.DeletePolicies(policyIds);
            
            return Ok();
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
    }
}