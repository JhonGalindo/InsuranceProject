using InsuranceManagement.Business.DomainServices;
using InsuranceManagement.Data.EFProvider.DataContext;
using InsuranceManagement.Data.Repositories;
using InsuranceManagement.Data.Repositories.Contracts;
using InsuranceManagement.Data.UnitOfWork;
using InsuranceManagement.Dto;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Telerik.JustMock;

namespace InsuranceManagement.Bussines.Tests.DomainServices
{
    [TestFixture]
    public class PolicyDomainServiceTests
    {
        private IUnitOfWork _unitOfWork;
        private IGenericRepository<RiskType> _riskTypeRepository;

        private PolicyDomainService _policyDomainService;

        [SetUp]
        public void SetUp()
        {
            _unitOfWork = Mock.Create<IUnitOfWork>(Behavior.Strict);
            _riskTypeRepository = Mock.Create<IGenericRepository<RiskType>>();

            _policyDomainService = new PolicyDomainService(_unitOfWork);
        }

        [Test]
        [Ignore("")]
        public void CreatePolicy_With_Valid_Criteria_Will_Create_Policy()
        {
            //Arrange
            var expectedName = "policy one";

            var policyToCreate = new PolicyDto
            {
                Name = expectedName,
                Description = "test policy",
                CoveringPeriod = 24,
                CoveringPercentage = 80,
                RiskTypeId = 2,
                CustomerId = 1,
                CoveringTypeId = 1,
                StartDate = DateTime.Today,
                PolicyRate = 7500           
            };

            var context = Mock.Create<InsuranceManagementEntities>(Constructor.Mocked, Behavior.CallOriginal);

            Mock.Arrange(() => _riskTypeRepository.Find(Arg.IsAny<Expression<Func<RiskType, Boolean>>>()))
                .Returns((new List<RiskType> { new RiskType { Id = 2, CoveringPercentage = 100 } }).AsQueryable());
            

            Mock.Arrange(() => _unitOfWork.RiskTypeRepository).Returns(new GenericRepository<RiskType>(context));
            Mock.Arrange(() => _unitOfWork.CoveringTypeRepository).Returns(new GenericRepository<CoveringType>(context));
            Mock.Arrange(() => _unitOfWork.PolicyRepository).Returns(new GenericRepository<Policy>(context));
            Mock.Arrange(() => _unitOfWork.Save());

            //Act
            var result = _policyDomainService.CreatePolicy(policyToCreate);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result.ValidationMessage, Is.EqualTo(string.Empty));
            Assert.That(result.Policy, Is.Not.Null);
            Assert.That(result.Policy.Name, Is.Not.EqualTo(expectedName));
            
        }

        [Test]
        [Ignore("")]
        public void CreatePolicy_With_Valid_Criteria_And_High_RiskTyoe_Will_Not_Create_Policy()
        {
            //Arrange
            var expectedName = "policy one";

            var policyToCreate = new PolicyDto
            {
                Name = expectedName,
                Description = "test policy",
                CoveringPeriod = 24,
                CoveringPercentage = 80,
                RiskTypeId = 2,
                CustomerId = 1,
                CoveringTypeId = 1,
                StartDate = DateTime.Today,
                PolicyRate = 7500
            };

            var context = Mock.Create<InsuranceManagementEntities>(Constructor.Mocked, Behavior.CallOriginal);

            Mock.Arrange(() => _riskTypeRepository.Find(Arg.IsAny<Expression<Func<RiskType, Boolean>>>()))
                .Returns((new List<RiskType> { new RiskType { Id = 2, CoveringPercentage = 50 } }).AsQueryable());


            Mock.Arrange(() => _unitOfWork.RiskTypeRepository).Returns(new GenericRepository<RiskType>(context));
            Mock.Arrange(() => _unitOfWork.CoveringTypeRepository).Returns(new GenericRepository<CoveringType>(context));
            Mock.Arrange(() => _unitOfWork.PolicyRepository).Returns(new GenericRepository<Policy>(context));
            Mock.Arrange(() => _unitOfWork.Save());

            //Act
            var result = _policyDomainService.CreatePolicy(policyToCreate);

            //Assert
            Assert.That(result, Is.Not.Null);
            Assert.That(result.ValidationMessage, Is.Not.EqualTo(string.Empty));
            Assert.That(result.Policy, Is.Null);
        }
    }
}
