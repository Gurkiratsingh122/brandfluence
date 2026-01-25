'use client';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from 'recharts';

interface AreaChartDataPoint {
    [key: string]: string | number;
}

interface PerformanceAreaChartProps {
    data: AreaChartDataPoint[];
    dataKey: string;
    xAxisKey: string;
    color?: string;
    height?: number;
}

export function PerformanceAreaChart({
    data,
    dataKey,
    xAxisKey,
    color = '#6c78ff',
    height = 400,
}: PerformanceAreaChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} accessibilityLayer={false}>
                <defs>
                    <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f0f0f0" />
                <XAxis
                    dataKey={xAxisKey}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={16}
                    interval="preserveStartEnd"
                    fontSize={14}
                />
                <YAxis
                    orientation="left"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={16}
                    fontSize={14}
                    width={60}
                />
                <Tooltip
                    contentStyle={{
                        background: '#1f2937',
                        border: 'none',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px',
                        padding: '8px 12px',
                    }}
                    formatter={(value: number | undefined) => [
                        value?.toLocaleString() || '0',
                        dataKey,
                    ]}
                />
                <Area
                    type="monotone"
                    dataKey={dataKey}
                    stroke={color}
                    strokeWidth={2}
                    fill="url(#colorPerformance)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
