'use client';

import { Button } from '@/app/components/UI/Button';

interface NeedHelpSectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onContactSupport?: () => void;
}

export function NeedHelpSection({
    title = 'Need Help?',
    description = 'Our support team is available 24/7 to help you with any questions or issues.',
    buttonText = 'Contact Support',
    onContactSupport,
}: NeedHelpSectionProps) {
    return (
        <div className="bg-white rounded-xl border border-[#d9e2eb] shadow-[0px_2px_4px_0px_rgba(202,203,227,0.5)] p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-[22px] font-bold text-[#1e1b39] mb-1">{title}</h3>
                    <p className="text-[14px] text-[#666]">{description}</p>
                </div>
                <Button variant="primary" size="md" onClick={onContactSupport}>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
