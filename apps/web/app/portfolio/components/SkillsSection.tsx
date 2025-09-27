"use client";

import { Card, CardContent, Badge } from "@repo/ui";
import { Rocket, Zap, Trophy, Sparkles, TrendingUp, Star, Award } from "lucide-react";
import { theme } from "../theme";
import { getSkillsData } from "../lib/content";
import { AnimatedBackground } from "./shared/AnimatedBackground";
import { SectionHeader } from "./shared/SectionHeader";
import { SkillCategoryCard } from "./skills/SkillCategoryCard";

export function SkillsSection() {
  const skillsData = getSkillsData();
  const skills = skillsData.categories;

  const proficiencyData = skillsData.proficiency;

  return (
    <section id="skills" className={`${theme.section.padding} ${theme.background.section}`}>
      <AnimatedBackground />
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          <SectionHeader 
            badge={skillsData.header.badge}
            title={skillsData.header.title}
            description={skillsData.header.description}
          />
          
          {/* Modern Skills Grid with Enhanced Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {skills.map((category, index) => (
              <SkillCategoryCard
                key={category.category}
                category={category.category}
                icon={category.icon}
                colorScheme={category.colorScheme}
                skills={[...category.skills]}
                index={index}
              />
            ))}
          </div>
          
          {/* Modern Proficiency Visualization */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className={`${theme.text.h3} text-foreground`}>Technical Proficiency</h3>
              </div>
              <p className={`${theme.text.bodyLarge} text-muted-foreground max-w-2xl mx-auto`}>
                Core competencies across modern technology stack with real-world experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills Progress Cards */}
              <Card className={`${theme.card.base} bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20 transition-all duration-300`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className={`${theme.text.h5} text-foreground`}>Core Technologies</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {proficiencyData.slice(0, 4).map((item, index) => (
                      <div key={item.skill} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`${theme.text.label} font-semibold`}>{item.skill}</span>
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`${theme.text.mutedSmall} font-medium`}>{item.years}</span>
                            <span className={`${theme.text.mutedSmall} font-bold`}>{item.level}%</span>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                            <div 
                              className="h-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-1000 ease-out group-hover:from-primary group-hover:to-accent"
                              style={{ 
                                width: `${item.level}%`,
                                animationDelay: `${index * 0.1}s`
                              }}
                            ></div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`${theme.card.base} bg-gradient-to-br from-background to-muted/20 border-2 hover:border-primary/20 transition-all duration-300`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className={`${theme.text.h5} text-foreground`}>Specialized Skills</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {proficiencyData.slice(4).map((item, index) => (
                      <div key={item.skill} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`${theme.text.label} font-semibold`}>{item.skill}</span>
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`${theme.text.mutedSmall} font-medium`}>{item.years}</span>
                            <span className={`${theme.text.mutedSmall} font-bold`}>{item.level}%</span>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                            <div 
                              className="h-2.5 rounded-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-1000 ease-out group-hover:from-accent group-hover:to-secondary"
                              style={{ 
                                width: `${item.level}%`,
                                animationDelay: `${(index + 4) * 0.1}s`
                              }}
                            ></div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Enhanced Learning Journey with Modern Design */}
          <div className="relative">
            <Card className={`${theme.card.base} bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary/10 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
              <CardContent className="relative py-8 sm:py-12 md:py-16">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white animate-pulse" />
                    </div>
                    <h3 className={`${theme.text.h3} font-bold text-foreground`}>
                      {skillsData.learning.title}
                    </h3>
                  </div>
                  <p className={`${theme.text.bodyLarge} text-muted-foreground max-w-3xl mx-auto leading-relaxed`}>
                    {skillsData.learning.description}
                  </p>
                </div>
                
                {/* Modern Topic Tags */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {skillsData.learning.topics.map((topic, index) => (
                    <Badge 
                      key={topic} 
                      variant="outline" 
                      className={`px-4 py-2 rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 font-medium text-sm`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                {/* Enhanced Expertise Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <Card className={`${theme.card.base} bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <h4 className={`${theme.text.h6} mb-2 font-semibold`}>Technical Leadership</h4>
                      <p className={`${theme.text.mutedSmall} leading-relaxed`}>Leading engineering teams and architectural decisions</p>
                    </CardContent>
                  </Card>
                  
                  <Card className={`${theme.card.base} bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 transition-all duration-300 group`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h4 className={`${theme.text.h6} mb-2 font-semibold`}>Performance Optimization</h4>
                      <p className={`${theme.text.mutedSmall} leading-relaxed`}>Building scalable, high-performance applications</p>
                    </CardContent>
                  </Card>
                  
                  <Card className={`${theme.card.base} bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/40 transition-all duration-300 group sm:col-span-2 lg:col-span-1`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h4 className={`${theme.text.h6} mb-2 font-semibold`}>Future-Ready</h4>
                      <p className={`${theme.text.mutedSmall} leading-relaxed`}>Embracing emerging technologies and trends</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
