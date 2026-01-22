'use client';

import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
    icon: LucideIcon;
    gradient?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeStyles = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
};

const iconSizeStyles = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
};

export function IconBadge({
    icon: Icon,
    gradient = 'from-cyan-500 to-blue-500',
    size = 'md',
    className = '',
}: IconBadgeProps) {
    const sizeClass = sizeStyles[size];
    const iconSize = iconSizeStyles[size];

    return (
        <div
            className={`${sizeClass} bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform ${className}`}
        >
            <Icon className={iconSize} />
        </div>
    );
}
