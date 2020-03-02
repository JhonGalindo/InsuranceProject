using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Data.Repositories;

namespace InsuranceManagement.Data.UnitOfWork
{
    public interface IUnitOfWork
    {
        GenericRepository<Customer> CustomerRepository { get; }

        GenericRepository<User> UserRepository { get; }

        void Save();
    }
}
