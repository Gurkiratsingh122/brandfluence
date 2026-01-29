'use client';

import { MapPin, Calendar, CreditCard, DollarSign, Star, Upload } from 'lucide-react';

interface CampaignCardProps {
    title: string;
    brandName: string;
    location: string;
    dateRange: string;
    status: 'Approved' | 'Pending' | 'In Progress';
    earnings: string;
    budgetLeft: string;
    payPer1000Views: string;
    platforms: {
        name: 'TikTok' | 'Instagram' | 'YouTube';
        earnings: string;
        views: string;
    }[];
    finalVideoStatus?: 'Submitted' | 'Pending' | 'Not Submitted';
    image?: string;
}

export function CampaignCard({
    title,
    brandName,
    location,
    dateRange,
    status,
    earnings,
    budgetLeft,
    payPer1000Views,
    platforms,
    finalVideoStatus,
    image = "/landscape_brand.jpg",
}: CampaignCardProps) {
    const statusColors = {
        'Approved': 'bg-[#ebfdeb] text-[#04ce00]',
        'Pending': 'bg-[#fff4e6] text-[#fa8c16]',
        'In Progress': 'bg-[#e8eaff] text-[#6c78ff]',
    };

    const platformIcons = {
        TikTok: (
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M8.5 0.5C8.5 0.5 8.7 2.8 10.5 3.5C11 3.7 11.5 3.8 12 3.8V6C11.2 6 10.4 5.8 9.7 5.4C9.3 5.2 8.9 4.9 8.5 4.6V9.5C8.5 12 6.5 14 4 14C1.5 14 0 12 0 9.5C0 7 1.5 5.5 4 5.5V8C3 8 2.5 8.7 2.5 9.5C2.5 10.3 3 11 4 11C5 11 5.5 10.3 5.5 9.5V0.5H8.5Z" fill="white" />
                </svg>
            </div>
        ),
        Instagram: (
            <div className="w-5 h-5 bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 rounded flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="1" y="1" width="10" height="10" rx="2" stroke="white" strokeWidth="1.2" fill="none" />
                    <circle cx="6" cy="6" r="2.5" stroke="white" strokeWidth="1.2" fill="none" />
                    <circle cx="9" cy="3" r="0.5" fill="white" />
                </svg>
            </div>
        ),
        YouTube: (
            <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M5 2.5V7.5L9.5 5L5 2.5Z" fill="white" />
                </svg>
            </div>
        ),
    };

    return (
        <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <h3 className="text-[22px] font-bold text-[#111] leading-tight flex-1">{title}</h3>
                    <div className="flex items-center gap-1.5">
                        <div className="px-2 py-0.5 bg-[#6c78ff] rounded text-white text-[10px] font-medium">
                            Logo
                        </div>
                        <span className="text-[14px] font-medium text-[#111]">{brandName}</span>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-39.75 rounded-3xl overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Location, Date & Status */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* Location */}
                        <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d9e2eb] rounded-lg">
                            <MapPin className="w-5 h-5 text-[#1c1b1f]" />
                            <span className="text-[14px] font-medium text-[#111]">{location}</span>
                        </div>

                        {/* Date Range */}
                        <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d9e2eb] rounded-lg">
                            <Calendar className="w-5 h-5 text-[#1c1b1f]" />
                            <span className="text-[14px] font-medium text-[#111]">{dateRange}</span>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`px-6 py-1 rounded-2xl ${statusColors[status]}`}>
                        <span className="text-[14px] font-medium">{status}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#d9e2eb]" />

                {/* Stats Grid */}
                <div className="border border-[#d9e2eb] rounded-lg p-3">
                    <div className="flex items-center justify-between">
                        {/* Earnings */}
                        <div className="flex items-center gap-2.5">
                            <CreditCard className="w-6 h-6 text-[#1c1b1f]" />
                            <div>
                                <p className="text-[12px] text-[#494b51] mb-1">Earnings</p>
                                <p className="text-[16px] font-medium text-[#111]">{earnings}</p>
                            </div>
                        </div>

                        {/* Budget Left */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-[#1c1b1f]" />
                            </div>
                            <div>
                                <p className="text-[12px] text-[#494b51] mb-1">Budget Left</p>
                                <p className="text-[16px] font-medium text-[#111]">{budgetLeft}</p>
                            </div>
                        </div>

                        {/* Pay Per 1,000 Views */}
                        <div className="flex items-center gap-2.5">
                            <Star className="w-6 h-6 text-[#1c1b1f]" />
                            <div>
                                <p className="text-[12px] text-[#494b51] mb-1">Pay Per 1,000 Views</p>
                                <p className="text-[16px] font-medium text-[#111]">{payPer1000Views}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#d9e2eb]" />

                {/* Platform Breakdown */}
                <div className="flex items-start justify-between px-1">
                    {platforms.map((platform, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            {platformIcons[platform.name]}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[12px] text-[#494b51]">Earnings</span>
                                    <span className="text-[16px] font-medium text-[#111]">{platform.earnings}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[12px] text-[#494b51]">Views</span>
                                    <span className="text-[16px] font-medium text-[#111]">{platform.views}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-[#d9e2eb]" />

                {/* Final Video Status */}
                {finalVideoStatus && (
                    <div className="flex items-center justify-between">
                        <span className="text-[15px] text-[#494b51]">Final Video</span>
                        <span className={`text-[16px] font-medium ${finalVideoStatus === 'Submitted' ? 'text-[#04b700]' :
                                finalVideoStatus === 'Pending' ? 'text-[#fa8c16]' :
                                    'text-[#666]'
                            }`}>
                            {finalVideoStatus}
                        </span>
                    </div>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-8">
                <button className="flex-1 h-10 bg-[#6c78ff] text-white text-[14px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors flex items-center justify-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Video
                </button>
                <button className="flex-1 h-10 bg-white border border-[#6c78ff] text-[#6c78ff] text-[14px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                    View Details
                </button>
            </div>
        </div>
    );
}
