'use client';

import { Button } from '@/app/components/UI/Button';
import { SpendCreditsStatsSection } from '@/app/modules/brands/spend-credits/SpendCreditsStatsSection';
import { CreditBalanceChart } from '@/app/modules/brands/spend-credits/CreditBalanceChart';
import { TransactionHistory } from '@/app/modules/brands/spend-credits/TransactionHistory';
import { SpendByCampaignSection } from '@/app/modules/brands/spend-credits/SpendByCampaignSection';
import { SpendCreditsHelpSection } from '@/app/modules/brands/spend-credits/SpendCreditsHelpSection';

export default function SpendCreditsPage() {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-[28px] font-bold text-[#111] mb-2">
                        Your Credit Balance
                    </h1>
                    <p className="text-base text-[#666]">
                        Use your credits to reward influencers based on views. 1 Credit = $1 per 1,000 views.
                    </p>
                </div>
                <Button
                    variant="primary"
                    size="md"
                >
                    Purchase More Credits
                </Button>
            </div>

            {/* Stats Section */}
            <SpendCreditsStatsSection />

            {/* Credit Balance Chart */}
            <CreditBalanceChart />

            {/* Transaction History */}
            <TransactionHistory />

            {/* Spend by Campaign */}
            <SpendByCampaignSection />

            {/* Help Section */}
            <SpendCreditsHelpSection />
        </div>
    );
}
