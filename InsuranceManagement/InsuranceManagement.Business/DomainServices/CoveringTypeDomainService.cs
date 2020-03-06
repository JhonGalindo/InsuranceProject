using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
{
    public class CoveringTypeDomainService : ICoveringTypeDomainService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CoveringTypeDomainService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<CoveringTypeDto> GetCoveringTypes()
        {
            var coveringTypes = _unitOfWork.CoveringTypeRepository.GetAll().ToList();

            return coveringTypes.Select(t => new CoveringTypeDto
            {
                Id = t.Id,
                Description = t.Description
            }).ToList(); ;
        }
    }
}
