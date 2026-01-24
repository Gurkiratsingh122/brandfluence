export interface Campaign {
  id: string;
  name: string;
  status: 'Live' | 'Pending' | 'Completed';
  startDate: string;
  endDate: string;
  spend: number;
  views: number;
  budget: number;
}

export interface CreditActivity {
  id: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  date: string;
}

export interface StatsData {
  creditBalance: number;
  creditChange: string;
  totalViews: number;
  viewsChange: string;
  activeCampaigns: number;
  pendingApprovals: number;
}
