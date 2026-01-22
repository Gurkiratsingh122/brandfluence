'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    gradient?: string;
    className?: string;
    animate?: boolean;
}

export function GradientText({
    children,
    gradient = 'from-cyan-600 via-teal-500 to-cyan-600',
    className = '',
    animate = false,
}: GradientTextProps) {
    return (
        <span
            className={`text-transparent bg-clip-text bg-linear-to-r ${gradient} ${animate ? 'animate-gradient' : ''
                } ${className}`}
        >
            {children}
        </span>
    );
}
