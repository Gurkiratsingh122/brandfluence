'use client';

import { Modal } from 'antd';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from './UI/Button';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const router = useRouter();

    const handleBrandSignup = () => {
        onClose();
        router.push('/signup/brand');
    };

    const handleInfluencerSignup = () => {
        onClose();
        router.push('/signup/influencer');
    };

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            width={600}
            closable={false}
        >
            <div className="space-y-4">
                <h3 className="text-center mb-8 text-xl font-bold">
                    Select your role to get started with BrandFluence
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Brand Signup Option */}
                    <Button
                        variant="secondary"
                        onClick={handleBrandSignup}
                        className="p-6 border-2 border-slate-200 rounded-xl hover:border-cyan-600 hover:bg-cyan-50 transition-all text-left group"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            Sign Up as Brand
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-slate-600">
                            Post campaigns, connect with influencers, and pay per verified views. Perfect for businesses looking to grow their reach.
                        </p>
                    </Button>

                    {/* Influencer Signup Option */}
                    <Button
                        variant='secondary'
                        onClick={handleInfluencerSignup}
                        className="p-6 border-2 border-slate-200 rounded-xl hover:border-cyan-600 hover:bg-cyan-50 transition-all text-left group"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                            Sign Up as Influencer
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-slate-600">
                            Monetize your content, earn from brand collaborations, and join a network of 2,500+ creators worldwide.
                        </p>
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
