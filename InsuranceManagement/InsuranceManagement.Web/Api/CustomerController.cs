using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using Swashbuckle.Swagger.Annotations;
using System;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [RoutePrefix("api/customers")]
    public class CustomerController : ApiController
    {
        private readonly ICustomerDomainService _customerDomainService;

        private const string CustomerGetById = "CustomerGetById";

        public CustomerController(ICustomerDomainService customerDomainService)
        {
            _customerDomainService = customerDomainService;
        }

        [HttpGet, Route("", Name = "GetAllCustomers")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(CustomerDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Get()
        {
            try
            {
                var response = _customerDomainService.GetCustomers();

                if(response == null || !response.Any())
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

        [HttpGet, Route("{customerId}", Name = CustomerGetById)]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(CustomerDto))]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Get(int customerId)
        {
            try
            {
                if(customerId <= 0)
                {
                    return BadRequest();
                }

                var response = _customerDomainService.GetCustomerById(customerId);

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

        [HttpPost, Route("")]
        [SwaggerResponseRemoveDefaults]
        [SwaggerResponse(HttpStatusCode.Created, Type = typeof(CustomerDto))]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Post([FromBody]CustomerDto customer)
        {
            try
            {
                if (customer == null)
                {
                    return BadRequest();
                }

                var response = _customerDomainService.CreateCustomer(customer);

                return Created(CustomerGetById, response);
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        [HttpPut, Route("")]
        [SwaggerResponse(HttpStatusCode.OK, Type = typeof(CustomerDto))]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.NotFound)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Put(int id, [FromBody]CustomerDto customer)
        {
            try
            {
                if (customer == null)
                {
                    return BadRequest();
                }

                var response = _customerDomainService.UpdateCustomer(id, customer);

                if(response == null)
                {
                    return NotFound();
                }

                return Ok(response);
            }
            catch (Exception e)
            {
                return InternalServerError();
            }
        }

        [HttpDelete, Route("{customerId}")]
        [SwaggerResponse(HttpStatusCode.OK)]
        [SwaggerResponse(HttpStatusCode.Forbidden)]
        [SwaggerResponse(HttpStatusCode.BadRequest)]
        [SwaggerResponse(HttpStatusCode.InternalServerError)]
        public IHttpActionResult Delete(int customerId)
        {
            try
            {
                if (customerId <= 0)
                {
                    return BadRequest();
                }

                _customerDomainService.DeleteCustomer(customerId);

                return Ok();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}
