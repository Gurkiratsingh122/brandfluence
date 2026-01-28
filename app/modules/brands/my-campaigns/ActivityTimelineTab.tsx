'use client';

import { useState } from 'react';
import { Form } from 'antd';
import { DollarSign, Video } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { FormItemConfig } from '@/app/types/formItem';

interface ActivityItem {
    id: number;
    type: 'payment' | 'video-approval';
    title: string;
    timestamp: string;
    thumbnail?: string;
}

export function ActivityTimelineTab() {
    const [form] = Form.useForm();
    const [currentPage, setCurrentPage] = useState(1);

    const filterItems: FormItemConfig[] = [
        {
            name: 'search',
            type: 'input',
            placeholder: 'Search',
            colSpan: 1,
        },
        {
            name: 'activityType',
            type: 'select',
            placeholder: 'All activities',
            options: [
                { value: 'all', label: 'All activities' },
                { value: 'payments', label: 'Payments' },
                { value: 'video-approvals', label: 'Video Approvals' },
                { value: 'script-approvals', label: 'Script Approvals' },
            ],
            colSpan: 1,
        },
    ];
    const thisWeekActivities: ActivityItem[] = [
        {
            id: 1,
            type: 'payment',
            title: 'Payment sent for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
        },
        {
            id: 2,
            type: 'video-approval',
            title: '1 video clip approved for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
            thumbnail: "/landscape_brand.jpg",
        },
        {
            id: 3,
            type: 'payment',
            title: 'Payment sent for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
        },
        {
            id: 4,
            type: 'payment',
            title: 'Payment sent for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
        },
    ];

    const lastWeekActivities: ActivityItem[] = [
        {
            id: 5,
            type: 'payment',
            title: 'Payment sent for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
        },
        {
            id: 6,
            type: 'video-approval',
            title: '1 video clip approved for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
            thumbnail: "/landscape_brand.jpg",
        },
        {
            id: 7,
            type: 'payment',
            title: 'Payment sent for @jennycreates',
            timestamp: 'Jan 27 at 9:32',
        },
    ];

    const ActivityItem = ({ activity }: { activity: ActivityItem }) => (
        <div className="flex gap-4 items-start py-4 border-b border-[#f0f0f0] last:border-0">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${activity.type === 'payment' ? 'bg-[#e1f4ff]' : 'bg-[#ffe7e7]'
                }`}>
                {activity.type === 'payment' ? (
                    <DollarSign className="w-5 h-5 text-[#1890ff]" />
                ) : (
                    <Video className="w-5 h-5 text-[#ff4d4f]" />
                )}
            </div>
            <div className="flex-1">
                <h4 className="text-[14px] font-medium text-[#111] mb-1">{activity.title}</h4>
                {activity.thumbnail && (
                    <img src={activity.thumbnail} alt="" className="w-16 h-16 object-cover rounded-lg mb-2" />
                )}
                <p className="text-[12px] text-[#999]">{activity.timestamp}</p>
            </div>
        </div>
    );

    return (
        <div>
            {/* Filters */}
            <Form form={form} layout="vertical" requiredMark={false} className="mb-6">
                <div className="flex justify-end">
                    <FormItemRenderer items={filterItems} gridCols="grid-cols-4" />
                </div>
            </Form>

            {/* Timeline */}
            <div className="space-y-6">
                {/* This Week */}
                <div>
                    <h3 className="text-[12px] font-bold text-[#6c78ff] mb-4 tracking-wide">THIS WEEK</h3>
                    <div className="bg-white rounded-xl border border-[#e8e8e8] p-4">
                        {thisWeekActivities.map((activity) => (
                            <ActivityItem key={activity.id} activity={activity} />
                        ))}
                    </div>
                </div>

                {/* Last Week */}
                <div>
                    <h3 className="text-[12px] font-bold text-[#6c78ff] mb-4 tracking-wide">LAST WEEK</h3>
                    <div className="bg-white rounded-xl border border-[#e8e8e8] p-4">
                        {lastWeekActivities.map((activity) => (
                            <ActivityItem key={activity.id} activity={activity} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
