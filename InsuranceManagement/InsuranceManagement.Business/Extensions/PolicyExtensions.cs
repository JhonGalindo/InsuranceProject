using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Dto;

namespace InsuranceManagement.Business.Extensions
{
    public static class PolicyExtensions
    {
        public static PolicyDto ConvertToDto(this Policy policy)
        {
            var dto = new PolicyDto
            {
               Id = policy.Id,
               Name = policy.Name,
               Description = policy.Description,
               StartDate = policy.StartDate,
               State = policy.State,
               CoveringPeriod = policy.CoveringPeriod,
               CoveringPercentage = policy.Covering,
               RiskTypeId = policy.RiskTypeId,
               CoveringTypeId = policy.CoveringTypeId,
               CustomerId = policy.CustomerId,
               PolicyRate = policy.PolicyRate,
               CoveringType = new CoveringTypeDto
               {
                   Id = policy.CoveringType.Id,
                   Description = policy.CoveringType.Description
                   
               },
               RiskType = new RiskTypeDto
               {
                   Id = policy.RiskType.Id,
                   Description = policy.RiskType.Description,
                   CoveringPercentage = policy.RiskType.CoveringPercentage                   
               }
            };

            return dto;
        }

        public static Policy MapToEntity(this PolicyDto policy)
        {
            var entity = new Policy
            {
                Id = policy.Id,
                Name = policy.Name,
                Description = policy.Description,
                StartDate = policy.StartDate,
                State = policy.State,
                CoveringPeriod = policy.CoveringPeriod,
                Covering = policy.CoveringPercentage,
                RiskTypeId = policy.RiskTypeId,
                CoveringTypeId = policy.CoveringTypeId,
                CustomerId = policy.CustomerId,
                PolicyRate = policy.PolicyRate                
            };

            return entity;
        }
    }
}
