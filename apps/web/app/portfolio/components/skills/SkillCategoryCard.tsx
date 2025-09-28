"use client";

import { Badge } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Cpu, Settings, Cloud, Bot, Building, Monitor, Database, Users, TestTube, Shield, Wrench, Layers } from "lucide-react";
import { theme } from "../../theme";

interface SkillCategoryCardProps {
  category: string;
  icon: string;
  colorScheme: string;
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
  Database,
  Users,
  TestTube,
  Shield,
  Wrench,
  Layers,
};

export function SkillCategoryCard({ category, icon, colorScheme, skills, index }: SkillCategoryCardProps) {
  const IconComponent = iconMap[icon] || Monitor; // fallback to Monitor if icon not found
  
  return (
    <Card 
      className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 group relative overflow-hidden transition-all duration-500 hover:shadow-lg hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 ${
        colorScheme === 'primary' ? 'hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10' :
        colorScheme === 'secondary' ? 'hover:border-slate-500/30 [.dark_&]:hover:border-slate-400/30 hover:shadow-slate-500/10 [.dark_&]:hover:shadow-slate-400/10' :
        colorScheme === 'accent' ? 'hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30 hover:shadow-violet-500/10 [.dark_&]:hover:shadow-violet-400/10' :
        colorScheme === 'warning' ? 'hover:border-amber-500/30 [.dark_&]:hover:border-amber-400/30 hover:shadow-amber-500/10 [.dark_&]:hover:shadow-amber-400/10' :
        colorScheme === 'info' ? 'hover:border-cyan-500/30 [.dark_&]:hover:border-cyan-400/30 hover:shadow-cyan-500/10 [.dark_&]:hover:shadow-cyan-400/10' :
        colorScheme === 'success' ? 'hover:border-emerald-500/30 [.dark_&]:hover:border-emerald-400/30 hover:shadow-emerald-500/10 [.dark_&]:hover:shadow-emerald-400/10' :
        colorScheme === 'destructive' ? 'hover:border-rose-500/30 [.dark_&]:hover:border-rose-400/30 hover:shadow-rose-500/10 [.dark_&]:hover:shadow-rose-400/10' :
        'hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10'
      }`}
      style={{ animationDelay: theme.animation.stagger(index) }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        colorScheme === 'primary' ? 'bg-gradient-to-br from-transparent via-transparent to-blue-500/5 [.dark_&]:to-blue-400/5' :
        colorScheme === 'secondary' ? 'bg-gradient-to-br from-transparent via-transparent to-slate-500/5 [.dark_&]:to-slate-400/5' :
        colorScheme === 'accent' ? 'bg-gradient-to-br from-transparent via-transparent to-violet-500/5 [.dark_&]:to-violet-400/5' :
        colorScheme === 'warning' ? 'bg-gradient-to-br from-transparent via-transparent to-amber-500/5 [.dark_&]:to-amber-400/5' :
        colorScheme === 'info' ? 'bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 [.dark_&]:to-cyan-400/5' :
        colorScheme === 'success' ? 'bg-gradient-to-br from-transparent via-transparent to-emerald-500/5 [.dark_&]:to-emerald-400/5' :
        colorScheme === 'destructive' ? 'bg-gradient-to-br from-transparent via-transparent to-rose-500/5 [.dark_&]:to-rose-400/5' :
        'bg-gradient-to-br from-transparent via-transparent to-blue-500/5 [.dark_&]:to-blue-400/5'
      }`}></div>
      
      <CardHeader className="pb-4 sm:pb-6 relative">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
            colorScheme === 'primary' ? 'bg-gradient-to-br from-blue-500/10 to-blue-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:to-blue-400/5 shadow-blue-500/10 [.dark_&]:shadow-blue-400/10' :
            colorScheme === 'secondary' ? 'bg-gradient-to-br from-slate-500/10 to-slate-500/5 [.dark_&]:from-slate-400/10 [.dark_&]:to-slate-400/5 shadow-slate-500/10 [.dark_&]:shadow-slate-400/10' :
            colorScheme === 'accent' ? 'bg-gradient-to-br from-violet-500/10 to-violet-500/5 [.dark_&]:from-violet-400/10 [.dark_&]:to-violet-400/5 shadow-violet-500/10 [.dark_&]:shadow-violet-400/10' :
            colorScheme === 'warning' ? 'bg-gradient-to-br from-amber-500/10 to-amber-500/5 [.dark_&]:from-amber-400/10 [.dark_&]:to-amber-400/5 shadow-amber-500/10 [.dark_&]:shadow-amber-400/10' :
            colorScheme === 'info' ? 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 [.dark_&]:from-cyan-400/10 [.dark_&]:to-cyan-400/5 shadow-cyan-500/10 [.dark_&]:shadow-cyan-400/10' :
            colorScheme === 'success' ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 [.dark_&]:from-emerald-400/10 [.dark_&]:to-emerald-400/5 shadow-emerald-500/10 [.dark_&]:shadow-emerald-400/10' :
            colorScheme === 'destructive' ? 'bg-gradient-to-br from-rose-500/10 to-rose-500/5 [.dark_&]:from-rose-400/10 [.dark_&]:to-rose-400/5 shadow-rose-500/10 [.dark_&]:shadow-rose-400/10' :
            'bg-gradient-to-br from-blue-500/10 to-blue-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:to-blue-400/5 shadow-blue-500/10 [.dark_&]:shadow-blue-400/10'
          }`}>
            <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-colors duration-300 ${
              colorScheme === 'primary' ? 'text-blue-600 [.dark_&]:text-blue-400 group-hover:text-blue-700 [.dark_&]:group-hover:text-blue-300' :
              colorScheme === 'secondary' ? 'text-slate-600 [.dark_&]:text-slate-400 group-hover:text-slate-700 [.dark_&]:group-hover:text-slate-300' :
              colorScheme === 'accent' ? 'text-violet-600 [.dark_&]:text-violet-400 group-hover:text-violet-700 [.dark_&]:group-hover:text-violet-300' :
              colorScheme === 'warning' ? 'text-amber-600 [.dark_&]:text-amber-400 group-hover:text-amber-700 [.dark_&]:group-hover:text-amber-300' :
              colorScheme === 'info' ? 'text-cyan-600 [.dark_&]:text-cyan-400 group-hover:text-cyan-700 [.dark_&]:group-hover:text-cyan-300' :
              colorScheme === 'success' ? 'text-emerald-600 [.dark_&]:text-emerald-400 group-hover:text-emerald-700 [.dark_&]:group-hover:text-emerald-300' :
              colorScheme === 'destructive' ? 'text-rose-600 [.dark_&]:text-rose-400 group-hover:text-rose-700 [.dark_&]:group-hover:text-rose-300' :
              'text-blue-600 [.dark_&]:text-blue-400 group-hover:text-blue-700 [.dark_&]:group-hover:text-blue-300'
            }`} />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-3 group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors duration-300">
              {category}
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 3).map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="secondary" 
                  className={`text-xs sm:text-sm transition-all duration-300 hover:scale-105 font-semibold ${
                    colorScheme === 'primary' ? 'bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/20 [.dark_&]:hover:bg-blue-400/20' :
                    colorScheme === 'secondary' ? 'bg-slate-500/10 [.dark_&]:bg-slate-400/10 text-slate-600 [.dark_&]:text-slate-400 border-slate-500/20 [.dark_&]:border-slate-400/20 hover:bg-slate-500/20 [.dark_&]:hover:bg-slate-400/20' :
                    colorScheme === 'accent' ? 'bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20 hover:bg-violet-500/20 [.dark_&]:hover:bg-violet-400/20' :
                    colorScheme === 'warning' ? 'bg-amber-500/10 [.dark_&]:bg-amber-400/10 text-amber-600 [.dark_&]:text-amber-400 border-amber-500/20 [.dark_&]:border-amber-400/20 hover:bg-amber-500/20 [.dark_&]:hover:bg-amber-400/20' :
                    colorScheme === 'info' ? 'bg-cyan-500/10 [.dark_&]:bg-cyan-400/10 text-cyan-600 [.dark_&]:text-cyan-400 border-cyan-500/20 [.dark_&]:border-cyan-400/20 hover:bg-cyan-500/20 [.dark_&]:hover:bg-cyan-400/20' :
                    colorScheme === 'success' ? 'bg-emerald-500/10 [.dark_&]:bg-emerald-400/10 text-emerald-600 [.dark_&]:text-emerald-400 border-emerald-500/20 [.dark_&]:border-emerald-400/20 hover:bg-emerald-500/20 [.dark_&]:hover:bg-emerald-400/20' :
                    colorScheme === 'destructive' ? 'bg-rose-500/10 [.dark_&]:bg-rose-400/10 text-rose-600 [.dark_&]:text-rose-400 border-rose-500/20 [.dark_&]:border-rose-400/20 hover:bg-rose-500/20 [.dark_&]:hover:bg-rose-400/20' :
                    'bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/20 [.dark_&]:hover:bg-blue-400/20'
                  }`}
                >
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge 
                  variant="outline" 
                  className={`text-xs sm:text-sm transition-all duration-300 hover:scale-105 font-semibold ${
                    colorScheme === 'primary' ? 'bg-blue-500/5 [.dark_&]:bg-blue-400/5 text-blue-700 [.dark_&]:text-blue-300 border-blue-500/30 [.dark_&]:border-blue-400/30 hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10' :
                    colorScheme === 'secondary' ? 'bg-slate-500/5 [.dark_&]:bg-slate-400/5 text-slate-700 [.dark_&]:text-slate-300 border-slate-500/30 [.dark_&]:border-slate-400/30 hover:bg-slate-500/10 [.dark_&]:hover:bg-slate-400/10' :
                    colorScheme === 'accent' ? 'bg-violet-500/5 [.dark_&]:bg-violet-400/5 text-violet-700 [.dark_&]:text-violet-300 border-violet-500/30 [.dark_&]:border-violet-400/30 hover:bg-violet-500/10 [.dark_&]:hover:bg-violet-400/10' :
                    colorScheme === 'warning' ? 'bg-amber-500/5 [.dark_&]:bg-amber-400/5 text-amber-700 [.dark_&]:text-amber-300 border-amber-500/30 [.dark_&]:border-amber-400/30 hover:bg-amber-500/10 [.dark_&]:hover:bg-amber-400/10' :
                    colorScheme === 'info' ? 'bg-cyan-500/5 [.dark_&]:bg-cyan-400/5 text-cyan-700 [.dark_&]:text-cyan-300 border-cyan-500/30 [.dark_&]:border-cyan-400/30 hover:bg-cyan-500/10 [.dark_&]:hover:bg-cyan-400/10' :
                    colorScheme === 'success' ? 'bg-emerald-500/5 [.dark_&]:bg-emerald-400/5 text-emerald-700 [.dark_&]:text-emerald-300 border-emerald-500/30 [.dark_&]:border-emerald-400/30 hover:bg-emerald-500/10 [.dark_&]:hover:bg-emerald-400/10' :
                    colorScheme === 'destructive' ? 'bg-rose-500/5 [.dark_&]:bg-rose-400/5 text-rose-700 [.dark_&]:text-rose-300 border-rose-500/30 [.dark_&]:border-rose-400/30 hover:bg-rose-500/10 [.dark_&]:hover:bg-rose-400/10' :
                    'bg-blue-500/5 [.dark_&]:bg-blue-400/5 text-blue-700 [.dark_&]:text-blue-300 border-blue-500/30 [.dark_&]:border-blue-400/30 hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10'
                  }`}
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
            <span className="text-xs sm:text-sm font-medium text-slate-600 [.dark_&]:text-slate-400">All Skills</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-600 [.dark_&]:text-slate-400">{skills.length} technologies</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <Badge 
                key={skillIndex} 
                variant="outline" 
                className={`text-xs sm:text-sm transition-all duration-300 hover:scale-105 cursor-default font-semibold ${
                  colorScheme === 'primary' ? 'bg-blue-500/5 [.dark_&]:bg-blue-400/5 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10' :
                  colorScheme === 'secondary' ? 'bg-slate-500/5 [.dark_&]:bg-slate-400/5 text-slate-600 [.dark_&]:text-slate-400 border-slate-500/20 [.dark_&]:border-slate-400/20 hover:bg-slate-500/10 [.dark_&]:hover:bg-slate-400/10' :
                  colorScheme === 'accent' ? 'bg-violet-500/5 [.dark_&]:bg-violet-400/5 text-violet-600 [.dark_&]:text-violet-400 border-violet-500/20 [.dark_&]:border-violet-400/20 hover:bg-violet-500/10 [.dark_&]:hover:bg-violet-400/10' :
                  colorScheme === 'warning' ? 'bg-amber-500/5 [.dark_&]:bg-amber-400/5 text-amber-600 [.dark_&]:text-amber-400 border-amber-500/20 [.dark_&]:border-amber-400/20 hover:bg-amber-500/10 [.dark_&]:hover:bg-amber-400/10' :
                  colorScheme === 'info' ? 'bg-cyan-500/5 [.dark_&]:bg-cyan-400/5 text-cyan-600 [.dark_&]:text-cyan-400 border-cyan-500/20 [.dark_&]:border-cyan-400/20 hover:bg-cyan-500/10 [.dark_&]:hover:bg-cyan-400/10' :
                  colorScheme === 'success' ? 'bg-emerald-500/5 [.dark_&]:bg-emerald-400/5 text-emerald-600 [.dark_&]:text-emerald-400 border-emerald-500/20 [.dark_&]:border-emerald-400/20 hover:bg-emerald-500/10 [.dark_&]:hover:bg-emerald-400/10' :
                  colorScheme === 'destructive' ? 'bg-rose-500/5 [.dark_&]:bg-rose-400/5 text-rose-600 [.dark_&]:text-rose-400 border-rose-500/20 [.dark_&]:border-rose-400/20 hover:bg-rose-500/10 [.dark_&]:hover:bg-rose-400/10' :
                  'bg-blue-500/5 [.dark_&]:bg-blue-400/5 text-blue-600 [.dark_&]:text-blue-400 border-blue-500/20 [.dark_&]:border-blue-400/20 hover:bg-blue-500/10 [.dark_&]:hover:bg-blue-400/10'
                }`}
                style={{ animationDelay: `${skillIndex * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      {/* Hover effect overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        colorScheme === 'primary' ? 'bg-gradient-to-r from-transparent via-blue-500/5 [.dark_&]:via-blue-400/5 to-transparent' :
        colorScheme === 'secondary' ? 'bg-gradient-to-r from-transparent via-slate-500/5 [.dark_&]:via-slate-400/5 to-transparent' :
        colorScheme === 'accent' ? 'bg-gradient-to-r from-transparent via-violet-500/5 [.dark_&]:via-violet-400/5 to-transparent' :
        colorScheme === 'warning' ? 'bg-gradient-to-r from-transparent via-amber-500/5 [.dark_&]:via-amber-400/5 to-transparent' :
        colorScheme === 'info' ? 'bg-gradient-to-r from-transparent via-cyan-500/5 [.dark_&]:via-cyan-400/5 to-transparent' :
        colorScheme === 'success' ? 'bg-gradient-to-r from-transparent via-emerald-500/5 [.dark_&]:via-emerald-400/5 to-transparent' :
        colorScheme === 'destructive' ? 'bg-gradient-to-r from-transparent via-rose-500/5 [.dark_&]:via-rose-400/5 to-transparent' :
        'bg-gradient-to-r from-transparent via-blue-500/5 [.dark_&]:via-blue-400/5 to-transparent'
      }`}></div>
    </Card>
  );
}
