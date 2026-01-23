'use client';

import { Form } from 'antd';
import { CompanyDetails } from '@/app/types/signup';
import { COMPANY_DETAILS_INFO } from '@/app/constants/signup';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { companyDetailsFormItems } from '@/app/constants/signup';

interface CompanyDetailsFormProps {
    data: CompanyDetails;
    onUpdate: (data: CompanyDetails) => void;
    onNext: () => void;
    onBack: () => void;
}

export function CompanyDetailsForm({
    data,
    onUpdate,
    onNext,
    onBack,
}: CompanyDetailsFormProps) {
    const [form] = Form.useForm();

    const handleSubmit = (values: CompanyDetails) => {
        onUpdate({ ...data, ...values });
        onNext();
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Company Details
                </h1>
                <p className="text-sm text-gray-600">
                    {COMPANY_DETAILS_INFO.join('. ')}.
                </p>
            </div>

            <Form
                form={form}
                layout="vertical"
                requiredMark={false}
                initialValues={{
                    ...data, businessType: data.businessType || undefined,
                    industry: data.industry || undefined
                }}
                onFinish={handleSubmit}
            >
                <FormItemRenderer items={companyDetailsFormItems} />

                {/* Buttons */}
                <div className="flex items-center justify-between gap-4 pt-6">
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
                        Continue
                    </Button>
                </div>
            </Form>
        </div >
    );
}
