import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata: Metadata = {
  title: {
    default: "kanoon.ai - Your AI Legal Assistant",
    template: "%s | kanoon.ai"
  },
  description: "Law-Specialized LLM Chat for Citizens and Professionals. Get instant legal insights and AI Judge mode for case analysis. Democratizing legal knowledge through advanced AI technology.",
  keywords: "legal AI, legal assistant, law chat, legal advice, contract law, family law, criminal law, AI judge, legal research, legal consultation",
  authors: [{ name: "kanoon.ai Team" }],
  creator: "kanoon.ai",
  publisher: "kanoon.ai",
  metadataBase: new URL('https://kanoon.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kanoon.ai',
    siteName: 'kanoon.ai',
    title: 'kanoon.ai - Your AI Legal Assistant',
    description: 'Law-Specialized LLM Chat for Citizens and Professionals. Get instant legal insights and AI Judge mode for case analysis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'kanoon.ai - AI Legal Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kanoon.ai - Your AI Legal Assistant',
    description: 'Law-Specialized LLM Chat for Citizens and Professionals. Get instant legal insights and AI Judge mode for case analysis.',
    images: ['/og-image.png'],
    creator: '@kanoon_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
