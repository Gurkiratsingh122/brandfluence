'use client';

import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

interface MultilineChartDataPoint {
    [key: string]: string | number;
}

interface MultilineChartProps {
    data: MultilineChartDataPoint[];
    lines: Array<{
        dataKey: string;
        color: string;
        name?: string;
    }>;
    xAxisKey: string;
    height?: number;
}

export function MultilineChart({
    data,
    lines,
    xAxisKey,
    height = 400,
}: MultilineChartProps) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
                <defs>
                    {lines.map((line) => (
                        <linearGradient
                            key={line.dataKey}
                            id={`gradient-${line.dataKey}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stopColor={line.color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={line.color} stopOpacity={0} />
                        </linearGradient>
                    ))}
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
                    ]}
                />
                <Legend
                    wrapperStyle={{
                        paddingTop: '20px',
                    }}
                    iconType="line"
                />
                {lines.map((line) => (
                    <Line
                        key={line.dataKey}
                        type="monotone"
                        dataKey={line.dataKey}
                        name={line.name || line.dataKey}
                        stroke={line.color}
                        strokeWidth={2}
                        dot={false}
                        fill={`url(#gradient-${line.dataKey})`}
                        isAnimationActive={true}
                        strokeDasharray={line.dataKey.includes('Campaign 2') || line.dataKey.includes('Campaign 3') ? '5 5' : '0'}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
}
