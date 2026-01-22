'use client';

import { Home, Play } from 'lucide-react';
import { Button } from '@/app/components/UI/Button';
import { GradientText } from '@/app/components/UI/GradientText';
import { StatCard } from '@/app/components/UI/StatCard';

export function HeroSection() {
  const stats = [
    { value: '2,500+', label: 'Influencers' },
    { value: '5M+', label: 'Views Delivered' },
    { value: '98%', label: 'Authentic Rate' },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-8 hover:shadow-xl transition-shadow">
          <Home className="w-5 h-5 text-cyan-600" />
          <span className="text-cyan-600 font-semibold">Welcome to BrandFluence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
          Pay Only for Real,
          <br />
          <GradientText animate>
            Verified Video Views
          </GradientText>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect with 2,500+ niche influencers, auto-generate platform-specific content,
          and pay per 1,000 authenticated views. No wasted ad spend—just real engagement.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Button variant="gradient">
            Get Started Free
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <Button variant="secondary">
            <Play className="w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
