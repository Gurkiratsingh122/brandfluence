'use client';

import { Calendar, Clock, MapPin, Eye, FileText, Package, CheckCircle } from 'lucide-react';

type CardVariant = 'pendingApproval' | 'applyNow' | 'withdrawApplication';

interface OpportunityCardProps {
    variant: CardVariant;
    title: string;
    brandName: string;
    image?: string;
    location?: string;
    category?: string;
    estimatedPayout?: string;
    budgetRemaining?: string;
    description?: string;
    applicantCount?: number;
    viewCount?: string;
    applyByDate?: string;
    appliedDate?: string;
    reviewTime?: string;
    platforms?: ('Instagram' | 'YouTube' | 'TikTok')[];
}

export function OpportunityCampaignCard({
    variant,
    title,
    brandName,
    image = "/landscape_brand.jpg",
    location,
    category,
    estimatedPayout,
    budgetRemaining,
    description,
    applicantCount = 18,
    viewCount = '12,500',
    applyByDate,
    appliedDate,
    reviewTime = '2–4 days',
    platforms = ['Instagram', 'YouTube', 'TikTok'],
}: OpportunityCardProps) {
    const platformIcons = {
        Instagram: (
            <div className="w-7 h-7 rounded overflow-hidden shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <defs>
                        <linearGradient id="instagram-grad" x1="1.804" y1="26.212" x2="27.827" y2="3.689" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFDD55" />
                            <stop offset="0.5" stopColor="#FF543E" />
                            <stop offset="1" stopColor="#C837AB" />
                        </linearGradient>
                    </defs>
                    <rect width="28" height="28" rx="6" fill="url(#instagram-grad)" />
                    <rect x="7" y="7" width="14" height="14" rx="3" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="14" cy="14" r="4" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="20" cy="8" r="1.5" fill="white" />
                </svg>
            </div>
        ),
        YouTube: (
            <div className="w-7 h-7 rounded overflow-hidden shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect width="28" height="28" rx="6" fill="#E60000" />
                    <path d="M11 9L18 14L11 19V9Z" fill="white" />
                </svg>
            </div>
        ),
        TikTok: (
            <div className="w-7 h-7 rounded overflow-hidden shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect width="28" height="28" rx="6" fill="#0C0C0C" />
                    <path d="M19 9C18.5 8.5 18 8 17 8V11C17.5 11 18 11 18.5 10.5C19 10 19.5 9.5 20 9V12C19.5 12 19 12.5 18.5 13C18 13.5 17.5 14 17 14V17C17 18.5 16 20 14 20C12 20 11 18.5 11 17C11 15.5 12 14 14 14V17C13.5 17 13 17.5 13 17C13 17.5 13.5 18 14 18C14.5 18 15 17.5 15 17V8H17C17 8.5 17.5 9 19 9Z" fill="white" />
                </svg>
            </div>
        ),
    };

    const getStatusConfig = () => {
        switch (variant) {
            case 'pendingApproval':
                return {
                    badge: 'Pending',
                    badgeColor: 'bg-[#daecff] text-[#0480ff]',
                    showPlatforms: false,
                    showDetails: false,
                };
            case 'applyNow':
                return {
                    badge: 'Open',
                    badgeColor: 'bg-[#ebfdeb] text-[#04ce00]',
                    showPlatforms: true,
                    showDetails: true,
                };
            case 'withdrawApplication':
                return {
                    badge: 'Pending Review',
                    badgeColor: 'bg-[#e4eaff] text-[#2d5bff]',
                    showPlatforms: true,
                    showDetails: true,
                };
            default:
                return {
                    badge: 'Open',
                    badgeColor: 'bg-[#ebfdeb] text-[#04ce00]',
                    showPlatforms: false,
                    showDetails: false,
                };
        }
    };

    const config = getStatusConfig();

    return (
        <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                    {config.showPlatforms ? (
                        <>
                            <h3 className="text-5.5 font-bold text-[#111]">{title}</h3>
                            <div className="flex items-center gap-2">
                                {platforms.map((platform) => platformIcons[platform])}
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-5.5 font-bold text-[#111] flex-1">{title}</h3>
                            <div className="flex items-center gap-1.5">
                                <div className="px-2 py-0.5 bg-[#6c78ff] rounded text-white text-[10px] font-medium">
                                    Logo
                                </div>
                                <span className="text-[16px] font-medium text-[#111]">{brandName}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Image */}
                <div className="relative w-full h-39.75 rounded-3xl overflow-hidden border border-[rgba(46,109,254,0.42)]">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>

                {/* Date and Status Row */}
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                        {variant === 'pendingApproval' && appliedDate && (
                            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d9e2eb] rounded-lg h-9">
                                <Calendar className="w-5 h-5 text-[#1c1b1f]" />
                                <span className="text-[16px] font-medium text-[#494b51]">Applied: {appliedDate}</span>
                            </div>
                        )}
                        {variant === 'pendingApproval' && reviewTime && (
                            <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d9e2eb] rounded-lg h-9">
                                <Clock className="w-4 h-4 text-[#1c1b1f]" />
                                <span className="text-[16px] font-medium text-[#494b51]">{reviewTime}</span>
                            </div>
                        )}
                        {(variant === 'applyNow' || variant === 'withdrawApplication') && applyByDate && (
                            <div>
                                <div className="flex items-center gap-2 px-3 py-1.5 border border-[#d9e2eb] rounded-lg h-9">
                                    <Calendar className="w-5 h-5 text-[#1c1b1f]" />
                                    <span className="text-[14px] font-medium text-[#111]">Apply by: {applyByDate}</span>
                                </div>
                                {variant === 'applyNow' && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <CheckCircle className="w-3.5 h-3.5 text-[#04b700]" />
                                        <span className="text-[12px] font-medium text-[#04b700]">You meet the campaign requirements</span>
                                    </div>
                                )}
                                {variant === 'withdrawApplication' && appliedDate && (
                                    <div className="flex items-center gap-2 mt-1 pl-1">
                                        <CheckCircle className="w-3.5 h-3.5 text-[#04b700]" />
                                        <span className="text-[12px] font-medium text-[#04b700]">You applied on {appliedDate}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={`px-6 py-1 rounded-2xl ${config.badgeColor} h-8 flex items-center`}>
                        <span className="text-[14px] font-medium">{config.badge}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#d9e2eb]" />

                {/* Pending Message (only for pendingApproval) */}
                {variant === 'pendingApproval' && (
                    <div className="bg-white border border-[#d9e2eb] rounded-lg p-4">
                        <p className="text-[16px] font-medium text-black">
                            Pending — you'll be notified when reviewed.
                        </p>
                    </div>
                )}

                {/* Campaign Details (for applyNow and withdrawApplication) */}
                {config.showDetails && (
                    <>
                        <div className="space-y-4">
                            {location && (
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] text-[#494b51]">Location</span>
                                    <span className="text-[16px] font-medium text-[#111]">{location}</span>
                                </div>
                            )}
                            {category && (
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] text-[#494b51]">Category</span>
                                    <span className="text-[16px] font-medium text-[#111]">{category}</span>
                                </div>
                            )}
                            {estimatedPayout && (
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] text-[#494b51]">Estimated Payout</span>
                                    <span className="text-[16px] font-medium text-[#111]">{estimatedPayout}</span>
                                </div>
                            )}
                            {budgetRemaining && (
                                <div className="flex items-center justify-between">
                                    <span className="text-[15px] text-[#494b51]">Budget Remaining</span>
                                    <span className="text-[16px] font-medium text-[#111]">{budgetRemaining}</span>
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#d9e2eb]" />

                        {/* Description */}
                        {description && (
                            <>
                                <p className="text-[16px] text-black leading-relaxed">{description}</p>
                                <div className="h-px bg-[#d9e2eb]" />
                            </>
                        )}

                        {/* Bottom Info Row */}
                        <div className="flex items-center justify-between">
                            {/* Brand */}
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[12px] text-[#494b51]">Brand</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="px-2.5 py-0.5 bg-[#6c78ff] rounded text-white text-[16px] font-medium h-5.5 flex items-center">
                                        Logo
                                    </div>
                                    <span className="text-[16px] font-medium text-[#111]">{brandName}</span>
                                </div>
                            </div>

                            {/* Applicants */}
                            <div className="flex items-center gap-2">
                                <FileText className="w-6 h-6 text-black" />
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[12px] text-[#494b51]">Applicants</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[16px] font-medium text-[#111]">{applicantCount}</span>
                                        <div className="flex items-center pr-2">
                                            {/* <img src={"/profile_brand.jpg"} alt="" className="w-5.5! h-5.5 rounded-full -mr-2" /> */}
                                            {/* <img src={"/profile_brand.jpg"} alt="" className="w-5.5 h-5.5 rounded-full -mr-2" />
                                            <img src={"/profile_brand.jpg"} alt="" className="w-5.5 h-5.5 rounded-full -mr-2" />
                                            <img src={"/profile_brand.jpg"} alt="" className="w-5.5 h-5.5 rounded-full" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Views */}
                            <div className="flex items-center gap-2">
                                <Eye className="w-6 h-6 text-black" />
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[12px] text-[#494b51]">Views</span>
                                    <span className="text-[16px] font-medium text-[#111]">{viewCount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-[#d9e2eb]" />
                    </>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    {variant === 'pendingApproval' && (
                        <>
                            <button className="flex-1 h-10 bg-[#6c78ff] text-white text-[14px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors">
                                Pending Approval
                            </button>
                            <button className="flex-1 h-10 bg-white border border-[#6c78ff] text-[#6c78ff] text-[14px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                                Withdraw Application
                            </button>
                        </>
                    )}
                    {variant === 'applyNow' && (
                        <>
                            <button className="flex-1 h-10 bg-[#6c78ff] text-white text-[14px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors">
                                Apply Now
                            </button>
                            <button className="flex-1 h-10 bg-white border border-[#6c78ff] text-[#6c78ff] text-[14px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                                View Details
                            </button>
                            <button className="w-10 h-10 bg-[#6c78ff] rounded-lg flex items-center justify-center hover:bg-[#5c68ef] transition-colors">
                                <Package className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-10 h-10 bg-[#6c78ff] rounded-lg flex items-center justify-center hover:bg-[#5c68ef] transition-colors">
                                <FileText className="w-5 h-5 text-white" />
                            </button>
                        </>
                    )}
                    {variant === 'withdrawApplication' && (
                        <>
                            <button className="flex-1 h-10 bg-[#6c78ff] text-white text-[14px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors">
                                Withdraw Application
                            </button>
                            <button className="flex-1 h-10 bg-white border border-[#6c78ff] text-[#6c78ff] text-[14px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                                View Details
                            </button>
                            <button className="w-10 h-10 bg-[#6c78ff] rounded-lg flex items-center justify-center hover:bg-[#5c68ef] transition-colors">
                                <Package className="w-5 h-5 text-white" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
