'use client';

import { Row, Col } from 'antd';
import { DashboardStatsCard } from '@/app/components/DashboardStatsCard';

export function AnalyticsStatsSection() {
  return (
    <Row gutter={[24, 24]} className="mb-8">
      <Col xs={24} sm={24} md={8}>
        <DashboardStatsCard
          title="Total Views"
          value="112,450"
          change="+13.04%"
          showChart={true}
          chartColor="#6c78ff"
        />
      </Col>
      <Col xs={24} sm={24} md={8}>
        <DashboardStatsCard
          title="Average Cost Per 1,000 Views"
          value="28.4"
          subtitle="credits"
          change="+21.67%"
          showChart={true}
          chartColor="#8b5cf6"
        />
      </Col>
      <Col xs={24} sm={24} md={8}>
        <DashboardStatsCard
          title="Total Spend"
          value="$112,450"
          change="+21.67%"
          showChart={true}
          chartColor="#ec4899"
        />
      </Col>
    </Row>
  );
}
