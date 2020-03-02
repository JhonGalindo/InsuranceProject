using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Business.Extensions;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business
{
    public class CustomerDomainService : ICustomerDomainService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CustomerDomainService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public List<CustomerDto> GetCustomers()
        {
            var customers = _unitOfWork.CustomerRepository.GetAll();

            return customers.Select(customer => customer.ConvertToDto()).ToList();
        }

        public CustomerDto GetCustomerById(int customerId)
        {
            var customer = _unitOfWork.CustomerRepository.Find(customerId);

            return customer.ConvertToDto();
        }

        public void CreateCustomer(CustomerDto customer)
        {
            var customerToCreate = customer.MapToEntity();

            _unitOfWork.CustomerRepository.Add(customerToCreate);
            _unitOfWork.Save();
        }

        public void UpdateCustomer(CustomerDto customer)
        {
            var customerToUpdate = customer.MapToEntity();

            _unitOfWork.CustomerRepository.Update(customerToUpdate);
            _unitOfWork.Save();
        }

        public void DeleteCustomer(int customerId)
        {
            _unitOfWork.CustomerRepository.Delete(customerId);
            _unitOfWork.Save();
        }
    }
}
