'use client';

import { InfluencersHero } from '@/app/modules/landing-page-influencers/InfluencersHero';
import { InfluencersWhyUs } from '@/app/modules/landing-page-influencers/InfluencersWhyUs';
import { InfluencersHowToEarn } from '@/app/modules/landing-page-influencers/InfluencersHowToEarn';
import { InfluencersEarnings } from '@/app/modules/landing-page-influencers/InfluencersEarnings';
import { InfluencersFAQ } from '@/app/modules/landing-page-influencers/InfluencersFAQ';

export default function InfluencersPage() {
    return (
        <div className="min-h-screen bg-white">
            <InfluencersHero />
            <InfluencersWhyUs />
            <InfluencersHowToEarn />
            <InfluencersEarnings />
            <InfluencersFAQ />
        </div>
    );
}

