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
    <section id="projects" className={`${theme.section.padding} relative overflow-hidden`}>
      <AnimatedBackground />
      
      {/* Subtle Background with Material Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-violet-50/10 [.dark_&]:from-slate-900/50 [.dark_&]:via-blue-900/10 [.dark_&]:to-violet-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/3 via-transparent to-cyan-500/3 [.dark_&]:from-emerald-400/5 [.dark_&]:via-transparent [.dark_&]:to-cyan-400/5"></div>
      
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
          
          {/* Enhanced Call to Action */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10 transition-all duration-500 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:via-transparent [.dark_&]:to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-6 sm:p-8">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 [.dark_&]:from-blue-400/20 [.dark_&]:to-violet-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 [.dark_&]:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 [.dark_&]:text-slate-100 group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors duration-300">{projectsData.cta.title}</h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 [.dark_&]:text-slate-300 mb-6 leading-relaxed">
                  {projectsData.cta.description}
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-violet-500 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 hover:from-blue-600 hover:to-violet-600 [.dark_&]:hover:from-blue-300 [.dark_&]:hover:to-violet-300 text-white shadow-lg shadow-blue-500/25 [.dark_&]:shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-500/30 [.dark_&]:hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105 group">
                  <span className="font-semibold">{projectsData.cta.button}</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
