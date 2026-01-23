'use client';

import { LucideIcon } from 'lucide-react';

interface SectionTagProps {
    icon: LucideIcon;
    text: string;
    color?: 'blue' | 'purple' | 'white';
    isDark?: boolean;
}

export function SectionTag({
    icon: Icon,
    text,
    color = 'blue',
    isDark = false,
}: SectionTagProps) {
    const colorStyles = {
        blue: isDark ? 'bg-white/20 text-white' : 'bg-white text-blue-600 shadow-md',
        purple: isDark ? 'bg-white/20 text-white' : 'bg-white text-purple-600 shadow-md',
        white: 'bg-white/20 text-white backdrop-blur-sm',
    };

    const iconColorStyles = {
        blue: isDark ? 'text-white' : 'text-blue-600',
        purple: isDark ? 'text-white' : 'text-purple-600',
        white: 'text-white',
    };

    const styles = colorStyles[color];
    const iconColor = iconColorStyles[color];

    return (
        <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-4 ${styles}`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
            <span className="font-medium text-sm">{text}</span>
        </div>
    );
}
