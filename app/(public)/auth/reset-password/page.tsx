'use client';

import { useState } from 'react';
import { Form } from 'antd';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { Button } from '@/app/components/UI/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormItemConfig } from '@/app/types/formItem';

export default function ResetPasswordPage() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const formItems: FormItemConfig[] = [
    {
      name: 'password',
      label: 'New Password',
      type: 'password',
      placeholder: 'Enter your new password',
      rules: [
        { required: true, message: 'Password is required' },
        { min: 8, message: 'Password must be at least 8 characters' },
        {
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          message: 'Password must contain uppercase, lowercase, and numbers',
        },
      ],
      colSpan: 2
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your new password',
      rules: [
        { required: true, message: 'Please confirm your password' },
        {
          validator: (_, value) => {
            const password = form.getFieldValue('password');
            if (value && password && value !== password) {
              return Promise.reject(new Error('Passwords do not match'));
            }
            return Promise.resolve();
          },
        },
      ],
      colSpan: 2,
      dependencies: ['password'],
    },
  ];

  const handleResetPassword = async (values: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      form.resetFields();

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#f8f9ff] to-[#f0f5ff] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8eaff]">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#111] mb-2">Success!</h2>
              <p className="text-sm text-[#666]">
                Your password has been reset successfully. You will be redirected to login page.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f9ff] to-[#f0f5ff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111] mb-2">BrandFluence</h1>
          <p className="text-sm text-[#666]">Create a new password</p>
        </div>

        {/* Reset Password Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8eaff]">
          <h2 className="text-2xl font-bold text-[#111] mb-2">Reset Password</h2>
          <p className="text-sm text-[#666] mb-6">
            Enter a new password for your account. Make sure it's strong and secure.
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleResetPassword}
            className="space-y-4"
            requiredMark={false}
          >
            <FormItemRenderer items={formItems} />

            {/* Reset Button */}
            <Button
              variant="primary"
              size="md"
              type="submit"
              className="w-full"
            >
              {isLoading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
          </Form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#666]">
              Remember your password?{' '}
              <Link
                href="/auth/login"
                className="text-[#6c78ff] hover:text-[#5a64dd] font-medium"
              >
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
