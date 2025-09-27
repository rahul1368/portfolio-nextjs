"use client";

import { useState } from "react";
import { Button } from "@repo/ui";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from '../portfolio/components/ThemeToggle';
import { theme } from '../portfolio/theme';

interface NavigationProps {
  brand: string;
  downloadResume: string;
  getStarted: string;
}

export function Navigation({ brand, downloadResume, getStarted }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <h1 className={`${theme.text.h5} font-bold text-foreground`}>{brand}</h1>
          
          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button variant="outline" size="sm" className={theme.text.button}>
                {downloadResume}
              </Button>
              <Button size="sm" className={theme.text.button}>
                {getStarted}
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-9 w-9 p-0"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-3">
              <Button variant="outline" size="sm" className={`w-full justify-start ${theme.text.button}`}>
                {downloadResume}
              </Button>
              <Button size="sm" className={`w-full justify-start ${theme.text.button}`}>
                {getStarted}
              </Button>
              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center justify-between px-3 py-2 border border-border rounded-md">
                <span className={theme.text.label}>Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
