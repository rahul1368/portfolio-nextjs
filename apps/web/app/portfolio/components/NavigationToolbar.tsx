"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui";
import { Card } from "@repo/ui";
import { Home, Code, Briefcase, FolderOpen, Mail, ChevronUp, Sparkles } from "lucide-react";
import { theme } from "../theme";
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
      const sections = ["hero", "skills", "experience", "projects", "contact"];
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
      <Card className="bg-card/95 backdrop-blur-sm border border-border/50 shadow-lg rounded-lg sm:rounded-xl">
        <div className="flex items-center gap-0.5 sm:gap-1 p-1.5 sm:p-2">
          {/* Scroll to top button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="h-8 w-8 sm:h-9 sm:w-9 p-0 hover:bg-primary/10"
          >
            <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          
          {/* Separator */}
          <div className="w-px h-5 sm:h-6 bg-border/50 mx-0.5 sm:mx-1" />
          
          {/* Navigation items */}
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`h-8 sm:h-9 px-2 sm:px-3 transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                <span className={`hidden sm:inline ${theme.text.caption}`}>{item.label}</span>
              </Button>
            );
          })}
          
          {/* Separator */}
          <div className="w-px h-5 sm:h-6 bg-border/50 mx-0.5 sm:mx-1" />
          
          {/* Scroll progress indicator */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-muted/30">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary animate-pulse" />
            <span className={`${theme.text.mutedSmall} font-medium`}>
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
