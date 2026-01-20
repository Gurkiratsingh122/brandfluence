import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import clsx from 'clsx';

interface StatCardProps {
    title: string;
    value: string | number;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    trend?: string;
    trendDirection?: 'up' | 'down';
    color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, prefix, suffix, trend, trendDirection, color }) => {
    return (
        <Card bordered={false} className="shadow-sm hover:shadow-md transition-shadow">
            <Statistic
                title={<span className="text-gray-500 font-medium">{title}</span>}
                value={value}
                prefix={prefix}
                suffix={suffix}
                valueStyle={{ color: color || '#1f2937', fontWeight: 600 }}
            />
            {trend && (
                <div className={clsx("mt-2 text-sm flex items-center gap-1", {
                    "text-green-500": trendDirection === 'up',
                    "text-red-500": trendDirection === 'down'
                })}>
                    {trendDirection === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    <span>{trend}</span>
                    <span className="text-gray-400 ml-1">vs last month</span>
                </div>
            )}
        </Card>
    );
};

export default StatCard;
