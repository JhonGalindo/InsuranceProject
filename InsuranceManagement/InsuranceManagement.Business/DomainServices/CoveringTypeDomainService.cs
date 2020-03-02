using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
{
    public class CoveringTypeDomainService : ICoveringTypeDomainService
    {
        private readonly UnitOfWork _unitOfWork;

        public CoveringTypeDomainService(UnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<CoveringTypeDto> ObtenerTiposCubrimiento()
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
