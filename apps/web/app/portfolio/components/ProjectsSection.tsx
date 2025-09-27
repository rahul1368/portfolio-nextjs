"use client";

import { Lightbulb } from "lucide-react";
import { theme } from "../theme";
import { getProjectsData } from "../lib/content";
import { AnimatedBackground } from "./shared/AnimatedBackground";
import { SectionHeader } from "./shared/SectionHeader";
import { ProjectCard } from "./projects/ProjectCard";
import { Button, Card, CardContent } from "@repo/ui";

export function ProjectsSection() {
  const projectsData = getProjectsData();
  return (
    <section id="projects" className={`${theme.section.padding} ${theme.background.section}`}>
      <AnimatedBackground />
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          <SectionHeader 
            badge={projectsData.header.badge}
            title={projectsData.header.title}
            description={projectsData.header.description}
          />
          
          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={[...project.technologies]}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                featured={false}
                index={index}
              />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className={`max-w-2xl mx-auto ${theme.card.base} bg-muted/30`}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <h3 className={`${theme.text.h5} font-semibold`}>{projectsData.cta.title}</h3>
                </div>
                <p className={`${theme.text.mutedBody} mb-6`}>
                  {projectsData.cta.description}
                </p>
                <Button size="lg" className={`${theme.button.primary} group`}>
                  <span>{projectsData.cta.button}</span>
                  <svg className={theme.button.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
