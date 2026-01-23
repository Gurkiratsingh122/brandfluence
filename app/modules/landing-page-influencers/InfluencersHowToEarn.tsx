'use client';

import { CheckCircle } from 'lucide-react';
import { StepCard } from '@/app/components/UI/StepCard';
import { GradientSection } from '@/app/components/UI/GradientSection';

const EARNING_STEPS = [
    {
        number: 1,
        title: 'Browse & Apply',
        description: 'Explore available campaigns from brands you love',
        details: ['View campaign details', 'Check pay rates', 'Apply instantly']
    },
    {
        number: 2,
        title: 'Create & Upload',
        description: 'Make authentic content and upload to your channel',
        details: ['Follow brand guidelines', 'Be yourself', 'Post naturally']
    },
    {
        number: 3,
        title: 'Earn & Withdraw',
        description: 'Get paid for every verified view automatically',
        details: ['Instant tracking', 'Real-time analytics', 'Quick payouts']
    }
];

export function InfluencersHowToEarn() {
    return (
        <GradientSection color="purple">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white leading-tight">
                    How to Earn in 3 Simple Steps
                </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {EARNING_STEPS.map((step) => (
                    <StepCard
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        details={step.details}
                    >
                        {step.number === 1 && <div className="text-5xl">🎬</div>}
                        {step.number === 2 && <div className="text-5xl">✨</div>}
                        {step.number === 3 && <div className="text-5xl">💰</div>}
                    </StepCard>
                ))}
            </div>
        </GradientSection>
    );
}
