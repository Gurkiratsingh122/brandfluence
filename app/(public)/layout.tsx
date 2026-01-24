'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname.startsWith('/signup')) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
