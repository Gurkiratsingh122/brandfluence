'use client';

import { useState } from 'react';
import { Modal, Form, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { FormItemConfig } from '@/app/types/formItem';

interface RequestRevisionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
    creatorName: string;
}

const REVISION_REASONS = [
    { label: 'Tone issue', value: 'tone-issue' },
    { label: 'Branding off', value: 'branding-off' },
    { label: 'CTA missing', value: 'cta-missing' },
    { label: 'Not following script', value: 'not-following-script' },
    { label: 'Other', value: 'other' },
];

export function RequestRevisionModal({
    isOpen,
    onClose,
    onSubmit,
    creatorName,
}: RequestRevisionModalProps) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const formItems: FormItemConfig[] = [
        {
            name: 'contentPiece',
            label: 'Content Piece',
            type: 'select',
            placeholder: 'Select content',
            options: [
                { label: 'Video 1', value: 'video-1' },
                { label: 'Video 2', value: 'video-2' },
                { label: 'Story 1', value: 'story-1' },
            ],
            rules: [{ required: true, message: 'Content piece is required' }],
            colSpan: 2,
        },
        {
            name: 'detailedFeedback',
            label: 'Detailed Feedback',
            type: 'textarea',
            placeholder: 'Enter your feedback',
            rules: [
                { required: true, message: 'Feedback is required' },
                { min: 10, message: 'Feedback must be at least 10 characters' },
            ],
            colSpan: 2,
        },
    ];

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            const reason = values.revisionReason || REVISION_REASONS[0].value;
            setIsLoading(true);
            onSubmit({ ...values, revisionReason: reason });
            setTimeout(() => {
                setIsLoading(false);
                handleClose();
            }, 500);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleClose = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            open={isOpen}
            onCancel={handleClose}
            footer={null}
            centered
            closable={false}
            width={650}
        >
            <div className="space-y-6 py-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#111] mb-2">
                        Request Revisions from {creatorName}
                    </h2>
                </div>

                <Form form={form} layout="vertical" requiredMark={false}>
                    <FormItemRenderer items={formItems} gridCols="grid-cols-1" />

                    {/* Reason for Revision */}
                    <Form.Item
                        label="Reason for Revision"
                        required
                        className="mb-6"
                    >
                        <div className="flex flex-wrap gap-3">
                            {REVISION_REASONS.map((reason) => (
                                <Form.Item
                                    key={reason.value}
                                    name="revisionReason"
                                    valuePropName="checked"
                                    className="mb-0"
                                    initialValue={REVISION_REASONS[0].value}
                                >
                                    <label className="flex items-center gap-2 px-4 py-2 border border-[#d9e2eb] rounded-full cursor-pointer hover:border-[#6c78ff] transition-colors has-checked:border-[#6c78ff] has-checked:bg-[#f0f1ff]">
                                        <input
                                            type="radio"
                                            name="revisionReason"
                                            value={reason.value}
                                            defaultChecked={reason.value === REVISION_REASONS[0].value}
                                            onChange={(e) => form.setFieldValue('revisionReason', e.target.value)}
                                        />
                                        <span className="text-sm font-medium text-[#111]">{reason.label}</span>
                                    </label>
                                </Form.Item>
                            ))}
                        </div>
                    </Form.Item>

                    {/* File Upload */}
                    <Form.Item
                        label="Attach Example"
                        name="attachments"
                        required
                        rules={[{ required: true, message: 'Please attach at least one file' }]}
                    >
                        <Upload.Dragger
                            name="files"
                            multiple
                            accept=".pdf,.jpg,.png,.jpeg,.mp4"
                            beforeUpload={() => false}
                            className="rounded-xl"
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined className="text-4xl text-blue-600" />
                            </p>
                            <p className="ant-upload-text text-base font-medium">Drag and drop your files here</p>
                            <p className="ant-upload-hint text-sm">file upload, PDF/JPG/PNG, max 5 MB</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                    <Button
                        variant="secondary"
                        size="md"
                        onClick={handleClose}
                        className="flex-1"
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        size="md"
                        onClick={handleSubmit}
                        className="flex-1"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Request'}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
