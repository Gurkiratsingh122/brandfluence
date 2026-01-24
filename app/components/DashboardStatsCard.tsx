'use client';

import { Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  showChart?: boolean;
  chartColor?: string;
  subtitle?: string;
  alignment?: "horizontal" | "vertical";
}

export function DashboardStatsCard({ title, value, change, showChart, chartColor = '#6c78ff', subtitle, alignment }: StatsCardProps) {
  return (
    <Card
      style={{
        borderRadius: '16px',
        border: '1px solid #e8eaff',
        background: '#fff',
        height: '100%',
      }}
      bodyStyle={{ padding: '20px' }}
    >
      <div className={alignment === 'horizontal' ? 'flex justify-between' : ''}>
      <div>
          <div style={{ marginBottom: '8px', fontSize: '13px', color: '#666' }}>
        {title}
      </div>
      
      {subtitle && (
        <div style={{ marginBottom: '4px', fontSize: '12px', color: '#999' }}>
          {subtitle}
        </div>
      )}
      </div>
    
      
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>
            {value}
          </div>
          
          {change && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: '#10b981',
              fontSize: '13px',
              fontWeight: 500
            }}>
              <ArrowUpOutlined style={{ fontSize: '12px' }} />
              {change}
            </div>
          )}
        </div>
        
        {showChart && (
          <div style={{ width: '80px', height: '40px' }}>
            <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
              <path
                d="M0 30 L10 25 L20 28 L30 20 L40 22 L50 15 L60 18 L70 12 L80 10"
                stroke={chartColor}
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M0 30 L10 25 L20 28 L30 20 L40 22 L50 15 L60 18 L70 12 L80 10 L80 40 L0 40 Z"
                fill={`${chartColor}33`}
              />
            </svg>
          </div>
        )}
      </div>
      </div>
    </Card>
  );
}
