'use client';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Bar,
    BarChart,
} from 'recharts';

interface BarChartDataPoint {
    [key: string]: string | number;
}

interface PerformanceBarChartProps {
    data: BarChartDataPoint[];
    dataKey: string;
    xAxisKey: string;
    color?: string;
    height?: number;
}

export function PerformanceBarChart({
    data,
    dataKey,
    xAxisKey,
    color = '#6c78ff',
    height = 400,
}: PerformanceBarChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} accessibilityLayer={false}>
                <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={1} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.7} />
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
                <Bar
                    dataKey={dataKey}
                    fill="url(#colorBar)"
                    radius={[8, 8, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
