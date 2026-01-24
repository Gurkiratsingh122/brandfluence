'use client';

import { Card, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { ReusableFAQ } from '@/app/components/UI/ReusableFAQ';

export function AnalyticsHelpSection() {
  const faqItems = [
    {
      question: 'How often do analytics update?',
      answer: 'Analytics are updated every 24 hours. Real-time data is available in the dashboard, while detailed analytics reports are processed daily at 2 AM UTC.',
    },
    {
      question: 'Why do I see discrepancies between views and credits spent?',
      answer: 'Views count impressions while credits spent depend on confirmed 1,000-view milestones. Minor timing differences may occur.',
    },
    {
      question: 'Can I filter analytics by individual influencers?',
      answer: 'Yes! Use the filter options in the campaign performance table to view analytics for specific influencers or campaigns.',
    },
    {
      question: 'How do I schedule recurring reports?',
      answer: 'Navigate to Settings > Reports to set up automatic weekly, bi-weekly, or monthly reports sent to your email.',
    },
  ];

  return (
    <Card
      className="rounded-4xl border border-[#e8eaff] mb-10"
      bodyStyle={{ padding: '20px' }}
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

      <ReusableFAQ faqs={faqItems} contactCTA={{enabled: false}} />
    </Card>
  );
}
