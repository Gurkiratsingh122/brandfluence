'use client';

import { Card, Table, Tag, Button, Space, Input } from 'antd';
import type { TableProps } from 'antd';
import {
    BarChartOutlined,
    SyncOutlined,
    EditOutlined,
    InstagramOutlined,
} from '@ant-design/icons';

interface CampaignPerformance {
  id: string;
  name: string;
  status: string;
  viewsDelivered: number;
  creditsSpent: number;
  costPerView: string;
  startDate: string;
  endDate: string;
}

const { Search } = Input;

export function CampaignPerformanceTable() {
  const columns: TableProps<CampaignPerformance>['columns'] = [
    {
      title: 'Campaign Name',
      dataIndex: 'name',
      key: 'name',
      width: '22%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '12%',
      render: (status: string) => {
        let bgColor = '#d1fae5';
        let textColor = '#065f46';

        if (status === 'Pending') {
          bgColor = '#ddd6fe';
          textColor = '#5b21b6';
        } else if (status === 'Completed') {
          bgColor = '#e5e7eb';
          textColor = '#374151';
        }

        return (
          <Tag
            color={bgColor}
            style={{
              color: textColor,
              border: 'none',
              borderRadius: '12px',
              padding: '2px 12px',
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Views Delivered',
      dataIndex: 'viewsDelivered',
      key: 'viewsDelivered',
      width: '15%',
      render: (views: number) => views.toLocaleString(),
    },
    {
      title: 'Credits Spent',
      dataIndex: 'creditsSpent',
      key: 'creditsSpent',
      width: '13%',
      render: (credits: number) => (
        <span style={{ color: '#e1306c', fontWeight: 600 }}>
          {credits.toLocaleString()}
        </span>
      ),
    },
    {
      title: 'Cost Per View',
      dataIndex: 'costPerView',
      key: 'costPerView',
      width: '12%',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      width: '12%',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      width: '12%',
    },
    {
      title: '',
      key: 'actions',
      width: '6%',
      render: () => (
        <Space size={8}>
          <Button
            type="text"
            icon={<BarChartOutlined style={{ color: '#6c78ff' }} />}
            size="small"
          />
          <Button
            type="text"
            icon={<SyncOutlined style={{ color: '#6c78ff' }} />}
            size="small"
          />
          <Button
            type="text"
            icon={<EditOutlined style={{ color: '#6c78ff' }} />}
            size="small"
          />
        </Space>
      ),
    },
  ];

  const data: CampaignPerformance[] = [
    {
      id: '1',
      name: 'Spring Launch Promo',
      status: 'Live',
      viewsDelivered: 240000,
      creditsSpent: 200,
      costPerView: '20%',
      startDate: '03/15/2025',
      endDate: '03/15/2025',
    },
    {
      id: '2',
      name: 'Spring Launch Promo',
      status: 'Pending',
      viewsDelivered: 240000,
      creditsSpent: 200,
      costPerView: '20%',
      startDate: '03/15/2025',
      endDate: '03/15/2025',
    },
    {
      id: '3',
      name: 'Spring Launch Promo',
      status: 'Completed',
      viewsDelivered: 240000,
      creditsSpent: 200,
      costPerView: '20%',
      startDate: '03/15/2025',
      endDate: '03/15/2025',
    },
    {
      id: '4',
      name: 'Spring Launch Promo',
      status: 'Completed',
      viewsDelivered: 240000,
      creditsSpent: 200,
      costPerView: '20%',
      startDate: '03/15/2025',
      endDate: '03/15/2025',
    },
    {
      id: '5',
      name: 'Spring Launch Promo',
      status: 'Completed',
      viewsDelivered: 240000,
      creditsSpent: 200,
      costPerView: '20%',
      startDate: '03/15/2025',
      endDate: '03/15/2025',
    },
  ];

  return (
    <Card
      className="rounded-4xl border border-[#e8eaff] mb-8"
      bodyStyle={{ padding: '20px' }}
    >
      <div
        className="flex justify-between items-center mb-5"
      >
        <h3
          className="text-base font-semibold text-[#111] m-0"
        >
          Campaign Performance
        </h3>
        <div className="flex gap-3">
          <Search
            placeholder="Search"
            style={{ width: 200 }}
            allowClear
          />
          <Button type="primary" style={{ background: '#6c78ff' }}>
            Export CSV
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
        }}
        style={{ marginTop: '16px' }}
      />
    </Card>
  );
}
