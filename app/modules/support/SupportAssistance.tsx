'use client';

import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Form } from 'antd';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { Button } from '@/app/components/UI/Button';
import { FormItemConfig } from '@/app/types/formItem';

type SupportTopic = 'campaign' | 'payment' | 'account' | 'refund';

export function SupportAssistance() {
  const [form] = Form.useForm();
  const [selectedTopics, setSelectedTopics] = useState<SupportTopic[]>([]);

  const formItems: FormItemConfig[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'input',
      placeholder: 'Enter name',
      rules: [{ required: true, message: 'Name is required' }],
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter email',
      rules: [
        { required: true, message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email' },
      ],
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message',
      rules: [{ required: true, message: 'Message is required' }],
      colSpan: 2,
    },
        {
      name: 'topic',
      label: 'Topic',
      type: 'input',
      placeholder: 'Enter your topic',
      rules: [{ required: false }],
      colSpan: 2,
      itemClassname: "mb-1!"
    },
  ];

  const handleTopicClick = (topic: SupportTopic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = (values: any) => {
    console.log('Support form submitted:', values);
    console.log('Selected topics:', selectedTopics);
    alert('Message sent successfully!');
  };

  return (
    <div className="p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-[#111] mb-3 leading-[1.1]">
          Support & Assistance
        </h1>
        <p className="text-[16px] text-[#3b4858] leading-[1.5]">
          Need help with your campaigns, payments, or creator partnerships? We're here to support you.
        </p>
      </div>

      {/* Contact Us Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0px_2px_13px_0px_rgba(96,99,117,0.15)] mb-6">
        <h2 className="text-[20px] font-bold text-[#111] mb-6 leading-[1.1]">
          Contact Us
        </h2>

        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#6c78ff]" />
            <span className="text-[16px] font-medium text-[#111]">
              123 Market St, San Francisco, CA 94103
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-[#6c78ff]" />
            <span className="text-[16px] font-medium text-[#111]">
              support@brandfluence.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-6 h-6 text-[#6c78ff]" />
            <span className="text-[16px] font-medium text-[#111]">
              sales@brandfluence.com
            </span>
          </div>
        </div>
      </div>

      {/* Support Form Card */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0px_2px_13px_0px_rgba(96,99,117,0.15)]">
        <h2 className="text-[20px] font-bold text-[#111] mb-8 leading-[1.1]">
          How can we help you?
        </h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mb-6"
          requiredMark={false}
        >
          <FormItemRenderer items={formItems} />

          {/* Common Support Topics */}
          <div className="mb-8">
            <p className="text-[#494b51] text-[14px] mb-3">
              or choose common support topics
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleTopicClick('campaign')}
                className={`h-[52px] rounded-xl text-[14px] cursor-pointer transition-all ${selectedTopics.includes('campaign')
                    ? 'bg-[#dde1fa] border border-[#6c78ff] font-medium'
                    : 'bg-white border border-[#d9e2eb] font-normal'
                  } text-[#111]`}
              >
                Campaign issues
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('payment')}
                className={`h-[52px] rounded-xl text-[14px] cursor-pointer transition-all ${selectedTopics.includes('payment')
                    ? 'bg-[#dde1fa] border border-[#6c78ff] font-medium'
                    : 'bg-white border border-[#d9e2eb] font-normal'
                  } text-[#111]`}
              >
                Payment troubleshooting
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('account')}
                className={`h-[52px] rounded-xl text-[14px] cursor-pointer transition-all ${selectedTopics.includes('account')
                    ? 'bg-[#dde1fa] border border-[#6c78ff] font-medium'
                    : 'bg-white border border-[#d9e2eb] font-normal'
                  } text-[#111]`}
              >
                Account login or email update help
              </button>
              <button
                type="button"
                onClick={() => handleTopicClick('refund')}
                className={`h-[52px] rounded-xl text-[14px] cursor-pointer transition-all ${selectedTopics.includes('refund')
                    ? 'bg-[#dde1fa] border border-[#6c78ff] font-medium'
                    : 'bg-white border border-[#d9e2eb] font-normal'
                  } text-[#111]`}
              >
                Requesting a refund or credit adjustment
              </button>
            </div>
          </div>

          {/* Submit Button - Right Aligned */}
          <div className="flex justify-end">
            <Button
              variant="primary"
              size="md"
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}