'use client';

import { DollarSign } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';
import { Button } from '@/app/components/UI/Button';
import { GradientContainer } from '@/app/components/UI/GradientContainer';
import { Section } from '@/app/components/UI/Section';

export function PricingSection() {
  const pricingDetails = [
    {
      category: "Brand Fee Structure",
      fee: "10% on every deposit",
      description: "Brands pay a 10% platform fee on any deposit (e.g., deposit $10,000, $1,000 is platform fee, leaving $9,000 in spend credits)."
    },
    {
      category: "Influencer Fee",
      fee: "15% of payouts",
      description: "Influencers receive 85% of each 1,000-view milestone. We retain 15% of influencer earnings to cover operations."
    },
    {
      category: "Agency Commission",
      fee: "5% of referred brand spend",
      description: "Agencies receive a 5% commission on total brand deposits (paid monthly)."
    }
  ];

  return (
    <Section id="pricing" className="max-w-300">
      <GradientContainer>
        <SectionHeading
          tagIcon={DollarSign}
          tagText="Plan Options"
          title="Pricing"
          subtitle="Simple, Transparent Pricing That Scales with Your Brand"
          titleClassName="text-4xl md:text-5xl font-bold text-white"
          subtitleClassName="text-cyan-50 text-lg max-w-2xl mx-auto"
        />

        {/* Pricing Table Headers */}
        <div className="grid md:grid-cols-3 gap-4 text-white font-semibold text-center mb-6 text-sm md:text-base">
          {pricingDetails.map((item, index) => (
            <div key={index} className="px-4">
              {item.category}
            </div>
          ))}
        </div>

        {/* Pricing Table Content */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-8">
          <div className="grid md:grid-cols-3 divide-x divide-slate-200">
            {pricingDetails.map((item, index) => (
              <div key={index} className="p-8 text-center">
                <p className="text-xl md:text-2xl font-bold text-slate-900">
                  {item.fee}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className="space-y-3 text-white text-center mb-8 max-w-4xl mx-auto">
          {pricingDetails.map((item, index) => (
            <p key={index} className="text-sm md:text-base text-cyan-50 leading-relaxed">
              {item.description}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="dark">
            Sign Up Free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </GradientContainer>
    </Section>
  );
}
