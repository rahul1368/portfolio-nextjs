"use client";

import { Button } from "@repo/ui";
import { Avatar, AvatarImage, AvatarFallback } from "@repo/ui";
import { Badge } from "@repo/ui";
import { theme } from "../theme";
import { getHeroData } from "../lib/content";

export function HeroSection() {
  const heroData = getHeroData();
  
  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center ${theme.background.section}`}>
      {/* Animated Background */}
      <div className={theme.background.animated}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className={theme.background.blur1}></div>
        <div className={theme.background.blur2}></div>
      </div>
      
      <div className={`relative z-10 ${theme.section.container} py-20`}>
        <div className={theme.section.maxWidth}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className={theme.header.badge.container}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Badge variant="secondary" className={theme.header.badge.badge}>
                  {heroData.status}
                </Badge>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className={`block ${theme.header.title.gradient}`}>
                    {heroData.name}
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl font-light text-muted-foreground">
                  <span className="inline-block animate-fade-in-up">{heroData.title}</span>
                  <span className="mx-2">•</span>
                  <span className="inline-block animate-fade-in-up delay-200">UI/UX Designer</span>
                  <span className="mx-2">•</span>
                  <span className="inline-block animate-fade-in-up delay-400">Problem Solver</span>
                </div>
              </div>
              
              {/* Description */}
              <p className={`${theme.text.large} text-muted-foreground leading-relaxed max-w-lg`}>
                {heroData.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className={`${theme.button.primary} group`}>
                  <span>{heroData.primaryCta}</span>
                  <svg className={theme.button.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button variant="outline" size="lg" className={`${theme.button.secondary} group`}>
                  <span>{heroData.secondaryCta}</span>
                  <svg className={theme.button.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{heroData.stats.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{heroData.stats.experience}</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{heroData.stats.satisfaction}</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Avatar & Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Avatar */}
                <div className="relative z-10">
                  <Avatar className="h-80 w-80 mx-auto">
                    <AvatarImage 
                      src={heroData.avatar} 
                      alt={heroData.name} 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl font-bold">{heroData.fallback}</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-float">
                  <div className="text-2xl">💻</div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center animate-float delay-1000">
                  <div className="text-xl">🎨</div>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center animate-float delay-500">
                  <div className="text-lg">⚡</div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
