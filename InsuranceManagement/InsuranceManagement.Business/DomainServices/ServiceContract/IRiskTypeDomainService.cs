using InsuranceManagement.Dto;
using System.Collections.Generic;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface IRiskTypeDomainService
    {
        List<RiskTypeDto> GetRiskTypes();
    }
}
