import type { Metadata } from "next";
import HowItWorksClient from "./how-it-works-client";

export const metadata: Metadata = {
  title: "How It Works - AI Legal Assistant Process",
  description: "Discover how kanoon.ai transforms complex legal research into instant, accessible insights. Learn about our 4-step AI-powered legal assistance process and features.",
  keywords: "how kanoon.ai works, AI legal process, legal AI workflow, AI legal research, legal chatbot process, AI judge features",
  openGraph: {
    title: "How It Works - AI Legal Assistant Process | kanoon.ai",
    description: "Discover how kanoon.ai transforms complex legal research into instant, accessible insights using AI.",
    url: "https://kanoon.ai/how-it-works",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksClient />;
}