'use client';

import { ArrowRight, TrendingUp } from 'lucide-react';
import { Table } from 'antd';
import { CAMPAIGN_RESULTS } from '@/app/constants/brands';
import { Button } from '@/app/components/UI/Button';
import { GradientSection } from '@/app/components/UI/GradientSection';
import { SectionTag } from '@/app/components/UI/SectionTag';
import { Badge } from '@/app/components/UI/Badge';

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
            render: (text: string) => <Badge text={text} variant="success" />,
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
        <GradientSection color="blue">
            {/* Section Header */}
            <div className="text-center mb-10">
                <SectionTag
                    icon={TrendingUp}
                    text="Real Results"
                    color="white"
                    isDark={true}
                />
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
        </GradientSection>
    );
}
