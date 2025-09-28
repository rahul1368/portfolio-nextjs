"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui";
import { Monitor, Palette, Zap } from "lucide-react";
import { theme } from "../theme";
import { getHeroData } from "../lib/content";
import { AnimatedBackground } from "./shared/AnimatedBackground";
import { StatusBadge } from "./hero/StatusBadge";
import { HeroHeading } from "./hero/HeroHeading";
import { HeroActions } from "./hero/HeroActions";
import { HeroStats } from "./hero/HeroStats";

export function HeroSection() {
  const heroData = getHeroData();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Enhanced Background with Material Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/20 [.dark_&]:from-slate-900 [.dark_&]:via-blue-900/20 [.dark_&]:to-violet-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-cyan-500/5 [.dark_&]:from-emerald-400/10 [.dark_&]:via-transparent [.dark_&]:to-cyan-400/10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 [.dark_&]:bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-violet-500/20 [.dark_&]:bg-violet-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-emerald-500/20 [.dark_&]:bg-emerald-400/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-500/20 [.dark_&]:bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className={`relative z-10 ${theme.section.container} ${theme.section.padding}`}>
        <div className={theme.section.maxWidth}>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <StatusBadge status={heroData.status} />
              <HeroHeading name={heroData.name} title={heroData.title} subtitle={heroData.subtitle} />
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 [.dark_&]:text-slate-300 leading-relaxed max-w-lg animate-fade-in-up delay-300">
                {heroData.description}
              </p>
              
              <HeroActions 
                primaryCta="View My Work" 
                secondaryCta={heroData.secondaryCta} 
              />
              
              <HeroStats stats={heroData.stats} />
            </div>
            
            {/* Right Content - Avatar & Visual */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 mb-8 sm:mb-12 lg:mb-0 px-6 sm:px-8 md:px-10 lg:px-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                {/* Main Avatar - Optimized for All Devices */}
                <div className="relative z-10 w-full flex justify-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl shadow-slate-500/20 [.dark_&]:shadow-slate-400/20 border-4 border-white/20 [.dark_&]:border-slate-700/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:shadow-3xl hover:shadow-blue-500/20 [.dark_&]:hover:shadow-blue-400/20">
                    <Avatar className="w-full h-full">
                      <AvatarImage 
                        src={heroData.avatar} 
                        alt={heroData.name} 
                        className="object-cover w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                      <AvatarFallback className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                        {heroData.fallback}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                {/* Floating Elements with Enhanced Material Colors - Mobile Optimized */}
                {/* Top Right - Monitor Icon */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 lg:-top-6 lg:-right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/30 to-blue-600/20 [.dark_&]:from-blue-400/30 [.dark_&]:to-blue-500/20 rounded-full flex items-center justify-center animate-float shadow-xl shadow-blue-500/30 [.dark_&]:shadow-blue-400/30 border border-blue-500/20 [.dark_&]:border-blue-400/20 backdrop-blur-sm">
                  <Monitor className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-600 [.dark_&]:text-blue-400 animate-pulse" />
                </div>
                
                {/* Bottom Left - Palette Icon */}
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 lg:-bottom-6 lg:-left-6 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 [.dark_&]:from-emerald-400/30 [.dark_&]:to-emerald-500/20 rounded-full flex items-center justify-center animate-float delay-1000 shadow-xl shadow-emerald-500/30 [.dark_&]:shadow-emerald-400/30 border border-emerald-500/20 [.dark_&]:border-emerald-400/20 backdrop-blur-sm">
                  <Palette className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-emerald-600 [.dark_&]:text-emerald-400 animate-pulse delay-1000" />
                </div>
                
                {/* Middle Left - Zap Icon */}
                <div className="absolute top-1/2 -left-3 sm:-left-4 md:-left-5 lg:-left-6 xl:-left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-violet-500/30 to-violet-600/20 [.dark_&]:from-violet-400/30 [.dark_&]:to-violet-500/20 rounded-full flex items-center justify-center animate-float delay-500 shadow-xl shadow-violet-500/30 [.dark_&]:shadow-violet-400/30 border border-violet-500/20 [.dark_&]:border-violet-400/20 backdrop-blur-sm">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-violet-600 [.dark_&]:text-violet-400 animate-pulse delay-500" />
                </div>
                
                {/* Additional Mobile Icons for Better Visual Appeal */}
                {/* Top Left - Additional Icon */}
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:hidden w-6 h-6 bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 [.dark_&]:from-cyan-400/30 [.dark_&]:to-cyan-500/20 rounded-full flex items-center justify-center animate-float delay-700 shadow-xl shadow-cyan-500/30 [.dark_&]:shadow-cyan-400/30 border border-cyan-500/20 [.dark_&]:border-cyan-400/20 backdrop-blur-sm">
                  <Zap className="w-3 h-3 text-cyan-600 [.dark_&]:text-cyan-400 animate-pulse delay-700" />
                </div>
                
                {/* Bottom Right - Additional Icon */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:hidden w-6 h-6 bg-gradient-to-br from-rose-500/30 to-rose-600/20 [.dark_&]:from-rose-400/30 [.dark_&]:to-rose-500/20 rounded-full flex items-center justify-center animate-float delay-300 shadow-xl shadow-rose-500/30 [.dark_&]:shadow-rose-400/30 border border-rose-500/20 [.dark_&]:border-rose-400/20 backdrop-blur-sm">
                  <Monitor className="w-3 h-3 text-rose-600 [.dark_&]:text-rose-400 animate-pulse delay-300" />
                </div>
                
                {/* Enhanced Background Glow with Material Colors - Mobile Optimized */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-violet-500/15 to-emerald-500/20 [.dark_&]:from-blue-400/25 [.dark_&]:via-violet-400/20 [.dark_&]:to-emerald-400/25 rounded-full blur-xl sm:blur-2xl md:blur-3xl scale-105 sm:scale-110 md:scale-115 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-rose-500/10 [.dark_&]:from-cyan-400/15 [.dark_&]:via-transparent [.dark_&]:to-rose-400/15 rounded-full blur-lg sm:blur-xl md:blur-2xl scale-110 sm:scale-125 md:scale-130 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator with Material Colors */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-slate-600 [.dark_&]:text-slate-300 animate-bounce">
          <span className="text-xs sm:text-sm font-medium text-slate-600 [.dark_&]:text-slate-300">Scroll to explore</span>
          <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-slate-300/50 [.dark_&]:border-slate-600/50 rounded-full flex justify-center shadow-lg shadow-slate-500/20 [.dark_&]:shadow-slate-400/20 bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm">
            <div className="w-1.5 h-3 sm:h-4 bg-gradient-to-b from-blue-500 to-violet-500 [.dark_&]:from-blue-400 [.dark_&]:to-violet-400 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
