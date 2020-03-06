using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using System;
using System.Linq;

namespace InsuranceManagement.Business.DomainServices
{
    public class UserDomainService: IUserDomainService
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserDomainService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public bool IsUserValid(LoginRequest loginRequest)
        {
            var user = _unitOfWork.UserRepository.Find(t => t.UserName == loginRequest.UserName && t.Password == loginRequest.Password).FirstOrDefault();

            if (user != null)
            {
                user.LastLogin = DateTime.Now;
                _unitOfWork.UserRepository.Update(user);
                _unitOfWork.Save();

                return true;
            }

            return false;
        }
    }
}
