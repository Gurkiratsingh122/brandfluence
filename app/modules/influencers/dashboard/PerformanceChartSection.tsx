'use client';

import { useState } from 'react';
import { PerformanceAreaChart } from '@/app/components/Charts/PerformanceAreaChart';

interface PerformanceChartProps {
    title?: string;
    periods?: string[];
}

export function PerformanceChartSection({ title = 'Key Relevance Indicator', periods = ['1 week', '1 month', '3 month', 'All Time'] }: PerformanceChartProps) {
    const [selectedPeriod, setSelectedPeriod] = useState(1);

    // Sample data for the chart
    const chartData = [
        { date: '1 Jan', relevance: 120 },
        { date: '8 Jan', relevance: 80 },
        { date: '15 Jan', relevance: 100 },
        { date: '22 Jan', relevance: 60 },
        { date: '29 Jan', relevance: 90 },
        { date: '5 Feb', relevance: 50 },
        { date: '12 Feb', relevance: 110 },
    ];

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-[18px] font-bold text-[#111]">{title}</h3>
                <div className="flex gap-2">
                    {periods.map((period, idx) => (
                        <button
                            key={period}
                            onClick={() => setSelectedPeriod(idx)}
                            className={`px-3 py-1.5 text-[12px] rounded-lg transition-colors ${selectedPeriod === idx
                                    ? 'bg-[#6c78ff] text-white'
                                    : 'text-[#666] hover:bg-[#f0f0f0]'
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            <PerformanceAreaChart
                data={chartData}
                dataKey="relevance"
                xAxisKey="date"
                color="#6c78ff"
                height={300}
            />
        </div>
    );
}
