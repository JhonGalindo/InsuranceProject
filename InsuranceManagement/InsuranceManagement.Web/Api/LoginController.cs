using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Dto;
using InsuranceManagement.Web.Auth;
using System.Net;
using System.Threading;
using System.Web.Http;

namespace InsuranceManagement.Web.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        private readonly IUserDomainService _userDomainService;

        public LoginController(IUserDomainService userDomainService)
        {
            _userDomainService = userDomainService;
        }

        [HttpGet]
        [Route("echoping")]
        public IHttpActionResult EchoPing()
        {
            return Ok(true);
        }

        [HttpGet]
        [Route("echouser")]
        public IHttpActionResult EchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated: {identity.IsAuthenticated}");
        }

        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult Authenticate(LoginRequest login)
        {
            if (!ModelState.IsValid || login == null)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            bool isCredentialValid = _userDomainService.IsUserValid(login);
            if (isCredentialValid)
            {
                var token = TokenGenerator.GenerateTokenJwt(login.UserName);

                return Ok(new Response<string>
                {
                    result = token,
                    status = (int)HttpStatusCode.OK
                });
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
