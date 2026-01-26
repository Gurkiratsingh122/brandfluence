'use client';

import { Card } from 'antd';
import { PerformanceAreaChart } from '@/app/components/Charts/PerformanceAreaChart';

const creditBalanceData = [
    { date: '1', balance: 2500 },
    { date: '5', balance: 3000 },
    { date: '10', balance: 2800 },
    { date: '15', balance: 3200 },
    { date: '20', balance: 3448 },
    { date: '25', balance: 3100 },
    { date: '30', balance: 3450 },
];

export function CreditBalanceChart() {
    return (
        <Card
            className="rounded-2xl border border-[#e8eaff] bg-white mb-8"
            bodyStyle={{ padding: '20px' }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-base font-semibold text-[#111] m-0">
                        Total Credits
                    </h3>
                    <p className="text-sm text-[#666] mt-1">
                        3,450 Credits <span className="text-green-600 font-medium">+3% LAST MONTH</span>
                    </p>
                </div>
                <select className="text-sm border border-[#d9e2eb] rounded-lg px-3 py-1.5 text-[#666]">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
            <PerformanceAreaChart
                data={creditBalanceData}
                dataKey="balance"
                xAxisKey="date"
                color="#6c78ff"
                height={300}
            />
        </Card>
    );
}
