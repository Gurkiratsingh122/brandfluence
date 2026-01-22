'use client';

import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'elevated' | 'gradient' | 'glassmorphism';
    className?: string;
    hover?: boolean;
}

const variantStyles = {
    default: 'bg-white rounded-3xl shadow-lg',
    elevated: 'bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
    gradient: 'bg-linear-to-br rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
    glassmorphism: 'bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2',
};

export function Card({
    children,
    variant = 'elevated',
    className = '',
    hover = true,
}: CardProps) {
    const baseStyles = variantStyles[variant];
    const hoverClass = hover ? '' : '';

    return (
        <div className={`${baseStyles} ${hoverClass} ${className} p-8 border border-slate-100`}>
            {children}
        </div>
    );
}
