using System;
using System.Linq;
using System.Linq.Expressions;

namespace InsuranceManagement.Data.Repositories.Contracts
{
    public interface IGenericRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        IQueryable<T> Find(Expression<Func<T, bool>> predicate);
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        void Save();

    }
}
