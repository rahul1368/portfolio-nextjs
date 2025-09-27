"use client";

interface HeroStatsProps {
  stats: {
    projects: string;
    experience: string;
    satisfaction: string;
  };
}

import { theme } from "../../theme";

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8">
      <div className="text-center">
        <div className={`${theme.text.h5} text-primary`}>{stats.projects}</div>
        <div className={theme.text.mutedSmall}>Projects</div>
      </div>
      <div className="text-center">
        <div className={`${theme.text.h5} text-primary`}>{stats.experience}</div>
        <div className={theme.text.mutedSmall}>Years Experience</div>
      </div>
      <div className="text-center">
        <div className={`${theme.text.h5} text-primary`}>{stats.satisfaction}</div>
        <div className={theme.text.mutedSmall}>Satisfaction</div>
      </div>
    </div>
  );
}
