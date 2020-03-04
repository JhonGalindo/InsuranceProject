using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Business.Extensions;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System;
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

            return policies.Select(policy => policy.ConvertToDto()).ToList();
        }

        public PolicyDto GetPolicyById(int id)
        {
            var policy = _unitOfWork.PolicyRepository.Find(id);

            return policy.ConvertToDto();
        }

        public List<PolicyDto> GetPoliciesByCustomer(int customerId)
        {
            var policies = _unitOfWork.PolicyRepository.Find(t => t.CustomerId == customerId).ToList();

            return policies.Select(policy => policy.ConvertToDto()).ToList();
        }

        public void CreatePolicy(PolicyDto policy)
        {
            var riskType = _unitOfWork.RiskTypeRepository.Find(policy.RiskTypeId);

            if (policy.Covering > riskType.CoveringPercentage)
            {
                throw new Exception("Covering Percentage not allowed for High risk type.");
            }

            var policyToCreate = policy.MapToEntity();

            policyToCreate.State = true;

            _unitOfWork.PolicyRepository.Add(policyToCreate);
            _unitOfWork.Save();
        }

        public void UpdatePolicy(PolicyDto policy)
        {
            var riskType = _unitOfWork.RiskTypeRepository.Find(policy.RiskTypeId);

            if (policy.Covering > riskType.CoveringPercentage)
            {
                throw new Exception("Covering Percentage not allowed for High risk type.");
            }

            var policyToUpdate = _unitOfWork.PolicyRepository.Find(policy.Id);

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
        }

        public void DeletePolicies(List<int> policieIds)
        {
            foreach (int policyId in policieIds)
            {
                _unitOfWork.PolicyRepository.Delete(policyId);
            }

            _unitOfWork.Save();
        }
    }
}
