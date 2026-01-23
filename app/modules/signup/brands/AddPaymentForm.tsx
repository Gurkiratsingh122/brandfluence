'use client';

import { Form, Input, Checkbox } from 'antd';
import { PaymentDetails } from '@/app/types/signup';
import { PAYMENT_INFO } from '@/app/constants/signup';
import { Button } from '@/app/components/UI/Button';

interface AddPaymentFormProps {
    data: PaymentDetails;
    onUpdate: (data: PaymentDetails) => void;
    onSubmit: () => void;
    onBack: () => void;
}

export function AddPaymentForm({ data, onUpdate, onSubmit, onBack }: AddPaymentFormProps) {
    const [form] = Form.useForm();

    const handleSubmit = async (values: PaymentDetails) => {
        onUpdate(values);
        onSubmit();
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Add Payment Method & Free Credits
                </h1>
                <p className="text-sm text-gray-600">
                    {PAYMENT_INFO[0]} {PAYMENT_INFO[1]}
                </p>
            </div>

            {/* Form */}
            <Form
                requiredMark={false}
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    cardNumber: data.cardNumber,
                    nameOnCard: data.nameOnCard,
                    expiryMonth: data.expiryMonth,
                    expiryYear: data.expiryYear,
                    cvv: data.cvv,
                    zipCode: data.zipCode,
                    subscribeToEmails: data.subscribeToEmails,
                }}
                className="space-y-5"
            >
                <Form.Item
                    name="cardNumber"
                    label="Credit Card Number"
                    rules={[
                        { required: true, message: 'Card number is required' },
                        { min: 13, message: 'Invalid card number' }
                    ]}
                >
                    <Input
                        placeholder="Write your card number"
                        size="large"
                        maxLength={19}
                    />
                </Form.Item>

                <Form.Item
                    name="nameOnCard"
                    label="Name on Card"
                    rules={[{ required: true, message: 'Name on card is required' }]}
                >
                    <Input
                        placeholder="Write your name"
                        size="large"
                    />
                </Form.Item>

                <div className="flex gap-3">
                    <Form.Item
                        name="expiryMonth"
                        label="Expiration Month"
                        rules={[{ required: true, message: 'Month is required' }]}
                        className="flex-1"
                    >
                        <Input
                            placeholder="MM"
                            size="large"
                            maxLength={2}
                        />
                    </Form.Item>
                    <Form.Item
                        name="expiryYear"
                        label="Expiration Year"
                        rules={[{ required: true, message: 'Year is required' }]}
                        className="flex-1"
                    >
                        <Input
                            placeholder="YY"
                            size="large"
                            maxLength={2}
                        />
                    </Form.Item>
                </div>

                <div className="flex gap-3">
                    <Form.Item
                        name="cvv"
                        label="CVC/CVV"
                        rules={[{ required: true, message: 'CVV is required' }]}
                        className="flex-1"
                    >
                        <Input
                            placeholder="Write the code"
                            size="large"
                            maxLength={4}
                            type="password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="zipCode"
                        label="Billing ZIP/Postal Code"
                        rules={[{ required: true, message: 'ZIP code is required' }]}
                        className="flex-1"
                    >
                        <Input
                            placeholder="Write the code"
                            size="large"
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    name="subscribeToEmails"
                    valuePropName="checked"
                >
                    <Checkbox>
                        Subscribe to promotional emails & industry updates.
                    </Checkbox>
                </Form.Item>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-4 pt-4">
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={onBack}
                        className="flex-1"
                    >
                        Back
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        className="flex-1"
                    >
                        Create Account
                    </Button>
                </div>
            </Form>
        </div >
    );
}
