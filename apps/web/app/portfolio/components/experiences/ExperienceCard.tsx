"use client";

import { Card, CardContent, CardHeader } from "@repo/ui";
import { Badge } from "@repo/ui";
import { ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";
import { theme } from "../../theme";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: readonly string[];
  technologies: readonly string[];
  logo: string;
  website: string;
  index: number;
}

export function ExperienceCard({
  company,
  position,
  duration,
  location,
  type,
  description,
  achievements,
  technologies,
  logo,
  website,
  index
}: ExperienceCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Enhanced Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:via-transparent [.dark_&]:to-violet-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-blue-500/20 via-transparent to-violet-500/20 [.dark_&]:from-blue-400/20 [.dark_&]:via-transparent [.dark_&]:to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardHeader className="pb-6 sm:pb-8 relative">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          {/* Company Logo and Info */}
          <div className="flex items-start gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl overflow-hidden">
              {/* Enhanced Background with Theme Support */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 [.dark_&]:from-slate-800 [.dark_&]:to-slate-700 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:to-violet-400/10 rounded-3xl"></div>
              <div className="absolute inset-0 border border-slate-200/20 [.dark_&]:border-slate-600/30 rounded-3xl"></div>
              
              {/* Logo Container with Enhanced Styling - Much Larger Size */}
              <div className="relative z-10 w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl bg-white/90 [.dark_&]:bg-slate-800/90 backdrop-blur-sm border border-white/20 [.dark_&]:border-slate-700/50 shadow-inner flex items-center justify-center p-3 sm:p-4">
                <Image 
                  src={logo} 
                  alt={`${company} logo`}
                  width={120}
                  height={120}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent [.dark_&]:from-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-900 [.dark_&]:text-slate-100 mb-2 font-bold group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors duration-500">
                    {company}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 [.dark_&]:text-slate-300 mb-3 font-semibold">
                    {position}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-blue-500/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 hover:bg-blue-500/15 hover:border-blue-500/30 text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 self-start"
                >
                  {type}
                </Badge>
              </div>
              
              {/* Meta Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-2 text-slate-600 [.dark_&]:text-slate-400">
                  <Calendar className="w-4 h-4 flex-shrink-0 text-blue-500 [.dark_&]:text-blue-400" />
                  <span className="text-xs sm:text-sm font-medium">{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 [.dark_&]:text-slate-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-emerald-500 [.dark_&]:text-emerald-400" />
                  <span className="text-xs sm:text-sm font-medium">{location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 [.dark_&]:text-slate-400">
                  <Briefcase className="w-4 h-4 flex-shrink-0 text-violet-500 [.dark_&]:text-violet-400" />
                  <span className="text-xs sm:text-sm font-medium">{type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mt-4 sm:mt-6">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300">
            {description}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="space-y-6 sm:space-y-8">
          {/* Achievements */}
          <div>
                  <h4 className="text-base sm:text-lg md:text-xl text-slate-900 [.dark_&]:text-slate-100 mb-4 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 [.dark_&]:bg-blue-400 shadow-sm"></div>
                    Key Achievements
                  </h4>
            <ul className="space-y-3">
              {achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-3 group/achievement">
                  <div className="w-2 h-2 rounded-full bg-blue-500 [.dark_&]:bg-blue-400 mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300 group-hover/achievement:text-slate-900 [.dark_&]:group-hover/achievement:text-slate-100 transition-colors duration-300">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
                  <h4 className="text-base sm:text-lg md:text-xl text-slate-900 [.dark_&]:text-slate-100 mb-4 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-500 [.dark_&]:bg-violet-400 shadow-sm"></div>
                    Technologies Used
                  </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex}
                  variant="secondary" 
                  className="bg-violet-500/10 text-violet-700 [.dark_&]:text-violet-300 border-violet-500/30 hover:bg-violet-500/20 [.dark_&]:bg-slate-700/50 [.dark_&]:border-slate-600/50 [.dark_&]:hover:bg-slate-600/50 text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-md backdrop-blur-sm"
                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Website Link */}
          {website !== "#" && (
                  <div className="pt-4 border-t border-slate-200/50 [.dark_&]:border-slate-700/50">
                    <a 
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-600 [.dark_&]:text-blue-400 hover:text-blue-700 [.dark_&]:hover:text-blue-300 transition-all duration-300 group/link p-3 rounded-xl hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/20 backdrop-blur-sm border border-transparent hover:border-blue-500/20 [.dark_&]:hover:border-blue-400/30"
                    >
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-semibold">Visit Company Website</span>
              </a>
            </div>
          )}
        </div>
      </CardContent>
      
      {/* Enhanced hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 [.dark_&]:from-blue-400/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
}