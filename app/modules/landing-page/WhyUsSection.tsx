'use client';

import { Users, BarChart3 } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';
import { Card } from '@/app/components/UI/Card';
import { Section } from '@/app/components/UI/Section';

export function WhyUsSection() {
  return (
    <Section id="why-us">
      <SectionHeading
        tagIcon={Users}
        tagText="Why us?"
        title="Why BrandFluence?"
        subtitle="In today's saturated digital landscape, brands throw dollars at ads without knowing who actually sees them. BrandFluence flips the script: you guarantee that every dollar goes toward real, authenticated video views from genuine audiences. Our influencer network—hand-vetted and niche-specialized—creates content that your customers actually watch. No more wasted impressions, wasted clicks, or wasted money."
      />

      <div className="grid lg:grid-cols-2 gap-8">
        {/* CPV Model Card */}
        <Card variant="gradient" className="from-cyan-50 to-teal-50">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Pay Only for Real Views (CPV Model)
          </h3>
          <p className="text-slate-700 mb-8 leading-relaxed">
            You decide how much you'll pay per 1,000 authentic views. Every time an influencer's video racks up
            1,000 qualified views (≥5 sec watch), your balance draws down. No more CPM guesswork—just transparent ROI.
          </p>

          {/* Mock Browser Window */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-linear-to-r from-cyan-600 to-cyan-400 rounded-full w-3/4 animate-pulse"></div>
              <div className="h-3 bg-linear-to-r from-orange-500 to-orange-400 rounded-full w-1/2"></div>
              <div className="h-3 bg-linear-to-r from-cyan-600 to-cyan-400 rounded-full w-5/6 animate-pulse delay-75"></div>
              <div className="h-3 bg-linear-to-r from-orange-500 to-orange-400 rounded-full w-2/3"></div>
            </div>
          </div>
        </Card>

        {/* Dashboard Card */}
        <Card variant="gradient" className="from-orange-50 to-pink-50">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Real-Time Dashboard & Attribution
          </h3>
          <p className="text-slate-700 mb-8 leading-relaxed">
            Watch your campaign performance in real time: authentic view counts, platform breakdowns, audience
            demographics, engagement rates, and CPV vs. budget usage. Data syncs directly from each social API—no delays.
          </p>

          {/* Mock Analytics Card */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-200 shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-sm font-medium text-slate-600">Subscriptions</span>
                <span className="text-sm font-bold text-slate-900">$5,662</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">$12,875</div>
                  <div className="text-sm text-slate-600">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
