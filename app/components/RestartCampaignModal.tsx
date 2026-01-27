'use client';

import { useState } from 'react';
import { Modal, Form } from 'antd';
import { Button } from '@/app/components/UI/Button';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { FormItemConfig } from '@/app/types/formItem';

interface RestartCampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (startDate: string, endDate: string) => void;
  campaignTitle: string;
}

export function RestartCampaignModal({
  isOpen,
  onClose,
  onSubmit,
  campaignTitle,
}: RestartCampaignModalProps) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const formItems: FormItemConfig[] = [
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'date',
      placeholder: 'Select start date',
      rules: [{ required: true, message: 'Start date is required' }],
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: 'date',
      placeholder: 'Select end date',
      rules: [{ required: true, message: 'End date is required' }],
    },
  ];

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setIsLoading(true);
      onSubmit(values.startDate, values.endDate);
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
      width={520}
    >
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111] mb-2">Restart Campaign</h2>
          <p className="text-base text-[#666]">
            Set a new date range for <span className="font-semibold">{campaignTitle}</span>
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
        >
          <FormItemRenderer items={formItems} gridCols="grid-cols-2" />
        </Form>

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
            {isLoading ? 'Processing...' : 'Restart Campaign'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
