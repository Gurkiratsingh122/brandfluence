'use client';

import { Card, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

export function HelpSection() {
    const faqItems = [
        {
            question: 'How do I top up credits?',
            answer: 'You can top up credits by going to the "Spend & Credits" section and clicking on "Add Credits". Choose your desired amount and complete the payment process.',
        },
        {
            question: 'How do I approve a script?',
            answer: 'Go to My Campaigns → Pending Approval → Approve Scripts.',
        },
        {
            question: 'Who do I contact for support?',
            answer: 'You can contact our support team at support@BrandFluence.com or through the live chat feature available in the bottom right corner of your dashboard.',
        },
    ];

    return (
        <Card
            style={{
                borderRadius: '16px',
                border: '1px solid #e8eaff',
                marginBottom: '40px',
            }}
            bodyStyle={{ padding: '20px' }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                }}
            >
                <h3
                    style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#111',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <QuestionCircleOutlined />
                    Need Help?
                </h3>
                <Button
                    type="primary"
                    style={{
                        background: '#6c78ff',
                        borderRadius: '8px',
                        fontWeight: 500,
                    }}
                >
                    Visit Help Center
                </Button>
            </div>

            {/* FAQ Component */}
            <ReusableFAQ
                faqs={faqItems}
                title=""
                subtitle=""
                defaultOpenIndex={-1}
                primaryColor="from-blue-600 to-blue-500"
                contactCTA={{ enabled: false }}
            />
        </Card>
    );
}
