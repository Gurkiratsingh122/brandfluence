'use client';

import { ReactNode } from 'react';

interface GradientSectionProps {
    children: ReactNode;
    color?: 'blue' | 'purple';
    className?: string;
}

export function GradientSection({
    children,
    color = 'blue',
    className = '',
}: GradientSectionProps) {
    const bgGradient = color === 'blue'
        ? 'from-blue-600 to-blue-700'
        : 'from-purple-600 to-purple-700';

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className={`bg-linear-to-br ${bgGradient} rounded-3xl px-15 py-15 relative overflow-hidden ${className}`}>
                    {children}

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -top-12 -left-12 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
