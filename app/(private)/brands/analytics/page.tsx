'use client';

import { AnalyticsStatsSection } from '@/app/modules/brands/analytics/AnalyticsStatsSection';
import { AnalyticsChartsSection } from '@/app/modules/brands/analytics/AnalyticsChartsSection';
import { CampaignPerformanceTable } from '@/app/modules/brands/analytics/CampaignPerformanceTable';
import { AnalyticsInfluencersSection } from '@/app/modules/brands/analytics/AnalyticsInfluencersSection';
import { AnalyticsCompareCampaignSection } from '@/app/modules/brands/analytics/AnalyticsCompareCampaignSection';
import { AnalyticsHelpSection } from '@/app/modules/brands/analytics/AnalyticsHelpSection';

export default function AnalyticsPage() {
    return (
        <div className="p-8 flex flex-col gap-8">
            {/* Header */}
            <div >
                <h1 className="text-[28px] font-bold text-[#111] mb-3">
                    Analytics
                </h1>
                <p className="text-base text-[#3b4858]">
                    Monitor your growth and spending patterns to fuel better results.
                </p>
            </div>

            {/* Stats Cards */}
            <AnalyticsStatsSection />

            {/* Charts - Views & Credits */}
            <AnalyticsChartsSection />

            {/* Campaign Performance Table */}
            <CampaignPerformanceTable />

            {/* Influencers Section */}
            <AnalyticsInfluencersSection />

            {/* Compare Campaign */}
            <AnalyticsCompareCampaignSection />

            {/* Help Section */}
            <AnalyticsHelpSection />
        </div>
    );
}
