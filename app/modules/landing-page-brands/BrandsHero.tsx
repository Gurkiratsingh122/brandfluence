'use client';

import { ArrowUp, User } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/app/components/UI/Button';

export function BrandsHero() {
    return (
        <section className="relative pt-22.25 pb-10">
            <div className="max-w-6xl mx-auto">
                <div className="bg-linear-to-b from-blue-50 to-blue-100 rounded-[50px] overflow-hidden relative min-h-96">
                    {/* Content Container */}
                    <div className="relative z-10 w-[50%] pl-20 py-10">
                        {/* Tag */}
                        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-custom mb-10">
                            <User className="w-5 h-5 text-blue-600" />
                            <p className="text-sm font-medium text-blue-600">
                                BilledViews for Influencers
                            </p>
                        </div>

                        {/* Headline */}
                        <div className="space-y-6 mb-10">
                            <h1 className="text-5xl font-bold leading-tight text-gray-900">
                                Drive Real ROI with{' '}
                                <span className="text-blue-600">Pay-Per-View</span>
                                {' '}Influencer Campaigns
                            </h1>
                            <p className="text-xl leading-relaxed text-gray-700">
                                Launch. Approve. Watch Views Turn Into Sales. No Vanity Metrics, Only Verified Performance.
                            </p>
                            <p className="text-sm font-medium text-gray-700">
                                No Credit Card Required. Get 3 Free Credits on Sign-Up
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                            <Button
                                variant="primary"
                                className="flex items-center justify-center gap-2"
                            >
                                <span className="text-base font-medium">Start Free Trial</span>
                                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                    <ArrowUp className="w-4 h-4 text-blue-600 rotate-45" />
                                </div>
                            </Button>
                            <Button variant="secondary">
                                <span className="text-base font-medium">Request a Demo</span>
                            </Button>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="absolute right-0 top-10 w-116.5 h-224.25 -translate-x-24">
                        {/* <Image
                            src={"figma:asset/250af2059094339bb176f3e4ed25dfbf013a87f7.png"}
                            alt="App Analytics"
                            className="w-full h-full object-cover"
                            width={100}
                            height={100}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
