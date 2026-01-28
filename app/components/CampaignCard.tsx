'use client';

import { Calendar, DollarSign, CreditCard, Wallet, Clock } from 'lucide-react';

interface CampaignCardProps {
    title: string;
    startDate: string;
    endDate: string;
    totalBudget: number;
    totalSpend: number;
    remainingBudget: number;
    paymentsPending: number;
    pendingAmount: number;
    spendPercentage: number;
    creatorsPaid: number;
    totalCreators: number;
    imageUrl?: string;
    onIncreaseBudget?: () => void;
}

export function CampaignCard({
    title,
    startDate,
    endDate,
    totalBudget,
    totalSpend,
    remainingBudget,
    paymentsPending,
    pendingAmount,
    spendPercentage,
    creatorsPaid,
    totalCreators,
    onIncreaseBudget,
    imageUrl = ""
}: CampaignCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-bold text-[#111]">{title}</h3>
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#1C1B1F]" />
                    <span className="text-[14px] font-medium text-[#111]">
                        {startDate} - {endDate}
                    </span>
                </div>
            </div>

            {/* Hero Image and Stats */}
            <div className="flex flex-col gap-5">
                {/* Image */}
                <div className="relative h-39.75 w-full rounded-3xl overflow-hidden border border-[rgba(46,109,254,0.42)]">
                    <img
                        src={imageUrl || '/landscape_brand.jpg'}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Stats Grid */}
                <div className="flex items-start justify-between">
                    {/* Total Budget */}
                    <div className="flex gap-2">
                        <div className="flex justify-center w-4 pt-1">
                            <DollarSign className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-[#494b51]">Total Budget</span>
                            <span className="text-[16px] font-medium text-[#111]">
                                ${totalBudget.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>
                    </div>

                    {/* Total Spend */}
                    <div className="flex gap-2 w-24">
                        <div className="flex justify-center w-4 pt-1">
                            <CreditCard className="w-4 h-4.75 text-black" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-[#494b51]">Total Spend</span>
                            <span className="text-[16px] font-medium text-[#111]">
                                -${Math.abs(totalSpend).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Remaining Budget */}
                    <div className="flex gap-2 w-32.75">
                        <div className="flex justify-center w-4 pt-1">
                            <Wallet className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-[#494b51]">Remaining Budget</span>
                            <span className="text-[16px] font-medium text-[#111]">
                                ${remainingBudget.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Payments Pending */}
                    <div className="flex gap-2">
                        <div className="flex justify-center w-4 pt-1">
                            <Clock className="w-4 h-4 text-black" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] text-[#494b51]">Payments Pending</span>
                            <span className="text-[16px] font-medium text-[#111]">
                                {paymentsPending} - ${pendingAmount}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="border border-[#d9e2eb] rounded-lg p-4 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                        <span className="text-[16px] font-medium text-black">{spendPercentage}%</span>
                        <span className="text-[12px] text-[#494b51]">Spend</span>
                    </div>
                    <div className="relative w-full h-1.5 bg-[#ededed] rounded-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#04b700] rounded-full"
                            style={{ width: `${spendPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Creators Paid */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="text-[12px] text-[#494b51]">Creators Paid:</span>
                        <span className="text-[16px] font-medium text-[#111]">{creatorsPaid}</span>
                        <span className="text-[16px] font-medium text-[#494b51]">of {totalCreators}</span>
                    </div>

                    {/* Avatar Stack */}
                    {/* <div className="flex items-center pr-2">
            <img src={imgEllipse5004} alt="" className="w-[22px] h-[22px] rounded-full -mr-2" />
            <img src={imgEllipse5005} alt="" className="w-[22px] h-[22px] rounded-full -mr-2" />
            <img src={imgEllipse5004} alt="" className="w-[22px] h-[22px] rounded-full -mr-2" />
            <img src={imgEllipse5005} alt="" className="w-[22px] h-[22px] rounded-full" />
          </div> */}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 h-9">
                <button className="flex-1 bg-[#6c78ff] text-white text-[14px] rounded-full hover:bg-[#5c68ef] transition-colors">
                    View Performance
                </button>
                <button
                    onClick={onIncreaseBudget}
                    className="flex-1 bg-white text-[#6c78ff] text-[14px] border border-[#6c78ff] rounded-full hover:bg-[#f0f1ff] transition-colors">
                    Increase Budget
                </button>
            </div>
        </div>
    );
}
