"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

import { 
  Star, 
  Users, 
  BookOpen, 
  Shield, 
  Award,
  CheckCircle 
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Legal Professionals",
    description: "Trust our platform daily"
  },
  {
    icon: BookOpen,
    value: "1M+",
    label: "Legal Documents",
    description: "In our training database"
  },
  {
    icon: CheckCircle,
    value: "99.9%",
    label: "Accuracy Rate",
    description: "In legal information retrieval"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Privacy Protected",
    description: "Your data stays secure"
  }
];

const testimonials = [
  {
    quote: "kanoon.ai has revolutionized how I approach legal research. The AI Judge mode saves me hours of case analysis.&quot;",
    author: "Sarah Johnson",
    role: "Senior Partner, Johnson & Associates",
    rating: 5
  },
  {
    quote: "As a citizen, I finally have access to reliable legal information without the intimidation factor. Highly recommended!&quot;",
    author: "Michael Chen",
    role: "Small Business Owner",
    rating: 5
  },
  {
    quote: "The accuracy and depth of legal insights provided by kanoon.ai is impressive. It's become an essential tool in our practice.",
    author: "Dr. Priya Sharma",
    role: "Legal Consultant",
    rating: 5
  }
];

const TrustSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by Legal Professionals Worldwide
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built on{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Trust & Excellence
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What Our Users Say
          </h3>
          <p className="text-lg text-muted-foreground">
            Real feedback from legal professionals and citizens who trust kanoon.ai
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
