'use client';

import { CreditCard, BarChart3, Shield, Mail, LayoutDashboard, Rocket } from 'lucide-react';
import { FEATURES } from '@/app/constants/brands';
import { FeatureCard } from '@/app/components/UI/FeatureCard';

const iconMap = {
    billing: CreditCard,
    analytics: BarChart3,
    shield: Shield,
    mail: Mail,
    dashboard: LayoutDashboard,
    rocket: Rocket
};

export function BrandsFeatures() {
    return (
        <section className="py-20 bg-linear-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-15">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Features & Benefits
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Everything you need to run successful influencer campaigns with complete transparency and control
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || CreditCard;

                        return (
                            <FeatureCard
                                key={index}
                                icon={Icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
