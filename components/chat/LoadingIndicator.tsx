"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Scale, Brain, Zap } from 'lucide-react';

interface LoadingIndicatorProps {
  message?: string;
  variant?: 'dots' | 'thinking' | 'processing';
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = "kanoon.ai is thinking...",
  variant = 'thinking'
}) => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  if (variant === 'dots') {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex justify-center py-4"
      >
        <div className="flex space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    );
  }

  if (variant === 'processing') {
    return (
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex justify-center py-4"
      >
        <Card className="bg-muted">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="w-5 h-5 text-primary" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Processing your request</span>
                <span className="text-xs text-muted-foreground">Analyzing legal context...</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  // Default 'thinking' variant
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex justify-start max-w-4xl mx-auto px-4"
    >
      <div className="flex gap-3 max-w-[80%]">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarFallback className="bg-secondary text-secondary-foreground">
            <Scale className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>

        <Card className="bg-muted">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              {/* Animated thinking dots */}
              <div className="flex space-x-1">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Message */}
              <span className="text-sm text-muted-foreground">{message}</span>

              {/* Animated icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-4 h-4 text-primary" />
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 w-full bg-secondary rounded-full h-1">
              <motion.div
                className="bg-primary h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default LoadingIndicator;
