'use client';

import { Card, Table, Tag, Input } from 'antd';
import type { TableProps } from 'antd';

interface Transaction {
    id: string;
    date: string;
    type: 'Debit' | 'Credit';
    description: string;
    creditsChange: number;
    balanceAfter: number;
}

const { Search } = Input;

export function TransactionHistory() {
    const columns: TableProps<Transaction>['columns'] = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: '15%',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            width: '12%',
            render: (type: string) => (
                <Tag
                    color={type === 'Debit' ? '#fee2e2' : '#dcfce7'}
                    style={{
                        color: type === 'Debit' ? '#dc2626' : '#16a34a',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: 500,
                    }}
                >
                    {type}
                </Tag>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '40%',
        },
        {
            title: 'Credits Change',
            dataIndex: 'creditsChange',
            key: 'creditsChange',
            width: '15%',
            render: (change: number) => (
                <span style={{ color: change < 0 ? '#dc2626' : '#16a34a', fontWeight: 600 }}>
                    {change < 0 ? '-' : '+'}{Math.abs(change)}
                </span>
            ),
        },
        {
            title: 'Balance After',
            dataIndex: 'balanceAfter',
            key: 'balanceAfter',
            width: '15%',
            render: (balance: number) => (
                <span className="font-medium text-[#111]">{balance.toLocaleString()}</span>
            ),
        },
    ];

    const data: Transaction[] = [
        {
            id: '1',
            date: '04/25/2025',
            type: 'Debit',
            description: 'Credit deduction for influencer payout under campaign "Spring Launch"',
            creditsChange: -200,
            balanceAfter: 3450,
        },
        {
            id: '2',
            date: '04/25/2025',
            type: 'Credit',
            description: 'Spending on video views for campaign "Easter Sale"',
            creditsChange: 120,
            balanceAfter: 3650,
        },
        {
            id: '3',
            date: '04/25/2025',
            type: 'Debit',
            description: 'Credit deduction for influencer payout under campaign "Spring Launch"',
            creditsChange: -200,
            balanceAfter: 3530,
        },
        {
            id: '4',
            date: '04/25/2025',
            type: 'Credit',
            description: 'Spending on video views for campaign "Easter Sale"',
            creditsChange: -200,
            balanceAfter: 3450,
        },
        {
            id: '5',
            date: '04/25/2025',
            type: 'Debit',
            description: 'Spending on video views for campaign "Easter Sale"',
            creditsChange: 120,
            balanceAfter: 3450,
        },
    ];

    return (
        <Card
            className="rounded-2xl border border-[#e8eaff] bg-white mb-8"
            bodyStyle={{ padding: '20px' }}
        >
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-base font-semibold text-[#111] m-0">
                    Transaction History
                </h3>
                <Search
                    placeholder="Search"
                    style={{ width: 200 }}
                    allowClear
                />
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
