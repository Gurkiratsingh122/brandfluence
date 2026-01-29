'use client';

import { Table } from 'antd';
import { CheckCircle, Clock } from 'lucide-react';

interface Earning {
    id: number;
    brand: string;
    campaign: string;
    platform: 'TikTok' | 'Instagram' | 'YouTube';
    type: string;
    cost: string;
    status: 'Completed' | 'In Progress' | 'Pending';
}

interface RecentEarningsTableProps {
    earnings?: Earning[];
}

export function RecentEarningsTable({ earnings }: RecentEarningsTableProps) {
    const defaultEarnings: Earning[] = [
        { id: 1, brand: 'Spring Launch', campaign: 'Promo', platform: 'TikTok', type: 'UGC', cost: '$210', status: 'Completed' },
        { id: 2, brand: 'Spring Launch', campaign: 'Promo', platform: 'Instagram', type: 'Paid Collab', cost: '$150', status: 'In Progress' },
        { id: 3, brand: 'Spring Launch', campaign: 'Promo', platform: 'YouTube', type: 'UGC', cost: '$180', status: 'Completed' },
    ];

    const dataToDisplay = earnings || defaultEarnings;

    const platformColors = {
        TikTok: 'bg-black',
        Instagram: 'bg-gradient-to-br from-purple-500 to-pink-500',
        YouTube: 'bg-red-600',
    };

    const platformIcons = {
        TikTok: 'T',
        Instagram: 'I',
        YouTube: 'Y',
    };

    const columns = [
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            render: (brand: string) => <span className="font-medium text-[#111]">{brand}</span>,
        },
        {
            title: 'Campaign',
            dataIndex: 'campaign',
            key: 'campaign',
            render: (campaign: string) => <span className="text-[#666]">{campaign}</span>,
        },
        {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',
            render: (platform: string) => (
                <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 ${platformColors[platform as keyof typeof platformColors]} rounded flex items-center justify-center`}>
                        <span className="text-white text-[10px] font-bold">{platformIcons[platform as keyof typeof platformIcons]}</span>
                    </div>
                    <span className="font-medium text-[#111]">{platform}</span>
                </div>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            render: (type: string) => <span className="text-[#666]">{type}</span>,
        },
        {
            title: 'Earnings',
            dataIndex: 'cost',
            key: 'cost',
            render: (cost: string) => <span className="font-medium text-[#6c78ff]">{cost}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                const statusConfig = {
                    'Completed': { icon: <CheckCircle className="w-4 h-4 text-[#04b700]" />, text: 'text-[#04b700]' },
                    'In Progress': { icon: <Clock className="w-4 h-4 text-[#fa8c16]" />, text: 'text-[#fa8c16]' },
                    'Pending': { icon: <Clock className="w-4 h-4 text-[#999]" />, text: 'text-[#999]' },
                };
                const config = statusConfig[status as keyof typeof statusConfig];
                return (
                    <div className="flex items-center gap-2">
                        {config.icon}
                        <span className={`font-medium ${config.text}`}>{status}</span>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[18px] font-bold text-[#111]">Recent Earnings & Payouts</h3>
                <button className="text-[12px] text-[#6c78ff] font-medium hover:underline">View All</button>
            </div>

            <Table
                columns={columns}
                dataSource={dataToDisplay.map((item, idx) => ({ ...item, key: idx }))}
                pagination={false}
                bordered={false}
                className="rounded-lg overflow-hidden"

            />
        </div>
    );
}
