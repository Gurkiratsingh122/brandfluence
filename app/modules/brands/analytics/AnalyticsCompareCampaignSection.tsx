'use client';

import { Card, Select } from 'antd';
import { MultilineChart } from '@/app/components/Charts/MultilineChart';

const campaignComparisonData = [
  { month: 'JAN', campaign1: 2000, campaign2: 2400, campaign3: 2240 },
  { month: 'FEB', campaign1: 3000, campaign2: 1398, campaign3: 2221 },
  { month: 'MAR', campaign1: 2000, campaign2: 9800, campaign3: 2290 },
  { month: 'APR', campaign1: 2780, campaign2: 3908, campaign3: 2000 },
  { month: 'MAY', campaign1: 1890, campaign2: 4800, campaign3: 2181 },
  { month: 'JUN', campaign1: 2390, campaign2: 3800, campaign3: 2500 },
  { month: 'JUL', campaign1: 3490, campaign2: 4300, campaign3: 2100 },
  { month: 'AUG', campaign1: 2100, campaign2: 2400, campaign3: 1400 },
  { month: 'SEP', campaign1: 3000, campaign2: 3200, campaign3: 2800 },
  { month: 'OCT', campaign1: 3500, campaign2: 3000, campaign3: 3600 },
  { month: 'NOV', campaign1: 2800, campaign2: 3500, campaign3: 2900 },
  { month: 'DEC', campaign1: 3200, campaign2: 3800, campaign3: 3200 },
];

export function AnalyticsCompareCampaignSection() {
  return (
    <Card
      className="rounded-4xl border border-[#e8eaff] mb-8"
      bodyStyle={{ padding: '20px' }}
    >
      <div
        className="flex justify-between items-center mb-6"
      >
        <h3
          className="text-base font-semibold text-[#111] m-0"
        >
          Compare Campaign
        </h3>
        <div className="flex gap-3">
          <Select
            style={{ width: 150 }}
            placeholder="Campaigns"
            options={[
              { label: 'Campaign 1', value: 'campaign1' },
              { label: 'Campaign 2', value: 'campaign2' },
              { label: 'Campaign 3', value: 'campaign3' },
            ]}
            defaultValue={['campaign1', 'campaign2', 'campaign3']}
            mode="multiple"
          />
          <Select
            style={{ width: 150 }}
            placeholder="Credits Spent"
            options={[
              { label: 'Views', value: 'views' },
              { label: 'Credits Spent', value: 'credits' },
              { label: 'Cost Per View', value: 'cpv' },
            ]}
            defaultValue="views"
          />
        </div>
      </div>

      <MultilineChart
        data={campaignComparisonData}
        lines={[
          { dataKey: 'campaign1', color: '#6c78ff', name: 'Campaign 1' },
          { dataKey: 'campaign2', color: '#ec4899', name: 'Campaign 2' },
          { dataKey: 'campaign3', color: '#f59e0b', name: 'Campaign 3' },
        ]}
        xAxisKey="month"
        height={350}
      />
    </Card>
  );
}
