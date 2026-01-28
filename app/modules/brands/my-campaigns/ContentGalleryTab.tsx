'use client';

import { useState } from 'react';
import { Form } from 'antd';
import { Download, Eye } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { FormItemConfig } from '@/app/types/formItem';

interface ContentItem {
    id: number;
    creator: string;
    creatorImage: string;
    status: 'Rejected' | 'Approved' | 'Resubmitted' | 'UGC Only';
    statusColor: string;
    uploadDate: string;
    title: string;
    thumbnail: string;
    platform: 'tiktok' | 'instagram' | 'youtube';
}

export function ContentGalleryTab() {
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
            name: 'dateUploaded',
            type: 'select',
            placeholder: 'Date Uploaded',
            options: [
                { value: 'newest', label: 'Newest First' },
                { value: 'oldest', label: 'Oldest First' },
            ],
            colSpan: 1,
        },
        {
            name: 'platform',
            type: 'select',
            placeholder: 'Platform',
            options: [
                { value: 'all', label: 'All Platforms' },
                { value: 'tiktok', label: 'TikTok' },
                { value: 'instagram', label: 'Instagram' },
                { value: 'youtube', label: 'YouTube' },
            ],
            colSpan: 1,
        },
        {
            name: 'tags',
            type: 'select',
            placeholder: 'Tags',
            options: [
                { value: 'all', label: 'All Tags' },
                { value: 'approved', label: 'Approved' },
                { value: 'rejected', label: 'Rejected' },
                { value: 'pending', label: 'Pending' },
            ],
            colSpan: 1,
        },
    ];

    const contentItems: ContentItem[] = [
        {
            id: 1,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Rejected',
            statusColor: 'text-[#ff4d4f]',
            uploadDate: 'Apr 11, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'tiktok',
        },
        {
            id: 2,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Approved',
            statusColor: 'text-[#04b700]',
            uploadDate: 'Apr 11, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'instagram',
        },
        {
            id: 3,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'UGC Only',
            statusColor: 'text-[#1890ff]',
            uploadDate: 'Apr 11, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'tiktok',
        },
        {
            id: 4,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Rejected',
            statusColor: 'text-[#ff4d4f]',
            uploadDate: 'Apr 11, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'youtube',
        },
        {
            id: 5,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Resubmitted',
            statusColor: 'text-[#fa8c16]',
            uploadDate: 'Oct 14, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'tiktok',
        },
        {
            id: 6,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Approved',
            statusColor: 'text-[#04b700]',
            uploadDate: 'Oct 14, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'instagram',
        },
        {
            id: 7,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'UGC Only',
            statusColor: 'text-[#1890ff]',
            uploadDate: 'Oct 14, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'youtube',
        },
        {
            id: 8,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Rejected',
            statusColor: 'text-[#ff4d4f]',
            uploadDate: 'Oct 14, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'instagram',
        },
        {
            id: 9,
            creator: '@annsmith',
            creatorImage: '/profile_brand.jpg',
            status: 'Resubmitted',
            statusColor: 'text-[#fa8c16]',
            uploadDate: 'Oct 14, 12:48pm',
            title: 'GRWM Collab — Draft 1',
            thumbnail: '/landscape_brand.jpg',
            platform: 'tiktok',
        },
    ];

    const getPlatformIcon = (platform: string) => {
        switch (platform) {
            case 'tiktok':
                return <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-[9px] font-bold">T</div>;
            case 'instagram':
                return <div className="w-5 h-5 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-[9px] font-bold">I</div>;
            case 'youtube':
                return <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-white text-[9px] font-bold">Y</div>;
        }
    };

    return (
        <div>
            {/* Filters */}
            <Form form={form} layout="vertical" requiredMark={false} className="mb-6">
                <div className="flex justify-end">
                    <FormItemRenderer items={filterItems} gridCols="grid-cols-4" />
                </div>
            </Form>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                {contentItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden">
                        {/* Header */}
                        <div className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={item.creatorImage} alt={item.creator} className="w-6 h-6 rounded-full" />
                                <span className="text-[12px] text-[#666]">{item.creator}</span>
                            </div>
                            <span className={`text-[11px] font-medium ${item.statusColor}`}>{item.status}</span>
                        </div>

                        {/* Upload Date and Platform */}
                        <div className="px-3 pb-2 flex items-center justify-between">
                            <span className="text-[11px] text-[#999]">{item.uploadDate}</span>
                            {getPlatformIcon(item.platform)}
                        </div>

                        {/* Thumbnail */}
                        <div className="relative">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
                        </div>

                        {/* Title and Actions */}
                        <div className="p-3">
                            <h4 className="text-[13px] font-medium text-[#111] mb-3">{item.title}</h4>
                            <div className="flex gap-2 justify-end">
                                <button className="w-8 h-8 rounded-lg bg-[#e1f4ff] flex items-center justify-center hover:bg-[#d0ebff] transition-colors">
                                    <Download className="w-4 h-4 text-[#1890ff]" />
                                </button>
                                <button className="w-8 h-8 rounded-lg bg-[#e8eaff] flex items-center justify-center hover:bg-[#d8daef] transition-colors">
                                    <Eye className="w-4 h-4 text-[#6c78ff]" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Previous
                </Button>

                <div className="flex items-center gap-2">
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-lg text-[14px] font-medium transition-colors ${currentPage === page
                                ? 'bg-[#6c78ff] text-white'
                                : 'text-[#666] hover:bg-[#f0f0f0]'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <span className="text-[#666] px-2">...</span>
                    {[8, 9, 10].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className="w-10 h-10 rounded-lg text-[14px] text-[#666] hover:bg-[#f0f0f0]"
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next →
                </Button>
            </div>
        </div>
    );
}
