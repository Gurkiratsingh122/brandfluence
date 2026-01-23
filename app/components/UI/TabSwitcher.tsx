'use client';

import { SignupStep } from '@/app/types/signup';
import { SIGNUP_STEPS } from '@/app/constants/signup';
import { Button } from './Button';

interface TabSwitcherProps {
    currentTab: SignupStep;
    onTabChange: (tab: SignupStep) => void;
    tabs?: SignupStep[];
    disabledTabs?: SignupStep[];
}

export function TabSwitcher({
    currentTab,
    onTabChange,
    tabs = ['credentials', 'company', 'payment'],
    disabledTabs = [],
}: TabSwitcherProps) {
    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full max-w-3xl bg-white border border-blue-300 rounded-full p-1">
                {tabs.map((tab) => {
                    const tabInfo = SIGNUP_STEPS[tab];
                    const isActive = currentTab === tab;
                    const isDisabled = disabledTabs.includes(tab);

                    return (
                        <Button
                            key={tab}
                            onClick={() => !isDisabled && onTabChange(tab)}
                            disabled={isDisabled}
                            variant={isActive ? 'primary' : 'secondary'}
                            size='md'
                            borderless
                            className="flex-1 whitespace-nowrap px-6 py-3 text-sm font-medium rounded-full
                transition-all duration-300 ease-in-out">
                            {tab === 'payment' ? (
                                <div className="leading-tight text-center">
                                    Add Payment
                                </div>
                            ) : (
                                tabInfo.title
                            )}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}
