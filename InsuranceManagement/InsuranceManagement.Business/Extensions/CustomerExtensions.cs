using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Dto;

namespace InsuranceManagement.Business.Extensions
{
    public static class CustomerExtensions
    {
        public static CustomerDto ConvertToDto(this Customer customer)
        {
            var dto = new CustomerDto
            {
                Id = customer.Id,
                Name = customer.Name,
                LastName = customer.LastName,
                DateOfBirth = customer.DateOfBirth.GetValueOrDefault(),
                IdentificationNumber = customer.IdentificationNumber
            };

            return dto;
        }

        public static Customer MapToEntity(this CustomerDto customer)
        {
            var entity = new Customer
            {
                Id = customer.Id,
                Name = customer.Name,
                LastName = customer.LastName,
                DateOfBirth = customer.DateOfBirth,
                IdentificationNumber = customer.IdentificationNumber
            };

            return entity;
        }
    }
}
