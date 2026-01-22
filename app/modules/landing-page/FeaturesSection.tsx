'use client';

import { Users, DollarSign, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Community Collaboration",
      description: "Crowdsource Verified Video Engagement from 2,500+ Influencers",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: DollarSign,
      title: "Pay-Per-View Control",
      description: "You Set the Cost Per 1,000 Views—Only Pay for Real Watches",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "AI Script Generation",
      description: "Auto-Generate Platform-Specific Scripts & Captions—Approve in Seconds",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Agency Integration",
      description: "Onboard via Agencies & Earn 5% Referral Commissions",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="features">
      <SectionHeading
        tagIcon={Zap}
        tagText="Our Features"
        title="Everything You Need to Succeed"
        subtitle="Powerful tools and features designed to maximize your campaign ROI"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
            >
              <div className={`w-14 h-14 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl font-semibold">
          Get Started Free
        </button>
      </div>
    </section>
  );
}
