'use client';
import { BrandsCampaignResults } from '@/app/modules/landing-page-brands/BrandsCampaignResults';
import { BrandsFAQ } from '@/app/modules/landing-page-brands/BrandsFAQ';
import { BrandsFeatures } from '@/app/modules/landing-page-brands/BrandsFeatures';
import { BrandsHero } from '@/app/modules/landing-page-brands/BrandsHero';
import { BrandsHowItWorks } from '@/app/modules/landing-page-brands/BrandsHowItWorks';
import { BrandsWhyUs } from '@/app/modules/landing-page-brands/BrandsWhyUs';

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-white">
            <main className="pt-18.25">
                <BrandsHero />
                <BrandsWhyUs />
                <BrandsHowItWorks />
                <BrandsFeatures />
                <BrandsCampaignResults />
                <BrandsFAQ />
            </main>
        </div>
    );
}
