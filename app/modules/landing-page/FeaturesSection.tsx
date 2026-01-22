'use client';

import { Users, DollarSign, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';
import { Button } from '@/app/components/UI/Button';
import { Card } from '@/app/components/UI/Card';
import { IconBadge } from '@/app/components/UI/IconBadge';
import { Section } from '@/app/components/UI/Section';

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Community Collaboration",
      description: "Crowdsource Verified Video Engagement from 2,500+ Influencers",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: DollarSign,
      title: "Pay-Per-View Control",
      description: "You Set the Cost Per 1,000 Views—Only Pay for Real Watches",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "AI Script Generation",
      description: "Auto-Generate Platform-Specific Scripts & Captions—Approve in Seconds",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Agency Integration",
      description: "Onboard via Agencies & Earn 5% Referral Commissions",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <Section id="features">
      <SectionHeading
        tagIcon={Zap}
        tagText="Our Features"
        title="Everything You Need to Succeed"
        subtitle="Powerful tools and features designed to maximize your campaign ROI"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="group">
              <IconBadge icon={Icon} gradient={feature.color} className="mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button>Get Started Free</Button>
      </div>
    </Section>
  );
}
