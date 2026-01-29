'use client';

import { DashboardStatsCard } from '@/app/components/DashboardStatsCard';

interface StatsData {
    value: string | number;
    label: string;
    change?: string;
    showChart?: boolean;
    chartColor?: string;
    subtitle?: string;
}

interface StatsRowProps {
    stats?: StatsData[];
}

export function StatsRow({ stats }: StatsRowProps) {
    const defaultStats: StatsData[] = [
        {
            value: '1,200',
            label: 'Total Views',
            change: '+4.2%',
            showChart: true,
            chartColor: '#04b700',
            subtitle: 'Compared to last week',
        },
        {
            value: '$210.00',
            label: 'Total Spent',
            change: '+1.8%',
            showChart: true,
            chartColor: '#6c78ff',
            subtitle: 'Last 7 days',
        },
        {
            value: '3',
            label: 'Active Campaigns',
            showChart: false,
            subtitle: 'Currently running',
        },
    ];

    const cardsToDisplay = stats || defaultStats;

    return (
        <div className="grid grid-cols-3 gap-4">
            {cardsToDisplay.map((stat, idx) => (
                <DashboardStatsCard
                    key={idx}
                    title={stat.label}
                    value={stat.value}
                    change={stat.change}
                    showChart={stat.showChart}
                    chartColor={stat.chartColor}
                    subtitle={stat.subtitle}
                    alignment="horizontal"
                />
            ))}
        </div>
    );
}
