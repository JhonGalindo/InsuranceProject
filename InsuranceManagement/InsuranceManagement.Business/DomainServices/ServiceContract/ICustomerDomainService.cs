using InsuranceManagement.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InsuranceManagement.Business.DomainServices.ServiceContract
{
    public interface ICustomerDomainService
    {
        List<CustomerDto> GetCustomers();

        CustomerDto GetCustomerById(int customerId);

        void CreateCustomer(CustomerDto customer);

        void UpdateCustomer(CustomerDto customer);

        void DeleteCustomer(int customerId);
    }
}
