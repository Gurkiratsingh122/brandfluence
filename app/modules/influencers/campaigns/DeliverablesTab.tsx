'use client';

import { Calendar } from 'lucide-react';

type DeliverableItem = {
    title: string;
    description: string;
    dueDate: string;
    action: string;
    secondAction?: string;
    thirdAction?: string;
};

type DeliverableColumn = {
    status: string;
    items: DeliverableItem[];
};

export default function DeliverablesTab() {
    const deliverables: DeliverableColumn[] = [
        {
            status: 'Not Started',
            items: [
                { title: 'Video Review', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 10, 2025', action: 'Upload Video' },
                { title: 'Video Review', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 10, 2025', action: 'Upload Video' },
                { title: 'Video Review', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 10, 2025', action: 'Upload Video' },
            ],
        },
        {
            status: 'Script Pending',
            items: [
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'Submit Script' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'Submit Script' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'Submit Script' },
            ],
        },
        {
            status: 'Revision Requested',
            items: [
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Feedback', secondAction: 'Re-upload' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Feedback', secondAction: 'Re-upload' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Feedback', secondAction: 'Re-upload' },
            ],
        },
        {
            status: 'Uploaded',
            items: [
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Video', secondAction: 'Re-upload', thirdAction: 'Upload Raw Files' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Video', secondAction: 'Re-upload' },
                { title: 'Reel UGC Ad', description: 'Ann is a beauty enthusiast who deliver honest, in-depth product review and can help...', dueDate: 'June 14, 2025', action: 'View Video', secondAction: 'Re-upload' },
            ],
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {deliverables.map((column, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-[#d9e2eb] p-4">
                    <h3 className="text-[16px] font-bold text-black mb-4">{column.status}</h3>
                    <div className="space-y-3">
                        {column?.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-[#f8f9fa] rounded-xl p-4 space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[14px] font-bold">
                                        {itemIdx + 1}
                                    </div>
                                    <span className="text-[14px] font-semibold text-black">{item.title}</span>
                                </div>
                                <p className="text-[12px] text-[#666] line-clamp-2">{item.description}</p>
                                <div className="flex items-center gap-1 text-[12px] text-[#666]">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>Due Date: {item.dueDate}</span>
                                </div>
                                <div className="space-y-2">
                                    <button className="w-full h-9 bg-[#6c78ff] text-white text-[13px] font-medium rounded-full hover:bg-[#5c68ef] transition-colors">
                                        {item.action}
                                    </button>
                                    {item?.secondAction && (
                                        <button className="w-full h-9 border border-[#6c78ff] text-[#6c78ff] text-[13px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                                            {item?.secondAction}
                                        </button>
                                    )}
                                    {item.thirdAction && (
                                        <button className="w-full h-9 border border-[#6c78ff] text-[#6c78ff] text-[13px] font-medium rounded-full hover:bg-[#f0f1ff] transition-colors">
                                            {item.thirdAction}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
