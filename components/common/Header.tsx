"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Scale, Sun, Moon, User, Settings, LogOut, Menu, MessageSquare, Info, HelpCircle, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navigationLinks = [
    { name: 'Chat', href: '/chat', icon: MessageSquare },
    { name: 'How It Works', href: '/how-it-works', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
  ];

  const isActiveLink = (href: string) => pathname === href;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="w-8 h-8 text-primary" />
          <span className="text-xl lg:text-2xl font-bold">kanoon.ai</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigationLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.name} href={link.href}>
                <Button
                  variant={isActiveLink(link.href) ? 'default' : 'ghost'}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2',
                    isActiveLink(link.href) && 'bg-primary text-primary-foreground'
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden xl:inline">{link.name}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-9 h-9"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center space-x-2 p-6 border-b">
                  <Scale className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold">kanoon.ai</span>
                </div>
                
                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col space-y-1 p-4">
                    {navigationLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                          <Button
                            variant={isActiveLink(link.href) ? 'default' : 'ghost'}
                            className="w-full justify-start space-x-3 h-12 text-base"
                          >
                            <IconComponent className="w-5 h-5" />
                            <span>{link.name}</span>
                          </Button>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
                
                {/* Mobile User Section */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/avatars/user.jpg" alt="User" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-base">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">John Doe</p>
                      <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" className="w-full justify-start h-10" size="sm">
                      <User className="mr-3 h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10" size="sm">
                      <Settings className="mr-3 h-4 w-4" />
                      Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10" size="sm">
                      <LogOut className="mr-3 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full hidden lg:inline-flex">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/user.jpg" alt="User" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">John Doe</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
