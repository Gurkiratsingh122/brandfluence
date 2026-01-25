'use client';

import { useState } from 'react';
import { Form, Checkbox, Modal, Input } from 'antd';
import { FormItemRenderer } from '@/app/components/FormItemRenderer';
import { Button } from '@/app/components/UI/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormItemConfig } from '@/app/types/formItem';

export default function LoginPage() {
  const [form] = Form.useForm();
  const [rememberMe, setRememberMe] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [isResetLoading, setIsResetLoading] = useState(false);
  const router = useRouter();

  const formItems: FormItemConfig[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      rules: [
        { required: true, message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email' },
      ],
      colSpan: 2
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      rules: [
        { required: true, message: 'Password is required' },
        { min: 6, message: 'Password must be at least 6 characters' },
      ],
      colSpan: 2
    },
  ];

  const handleLogin = (values: any) => {
    console.log('Login attempt:', {
      email: values.email,
      password: values.password,
      rememberMe,
    });

    // Store remember me preference
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('userEmail', values.email);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userEmail');
    }

    // Redirect to dashboard
    router.push('/brands/dashboard');
  };

  const handleForgotPassword = () => {
    setIsResetModalOpen(true);
  };

  const handleResetPassword = async () => {
    if (!resetEmail.trim()) {
      Modal.error({
        title: 'Error',
        content: 'Please enter your email address',
      });
      return;
    }

    setIsResetLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsResetLoading(false);
      Modal.success({
        title: 'Success',
        content: 'We have sent a password reset link to your email. Please check your inbox and follow the instructions to reset your password.',
        onOk: () => {
          setIsResetModalOpen(false);
          setResetEmail('');
        },
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f8f9ff] to-[#f0f5ff] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111] mb-2">BrandFluence</h1>
          <p className="text-sm text-[#666]">Welcome back to your dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#e8eaff]">
          <h2 className="text-2xl font-bold text-[#111] mb-6">Login</h2>

          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={handleLogin}
            className="space-y-4"
          >
            <FormItemRenderer items={formItems} />

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              >
                <span className="text-sm text-[#666]">Remember me</span>
              </Checkbox>
            </div>

            {/* Login Button */}
            <Button
              variant="primary"
              size="md"
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </Form>

          {/* Forgot Password & Signup Links */}
          <div className="mt-6 space-y-4">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-[#6c78ff] hover:text-[#5a64dd] font-medium w-full text-center"
            >
              Forgot Password?
            </button>

            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-[#e8eaff]"></div>
              <span className="text-xs text-[#999]">OR</span>
              <div className="flex-1 h-px bg-[#e8eaff]"></div>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#666]">
                Don't have an account?{' '}
                <Link
                  href="/signup/brand"
                  className="text-[#6c78ff] hover:text-[#5a64dd] font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      <Modal
        title="Reset Password"
        open={isResetModalOpen}
        onCancel={() => setIsResetModalOpen(false)}
        footer={null}
        centered
        closable={false}
      >
        <div className="space-y-4">
          <p className="text-sm text-[#666]">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <Input
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            size="large"
            className="rounded-xl! h-11"
          />
          <div className="flex gap-2 mt-6">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsResetModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleResetPassword}
              className="flex-1"
            >
              {isResetLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
