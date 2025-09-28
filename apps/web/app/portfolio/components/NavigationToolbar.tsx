"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui";
import { Card } from "@repo/ui";
import { Home, Code, Briefcase, FolderOpen, Github, Mail, ChevronUp, Sparkles } from "lucide-react";
import { getNavigationData } from "../lib/content";

interface NavigationToolbarProps {
  className?: string;
}

export function NavigationToolbar({ className = "" }: NavigationToolbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigationData = getNavigationData();

  const navigationItems = [
    {
      id: "home",
      label: navigationData.links[0].label,
      icon: Home,
      href: navigationData.links[0].href,
      section: "hero"
    },
    {
      id: "skills",
      label: navigationData.links[1].label, 
      icon: Code,
      href: navigationData.links[1].href,
      section: "skills"
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      href: "#experience",
      section: "experience"
    },
    {
      id: "projects",
      label: navigationData.links[2].label,
      icon: FolderOpen,
      href: navigationData.links[2].href, 
      section: "projects"
    },
    {
      id: "github",
      label: "GitHub",
      icon: Github,
      href: "#github-repos",
      section: "github-repos"
    },
    {
      id: "contact",
      label: navigationData.links[3].label,
      icon: Mail,
      href: navigationData.links[3].href,
      section: "contact"
    }
  ];

  // Handle scroll for progress calculation only
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((currentScrollY / scrollHeight) * 100, 0), 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "experience", "projects", "github-repos", "contact"];
      const scrollPosition = window.scrollY + 150; // Offset for better detection
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <Card className="bg-white/90 [.dark_&]:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 shadow-xl shadow-slate-500/10 [.dark_&]:shadow-slate-400/10 rounded-lg sm:rounded-xl">
        <div className="flex items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2">
          {/* Scroll to top button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-blue-600 [.dark_&]:hover:text-blue-400 transition-colors"
          >
            <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          
          {/* Separator */}
          <div className="w-px h-5 sm:h-6 bg-slate-200/50 [.dark_&]:bg-slate-700/50 mx-0.5 sm:mx-1" />
          
          {/* Navigation items */}
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;
            
            // Color mapping for each section
            const getColorClasses = (section: string) => {
              switch (section) {
                case 'hero':
                  return {
                    active: 'bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 shadow-blue-500/20 [.dark_&]:shadow-blue-400/20',
                    inactive: 'hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-blue-600 [.dark_&]:hover:text-blue-400'
                  };
                case 'skills':
                  return {
                    active: 'bg-emerald-500/10 [.dark_&]:bg-emerald-400/10 text-emerald-600 [.dark_&]:text-emerald-400 border-emerald-500/20 [.dark_&]:border-emerald-400/20 shadow-emerald-500/20 [.dark_&]:shadow-emerald-400/20',
                    inactive: 'hover:bg-emerald-500/10 [.dark_&]:hover:bg-emerald-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-emerald-600 [.dark_&]:hover:text-emerald-400'
                  };
                case 'experience':
                  return {
                    active: 'bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20 shadow-violet-500/20 [.dark_&]:shadow-violet-400/20',
                    inactive: 'hover:bg-violet-500/10 [.dark_&]:hover:bg-violet-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-violet-600 [.dark_&]:hover:text-violet-400'
                  };
                case 'projects':
                  return {
                    active: 'bg-amber-500/10 [.dark_&]:bg-amber-400/10 text-amber-600 [.dark_&]:text-amber-400 border-amber-500/20 [.dark_&]:border-amber-400/20 shadow-amber-500/20 [.dark_&]:shadow-amber-400/20',
                    inactive: 'hover:bg-amber-500/10 [.dark_&]:hover:bg-amber-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-amber-600 [.dark_&]:hover:text-amber-400'
                  };
                case 'github-repos':
                  return {
                    active: 'bg-rose-500/10 [.dark_&]:bg-rose-400/10 text-rose-600 [.dark_&]:text-rose-400 border-rose-500/20 [.dark_&]:border-rose-400/20 shadow-rose-500/20 [.dark_&]:shadow-rose-400/20',
                    inactive: 'hover:bg-rose-500/10 [.dark_&]:hover:bg-rose-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-rose-600 [.dark_&]:hover:text-rose-400'
                  };
                case 'contact':
                  return {
                    active: 'bg-cyan-500/10 [.dark_&]:bg-cyan-400/10 text-cyan-600 [.dark_&]:text-cyan-400 border-cyan-500/20 [.dark_&]:border-cyan-400/20 shadow-cyan-500/20 [.dark_&]:shadow-cyan-400/20',
                    inactive: 'hover:bg-cyan-500/10 [.dark_&]:hover:bg-cyan-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-cyan-600 [.dark_&]:hover:text-cyan-400'
                  };
                default:
                  return {
                    active: 'bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 shadow-blue-500/20 [.dark_&]:shadow-blue-400/20',
                    inactive: 'hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10 text-slate-600 [.dark_&]:text-slate-400 hover:text-blue-600 [.dark_&]:hover:text-blue-400'
                  };
              }
            };
            
            const colors = getColorClasses(item.section);
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`h-8 sm:h-9 px-2 sm:px-3 transition-all duration-200 ${
                  isActive 
                    ? `${colors.active} shadow-md hover:shadow-lg` 
                    : `${colors.inactive} hover:shadow-sm`
                }`}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className="hidden sm:inline text-xs sm:text-sm font-medium">{item.label}</span>
              </Button>
            );
          })}
          
          {/* Separator */}
          <div className="w-px h-5 sm:h-6 bg-slate-200/50 [.dark_&]:bg-slate-700/50 mx-0.5 sm:mx-1" />
          
          {/* Scroll progress indicator */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-slate-100/50 [.dark_&]:bg-slate-700/50 border border-slate-200/30 [.dark_&]:border-slate-600/30">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-500 [.dark_&]:text-blue-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-slate-600 [.dark_&]:text-slate-300 font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
