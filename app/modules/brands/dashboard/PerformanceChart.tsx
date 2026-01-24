'use client';

import { Card } from 'antd';
import { PerformanceAreaChart } from '@/app/components/Charts/PerformanceAreaChart';

export function PerformanceChart() {
    const data = [
        { day: '0', views: 0 },
        { day: '5', views: 458 },
        { day: '10', views: 234 },
        { day: '15', views: 345 },
        { day: '20', views: 289 },
        { day: '25', views: 412 },
        { day: '30', views: 378 },
    ];

    return (
        <Card
            style={{
                borderRadius: '16px',
                border: '1px solid #e8eaff',
                height: '100%',
            }}
            bodyStyle={{ padding: '20px' }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '20px',
                }}
            >
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>
                    Top Campaign Performance
                </h3>
                <div style={{ textAlign: 'right' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: '#d1fae5',
                            padding: '4px 12px',
                            borderRadius: '12px',
                        }}
                    >
                        <div
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#10b981',
                            }}
                        />
                        <span
                            style={{
                                fontSize: '13px',
                                fontWeight: 600,
                                color: '#065f46',
                            }}
                        >
                            76%
                        </span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#999', marginTop: '4px' }}>
                        AVG. VIEW RATE
                    </div>
                </div>
            </div>

            {/* Chart */}
            <PerformanceAreaChart
                data={data}
                dataKey="views"
                xAxisKey="day"
                color="#6c78ff"
                height={300}
            />

            {/* Footer */}
            <div
                style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f0f0f0',
                    fontSize: '13px',
                    color: '#666',
                }}
            >
                <span style={{ fontWeight: 600, color: '#111' }}>@StyleGuru</span> — 458 views,
                300 likes
                <span style={{ marginLeft: '16px', color: '#999' }}>
                    BEST PERFORMING INFLUENCER
                </span>
            </div>
        </Card>
    );
}
