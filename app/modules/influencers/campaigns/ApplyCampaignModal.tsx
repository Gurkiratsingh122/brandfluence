'use client';

import { Modal, Checkbox, DatePicker } from 'antd';
import { useState } from 'react';
import { X, Plus, Calendar } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

interface ApplyCampaignModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: ApplicationData) => void;
  campaignTitle?: string;
}

interface ApplicationData {
  platforms: string[];
  pitch: string;
  contentLinks: string[];
  dateRange: [string, string] | null;
  agreements: {
    tiktokVideo: boolean;
    promoCode: boolean;
    postByDate: boolean;
    produceOnTime: boolean;
  };
}

export function ApplyCampaignModal({
  open,
  onClose,
  onSubmit,
  campaignTitle = 'Spring Launch Promo',
}: ApplyCampaignModalProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [pitch, setPitch] = useState('');
  const [contentLinks, setContentLinks] = useState<string[]>(['']);
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(null);
  const [agreements, setAgreements] = useState({
    tiktokVideo: false,
    promoCode: false,
    postByDate: false,
    produceOnTime: false,
  });

  const platforms = [
    { id: 'instagram', label: 'Instagram', icon: '📷' },
    { id: 'youtube', label: 'YouTube', icon: '▶️' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵' },
    { id: 'other', label: 'Other', icon: '📱' },
  ];

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((p) => p !== platformId)
        : [...prev, platformId]
    );
  };

  const handleAddContentLink = () => {
    setContentLinks([...contentLinks, '']);
  };

  const handleContentLinkChange = (index: number, value: string) => {
    const newLinks = [...contentLinks];
    newLinks[index] = value;
    setContentLinks(newLinks);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({
        platforms: selectedPlatforms,
        pitch,
        contentLinks: contentLinks.filter((link) => link.trim() !== ''),
        dateRange: dateRange
          ? [dateRange[0].format('DD.MM.YYYY'), dateRange[1].format('DD.MM.YYYY')]
          : null,
        agreements,
      });
    }
    onClose();
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isFormValid =
    selectedPlatforms.length > 0 &&
    pitch.trim() !== '' &&
    dateRange !== null &&
    Object.values(agreements).every((v) => v);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={600}
      centered
      closable={false}
    >
      <div className="space-y-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-black mb-2">Apply to Campaign</h2>
          <p className="text-[13px] text-[#666]">
            Your application will be sent to the brand for review. Please confirm all deliverables
            and eligibility.
          </p>
        </div>

        {/* Platform Selection */}
        <div>
          <label className="block text-[14px] font-medium text-black mb-3">
            Platform(s) You'll Post On <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handlePlatformToggle(platform.id)}
                className={`h-12 px-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                  selectedPlatforms.includes(platform.id)
                    ? 'border-[#6c78ff] bg-[#f0f1ff]'
                    : 'border-[#d9e2eb] bg-white hover:border-[#b8bce6]'
                }`}
              >
                <span className="text-[18px]">{platform.icon}</span>
                <span className="text-[14px] font-medium text-black">{platform.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Brief Pitch */}
        <div>
          <label className="block text-[14px] font-medium text-black mb-2">
            Brief Pitch to Brand
          </label>
          <textarea
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            placeholder="Why are you a great fit for this collab?"
            className="w-full h-24 px-4 py-3 border border-[#d9e2eb] rounded-lg text-[14px] text-black placeholder:text-[#999] focus:outline-none focus:border-[#6c78ff] resize-none"
          />
        </div>

        {/* Example Content Links */}
        <div>
          <label className="block text-[14px] font-medium text-black mb-2">
            Example Content Links
          </label>
          {contentLinks.map((link, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={link}
                onChange={(e) => handleContentLinkChange(index, e.target.value)}
                placeholder="Paste a link to your TikTok or IG Reel example"
                className="w-full h-11 px-4 border border-[#d9e2eb] rounded-lg text-[14px] text-black placeholder:text-[#999] focus:outline-none focus:border-[#6c78ff]"
              />
            </div>
          ))}
          <button
            onClick={handleAddContentLink}
            className="flex items-center justify-center w-11 h-11 border-2 border-dashed border-[#6c78ff] rounded-lg text-[#6c78ff] hover:bg-[#f0f1ff] transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Availability Dates */}
        <div>
          <label className="block text-[14px] font-medium text-black mb-2">
            Availability Dates <span className="text-red-500">*</span>
          </label>
          <RangePicker
            value={dateRange}
            onChange={(dates) => setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs] | null)}
            format="DD.MM.YYYY"
            className="w-full h-11"
            suffixIcon={<Calendar className="w-4 h-4 text-[#666]" />}
            placeholder={['20.05.2005', '20.05.2001']}
          />
        </div>

        {/* Agreements */}
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Checkbox
              checked={agreements.tiktokVideo}
              onChange={() => handleAgreementChange('tiktokVideo')}
              className="mt-0.5"
            />
            <label className="text-[13px] text-black cursor-pointer" onClick={() => handleAgreementChange('tiktokVideo')}>
              1 TikTok video
            </label>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              checked={agreements.promoCode}
              onChange={() => handleAgreementChange('promoCode')}
              className="mt-0.5"
            />
            <label className="text-[13px] text-black cursor-pointer" onClick={() => handleAgreementChange('promoCode')}>
              Use promo code "SUMMER20"
            </label>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              checked={agreements.postByDate}
              onChange={() => handleAgreementChange('postByDate')}
              className="mt-0.5"
            />
            <label className="text-[13px] text-black cursor-pointer" onClick={() => handleAgreementChange('postByDate')}>
              Post by June 20, 2025
            </label>
          </div>
          <div className="flex items-start gap-2">
            <Checkbox
              checked={agreements.produceOnTime}
              onChange={() => handleAgreementChange('produceOnTime')}
              className="mt-0.5"
            />
            <label className="text-[13px] text-black cursor-pointer" onClick={() => handleAgreementChange('produceOnTime')}>
              I agree to produce content on time if selected.
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center w-full gap-3 pt-4">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit} disabled={!isFormValid}>
            Submit Application
          </Button>
        </div>
      </div>
    </Modal>
  );
}
