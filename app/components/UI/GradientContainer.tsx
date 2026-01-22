'use client';

import { ReactNode } from 'react';

interface GradientContainerProps {
    children: ReactNode;
    gradient?: string;
    className?: string;
    id?: string;
}

export function GradientContainer({
    children,
    gradient = 'from-cyan-600 via-teal-500 to-cyan-600',
    className = '',
    id,
}: GradientContainerProps) {
    return (
        <div
            id={id}
            className={`bg-linear-to-br ${gradient} rounded-[40px] px-8 py-20 shadow-2xl ${className}`}
        >
            {children}
        </div>
    );
}
