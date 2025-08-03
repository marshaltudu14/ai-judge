"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  MessageSquare,
  Info,
  HelpCircle,
  BookOpen,
  Trash2,
  Scale
} from 'lucide-react';
import { ChatSession } from '@/types';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSessionId = searchParams.get('session') || 'default';

  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);

  // Load chat sessions from localStorage
  useEffect(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
      setChatSessions(JSON.parse(savedSessions));
    } else {
      // Initialize with mock data
      const mockSessions: ChatSession[] = [
        {
          id: 'default',
          title: 'Legal Question about Property',
          messages: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Contract Law Inquiry',
          messages: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '3',
          title: 'Family Law Advice',
          messages: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      setChatSessions(mockSessions);
      localStorage.setItem('chatSessions', JSON.stringify(mockSessions));
    }
  }, []);

  const createNewChat = () => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const updatedSessions = [newSession, ...chatSessions];
    setChatSessions(updatedSessions);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    router.push(`/chat?session=${newSession.id}`);
  };

  const deleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const updatedSessions = chatSessions.filter(session => session.id !== sessionId);
    setChatSessions(updatedSessions);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));

    if (activeSessionId === sessionId && updatedSessions.length > 0) {
      router.push(`/chat?session=${updatedSessions[0].id}`);
    } else if (updatedSessions.length === 0) {
      router.push('/chat');
    }
  };

  const navigationItems = [
    { href: '/about', label: 'About Us', icon: Info },
    { href: '/how-it-works', label: 'How It Works', icon: BookOpen },
    { href: '/faq', label: 'FAQ', icon: HelpCircle },
  ];

  return (
    <aside className="w-full lg:w-80 border-r bg-muted/30 flex flex-col h-screen sticky top-0">
      {/* Sidebar Header */}
      <div className="p-4 border-b lg:hidden">
        <div className="flex items-center space-x-2">
          <Scale className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold">kanoon.ai</span>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Button
          onClick={createNewChat}
          className="w-full justify-start"
          size="lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Chat Sessions */}
      <div className="flex-1 overflow-hidden">
        <div className="px-4 pb-2">
          <h3 className="text-sm font-medium text-muted-foreground">Recent Chats</h3>
        </div>
        <ScrollArea className="flex-1 px-2">
          <div className="space-y-1 p-2">
            <AnimatePresence>
              {chatSessions.map((session) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={`/chat?session=${session.id}`}>
                    <div
                      className={`group flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer ${
                        session.id === activeSessionId
                          ? 'bg-accent border border-primary/20'
                          : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <MessageSquare className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {session.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {session.messages.length} messages
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {session.id === activeSessionId && (
                          <Badge variant="secondary" className="text-xs">
                            Active
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => deleteSession(session.id, e)}
                          title="Delete chat"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {chatSessions.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No chats yet</p>
                <p className="text-xs">Start a new conversation</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      {/* Navigation Links */}
      <div className="p-4">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  size="sm"
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
