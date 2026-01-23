'use client';

import { Form, Input, Checkbox } from 'antd';
import { BrandCredentials } from '@/app/types/signup';
import { brandCredentialsFormItems, SIGNUP_BENEFITS } from '@/app/constants/signup';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';

interface BrandCredentialsFormProps {
    data: BrandCredentials;
    onUpdate: (data: BrandCredentials) => void;
    onNext: () => void;
    onBack?: () => void;
}

export function BrandCredentialsForm({ data, onUpdate, onNext, onBack }: BrandCredentialsFormProps) {
    const [form] = Form.useForm();

    const handleSubmit = async (values: BrandCredentials) => {
        onUpdate(values);
        onNext();
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Create Your Brand Account in 30 Seconds
                </h1>
                <p className="text-sm text-gray-600">
                    {SIGNUP_BENEFITS.join('. ')}.
                </p>
            </div>

            {/* Form */}
            <Form
                requiredMark={false}
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={data}
            >
                <FormItemRenderer items={brandCredentialsFormItems} />

                {/* Terms */}
                <Form.Item
                    name="agreedToTerms"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('You must agree to the terms')),
                        },
                    ]}
                >
                    <Checkbox>
                        I agree to the Terms of Service and Privacy Policy
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
                        Back to Home
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        className="flex-1"
                    >
                        Continue
                    </Button>
                </div>
            </Form>
        </div>
    );
}
