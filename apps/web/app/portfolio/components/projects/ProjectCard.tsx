"use client";

import { Badge } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Button } from "@repo/ui";
import { theme } from "../../theme";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  index: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl, 
  featured = false,
  index 
}: ProjectCardProps) {
  return (
    <Card 
      className={`${theme.card.base} ${theme.card.hover} group relative overflow-hidden ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: theme.animation.stagger(index) }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className={`${theme.text.h6} font-semibold`}>{title}</CardTitle>
        <p className={`${theme.text.mutedBody} leading-relaxed`}>
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className={theme.text.badge}>
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {liveUrl && (
            <Button size="sm" className="flex-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
