"use client";

import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/experiences/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { ThemeToggle } from "./components/ThemeToggle";
import { NavigationToolbar } from "./components/NavigationToolbar";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed position in top right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Navigation Toolbar - Fixed position at bottom */}
      <NavigationToolbar />
    </div>
  );
}
