'use client';

import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    borderColor?: string;
    hoverBorderColor?: string;
    iconGradient?: string;
    children?: ReactNode;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
    borderColor = 'border-blue-100',
    hoverBorderColor = 'hover:border-blue-600',
    iconGradient = 'from-blue-600 to-blue-700',
    children
}: FeatureCardProps) {
    return (
        <div
            className={`group bg-white rounded-2xl p-8 border-2 ${borderColor} ${hoverBorderColor} transition-all hover:shadow-lg`}
        >
            {/* Icon Container */}
            <div className={`w-16 h-16 bg-linear-to-br ${iconGradient} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Feature Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
                {description}
            </p>

            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
