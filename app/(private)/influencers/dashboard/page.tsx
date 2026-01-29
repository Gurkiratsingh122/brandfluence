'use client';

import { WelcomeHeader } from '@/app/modules/influencers/dashboard/WelcomeHeader';
import { StatsRow } from '@/app/modules/influencers/dashboard/StatsRow';
import { TopInfluencersSection } from '@/app/modules/influencers/dashboard/TopInfluencersSection';
import { NotificationsSection } from '@/app/modules/influencers/dashboard/NotificationsSection';
import { PerformanceChartSection } from '@/app/modules/influencers/dashboard/PerformanceChartSection';
import { MyCampaignsSection } from '@/app/modules/influencers/dashboard/MyCampaignsSection';
import { TopOpportunitiesSection } from '@/app/modules/influencers/dashboard/TopOpportunitiesSection';
import { RecentEarningsTable } from '@/app/modules/influencers/dashboard/RecentEarningsTable';
import { TipsResourcesSection } from '@/app/modules/influencers/dashboard/TipsResourcesSection';
import { NeedHelpSection } from '@/app/modules/influencers/dashboard/NeedHelpSection';

export default function InfluencerDashboard() {
    return (
        <div className="px-8 py-6 space-y-6">
            <WelcomeHeader name="Jane Doe" />
            <StatsRow />

            <div className="grid grid-cols-[1fr_350px] gap-4">
                <TopInfluencersSection />
                <NotificationsSection />
            </div>

            <PerformanceChartSection />
            <MyCampaignsSection />
            <TopOpportunitiesSection />
            <RecentEarningsTable />
            <TipsResourcesSection />
            <NeedHelpSection />
        </div>
    );
}
