'use client';

import { Modal } from 'antd';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  heading: string;
  subheading: string;
  width?: number;
}

export function StatusModal({
  isOpen,
  onClose,
  type,
  heading,
  subheading,
  width = 500,
}: StatusModalProps) {
  const isSuccess = type === 'success';
  const bgColor = isSuccess ? 'bg-green-100' : 'bg-red-100';
  const iconColor = isSuccess ? 'text-green-600' : 'text-red-600';

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closable={false}
      width={width}
    >
      <div className="text-center py-8">
        <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          {isSuccess ? (
            <svg
              className={`w-10 h-10 ${iconColor}`}
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
          ) : (
            <svg
              className={`w-10 h-10 ${iconColor}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-bold text-[#111] mb-2">{heading}</h2>
        <p className="text-base text-[#666]">{subheading}</p>
      </div>
    </Modal>
  );
}
