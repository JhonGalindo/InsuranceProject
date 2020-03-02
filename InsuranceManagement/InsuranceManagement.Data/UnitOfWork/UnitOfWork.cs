using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Data.Repositories;
using System;

namespace InsuranceManagement.Data.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private InsuranceManagementEntities context;
        private GenericRepository<Policy> policyRepository;
        private GenericRepository<CoveringType> coveringTypeRepository;
        private GenericRepository<RiskType> riskTypeRepository;
        private GenericRepository<Customer> customerRepository;
        private GenericRepository<User> userRepository;


        public UnitOfWork()
        {
            context = new InsuranceManagementEntities();
        }

        public GenericRepository<Policy> PolicyRepository
        {
            get
            {
                if (this.policyRepository == null)
                {
                    this.policyRepository = new GenericRepository<Policy>(context);
                }

                return policyRepository;
            }
        }

        public GenericRepository<CoveringType> CoveringTypeRepository
        {
            get
            {
                if (this.coveringTypeRepository == null)
                {
                    this.coveringTypeRepository = new GenericRepository<CoveringType>(context);
                }

                return coveringTypeRepository;
            }
        }

        public GenericRepository<RiskType> RiskTypeRepository
        {
            get
            {
                if (this.riskTypeRepository == null)
                {
                    this.riskTypeRepository = new GenericRepository<RiskType>(context);
                }

                return riskTypeRepository;
            }
        }

        public GenericRepository<Customer> CustomerRepository
        {
            get
            {

                if (this.customerRepository == null)
                {
                    this.customerRepository = new GenericRepository<Customer>(context);
                }

                return customerRepository;
            }
        }

        public GenericRepository<User> UserRepository
        {
            get
            {

                if (this.userRepository == null)
                {
                    this.userRepository = new GenericRepository<User>(context);
                }

                return userRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        #region Implementing IDiosposable...

        #region private dispose variable declaration...
        private bool disposed = false;
        #endregion

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }

            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        #endregion
    }
}
