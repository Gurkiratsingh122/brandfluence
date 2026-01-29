'use client';

import { OpportunityCampaignCard } from '@/app/modules/influencers/OpportunityCampaignCard';
import { Button } from '@/app/components/UI/Button';

interface Opportunity {
    id: number;
    variant: 'pendingApproval' | 'applyNow' | 'withdrawApplication';
    title: string;
    brandName: string;
    image?: string;
    location?: string;
    category?: string;
    estimatedPayout?: string;
    budgetRemaining?: string;
    description?: string;
    applicantCount?: number;
    viewCount?: string;
    applyByDate?: string;
    appliedDate?: string;
    reviewTime?: string;
    platforms?: ('Instagram' | 'YouTube' | 'TikTok')[];
}

interface TopOpportunitiesSectionProps {
    opportunities?: Opportunity[];
}

export function TopOpportunitiesSection({ opportunities }: TopOpportunitiesSectionProps) {
    const defaultOpportunities: Opportunity[] = [
        {
            id: 1,
            variant: 'applyNow',
            title: 'Spring Launch Promo',
            brandName: 'Spring Tech',
            location: 'Los Angeles, CA',
            category: 'Tech & Design',
            estimatedPayout: '$500 - $2,000',
            budgetRemaining: '$45,000',
            description: 'Looking for UGC creators to showcase our new spring collection. We need authentic, engaging content that resonates with Gen Z audience.',
            applicantCount: 24,
            viewCount: '50,000',
            applyByDate: 'Jan 30, 2026',
            platforms: ['Instagram', 'YouTube', 'TikTok'],
        },
        {
            id: 2,
            variant: 'applyNow',
            title: 'Summer Beauty Campaign',
            brandName: 'Beauty Plus',
            location: 'New York, NY',
            category: 'Beauty & Skincare',
            estimatedPayout: '$800 - $3,000',
            budgetRemaining: '$75,000',
            description: 'Join our summer beauty campaign and create content featuring our new skincare line. Perfect opportunity for beauty influencers.',
            applicantCount: 18,
            viewCount: '35,000',
            applyByDate: 'Feb 5, 2026',
            platforms: ['Instagram', 'TikTok'],
        },
    ];

    const opportunitiesToDisplay = opportunities || defaultOpportunities;

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-[20px] font-bold text-[#111] mb-2">Top Opportunities</h3>
                    <p className="text-[14px] text-[#3b4858]">High-budget campaigns you may want to apply to.</p>
                </div>
                <Button variant="secondary" size="sm">
                    View All
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {opportunitiesToDisplay.map((opportunity) => (
                    <OpportunityCampaignCard
                        key={opportunity.id}
                        variant={opportunity.variant}
                        title={opportunity.title}
                        brandName={opportunity.brandName}
                        image={opportunity.image}
                        location={opportunity.location}
                        category={opportunity.category}
                        estimatedPayout={opportunity.estimatedPayout}
                        budgetRemaining={opportunity.budgetRemaining}
                        description={opportunity.description}
                        applicantCount={opportunity.applicantCount}
                        viewCount={opportunity.viewCount}
                        applyByDate={opportunity.applyByDate}
                        appliedDate={opportunity.appliedDate}
                        reviewTime={opportunity.reviewTime}
                        platforms={opportunity.platforms}
                    />
                ))}
            </div>
        </div>
    );
}
