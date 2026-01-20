'use client';

import React from 'react';
import { Row, Col, Card, List, Avatar } from 'antd';
import { DollarCircleOutlined, EyeOutlined, UserOutlined, RiseOutlined } from '@ant-design/icons';
import StatCard from '@/components/StatCard';
import RevenueChart from '@/components/RevenueChart';
import { revenueData, topClients } from '@/utils/mockData';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Hello, Gurkirt! 👋</h1>
                <p className="text-gray-500">Here's what's happening with your projects today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value={54230}
                    prefix="$"
                    trend="+15%"
                    trendDirection="up"
                    color="#6366f1"
                />
                <StatCard
                    title="Total Views"
                    value="2.4M"
                    prefix={<EyeOutlined />}
                    trend="+8%"
                    trendDirection="up"
                    color="#10b981"
                />
                <StatCard
                    title="Active Clients"
                    value={145}
                    prefix={<UserOutlined />}
                    trend="+12"
                    trendDirection="up"
                    color="#f59e0b"
                />
                <StatCard
                    title="Avg. CPM"
                    value={14.20}
                    prefix="$"
                    trend="-2%"
                    trendDirection="down"
                    color="#ef4444"
                />
            </div>

            <Row gutter={[24, 24]}>
                <Col xs={24} lg={16}>
                    <RevenueChart data={revenueData} />
                </Col>
                <Col xs={24} lg={8}>
                    <Card title={<span className="font-bold text-gray-700">Top Clients</span>} bordered={false} className="shadow-sm h-full">
                        <List
                            itemLayout="horizontal"
                            dataSource={topClients}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar style={{ backgroundColor: '#6366f1', verticalAlign: 'middle' }} size="large">{index + 1}</Avatar>}
                                        title={<span className="font-medium">{item.name}</span>}
                                        description={<span className="text-xs text-gray-400">Software & Tech</span>}
                                    />
                                    <div className="text-right">
                                        <div className="font-bold text-gray-800">${item.amount.toLocaleString()}</div>
                                        <div className="text-green-500 text-xs">{item.trend}</div>
                                    </div>
                                </List.Item>
                            )}
                        />
                        <div className="mt-4 text-center">
                            <a href="#" className="text-indigo-500 text-sm hover:underline">View All Clients</a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
