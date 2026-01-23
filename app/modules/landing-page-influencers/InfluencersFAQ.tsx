'use client';

import { Button } from '@/app/components/UI/Button';
import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

const INFLUENCER_FAQS = [
    {
        question: 'How much can I earn per view?',
        answer: 'Earnings vary by campaign and industry, typically ranging from $0.01 to $0.05 per verified view. You can see exact rates before applying to campaigns.'
    },
    {
        question: 'Do I need a minimum follower count?',
        answer: 'No! BrandFluence pays based on verified views, not follower count. Creators with 100 followers or 100K followers can both earn equally by getting views.'
    },
    {
        question: 'When do I get paid?',
        answer: 'Payouts are processed within 24-48 hours of campaign completion. You can withdraw to your bank account or preferred payment method instantly.'
    },
    {
        question: 'What platforms do you support?',
        answer: 'Currently we support YouTube, TikTok, and Instagram Reels. We\'re expanding to more platforms soon. Each platform has different rate structures.'
    },
    {
        question: 'Can I create content however I want?',
        answer: 'Yes! Brands give you creative freedom. You just need to mention or feature their product naturally in your content. Authentic content performs better anyway.'
    },
    {
        question: 'What if my content gets low views?',
        answer: 'You only get paid for verified views. If content doesn\'t perform, you earn less, but there\'s no penalty. Try different content styles and platforms.'
    }
];

export function InfluencersFAQ() {
    return (
        <ReusableFAQ
            faqs={INFLUENCER_FAQS}
            title="Creator FAQ"
            subtitle="Everything you need to know about earning on BrandFluence"
            defaultOpenIndex={0}
            contactCTA={{
                enabled: true,
                title: "Still have questions?",
                description: "Our creator support team is here to help you succeed.",
                buttonText: "Contact Support",
            }}
        />
    );
}
