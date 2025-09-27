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
    <section id="hero" className={`relative min-h-screen flex items-center justify-center ${theme.background.section}`}>
      <AnimatedBackground />
      
      <div className={`relative z-10 ${theme.section.container} py-12 sm:py-16 md:py-20`}>
        <div className={theme.section.maxWidth}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <StatusBadge status={heroData.status} />
              <HeroHeading name={heroData.name} title={heroData.title} />
              
              {/* Description */}
              <p className={`${theme.text.bodyLarge} ${theme.text.muted} leading-relaxed max-w-lg`}>
                {heroData.description}
              </p>
              
              <HeroActions 
                primaryCta={heroData.primaryCta} 
                secondaryCta={heroData.secondaryCta} 
              />
              
              <HeroStats stats={heroData.stats} />
            </div>
            
            {/* Right Content - Avatar & Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Avatar */}
                <div className="relative z-10">
                  <Avatar className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 mx-auto">
                    <AvatarImage 
                      src={heroData.avatar} 
                      alt={heroData.name} 
                      className="object-cover"
                    />
                    <AvatarFallback className={theme.text.avatarFallback}>{heroData.fallback}</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Floating Elements - Hidden on very small screens */}
                <div className="hidden sm:block absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                  <Monitor className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="hidden sm:block absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full flex items-center justify-center animate-float delay-1000">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-secondary" />
                </div>
                <div className="hidden sm:block absolute top-1/2 -left-4 sm:-left-6 md:-left-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float delay-500">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent" />
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl sm:blur-3xl scale-105 sm:scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground animate-bounce">
          <span className={`${theme.text.mutedSmall} font-medium`}>Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-muted-foreground/50 rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
