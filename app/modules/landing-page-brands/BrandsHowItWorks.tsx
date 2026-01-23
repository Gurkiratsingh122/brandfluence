'use client';

import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/app/constants/brands';
import { StepCard } from '@/app/components/UI/StepCard';
import { Button } from '@/app/components/UI/Button';
import { GradientSection } from '@/app/components/UI/GradientSection';

export function BrandsHowItWorks() {
    return (
        <GradientSection color="blue">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white leading-tight">
                    Three Steps to Instant Pay-Per-View Campaigns
                </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {HOW_IT_WORKS_STEPS.map((step) => (
                    <StepCard
                        key={step.number}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        details={step.details}
                    >
                        {step.number === 1 && <div className="text-5xl">💰</div>}
                        {step.number === 2 && <div className="text-5xl">✓</div>}
                        {step.number === 3 && <div className="text-5xl">📊</div>}
                    </StepCard>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
                <Button
                    variant="dark"
                    className="flex items-center gap-2"
                >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </GradientSection>
    );
}
