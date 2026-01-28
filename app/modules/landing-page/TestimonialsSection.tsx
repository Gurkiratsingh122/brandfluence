'use client';

import { Briefcase, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/app/components/UI/SectionHeading';
import { Button } from '@/app/components/UI/Button';
import { Card } from '@/app/components/UI/Card';
import { Section } from '@/app/components/UI/Section';

export function TestimonialsSection() {
  const testimonials = [
    {
      company: "EcoWear",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
      title: "300% View Lift in 6 Weeks!",
      description: "EcoWear's sustainable apparel line needed eyeballs—fast. With a $20k CPV campaign at $0.04/1k views, they garnered 500k authentic views and saw a 15% month-over-month sales increase.",
      metric: "+300%",
      metricLabel: "View Increase"
    },
    {
      company: "TechGadgets",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
      title: "2M Views, 40% Lower Cost",
      description: "TechGadgets reduced their customer acquisition cost by 40% while reaching 2M+ qualified viewers. The AI-generated scripts saved them hours of creative work.",
      metric: "40%",
      metricLabel: "Cost Reduction"
    },
    {
      company: "FitLife",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
      title: "500K Authentic Engagements",
      description: "FitLife's wellness products found the perfect audience through niche fitness influencers. Their campaign generated 500k authentic engagements in just 8 weeks.",
      metric: "500K",
      metricLabel: "Engagements"
    }
  ];

  return (
    <Section id="testimonials">
      <SectionHeading
        tagIcon={Briefcase}
        tagText="Top Cases"
        title="Featured Brand Success Stories"
        subtitle="See Why 100+ Brands Have Boosted ROI with BrandFluence"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="group flex flex-col justify-between min-h-95">
            {/* Company Logo */}
            <div className="mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={testimonial.logo || '/landscape_brand.jpg'}
                  alt={testimonial.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {testimonial.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {testimonial.description}
              </p>
            </div>

            {/* Metric & CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <div className="text-3xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                  {testimonial.metric}
                </div>
                <div className="text-sm text-slate-600">{testimonial.metricLabel}</div>
              </div>
              <button className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center group-hover:bg-cyan-700 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="gradient">
          View All Case Studies
        </Button>
      </div>
    </Section>
  );
}
