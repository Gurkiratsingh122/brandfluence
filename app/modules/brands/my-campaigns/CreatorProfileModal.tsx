'use client';

import { MapPin, Calendar } from 'lucide-react';
import { Modal } from 'antd';
import { Button } from '@/app/components/UI/Button';

interface CreatorProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    creator?: {
        username: string;
        category: string;
        location: string;
        schedule: string;
        bio: string;
        matchScore: number;
        profileImage?: string;
        coverImage?: string;
        stats: {
            tiktok: string;
            instagram: string;
            youtube: string;
        };
        avgViews: string;
        avgER: string;
    };
}

export function CreatorProfileModal({ isOpen, onClose, creator }: CreatorProfileModalProps) {
    const defaultCreator = {
        username: '@annsmith123',
        category: 'Beauty & Skincare',
        location: 'Los Angeles',
        schedule: 'Flexible schedule',
        bio: "Hi! I'm a content creator focused on lifestyle and wellness. I love creating authentic, engaging content that connects with my audience. Always open to meaningful brand collaborations!",
        matchScore: 8.6,
        profileImage: "/profile_brand.jpg",
        coverImage: '/landscape_brand.jpg',
        stats: {
            tiktok: '480K+',
            instagram: '4.6M+',
            youtube: '600K+',
        },
        avgViews: '+1.8K',
        avgER: '+0.9%',
    };

    const data = creator || defaultCreator;

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            closable={false}
            width={900}
        >
            <div className="w-full">
                {/* Header */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img src={"/landscape_brand.jpg"} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Profile Header */}
                    <div className="flex items-start gap-6 mb-6">
                        <img src={"/profile_brand.jpg"} alt={data.username} className="w-24 h-24 rounded-full -mt-16 border-4 border-white shadow-lg" />

                        <div className="flex-1 pt-2">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h2 className="text-[24px] font-bold text-[#111] mb-1">{data.username}</h2>
                                    <p className="text-[14px] text-[#666] mb-3">{data.category}</p>
                                    <div className="flex items-center gap-4 text-[13px] text-[#666]">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span>{data.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{data.schedule}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <span className="px-3 py-1.5 bg-[#e8eaff] text-[#6c78ff] rounded-full text-[11px] font-medium">#UGC Creator</span>
                                    <span className="px-3 py-1.5 bg-[#ffe7e7] text-[#ff4d4f] rounded-full text-[11px] font-medium">#High ER</span>
                                    <span className="px-3 py-1.5 bg-[#e1f4ff] text-[#1890ff] rounded-full text-[11px] font-medium">#Top Region</span>
                                </div>
                            </div>

                            {/* Match Score */}
                            <div className="flex items-center gap-2">
                                <span className="text-[13px] text-[#666]">Match Score:</span>
                                <span className="text-[16px] font-bold text-[#04b700]">{data.matchScore}</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <p className="text-[14px] text-[#666] leading-relaxed mb-6">{data.bio}</p>

                    {/* Social Stats */}
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">T</span>
                            </div>
                            <span className="text-[15px] font-semibold text-[#111]">{data?.stats?.tiktok}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-linear-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">I</span>
                            </div>
                            <span className="text-[15px] font-semibold text-[#111]">{data?.stats?.instagram}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">Y</span>
                            </div>
                            <span className="text-[15px] font-semibold text-[#111]">{data?.stats?.youtube}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                            <div>
                                <span className="text-[12px] text-[#666]">Avg Views</span>
                                <p className="text-[15px] font-semibold text-[#111]">{data.avgViews}</p>
                            </div>
                            <div>
                                <span className="text-[12px] text-[#666]">Avg ER</span>
                                <p className="text-[15px] font-semibold text-[#111]">{data.avgER}</p>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Preview */}
                    <div className="mb-6">
                        <h3 className="text-[16px] font-bold text-[#111] mb-4">Portfolio Preview</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl overflow-hidden border border-[#e8e8e8]">
                                <img src={'/landscape_brand.jpg'} alt="GRWM Collab" className="w-full h-48 object-cover" />
                                <div className="p-3">
                                    <h4 className="text-[14px] font-semibold text-[#111] mb-1">GRWM Collab</h4>
                                    <p className="text-[12px] text-[#666] line-clamp-2 mb-2">
                                        Ann is a beauty enthusiast who deliver honest, in depth product reviews and ca...{' '}
                                        <a href="#" className="text-[#6c78ff]">View Preview</a>
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden border border-[#e8e8e8]">
                                <img src={'/landscape_brand.jpg'} alt="GRWM Collab" className="w-full h-48 object-cover" />
                                <div className="p-3">
                                    <h4 className="text-[14px] font-semibold text-[#111] mb-1">GRWM Collab</h4>
                                    <p className="text-[12px] text-[#666] line-clamp-2 mb-2">
                                        Ann is a beauty enthusiast who deliver honest, in depth product reviews and ca...{' '}
                                        <a href="#" className="text-[#6c78ff]">View Preview</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <Button variant="primary" size="md" className="flex-1">
                            Approve
                        </Button>
                        <Button variant="secondary" size="md" className="flex-1 text-[#ff4d4f]! border-[#ff4d4f]!">
                            Reject
                        </Button>
                        <Button variant="secondary" size="md" className="flex-1">
                            Message
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
