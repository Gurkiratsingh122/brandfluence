export interface WhyUsCard {
    title: string;
    description: string;
    chartType: 'pie' | 'line' | 'metrics';
}

export interface Step {
    number: number;
    title: string;
    description: string;
    details: string[];
}

export interface Feature {
    title: string;
    description: string;
    icon: string;
}

export interface CampaignResult {
    campaignName: string;
    influencer: string;
    views: string;
    reach: string;
    engagement: string;
    ctr: string;
    conversions: number;
}

export interface FAQ {
    question: string;
    answer: string;
}
