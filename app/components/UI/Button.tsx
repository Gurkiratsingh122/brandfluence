'use client';

import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'gradient' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
    primary: 'px-8 py-4 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl font-semibold',
    secondary: 'px-8 py-4 bg-white text-slate-700 rounded-full border-2 border-slate-200 hover:border-cyan-600 hover:text-cyan-600 transition-all font-semibold',
    gradient: 'group px-8 py-4 bg-linear-to-r from-cyan-600 to-teal-500 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all font-semibold text-lg flex items-center gap-2',
    dark: 'group px-8 py-4 bg-white text-cyan-600 rounded-full hover:shadow-2xl transition-all font-semibold text-lg flex items-center gap-2 mx-auto',
};

const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export function Button({
    children,
    variant = 'primary',
    size = 'lg',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
}: ButtonProps) {
    const baseStyles = variantStyles[variant];
    const sizeStyle = size !== 'lg' ? sizeStyles[size] : '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${sizeStyle} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            {children}
        </button>
    );
}
