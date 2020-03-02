using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Data.Repositories.Contracts;
using System;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace InsuranceManagement.Data.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        internal InsuranceManagementEntities _context;

        public GenericRepository(InsuranceManagementEntities context)
        {
            _context = context;
        }

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        /// <summary>
        /// Generic Delete method for the entities
        /// </summary>
        /// <param name="id"></param>
        public virtual void Delete(object id)
        {
            T entityToDelete = _context.Set<T>().Find(id);
            Delete(entityToDelete);
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }

        public IQueryable<T> Find(Expression<Func<T, bool>> predicate)
        {
            IQueryable<T> query = _context.Set<T>().Where(predicate);
            return query;
        }

        public T Find(object id)
        {
            return _context.Set<T>().Find(id); ;
        }

        public IQueryable<T> GetAll()
        {
            IQueryable<T> query = _context.Set<T>();
            return query;
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
