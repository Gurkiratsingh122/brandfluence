'use client';

import { Download, Mail } from 'lucide-react';
import { Modal } from 'antd';
import { Button } from '@/app/components/UI/Button';

interface CreatorPerformanceModalProps {
    isOpen: boolean;
    onClose: () => void;
    creator?: {
        username: string;
        campaignName: string;
        profileImage?: string;
    };
}

export function CreatorPerformanceModal({ isOpen, onClose, creator }: CreatorPerformanceModalProps) {
    const defaultCreator = {
        username: '@annsmith123',
        campaignName: 'Summer Skincare Launch',
        profileImage: "/profile_brand.jpg",
    };

    const data = creator || defaultCreator;

    const contentGallery = [
        {
            id: 1,
            title: 'GRWM Collab',
            platforms: [
                { icon: 'T', bg: 'bg-black', views: '480K', cost: '$29', er: '25%' },
                { icon: 'I', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', views: '480K', cost: '$29', er: '25%' },
                { icon: 'Y', bg: 'bg-red-600', views: '480K', cost: '$29', er: '25%' },
            ],
        },
        {
            id: 2,
            title: 'GRWM Collab',
            platforms: [
                { icon: 'T', bg: 'bg-black', views: '480K', cost: '$29', er: '25%' },
                { icon: 'I', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', views: '480K', cost: '$29', er: '25%' },
                { icon: 'Y', bg: 'bg-red-600', views: '480K', cost: '$29', er: '25%' },
            ],
        },
        {
            id: 3,
            title: 'GRWM Collab',
            platforms: [
                { icon: 'T', bg: 'bg-black', views: '480K', cost: '$29', er: '25%' },
                { icon: 'I', bg: 'bg-gradient-to-br from-purple-500 to-pink-500', views: '480K', cost: '$29', er: '25%' },
                { icon: 'Y', bg: 'bg-red-600', views: '480K', cost: '$29', er: '25%' },
            ],
        },
    ];

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            closable={false}
            width={1000}
            bodyStyle={{ padding: 0 }}
        >
            <div className="w-full">
                {/* Header */}
                <div className="p-6 border-b border-[#f0f0f0] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={"/profile_brand.jpg"} alt={data.username} className="w-12 h-12 rounded-full" />
                        <div>
                            <h2 className="text-[18px] font-bold text-[#111]">{data.username}</h2>
                            <p className="text-[13px] text-[#666]">{data.campaignName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold">T</span>
                        </div>
                        <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold">I</span>
                        </div>
                        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                            <span className="text-white text-[9px] font-bold">Y</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[calc(90vh-150px)] overflow-y-auto">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                        {/* Deliverables */}
                        <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <p className="text-[12px] text-[#666] mb-1">Deliverables</p>
                            <p className="text-[16px] font-bold text-[#111]">TikTok, IG Reel</p>
                        </div>

                        {/* Total Views */}
                        <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <p className="text-[12px] text-[#666] mb-1">Total Views</p>
                            <p className="text-[16px] font-bold text-[#111]">480K+</p>
                        </div>

                        {/* Cost Per View */}
                        <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <p className="text-[12px] text-[#666] mb-1">Cost Per View</p>
                            <p className="text-[16px] font-bold text-[#04b700]">+0.9%</p>
                        </div>

                        {/* Engagement Rate */}
                        <div className="bg-[#f8f9fa] rounded-xl p-4">
                            <p className="text-[12px] text-[#666] mb-1">Engagement Rate</p>
                            <p className="text-[16px] font-bold text-[#111]">21s</p>
                        </div>
                    </div>

                    {/* Total Views Chart */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[16px] font-bold text-[#111]">Total Views</h3>
                            <div className="px-3 py-1 bg-[#111] text-white text-[11px] font-medium rounded">9150</div>
                        </div>

                        {/* Simple Line Chart */}
                        <div className="relative h-48 bg-[#f8f9fa] rounded-xl p-4">
                            <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                                <polyline
                                    points="0,120 50,100 100,130 150,80 200,90 250,70 300,60 350,75 400,50"
                                    fill="none"
                                    stroke="#6c78ff"
                                    strokeWidth="3"
                                />
                                {/* Highlight point */}
                                <circle cx="250" cy="70" r="6" fill="#6c78ff" />
                                <line x1="250" y1="0" x2="250" y2="160" stroke="#d9e2eb" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>

                            {/* X-axis labels */}
                            <div className="flex justify-between text-[10px] text-[#999] mt-2">
                                <span>0</span>
                                <span>10</span>
                                <span>20</span>
                                <span>25</span>
                                <span>30</span>
                            </div>

                            {/* Y-axis labels */}
                            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-[#999] pr-2">
                                <span>200K</span>
                                <span>150K</span>
                                <span>100K</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Gallery */}
                    <div className="mb-6">
                        <h3 className="text-[16px] font-bold text-[#111] mb-4">Content Gallery</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {contentGallery.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl border border-[#e8e8e8] overflow-hidden">
                                    <img src={"/landscape_brand.jpg"} alt={item.title} className="w-full h-32 object-cover" />
                                    <div className="p-3">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-[13px] font-semibold text-[#111]">{item.title}</h4>
                                            <button className="w-7 h-7 bg-[#e8eaff] rounded flex items-center justify-center">
                                                <span className="text-[#6c78ff] text-[14px]">↗</span>
                                            </button>
                                        </div>

                                        {/* Platform Stats */}
                                        <div className="space-y-2">
                                            {item.platforms.map((platform, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-[11px]">
                                                    <div className={`w-5 h-5 ${platform.bg} rounded flex items-center justify-center shrink-0`}>
                                                        <span className="text-white text-[9px] font-bold">{platform.icon}</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 flex-1">
                                                        <div className="flex items-center gap-1">
                                                            <span className="font-semibold text-[#111]">{platform.views}</span>
                                                            <span className="text-[#999]">views</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <span className="font-semibold text-[#111]">{platform.cost}</span>
                                                            <span className="text-[#999]">per view</span>
                                                        </div>
                                                        <span className="font-semibold text-[#111] ml-auto">{platform.er} ER</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <Button variant="primary" size="md" className="flex-1">
                            Request Revisions
                        </Button>
                        <Button variant="secondary" size="md" className="flex-1">
                            View Script
                        </Button>
                        <Button variant="secondary" size="sm" className="w-12! h-12! p-0! rounded-full! flex items-center justify-center">
                            <Download className="w-5 h-5" />
                        </Button>
                        <Button variant="secondary" size="sm" className="w-12! h-12! p-0! rounded-full! flex items-center justify-center">
                            <Mail className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
