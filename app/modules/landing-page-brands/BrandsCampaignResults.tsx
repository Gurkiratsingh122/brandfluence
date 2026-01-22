'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import { Table } from 'antd';
import { CAMPAIGN_RESULTS } from '@/app/constants/brands';
import { Button } from '@/app/components/UI/Button';

export function BrandsCampaignResults() {
    const columns = [
        {
            title: 'Campaign Name',
            dataIndex: 'campaignName',
            key: 'campaignName',
            render: (text: string) => <span className="font-semibold text-gray-900">{text}</span>,
        },
        {
            title: 'Influencer',
            dataIndex: 'influencer',
            key: 'influencer',
            render: (text: string) => <span className="text-gray-600">{text}</span>,
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
            render: (text: string) => (
                <div className="flex items-center gap-1">
                    <span className="font-semibold text-blue-600">{text}</span>
                    <TrendingUp className="w-3 h-3 text-green-500" />
                </div>
            ),
        },
        {
            title: 'Reach',
            dataIndex: 'reach',
            key: 'reach',
            render: (text: string) => <span className="text-gray-600">{text}</span>,
        },
        {
            title: 'Engagement',
            dataIndex: 'engagement',
            key: 'engagement',
            render: (text: string) => (
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-semibold">
                    {text}
                </span>
            ),
        },
        {
            title: 'CTR',
            dataIndex: 'ctr',
            key: 'ctr',
            render: (text: string) => <span className="font-semibold text-gray-900">{text}</span>,
        },
        {
            title: 'Conversions',
            dataIndex: 'conversions',
            key: 'conversions',
            render: (text: string) => <span className="font-bold text-blue-600">{text}</span>,
        },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Blue Container */}
                <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl px-15 py-15 relative overflow-hidden">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full mb-4 backdrop-blur-sm">
                            <TrendingUp className="w-5 h-5 text-white" />
                            <span className="text-white font-medium text-sm">Real Results</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Sample Campaign Results
                        </h2>
                    </div>

                    {/* Table Container */}
                    <div className="bg-white rounded-t-2xl overflow-hidden shadow-2xl">
                        <Table
                            columns={columns}
                            dataSource={CAMPAIGN_RESULTS}
                            pagination={false}
                            bordered={false}
                            className="[&_.ant-table]:border-0 [&_.ant-table-thead>tr>th]:bg-blue-50 [&_.ant-table-thead>tr>th]:border-blue-200 [&_.ant-table-thead>tr>th]:font-bold [&_.ant-table-tbody>tr:hover>td]:bg-gray-50"
                        />
                    </div>

                    {/* Table Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-blue-200 rounded-b-2xl mt-0">
                        <p className="text-xs text-gray-600 text-center">
                            <span className="font-semibold text-gray-900">Average Campaign ROI:</span> 3.2x return on ad spend
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-10 flex justify-center">
                        <Button
                            variant="dark"
                            className="flex items-center gap-2"
                        >
                            <span>View Full Case Studies</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
