using InsuranceManagement.Dto;
using System.Collections.Generic;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface IPolicyDomainService
    {
        List<PolicyDto> GetPolicies();

        PolicyDto GetPolicyById(int id);

        List<PolicyDto> GetPoliciesByCustomer(int customerId);

        void CreatePolicy(PolicyDto policy);

        void UpdatePolicy(PolicyDto policy);

        void DeletePolicies(List<int> policieIds);
    }
}
