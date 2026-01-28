'use client';

import { useState } from 'react';
import { Modal, Form, Switch, Upload, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { TabSwitcher } from '@/app/components/UI/TabSwitcher';
import { FormItemConfig } from '@/app/types/formItem';

interface AddCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (campaignData: any) => void;
  campaignData?: any; // For edit mode
}

const TABS = [
  { key: 'basic', label: 'Basic Information' },
  { key: 'product', label: 'Product Details & Creative Assets' },
  { key: 'budget', label: 'Budget & Timeline' },
  { key: 'creators', label: 'Creator Filters' },
  { key: 'approvals', label: 'Approvals & Collaboration' },
];

const SOCIAL_PLATFORMS = [
  { label: 'Instagram', value: 'instagram', icon: '📷' },
  { label: 'YouTube', value: 'youtube', icon: '▶️' },
  { label: 'TikTok', value: 'tiktok', icon: '🎵' },
  { label: 'Other', value: 'other', icon: '⊕' },
];

export function AddCampaignModal({
  isOpen,
  onClose,
  onSubmit,
  campaignData,
}: AddCampaignModalProps) {
  const [form] = Form.useForm();
  const [currentTab, setCurrentTab] = useState('basic');
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formValues, setFormValues] = useState<any>(null);
  const isEditMode = !!campaignData;

  // Tab 1: Basic Information
  const basicInfoItems: FormItemConfig[] = [
    {
      name: 'description',
      label: 'Describe your campaign in 1 sentence...',
      type: 'textarea',
      placeholder: 'Enter the description of your campaign in 1 sentence...',
      rules: [
        { required: true, message: 'Description is required' },
        { min: 10, message: 'Description must be at least 10 characters' },
        { max: 200, message: 'Description must not exceed 200 characters' },
      ],
      colSpan: 2,
    },
    {
      name: 'campaignName',
      label: 'Campaign Name',
      type: 'input',
      placeholder: 'Enter name',
      rules: [
        { required: true, message: 'Campaign name is required' },
        { min: 3, message: 'Campaign name must be at least 3 characters' },
        { max: 100, message: 'Campaign name must not exceed 100 characters' },
      ],
    },
    {
      name: 'contentTypes',
      label: 'Content Types',
      type: 'input',
      placeholder: 'Enter content types',
      rules: [
        { required: true, message: 'Content types are required' },
        { min: 3, message: 'Content types must be at least 3 characters' },
      ],
    },
    {
      name: 'audience',
      label: 'Audience',
      type: 'input',
      placeholder: 'Enter audience',
      rules: [
        { required: true, message: 'Audience is required' },
        { min: 3, message: 'Audience must be at least 3 characters' },
      ],
    },
    {
      name: 'tone',
      label: 'Tone',
      type: 'input',
      placeholder: 'Enter tone',
      rules: [
        { required: true, message: 'Tone is required' },
        { min: 2, message: 'Tone must be at least 2 characters' },
      ],
    },
    {
      name: 'goal',
      label: 'Goal',
      type: 'input',
      placeholder: 'Enter goal',
      rules: [
        { required: true, message: 'Goal is required' },
        { min: 3, message: 'Goal must be at least 3 characters' },
      ],
    },
  ];

  // Tab 2: Product Details & Creative Assets
  const productDetailsItems: FormItemConfig[] = [
    {
      name: 'productName',
      label: 'Product Name',
      type: 'input',
      placeholder: 'Enter name',
      rules: [
        { required: true, message: 'Product name is required' },
        { min: 3, message: 'Product name must be at least 3 characters' },
      ],
    },
    {
      name: 'productPageUrl',
      label: 'Product Page URL',
      type: 'input',
      placeholder: 'Enter page URL',
      rules: [
        { required: true, message: 'Product page URL is required' },
        { type: 'url', message: 'Please enter a valid URL' },
      ],
    },
    {
      name: 'keySellingPoints',
      label: 'Key Selling Points',
      type: 'textarea',
      placeholder: 'Enter the key selling points',
      rules: [
        { required: true, message: 'Key selling points are required' },
        { min: 10, message: 'Key selling points must be at least 10 characters' },
      ],
      colSpan: 2,
    },
  ];

  // Tab 3: Budget & Timeline
  const budgetItems: FormItemConfig[] = [
    {
      name: 'totalBudget',
      label: 'Total Budget',
      type: 'input',
      placeholder: 'Enter budget',
      rules: [
        { required: true, message: 'Total budget is required' },
        { pattern: /^\d+(\.\d{1,2})?$/, message: 'Please enter a valid amount' },
      ],
    },
    {
      name: 'maxCreators',
      label: 'Max Creators',
      type: 'select',
      placeholder: 'Select max creators',
      options: [
        { label: '5', value: '5' },
        { label: '10', value: '10' },
        { label: '20', value: '20' },
        { label: '50', value: '50' },
      ],
      rules: [{ required: true, message: 'Max creators is required' }],
    },
    {
      name: 'payPerCreator',
      label: 'Pay Per Creator for 1,000 Views',
      type: 'input',
      placeholder: 'Enter pay per creator',
      rules: [
        { required: true, message: 'Pay per creator is required' },
        { pattern: /^\d+(\.\d{1,2})?$/, message: 'Please enter a valid amount' },
      ],
    },
    {
      name: 'applicationDeadline',
      label: 'Application Deadline',
      type: 'date',
      placeholder: 'Application Deadline',
      rules: [{ required: true, message: 'Application deadline is required' }],
    },
    {
      name: 'finalContentDeadline',
      label: 'Final Content Deadline',
      type: 'date',
      placeholder: 'Final Content Deadline',
      rules: [{ required: true, message: 'Final content deadline is required' }],
    },
  ];

  // Tab 4: Creator Filters
  const creatorFiltersItems: FormItemConfig[] = [
    {
      name: 'followerRange',
      label: 'Follower Range',
      type: 'select',
      placeholder: 'Select max followers',
      options: [
        { label: '10K', value: '10k' },
        { label: '50K', value: '50k' },
        { label: '100K', value: '100k' },
        { label: '1M+', value: '1m' },
      ],
      rules: [{ required: true, message: 'Follower range is required' }],
    },
    {
      name: 'engagementRate',
      label: 'Engagement Rate',
      type: 'select',
      placeholder: 'Select max percent',
      options: [
        { label: '1%', value: '1' },
        { label: '5%', value: '5' },
        { label: '10%', value: '10' },
        { label: '20%+', value: '20' },
      ],
      rules: [{ required: true, message: 'Engagement rate is required' }],
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      placeholder: 'Select country',
      options: [
        { label: 'USA', value: 'usa' },
        { label: 'UK', value: 'uk' },
        { label: 'Canada', value: 'canada' },
        { label: 'Australia', value: 'australia' },
      ],
      rules: [{ required: true, message: 'Country is required' }],
    },
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      placeholder: 'Select category',
      options: [
        { label: 'Fashion', value: 'fashion' },
        { label: 'Beauty', value: 'beauty' },
        { label: 'Tech', value: 'tech' },
        { label: 'Lifestyle', value: 'lifestyle' },
      ],
      rules: [{ required: true, message: 'Category is required' }],
    },
  ];

  // Tab 5: Approvals & Collaboration
  const approvalsItems: FormItemConfig[] = [
    {
      name: 'usageRights',
      label: 'Usage Rights',
      type: 'select',
      placeholder: 'Select usage rights',
      options: [
        { label: 'Limited', value: 'limited' },
        { label: 'Perpetual', value: 'perpetual' },
        { label: 'Exclusive', value: 'exclusive' },
      ],
      rules: [{ required: true, message: 'Usage rights are required' }],
    },
    {
      name: 'promoCode',
      label: 'Promo Code',
      type: 'input',
      placeholder: 'Enter promo code',
    },
  ];

  const getItemsForTab = (tab: string): FormItemConfig[] => {
    switch (tab) {
      case 'basic':
        return basicInfoItems;
      case 'product':
        return productDetailsItems;
      case 'budget':
        return budgetItems;
      case 'creators':
        return creatorFiltersItems;
      case 'approvals':
        return approvalsItems;
      default:
        return [];
    }
  };

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleNext = async () => {
    try {
      await form.validateFields();
      const nextTabIndex = TABS.findIndex((t) => t.key === currentTab) + 1;
      if (nextTabIndex < TABS.length) {
        setCurrentTab(TABS[nextTabIndex].key);
      } else {
        // Last tab, show confirmation modal
        const values = await form.validateFields();
        setFormValues(values);
        setShowConfirmModal(true);
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleBack = () => {
    const prevTabIndex = TABS.findIndex((t) => t.key === currentTab) - 1;
    if (prevTabIndex >= 0) {
      setCurrentTab(TABS[prevTabIndex].key);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      onSubmit(formValues);
      setTimeout(() => {
        setIsLoading(false);
        handleClose();
      }, 500);
    } catch (error) {
      console.error('Submission failed:', error);
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    form.resetFields();
    setCurrentTab('basic');
    onClose();
  };

  const currentTabIndex = TABS.findIndex((t) => t.key === currentTab);
  const isFirstTab = currentTabIndex === 0;
  const isLastTab = currentTabIndex === TABS.length - 1;

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      footer={null}
      centered
      closable={false}
      width={1000}
      className="custom-modal"
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#111] mb-2">
            {isEditMode ? 'Edit Campaign' : 'Create New Campaign'}
          </h2>
          <p className="text-base text-[#666]">
            {isEditMode ? 'Update your campaign details' : 'Set up your influencer marketing campaign'}
          </p>
        </div>

        {/* Tab Switcher */}
        <TabSwitcher
          currentTab={currentTab}
          onTabChange={handleTabChange}
          tabs={TABS}
          buttonClassName='px-2!'
        />


        {/* Form Content */}
        <Form form={form} layout="vertical" requiredMark={false} initialValues={campaignData}>
          {/* Basic Information */}
          {currentTab === 'basic' && (
            <div className="space-y-6">
              <FormItemRenderer items={basicInfoItems} gridCols="grid-cols-2" />
              {/* Social Platforms */}
              <div>
                <label className="font-normal text-gray-700 block mb-3">
                  Social Platforms <span className="text-red-500">*</span>
                </label>
                <Form.Item name="socialPlatforms" rules={[{ required: true, message: 'Select at least one platform' }]}>
                  <div className="flex gap-3 flex-wrap">
                    {SOCIAL_PLATFORMS.map((platform) => (
                      <button
                        key={platform.value}
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                      >
                        {platform.icon} {platform.label}
                      </button>
                    ))}
                  </div>
                </Form.Item>
              </div>
            </div>
          )}

          {/* Product Details */}
          {currentTab === 'product' && (
            <div className="space-y-6">
              <FormItemRenderer items={productDetailsItems} gridCols="grid-cols-2" />
              {/* Physical Product Toggle */}
              <div>
                <Form.Item name="isPhysicalProduct" valuePropName="checked" className="mb-0">
                  <div className="flex items-center gap-3">
                    <Switch />
                    <span className="text-gray-700">Is this a physical product that will be shipped?</span>
                  </div>
                </Form.Item>
              </div>
              {/* Image Upload */}
              <div>
                <label className="font-normal text-gray-700 block mb-3">
                  Upload Images / Guidelines <span className="text-red-500">*</span>
                </label>
                <Form.Item name="files" rules={[{ required: true, message: 'Please upload at least one file' }]}>
                  <Upload.Dragger
                    name="files"
                    multiple
                    accept=".pdf,.jpg,.png,.jpeg"
                    beforeUpload={() => false}
                    className="rounded-xl"
                  >
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined className="text-4xl text-blue-600" />
                    </p>
                    <p className="ant-upload-text text-base font-medium">Drag and drop your files here</p>
                    <p className="ant-upload-hint text-sm">file upload, PDF/JPG/PNG, max 5 MB</p>
                  </Upload.Dragger>
                </Form.Item>
              </div>
            </div>
          )}

          {/* Budget & Timeline */}
          {currentTab === 'budget' && (
            <div className="space-y-6">
              <FormItemRenderer items={budgetItems} gridCols="grid-cols-2" />
              {/* Date Range Picker */}
              <div className="md:col-span-2">
                <label className="font-normal text-gray-700 block mb-3">
                  Start Date - End Date <span className="text-red-500">*</span>
                </label>
                <Form.Item
                  name="campaignDateRange"
                  rules={[{ required: true, message: 'Campaign date range is required' }]}
                >
                  <DatePicker.RangePicker
                    className="w-full rounded-xl!"
                    style={{ height: '44px' }}
                    placeholder={['Start Date', 'End Date']}
                  />
                </Form.Item>
              </div>
            </div>
          )}

          {/* Creator Filters */}
          {currentTab === 'creators' && (
            <div className="space-y-6">
              <FormItemRenderer items={creatorFiltersItems} gridCols="grid-cols-2" />
              <div className="flex gap-4">
                <button className="text-blue-600 font-medium hover:underline">Add platform</button>
                <button className="text-blue-600 font-medium hover:underline">Skip this step</button>
              </div>
            </div>
          )}

          {/* Approvals & Collaboration */}
          {currentTab === 'approvals' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Approve Influencers</span>
                  <Form.Item name="approveInfluencers" valuePropName="checked" className="mb-0">
                    <Switch />
                  </Form.Item>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Approve Scripts</span>
                  <Form.Item name="approveScripts" valuePropName="checked" className="mb-0">
                    <Switch />
                  </Form.Item>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Raw Files Needed</span>
                  <Form.Item name="rawFilesNeeded" valuePropName="checked" className="mb-0">
                    <Switch />
                  </Form.Item>
                </div>
              </div>
              <FormItemRenderer items={approvalsItems} gridCols="grid-cols-2" />
            </div>
          )}

          {/* Confirm & Launch */}
          {currentTab === 'confirm' && (
            <div className="bg-blue-50 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#111] mb-4">Campaign Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Campaign Name:</span>
                  <span className="font-semibold">{form.getFieldValue('campaignName')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Budget:</span>
                  <span className="font-semibold">${form.getFieldValue('totalBudget')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Max Creators:</span>
                  <span className="font-semibold">{form.getFieldValue('maxCreators')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Platforms:</span>
                  <span className="font-semibold">{form.getFieldValue('socialPlatforms')}</span>
                </div>
              </div>
            </div>
          )}
        </Form>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {!isFirstTab && (
            <Button
              variant="secondary"
              size="md"
              onClick={handleBack}
              className="flex-1"
              disabled={isLoading}
            >
              Back
            </Button>
          )}
          <Button
            variant="primary"
            size="md"
            onClick={handleNext}
            className="flex-1"
            disabled={isLoading}
          >
            {isLastTab ? 'Review & Launch' : 'Next'}
          </Button>
        </div>

        {/* Confirmation Modal */}
        <Modal
          open={showConfirmModal}
          onCancel={() => setShowConfirmModal(false)}
          footer={null}
          centered
          closable={true}
          width={700}
        >
          <div className="space-y-6 py-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-[#111] mb-2">Confirm & Launch</h2>
              <p className="text-base text-[#666]">Review your campaign details before launching</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 space-y-3">
              <h3 className="text-lg font-bold text-[#111] mb-4">Campaign Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Campaign Name:</span>
                  <span className="font-semibold">{formValues?.campaignName}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Platform:</span>
                  <span className="font-semibold">{formValues?.socialPlatforms?.join(', ')}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Content Types:</span>
                  <span className="font-semibold">{formValues?.contentTypes}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Audience:</span>
                  <span className="font-semibold">{formValues?.audience}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Budget:</span>
                  <span className="font-semibold">${formValues?.totalBudget}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-blue-200">
                  <span className="text-gray-700 font-medium">Max Creators:</span>
                  <span className="font-semibold">{formValues?.maxCreators}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Deliverables:</span>
                  <span className="font-semibold">1 video/story per creator</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="secondary"
                size="md"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1"
                disabled={isLoading}
              >
                Save as Draft
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSubmit}
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? 'Launching...' : 'Launch Campaign'}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Modal>
  );
}
