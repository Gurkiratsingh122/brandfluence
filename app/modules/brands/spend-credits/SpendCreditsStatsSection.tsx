'use client';

import { Row, Col } from 'antd';
import { DashboardStatsCard } from '@/app/components/DashboardStatsCard';

export function SpendCreditsStatsSection() {
    return (
        <Row gutter={[24, 24]} className="mb-8">
            <Col xs={24} sm={12} md={6}>
                <DashboardStatsCard
                    title="Current Credit Balance"
                    value="3,450"
                    change="+26%"
                    showChart={true}
                    chartColor="#6c78ff"
                />
            </Col>
            <Col xs={24} sm={12} md={6}>
                <DashboardStatsCard
                    title="Total Spent"
                    value="2,150"
                    change="-21.01%"
                    showChart={true}
                    chartColor="#ef4444"
                />
            </Col>
            <Col xs={24} sm={12} md={6}>
                <DashboardStatsCard
                    title="Total Views Delivered"
                    value="72,500"
                    change="+26.01%"
                    showChart={true}
                    chartColor="#10b981"
                />
            </Col>
            <Col xs={24} sm={12} md={6}>
                <DashboardStatsCard
                    title="Average Cost Per 1000 Views"
                    value="29.65"
                    change="+21.01%"
                    showChart={true}
                    chartColor="#f59e0b"
                />
            </Col>
        </Row>
    );
}
