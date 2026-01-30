'use client';

import { Modal } from 'antd';
import { MapPin, Calendar, CheckCircle, X } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';

interface CampaignDetailsModalProps {
    open: boolean;
    onClose: () => void;
    onApplyNow?: () => void;
    campaign?: {
        title: string;
        brandName: string;
        image?: string;
        location: string;
        dateRange: string;
        description: string;
        compensation: string;
        requirements: {
            tiktok?: number;
            instagram?: number;
            youtube?: number;
        };
        productInfo: {
            title: string;
            description: string;
            image?: string;
            shippingNote: string;
        };
        guidelines: {
            dos: string[];
            donts: string[];
        };
    };
}

export function CampaignDetailsModal({
    open,
    onClose,
    onApplyNow,
    campaign = {
        title: 'Spring Launch Promo',
        brandName: 'Innovex Tech',
        location: 'Los Angeles',
        dateRange: '20.05.2025 - 28.05.2025',
        description: 'This campaign invites content creators to showcase the brand\'s latest line of eco-friendly sneakers. The brand is committed to sustainability and quality craftsmanship.',
        compensation: 'Flat $300 + bonus $100 if video hits 50K views',
        requirements: {
            tiktok: 5,
            instagram: 1,
            youtube: 1,
        },
        productInfo: {
            title: 'The new sneaker is made from 100% recycled materials and features a durable sole.',
            description: 'Product will be shipped to your address if approved.',
            shippingNote: 'Product will be shipped to your address if approved.',
        },
        guidelines: {
            dos: [
                'Highlight the product\'s eco-friendly features and how it helps the environment.',
                'Use a friendly, upbeat, and energetic tone.',
            ],
            donts: [
                'Mention competitor brands',
                'Avoid formal or complicated language — keep it simple and approachable.',
            ],
        },
    },
}: CampaignDetailsModalProps) {
    const platformIcons = {
        tiktok: (
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M7 0.5C7 0.5 7.2 2.3 8.5 2.8C8.8 2.9 9.2 3 9.5 3V5C9 5 8.5 4.9 8 4.7C7.7 4.6 7.4 4.4 7 4.2V7.5C7 9.5 5.5 11 3.5 11C1.5 11 0 9.5 0 7.5C0 5.5 1.5 4.5 3.5 4.5V6.5C2.7 6.5 2.2 7 2.2 7.5C2.2 8 2.7 8.5 3.5 8.5C4.3 8.5 4.8 8 4.8 7.5V0.5H7Z" fill="white" />
                    </svg>
                </div>
                <span className="text-[13px] text-black">TikTok video</span>
            </div>
        ),
        instagram: (
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <defs>
                            <linearGradient id="ig-grad" x1="1" y1="15" x2="15" y2="1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFDD55" />
                                <stop offset="0.5" stopColor="#FF543E" />
                                <stop offset="1" stopColor="#C837AB" />
                            </linearGradient>
                        </defs>
                        <rect width="16" height="16" rx="3" fill="url(#ig-grad)" />
                        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.2" fill="none" />
                        <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.2" fill="none" />
                        <circle cx="12" cy="4" r="0.8" fill="white" />
                    </svg>
                </div>
                <span className="text-[13px] text-black">Instagram Story</span>
            </div>
        ),
        youtube: (
            <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect width="16" height="16" rx="3" fill="#E60000" />
                        <path d="M6 4L11 8L6 12V4Z" fill="white" />
                    </svg>
                </div>
                <span className="text-[13px] text-black">TikTok video</span>
            </div>
        ),
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            width={700}
            centered
            closable={false}
        >
            <div>
                {/* Header Image */}
                <div className="relative w-full h-50 rounded-t-xl overflow-hidden">
                    <img
                        src={campaign.image || "/landscape_brand.jpg"}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="pt-6 space-y-5">
                    {/* Title and Brand */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-[24px] font-bold text-black">{campaign.title}</h2>
                            <div className="flex items-center gap-1.5">
                                <div className="px-2 py-0.5 bg-[#6c78ff] rounded text-white text-[10px] font-medium">
                                    Logo
                                </div>
                                <span className="text-[14px] font-medium text-[#111]">{campaign.brandName}</span>
                            </div>
                        </div>

                        {/* Location and Date */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-[#666]">
                                <MapPin className="w-4 h-4" />
                                <span className="text-[13px]">{campaign.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[#666]">
                                <Calendar className="w-4 h-4" />
                                <span className="text-[13px]">{campaign.dateRange}</span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-[#3b4858] leading-relaxed">
                        {campaign.description}
                    </p>

                    {/* Compensation */}
                    <div>
                        <p className="text-[14px] text-black mb-1">
                            <span className="font-semibold">Compensation:</span> {campaign.compensation}
                        </p>
                    </div>

                    {/* Requirements */}
                    <div className="bg-white border border-[#d9e2eb] rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            {campaign.requirements.tiktok && (
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                                            <path d="M7 0.5C7 0.5 7.2 2.3 8.5 2.8C8.8 2.9 9.2 3 9.5 3V5C9 5 8.5 4.9 8 4.7C7.7 4.6 7.4 4.4 7 4.2V7.5C7 9.5 5.5 11 3.5 11C1.5 11 0 9.5 0 7.5C0 5.5 1.5 4.5 3.5 4.5V6.5C2.7 6.5 2.2 7 2.2 7.5C2.2 8 2.7 8.5 3.5 8.5C4.3 8.5 4.8 8 4.8 7.5V0.5H7Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] text-black font-medium">{campaign.requirements.tiktok}</span>
                                    <span className="text-[13px] text-black">TikTok video</span>
                                </div>
                            )}
                            {campaign.requirements.instagram && (
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-sm flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <defs>
                                                <linearGradient id="ig-grad2" x1="1" y1="15" x2="15" y2="1" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FFDD55" />
                                                    <stop offset="0.5" stopColor="#FF543E" />
                                                    <stop offset="1" stopColor="#C837AB" />
                                                </linearGradient>
                                            </defs>
                                            <rect width="16" height="16" rx="3" fill="url(#ig-grad2)" />
                                            <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.2" fill="none" />
                                            <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.2" fill="none" />
                                            <circle cx="12" cy="4" r="0.8" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] text-black font-medium">{campaign.requirements.instagram}</span>
                                    <span className="text-[13px] text-black">Instagram Story</span>
                                </div>
                            )}
                            {campaign.requirements.youtube && (
                                <div className="flex items-center gap-1">
                                    <div className="w-4 h-4 rounded-sm flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <rect width="16" height="16" rx="3" fill="#E60000" />
                                            <path d="M6 4L11 8L6 12V4Z" fill="white" />
                                        </svg>
                                    </div>
                                    <span className="text-[13px] text-black font-medium">{campaign.requirements.youtube}</span>
                                    <span className="text-[13px] text-black">TikTok video</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Product / Service Info */}
                    <div>
                        <h3 className="text-[16px] font-bold text-black mb-3">Product / Service Info</h3>
                        <div className="flex gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                                <img
                                    src={campaign.productInfo.image || "/landscape_brand.jpg"}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-[13px] text-black leading-relaxed mb-2">
                                    {campaign.productInfo.title}
                                </p>
                                <p className="text-[12px] text-[#6c78ff]">
                                    {campaign.productInfo.shippingNote}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Do's and Don'ts */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-[16px] font-bold text-black">Do:</h3>
                            <button className="text-[12px] text-[#6c78ff] hover:underline">
                                View Script Guidelines
                            </button>
                        </div>
                        <div className="space-y-2">
                            {campaign.guidelines.dos.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#d4f4dd] flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle className="w-3 h-3 text-[#04b700]" />
                                    </div>
                                    <p className="text-[13px] text-black flex-1">{item}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-[16px] font-bold text-black mt-4 mb-3">Don't:</h3>
                        <div className="space-y-2">
                            {campaign.guidelines.donts.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="w-4 h-4 rounded-full bg-[#ffe7e7] flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="w-3 h-3 text-[#ff4d4f]" />
                                    </div>
                                    <p className="text-[13px] text-black flex-1">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center w-full gap-3 pt-4">
                        <Button variant="secondary" size="sm" onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="primary" size="sm" onClick={onApplyNow}>
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
