'use client';

import { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "How does the CPV model work?",
      answer: "You set your cost per 1,000 views. When an influencer's video reaches 1,000 qualified views (≥5 sec watch time), payment is automatically deducted from your balance. This ensures you only pay for genuine engagement."
    },
    {
      question: "Are the views authentic?",
      answer: "Yes! All views are verified through platform APIs. We track watch time, engagement metrics, and filter out bot traffic to ensure 100% authentic views. Our system integrates directly with TikTok, Instagram, YouTube, and Facebook APIs."
    },
    {
      question: "How do I select influencers?",
      answer: "Browse our vetted network of 2,500+ creators filtered by niche, audience demographics, platform, and engagement rates. You can review each creator's portfolio, past performance, and audience insights before making a selection. You approve all content before it goes live."
    },
    {
      question: "What platforms are supported?",
      answer: "We currently support TikTok, Instagram Reels, YouTube Shorts, and Facebook Video. Each platform has its own verification system to ensure view authenticity. More platforms are being added based on user demand."
    },
    {
      question: "How quickly can I launch a campaign?",
      answer: "Most brands launch their first campaign within 24-48 hours. Simply deposit funds, set your CPV rate, select your target audience, choose creators, and approve AI-generated scripts. Our platform handles the rest."
    },
    {
      question: "What's the minimum budget required?",
      answer: "There's no strict minimum, but we recommend starting with at least $1,000 to see meaningful results. This typically translates to 25,000-50,000 views depending on your CPV rate. You can always add more funds later."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <SectionHeading
        tagIcon={HelpCircle}
        tagText="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about BrandFluence"
      />

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex items-center justify-between group"
            >
              <span className="font-semibold text-lg text-slate-900 pr-8">
                {faq.question}
              </span>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                openIndex === index 
                  ? 'bg-cyan-600 text-white rotate-180' 
                  : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
              }`}>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="px-6 pb-6 pt-0">
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">Still have questions?</p>
        <button className="px-8 py-3 border-2 border-cyan-600 text-cyan-600 rounded-full hover:bg-cyan-50 transition-all font-semibold">
          Contact Support
        </button>
      </div>
    </section>
  );
}
