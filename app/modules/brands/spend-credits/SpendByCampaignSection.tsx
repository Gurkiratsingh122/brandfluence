'use client';

import { useState } from 'react';
import { Card, Row, Col, Button, Select } from 'antd';
import { CampaignCard } from '@/app/components/CampaignCard';
import { IncreaseBudgetModal } from './IncreaseBudgetModal';

interface SpendByCampaignData {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    totalBudget: number;
    totalSpend: number;
    remainingBudget: number;
    paymentsPending: number;
    pendingAmount: number;
    spendPercentage: number;
    creatorsPaid: number;
    totalCreators: number;
    imageUrl: string;
}

const campaigns: SpendByCampaignData[] = [
    {
        id: '1',
        title: 'Summer Collab',
        startDate: '04/01/2025',
        endDate: '04/30/2025',
        totalBudget: 5000,
        totalSpend: 1200,
        remainingBudget: 3800,
        paymentsPending: 1,
        pendingAmount: 300,
        spendPercentage: 70,
        creatorsPaid: 4,
        totalCreators: 6,
        imageUrl: 'https://via.placeholder.com/400x159?text=Summer+Collab',
    },
    {
        id: '2',
        title: 'Summer Collab',
        startDate: '04/01/2025',
        endDate: '04/30/2025',
        totalBudget: 5000,
        totalSpend: 1200,
        remainingBudget: 3800,
        paymentsPending: 1,
        pendingAmount: 300,
        spendPercentage: 70,
        creatorsPaid: 4,
        totalCreators: 6,
        imageUrl: 'https://via.placeholder.com/400x159?text=Summer+Collab',
    },
    {
        id: '3',
        title: 'Summer Collab',
        startDate: '04/01/2025',
        endDate: '04/30/2025',
        totalBudget: 5000,
        totalSpend: 1200,
        remainingBudget: 3800,
        paymentsPending: 1,
        pendingAmount: 300,
        spendPercentage: 70,
        creatorsPaid: 4,
        totalCreators: 6,
        imageUrl: 'https://via.placeholder.com/400x159?text=Summer+Collab',
    },
    {
        id: '4',
        title: 'Summer Collab',
        startDate: '04/01/2025',
        endDate: '04/30/2025',
        totalBudget: 5000,
        totalSpend: 1200,
        remainingBudget: 3800,
        paymentsPending: 1,
        pendingAmount: 300,
        spendPercentage: 70,
        creatorsPaid: 4,
        totalCreators: 6,
        imageUrl: 'https://via.placeholder.com/400x159?text=Summer+Collab',
    },
];

export function SpendByCampaignSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState<SpendByCampaignData | null>(null);

    const handleIncreaseBudgetClick = (campaign: SpendByCampaignData) => {
        setSelectedCampaign(campaign);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCampaign(null);
    };
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-semibold text-[#111] m-0">
                    Spend by Campaign
                </h3>
                <div className="flex gap-3">
                    <Select
                        style={{ width: 180 }}
                        placeholder="Start Date - End Date"
                        options={[
                            { label: 'Last 7 days', value: '7days' },
                            { label: 'Last 30 days', value: '30days' },
                            { label: 'Last 90 days', value: '90days' },
                        ]}
                        defaultValue="30days"
                    />
                    <Select
                        style={{ width: 150 }}
                        placeholder="Sort By"
                        options={[
                            { label: 'Recent', value: 'recent' },
                            { label: 'Highest Spend', value: 'highest' },
                            { label: 'Lowest Spend', value: 'lowest' },
                        ]}
                        defaultValue="recent"
                    />
                </div>
            </div>

            <Row gutter={[24, 24]} className="mb-8">
                {campaigns.map((campaign) => (
                    <Col xs={24} sm={24} md={12} lg={12} key={campaign.id}>
                        <CampaignCard
                            title={campaign.title}
                            startDate={campaign.startDate}
                            endDate={campaign.endDate}
                            totalBudget={campaign.totalBudget}
                            totalSpend={campaign.totalSpend}
                            remainingBudget={campaign.remainingBudget}
                            paymentsPending={campaign.paymentsPending}
                            pendingAmount={campaign.pendingAmount}
                            spendPercentage={campaign.spendPercentage}
                            creatorsPaid={campaign.creatorsPaid}
                            totalCreators={campaign.totalCreators}
                            imageUrl={campaign.imageUrl}
                            onIncreaseBudget={() => handleIncreaseBudgetClick(campaign)}
                        />
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
                <Button type="text" className="text-[#6c78ff]">
                    ← Previous
                </Button>
                <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-[#6c78ff] text-white text-sm">1</button>
                    <button className="w-8 h-8 rounded-lg border border-[#e8eaff] text-sm text-[#666]">2</button>
                    <button className="w-8 h-8 rounded-lg border border-[#e8eaff] text-sm text-[#666]">3</button>
                    <span className="px-2 text-[#999]">...</span>
                    <button className="w-8 h-8 rounded-lg border border-[#e8eaff] text-sm text-[#666]">8</button>
                    <button className="w-8 h-8 rounded-lg border border-[#e8eaff] text-sm text-[#666]">9</button>
                    <button className="w-8 h-8 rounded-lg border border-[#e8eaff] text-sm text-[#666]">10</button>
                </div>
                <Button type="text" className="text-[#6c78ff]">
                    Next →
                </Button>
            </div>

            {selectedCampaign && (
                <IncreaseBudgetModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    campaignTitle={selectedCampaign.title}
                    currentBudget={selectedCampaign.totalBudget}
                    spentToDate={selectedCampaign.totalSpend}
                    remainingBudget={selectedCampaign.remainingBudget}
                />
            )}
        </div>
    );
}
