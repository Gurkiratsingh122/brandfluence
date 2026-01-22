'use client';

import { ReactNode } from 'react';

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    details?: string[];
    children?: ReactNode;
}

export function StepCard({
    number,
    title,
    description,
    details,
    children
}: StepCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 relative">
            {/* Step Number Badge */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {number}
            </div>

            {/* Icon/Graphic Placeholder */}
            {children && (
                <div className="mb-5 flex items-center justify-center h-32 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl">
                    {children}
                </div>
            )}

            {/* Step Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                {title}
            </h3>
            <p className="text-sm text-blue-600 font-medium mb-4">
                {description}
            </p>

            {/* Details List */}
            {details && (
                <ul className="space-y-2">
                    {details.map((detail, index) => (
                        <li
                            key={index}
                            className={`text-sm ${index % 2 === 0
                                    ? 'font-semibold text-gray-900'
                                    : 'text-gray-600'
                                } leading-relaxed`}
                        >
                            {index % 2 === 0 ? '• ' : '  '}{detail}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
