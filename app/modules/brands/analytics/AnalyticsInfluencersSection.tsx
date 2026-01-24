'use client';

import { Card, Row, Col, Button } from 'antd';
import { InfluencerCard } from '@/app/components/UI/InfluencerCard';

interface InfluencerData {
  id: string;
  name: string;
  handle: string;
  campaign: string;
  viewsDelivered: number;
  creditsEarned: number;
}

const influencersData: InfluencerData[] = [
  {
    id: '1',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '2',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '3',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '4',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '5',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '6',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '7',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
  {
    id: '8',
    name: 'Anmarie Smith',
    handle: '@anmsmith123',
    campaign: 'Spring Launch Promo',
    viewsDelivered: 48500,
    creditsEarned: 1400,
  },
];

export function AnalyticsInfluencersSection() {
  const handleViewContribution = (influencerId: string) => {
    console.log('View contribution for influencer:', influencerId);
  };

  return (
    <Card
      className="rounded-4xl border border-[#e8eaff] mb-8"
      bodyStyle={{ padding: '20px' }}
    >
      <div
        className="flex justify-between items-center mb-6"
      >
        <h3
          className="text-base font-semibold text-[#111] m-0"
        >
          Influencers
        </h3>
        <Button type="link" className="text-[#6c78ff] p-0">
          See All
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        {influencersData.map((influencer) => (
          <Col xs={24} sm={12} md={8} lg={6} key={influencer.id}>
            <InfluencerCard
              name={influencer.name}
              handle={influencer.handle}
              campaign={influencer.campaign}
              viewsDelivered={influencer.viewsDelivered}
              creditsEarned={influencer.creditsEarned}
              onViewContribution={() => handleViewContribution(influencer.id)}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
}
