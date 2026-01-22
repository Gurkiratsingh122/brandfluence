'use client';

import { Star } from 'lucide-react';

const WHY_INFLUENCERS_CARDS = [
    {
        title: 'No Minimum Followers',
        description: 'Start earning from day one. BilledViews pays based on verified views, not follower count. Micro-influencers earn just as much as mega-influencers.'
    },
    {
        title: 'Instant Payouts',
        description: 'Get paid immediately after campaign completion. No hidden fees. No 30-day waiting periods. Pure transparency in every transaction.'
    },
    {
        title: 'Full Creative Control',
        description: 'Choose campaigns that fit your brand. Create authentic content your audience loves. We pay for views, not dictate your creativity.'
    }
];

export function InfluencersWhyUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-15">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-lg mb-3">
                        <Star className="w-6 h-6 text-purple-600 fill-purple-600" />
                        <p className="text-base font-medium text-purple-600">
                            Why Choose Us
                        </p>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight text-gray-900 text-center mb-5">
                        Creator-First Platform
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 text-center max-w-4xl">
                        We built BilledViews for creators by creators. Every feature, every policy, every dollar amount is designed with your success in mind. No algorithms controlling your income. Just fair pay for real engagement.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {WHY_INFLUENCERS_CARDS.map((card, index) => (
                        <div
                            key={index}
                            className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:border-purple-400 transition-all"
                        >
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-lg">{index + 1}</span>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-600">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
