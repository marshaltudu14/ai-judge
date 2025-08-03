"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInput from '@/components/chat/ChatInput';
import MessageDisplay from '@/components/chat/MessageDisplay';
import TopicSuggestions from '@/components/chat/TopicSuggestions';

import { Message, ChatSession } from '@/types';

const ChatPage: React.FC = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session') || 'default';

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTopicSuggestions, setShowTopicSuggestions] = useState(true);

  // Load messages for current session
  useEffect(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
      const sessions: ChatSession[] = JSON.parse(savedSessions);
      const currentSession = sessions.find(s => s.id === sessionId);
      if (currentSession) {
        setMessages(currentSession.messages);
        setShowTopicSuggestions(currentSession.messages.length === 0);
      } else {
        // Create new session if not found
        const newSession: ChatSession = {
          id: sessionId,
          title: 'New Chat',
          messages: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        const updatedSessions = [...sessions, newSession];
        localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
        setMessages([]);
        setShowTopicSuggestions(true);
      }
    } else {
      // Initialize with welcome message
      const welcomeMessage: Message = {
        id: 'welcome',
        content: 'Hello! I\'m kanoon.ai, your AI legal assistant. I can help you with legal questions, provide information about various areas of law, and assist legal professionals with case analysis. How can I help you today?',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      setShowTopicSuggestions(true);
    }
  }, [sessionId]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      const savedSessions = localStorage.getItem('chatSessions');
      if (savedSessions) {
        const sessions: ChatSession[] = JSON.parse(savedSessions);
        const sessionIndex = sessions.findIndex(s => s.id === sessionId);

        if (sessionIndex !== -1) {
          sessions[sessionIndex].messages = messages;
          sessions[sessionIndex].updatedAt = new Date();

          // Update title based on first user message
          const firstUserMessage = messages.find(m => m.role === 'user');
          if (firstUserMessage && sessions[sessionIndex].title === 'New Chat') {
            sessions[sessionIndex].title = firstUserMessage.content.slice(0, 50) +
              (firstUserMessage.content.length > 50 ? '...' : '');
          }

          localStorage.setItem('chatSessions', JSON.stringify(sessions));
        }
      }
    }
  }, [messages, sessionId]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    setShowTopicSuggestions(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateMockResponse(content),
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
  };

  const generateMockResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('contract') || input.includes('agreement')) {
      return `## Contract Law Analysis

Based on your question about contracts, here are the key points to consider:

**Essential Elements of a Valid Contract:**
1. **Offer and Acceptance** - Clear terms proposed and accepted
2. **Consideration** - Exchange of value between parties
3. **Legal Capacity** - Parties must be legally able to contract
4. **Legal Purpose** - Contract must be for lawful activities

**Common Contract Issues:**
- **Breach of Contract**: When one party fails to perform their obligations
- **Misrepresentation**: False statements that induce contract formation
- **Duress or Undue Influence**: Contracts made under pressure may be voidable

**Remedies for Breach:**
- **Damages**: Monetary compensation for losses
- **Specific Performance**: Court order to fulfill contract terms
- **Rescission**: Cancellation of the contract

Would you like me to elaborate on any specific aspect of contract law or help with a particular contract issue?`;
    }

    if (input.includes('property') || input.includes('real estate') || input.includes('tenant') || input.includes('landlord')) {
      return `## Real Estate & Property Law

Here's what you need to know about property law:

**Types of Property Rights:**
- **Fee Simple**: Complete ownership with full rights
- **Leasehold**: Temporary right to use property
- **Easements**: Right to use another's property for specific purposes

**Landlord-Tenant Rights:**
- **Tenant Rights**: Quiet enjoyment, habitable conditions, privacy
- **Landlord Rights**: Rent collection, property inspection, eviction for cause
- **Security Deposits**: Must be returned within specified timeframe

**Property Transactions:**
- **Due Diligence**: Title search, inspections, surveys
- **Closing Process**: Transfer of ownership and funds
- **Title Insurance**: Protection against ownership disputes

**Common Issues:**
- Boundary disputes
- Zoning violations
- Lease violations
- Property damage claims

Is there a specific property law issue you'd like me to address in more detail?`;
    }

    if (input.includes('family') || input.includes('divorce') || input.includes('custody') || input.includes('marriage')) {
      return `## Family Law Guidance

Family law covers various personal and domestic relationships:

**Divorce Proceedings:**
- **Grounds for Divorce**: No-fault vs. fault-based divorce
- **Property Division**: Equitable distribution of marital assets
- **Spousal Support**: Alimony considerations and duration

**Child Custody & Support:**
- **Best Interests Standard**: Primary consideration in custody decisions
- **Types of Custody**: Physical vs. legal, joint vs. sole
- **Child Support**: Calculated based on income and custody arrangement

**Marriage & Domestic Relations:**
- **Prenuptial Agreements**: Asset protection and expectations
- **Domestic Violence**: Protection orders and legal remedies
- **Adoption**: Legal process and requirements

**Important Considerations:**
- Each state has different laws and procedures
- Mediation can be less costly than litigation
- Children's welfare is always the primary concern

What specific family law matter would you like to discuss further?`;
    }

    if (input.includes('criminal') || input.includes('arrest') || input.includes('charges')) {
      return `## Criminal Law Information

Understanding your rights in criminal matters:

**Constitutional Rights:**
- **Miranda Rights**: Right to remain silent and have an attorney
- **Fourth Amendment**: Protection against unreasonable searches
- **Sixth Amendment**: Right to a speedy trial and legal representation

**Criminal Process:**
1. **Investigation & Arrest**
2. **Arraignment**: Formal charges and plea entry
3. **Discovery**: Evidence exchange
4. **Trial or Plea Bargain**
5. **Sentencing** (if convicted)

**Types of Crimes:**
- **Felonies**: Serious crimes with potential prison time over 1 year
- **Misdemeanors**: Less serious crimes with shorter sentences
- **Infractions**: Minor violations, usually fines only

**Defense Strategies:**
- Challenge evidence collection
- Negotiate plea agreements
- Present alternative theories
- Character witnesses and mitigation

**Important**: If you're facing criminal charges, contact a criminal defense attorney immediately. Time is critical in criminal cases.

Do you have questions about a specific aspect of criminal law?`;
    }

    // Default response
    return `Thank you for your question about "${userInput}".

I'd be happy to help you with legal information. Based on your query, here are some general considerations:

**Legal Principles to Consider:**
- Every legal situation has unique facts that affect the outcome
- Laws vary by jurisdiction (state, federal, local)
- Time limitations (statutes of limitations) may apply
- Documentation and evidence are crucial

**Recommended Next Steps:**
1. **Gather Documentation**: Collect all relevant papers, contracts, communications
2. **Research Applicable Laws**: Look into specific statutes in your jurisdiction
3. **Consider Professional Help**: For complex matters, consult with a qualified attorney
4. **Know Your Rights**: Understand what protections and remedies are available

**Important Disclaimer**: This information is for educational purposes only and does not constitute legal advice. For specific legal matters, please consult with a licensed attorney in your jurisdiction.

Would you like me to provide more specific information about any particular aspect of your legal question?`;
  };

  

  return (
    <div className="flex flex-col flex-1 h-full">
      {/* Topic Suggestions */}
      <AnimatePresence>
        {showTopicSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <TopicSuggestions
              onSelectTopic={handleSendMessage}
              isVisible={showTopicSuggestions}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto min-h-0"> 
        <MessageDisplay messages={messages} isLoading={isLoading} />
      </div>

      {/* Fixed Chat Input */}
      <div className="shrink-0 sticky bottom-0 bg-background pb-4">
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ChatPage;
