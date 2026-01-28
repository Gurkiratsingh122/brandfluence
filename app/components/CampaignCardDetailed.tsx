'use client';

import { useState } from 'react';
import { Eye, CreditCard, Wallet, TrendingUp, Calendar, MoreVertical, BarChart3, Pause, Edit, Trash2, RotateCcw, Check } from 'lucide-react';
import { Avatar, Dropdown } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { ActionConfirmModal } from '@/app/components/ActionConfirmModal';
import { RestartCampaignModal } from '@/app/components/RestartCampaignModal';

interface CampaignCardDetailedProps {
    title: string;
    startDate: string;
    endDate: string;
    status: 'live' | 'pending' | 'completed';
    imageUrl: string;
    views: number;
    spend: number;
    budgetLeft: number;
    costPerView: number;
    influencersApproved?: number;
    totalInfluencers?: number;
    scriptsApproved?: number;
    totalScripts?: number;
    videosApproved?: number;
    totalVideos?: number;
    platformViews?: {
        tiktok: number;
        instagram: number;
        youtube: number;
    };
}

export function CampaignCardDetailed({
    title,
    startDate,
    endDate,
    status,
    imageUrl,
    views,
    spend,
    budgetLeft,
    costPerView,
    influencersApproved,
    totalInfluencers,
    scriptsApproved,
    totalScripts,
    videosApproved,
    totalVideos,
    platformViews,
}: CampaignCardDetailedProps) {
    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean;
        type: 'pause' | 'delete' | null;
    }>({ isOpen: false, type: null });

    const [restartModal, setRestartModal] = useState(false);

    const handlePauseCampaign = () => {
        setConfirmModal({ isOpen: true, type: 'pause' });
    };

    const handleDeleteCampaign = () => {
        setConfirmModal({ isOpen: true, type: 'delete' });
    };

    const handleRestartCampaign = () => {
        setRestartModal(true);
    };

    const handleConfirmAction = () => {
        const action = confirmModal.type === 'pause' ? 'pause' : 'delete';
        console.log(`${action} campaign: ${title}`);
        setConfirmModal({ isOpen: false, type: null });
    };

    const handleRestartSubmit = (startDate: string, endDate: string) => {
        console.log(`Restart campaign: ${title} with dates ${startDate} - ${endDate}`);
        setRestartModal(false);
    };

    const menuItems: MenuItemType[] = [
        {
            key: 'analytics',
            label: 'View Analytics',
            icon: <BarChart3 className="w-4 h-4" />,
        },
        {
            key: 'pause',
            label: 'Pause Campaign',
            icon: <Pause className="w-4 h-4" />,
            onClick: handlePauseCampaign,
        },
        {
            key: 'edit',
            label: 'Edit',
            icon: <Edit className="w-4 h-4" />,
        },
        {
            key: 'delete',
            label: 'Delete',
            icon: <Trash2 className="w-4 h-4" />,
            danger: true,
            onClick: handleDeleteCampaign,
        },
    ];

    const statusConfig = {
        live: { bg: 'bg-[#d4f4dd]', text: 'text-[#04b700]', label: 'Live' },
        pending: { bg: 'bg-[#e8eaff]', text: 'text-[#6c78ff]', label: 'Pending' },
        completed: { bg: 'bg-[#f5e8ff]', text: 'text-[#b24bf3]', label: 'Completed' },
    };

    return (
        <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-bold text-[#111]">{title}</h3>
                <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
                    <button className="p-1 hover:bg-[#f0f0f0] rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-[#666]" />
                    </button>
                </Dropdown>
            </div>

            {/* Image */}
            <div className="relative h-32 w-full rounded-xl overflow-hidden">
                <img src={imageUrl || '/landscape_brand.jpg'} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Date and Status */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[14px] text-[#666]">
                    <Calendar className="w-4 h-4" />
                    <span>{startDate} - {endDate}</span>
                </div>
                <span
                    className={`px-3 py-1 rounded-full text-[12px] font-medium ${statusConfig[status].bg} ${statusConfig[status].text}`}
                >
                    {statusConfig[status].label}
                </span>
            </div>

            {/* Creators */}
            <div className="flex items-center gap-3">
                <Avatar.Group />
                <div className="flex items-center gap-1">
                    <span className="text-[14px] font-medium text-[#111]">Ann Smith</span>
                    <span className="text-[12px] text-[#666]">Influencer</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
                <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                        <Eye className="w-3.5 h-3.5 text-[#666]" />
                        <span className="text-[11px] text-[#666]">Views</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#111]">{views.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                        <CreditCard className="w-3.5 h-3.5 text-[#666]" />
                        <span className="text-[11px] text-[#666]">Spend</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#111]">-${spend.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                        <Wallet className="w-3.5 h-3.5 text-[#666]" />
                        <span className="text-[11px] text-[#666]">Budget Left</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#111]">${budgetLeft.toLocaleString()}</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#666]" />
                        <span className="text-[11px] text-[#666]">Cost Per View</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#111]">{costPerView.toFixed(1)}x</span>
                </div>
            </div>

            {/* Approval Sections or Platform Views */}
            {status === 'completed' && platformViews ? (
                <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                        <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold">
                            T
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#666]">Views on TikTok</span>
                            <span className="text-[12px] font-semibold text-[#111]">{platformViews.tiktok.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-[10px] font-bold">
                            I
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#666]">Views on Instagram</span>
                            <span className="text-[12px] font-semibold text-[#111]">{platformViews.instagram.toLocaleString()}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                        <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white text-[10px] font-bold">
                            Y
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#666]">Views on YouTube</span>
                            <span className="text-[12px] font-semibold text-[#111]">{platformViews.youtube.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-3">
                    {/* Approve Influencers */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[11px] text-[#666]">Approve Influencers</span>
                        <div className="flex items-center gap-2">
                            <Avatar.Group />
                            <span className="text-[12px] text-[#111]">+{totalInfluencers! - 2}k</span>
                            <div className='rounded-sm bg-[#6c78ff]'>
                                <Check color='white' size={"14"} />
                            </div>
                        </div>
                    </div>

                    {/* Review Scripts */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[11px] text-[#666]">Review Scripts</span>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-4 h-5 bg-[#e8eaff] rounded" />
                                ))}
                            </div>
                            <span className="text-[12px] text-[#111]">+{totalScripts! - 2}k</span>
                            <div className='rounded-sm bg-[#6c78ff]'>
                                <Check color='white' size={"14"} />
                            </div>
                        </div>
                    </div>

                    {/* Approve Videos */}
                    <div className="flex flex-col gap-2">
                        <span className="text-[11px] text-[#666]">Approve Videos</span>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-4 h-5 bg-[#f0f0f0] rounded" />
                                ))}
                            </div>
                            <span className="text-[12px] text-[#111]">+{totalVideos! - 2}k</span>
                            <div className='rounded-sm bg-[#6c78ff]'>
                                <Check color='white' size={"14"} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Action Button */}
            {status === 'completed' ? (
                <button
                    onClick={handleRestartCampaign}
                    className="flex items-center justify-center gap-2 bg-[#6c78ff] text-white h-9 rounded-full hover:bg-[#5c68ef] transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-[14px] font-medium">Restart Campaign</span>
                </button>
            ) : null}

            {/* Action Confirm Modal */}
            <ActionConfirmModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal({ isOpen: false, type: null })}
                onSubmit={handleConfirmAction}
                title={
                    confirmModal.type === 'pause'
                        ? 'Are you sure you want to pause this campaign?'
                        : 'Are you sure you want to delete this campaign?'
                }
                subHeading={
                    confirmModal.type === 'pause'
                        ? 'The campaign will be temporarily paused and won\'t be visible to users until you reactivate it.'
                        : 'This action cannot be undone. The campaign and all its data will be permanently deleted.'
                }
                submitText={confirmModal.type === 'pause' ? 'Pause Campaign' : 'Delete Campaign'}
            />

            {/* Restart Campaign Modal */}
            <RestartCampaignModal
                isOpen={restartModal}
                onClose={() => setRestartModal(false)}
                onSubmit={handleRestartSubmit}
                campaignTitle={title}
            />
        </div>
    );
}