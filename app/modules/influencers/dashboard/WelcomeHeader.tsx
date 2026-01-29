'use client';

interface WelcomeHeaderProps {
    name: string;
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
    return (
        <div className="mb-6">
            <h1 className="text-[24px] font-bold text-[#111] mb-1">Hello, {name}!</h1>
        </div>
    );
}
