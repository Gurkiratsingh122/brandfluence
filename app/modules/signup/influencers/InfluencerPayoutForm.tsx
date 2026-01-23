'use client';

import { Form } from 'antd';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { InfluencerPayout } from '@/app/types/signup';
import { influencerPayoutItems } from '@/app/constants/signup';

interface Props {
    data: InfluencerPayout;
    onUpdate: (data: InfluencerPayout) => void;
    onBack: () => void;
    onSubmit: () => void;
}

export function InfluencerPayoutForm({
    data,
    onUpdate,
    onBack,
    onSubmit,
}: Props) {
    const [form] = Form.useForm();

    const handleFinish = (values: InfluencerPayout) => {
        onUpdate(values);
        onSubmit();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            initialValues={data}
            onFinish={handleFinish}
        >
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl font-bold">Payout Setup</h1>
                <p className="text-sm text-gray-600">
                    Set up how you’ll get paid.
                </p>
            </div>

            <FormItemRenderer items={influencerPayoutItems} />

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
                    Finish
                </Button>
            </div>
        </Form>
    );
}
