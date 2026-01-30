
'use client';

import { useState, useMemo } from 'react';
import { Form, Pagination, Empty } from 'antd';
import { RotateCcw, X } from 'lucide-react';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { OpportunityCampaignCard } from '@/app/modules/influencers/OpportunityCampaignCard';
import { ApplyCampaignModal } from '@/app/modules/influencers/campaigns/ApplyCampaignModal';
import { CampaignDetailsModal } from '@/app/modules/influencers/campaigns/CampaignDetailsModal';
import { Button } from '@/app/components/UI/Button';
import { FormItemConfig } from '@/app/types/formItem';

interface Campaign {
    id: number;
    variant: 'applyNow' | 'pendingApproval' | 'withdrawApplication';
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
    platforms?: ('Instagram' | 'YouTube' | 'TikTok')[];
    modalType?: 'track' | 'viewPdf' | 'joinWaitlist' | 'notify' | 'generic';
}

const mockCampaigns: Campaign[] = [
    {
        id: 1,
        modalType: 'viewPdf',
        variant: 'applyNow',
        title: 'Spring Launch Promo',
        brandName: 'Spring Tech',
        image: '/landscape_brand.jpg',
        location: 'Los Angeles, CA',
        category: 'Tech & Gadgets',
        estimatedPayout: '$100 per 1,000 Views',
        budgetRemaining: '$8400 / $8495',
        description: 'Looking for influencers with tech-savvy audiences to unbox and review our newest smartwatch.',
        applicantCount: 18,
        viewCount: '12,500',
        applyByDate: '04/30/2025',
        platforms: ['Instagram', 'YouTube', 'TikTok'],
    },
    {
        id: 2,
        modalType: 'track',
        variant: 'applyNow',
        title: 'Summer Collection Launch',
        brandName: 'Fashion Hub',
        image: '/landscape_brand.jpg',
        location: 'New York, NY',
        category: 'Fashion & Lifestyle',
        estimatedPayout: '$150 per 1,000 Views',
        budgetRemaining: '$5200 / $9500',
        description: 'Collaborate with fashion influencers to showcase our new summer collection.',
        applicantCount: 24,
        viewCount: '18,900',
        applyByDate: '05/15/2025',
        platforms: ['Instagram', 'TikTok'],
    },
    {
        id: 3,
        modalType: 'joinWaitlist',
        variant: 'applyNow',
        title: 'Fitness App Campaign',
        brandName: 'FitLife Pro',
        image: '/landscape_brand.jpg',
        location: 'Austin, TX',
        category: 'Health & Fitness',
        estimatedPayout: '$80 per 1,000 Views',
        budgetRemaining: '$3400 / $5000',
        description: 'Promote our fitness tracking app with authentic workout content.',
        applicantCount: 12,
        viewCount: '9,200',
        applyByDate: '04/20/2025',
        platforms: ['TikTok', 'YouTube'],
    },
    {
        id: 4,
        modalType: 'notify',
        variant: 'applyNow',
        title: 'Beauty Product Review',
        brandName: 'GlowBeauty Co',
        image: '/landscape_brand.jpg',
        location: 'Miami, FL',
        category: 'Beauty & Cosmetics',
        estimatedPayout: '$120 per 1,000 Views',
        budgetRemaining: '$6800 / $7200',
        description: 'Review our new skincare line and share your honest opinions.',
        applicantCount: 32,
        viewCount: '15,600',
        applyByDate: '05/10/2025',
        platforms: ['Instagram', 'TikTok'],
    },
];

const filterConfig: FormItemConfig[] = [
    { name: 'search', type: 'input', placeholder: 'Search campaigns...', colSpan: 1 },
    {
        name: 'location',
        type: 'select',
        placeholder: 'Location',
        options: [
            { label: 'All Locations', value: '' },
            { label: 'Los Angeles, CA', value: 'Los Angeles, CA' },
            { label: 'New York, NY', value: 'New York, NY' },
            { label: 'Austin, TX', value: 'Austin, TX' },
            { label: 'Miami, FL', value: 'Miami, FL' },
        ],
        colSpan: 1
    },
    {
        name: 'category',
        type: 'select',
        placeholder: 'Category',
        options: [
            { label: 'All Categories', value: '' },
            { label: 'Tech & Gadgets', value: 'Tech & Gadgets' },
            { label: 'Fashion & Lifestyle', value: 'Fashion & Lifestyle' },
            { label: 'Health & Fitness', value: 'Health & Fitness' },
            { label: 'Beauty & Cosmetics', value: 'Beauty & Cosmetics' },
        ],
    },
    {
        name: 'budget',
        type: 'select',
        placeholder: 'Budget',
        options: [
            { label: 'All Budgets', value: '' },
            { label: 'Under $100', value: 'under-100' },
            { label: '$100 - $500', value: '100-500' },
        ],
    },
    {
        name: 'sortBy',
        type: 'select',
        placeholder: 'Sort By',
        options: [
            { label: 'Most Recent', value: 'recent' },
            { label: 'Highest Payout', value: 'payout-high' },
            { label: 'Most Popular', value: 'popular' },
        ],
    },
];

