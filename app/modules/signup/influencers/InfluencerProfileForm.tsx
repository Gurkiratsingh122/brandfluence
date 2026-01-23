'use client';

import { Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { InfluencerProfile } from '@/app/types/signup';
import { influencerProfileItems } from '@/app/constants/signup';

interface Props {
    data: InfluencerProfile;
    onUpdate: (data: InfluencerProfile) => void;
    onNext: () => void;
    onBack: () => void;
}

export function InfluencerProfileForm({
    data,
    onUpdate,
    onNext,
    onBack,
}: Props) {
    const [form] = Form.useForm();

    const handleSubmit = (values: InfluencerProfile) => {
        onUpdate({ ...data, ...values });
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
                <h1 className="text-2xl font-bold">Profile Details</h1>
                <p className="text-sm text-gray-600">
                    Tell brands about your reach and style.
                </p>
            </div>

            <FormItemRenderer items={influencerProfileItems} />

            {/* Uploads kept manual (GOOD decision) */}
            <Form.Item label="Profile Photo (Optional)">
                <Upload maxCount={1}>
                    <Button variant="secondary">
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </Form.Item>

            <Form.Item label="Header Image (Optional)">
                <Upload maxCount={1}>
                    <Button variant="secondary">
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </Form.Item>

            <div className="flex gap-4 pt-6">
                <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={onBack}
                >
                    Back
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    className="flex-1"
                >
                    Continue
                </Button>
            </div>
        </Form>
    );
}
