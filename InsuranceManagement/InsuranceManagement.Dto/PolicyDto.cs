using System;

namespace InsuranceManagement.Dto
{
    public class PolicyDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public short CoveringPeriod { get; set; }
        public decimal PolicyRate { get; set; }
        public int CoveringTypeId { get; set; }
        public int RiskTypeId { get; set; }
        public int CustomerId { get; set; }
        public short CoveringPercentage { get; set; }
        public bool State { get; set; }

        public RiskTypeDto RiskType { get; set; }
        public CoveringTypeDto CoveringType { get; set; }
    }
}
