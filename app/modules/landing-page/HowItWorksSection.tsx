'use client';

import { DollarSign, Target, Lightbulb, BarChart3, Rocket } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';
import { Button } from '@/app/components/UI/Button';
import { Card } from '@/app/components/UI/Card';
import { IconBadge } from '@/app/components/UI/IconBadge';
import { GradientContainer } from '@/app/components/UI/GradientContainer';
import { Section } from '@/app/components/UI/Section';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: DollarSign,
      title: "Fund Your Campaign",
      description: "Deposit funds and set your CPV rate. Only pay for verified views.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      number: "02",
      icon: Target,
      title: "Define Your Campaign Goals",
      description: "Choose your target audience, platforms, and engagement metrics.",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Select Creators & Approve Videos",
      description: "Browse vetted creators and approve AI-generated content scripts.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Monitor Performance & Auto-Payouts",
      description: "Track real-time analytics. Payouts happen automatically per milestone.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <Section id="how-it-works" className="max-w-300">
      <GradientContainer>
        <SectionHeading
          tagIcon={Rocket}
          tagText="How it works"
          title="Get Started in Minutes"
          subtitle="Launch your first campaign in just four simple steps"
          titleClassName="text-4xl md:text-5xl font-bold text-white"
          subtitleClassName="text-cyan-50 text-lg max-w-2xl mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} variant="glassmorphism" className="group">
                <div className="flex justify-between items-start mb-6">
                  <IconBadge icon={Icon} gradient={step.gradient} className="mb-0" />
                  <div className="text-5xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="dark">
            Get Started Free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </GradientContainer>
    </Section>
  );
}
