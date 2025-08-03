"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Brain, 
  Users, 
  Scale, 
  BookOpen, 
  Shield 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Legal Insights",
    description: "Get immediate answers to your legal questions without lengthy research or waiting for appointments.",
    badge: "Fast",
    color: "text-yellow-500",
  },
  {
    icon: Brain,
    title: "AI Judge Mode",
    description: "Advanced case analysis tools for legal professionals with precedent suggestions and statute recommendations.",
    badge: "Professional",
    color: "text-purple-500",
  },
  {
    icon: BookOpen,
    title: "Global Law Knowledge",
    description: "Access to comprehensive legal databases spanning multiple jurisdictions and areas of law.",
    badge: "Comprehensive",
    color: "text-blue-500",
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Designed for both citizens seeking legal guidance and professionals requiring advanced analysis tools.",
    badge: "Accessible",
    color: "text-green-500",
  },
  {
    icon: Shield,
    title: "Reliable & Accurate",
    description: "Built on extensive legal datasets with continuous updates to ensure accuracy and relevance.",
    badge: "Trusted",
    color: "text-red-500",
  },
  {
    icon: Scale,
    title: "Ethical AI",
    description: "Committed to responsible AI practices with transparent limitations and ethical guidelines.",
    badge: "Responsible",
    color: "text-indigo-500",
  },
];

const FeatureHighlights: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              kanoon.ai
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of legal assistance with our cutting-edge AI technology
            designed specifically for legal professionals and citizens alike.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 relative">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="absolute -top-2 -right-2 text-xs"
                      >
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
