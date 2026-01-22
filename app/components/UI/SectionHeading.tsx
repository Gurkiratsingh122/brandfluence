'use client';

import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  tagIcon: LucideIcon;
  tagText: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  tagIcon: Icon,
  tagText,
  title,
  subtitle,
  titleClassName = "text-4xl md:text-5xl font-bold text-slate-900",
  subtitleClassName = "text-lg text-slate-600 max-w-4xl mx-auto"
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md mb-6 hover:shadow-lg transition-shadow">
        <Icon className="w-5 h-5 text-cyan-600" />
        <span className="text-cyan-600 font-medium">{tagText}</span>
      </div>
      
      <h2 className={titleClassName}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-6 ${subtitleClassName} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
