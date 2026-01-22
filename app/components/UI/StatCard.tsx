'use client';

interface StatCardProps {
    value: string;
    label: string;
    className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
    return (
        <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}
        >
            <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-2">
                {value}
            </div>
            <div className="text-slate-600 font-medium">{label}</div>
        </div>
    );
}
