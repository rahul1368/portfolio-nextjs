"use client";

import { useState, useEffect } from "react";
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 [.dark_&]:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 [.dark_&]:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 [.dark_&]:text-slate-100">{brand}</h1>
          
          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-slate-100/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-700/50 hover:bg-slate-200/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-300/50 [.dark_&]:hover:border-slate-600/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 transition-all duration-200"
              >
                {downloadResume}
              </Button>
              <Button 
                size="sm" 
                className="bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/20 [.dark_&]:hover:bg-blue-400/20 hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:text-blue-700 [.dark_&]:hover:text-blue-300 transition-all duration-200"
              >
                {getStarted}
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-9 w-9 p-0 bg-slate-100/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-700/50 hover:bg-slate-200/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-300/50 [.dark_&]:hover:border-slate-600/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 transition-transform duration-200 rotate-0" />
                ) : (
                  <Menu className="h-4 w-4 transition-transform duration-200 rotate-0" />
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/20 [.dark_&]:bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 left-0 right-0 bg-white/95 [.dark_&]:bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-200/50 [.dark_&]:border-slate-700/50 animate-in slide-in-from-top duration-300">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/30 [.dark_&]:border-slate-700/30">
                <h2 className="text-lg font-semibold text-slate-900 [.dark_&]:text-slate-100">Menu</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="h-8 w-8 p-0 bg-slate-100/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-700/50 hover:bg-slate-200/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-300/50 [.dark_&]:hover:border-slate-600/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 transition-all duration-200"
                >
                  <X className="h-4 w-4 transition-transform duration-200 hover:rotate-90" />
                </Button>
              </div>
              <div className="py-4 space-y-3 px-4">
                <div className="transform transition-all duration-300 ease-out translate-y-0 opacity-100" style={{ transitionDelay: '100ms' }}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start bg-slate-100/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-200/50 [.dark_&]:border-slate-700/50 hover:bg-slate-200/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-300/50 [.dark_&]:hover:border-slate-600/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 transition-all duration-200"
                  >
                    {downloadResume}
                  </Button>
                </div>
                <div className="transform transition-all duration-300 ease-out translate-y-0 opacity-100" style={{ transitionDelay: '150ms' }}>
                  <Button 
                    size="sm" 
                    className="w-full justify-start bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/20 [.dark_&]:hover:bg-blue-400/20 hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:text-blue-700 [.dark_&]:hover:text-blue-300 transition-all duration-200"
                  >
                    {getStarted}
                  </Button>
                </div>
                {/* Theme Toggle in Mobile Menu */}
                <div className="transform transition-all duration-300 ease-out translate-y-0 opacity-100" style={{ transitionDelay: '200ms' }}>
                  <div className="flex items-center justify-between px-3 py-2 border border-slate-200/50 [.dark_&]:border-slate-700/50 rounded-md bg-slate-50/50 [.dark_&]:bg-slate-800/50">
                    <span className="text-sm font-medium text-slate-700 [.dark_&]:text-slate-300">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
