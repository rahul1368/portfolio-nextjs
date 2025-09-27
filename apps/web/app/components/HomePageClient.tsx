"use client";

import { NavigationToolbar } from '../portfolio/components/NavigationToolbar';
import { HeroSection } from '../portfolio/components/HeroSection';
import { SkillsSection } from '../portfolio/components/SkillsSection';
import { ExperienceSection } from '../portfolio/components/experiences/ExperienceSection';
import { ProjectsSection } from '../portfolio/components/ProjectsSection';
import { ContactSection } from '../portfolio/components/ContactSection';
import { TimelineConnector } from '../portfolio/components/shared/TimelineConnector';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { FloatingIcons } from './FloatingIcons';

interface HomePageClientProps {
  content: {
    navigation: {
      brand: string;
      downloadResume: string;
      getStarted: string;
      menu: string;
    };
    footer: {
      brand: {
        name: string;
        description: string;
      };
      copyright: string;
    };
  };
}

export function HomePageClient({ content }: HomePageClientProps) {
  return (
    <>
      <FloatingIcons />
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Navigation 
          brand={content.navigation.brand}
          downloadResume={content.navigation.downloadResume}
          getStarted={content.navigation.getStarted}
        />

        {/* Hero Section - Using Portfolio Component */}
        <HeroSection />
        
        {/* Timeline Connector: Hero → Skills */}
        <TimelineConnector fromSection="hero" toSection="skills" />
        
        {/* Skills Section - Using Portfolio Component */}
        <SkillsSection />

        {/* Timeline Connector: Skills → Experience */}
        <TimelineConnector fromSection="skills" toSection="experience" />

        {/* Experience Section - Using Portfolio Component */}
        <ExperienceSection />

        {/* Timeline Connector: Experience → Projects */}
        <TimelineConnector fromSection="experience" toSection="projects" />

        {/* Projects Section - Using Portfolio Component */}
        <ProjectsSection />

        {/* Timeline Connector: Projects → Contact */}
        <TimelineConnector fromSection="projects" toSection="contact" />

        {/* Contact Section - Using Portfolio Component */}
        <ContactSection />

        {/* Footer */}
        <Footer 
          brand={content.footer.brand}
          copyright={content.footer.copyright}
        />
        
        {/* Navigation Toolbar - Fixed position at bottom */}
        <NavigationToolbar />
      </div>
    </>
  );
}
