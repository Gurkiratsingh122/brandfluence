'use client';

import { PerformanceAreaChart } from '@/app/components/Charts/PerformanceAreaChart';

export default function PerformanceTab() {
    const platforms = [
        { name: 'TikTok', icon: '🎵', color: '#000', totalViews: '15k', earnings: '$120,000', avgViewRate: '4.5%' },
        { name: 'Instagram', icon: '📷', color: '#E1306C', totalViews: '15k', earnings: '$120,000', avgViewRate: '4.5%' },
        { name: 'YouTube', icon: '▶️', color: '#E60000', totalViews: '15k', earnings: '$120,000', avgViewRate: '4.5%' },
    ];

    const contentItems = [
        { title: 'Recycled Canvas Weekender Bag', views: '2,714' },
        { title: 'Recycled Canvas Weekender Bag', views: 'View on TikTok' },
        { title: 'Recycled Canvas Weekender Bag', views: 'View on TikTok' },
        { title: 'Recycled Canvas Weekender Bag', views: 'View on TikTok' },
    ];

    return (
        <div className="space-y-6">
            {/* Earnings Overview */}
            <div className="bg-white rounded-2xl border border-[#d9e2eb] p-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-[14px] text-[#666] mb-1">Total Estimated Earnings</p>
                        <p className="text-[32px] font-bold text-black">$1,340.00</p>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#666] mb-1">Bonus</p>
                        <p className="text-[24px] font-bold text-black">$250</p>
                    </div>
                    <div className="flex-1 ml-8">
                        <div className="h-3 bg-[#ebf5eb] rounded-full overflow-hidden">
                            <div className="h-full bg-[#04b700] rounded-full" style={{ width: '55%' }} />
                        </div>
                        <p className="text-[12px] text-[#666] mt-1">vs $2500 budget available</p>
                    </div>
                </div>
            </div>

            {/* Platform Performance */}
            {platforms.map((platform, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#d9e2eb] p-6">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-[20px]" style={{ backgroundColor: platform.color + '20' }}>
                                {platform.icon}
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-black">{platform.name}</h3>
                                <p className="text-[13px] text-[#666]">Start Date - End Date</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 text-[14px]">
                            <div>
                                <p className="text-[#666] mb-1">TOTAL VIEWS</p>
                                <p className="font-semibold text-black">{platform.totalViews}</p>
                            </div>
                            <div>
                                <p className="text-[#666] mb-1">EARNINGS</p>
                                <p className="font-semibold text-black">{platform.earnings}</p>
                            </div>
                            <div>
                                <p className="text-[#666] mb-1">AVG. VIEW RATE</p>
                                <p className="font-semibold text-black">{platform.avgViewRate}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Chart Placeholder */}
                        <div className="h-full">
                            <div className="w-full h-full">
                                <PerformanceAreaChart
                                    data={[
                                        { label: 'Day 1', value: 1200 },
                                        { label: 'Day 2', value: 1600 },
                                        { label: 'Day 3', value: 900 },
                                        { label: 'Day 4', value: 1800 },
                                        { label: 'Day 5', value: 1400 },
                                    ]}
                                    dataKey="value"
                                    xAxisKey="label"
                                    color={platform.color}
                                    height={200}
                                />
                            </div>
                        </div>

                        {/* Content List */}
                        <div className="space-y-3">
                            <h4 className="text-[15px] font-semibold text-black">{platform.name} content</h4>
                            {contentItems.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                                        <img src="/landscape_brand.jpg" alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[13px] text-black font-medium">{item.title}</p>
                                        <a href="#" className="text-[12px] text-[#6c78ff] hover:underline">{item.views}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
