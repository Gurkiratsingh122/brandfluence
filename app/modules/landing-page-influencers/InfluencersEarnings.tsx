'use client';

import { TrendingUp } from 'lucide-react';
import { Table } from 'antd';

const CREATOR_EARNINGS = [
    {
        key: '1',
        name: 'Alex Chen',
        handle: '@alexcreates',
        views: '125K',
        earnings: '$2,500',
        campaigns: 8,
        avgRate: '$0.02/view'
    },
    {
        key: '2',
        name: 'Sarah Johnson',
        handle: '@sarahstyle',
        views: '89K',
        earnings: '$1,780',
        campaigns: 5,
        avgRate: '$0.02/view'
    },
    {
        key: '3',
        name: 'Mike Digital',
        handle: '@mikedigital',
        views: '156K',
        earnings: '$3,120',
        campaigns: 12,
        avgRate: '$0.02/view'
    }
];

export function InfluencersEarnings() {
    const columns = [
        {
            title: 'Creator',
            dataIndex: 'name',
            key: 'creator',
            render: (text: string, record: { handle: string }) => (
                <div>
                    <p className="text-base font-semibold text-gray-900">{text}</p>
                    <p className="text-sm text-gray-600">{record.handle}</p>
                </div>
            ),
        },
        {
            title: 'Total Views',
            dataIndex: 'views',
            key: 'views',
            render: (text: string) => (
                <div className="flex items-center gap-1">
                    <span className="text-base font-semibold text-purple-600">{text}</span>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                </div>
            ),
        },
        {
            title: 'Total Earnings',
            dataIndex: 'earnings',
            key: 'earnings',
            render: (text: string) => <span className="text-base font-bold text-purple-600">{text}</span>,
        },
        {
            title: 'Campaigns',
            dataIndex: 'campaigns',
            key: 'campaigns',
            render: (text: string) => <span className="text-base text-gray-600">{text}</span>,
        },
        {
            title: 'Avg Rate',
            dataIndex: 'avgRate',
            key: 'avgRate',
            render: (text: string) => (
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold">
                    {text}
                </span>
            ),
        },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Purple Container */}
                <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-3xl px-15 py-15 relative overflow-hidden">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-4 backdrop-blur-sm">
                            <TrendingUp className="w-5 h-5 text-white" />
                            <span className="text-white font-medium text-sm">Creator Success Stories</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Real Creators, Real Earnings
                        </h2>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <Table
                            columns={columns}
                            dataSource={CREATOR_EARNINGS}
                            pagination={false}
                            bordered={false}
                            className="[&_.ant-table]:border-0 [&_.ant-table-thead>tr>th]:bg-purple-50 [&_.ant-table-thead>tr>th]:border-purple-200 [&_.ant-table-thead>tr>th]:font-bold [&_.ant-table-tbody>tr:hover>td]:bg-gray-50"
                        />
                    </div>

                    {/* Table Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-purple-200 rounded-b-2xl mt-0">
                        <p className="text-xs text-gray-600 text-center">
                            <span className="font-semibold text-gray-900">Average Creator Earnings:</span> $2,467/month with 5+ campaigns
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
