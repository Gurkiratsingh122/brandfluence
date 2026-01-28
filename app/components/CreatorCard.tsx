'use client';

import { useState } from 'react';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';
import { RequestRevisionModal } from '@/app/components/RequestRevisionModal';
import { ConfirmationModal } from '@/app/components/ConfirmationModal';

interface CreatorCardProps {
    username: string;
    profileImage?: string;
    headerImage?: string;
    location: string;
    status: 'applied' | 'shipping-required' | 'approved' | 'rejected' | 'didnt-meet-criteria';
    statusLabel?: string;
    bio: string;
    avgViews: string;
    avgER: string;
    viewsGrowth: string;
    erGrowth: string;
    videosUploaded?: number;
    platforms: {
        tiktok?: { followers: string; views: string };
        instagram?: { followers: string; likes: string };
        youtube?: { views: string; comments: string };
    };
    totalFollowers?: string;
    totalViews?: string;
    primaryAction?: 'approve' | 'view-performance' | 'view-application' | 'reconsider';
    secondaryAction?: 'reject' | 'request-revision' | 'view-profile' | 'reconsider';
}

export function CreatorCard({
    username,
    profileImage = undefined,
    headerImage = undefined,
    location,
    status,
    statusLabel,
    bio,
    avgViews,
    avgER,
    viewsGrowth,
    erGrowth,
    videosUploaded,
    platforms,
    totalFollowers,
    totalViews,
    primaryAction = 'approve',
    secondaryAction = 'reject',
}: CreatorCardProps) {
    const [requestRevisionOpen, setRequestRevisionOpen] = useState(false);
    const [confirmModal, setConfirmModal] = useState<{
        isOpen: boolean;
        type: 'approve' | 'reject' | 'reconsider' | null;
    }>({ isOpen: false, type: null });
    const [isLoading, setIsLoading] = useState(false);

    const statusConfig = {
        applied: { bg: 'bg-[#e1f4ff]', text: 'text-[#1890ff]' },
        'shipping-required': { bg: 'bg-[#fff4e6]', text: 'text-[#fa8c16]' },
        approved: { bg: 'bg-[#d4f4dd]', text: 'text-[#04b700]' },
        rejected: { bg: 'bg-[#ffe7e7]', text: 'text-[#ff4d4f]' },
        'didnt-meet-criteria': { bg: 'bg-[#ffe7e7]', text: 'text-[#ff4d4f]' },
    };

    const actionConfig = {
        approve: {
            label: 'Approve',
            variant: 'primary' as const,
            handler: () => setConfirmModal({ isOpen: true, type: 'approve' }),
        },
        'view-performance': {
            label: 'View Performance',
            variant: 'primary' as const,
            handler: () => console.log('View Performance'),
        },
        'view-application': {
            label: 'View Application',
            variant: 'primary' as const,
            handler: () => console.log('View Application'),
        },
        reconsider: {
            label: 'Reconsider',
            variant: 'primary' as const,
            handler: () => setConfirmModal({ isOpen: true, type: 'reconsider' }),
        },
        reject: {
            label: 'Reject',
            variant: 'secondary' as const,
            handler: () => setConfirmModal({ isOpen: true, type: 'reject' }),
        },
        'request-revision': {
            label: 'Request Revision',
            variant: 'secondary' as const,
            handler: () => setRequestRevisionOpen(true),
        },
        'view-profile': {
            label: 'View Profile',
            variant: 'secondary' as const,
            handler: () => console.log('View Profile'),
        },
    };

    const handleConfirmAction = () => {
        setIsLoading(true);
        setTimeout(() => {
            console.log(`${confirmModal.type} action confirmed`);
            setIsLoading(false);
            setConfirmModal({ isOpen: false, type: null });
        }, 500);
    };

    const handleRequestRevision = (data: any) => {
        console.log('Request revision submitted:', data);
    };

    const confirmConfig = {
        approve: {
            title: `Approve ${username}?`,
            message: 'This creator will be approved for the campaign.',
        },
        reject: {
            title: `Reject ${username}?`,
            message: 'This creator will be rejected from the campaign.',
        },
        reconsider: {
            title: `Reconsider ${username}?`,
            message: 'This creator will be reconsidered for the campaign.',
        },
    };

    return (
        <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] overflow-hidden">
            {/* Header Image */}
            <div className="relative h-24">
                <img src={headerImage || '/landscape_brand.jpg'} alt="" className="w-full h-full object-cover" />
                {/* Profile Image Overlay */}
                <div className="absolute -bottom-8 left-4">
                    <img src={profileImage || '/profile_brand.jpg'} alt={username} className="w-16 h-16 rounded-full border-4 border-white" />
                </div>
            </div>

            {/* Content */}
            <div className="pt-10 px-4 pb-4">
                {/* Status Badge */}
                <div className="flex justify-end mb-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-medium ${statusConfig[status].bg} ${statusConfig[status].text}`}>
                        {statusLabel || status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                </div>

                {/* Username and Location */}
                <h3 className="text-[15px] font-bold text-[#111] mb-1">{username}</h3>
                <div className="flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-[#666]" />
                    <span className="text-[12px] text-[#666]">{location}</span>
                    {videosUploaded && (
                        <>
                            <span className="text-[#d9e2eb] mx-1">•</span>
                            <span className="text-[12px] text-[#666]">{videosUploaded} Videos Uploaded</span>
                        </>
                    )}
                </div>

                {/* Bio */}
                <p className="text-[11px] text-[#666] leading-[1.4] mb-3 line-clamp-2">{bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#666] mb-0.5">Avg Views</span>
                        <div className="flex items-center gap-1">
                            <span className="text-[13px] font-semibold text-[#111]">{avgViews}</span>
                            <div className={`flex items-center gap-0.5 ${viewsGrowth.startsWith('+') ? 'text-[#04b700]' : 'text-[#ff4d4f]'}`}>
                                {viewsGrowth.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                <span className="text-[11px] font-medium">{viewsGrowth}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-[#666] mb-0.5">Avg ER</span>
                        <div className="flex items-center gap-1">
                            <span className="text-[13px] font-semibold text-[#111]">{avgER}</span>
                            <div className={`flex items-center gap-0.5 ${erGrowth.startsWith('+') ? 'text-[#04b700]' : 'text-[#ff4d4f]'}`}>
                                {erGrowth.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                <span className="text-[11px] font-medium">{erGrowth}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform Stats */}
                {totalFollowers && totalViews ? (
                    <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-[11px]">
                            <span className="text-[#666]">Total Followers:</span>
                            <span className="font-semibold text-[#111]">{totalFollowers}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                            <span className="text-[#666]">Total Views:</span>
                            <span className="font-semibold text-[#111]">{totalViews}</span>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-2 mb-3">
                        {platforms.tiktok && (
                            <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                                <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-[9px] font-bold">T</div>
                                <div className="flex items-center gap-3 text-[11px]">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.tiktok.followers}</span>
                                        <span className="text-[#666]">Views</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.tiktok.views}</span>
                                        <span className="text-[#666]">likes</span>
                                    </div>
                                </div>
                                <span className="ml-auto text-[11px] font-semibold text-[#111]">4.9% ER</span>
                            </div>
                        )}
                        {platforms.instagram && (
                            <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                                <div className="w-5 h-5 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-[9px] font-bold">I</div>
                                <div className="flex items-center gap-3 text-[11px]">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.instagram.followers}</span>
                                        <span className="text-[#666]">Views</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.instagram.likes}</span>
                                        <span className="text-[#666]">likes</span>
                                    </div>
                                </div>
                                <span className="ml-auto text-[11px] font-semibold text-[#111]">4.9% ER</span>
                            </div>
                        )}
                        {platforms.youtube && (
                            <div className="flex items-center gap-2 p-2 bg-[#f8f9fa] rounded-lg">
                                <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-white text-[9px] font-bold">Y</div>
                                <div className="flex items-center gap-3 text-[11px]">
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.youtube.views}</span>
                                        <span className="text-[#666]">Views</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="font-semibold text-[#111]">{platforms.youtube.comments}</span>
                                        <span className="text-[#666]">comments</span>
                                    </div>
                                </div>
                                <span className="ml-auto text-[11px] font-semibold text-[#111]">4.9% ER</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button
                        variant={actionConfig[primaryAction].variant}
                        size="sm"
                        onClick={actionConfig[primaryAction].handler}
                        className="flex-1"
                    >
                        {actionConfig[primaryAction].label}
                    </Button>
                    <Button
                        variant={actionConfig[secondaryAction].variant}
                        size="sm"
                        onClick={actionConfig[secondaryAction].handler}
                        className="flex-1"
                    >
                        {actionConfig[secondaryAction].label}
                    </Button>
                </div>

                {/* Request Revision Modal */}
                <RequestRevisionModal
                    isOpen={requestRevisionOpen}
                    onClose={() => setRequestRevisionOpen(false)}
                    onSubmit={handleRequestRevision}
                    creatorName={username}
                />

                {/* Confirmation Modal */}
                {confirmModal.type && confirmConfig[confirmModal.type] && (
                    <ConfirmationModal
                        isOpen={confirmModal.isOpen}
                        onClose={() => setConfirmModal({ isOpen: false, type: null })}
                        onConfirm={handleConfirmAction}
                        title={confirmConfig[confirmModal.type].title}
                        message={confirmConfig[confirmModal.type].message}
                        confirmText={confirmModal.type.charAt(0).toUpperCase() + confirmModal.type.slice(1)}
                        isLoading={isLoading}
                    />
                )}
            </div>
        </div>
    );
}
