using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Business.Extensions;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
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
            var customers = _unitOfWork.CustomerRepository.GetAll().ToList();

            return customers?.Select(customer => customer.ConvertToDto()).ToList();
        }

        public CustomerDto GetCustomerById(int customerId)
        {
            var customer = _unitOfWork.CustomerRepository.Find(customerId);

            return customer?.ConvertToDto();
        }

        public CustomerDto CreateCustomer(CustomerDto customer)
        {
            var customerToCreate = customer.MapToEntity();

            _unitOfWork.CustomerRepository.Add(customerToCreate);
            _unitOfWork.Save();

            return customerToCreate.ConvertToDto();
        }

        public CustomerDto UpdateCustomer(int id, CustomerDto customer)
        {
            var customerToUpdate = _unitOfWork.CustomerRepository.Find(id);

            if (customerToUpdate == null)
            {
                return null;
            }

            customerToUpdate.Name = customer.Name;
            customerToUpdate.LastName = customer.LastName;
            customerToUpdate.DateOfBirth = customer.DateOfBirth;
            customerToUpdate.IdentificationNumber = customer.IdentificationNumber;

            _unitOfWork.CustomerRepository.Update(customerToUpdate);
            _unitOfWork.Save();

            return customerToUpdate.ConvertToDto();
        }

        public void DeleteCustomer(int customerId)
        {
            _unitOfWork.CustomerRepository.Delete(customerId);
            _unitOfWork.Save();
        }
    }
}
