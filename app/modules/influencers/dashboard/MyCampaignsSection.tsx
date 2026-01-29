'use client';

import { CampaignCard } from '@/app/modules/influencers/ApprovedCampaignCard';
import { Button } from '@/app/components/UI/Button';

interface Campaign {
    id: number;
    title: string;
    brandName: string;
    location: string;
    dateRange: string;
    status: 'Approved' | 'Pending' | 'In Progress';
    earnings: string;
    budgetLeft: string;
    payPer1000Views: string;
    platforms: {
        name: 'TikTok' | 'Instagram' | 'YouTube';
        earnings: string;
        views: string;
    }[];
    finalVideoStatus?: 'Submitted' | 'Pending' | 'Not Submitted';
    image?: string;
}

interface MyCampaignsSectionProps {
    campaigns?: Campaign[];
}

export function MyCampaignsSection({ campaigns }: MyCampaignsSectionProps) {
    const defaultCampaigns: Campaign[] = [
        {
            id: 1,
            title: 'Spring Launch Promo',
            brandName: 'Spring Tech',
            location: 'Los Angeles, CA',
            dateRange: 'Jan 15 - Feb 15, 2026',
            status: 'Approved',
            earnings: '$1,200',
            budgetLeft: '$800',
            payPer1000Views: '$2.50',
            platforms: [
                { name: 'TikTok', earnings: '$500', views: '200K' },
                { name: 'Instagram', earnings: '$400', views: '150K' },
                { name: 'YouTube', earnings: '$300', views: '120K' },
            ],
            finalVideoStatus: 'Submitted',
        },
        {
            id: 2,
            title: 'Summer Beauty Campaign',
            brandName: 'Beauty Plus',
            location: 'New York, NY',
            dateRange: 'Feb 1 - Mar 1, 2026',
            status: 'In Progress',
            earnings: '$950',
            budgetLeft: '$500',
            payPer1000Views: '$2.00',
            platforms: [
                { name: 'TikTok', earnings: '$400', views: '180K' },
                { name: 'Instagram', earnings: '$350', views: '140K' },
                { name: 'YouTube', earnings: '$200', views: '90K' },
            ],
            finalVideoStatus: 'Pending',
        },
    ];

    const campaignsToDisplay = campaigns || defaultCampaigns;

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-[20px] font-bold text-[#111] mb-2">My Campaigns</h3>
                    <p className="text-[14px] text-[#3b4858]">See the campaigns you've applied to or are currently working on.</p>
                </div>
                <Button variant="secondary" size="sm">
                    View All
                </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {campaignsToDisplay.map((campaign) => (
                    <CampaignCard
                        key={campaign.id}
                        title={campaign.title}
                        brandName={campaign.brandName}
                        location={campaign.location}
                        dateRange={campaign.dateRange}
                        status={campaign.status}
                        earnings={campaign.earnings}
                        budgetLeft={campaign.budgetLeft}
                        payPer1000Views={campaign.payPer1000Views}
                        platforms={campaign.platforms}
                        finalVideoStatus={campaign.finalVideoStatus}
                        image={campaign.image}
                    />
                ))}
            </div>
        </div>
    );
}
