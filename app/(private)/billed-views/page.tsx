'use client';

import React from 'react';
import { Table, Tag, Button, Input, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import StatCard from '@/components/StatCard';
import { billedViewsData } from '@/utils/mockData';

interface DataType {
    key: React.Key;
    id: string;
    client: string;
    date: string;
    amount: string;
    status: string;
    views: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Invoice ID',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <span className="font-medium text-gray-700">{text}</span>,
    },
    {
        title: 'Client',
        dataIndex: 'client',
        key: 'client',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
        render: (views) => views.toLocaleString(),
        sorter: (a, b) => a.views - b.views,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (amount) => <span className="font-semibold">${amount}</span>,
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (
            <Tag color={status === 'Paid' ? 'success' : 'warning'} className="px-3 py-1 rounded-full border-none">
                {status.toUpperCase()}
            </Tag>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Button type="link" size="small">Details</Button>
        ),
    },
];

export default function BilledViewsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Billed Views</h1>
                    <p className="text-gray-500">Manage and track your billed content views.</p>
                </div>
                <div className="flex gap-2">
                    <Button icon={<DownloadOutlined />}>Export</Button>
                    <Button type="primary" icon={<FilterOutlined />}>Filter</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="Total Views Billed" value="1,234,567" prefix={<SearchOutlined />} trend="+12%" trendDirection="up" />
                <StatCard title="Total Revenue" value={45600} prefix="$" trend="+5.4%" trendDirection="up" />
                <StatCard title="Pending Invoices" value={12} trend="-2" trendDirection="down" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-semibold">Recall History</h2>
                    <Input prefix={<SearchOutlined />} placeholder="Search invoices..." className="w-64" />
                </div>
                <Table columns={columns} dataSource={billedViewsData} pagination={{ pageSize: 7 }} />
            </div>
        </div>
    );
}
