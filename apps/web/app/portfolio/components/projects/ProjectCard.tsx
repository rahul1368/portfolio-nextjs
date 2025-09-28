"use client";

import { Badge } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Button } from "@repo/ui";
import { theme } from "../../theme";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
      className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10 transition-all duration-500 group relative overflow-hidden hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: theme.animation.stagger(index) }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={192}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 text-white border-0 shadow-lg shadow-blue-500/25 [.dark_&]:shadow-blue-400/25">Featured</Badge>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl font-semibold text-slate-900 [.dark_&]:text-slate-100 group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors duration-300">{title}</CardTitle>
        <p className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary" className="text-xs sm:text-sm bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/20 [.dark_&]:hover:bg-blue-400/20 transition-all duration-200">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {liveUrl && (
            <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-violet-500 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 hover:from-blue-600 hover:to-violet-600 [.dark_&]:hover:from-blue-300 [.dark_&]:hover:to-violet-300 text-white shadow-lg shadow-blue-500/25 [.dark_&]:shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-500/30 [.dark_&]:hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105 group" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="flex-1 bg-white/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-300/50 [.dark_&]:border-slate-600/50 hover:bg-slate-100/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-400/50 [.dark_&]:hover:border-slate-500/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 shadow-lg shadow-slate-500/10 [.dark_&]:shadow-slate-400/10 hover:shadow-xl hover:shadow-slate-500/20 [.dark_&]:hover:shadow-slate-400/20 transition-all duration-300 transform hover:scale-105 group" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
