"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Scale,
  Home,
  Users,
  Shield,
  Building,
  Briefcase,
  Heart,
  Car,
  Gavel
} from 'lucide-react';
import { LegalTopic } from '@/types';

interface TopicSuggestionsProps {
  onSelectTopic: (topic: string) => void;
  isVisible?: boolean;
}

const legalTopics: LegalTopic[] = [
  {
    id: 'contract',
    name: 'Contract Law',
    description: 'Agreements, terms, and legal obligations',
    icon: 'Briefcase'
  },
  {
    id: 'property',
    name: 'Real Estate Law',
    description: 'Property rights, transactions, and disputes',
    icon: 'Home'
  },
  {
    id: 'family',
    name: 'Family Law',
    description: 'Marriage, divorce, custody, and family matters',
    icon: 'Heart'
  },
  {
    id: 'criminal',
    name: 'Criminal Law',
    description: 'Criminal charges, rights, and procedures',
    icon: 'Shield'
  },
  {
    id: 'intellectual',
    name: 'Intellectual Property',
    description: 'Patents, trademarks, and copyrights',
    icon: 'Building'
  },
  {
    id: 'employment',
    name: 'Employment Law',
    description: 'Workplace rights, contracts, and disputes',
    icon: 'Users'
  },
  {
    id: 'personal-injury',
    name: 'Personal Injury',
    description: 'Accidents, liability, and compensation',
    icon: 'Car'
  },
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    description: 'Rights, freedoms, and government powers',
    icon: 'Gavel'
  }
];

const iconMap = {
  Briefcase,
  Home,
  Heart,
  Shield,
  Building,
  Users,
  Car,
  Gavel
};

const TopicSuggestions: React.FC<TopicSuggestionsProps> = ({
  onSelectTopic,
  isVisible = true
}) => {
  if (!isVisible) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const handleTopicSelect = (topic: LegalTopic) => {
    onSelectTopic(`I need help with ${topic.name.toLowerCase()}. ${topic.description}`);
  };

  return (
    <div className="p-6 border-b bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold mb-2">What can I help you with today?</h2>
          <p className="text-muted-foreground">
            Choose a legal topic to get started, or type your own question below
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {legalTopics.map((topic) => {
            const IconComponent = iconMap[topic.icon as keyof typeof iconMap] || Scale;

            return (
              <motion.div key={topic.id} variants={itemVariants}>
                <Card
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
                  onClick={() => handleTopicSelect(topic)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {topic.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-lg font-semibold mb-4 text-center">Quick Questions</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "What are my rights as a tenant?",
              "How do I file for divorce?",
              "Can I sue for personal injury?",
              "What is a power of attorney?",
              "How do I start a business?",
              "What are my employee rights?"
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-sm"
                onClick={() => onSelectTopic(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopicSuggestions;
