using InsuranceManagement.Dto;
using System.Collections.Generic;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface ICustomerDomainService
    {
        List<CustomerDto> GetCustomers();

        CustomerDto GetCustomerById(int customerId);

        CustomerDto CreateCustomer(CustomerDto customer);

        CustomerDto UpdateCustomer(int id, CustomerDto customer);

        void DeleteCustomer(int customerId);
    }
}
