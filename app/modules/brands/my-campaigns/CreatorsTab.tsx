import { CreatorCard } from "@/app/components/CreatorCard";
import { FormItemRenderer } from "@/app/components/FormItemRenderer";
import { Button } from "@/app/components/UI/Button";
import { FormItemConfig } from "@/app/types/formItem";
import { Form } from "antd";
import { useState } from "react";
import { CreatorProfileModal } from "./CreatorProfileModal";
import { CreatorPerformanceModal } from "./CreatorPerformanceModal";

export function CreatorsTab() {
    const [form] = Form.useForm()
    const [currentPage, setCurrentPage] = useState(1);
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [performanceModalOpen, setPerformanceModalOpen] = useState(false);
    const [selectedCreator, setSelectedCreator] = useState<any>(null);

    const filterItems: FormItemConfig[] = [
        {
            name: 'search',
            type: 'input',
            placeholder: 'Search',
            colSpan: 1,
        },
        {
            name: 'status',
            type: 'select',
            placeholder: 'Status',
            options: [
                { value: 'all', label: 'All' },
                { value: 'applied', label: 'Applied' },
                { value: 'approved', label: 'Approved' },
                { value: 'rejected', label: 'Rejected' },
            ],
            colSpan: 1,
        },
        {
            name: 'followerCount',
            type: 'select',
            placeholder: 'Follower Count',
            options: [
                { value: '0-10k', label: '0 - 10K' },
                { value: '10k-50k', label: '10K - 50K' },
                { value: '50k-100k', label: '50K - 100K' },
                { value: '100k+', label: '100K+' },
            ],
            colSpan: 1,
        },
        {
            name: 'engagementRate',
            type: 'select',
            placeholder: 'Engagement Rate',
            options: [
                { value: '0-2', label: '0% - 2%' },
                { value: '2-5', label: '2% - 5%' },
                { value: '5-10', label: '5% - 10%' },
                { value: '10+', label: '10%+' },
            ],
            colSpan: 1,
        },
    ];

    const creators = [
        {
            id: 1,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'applied' as const,
            bio: 'Ann is a beauty enthusiast with delicate honest, in-depth product reviews that can help you with your decision making',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            platforms: {
                tiktok: { followers: '480K', views: '150K' },
                instagram: { followers: '4.6M', likes: '4.6M' },
                youtube: { views: '400K+', comments: '400K+' },
            },
            headerImage: undefined,
            primaryAction: 'approve' as const,
            secondaryAction: 'reject' as const,
        },
        {
            id: 2,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'shipping-required' as const,
            statusLabel: 'Shipping Required',
            bio: 'Beauty & Skincare',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            videosUploaded: 5,
            platforms: {
                tiktok: { followers: '480K', views: '150K' },
                instagram: { followers: '4.6M', likes: '4.6M' },
                youtube: { views: '400K+', comments: '400K+' },
            },
            headerImage: undefined,
            primaryAction: 'view-performance' as const,
            secondaryAction: 'request-revision' as const,
        },
        {
            id: 3,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'didnt-meet-criteria' as const,
            statusLabel: "Didn't meet minimum ER",
            bio: 'Beauty & Skincare',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            totalFollowers: '480K+',
            totalViews: '480K+',
            platforms: {},
            headerImage: undefined,
            primaryAction: 'view-application' as const,
            secondaryAction: 'reconsider' as const,
        },
        {
            id: 4,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'applied' as const,
            bio: 'Ann is a beauty enthusiast with delicate honest, in-depth product reviews that can help you with your decision making',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            platforms: {
                tiktok: { followers: '480K', views: '150K' },
                instagram: { followers: '4.6M', likes: '4.6M' },
                youtube: { views: '400K+', comments: '400K+' },
            },
            headerImage: undefined,
            primaryAction: 'approve' as const,
            secondaryAction: 'reject' as const,
        },
        {
            id: 5,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'applied' as const,
            bio: 'Ann is a beauty enthusiast with delicate honest, in-depth product reviews that can help you with your decision making',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            platforms: {
                tiktok: { followers: '480K', views: '150K' },
                instagram: { followers: '4.6M', likes: '4.6M' },
                youtube: { views: '400K+', comments: '400K+' },
            },
            headerImage: undefined,
            primaryAction: 'approve' as const,
            secondaryAction: 'reject' as const,
        },
        {
            id: 6,
            username: '@annsmith123',
            location: 'Los Angeles',
            status: 'shipping-required' as const,
            statusLabel: 'Shipping Required',
            bio: 'Beauty & Skincare',
            avgViews: '+1.8K',
            avgER: '+1.8K',
            viewsGrowth: '+0.9%',
            erGrowth: '+0.9%',
            videosUploaded: 5,
            platforms: {
                tiktok: { followers: '480K', views: '150K' },
                instagram: { followers: '4.6M', likes: '4.6M' },
                youtube: { views: '400K+', comments: '400K+' },
            },
            headerImage: undefined,
            primaryAction: 'view-performance' as const,
            secondaryAction: 'request-revision' as const,
        },
    ];

    const handleViewApplication = (creator: any) => {
        setSelectedCreator(creator);
        setProfileModalOpen(true);
    };

    const handleViewPerformance = (creator: any) => {
        setSelectedCreator(creator);
        setPerformanceModalOpen(true);
    };

    return (
        <div>
            {/* Modals */}
            <CreatorProfileModal
                isOpen={profileModalOpen}
                onClose={() => setProfileModalOpen(false)}
                creator={selectedCreator}
            />
            <CreatorPerformanceModal
                isOpen={performanceModalOpen}
                onClose={() => setPerformanceModalOpen(false)}
                creator={selectedCreator}
            />

            {/* Filters */}
            <Form form={form} layout="vertical" requiredMark={false} className="mb-6">
                <div className="flex justify-end">
                    <FormItemRenderer items={filterItems} gridCols="grid-cols-4" />
                </div>
            </Form>

            {/* Creator Cards Grid */}
            <div className="grid grid-cols-3 gap-6 mb-6">
                {creators.map((creator) => (
                    <CreatorCard
                        key={creator.id}
                        {...creator}
                        onViewApplication={() => handleViewApplication(creator)}
                        onViewPerformance={() => handleViewPerformance(creator)}
                    />
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