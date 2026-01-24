'use client';

import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { footerLinks } from '@/app/constants/navigation';

export function Footer() {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-4">
                            Brand<span className="text-cyan-400">Fluence</span>
                        </h3>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Authentic video views from real influencers. Pay only for verified engagement and real results.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-slate-800 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400! hover:text-cyan-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Brands Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">For Brands</h4>
                        <ul className="space-y-3">
                            {footerLinks.forBrands.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                                        style={{ color: '#94a3b8' } as any}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Influencers Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">For Influencers</h4>
                        <ul className="space-y-3">
                            {footerLinks.forInfluencers.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                                        style={{ color: '#94a3b8' } as any}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                                        style={{ color: '#94a3b8' } as any}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-slate-700 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
                        <p className="text-slate-400 mb-4">Get the latest news and insights delivered to your inbox</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none text-white placeholder-slate-500"
                            />
                            <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full font-semibold transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
                    <p>&copy; 2026 BrandFluence. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-cyan-400 transition-colors" style={{ color: '#94a3b8' } as any}>Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors" style={{ color: '#94a3b8' } as any}>Terms</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors" style={{ color: '#94a3b8' } as any}>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
