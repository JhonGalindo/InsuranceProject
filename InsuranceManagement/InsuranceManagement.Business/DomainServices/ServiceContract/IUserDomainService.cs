using InsuranceManagement.Dto;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface IUserDomainService
    {
        bool IsUserValid(LoginRequest loginRequest);
    }
}