export default function AvailableCampaigns() {
    const [form] = Form.useForm();
    const [filters, setFilters] = useState({
        search: '',
        location: '',
        category: '',
        budget: '',
        sortBy: 'recent',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    const filteredCampaigns = useMemo(() => {
        let result = [...mockCampaigns];

        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            result = result.filter((c) => c.title.toLowerCase().includes(searchLower) || c.brandName.toLowerCase().includes(searchLower));
        }

        if (filters.location) {
            result = result.filter((c) => c.location === filters.location);
        }

        if (filters.category) {
            result = result.filter((c) => c.category === filters.category);
        }

        return result;
    }, [filters]);

    const paginatedCampaigns = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return filteredCampaigns.slice(startIndex, startIndex + pageSize);
    }, [filteredCampaigns, currentPage]);

    const [applyModalOpen, setApplyModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [activeCampaign, setActiveCampaign] = useState<Campaign | null>(null);

    function openApplyModal(campaign: Campaign) {
        setActiveCampaign(campaign);
        setApplyModalOpen(true);
    }

    function closeApplyModal() {
        setApplyModalOpen(false);
        setActiveCampaign(null);
    }

    function openDetailsModal(campaign: Campaign) {
        setActiveCampaign(campaign);
        setDetailsModalOpen(true);
    }

    function closeDetailsModal() {
        setDetailsModalOpen(false);
        setActiveCampaign(null);
    }

    function mapToDetails(c: Campaign) {
        return {
            title: c.title,
            brandName: c.brandName,
            image: c.image,
            location: c.location || '',
            dateRange: c.applyByDate || '',
            description: c.description || '',
            compensation: c.estimatedPayout || '',
            requirements: {
                tiktok: c.platforms?.includes('TikTok') ? 1 : 0,
                instagram: c.platforms?.includes('Instagram') ? 1 : 0,
                youtube: c.platforms?.includes('YouTube') ? 1 : 0,
            },
            productInfo: {
                title: '',
                description: '',
                image: c.image,
                shippingNote: '',
            },
            guidelines: {
                dos: [],
                donts: [],
            },
        };
    }

    const handleFilterChange = (changedFields: any) => {
        setFilters((prev) => ({ ...prev, ...changedFields }));
        setCurrentPage(1);
    };

    const handleClearAll = () => {
        form.resetFields();
        setFilters({ search: '', location: '', category: '', budget: '', sortBy: 'recent' });
        setCurrentPage(1);
    };

    const hasActiveFilters = Object.values(filters).some((v) => v && v !== 'recent');

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="">
                <div className="mb-8">
                    <h1 className="text-[32px] font-bold text-[#111] mb-2">Available Campaigns</h1>
                    <p className="text-[16px] text-[#666]">Explore and apply to campaigns that match your audience</p>
                </div>

                <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6 mb-8">
                    <Form
                        form={form}
                        layout="vertical"
                        className="mb-6"
                        onValuesChange={handleFilterChange}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex-1 flex ">
                                <FormItemRenderer items={filterConfig} gridCols=" md:grid-cols-5! " />
                            </div>
                            <Button
                                variant="secondary"
                                size="md"
                                onClick={() => form.resetFields()}
                                className="flex items-center gap-2 h-10"
                            >
                                <RotateCcw className="w-4 h-4" />
                                <span>Reset Filters</span>
                            </Button>
                        </div>
                    </Form>
                </div>

                <div className="mb-6">
                    <p className="text-[14px] text-[#666]">
                        Showing <span className="font-semibold text-[#111]">{filteredCampaigns.length}</span> campaigns
                    </p>
                </div>

                {paginatedCampaigns.length > 0 ? (
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        {paginatedCampaigns.map((campaign) => (
                            <div key={campaign.id}>
                                <OpportunityCampaignCard
                                    variant={campaign.variant}
                                    title={campaign.title}
                                    brandName={campaign.brandName}
                                    image={campaign.image}
                                    location={campaign.location}
                                    category={campaign.category}
                                    estimatedPayout={campaign.estimatedPayout}
                                    budgetRemaining={campaign.budgetRemaining}
                                    description={campaign.description}
                                    applicantCount={campaign.applicantCount}
                                    viewCount={campaign.viewCount}
                                    applyByDate={campaign.applyByDate}
                                    platforms={campaign.platforms}
                                    onApply={() => openApplyModal(campaign)}
                                    onViewDetails={() => openDetailsModal(campaign)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl border border-[#d9e2eb] p-12 text-center">
                        <Empty description="No campaigns found" style={{ marginTop: 48 }} />
                    </div>
                )}

                {filteredCampaigns.length > 0 && (
                    <div className="flex justify-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={filteredCampaigns.length}
                            onChange={setCurrentPage}
                            showSizeChanger={false}
                            showQuickJumper={true}
                        />
                    </div>
                )}
            </div>

            <ApplyCampaignModal open={applyModalOpen} onClose={closeApplyModal} onSubmit={(data) => { console.log('apply submit', data); closeApplyModal(); }} campaignTitle={activeCampaign?.title} />
            <CampaignDetailsModal
                open={detailsModalOpen}
                onClose={closeDetailsModal}
                onApplyNow={() => { closeDetailsModal(); setApplyModalOpen(true); }}
                campaign={activeCampaign ? mapToDetails(activeCampaign) : undefined}
            />
        </div>
    );
}