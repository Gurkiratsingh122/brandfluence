'use client';

import { Form, Checkbox } from 'antd';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { InfluencerCredentials } from '@/app/types/signup';
import { influencerCredentialsItems } from '@/app/constants/signup';

interface Props {
    data: InfluencerCredentials;
    onUpdate: (data: InfluencerCredentials) => void;
    onNext: () => void;
}

export function InfluencerCredentialsForm({
    data,
    onUpdate,
    onNext,
}: Props) {
    const [form] = Form.useForm();

    const handleSubmit = (values: InfluencerCredentials) => {
        onUpdate(values);
        onNext();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            initialValues={data}
            onFinish={handleSubmit}
        >
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl font-bold">
                    Become a Paid Influencer in 30 Seconds
                </h1>
                <p className="text-sm text-gray-600">
                    Let’s start by securing your account.
                </p>
            </div>

            <FormItemRenderer items={influencerCredentialsItems} />

            <Form.Item
                name="agreedToTerms"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, v) =>
                            v
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error('You must accept the terms')
                                ),
                    },
                ]}
            >
                <Checkbox>
                    I agree to the Terms of Service and Privacy Policy
                </Checkbox>
            </Form.Item>

            <div className="flex gap-4 pt-6">
                <Button variant="secondary" className="flex-1">
                    Back to Home
                </Button>
                <Button variant="primary" type="submit" className="flex-1">
                    Continue
                </Button>
            </div>
        </Form>
    );
}
