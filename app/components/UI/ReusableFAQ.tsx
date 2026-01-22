'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';

interface FAQItem {
    question: string;
    answer: string;
}

interface ReusableFAQProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
    defaultOpenIndex?: number;
    primaryColor?: string;
    contactCTA?: {
        enabled: boolean;
        title?: string;
        description?: string;
        buttonText?: string;
    };
}

export function ReusableFAQ({
    faqs,
    title = 'Frequently Asked Questions',
    subtitle = 'Everything you need to know',
    defaultOpenIndex = 0,
    primaryColor = 'from-[#6c78ff] to-[#5566ee]',
    contactCTA = { enabled: true, title: 'Still have questions?', description: 'Our team is here to help', buttonText: 'Contact Support' }
}: ReusableFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
            <div className="max-w-3xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-15">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border-2 border-blue-100 overflow-hidden transition-all hover:border-blue-600"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-7 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-5 group-hover:text-blue-600 transition-colors">
                                    {faq.question}
                                </span>
                                <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-all">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-blue-600 group-hover:text-white" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-blue-600 group-hover:text-white" />
                                    )}
                                </div>
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-7 pb-6 pt-2">
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                {contactCTA.enabled && (
                    <div className="mt-15 text-center bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl px-10 py-10 border border-blue-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {contactCTA.title}
                        </h3>
                        <p className="text-base text-gray-600 mb-6">
                            {contactCTA.description}
                        </p>
                        <Button variant="primary">
                            {contactCTA.buttonText}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
