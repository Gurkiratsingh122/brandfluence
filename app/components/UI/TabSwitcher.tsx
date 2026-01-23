'use client';

import { SignupStep } from '@/app/types/signup';
import { SIGNUP_STEPS } from '@/app/constants/signup';
import { Button } from './Button';

interface TabSwitcherProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
    tabs?: { key: string; label: string }[];
    disabledTabs?: string[];
}

export function TabSwitcher({
    currentTab,
    onTabChange,
    tabs,
    disabledTabs = [],
}: TabSwitcherProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full max-w-3xl bg-white border border-blue-300 rounded-full p-1">
                {tabs?.map((tab) => {
                    const isActive = currentTab === tab?.key;
                    const isDisabled = disabledTabs.includes(tab?.key || '');

                    return (
                        <Button
                            key={tab?.key}
                            onClick={() => !isDisabled && onTabChange(tab?.key || '')}
                            disabled={isDisabled}
                            variant={isActive ? 'primary' : 'secondary'}
                            size='md'
                            borderless
                            className="flex-1 whitespace-nowrap px-6 py-3 text-sm font-medium rounded-full
                transition-all duration-300 ease-in-out">
                            {tab?.label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
