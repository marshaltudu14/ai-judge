"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Search,
  HelpCircle,
  MessageSquare,
  Scale,
  Users,
  Shield,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { FAQItem } from '@/types';

const faqData: (FAQItem & { category: string })[] = [
  {
    id: '1',
    question: "What is kanoon.ai?",
    answer: "kanoon.ai is an innovative AI-powered platform that provides specialized legal insights and information. Unlike general AI chatbots, our system is specifically trained on vast legal datasets, enabling it to understand and respond to complex legal queries with precision and contextual awareness.",
    category: "general"
  },
  {
    id: '2',
    question: "How does kanoon.ai differ from general AI chatbots?",
    answer: "kanoon.ai is specifically designed for legal applications. Our AI is trained exclusively on legal documents, case law, statutes, and legal precedents. This specialized training allows us to provide more accurate, relevant, and nuanced responses to legal questions compared to general-purpose AI systems.",
    category: "general"
  },
  {
    id: '3',
    question: "Is the legal information provided by kanoon.ai accurate?",
    answer: "We strive for high accuracy by training our AI on verified legal sources and continuously updating our knowledge base. However, the information provided is for educational and informational purposes only and does not constitute legal advice. Laws vary by jurisdiction and change over time, so always consult with a qualified legal professional for specific legal matters.",
    category: "general"
  },
  {
    id: '4',
    question: "Can I use kanoon.ai for personal legal advice?",
    answer: "kanoon.ai provides general legal information and educational content, but it does not provide personalized legal advice. For specific legal situations, personal legal advice, or representation, you should consult with a licensed attorney who can review your particular circumstances.",
    category: "usage"
  },
  {
    id: '5',
    question: "What is AI Judge Mode?",
    answer: "AI Judge Mode is a specialized feature designed for legal professionals. It provides advanced case analysis tools, precedent research, statute recommendations, and comprehensive legal research capabilities. This mode offers a more sophisticated workspace for complex legal analysis and case preparation.",
    category: "features"
  },
  {
    id: '6',
    question: "How do I start a new chat session?",
    answer: "To start a new chat session, simply click the 'New Chat' button in the sidebar or navigate to the chat page. You can ask questions in natural language, select from suggested legal topics, or use quick question prompts to get started.",
    category: "usage"
  },
  {
    id: '7',
    question: "Is my data and conversation history secure?",
    answer: "Yes, we take data security and privacy very seriously. Your conversations are encrypted, and we follow industry-standard security practices. We do not share your personal information or legal queries with third parties. Your chat history is stored locally on your device for your convenience.",
    category: "privacy"
  },
  {
    id: '8',
    question: "What areas of law does kanoon.ai cover?",
    answer: "kanoon.ai covers a wide range of legal areas including contract law, real estate law, family law, criminal law, intellectual property, employment law, personal injury, constitutional law, and more. Our knowledge base spans multiple jurisdictions and legal systems.",
    category: "features"
  },
  {
    id: '9',
    question: "Can kanoon.ai help with legal document review?",
    answer: "While kanoon.ai can provide general information about legal documents and common clauses, we recommend having important legal documents reviewed by a qualified attorney. Our AI can help you understand general legal concepts and terminology, but professional legal review is essential for important documents.",
    category: "usage"
  },
  {
    id: '10',
    question: "Is kanoon.ai free to use?",
    answer: "kanoon.ai offers both free and premium features. Basic legal information and chat functionality are available for free. Premium features like AI Judge Mode and advanced analysis tools may require a subscription. Check our pricing page for current plans and features.",
    category: "pricing"
  },
  {
    id: '11',
    question: "How often is the legal information updated?",
    answer: "Our legal knowledge base is continuously updated to reflect changes in laws, new court decisions, and legal precedents. We regularly review and update our training data to ensure the information remains current and accurate.",
    category: "general"
  },
  {
    id: '12',
    question: "Can I use kanoon.ai in different jurisdictions?",
    answer: "kanoon.ai has knowledge of legal systems from multiple jurisdictions, including federal and state laws in the United States, as well as international legal principles. However, always verify that the information applies to your specific jurisdiction and consult local legal professionals when needed.",
    category: "features"
  }
];

const categories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'general', name: 'General', icon: BookOpen },
  { id: 'usage', name: 'Using kanoon.ai', icon: MessageSquare },
  { id: 'features', name: 'Features', icon: Scale },
  { id: 'privacy', name: 'Privacy & Security', icon: Shield },
  { id: 'pricing', name: 'Pricing', icon: Users },
];

const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Answers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about kanoon.ai, our features,
              and how to get the most out of our AI legal assistant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {filteredFAQs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <motion.div key={faq.id} variants={itemVariants}>
                    <AccordionItem
                      value={faq.id}
                      className="border rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span className="font-semibold">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-2">
                        <div className="pl-8">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                          <Badge variant="outline" className="mt-3 capitalize">
                            {faq.category}
                          </Badge>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No questions found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our AI assistant is ready to help
              with your specific legal questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat">
                <Button size="lg" className="text-lg px-8 py-6">
                  Ask kanoon.ai
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;