import type { Metadata } from "next";
import FaqClient from "./faq-client";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about kanoon.ai, our features, pricing, and how to get the most out of our AI legal assistant. Get help with legal AI queries.",
  keywords: "kanoon.ai FAQ, legal AI questions, AI legal assistant help, legal chatbot questions, AI judge mode, legal AI features",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | kanoon.ai",
    description: "Find answers to common questions about kanoon.ai and our AI legal assistant features.",
    url: "https://kanoon.ai/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FaqClient />;
}