'use client';

import { useState } from 'react';
import { Calendar, Edit, Trash2 } from 'lucide-react';
import { TaskManagementTab } from '@/app/modules/brands/my-campaigns/TaskManageMentTab';
import { ActivityTimelineTab } from '@/app/modules/brands/my-campaigns/ActivityTimelineTab';
import { ContentGalleryTab } from '@/app/modules/brands/my-campaigns/ContentGalleryTab';
import { CreatorsTab } from '@/app/modules/brands/my-campaigns/CreatorsTab';

export default function CampaignDetailPage() {
    const [activeTab, setActiveTab] = useState('creators');

    const tabs = [
        { key: 'creators', label: 'Creators' },
        { key: 'task-management', label: 'Task Management' },
        { key: 'message-center', label: 'Message Center' },
        { key: 'activity-timeline', label: 'Activity Timeline' },
        { key: 'content-gallery', label: 'Content Gallery' },
    ];

    return (
        <div className="p-10">
            {/* Campaign Header */}
            <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6 mb-6">
                <div className="flex gap-6">
                    {/* Campaign Image */}
                    <div className="shrink-0">
                        <img
                            src={'/landscape_brand.jpg'}
                            alt="Spring Launch Promo"
                            className="w-32 h-32 rounded-2xl object-cover border border-[#d9e2eb]"
                        />
                    </div>

                    {/* Campaign Info */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#d4f4dd] text-[#04b700]">
                                    Live
                                </span>
                                <h1 className="text-[24px] font-bold text-[#111]">Spring Launch Promo</h1>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-9 h-9 rounded-lg bg-[#f0f1ff] flex items-center justify-center hover:bg-[#e6f4ff] transition-colors">
                                    <Edit className="w-4 h-4 text-[#6c78ff]" />
                                </button>
                                <button className="w-9 h-9 rounded-lg bg-[#fff1f0] flex items-center justify-center hover:bg-[#ffe7e7] transition-colors">
                                    <Trash2 className="w-4 h-4 text-[#ff4d4f]" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-2 text-[14px] text-[#666]">
                                <Calendar className="w-4 h-4" />
                                <span>04/01/2025 - 06/30/2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold">T</div>
                                <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-[10px] font-bold">I</div>
                                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-[10px] font-bold">Y</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                {/* Budget Summary */}
                <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#e8eaff] rounded-lg flex items-center justify-center">
                            <span className="text-[16px]">💰</span>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#111]">Budget Summary</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Budget Allocated</span>
                            <span className="text-[14px] font-semibold text-[#111]">$5,000.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Amount Spent</span>
                            <span className="text-[14px] font-semibold text-[#111]">$3,100.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Budget Remaining</span>
                            <span className="text-[14px] font-semibold text-[#111]">$1,900.00</span>
                        </div>
                    </div>
                </div>

                {/* Campaign Activity */}
                <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#e8eaff] rounded-lg flex items-center justify-center">
                            <span className="text-[16px]">📊</span>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#111]">Campaign Activity</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Content Pieces Live</span>
                            <span className="text-[14px] font-semibold text-[#111]">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Total Views</span>
                            <span className="text-[14px] font-semibold text-[#111]">156,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Average Engagement</span>
                            <span className="text-[14px] font-semibold text-[#111]">5.2%</span>
                        </div>
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-[#e8eaff] rounded-lg flex items-center justify-center">
                            <span className="text-[16px]">📈</span>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#111]">Performance Metrics</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">CPC / CPV</span>
                            <span className="text-[14px] font-semibold text-[#111]">$0.02</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[13px] text-[#666]">Conversion Rate</span>
                            <span className="text-[14px] font-semibold text-[#6c78ff]">$3,200.00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-t-2xl border border-[#d9e2eb] border-b-0 flex gap-6 px-6 pt-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`pb-3 text-[14px] font-medium transition-colors relative ${activeTab === tab.key
                            ? 'text-[#6c78ff]'
                            : 'text-[#666] hover:text-[#111]'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.key && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6c78ff]" />
                        )}
                    </button>
                ))}
            </div>
            <div className="bg-white rounded-b-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">

                {/* Filters and Content */}
                {activeTab === 'creators' && <CreatorsTab />}

                {activeTab === 'task-management' && <TaskManagementTab />}

                {activeTab === 'activity-timeline' && <ActivityTimelineTab />}

                {activeTab === 'content-gallery' && <ContentGalleryTab />}

                {activeTab === 'message-center' && (
                    <div className="text-center py-12">
                        <p className="text-[16px] text-[#666]">Message Center content coming soon</p>
                    </div>
                )}

            </div>
        </div>
    );
}
