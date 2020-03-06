using InsuranceManagement.Dto;
using System.Collections.Generic;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface IPolicyDomainService
    {
        List<PolicyDto> GetPolicies();

        PolicyDto GetPolicyById(int id);

        List<PolicyDto> GetPoliciesByCustomer(int customerId);

        (string ValidationMessage, PolicyDto Policy) CreatePolicy(PolicyDto policy);

        (string ValidationMessage, PolicyDto Policy) UpdatePolicy(int id, PolicyDto policy);

        void DeletePolicies(int policyId);
    }
}
