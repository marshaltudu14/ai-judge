"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Paperclip, Mic } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading = false,
  disabled = false
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSendMessage = () => {
    if (message.trim() && !isLoading && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const canSend = message.trim().length > 0 && !isLoading && !disabled;

  

  return (
    <div className="border-t bg-background p-3 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end space-x-2">
          {/* Attachment Button - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="mb-2 flex-shrink-0 hidden sm:flex"
            disabled={disabled}
            title="Attach file"
          >
            <Paperclip className="h-4 w-4" />
          </Button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <Textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your legal question here..."
              className="min-h-[50px] sm:min-h-[60px] max-h-[150px] sm:max-h-[200px] resize-none pr-12 py-3 text-sm sm:text-base"
              disabled={disabled}
              rows={1}
            />

            {/* Character count indicator */}
            {message.length > 0 && (
              <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-1 rounded">
                {message.length}
              </div>
            )}
          </div>

          {/* Voice Input Button - Hidden on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="mb-2 flex-shrink-0 hidden sm:flex"
            disabled={disabled}
            title="Voice input"
          >
            <Mic className="h-4 w-4" />
          </Button>

          {/* Send Button */}
          <motion.div
            whileHover={canSend ? { scale: 1.05 } : {}}
            whileTap={canSend ? { scale: 0.95 } : {}}
          >
            <Button
              onClick={handleSendMessage}
              disabled={!canSend}
              size="icon"
              className="mb-2 flex-shrink-0 h-10 w-10 sm:h-9 sm:w-9"
              title="Send message"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Quick Actions - Scrollable on mobile */}
        

        

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground mt-2 text-center hidden sm:block">
          kanoon.ai provides general legal information, not legal advice.
          Consult a qualified attorney for specific legal matters.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
