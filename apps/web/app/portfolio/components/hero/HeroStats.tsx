"use client";

interface HeroStatsProps {
  stats: {
    projects: string;
    experience: string;
    satisfaction: string;
  };
}


export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 animate-fade-in-up delay-500">
      <div className="text-center group">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.projects}
        </div>
        <div className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-400 font-medium">Projects</div>
      </div>
      <div className="text-center group">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 [.dark_&]:from-emerald-400 [.dark_&]:to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.experience}
        </div>
        <div className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-400 font-medium">Years Experience</div>
      </div>
      <div className="text-center group">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 [.dark_&]:from-rose-400 [.dark_&]:to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {stats.satisfaction}
        </div>
        <div className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-400 font-medium">Satisfaction</div>
      </div>
    </div>
  );
}
