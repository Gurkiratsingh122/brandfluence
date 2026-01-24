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
            <BarChart data={data}>
                <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity={1} />
                        <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                    dataKey={xAxisKey}
                    tick={{ fontSize: 12, fill: '#999' }}
                    axisLine={{ stroke: '#f0f0f0' }}
                />
                <YAxis
                    tick={{ fontSize: 12, fill: '#999' }}
                    axisLine={{ stroke: '#f0f0f0' }}
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
