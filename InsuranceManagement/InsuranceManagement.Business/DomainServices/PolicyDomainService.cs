using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Business.Extensions;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
{
    public class PolicyDomainService : IPolicyDomainService
    {
        private readonly IUnitOfWork _unitOfWork;

        public PolicyDomainService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<PolicyDto> GetPolicies()
        {
            var policies = _unitOfWork.PolicyRepository.GetAll().ToList();

            return policies?.Select(policy => policy.ConvertToDto()).ToList();
        }

        public PolicyDto GetPolicyById(int id)
        {
            var policy = _unitOfWork.PolicyRepository.Find(id);

            return policy?.ConvertToDto();
        }

        public List<PolicyDto> GetPoliciesByCustomer(int customerId)
        {
            var policies = _unitOfWork.PolicyRepository.Find(t => t.CustomerId == customerId).ToList();

            return policies?.Select(policy => policy.ConvertToDto()).ToList();
        }

        public (string ValidationMessage, PolicyDto Policy) CreatePolicy(PolicyDto policy)
        {
            var riskType = _unitOfWork.RiskTypeRepository.Find(policy.RiskTypeId);
            var coveringType = _unitOfWork.CoveringTypeRepository.Find(policy.CoveringTypeId);

            if (policy.Covering > riskType.CoveringPercentage)
            {
                return ("Covering Percentage not allowed for High risk type.", null);
            }
            var policyToCreate = policy.MapToEntity();

            policyToCreate.CoveringType = coveringType;
            policyToCreate.RiskType = riskType;

            _unitOfWork.PolicyRepository.Add(policyToCreate);
            _unitOfWork.Save();

            return (string.Empty, policyToCreate.ConvertToDto());
        }

        public (string ValidationMessage, PolicyDto Policy) UpdatePolicy(int id, PolicyDto policy)
        {
            var policyToUpdate = _unitOfWork.PolicyRepository.Find(id);

            if (policyToUpdate == null)
            {
                return (string.Empty, null);
            }

            var riskType = _unitOfWork.RiskTypeRepository.Find(policy.RiskTypeId);

            if (policy.Covering > riskType.CoveringPercentage)
            {
                return("Covering Percentage not allowed for High risk type.", null);
            }

            policyToUpdate.Name = policy.Name;
            policyToUpdate.Description = policy.Description;
            policyToUpdate.StartDate = policy.StartDate;
            policyToUpdate.State = policy.State;
            policyToUpdate.CoveringPeriod = policy.CoveringPeriod;
            policyToUpdate.Covering = policy.Covering;
            policyToUpdate.RiskTypeId = policy.RiskTypeId;
            policyToUpdate.CoveringTypeId = policy.CoveringTypeId;
            policyToUpdate.CustomerId = policy.CustomerId;
            policyToUpdate.PolicyRate = policy.PolicyRate;

            _unitOfWork.PolicyRepository.Update(policyToUpdate);
            _unitOfWork.Save();

            return (string.Empty, policyToUpdate.ConvertToDto());
        }

        public void DeletePolicies(int policyId)
        {
            _unitOfWork.PolicyRepository.Delete(policyId);

            _unitOfWork.Save();
        }
    }
}
