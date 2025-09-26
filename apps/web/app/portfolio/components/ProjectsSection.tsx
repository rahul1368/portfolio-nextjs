"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { Button } from "@repo/ui";
import { Badge } from "@repo/ui";
import { theme } from "../theme";
import { getProjectsData } from "../lib/content";

export function ProjectsSection() {
  const projectsData = getProjectsData();
  return (
    <section id="projects" className={`${theme.section.padding} ${theme.background.section}`}>
      {/* Animated Background */}
      <div className={theme.background.animated}>
        <div className={theme.background.blur1}></div>
        <div className={theme.background.blur2}></div>
      </div>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          {/* Section Header */}
          <div className={`text-center ${theme.section.spacing}`}>
            <div className={theme.header.badge.container}>
              <div className={theme.header.badge.dot}></div>
              <Badge variant="outline" className={theme.header.badge.badge}>
                {projectsData.header.badge}
              </Badge>
            </div>
            <h2 className={theme.header.title.main}>
              {projectsData.header.title.split(' ').slice(0, -1).join(' ')} <span className={theme.header.title.gradient}>{projectsData.header.title.split(' ').slice(-1)}</span>
            </h2>
            <p className={`${theme.header.subtitle} text-muted-foreground`}>
              {projectsData.header.description}
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.projects.map((project, index) => (
              <Card 
                key={index} 
                className={`${theme.card.base} ${theme.card.hover} overflow-hidden`}
                style={{ animationDelay: theme.animation.stagger(index) }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-white/90 text-black hover:bg-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className={theme.card.header}>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                        style={{ animationDelay: theme.animation.stagger(techIndex) }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 group/btn">
                      <span>Live Demo</span>
                      <svg className="ml-1 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <span>GitHub</span>
                      <svg className="ml-1 w-3 h-3 group-hover/btn:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className={`max-w-2xl mx-auto ${theme.card.base} bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20`}>
              <CardContent className={theme.card.content}>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-2xl">💡</div>
                  <h3 className="text-xl font-semibold">{projectsData.cta.title}</h3>
                </div>
                <p className={`${theme.text.medium} text-muted-foreground mb-6`}>
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
