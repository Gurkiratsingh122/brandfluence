'use client';

import { useState } from 'react';
import { TabSwitcher } from '@/app/components/UI/TabSwitcher';
import { InfluencerCredentialsForm } from '@/app/modules/signup/influencers/InfluencerCredentialsForm';
import { InfluencerProfileForm } from '@/app/modules/signup/influencers/InfluencerProfileForm';
import { InfluencerPayoutForm } from '@/app/modules/signup/influencers/InfluencerPayoutForm';
import { InfluencerSignupData } from '@/app/types/signup';

const signUpTabs = [
    { key: 'credentials', label: 'Account Credentials' },
    { key: 'profile', label: 'Profile Details' },
    { key: 'payout', label: 'Payout Setup' },
];

export default function InfluencerSignupPage() {
    const [currentStep, setCurrentStep] =
        useState<string>('credentials');

    const [formData, setFormData] = useState<InfluencerSignupData>({
        credentials: {
            fullName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreedToTerms: false,
        },
        profile: {
            niche: undefined,
            country: undefined,
            profilePhoto: undefined,
            headerImage: undefined,
            bio: '',
            website: '',
        },
        payout: {
            method: 'paypal',
            paypalEmail: '',
            agreedToPayoutTerms: false,
        },
    });

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-indigo-50 flex items-center justify-center p-14">
            <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full">
                <div className="px-8 pt-6">
                    <TabSwitcher
                        currentTab={currentStep}
                        tabs={signUpTabs}
                        onTabChange={setCurrentStep}
                    />
                </div>

                <div className="px-8 py-8">
                    {currentStep === 'credentials' && (
                        <InfluencerCredentialsForm
                            data={formData.credentials}
                            onUpdate={(credentials) =>
                                setFormData({ ...formData, credentials })
                            }
                            onNext={() => setCurrentStep('profile')}
                        />
                    )}

                    {currentStep === 'profile' && (
                        <InfluencerProfileForm
                            data={formData.profile}
                            onUpdate={(profile) =>
                                setFormData({ ...formData, profile })
                            }
                            onBack={() => setCurrentStep('credentials')}
                            onNext={() => setCurrentStep('payout')}
                        />
                    )}

                    {currentStep === 'payout' && (
                        <InfluencerPayoutForm
                            data={formData.payout}
                            onUpdate={(payout) =>
                                setFormData({ ...formData, payout })
                            }
                            onBack={() => setCurrentStep('profile')}
                            onSubmit={() => {
                                console.log(formData);
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
