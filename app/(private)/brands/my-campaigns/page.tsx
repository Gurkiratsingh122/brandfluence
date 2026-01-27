'use client';

import { useState } from 'react';
import { Plus, RotateCcw } from 'lucide-react';
import { Form } from 'antd';
import { CampaignCardDetailed } from '@/app/components/CampaignCardDetailed';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { Button } from '@/app/components/UI/Button';
import { FormItemConfig } from '@/app/types/formItem';
import { AddCampaignModal } from '@/app/components/AddCampaignModal';

export default function MyCampaignsPage() {
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [addCampaignModal, setAddCampaignModal] = useState(false);

  const filterItems: FormItemConfig[] = [
    {
      name: 'search',
      label: 'Search',
      type: 'input',
      placeholder: 'Search campaigns',
    },
    {
      name: 'dateRange',
      label: 'Date Range',
      type: 'select',
      placeholder: 'Start Date - End Date',
      options: [
        { value: 'last-7-days', label: 'Last 7 days' },
        { value: 'last-30-days', label: 'Last 30 days' },
        { value: 'last-90-days', label: 'Last 90 days' },
        { value: 'custom', label: 'Custom range' },
      ],
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'All statuses',
      options: [
        { value: 'all', label: 'All' },
        { value: 'live', label: 'Live' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' },
      ],
    },
    {
      name: 'sortBy',
      label: 'Sort By',
      type: 'select',
      placeholder: 'Newest first',
      options: [
        { value: 'newest-first', label: 'Newest first' },
        { value: 'oldest-first', label: 'Oldest first' },
        { value: 'spend-high-low', label: 'Spend: High to Low' },
        { value: 'spend-low-high', label: 'Spend: Low to High' },
        { value: 'views-high-low', label: 'Views: High to Low' },
        { value: 'views-low-high', label: 'Views: Low to High' },
      ],
    },
  ];

  const handleReset = () => {
    form.resetFields();
  };

  const campaigns = [
    {
      id: 1,
      title: 'Spring Launch Promo',
      startDate: '04/01/2025',
      endDate: '04/30/2025',
      status: 'live' as const,
      imageUrl: "",
      views: 38750,
      spend: 1200,
      budgetLeft: 128433,
      costPerView: 4.3,
      influencersApproved: 2,
      totalInfluencers: 4,
      scriptsApproved: 2,
      totalScripts: 4,
      videosApproved: 2,
      totalVideos: 4,
    },
    {
      id: 2,
      title: 'Spring Launch Promo',
      startDate: '04/01/2025',
      endDate: '04/30/2025',
      status: 'pending' as const,
      imageUrl: "",
      views: 38750,
      spend: 1200,
      budgetLeft: 128433,
      costPerView: 4.3,
      influencersApproved: 2,
      totalInfluencers: 4,
      scriptsApproved: 2,
      totalScripts: 4,
      videosApproved: 2,
      totalVideos: 4,
    },
    {
      id: 3,
      title: 'Spring Launch Promo',
      startDate: '04/01/2025',
      endDate: '04/30/2025',
      status: 'completed' as const,
      imageUrl: "",
      views: 38750,
      spend: 1200,
      budgetLeft: 128433,
      costPerView: 4.3,
      platformViews: {
        tiktok: 38750,
        instagram: 38750,
        youtube: 38750,
      },
    },
    {
      id: 4,
      title: 'Spring Launch Promo',
      startDate: '04/01/2025',
      endDate: '04/30/2025',
      status: 'live' as const,
      imageUrl: "",
      views: 38750,
      spend: 1200,
      budgetLeft: 128433,
      costPerView: 4.3,
      influencersApproved: 2,
      totalInfluencers: 4,
      scriptsApproved: 2,
      totalScripts: 4,
      videosApproved: 2,
      totalVideos: 4,
    },
  ];

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-[#111] mb-2">My Campaigns</h1>
          <p className="text-[14px] text-[#666]">Manage and review all your campaigns in one place</p>
        </div>
        <Button variant="primary" size="md" className="gap-2 flex items-center" onClick={() => setAddCampaignModal(true)}>
          <Plus className="w-4 h-4" />
          <span>New Campaign</span>
        </Button>
      </div>

      {/* Filters */}
      <Form
        form={form}
        layout="vertical"
        className="mb-6"
      >
        <div className="flex gap-3 items-center">
          <div className="flex-1">
            <FormItemRenderer items={filterItems} gridCols="grid-cols-4" />
          </div>
          <Button
            variant="secondary"
            size="md"
            onClick={handleReset}
            className="flex items-center gap-2 h-10"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Filters</span>
          </Button>
        </div>
      </Form>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {campaigns.map((campaign) => (
          <CampaignCardDetailed key={campaign.id} {...campaign} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          size="md"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2"
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
          {[6, 9, 10].map((page) => (
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
          size="md"
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center gap-2"
        >
          Next →
        </Button>
      </div>

      {addCampaignModal && (
        <AddCampaignModal isOpen={addCampaignModal} onClose={() => setAddCampaignModal(false)} onSubmit={() => setAddCampaignModal(false)} />
      )}
    </div>
  );
}