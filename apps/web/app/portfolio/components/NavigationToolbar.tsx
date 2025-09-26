"use client";

import { useState, useEffect } from "react";
import { Button } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Card } from "@repo/ui";
import { Home, Code, FolderOpen, Mail, ChevronUp, Sparkles } from "lucide-react";

interface NavigationToolbarProps {
  className?: string;
}

export function NavigationToolbar({ className = "" }: NavigationToolbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      href: "#hero",
      section: "hero"
    },
    {
      id: "skills",
      label: "Skills", 
      icon: Code,
      href: "#skills",
      section: "skills"
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
      href: "#projects", 
      section: "projects"
    },
    {
      id: "contact",
      label: "Contact",
      icon: Mail,
      href: "#contact",
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
      const sections = ["hero", "skills", "projects", "contact"];
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
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <Card className="bg-card/95 backdrop-blur-sm border border-border/50 shadow-lg rounded-xl">
        <div className="flex items-center gap-1 p-2">
          {/* Scroll to top button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="h-9 w-9 p-0 hover:bg-primary/10"
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          
          {/* Separator */}
          <div className="w-px h-6 bg-border/50 mx-1" />
          
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
                className={`h-9 px-3 transition-all duration-200 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            );
          })}
          
          {/* Separator */}
          <div className="w-px h-6 bg-border/50 mx-1" />
          
          {/* Scroll progress indicator */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30">
            <Sparkles className="h-3 w-3 text-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
