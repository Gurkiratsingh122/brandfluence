'use client';

import { Modal } from 'antd';
import { Button } from '@/app/components/UI/Button';

interface ActionConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    subHeading: string;
    submitText?: string;
    isLoading?: boolean;
    width?: number;
}

export function ActionConfirmModal({
    isOpen,
    onClose,
    onSubmit,
    title,
    subHeading,
    submitText = 'Confirm',
    isLoading = false,
    width = 520,
}: ActionConfirmModalProps) {
    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            footer={null}
            centered
            closable={false}
            width={width}
        >
            <div className="space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#111] mb-2">{title}</h2>
                    <p className="text-base text-[#666]">{subHeading}</p>
                </div>

                <div className="flex gap-3 pt-4">
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={onClose}
                        className="flex-1"
                        disabled={isLoading}
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={onSubmit}
                        className="flex-1"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Processing...' : submitText}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
