'use client';

import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

interface TipsResourcesSectionProps {
    items?: Array<{
        question: string;
        answer: string;
    }>;
}

export function TipsResourcesSection({ items }: TipsResourcesSectionProps) {
    const defaultItems = [
        {
            question: 'Top 10 Influencer Tips: Week',
            answer: 'Check out actionable tips from top performers this week. Learn strategies to maximize your earnings and grow your audience.',
        },
        {
            question: '100+ Quality Brands: Premium',
            answer: 'Access over 100 premium brand partnerships and exclusive opportunities available only to our top creators.',
        },
        {
            question: 'How do I get started?',
            answer: 'Learn the basics and start earning with your first campaign. Our onboarding guide will walk you through everything.',
        },
    ];

    const itemsToDisplay = items || defaultItems;

    return (
        <div className="rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6 bg-linear-to-b from-gray-50 to-white">
            <ReusableFAQ
                faqs={itemsToDisplay}
                title="Tips & Resources"
                subtitle=""
                defaultOpenIndex={0}
                primaryColor="#6c78ff"
                contactCTA={{ enabled: false }}
            />
        </div>
    );
}
