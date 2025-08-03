"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();
  
  // Chat pages use their own layout with sidebar and custom header
  const isChatPage = pathname.startsWith('/chat');
  
  if (isChatPage) {
    return (
      <div className="h-screen overflow-hidden">
        {children}
      </div>
    );
  }
  
  // Regular pages with header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
