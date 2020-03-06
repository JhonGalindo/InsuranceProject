using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
{
    public class RiskTypeDomainService : IRiskTypeDomainService
    {
        private readonly IUnitOfWork _unitOfWork;

        public RiskTypeDomainService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<RiskTypeDto> GetRiskTypes()
        {
            var riskTypes = _unitOfWork.RiskTypeRepository.GetAll();

            return riskTypes.Select(t => new RiskTypeDto
            {
                Id = t.Id,
                Description = t.Description,
                CoveringPercentage = t.CoveringPercentage
            }).ToList(); ;
        }
    }
}
