'use client';

import { useState } from 'react';
import { Calendar, Package } from 'lucide-react';
import CampaignBriefTab from '@/app/modules/influencers/campaigns/CampaignBriefTab';
import DeliverablesTab from '@/app/modules/influencers/campaigns/DeliverablesTab';
import PerformanceTab from '@/app/modules/influencers/campaigns/PerformanceTab';
import MessagingTab from '@/app/modules/influencers/campaigns/MessagingTab';
import TermsRightsTab from '@/app/modules/influencers/campaigns/TermsRightsTab';

type TabType = 'campaignBrief' | 'deliverables' | 'performance' | 'messaging' | 'termsRights';

interface CampaignDetailViewProps {
    campaign?: {
        title: string;
        status: string;
        trackingNumber: string;
        dateRange: string;
        brandName: string;
        image?: string;
    };
}

export default function CampaignDetailView({
    campaign = {
        title: 'Spring Launch Promo',
        status: 'Approved',
        trackingNumber: '123456',
        dateRange: '04/01/2025 - 04/30/2025',
        brandName: 'Innovex Tech',
    },
}: CampaignDetailViewProps) {
    const [activeTab, setActiveTab] = useState<TabType>('campaignBrief');

    const tabs = [
        { id: 'campaignBrief' as TabType, label: 'Campaign Brief' },
        { id: 'deliverables' as TabType, label: 'Deliverables' },
        { id: 'performance' as TabType, label: 'Performance' },
        { id: 'messaging' as TabType, label: 'Messaging' },
        { id: 'termsRights' as TabType, label: 'Terms & Rights' },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            {/* Campaign Header */}
            <div className="bg-white border-b border-[#d9e2eb] px-8 py-6">
                <div className="flex items-start gap-6">
                    {/* Campaign Image */}
                    <div className="w-[174px] h-[117px] rounded-xl overflow-hidden flex-shrink-0">
                        <img
                            src={campaign.image || "/landscape_brand.jpg"}
                            alt={campaign.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Campaign Info */}
                    <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-[#d4f4dd] text-[#04b700] text-[12px] font-medium rounded">
                                        {campaign.status}
                                    </span>
                                </div>
                                <h1 className="text-[28px] font-bold text-black">{campaign.title}</h1>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                                <button className="h-10 px-5 bg-[#6c78ff] text-white text-[14px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors">
                                    View Tracking
                                </button>
                                <button className="h-10 px-5 border border-[#d9e2eb] text-[#666] text-[14px] font-medium rounded-full hover:bg-[#f8f9fa] transition-colors">
                                    Update Address
                                </button>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-6 text-[14px] text-[#666]">
                            <div className="flex items-center gap-2">
                                <Package className="w-4 h-4" />
                                <span>Shipped — Tracking #: {campaign.trackingNumber}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{campaign.dateRange}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="px-2.5 py-0.5 bg-[#6c78ff] rounded text-white text-[12px] font-medium">
                                    Logo
                                </div>
                                <span className="text-black font-medium">{campaign.brandName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b border-[#d9e2eb] px-8">
                <div className="flex items-center gap-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-4 text-[15px] font-medium border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-[#6c78ff] text-[#6c78ff]'
                                : 'border-transparent text-[#666] hover:text-black'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="px-8 py-6">
                {activeTab === 'campaignBrief' && <CampaignBriefTab />}
                {activeTab === 'deliverables' && <DeliverablesTab />}
                {activeTab === 'performance' && <PerformanceTab />}
                {activeTab === 'messaging' && <MessagingTab />}
                {activeTab === 'termsRights' && <TermsRightsTab />}
            </div>
        </div>
    );
}

