"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scale, Brain, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for background elements
    if (backgroundRef.current && floatingElementsRef.current) {
      const elements = floatingElementsRef.current.children;

      gsap.set(elements, {
        opacity: 0.1,
        scale: 0.5,
      });

      gsap.to(elements, {
        opacity: 0.3,
        scale: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
      });

      // Floating animation
      gsap.to(elements, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <div ref={floatingElementsRef} className="absolute inset-0">
          <Scale className="absolute top-1/4 left-1/4 w-16 h-16 text-primary/20" />
          <Brain className="absolute top-1/3 right-1/4 w-20 h-20 text-primary/20" />
          <Users className="absolute bottom-1/3 left-1/3 w-12 h-12 text-primary/20" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-primary/10" />
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-accent/20" />
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Scale className="w-4 h-4 mr-2" />
            AI-Powered Legal Intelligence
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Your AI Legal Assistant for{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Every Question
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Law-Specialized LLM Chat for Citizens and Professionals
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          kanoon.ai offers instant, simplified answers to legal questions for citizens,
          and powerful &apos;AI Judge&apos; mode for legal professionals to rapidly assess cases
          and suggest pertinent legal statutes.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/chat">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Start Chatting Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;