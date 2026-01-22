'use client';

import { ArrowUp, Zap } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';

export function InfluencersHero() {
    return (
        <section className="relative pt-24 pb-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-linear-to-b from-purple-50 to-purple-100 rounded-3xl overflow-hidden relative min-h-96">
                    {/* Content Container */}
                    <div className="relative z-10 w-[50%] pl-20 py-10">
                        {/* Tag */}
                        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-lg mb-10">
                            <Zap className="w-5 h-5 text-purple-600" />
                            <p className="text-sm font-medium text-purple-600">
                                Get Paid Per View
                            </p>
                        </div>

                        {/* Headline */}
                        <div className="space-y-6 mb-10">
                            <h1 className="text-5xl font-bold leading-tight text-gray-900">
                                Monetize Every{' '}
                                <span className="text-purple-600">View Instantly</span>
                            </h1>
                            <p className="text-xl leading-relaxed text-gray-700">
                                Join thousands of creators earning real money with BilledViews. No follower minimums. No vanity metrics. Just pure, transparent pay-per-view.
                            </p>
                            <p className="text-sm font-medium text-gray-700">
                                Approve Campaigns. Upload Content. Get Paid.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                            <Button 
                              variant="primary" 
                              className="flex items-center justify-center gap-2"
                            >
                                <span className="text-base font-medium">Become Creator</span>
                                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                    <ArrowUp className="w-4 h-4 text-purple-600 rotate-45" />
                                </div>
                            </Button>
                            <Button variant="secondary">
                                <span className="text-base font-medium">Learn More</span>
                            </Button>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute -top-12 -left-12 w-36 h-36 bg-purple-200/30 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
