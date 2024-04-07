export interface Product {
    id: string;
    budgetingDomain: string;
    groupOfLearners: string;
    practiceStudentsFieldNum: number;
    learnerQuotaFromStandardProposal: number;
    studentQuotaForCommitteeApproval: number;
    studentQuotaForBudgeting: number;
    promotesWeeklyHours: number;
    standardHoursInstitution: number;
    note: string;
    [key: string]: string | number;
  }