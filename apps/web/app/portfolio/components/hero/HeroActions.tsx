"use client";

import { Button } from "@repo/ui";
import { theme } from "../../theme";

interface HeroActionsProps {
  primaryCta: string;
  secondaryCta: string;
}

export function HeroActions({ primaryCta, secondaryCta }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up delay-400">
      <Button 
        size="lg" 
        className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-500 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 hover:from-blue-600 hover:to-violet-600 [.dark_&]:hover:from-blue-300 [.dark_&]:hover:to-violet-300 text-white shadow-lg shadow-blue-500/25 [.dark_&]:shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-500/30 [.dark_&]:hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105"
      >
        <span className="font-semibold">{primaryCta}</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="group w-full sm:w-auto bg-white/50 [.dark_&]:bg-slate-800/50 text-slate-700 [.dark_&]:text-slate-300 border-slate-300/50 [.dark_&]:border-slate-600/50 hover:bg-slate-100/50 [.dark_&]:hover:bg-slate-700/50 hover:border-slate-400/50 [.dark_&]:hover:border-slate-500/50 hover:text-slate-900 [.dark_&]:hover:text-slate-100 shadow-lg shadow-slate-500/10 [.dark_&]:shadow-slate-400/10 hover:shadow-xl hover:shadow-slate-500/20 [.dark_&]:hover:shadow-slate-400/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
      >
        <span className="font-semibold">{secondaryCta}</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Button>
    </div>
  );
}
