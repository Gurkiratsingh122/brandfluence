'use client';

import { DashboardStatsCard } from '@/app/components/DashboardStatsCard';
import { CampaignsTable } from '@/app/modules/brands/dashboard/CampaignsTable';
import { CreditActivity } from '@/app/modules/brands/dashboard/CreditActivity';
import { HelpSection } from '@/app/modules/brands/dashboard/HelpSection';
import { PerformanceChart } from '@/app/modules/brands/dashboard/PerformanceChart';
import { Row, Col } from 'antd';

export default function Dashboard() {
    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Welcome Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>
                    Welcome back, BrandName!
                </h1>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                    Here's a snapshot of your current campaigns and account status.
                </p>
            </div>

            {/* Stats Cards */}
            <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
                <Col xs={24} sm={12} lg={8}>
                    <DashboardStatsCard
                        title="Credits Remaining"
                        subtitle="Current Credit Balance"
                        value="$4,250"
                        change="+21.01%"
                        showChart
                        chartColor="#6c78ff"
                    />
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <DashboardStatsCard
                        title="Views Captured"
                        subtitle="Total Views This Month"
                        value="112,450"
                        change="+21.01%"
                        showChart
                        chartColor="#a78bfa"
                    />
                </Col>
                <Col xs={24} sm={12} lg={8}>
                    <div className='flex flex-col w-full gap-2'>
                        <DashboardStatsCard
                            title="Live Campaigns"
                            subtitle="Active Campaigns"
                            value="3"
                            alignment='horizontal'
                        />
                        <DashboardStatsCard
                            title="Script & Videos"
                            subtitle="Pending Approvals"
                            value="2"
                            alignment='horizontal'
                        />
                    </div>

                </Col>

            </Row>

            {/* Campaigns Table */}
            <div style={{ marginBottom: '32px' }}>
                <CampaignsTable />
            </div>

            {/* Performance Chart and Credit Activity - Same Height */}
            <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
                <Col xs={24} lg={14}>
                    <div style={{ height: '500px' }}>
                        <PerformanceChart />
                    </div>
                </Col>
                <Col xs={24} lg={10}>
                    <div style={{ height: '500px' }}>
                        <CreditActivity />
                    </div>
                </Col>
            </Row>

            {/* Help Section */}
            <HelpSection />
        </div>
    );
}