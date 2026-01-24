'use client';

import { useState } from 'react';
import { Card, Row, Col, DatePicker } from 'antd';
import { PerformanceAreaChart } from '@/app/components/Charts/PerformanceAreaChart';
import { PerformanceBarChart } from '@/app/components/Charts/PerformanceBarChart';
import type { Dayjs } from 'dayjs';

const viewsData = [
  { date: '1 Oct', views: 2400 },
  { date: '5 Oct', views: 2210 },
  { date: '10 Oct', views: 2290 },
  { date: '15 Oct', views: 2000 },
  { date: '20 Oct', views: 2181 },
  { date: '25 Oct', views: 2500 },
  { date: '30 Oct', views: 2100 },
];

const creditsData = [
  { date: '1 Oct', credits: 1200 },
  { date: '5 Oct', credits: 900 },
  { date: '10 Oct', credits: 1100 },
  { date: '15 Oct', credits: 1500 },
  { date: '20 Oct', credits: 2700 },
  { date: '25 Oct', credits: 1800 },
  { date: '30 Oct', credits: 1500 },
];

const { RangePicker } = DatePicker;

export function AnalyticsChartsSection() {
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  return (
    <Row gutter={[24, 24]} className="mb-8">
      {/* Views Chart */}
      <Col xs={24} md={12}>
        <Card
          className="rounded-2xl border border-[#e8eaff] bg-white"
          bodyStyle={{ padding: '20px' }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-semibold text-[#111] m-0">
              Views
            </h3>
            <RangePicker
              size="small"
              onChange={(dates) => setDateRange(dates as [Dayjs | null, Dayjs | null])}
              className="text-xs"
            />
          </div>
          <PerformanceAreaChart
            data={viewsData}
            dataKey="views"
            xAxisKey="date"
            color="#6c78ff"
            height={300}
          />
        </Card>
      </Col>

      {/* Credits Spent Chart */}
      <Col xs={24} md={12}>
        <Card
          className="rounded-2xl border border-[#e8eaff] bg-white"
          bodyStyle={{ padding: '20px' }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-base font-semibold text-[#111] m-0">
              Credits Spent
            </h3>
            <RangePicker
              size="small"
              onChange={(dates) => setDateRange(dates as [Dayjs | null, Dayjs | null])}
              className="text-xs"
            />
          </div>
          <PerformanceBarChart
            data={creditsData}
            dataKey="credits"
            xAxisKey="date"
            color="#6c78ff"
            height={300}
          />
        </Card>
      </Col>
    </Row>
  );
}
