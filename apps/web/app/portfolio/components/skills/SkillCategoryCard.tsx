"use client";

import { Badge } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Cpu, Settings, Cloud, Bot, Building, Monitor } from "lucide-react";
import { theme } from "../../theme";

interface SkillCategoryCardProps {
  category: string;
  icon: string;
  colorScheme: any;
  skills: string[];
  index: number;
}

// Icon mapping for Lucide React icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Settings,
  Cloud,
  Bot,
  Building,
  Monitor,
};

export function SkillCategoryCard({ category, icon, colorScheme, skills, index }: SkillCategoryCardProps) {
  const IconComponent = iconMap[icon] || Monitor; // fallback to Monitor if icon not found
  
  return (
    <Card 
      className={`${theme.card.base} ${theme.card.hover} ${colorScheme.border} hover:border-opacity-60 group relative overflow-hidden bg-gradient-to-br from-background to-muted/10 hover:from-background hover:to-muted/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5`}
      style={{ animationDelay: theme.animation.stagger(index) }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="pb-4 sm:pb-6 relative">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/10">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:text-primary/80 transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className={`${theme.text.h5} text-foreground mb-3 font-bold group-hover:text-primary transition-colors duration-300`}>
              {category}
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 3).map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="secondary" 
                  className={`${theme.text.badge} bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105`}
                >
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge 
                  variant="outline" 
                  className={`${theme.text.badge} border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105`}
                >
                  +{skills.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 relative">
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-3">
            <span className={`${theme.text.mutedSmall} font-medium`}>All Skills</span>
            <span className={`${theme.text.mutedSmall} font-semibold`}>{skills.length} technologies</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <Badge 
                key={skillIndex} 
                variant="outline" 
                className={`${theme.text.badge} border-muted-foreground/20 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-default`}
                style={{ animationDelay: `${skillIndex * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
}
