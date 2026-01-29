'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Table, Modal } from 'antd';
import { Button } from '@/app/components/UI/Button';

interface TopInfluencer {
    rank: number;
    name: string;
    image?: string;
    earnings: string;
    status: string;
}

interface TopInfluencersProps {
    influencers?: TopInfluencer[];
}

export function TopInfluencersSection({ influencers }: TopInfluencersProps) {
    const defaultInfluencers: TopInfluencer[] = [
        { rank: 1, name: '@jenny', image: '/profile_brand.jpg', earnings: '$100,000', status: 'Completed' },
        { rank: 2, name: '@annita', image: '/profile_brand.jpg', earnings: '$75,000', status: 'Completed' },
        { rank: 3, name: '@annita', image: '/profile_brand.jpg', earnings: '$65,000', status: 'In Progress' },
    ];

    const dataToDisplay = influencers || defaultInfluencers;

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            width: 80,
            render: (rank: number) => (
                <div className="flex items-center gap-2">
                    {rank <= 3 && <span className="text-[18px]">{'🥇🥈🥉'[rank - 1]}</span>}
                    <span className="font-medium">#{rank}</span>
                </div>
            ),
        },
        {
            title: 'Creator',
            dataIndex: 'name',
            key: 'name',
            render: (name: string, record: TopInfluencer) => (
                <div className="flex items-center gap-2">
                    <img src={record.image || '/profile_brand.jpg'} alt={name} className="w-8 h-8 rounded-full" />
                    <span className="font-medium text-[#111]">{name}</span>
                </div>
            ),
        },
        {
            title: 'Earnings',
            dataIndex: 'earnings',
            key: 'earnings',
            render: (earnings: string) => <span className="text-[#6c78ff] font-medium">{earnings}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <span className={`text-[14px] font-medium ${status === 'Completed' ? 'text-[#04b700]' : 'text-[#fa8c16]'}`}>
                    {status}
                </span>
            ),
        },
    ];

    // helper to render the table; can enable pagination when needed
    const renderTable = (data: TopInfluencer[], paginated = false) => {
        const dataSource = data.map((inf, idx) => ({ ...inf, key: inf.rank ?? idx }));

        return (
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={paginated ? { pageSize: 5 } : false}
                bordered={false}
                className="rounded-lg overflow-hidden"
            />
        );
    };

    const [showAll, setShowAll] = useState(false);

    // prepare an extended dataset for the "View All" modal (demo/sample)
    const extendedInfluencers = (influencers || defaultInfluencers).length >= 10
        ? (influencers || defaultInfluencers)
        : Array.from({ length: 10 }).map((_, i) => {
            const base = (influencers || defaultInfluencers)[i % (influencers || defaultInfluencers).length];
            return { ...base, rank: i + 1, name: `${base.name}${i + 1}`, key: i + 1 } as TopInfluencer;
        });

    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-[#ffd700] fill-[#ffd700]" />
                    <h3 className="text-[20px] font-bold text-[#111]">Top Influencers This Week</h3>
                </div>
                <Button variant="secondary" size="sm">
                    View All
                </Button>
            </div>
            <p className="text-[14px] text-[#494b51] mb-4">Earn more. Climb the ranks. Win rewards!</p>

            {renderTable(dataToDisplay, false)}

            <p className="text-[11px] text-[#666] mt-3 text-center">
                You are missing out on <span className="text-[#6c78ff] font-medium">100,000 potential reach</span>
            </p>

            <Modal
                open={showAll}
                onCancel={() => setShowAll(false)}
                footer={null}
                title="Top Influencers"
                width={900}
                centered
            >
                {renderTable(extendedInfluencers, true)}
            </Modal>
        </div>
    );
}
