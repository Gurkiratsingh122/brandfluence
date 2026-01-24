'use client';

import { Card, Button } from 'antd';
import { CreditActivity as CreditActivityType } from '@/app/types/dashboard';

export function CreditActivity() {
    const activities: CreditActivityType[] = [
        {
            id: '1',
            description: 'Campaign Deposit',
            amount: 2000,
            type: 'credit',
            date: '2025-01-20'
        },
        {
            id: '2',
            description: "Spent on 'Spring Launch Promo'",
            amount: 2000,
            type: 'debit',
            date: '2025-01-19'
        },
        {
            id: '3',
            description: 'Account Deposit',
            amount: 2000,
            type: 'credit',
            date: '2025-01-18'
        },
        {
            id: '4',
            description: "Refund from 'Winter Clearance'",
            amount: 2000,
            type: 'debit',
            date: '2025-01-17'
        },
        {
            id: '5',
            description: 'Campaign Deposit',
            amount: 2000,
            type: 'credit',
            date: '2025-01-16'
        },
        {
            id: '6',
            description: 'Campaign Deposit',
            amount: 2000,
            type: 'credit',
            date: '2025-01-15'
        },
        {
            id: '7',
            description: 'Campaign Deposit',
            amount: 2000,
            type: 'credit',
            date: '2025-01-14'
        },
    ];

    return (
        <Card
            style={{
                borderRadius: '16px',
                border: '1px solid #e8eaff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
            bodyStyle={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                flexShrink: 0,
            }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111', margin: 0 }}>
                    Recent Credit Activity
                </h3>
                <Button type="link" style={{ color: '#6c78ff', padding: 0 }}>
                    View All Transactions →
                </Button>
            </div>

            {/* Activity List - Scrollable */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                overflowY: 'auto',
                flex: 1,
                paddingRight: '4px',
            }}>
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '12px',
                            background: '#f8f9ff',
                            borderRadius: '8px',
                            flexShrink: 0,
                        }}
                    >
                        <span style={{ fontSize: '14px', color: '#111' }}>
                            {activity.description}
                        </span>
                        <span
                            style={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: activity.type === 'credit' ? '#10b981' : '#ef4444',
                                whiteSpace: 'nowrap',
                                marginLeft: '8px',
                            }}
                        >
                            {activity.type === 'credit' ? '+' : '-'}{activity.amount.toLocaleString()} Credits
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
