'use client';

import { Header } from "./components/Header";
import { HeroSection } from './modules/landing-page/HeroSection';
import { FeaturesSection } from './modules/landing-page/FeaturesSection';
import { WhyUsSection } from './modules/landing-page/WhyUsSection';
import { HowItWorksSection } from './modules/landing-page/HowItWorksSection';
import { TestimonialsSection } from './modules/landing-page/TestimonialsSection';
import { PricingSection } from './modules/landing-page/PricingSection';
import { FAQSection } from './components/Faq';
import { Footer } from './components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-cyan-50">
      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with CTA */}
        <HeroSection />
        
        {/* Features Overview */}
        <FeaturesSection />
        
        {/* Value Proposition */}
        <WhyUsSection />
        
        {/* How It Works Process */}
        <HowItWorksSection />
        
        {/* Social Proof - Success Stories */}
        <TestimonialsSection />
        
        {/* Pricing Information */}
        <PricingSection />
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
