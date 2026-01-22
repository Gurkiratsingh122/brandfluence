'use client';

import { FAQS } from '@/app/constants/brands';
import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

export function BrandsFAQ() {
    return (
        <ReusableFAQ
            faqs={FAQS}
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about BilledViews for brands"
            defaultOpenIndex={0}
            contactCTA={{
                enabled: true,
                title: 'Still have questions?',
                description: 'Our team is here to help you get started with influencer marketing',
                buttonText: 'Contact Support'
            }}
        />
    );
}
