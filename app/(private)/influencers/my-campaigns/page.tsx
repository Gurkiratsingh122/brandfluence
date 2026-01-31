'use client';

import { useState, useMemo } from 'react';
import { Form, Pagination, Empty } from 'antd';
import { CampaignCard as ApprovedCampaignCard } from '@/app/modules/influencers/ApprovedCampaignCard';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { FormItemConfig } from '@/app/types/formItem';
import dayjs, { Dayjs } from 'dayjs';

interface MyCampaign {
    id: number;
    title: string;
    brandName: string;
    location: string;
    dateRange: string;
    status: 'Approved' | 'Pending' | 'In Progress';
    earnings: string;
    budgetLeft: string;
    payPer1000Views: string;
    platforms: { name: 'TikTok' | 'Instagram' | 'YouTube'; earnings: string; views: string }[];
    finalVideoStatus?: 'Submitted' | 'Pending' | 'Not Submitted';
    image?: string;
}

interface FilterState {
    search: string;
    status: string;
    dateRange: null | [Dayjs, Dayjs];
}

const mockMyCampaigns: MyCampaign[] = [
    {
        id: 1,
        title: 'Spring Launch Promo',
        brandName: 'Innovex Tech',
        location: 'Los Angeles, CA',
        dateRange: '04/01/2025 - 04/30/2025',
        status: 'Approved',
        earnings: '$1,200',
        budgetLeft: '$128,433',
        payPer1000Views: '$128',
        platforms: [
            { name: 'TikTok', earnings: '$38,750', views: '38,750' },
            { name: 'Instagram', earnings: '$38,750', views: '38,750' },
            { name: 'YouTube', earnings: '$38,750', views: '38,750' },
        ],
        finalVideoStatus: 'Submitted',
        image: '/landscape_brand.jpg',
    },
    {
        id: 2,
        title: 'Summer Collection Launch',
        brandName: 'Fashion Hub',
        location: 'New York, NY',
        dateRange: '05/01/2025 - 05/15/2025',
        status: 'Pending',
        earnings: '$900',
        budgetLeft: '$92,100',
        payPer1000Views: '$95',
        platforms: [
            { name: 'Instagram', earnings: '$22,300', views: '22,300' },
            { name: 'TikTok', earnings: '$18,400', views: '18,400' },
        ],
        finalVideoStatus: 'Pending',
        image: '/landscape_brand.jpg',
    },
    {
        id: 3,
        title: 'Fitness App Campaign',
        brandName: 'FitLife Pro',
        location: 'Austin, TX',
        dateRange: '04/10/2025 - 04/20/2025',
        status: 'In Progress',
        earnings: '$450',
        budgetLeft: '$34,500',
        payPer1000Views: '$80',
        platforms: [
            { name: 'TikTok', earnings: '$12,750', views: '12,750' },
            { name: 'YouTube', earnings: '$8,250', views: '8,250' },
        ],
        finalVideoStatus: 'Not Submitted',
        image: '/landscape_brand.jpg',
    },
];

const filterItems: FormItemConfig[] = [
    {
        name: 'search',
        type: 'input',
        placeholder: 'Search campaigns',
        colSpan: 1,
    },
    {
        name: 'dateRange',
        type: 'date',
        placeholder: 'Select date range',
        colSpan: 1,
    },
    {
        name: 'status',
        type: 'select',
        placeholder: 'Status',
        colSpan: 1,
        options: [
            { label: 'Approved', value: 'Approved' },
            { label: 'Pending', value: 'Pending' },
            { label: 'In Progress', value: 'In Progress' },
        ],
    },
];

export default function MyCampaignsPage() {
    const [form] = Form.useForm();
    const [filters, setFilters] = useState<FilterState>({ search: '', status: '', dateRange: null });
    const [page, setPage] = useState(1);
    const pageSize = 2;

    const filtered = useMemo(() => {
        let list = [...mockMyCampaigns];
        if (filters.search) {
            const q = filters.search.toLowerCase();
            list = list.filter((c) => c.title.toLowerCase().includes(q) || c.brandName.toLowerCase().includes(q));
        }
        if (filters.status) {
            list = list.filter((c) => c.status === filters.status);
        }
        return list;
    }, [filters]);

    const paginated = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page]);

    function onValuesChange(changed: Partial<FilterState>) {
        setFilters((prev) => ({ ...prev, ...changed }));
        setPage(1);
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mb-8">
                <h1 className="text-[32px] font-bold text-[#111] mb-2">My Campaigns</h1>
                <p className="text-[16px] text-[#666]">Overview of your active and past campaigns</p>
            </div>

                <Form form={form} layout="vertical" onValuesChange={onValuesChange} className="w-full">
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <FormItemRenderer items={filterItems} gridCols="grid-cols-3" />
                        </div>
                    </div>
                </Form>

            {paginated.length > 0 ? (
                <div className="grid grid-cols-2 gap-6 mb-8">
                    {paginated.map((c) => (
                        <ApprovedCampaignCard
                            key={c.id}
                            title={c.title}
                            brandName={c.brandName}
                            location={c.location}
                            dateRange={c.dateRange}
                            status={c.status}
                            earnings={c.earnings}
                            budgetLeft={c.budgetLeft}
                            payPer1000Views={c.payPer1000Views}
                            platforms={c.platforms}
                            finalVideoStatus={c.finalVideoStatus}
                            image={c.image}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-[#d9e2eb] p-12 text-center">
                    <Empty description="No campaigns" />
                </div>
            )}

            {filtered.length > 0 && (
                <div className="flex justify-center">
                    <Pagination current={page} pageSize={pageSize} total={filtered.length} onChange={setPage} showSizeChanger={false} />
                </div>
            )}
        </div>
    );
}