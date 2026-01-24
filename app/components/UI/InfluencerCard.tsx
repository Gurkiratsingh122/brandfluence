'use client';

import { Card, Avatar } from 'antd';
import { User } from 'lucide-react';
import { Button } from './Button';

interface InfluencerCardProps {
  name: string;
  handle: string;
  campaign: string;
  viewsDelivered: number;
  creditsEarned: number;
  onViewContribution?: () => void;
}

export function InfluencerCard({
  name,
  handle,
  campaign,
  viewsDelivered,
  creditsEarned,
  onViewContribution,
}: InfluencerCardProps) {
  return (
    <Card
      className="rounded-2xl border border-[#e8eaff] bg-white h-full"
      bodyStyle={{ padding: '20px' }}
    >
      {/* Influencer Info */}
      <div className="flex items-center gap-3 mb-3">
        <Avatar
          size={48}
          icon={<User size={24} />}
          className="bg-[#6c78ff]"
        />
        <div>
          <div className="text-sm font-semibold text-[#111]">
            {name}
          </div>
          <div className="text-xs text-[#999]">
            {handle}
          </div>
        </div>
      </div>

      {/* Campaign Name */}
      <div className="mb-4">
        <div className="text-xs text-[#999] mb-1">
          Campaign
        </div>
        <div className="text-sm text-[#666] font-medium">
          {campaign}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 p-3 bg-[#f8f9ff] rounded-lg">
          <div className="text-xs text-[#999] mb-1">
            Views Delivered
          </div>
          <div className="text-base font-bold text-[#111]">
            {viewsDelivered.toLocaleString()}
          </div>
        </div>
        <div className="flex-1 p-3 bg-[#f8f9ff] rounded-lg">
          <div className="text-xs text-[#999] mb-1">
            Credits Earned
          </div>
          <div className="text-base font-bold text-[#111]">
            {creditsEarned.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="primary"
        size="md"
        onClick={onViewContribution}
        className="w-full"
      >
        View Contribution
      </Button>
    </Card>
  );
}
