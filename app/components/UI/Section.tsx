'use client';

import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    maxWidth?: 'sm' | 'md' | 'lg';
}

const maxWidthStyles = {
    sm: 'max-w-4xl',
    md: 'max-w-7xl',
    lg: 'max-w-7xl',
};

export function Section({
    children,
    className = '',
    id,
    maxWidth = 'md',
}: SectionProps) {
    const maxWidthClass = maxWidthStyles[maxWidth];

    return (
        <section
            id={id}
            className={`${maxWidthClass} mx-auto px-6 py-20 ${className}`}
        >
            {children}
        </section>
    );
}
