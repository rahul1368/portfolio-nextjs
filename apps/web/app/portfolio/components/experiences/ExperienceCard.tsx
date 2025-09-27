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
      className="bg-card border border-border hover:border-primary/40 group relative overflow-hidden hover:shadow-xl transition-all duration-700"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardHeader className="pb-6 sm:pb-8 relative">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
          {/* Company Logo and Info */}
          <div className="flex items-start gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg hover:shadow-xl">
              <Image 
                src={logo} 
                alt={`${company} logo`}
                width={56}
                height={56}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className={`${theme.text.h4} text-foreground mb-2 font-bold group-hover:text-primary transition-colors duration-500`}>
                    {company}
                  </h3>
                  <p className={`${theme.text.h5} text-muted-foreground mb-3 font-semibold`}>
                    {position}
                  </p>
                </div>
                <Badge 
                  variant="outline" 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 hover:border-primary/30 ${theme.text.badge} font-semibold transition-all duration-300 hover:scale-105 self-start"
                >
                  {type}
                </Badge>
              </div>
              
              {/* Meta Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className={`${theme.text.mutedSmall} font-medium`}>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className={`${theme.text.mutedSmall} font-medium`}>{location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4 flex-shrink-0" />
                  <span className={`${theme.text.mutedSmall} font-medium`}>{type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mt-4 sm:mt-6">
          <p className={`${theme.text.bodyLarge} leading-relaxed text-muted-foreground`}>
            {description}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="space-y-6 sm:space-y-8">
          {/* Achievements */}
          <div>
                  <h4 className={`${theme.text.h5} text-foreground mb-4 font-bold flex items-center gap-2`}>
                    <div className="w-2 h-2 rounded-full bg-primary shadow-sm"></div>
                    Key Achievements
                  </h4>
            <ul className="space-y-3">
              {achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-3 group/achievement">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300"></div>
                  <span className={`${theme.text.mutedBody} leading-relaxed text-muted-foreground group-hover/achievement:text-foreground transition-colors duration-300`}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div>
                  <h4 className={`${theme.text.h5} text-foreground mb-4 font-bold flex items-center gap-2`}>
                    <div className="w-2 h-2 rounded-full bg-secondary shadow-sm"></div>
                    Technologies Used
                  </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technologies.map((tech, techIndex) => (
                <Badge 
                  key={techIndex}
                  variant="secondary" 
                  className="bg-secondary text-secondary-foreground border-secondary/20 hover:bg-secondary/80 ${theme.text.badge} transition-all duration-300 hover:scale-105 hover:shadow-md"
                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Website Link */}
          {website !== "#" && (
                  <div className="pt-4 border-t border-border">
                    <a 
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-all duration-300 group/link p-3 rounded-xl hover:bg-primary/10"
                    >
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                <span className={`${theme.text.mutedSmall} font-semibold`}>Visit Company Website</span>
              </a>
            </div>
          )}
        </div>
      </CardContent>
      
      {/* Enhanced hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
}