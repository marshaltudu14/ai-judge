import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kanoon.ai - Your AI Legal Assistant for Everyone",
  description: "Experience the future of legal assistance with kanoon.ai. Get instant legal insights, professional AI Judge mode, and democratized access to legal knowledge. Start chatting now!",
  keywords: "AI legal assistant, legal AI chatbot, online legal help, AI lawyer, legal advice online, contract law AI, family law assistant, criminal law help",
  openGraph: {
    title: "kanoon.ai - Your AI Legal Assistant for Everyone",
    description: "Experience the future of legal assistance with kanoon.ai. Get instant legal insights and democratized access to legal knowledge.",
    url: "https://kanoon.ai",
  },
  alternates: {
    canonical: "/",
  },
};

import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeatureHighlights from '@/components/landing/FeatureHighlights';
import TrustSection from '@/components/landing/TrustSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <TrustSection />
    </>
  );
};

export default LandingPage;