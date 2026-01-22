'use client';

import { CheckCircle } from 'lucide-react';
import { StepCard } from '@/app/components/UI/StepCard';

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
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Blue Container */}
                <div className="bg-linear-to-br from-purple-600 to-purple-700 rounded-3xl px-15 py-15 relative overflow-hidden">
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

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-12 -left-12 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
