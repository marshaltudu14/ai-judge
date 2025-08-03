import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us - Learn About kanoon.ai",
  description: "Discover how kanoon.ai is democratizing legal knowledge through AI. Meet our team of legal experts and AI innovators working to make legal information accessible to everyone.",
  keywords: "about kanoon.ai, legal AI team, AI legal experts, legal technology innovation, democratizing legal knowledge",
  openGraph: {
    title: "About Us - Learn About kanoon.ai",
    description: "Discover how kanoon.ai is democratizing legal knowledge through AI. Meet our team of legal experts and AI innovators.",
    url: "https://kanoon.ai/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}