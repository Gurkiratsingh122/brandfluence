'use client';

import { Card, Table, Tag, Button, Space, Input } from 'antd';
import type { TableProps } from 'antd';
import {
    BarChartOutlined,
    SyncOutlined,
    EditOutlined,
    InstagramOutlined,
} from '@ant-design/icons';
import { Campaign } from '@/app/types/dashboard';
import { Button as CustomButton } from '@/app/components/UI/Button';

const { Search } = Input;

export function CampaignsTable() {
    const columns: TableProps<Campaign>['columns'] = [
        {
            title: 'Campaign Name',
            dataIndex: 'name',
            key: 'name',
            width: '25%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '12%',
            render: (status: string) => {
                let color = '#d1fae5';
                let textColor = '#065f46';
                let bgColor = '#d1fae5';

                if (status === 'Pending') {
                    color = '#ddd6fe';
                    textColor = '#5b21b6';
                    bgColor = '#ddd6fe';
                } else if (status === 'Completed') {
                    color = '#e5e7eb';
                    textColor = '#374151';
                    bgColor = '#e5e7eb';
                }

                return (
                    <Tag
                        color={bgColor}
                        style={{
                            color: textColor,
                            border: 'none',
                            borderRadius: '12px',
                            padding: '2px 12px',
                            fontSize: '12px',
                            fontWeight: 500
                        }}
                    >
                        {status}
                    </Tag>
                );
            },
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            width: '12%',
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
            width: '12%',
        },
        {
            title: 'Spend',
            dataIndex: 'spend',
            key: 'spend',
            width: '10%',
            render: (spend: number) => spend > 0 ? spend.toLocaleString() : '—',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            width: '10%',
            render: (views: number) => views > 0 ? views.toLocaleString() : '—',
        },
        {
            title: 'Budget',
            dataIndex: 'budget',
            key: 'budget',
            width: '10%',
            render: (budget: number) => `$${budget}`,
        },
        {
            title: '',
            key: 'actions',
            width: '9%',
            render: () => (
                <Space size={8}>
                    <Button
                        type="text"
                        icon={<BarChartOutlined style={{ color: '#6c78ff' }} />}
                        size="small"
                    />
                    <Button
                        type="text"
                        icon={<SyncOutlined style={{ color: '#6c78ff' }} />}
                        size="small"
                    />
                    <Button
                        type="text"
                        icon={<EditOutlined style={{ color: '#6c78ff' }} />}
                        size="small"
                    />
                    <Button
                        type="text"
                        icon={<InstagramOutlined style={{ color: '#e1306c' }} />}
                        size="small"
                    />
                </Space>
            ),
        },
    ];

    const data: Campaign[] = [
        {
            id: '1',
            name: 'Spring Launch Promo',
            status: 'Live',
            startDate: '04/01/2025',
            endDate: '04/30/2025',
            spend: 1200,
            views: 38750,
            budget: 108433,
        },
        {
            id: '2',
            name: 'Summer Collection Teaser',
            status: 'Pending',
            startDate: '04/01/2025',
            endDate: '04/30/2025',
            spend: 0,
            views: 0,
            budget: 108433,
        },
        {
            id: '3',
            name: "Father's Day Gift Drive",
            status: 'Completed',
            startDate: '04/01/2025',
            endDate: '04/30/2025',
            spend: 1200,
            views: 38750,
            budget: 108433,
        },
        {
            id: '4',
            name: "Father's Day Gift Drive",
            status: 'Completed',
            startDate: '04/01/2025',
            endDate: '04/30/2025',
            spend: 1200,
            views: 38750,
            budget: 108433,
        },
        {
            id: '5',
            name: "Father's Day Gift Drive",
            status: 'Completed',
            startDate: '04/01/2025',
            endDate: '04/30/2025',
            spend: 1200,
            views: 38750,
            budget: 108433,
        },
    ];

    return (
        <Card
            style={{
                borderRadius: '16px',
                border: '1px solid #e8eaff',
            }}
        >
            {/* Header */}
            <div style={{
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #f0f0f0'
            }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>
                    Recent Campaigns
                </h3>
                <Space>
                    <Search
                        placeholder="Search"
                        style={{ width: 200 }}
                        size="middle"
                    />
                    <Button type="link" style={{ color: '#6c78ff' }}>
                        See All
                    </Button>
                    <CustomButton variant="primary" size="md">
                        + New Campaign
                    </CustomButton>
                </Space>
            </div>

            {/* Table */}
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    placement: ['bottomCenter'],
                    pageSize: 5,
                    showSizeChanger: false,
                }}
                rowKey="id"
                style={{ padding: '0 24px 24px' }}
            />
        </Card>
    );
}
