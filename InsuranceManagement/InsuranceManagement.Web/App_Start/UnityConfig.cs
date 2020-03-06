using InsuranceManagement.Business.DomainServices;
using InsuranceManagement.Business.DomainServices.ServiceContract;
using InsuranceManagement.Data.UnitOfWork;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace InsuranceManagement.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            container.RegisterType<IPolicyDomainService, PolicyDomainService>()
                .RegisterType<ICustomerDomainService, CustomerDomainService>()
                .RegisterType<ICoveringTypeDomainService, CoveringTypeDomainService>()
                .RegisterType<IRiskTypeDomainService, RiskTypeDomainService>()
                .RegisterType<IUserDomainService, UserDomainService>()
                .RegisterType<IUnitOfWork, UnitOfWork>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }

    }
}