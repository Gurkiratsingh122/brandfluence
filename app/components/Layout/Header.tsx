'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/app/constants/navigation';
import Link from 'next/link';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-white/90">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-slate-900">
                        Brand<span className="text-cyan-600">Fluence</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 text-sm text-slate-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-cyan-600 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button className="px-6 py-2 text-cyan-600 border-2 border-cyan-600 rounded-full hover:bg-cyan-50 transition-all font-medium">
                            Log In
                        </button>
                        <button className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/30 font-medium">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block text-slate-700 hover:text-cyan-600 transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-3 pt-4">
                            <button className="px-6 py-2 text-cyan-600 border-2 border-cyan-600 rounded-full hover:bg-cyan-50 transition-all font-medium">
                                Log In
                            </button>
                            <button className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/30 font-medium">
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
