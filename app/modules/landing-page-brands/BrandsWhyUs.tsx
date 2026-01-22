'use client';

import { Star } from 'lucide-react';
import { WHY_US_CARDS } from '@/app/constants/brands';
import Image from 'next/image';

export function BrandsWhyUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-15">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-custom mb-3">
                        <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
                        <p className="text-base font-medium text-blue-600">
                            Why us?
                        </p>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight text-gray-900 text-center mb-5">
                        Stop Wasting Ad Spend on Guesswork
                    </h2>
                    <p className="text-base leading-relaxed text-gray-700 text-center max-w-4xl">
                        Every dollar you pour into influencer marketing should map directly to actual views—and actual sales. BilledViews eliminates the guesswork by paying influencers strictly for 1,000 verified views. No hidden costs. No ambiguous "engagement" fees. Transparent pay-per-view models guarantee you only spend on real eyeballs.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 - Agency Integration */}
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden border border-blue-200">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 mb-2">
                                {WHY_US_CARDS[0].title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-600">
                                {WHY_US_CARDS[0].description}
                            </p>
                        </div>
                        {/* Chart Image */}
                        <div className="mt-8 relative">
                            <div className="bg-white rounded-lg shadow-sm p-5">
                                {/* Pie Chart Representation */}
                                <div className="flex items-center justify-center h-44">
                                    <div className="relative w-32 h-32">
                                        <svg viewBox="0 0 120 120" className="transform -rotate-90">
                                            {/* 70% slice - Purple */}
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="50"
                                                fill="none"
                                                stroke="#4A3AFF"
                                                strokeWidth="40"
                                                strokeDasharray="220 314"
                                            />
                                            {/* 20% slice - Pink */}
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="50"
                                                fill="none"
                                                stroke="#C893FD"
                                                strokeWidth="40"
                                                strokeDasharray="63 314"
                                                strokeDashoffset="-220"
                                            />
                                            {/* 10% slice - Dark */}
                                            <circle
                                                cx="60"
                                                cy="60"
                                                r="50"
                                                fill="none"
                                                stroke="#1E1B39"
                                                strokeWidth="40"
                                                strokeDasharray="31 314"
                                                strokeDashoffset="-283"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-center mt-3 text-xs">
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
                                        <span className="text-gray-600">Micro</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
                                        <span className="text-gray-600">Macro</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                                        <span className="text-gray-600">Mega</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Deal at Your Pace */}
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden border border-blue-200">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 mb-2">
                                {WHY_US_CARDS[1].title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-600">
                                {WHY_US_CARDS[1].description}
                            </p>
                        </div>
                        {/* Line Chart Image */}
                        <div className="mt-8">
                            <div className="flex items-center justify-center h-44">
                                <div className="relative w-32 h-32">
                                    <svg viewBox="0 0 120 120" className="transform -rotate-90">
                                        {/* 70% slice - Purple */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#4A3AFF"
                                            strokeWidth="40"
                                            strokeDasharray="220 314"
                                        />
                                        {/* 20% slice - Pink */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#C893FD"
                                            strokeWidth="40"
                                            strokeDasharray="63 314"
                                            strokeDashoffset="-220"
                                        />
                                        {/* 10% slice - Dark */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#1E1B39"
                                            strokeWidth="40"
                                            strokeDasharray="31 314"
                                            strokeDashoffset="-283"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-center mt-3 text-xs">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
                                    <span className="text-gray-600">Micro</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
                                    <span className="text-gray-600">Macro</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                                    <span className="text-gray-600">Mega</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Zero Verify Metrics */}
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden border border-blue-200">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 mb-2">
                                {WHY_US_CARDS[2].title}
                            </h3>
                            <p className="text-base leading-relaxed text-gray-600">
                                {WHY_US_CARDS[2].description}
                            </p>
                        </div>
                        {/* Metrics Image */}
                        <div className="mt-8">
                            <div className="flex items-center justify-center h-44">
                                <div className="relative w-32 h-32">
                                    <svg viewBox="0 0 120 120" className="transform -rotate-90">
                                        {/* 70% slice - Purple */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#4A3AFF"
                                            strokeWidth="40"
                                            strokeDasharray="220 314"
                                        />
                                        {/* 20% slice - Pink */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#C893FD"
                                            strokeWidth="40"
                                            strokeDasharray="63 314"
                                            strokeDashoffset="-220"
                                        />
                                        {/* 10% slice - Dark */}
                                        <circle
                                            cx="60"
                                            cy="60"
                                            r="50"
                                            fill="none"
                                            stroke="#1E1B39"
                                            strokeWidth="40"
                                            strokeDasharray="31 314"
                                            strokeDashoffset="-283"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-center mt-3 text-xs">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-700"></div>
                                    <span className="text-gray-600">Micro</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
                                    <span className="text-gray-600">Macro</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                                    <span className="text-gray-600">Mega</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
