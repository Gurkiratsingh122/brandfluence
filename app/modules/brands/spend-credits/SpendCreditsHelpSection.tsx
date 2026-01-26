'use client';

import { Card, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

export function SpendCreditsHelpSection() {
    const faqItems = [
        {
            question: 'How do I purchase more credits?',
            answer: 'You can purchase credits by clicking the "Purchase More Credits" button at the top of this page. Select your desired credit package and proceed to checkout.',
        },
        {
            question: 'When do credits expire?',
            answer: 'Unused credits will over month-to-month recur and do not expire as long as your account remains active.',
        },
        {
            question: 'How are credits deducted from my account?',
            answer: 'Credits are deducted based on the engagement metrics of your campaigns. Each influencer payment or impression milestone results in credit deduction.',
        },
        {
            question: 'What happens if my credit balance reaches zero?',
            answer: 'If your credit balance reaches zero, your active campaigns will be paused. You can resume them by purchasing more credits.',
        },
    ];

    return (
        <Card
            className="rounded-2xl border border-[#e8eaff] bg-white mb-10"
        >
            <div
                className="flex justify-between items-center mb-4"
            >
                <h3
                    className="text-base font-semibold text-[#111] m-0 flex items-center gap-2"
                >
                    <QuestionCircleOutlined style={{ color: '#6c78ff' }} />
                    Need Help?
                </h3>
                <Button type="primary" style={{ background: '#6c78ff' }}>
                    Visit Help Center
                </Button>
            </div>

            <ReusableFAQ faqs={faqItems} contactCTA={{ enabled: false }} title={""} subtitle='' />
        </Card>
    );
}
