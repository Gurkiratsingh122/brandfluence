'use client';

import { useState } from 'react';
import { Modal, Form, Select } from 'antd';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { StatusModal } from '@/app/components/StatusModal';
import { FormItemConfig } from '@/app/types/formItem';

interface IncreaseBudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
    campaignTitle: string;
    currentBudget: number;
    spentToDate: number;
    remainingBudget: number;
}

export function IncreaseBudgetModal({
    isOpen,
    onClose,
    campaignTitle,
    currentBudget,
    spentToDate,
    remainingBudget,
}: IncreaseBudgetModalProps) {
    const [form] = Form.useForm();
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [additionalFunds, setAdditionalFunds] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [newTotalBudget, setNewTotalBudget] = useState(currentBudget);
    const [currency, setCurrency] = useState('USD');

    const formItems: FormItemConfig[] = [
        {
            name: 'amount',
            label: '',
            type: 'input',
            placeholder: 'Enter amount',
            rules: [
                { required: true, message: 'Amount is required' },
                {
                    pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: 'Please enter a valid amount',
                },
            ],
            colSpan: 2
        },
        {
            name: 'reason',
            label: 'Reason for Increase',
            type: 'textarea',
            placeholder: 'Enter your reason',
            rules: [{ required: true, message: 'Reason is required' }],
            colSpan: 2
        },
    ];

    const handleConfirmIncrease = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            // Auto close after 2 seconds
            setTimeout(() => {
                handleClose();
            }, 2000);
        }, 1500);
    };

    const handleStepOne = async () => {
        try {
            const values = await form.validateFields();
            const addAmount = parseFloat(values.amount);
            const newBudget = currentBudget + addAmount;
            setNewTotalBudget(newBudget);
            setAdditionalFunds(addAmount.toString());
            setStep(2);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleConfirm = () => {
        setStep(3);
        handleConfirmIncrease();
    };

    const handlePrevious = () => {
        setStep(1);
    };

    const handleClose = () => {
        setStep(1);
        setIsSuccess(false);
        setAdditionalFunds('');
        setCurrency('USD');
        form.resetFields();
        onClose();
    };

    // Step 1 - Form
    if (step === 1) {
        return (
            <Modal
                open={isOpen}
                onCancel={handleClose}
                footer={null}
                centered
                closable={false}
                width={600}
            >
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#111] mb-2">Increase Campaign Budget</h2>
                        <p className="text-base text-[#666]">
                            Add more funds to support additional creators or performance pushes.
                        </p>
                    </div>

                    <Form
                        form={form}
                        layout="vertical"
                        requiredMark={false}
                    >
                        {/* Amount Input with Currency */}
                        <Form.Item
                            label="Add Additional Funds"
                        >
                            <div className="flex gap-2">
                                <Select
                                    value={currency}
                                    onChange={setCurrency}
                                    style={{ width: 100, height: 44, borderRadius: '12px' }}
                                    options={[
                                        { label: 'USD', value: 'USD' },
                                        { label: 'EUR', value: 'EUR' },
                                        { label: 'GBP', value: 'GBP' },
                                    ]}
                                />

                                <div className="flex-1">
                                    <FormItemRenderer
                                        items={[formItems[0]]}
                                    />
                                </div>
                            </div>
                        </Form.Item>

                        {/* Reason Textarea */}
                        <FormItemRenderer
                            items={[formItems[1]]}
                        />

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <Button
                                variant="secondary"
                                size="md"
                                onClick={handleClose}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                size="md"
                                onClick={handleStepOne}
                                className="flex-1"
                            >
                                Next
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        );
    }

    // Step 2 - Confirmation
    if (step === 2) {
        return (
            <Modal
                open={isOpen}
                onCancel={handleClose}
                footer={null}
                centered
                closable={false}
                width={600}
            >
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-[#111] mb-2">Confirm Increase</h2>
                        <p className="text-base text-[#666]">
                            Please review the budget increase details below.
                        </p>
                    </div>

                    {/* Budget Info Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="border border-[#d9e2eb] rounded-xl p-4 text-center bg-[#f8f9ff]">
                            <p className="text-xs text-[#999] mb-1">Current Budget</p>
                            <p className="text-lg font-bold text-[#111]">
                                ${currentBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="border border-[#d9e2eb] rounded-xl p-4 text-center bg-[#f8f9ff]">
                            <p className="text-xs text-[#999] mb-1">Spent To Date</p>
                            <p className="text-lg font-bold text-[#111]">
                                ${spentToDate.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                        <div className="border border-[#d9e2eb] rounded-xl p-4 text-center bg-[#f8f9ff]">
                            <p className="text-xs text-[#999] mb-1">Remaining Budget</p>
                            <p className="text-lg font-bold text-[#111]">
                                ${remainingBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-[#111]">
                            <span className="font-semibold">Adding: </span>
                            {currency} {additionalFunds}
                        </p>
                        <p className="text-sm text-[#666] mt-2">
                            <span className="font-semibold">New Total: </span>
                            ${newTotalBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                        <Button
                            variant="secondary"
                            size="md"
                            onClick={handlePrevious}
                            className="flex-1"
                        >
                            Previous
                        </Button>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={handleConfirm}
                            className="flex-1"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processing...' : 'Confirm Increase'}
                        </Button>
                    </div>
                </div>
            </Modal>
        );
    }

    // Step 3 - Success
    if (isSuccess) {
        return (
            <StatusModal
                isOpen={isOpen && isSuccess}
                onClose={handleClose}
                type="success"
                heading="Increase Successful"
                subheading={`Campaign budget increased to $${newTotalBudget.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
            />
        );
    }

    return null;
}
