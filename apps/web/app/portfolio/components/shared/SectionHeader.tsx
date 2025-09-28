"use client";

import { Badge } from "@repo/ui";
import { theme } from "../../theme";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className={`text-center ${theme.section.spacing}`}>
      <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
        <div className="w-2 h-2 bg-blue-500 [.dark_&]:bg-blue-400 rounded-full animate-pulse"></div>
        <Badge variant="outline" className="text-xs sm:text-sm bg-slate-100 [.dark_&]:bg-slate-800 text-slate-700 [.dark_&]:text-slate-300 border-slate-200 [.dark_&]:border-slate-600">
          {badge}
        </Badge>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 [.dark_&]:text-slate-100">
        {title.split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 [.dark_&]:from-blue-400 [.dark_&]:via-violet-400 [.dark_&]:to-purple-400 bg-clip-text text-transparent">{title.split(' ').slice(-1)}</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
