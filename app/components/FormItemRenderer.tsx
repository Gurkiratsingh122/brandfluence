'use client';

import { Form, Input, Checkbox, Select } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormItemConfig } from '@/app/types/formItem';

interface FormItemRendererProps {
    items: FormItemConfig[];
}

export function FormItemRenderer({ items }: FormItemRendererProps) {
    const form = Form.useFormInstance();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {items.map((item) => {
                const colSpanClass =
                    item.colSpan === 2 ? 'md:col-span-2' : '';

                return (
                    <div key={item.name} className={colSpanClass}>
                        <Form.Item
                            name={item.name}
                            className={item.itemClassname}
                            label={
                                item.type !== 'checkbox' && item.label ? (
                                    <span className="font-normal text-gray-700">
                                        {item.label}
                                    </span>
                                ) : undefined
                            }
                            rules={item.rules}
                            dependencies={item.dependencies}
                            valuePropName={
                                item.type === 'checkbox' ? 'checked' : undefined
                            }
                        >
                            {renderField(item, form)}
                        </Form.Item>

                        {item.helperText && (
                            <p className="text-xs text-gray-500 mt-1 mb-3">
                                {item.helperText}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function renderField(item: FormItemConfig, form: any) {
    const baseClass = 'rounded-xl! h-11! text-lg!';

    switch (item.type) {
        case 'input':
            return (
                <Input
                    size="large"
                    placeholder={item.placeholder}
                    className={baseClass}
                />
            );

        case "textarea":
            return (
                <Input.TextArea
                    size="large"
                    placeholder={item.placeholder}
                    className={baseClass + " resize-none!"}
                    rows={4}
                />
            );

        case 'email':
            return (
                <Input
                    size="large"
                    type="email"
                    placeholder={item.placeholder}
                    className={baseClass}
                />
            );

        case 'password':
            return (
                <Input.Password
                    size="large"
                    placeholder={item.placeholder}
                    className={baseClass}
                />
            );

        case 'select':
            return (
                <Select
                    size="large"
                    placeholder={item.placeholder}
                    options={item.options}
                    className={baseClass}
                />
            );

        case 'checkbox':
            return <Checkbox>{item.label}</Checkbox>;

        case 'phone':
            return (
                <PhoneInput
                    inputStyle={{
                        width: "calc(100% - 60px)",
                        height: "44px",
                        borderRadius: "12px",
                        border: "1px solid #d9d9d9",
                        fontSize: "16px",
                        marginLeft: "60px",
                    }}
                    inputClass="w-full"
                    enableSearch={true}
                    containerClass="w-full"
                    country={item.phoneProps?.country || 'us'}
                    value={form.getFieldValue(item.name)}
                    onChange={(phone: string) =>
                        form.setFieldValue(item.name, phone)
                    }
                    dropdownStyle={{
                        zIndex: 999
                    }}
                />
            );

        default:
            return null;
    }
}
