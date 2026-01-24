'use client';

import { useState } from 'react';
import { TabSwitcher } from '@/app/components/UI/TabSwitcher';
import { BrandCredentialsForm } from '@/app/modules/signup/brands/BrandCredentialsForm';
import { CompanyDetailsForm } from '@/app/modules/signup/brands/CompanyDetailsForm';
import { AddPaymentForm } from '@/app/modules/signup/brands/AddPaymentForm';
import { SignupFormData, SignupStep } from '@/app/types/signup';

export default function SignupPage() {
    const [currentStep, setCurrentStep] = useState<string>('credentials');
    const [formData, setFormData] = useState<SignupFormData>({
        credentials: {
            companyName: '',
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreedToTerms: false
        },
        companyDetails: {
            businessType: '',
            industry: '',
            website: '',
            address: '',
            phoneNumber: '',
            countryCode: '+1'
        },
        payment: {
            cardNumber: '',
            nameOnCard: '',
            expiryMonth: '',
            expiryYear: '',
            cvv: '',
            zipCode: '',
            subscribeToEmails: false
        }
    });

    const handleCredentialsUpdate = (credentials: SignupFormData['credentials']) => {
        setFormData({ ...formData, credentials });
    };

    const handleCompanyDetailsUpdate = (companyDetails: SignupFormData['companyDetails']) => {
        setFormData({ ...formData, companyDetails });
    };

    const handlePaymentUpdate = (payment: SignupFormData['payment']) => {
        setFormData({ ...formData, payment });
    };

    const handleNext = (nextStep: SignupStep) => {
        setCurrentStep(nextStep);
    };

    const handleBack = (prevStep: SignupStep) => {
        setCurrentStep(prevStep);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Account created successfully!');
    };

    const steps = [{ key: 'credentials', label: 'Account Credentials' }, { key: 'company', label: 'Company Details' }, { key: 'payment', label: 'Payment Info' }];

    return (
        <div className="min-h-screen bg-linear-to-b from-blue-50 to-indigo-50 flex items-center justify-center p-14">
            <div className="w-full max-w-full">

                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto">
                    {/* Step Indicator */}
                    <div className="px-8 pt-6">
                        <TabSwitcher
                            currentTab={currentStep}
                            onTabChange={setCurrentStep}
                            tabs={steps}
                            disabledTabs={[]}
                        />
                    </div>

                    {/* Form Container with Padding */}
                    <div className="px-8 py-8">
                        {currentStep === 'credentials' && (
                            <BrandCredentialsForm
                                data={formData.credentials}
                                onUpdate={handleCredentialsUpdate}
                                onNext={() => handleNext('company')}
                                onBack={() => window.location.href = '/'}
                            />
                        )}

                        {currentStep === 'company' && (
                            <CompanyDetailsForm
                                data={formData.companyDetails}
                                onUpdate={handleCompanyDetailsUpdate}
                                onNext={() => handleNext('payment')}
                                onBack={() => handleBack('credentials')}
                            />
                        )}

                        {currentStep === 'payment' && (
                            <AddPaymentForm
                                data={formData.payment}
                                onUpdate={handlePaymentUpdate}
                                onSubmit={handleSubmit}
                                onBack={() => handleBack('company')}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}