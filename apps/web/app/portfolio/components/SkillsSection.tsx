"use client";

import { Card, CardContent, Badge } from "@repo/ui";
import { Rocket, Zap, Trophy, Sparkles, TrendingUp, Star } from "lucide-react";
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
    <section id="skills" className={`${theme.section.padding} relative overflow-hidden`}>
      <AnimatedBackground />
      
      {/* Subtle Background with Material Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-violet-50/10 [.dark_&]:from-slate-900/50 [.dark_&]:via-blue-900/10 [.dark_&]:to-violet-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/3 via-transparent to-cyan-500/3 [.dark_&]:from-emerald-400/5 [.dark_&]:via-transparent [.dark_&]:to-cyan-400/5"></div>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          <SectionHeader 
            badge={skillsData.header.badge}
            title={skillsData.header.title}
            description={skillsData.header.description}
          />
          
          {/* Enhanced Skills Grid with Better Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
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
          
          {/* Enhanced Proficiency Visualization with All Categories */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 [.dark_&]:from-blue-400/20 [.dark_&]:to-violet-400/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 [.dark_&]:text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-sans text-slate-900 [.dark_&]:text-white">Technical Proficiency</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl font-sans text-slate-600 [.dark_&]:text-slate-200 max-w-2xl mx-auto">
                Core competencies across modern technology stack with real-world experience
              </p>
                </div>
            
            {/* Dynamic Skills Cards by Category */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {skills.map((category, categoryIndex) => {
                // Filter proficiency data for this category
                const categorySkills = proficiencyData.filter(skill => 
                  skill.category.toLowerCase() === category.category.toLowerCase().split(' ')[0] ||
                  skill.category.toLowerCase() === category.category.toLowerCase().split(' ')[1] ||
                  skill.category.toLowerCase() === category.category.toLowerCase().split(' ')[2]
                );
                
                if (categorySkills.length === 0) return null;
                
                return (
                  <Card key={category.category} className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-blue-500/40 [.dark_&]:hover:border-blue-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70`}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-xl ${category.colorScheme === 'primary' ? 'bg-blue-500/10 group-hover:bg-blue-500/20 [.dark_&]:bg-blue-400/10 [.dark_&]:group-hover:bg-blue-400/20' : 
                          category.colorScheme === 'secondary' ? 'bg-slate-500/10 group-hover:bg-slate-500/20 [.dark_&]:bg-slate-400/10 [.dark_&]:group-hover:bg-slate-400/20' :
                          category.colorScheme === 'accent' ? 'bg-violet-500/10 group-hover:bg-violet-500/20 [.dark_&]:bg-violet-400/10 [.dark_&]:group-hover:bg-violet-400/20' :
                          category.colorScheme === 'warning' ? 'bg-amber-500/10 group-hover:bg-amber-500/20 [.dark_&]:bg-amber-400/10 [.dark_&]:group-hover:bg-amber-400/20' :
                          category.colorScheme === 'info' ? 'bg-cyan-500/10 group-hover:bg-cyan-500/20 [.dark_&]:bg-cyan-400/10 [.dark_&]:group-hover:bg-cyan-400/20' :
                          category.colorScheme === 'success' ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20 [.dark_&]:bg-emerald-400/10 [.dark_&]:group-hover:bg-emerald-400/20' :
                          category.colorScheme === 'destructive' ? 'bg-rose-500/10 group-hover:bg-rose-500/20 [.dark_&]:bg-rose-400/10 [.dark_&]:group-hover:bg-rose-400/20' :
                          'bg-blue-500/10 group-hover:bg-blue-500/20 [.dark_&]:bg-blue-400/10 [.dark_&]:group-hover:bg-blue-400/20'} flex items-center justify-center transition-all duration-300`}>
                          <Star className={`w-5 h-5 ${category.colorScheme === 'primary' ? 'text-blue-600 group-hover:text-blue-700 [.dark_&]:text-blue-400 [.dark_&]:group-hover:text-blue-300' : 
                            category.colorScheme === 'secondary' ? 'text-slate-600 group-hover:text-slate-700 [.dark_&]:text-slate-400 [.dark_&]:group-hover:text-slate-300' :
                            category.colorScheme === 'accent' ? 'text-violet-600 group-hover:text-violet-700 [.dark_&]:text-violet-400 [.dark_&]:group-hover:text-violet-300' :
                            category.colorScheme === 'warning' ? 'text-amber-600 group-hover:text-amber-700 [.dark_&]:text-amber-400 [.dark_&]:group-hover:text-amber-300' :
                            category.colorScheme === 'info' ? 'text-cyan-600 group-hover:text-cyan-700 [.dark_&]:text-cyan-400 [.dark_&]:group-hover:text-cyan-300' :
                            category.colorScheme === 'success' ? 'text-emerald-600 group-hover:text-emerald-700 [.dark_&]:text-emerald-400 [.dark_&]:group-hover:text-emerald-300' :
                            category.colorScheme === 'destructive' ? 'text-rose-600 group-hover:text-rose-700 [.dark_&]:text-rose-400 [.dark_&]:group-hover:text-rose-300' :
                            'text-blue-600 group-hover:text-blue-700 [.dark_&]:text-blue-400 [.dark_&]:group-hover:text-blue-300'} transition-all duration-300`} />
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-sans text-slate-900 [.dark_&]:text-slate-100 group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors duration-300">{category.category}</h4>
                      </div>
                      
                      <div className="space-y-4">
                        {categorySkills.slice(0, 6).map((item, index) => (
                          <div key={item.skill} className="group">
                            <div className="flex justify-between items-center mb-2">
                              <div className="flex items-center gap-2">
                                  <span className="text-sm sm:text-base font-semibold text-slate-900 [.dark_&]:text-slate-100">{item.skill}</span>
                                <Badge variant="secondary" className="text-xs bg-slate-100 [.dark_&]:bg-slate-700 text-slate-700 [.dark_&]:text-slate-300 border-slate-200 [.dark_&]:border-slate-600">
                                  {item.category}
                                </Badge>
                  </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-medium text-slate-600 [.dark_&]:text-slate-400">{item.years}</span>
                                <span className="text-xs sm:text-sm font-bold text-blue-600 [.dark_&]:text-blue-400">
                                  {parseInt(item.years)}/10
                                </span>
                          </div>
                        </div>
                            <div className="relative">
                              {/* Enhanced Progress Bar Background */}
                              <div className="w-full bg-slate-200/50 [.dark_&]:bg-slate-700/50 rounded-full h-4 overflow-hidden shadow-inner border border-slate-300/30 [.dark_&]:border-slate-600/30">
                                {/* Animated Progress Fill */}
                                <div 
                                  className={`h-4 rounded-full transition-all duration-1500 ease-out relative overflow-hidden ${
                                    parseInt(item.years) >= 7 ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-400 [.dark_&]:from-emerald-400 [.dark_&]:via-emerald-300 [.dark_&]:to-green-300' :
                                    parseInt(item.years) >= 5 ? 'bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 [.dark_&]:from-blue-400 [.dark_&]:via-blue-300 [.dark_&]:to-cyan-300' :
                                    parseInt(item.years) >= 3 ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 [.dark_&]:from-amber-400 [.dark_&]:via-amber-300 [.dark_&]:to-orange-300' :
                                    'bg-gradient-to-r from-rose-500 via-rose-400 to-pink-400 [.dark_&]:from-rose-400 [.dark_&]:via-rose-300 [.dark_&]:to-pink-300'
                                  } group-hover:scale-105 shadow-lg`}
                            style={{ 
                                    width: `${(parseInt(item.years) / 10) * 100}%`,
                                    animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`
                                  }}
                                >
                                  {/* Shimmer Effect */}
                                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 [.dark_&]:via-slate-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                                  
                                  {/* Animated Glow */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 [.dark_&]:from-blue-400/20 [.dark_&]:to-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                                </div>
                              </div>
                              
                              {/* Animated Dots for Visual Appeal */}
                              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-blue-500/60 [.dark_&]:bg-blue-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1.5 h-1.5 bg-violet-500/60 [.dark_&]:bg-violet-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced Learning Journey with Modern Design */}
          <div className="relative">
            <Card className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10 transition-all duration-500 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-emerald-500/5 [.dark_&]:from-blue-400/10 [.dark_&]:via-violet-400/10 [.dark_&]:to-emerald-400/10"></div>
              <CardContent className="relative py-8 sm:py-12 md:py-16">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                      <Rocket className="w-6 h-6 text-white animate-pulse" />
                    </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100">
                    {skillsData.learning.title}
                  </h3>
                </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {skillsData.learning.description}
                </p>
                </div>
                
                {/* Modern Topic Tags with Material Colors */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {skillsData.learning.topics.map((topic, index) => {
                    const colorSchemes = [
                      'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500/30 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25',
                      'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-500/30 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25',
                      'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-500/30 hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-500/25',
                      'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500/30 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25',
                      'bg-gradient-to-r from-rose-500 to-rose-600 text-white border-rose-500/30 hover:from-rose-600 hover:to-rose-700 shadow-lg shadow-rose-500/25'
                    ];
                    const colorScheme = colorSchemes[index % colorSchemes.length];
                    
                    return (
                    <Badge 
                      key={topic} 
                      variant="outline" 
                        className={`px-4 py-2 rounded-full border-2 transition-all duration-300 cursor-default hover:scale-105 font-semibold text-sm ${colorScheme}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {topic}
                    </Badge>
                    );
                  })}
                </div>
                
                {/* Enhanced Expertise Cards with Material Colors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {/* Technical Leadership Card */}
                  <Card className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-amber-500/20 [.dark_&]:border-amber-400/20 hover:border-amber-500/40 [.dark_&]:hover:border-amber-400/40 transition-all duration-300 group hover:shadow-xl hover:shadow-amber-500/10 [.dark_&]:hover:shadow-amber-400/10 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 [.dark_&]:from-amber-400 [.dark_&]:to-amber-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25 [.dark_&]:shadow-amber-400/25">
                        <Trophy className="w-6 h-6 text-white" />
                  </div>
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-amber-800 [.dark_&]:text-amber-200 mb-2">Technical Leadership</h4>
                          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-amber-700/90 [.dark_&]:text-amber-300/90">Leading engineering teams and architectural decisions</p>
                    </CardContent>
                  </Card>
                  
                  {/* Performance Optimization Card */}
                  <Card className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 [.dark_&]:border-emerald-400/20 hover:border-emerald-500/40 [.dark_&]:hover:border-emerald-400/40 transition-all duration-300 group hover:shadow-xl hover:shadow-emerald-500/10 [.dark_&]:hover:shadow-emerald-400/10 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 [.dark_&]:from-emerald-400 [.dark_&]:to-emerald-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/25 [.dark_&]:shadow-emerald-400/25">
                        <Zap className="w-6 h-6 text-white" />
                  </div>
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-emerald-800 [.dark_&]:text-emerald-200 mb-2">Performance Optimization</h4>
                          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-emerald-700/90 [.dark_&]:text-emerald-300/90">Building scalable, high-performance applications</p>
                    </CardContent>
                  </Card>
                  
                  {/* Future-Ready Card */}
                  <Card className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 [.dark_&]:border-violet-400/20 hover:border-violet-500/40 [.dark_&]:hover:border-violet-400/40 transition-all duration-300 group hover:shadow-xl hover:shadow-violet-500/10 [.dark_&]:hover:shadow-violet-400/10 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 sm:col-span-2 lg:col-span-1`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 [.dark_&]:from-violet-400 [.dark_&]:to-violet-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/25 [.dark_&]:shadow-violet-400/25">
                        <Sparkles className="w-6 h-6 text-white" />
                  </div>
                          <h4 className="text-sm sm:text-base md:text-lg font-semibold text-violet-800 [.dark_&]:text-violet-200 mb-2">Future-Ready</h4>
                          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-violet-700/90 [.dark_&]:text-violet-300/90">Embracing emerging technologies and trends</p>
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
