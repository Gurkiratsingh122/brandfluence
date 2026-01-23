'use client';

interface BadgeProps {
    text: string;
    variant?: 'success' | 'info' | 'warning' | 'error';
    className?: string;
}

const variantStyles = {
    success: 'bg-green-50 text-green-600',
    info: 'bg-blue-50 text-blue-600',
    warning: 'bg-amber-50 text-amber-600',
    error: 'bg-red-50 text-red-600',
};

export function Badge({
    text,
    variant = 'success',
    className = '',
}: BadgeProps) {
    const baseStyles = 'inline-block px-3 py-1 rounded-full text-xs font-semibold';
    const variantStyle = variantStyles[variant];

    return (
        <span className={`${baseStyles} ${variantStyle} ${className}`}>
            {text}
        </span>
    );
}
