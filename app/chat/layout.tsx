import type { Metadata } from "next";
import Sidebar from "@/components/common/Sidebar";
import ChatHeaderClient from "./ChatHeaderClient";

export const metadata: Metadata = {
  title: "Legal AI Chat - Ask Your Legal Questions",
  description: "Chat with kanoon.ai, your AI legal assistant. Get instant answers to legal questions, access AI Judge mode for professionals, and receive expert legal guidance 24/7.",
  keywords: "legal AI chat, AI legal assistant, legal questions online, AI lawyer chat, legal advice AI, contract law help, family law assistance",
  openGraph: {
    title: "Legal AI Chat - Ask Your Legal Questions | kanoon.ai",
    description: "Chat with kanoon.ai for instant legal assistance and expert guidance on legal matters.",
    url: "https://kanoon.ai/chat",
  },
  alternates: {
    canonical: "/chat",
  },
  robots: {
    index: false, // Don't index chat sessions for privacy
    follow: true,
  },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <ChatHeaderClient />
        <div className="flex-1 min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
}
