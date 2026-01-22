'use client';

import { DollarSign, Target, Lightbulb, BarChart3, Rocket } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: DollarSign,
      title: "Fund Your Campaign",
      description: "Deposit funds and set your CPV rate. Only pay for verified views.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      number: "02",
      icon: Target,
      title: "Define Your Campaign Goals",
      description: "Choose your target audience, platforms, and engagement metrics.",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Select Creators & Approve Videos",
      description: "Browse vetted creators and approve AI-generated content scripts.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Monitor Performance & Auto-Payouts",
      description: "Track real-time analytics. Payouts happen automatically per milestone.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="max-w-300 mx-auto px-8 my-20">
      <div className="bg-linear-to-br from-cyan-600 via-teal-500 to-cyan-600 rounded-[40px] px-8 py-20 shadow-2xl">
        <SectionHeading
          tagIcon={Rocket}
          tagText="How it works"
          title="Get Started in Minutes"
          subtitle="Launch your first campaign in just four simple steps"
          titleClassName="text-4xl md:text-5xl font-bold text-white"
          subtitleClassName="text-cyan-50 text-lg max-w-2xl mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 bg-linear-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-5xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-white text-cyan-600 rounded-full hover:shadow-2xl transition-all font-semibold text-lg flex items-center gap-2 mx-auto">
            Get Started Free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
