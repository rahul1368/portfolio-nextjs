"use client";

import { Card, CardContent } from "@repo/ui";
import { Briefcase, TrendingUp, Award, Users, Clock } from "lucide-react";
import { theme } from "../../theme";
import { getExperienceData } from "../../lib/content";
import { AnimatedBackground } from "../shared/AnimatedBackground";
import { SectionHeader } from "../shared/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  const experienceData = getExperienceData();
  
  // Calculate experience stats
  const totalYears = 5;
  const totalCompanies = experienceData.experiences.length;
  const totalProjects = 50;

  return (
    <section id="experience" className={`${theme.section.padding} relative overflow-hidden`}>
      <AnimatedBackground />
      
      {/* Subtle Background with Material Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-violet-50/10 [.dark_&]:from-slate-900/50 [.dark_&]:via-blue-900/10 [.dark_&]:to-violet-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/3 via-transparent to-cyan-500/3 [.dark_&]:from-emerald-400/5 [.dark_&]:via-transparent [.dark_&]:to-cyan-400/5"></div>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          <SectionHeader 
            badge={experienceData.header.badge}
            title={experienceData.header.title}
            description={experienceData.header.description}
          />
          
          {/* Enhanced Experience Stats with Modern Design */}
          <div className="mb-20 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Stats Card */}
              <Card className="lg:col-span-2 group stats-card animate-fade-in-up bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10 transition-all duration-500 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/3 [.dark_&]:from-blue-400/10 [.dark_&]:via-transparent [.dark_&]:to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative py-12 sm:py-16 lg:py-20">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                        <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2 group-hover/stat:text-blue-600 [.dark_&]:group-hover/stat:text-blue-400 transition-colors duration-300">
                        {totalYears}+
                      </div>
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 [.dark_&]:text-slate-400">Years Experience</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                        <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2 group-hover/stat:text-emerald-600 [.dark_&]:group-hover/stat:text-emerald-400 transition-colors duration-300">
                        {totalCompanies}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 [.dark_&]:text-slate-400">Companies</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/20">
                        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2 group-hover/stat:text-violet-600 [.dark_&]:group-hover/stat:text-violet-400 transition-colors duration-300">
                        {totalProjects}+
                      </div>
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 [.dark_&]:text-slate-400">Projects</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2 group-hover/stat:text-amber-600 [.dark_&]:group-hover/stat:text-amber-400 transition-colors duration-300">
                        100%
                      </div>
                      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-600 [.dark_&]:text-slate-400">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Career Journey Card */}
              <Card className="group stats-card animate-slide-in-right bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 [.dark_&]:hover:shadow-cyan-400/10 transition-all duration-500 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/3 [.dark_&]:from-cyan-400/10 [.dark_&]:via-transparent [.dark_&]:to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative py-12 sm:py-16 lg:py-20 h-full flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2">Career Journey</h3>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300">
                      From Frontend Developer to Senior Full-Stack Developer, working with industry leaders
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/5 border border-blue-500/20 [.dark_&]:bg-blue-400/10 [.dark_&]:border-blue-400/30">
                      <div className="w-2 h-2 rounded-full bg-blue-500 [.dark_&]:bg-blue-400"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 [.dark_&]:text-slate-300">5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 [.dark_&]:bg-emerald-400/10 [.dark_&]:border-emerald-400/30">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 [.dark_&]:bg-emerald-400"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 [.dark_&]:text-slate-300">5 Leading Companies</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-violet-500/5 border border-violet-500/20 [.dark_&]:bg-violet-400/10 [.dark_&]:border-violet-400/30">
                      <div className="w-2 h-2 rounded-full bg-violet-500 [.dark_&]:bg-violet-400"></div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 [.dark_&]:text-slate-300">Multiple Industries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Enhanced Experience Grid with 2 Cards Per Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {experienceData.experiences.map((experience, index) => (
              <div key={index} className="relative experience-card animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <ExperienceCard
                  company={experience.company}
                  position={experience.position}
                  duration={experience.duration}
                  location={experience.location}
                  type={experience.type}
                  description={experience.description}
                  achievements={experience.achievements}
                  technologies={experience.technologies}
                  logo={experience.logo}
                  website={experience.website}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Enhanced Career Highlights */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <Card className="group stats-card animate-scale-in bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-rose-500/10 [.dark_&]:hover:shadow-rose-400/10 transition-all duration-500 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-amber-500/3 [.dark_&]:from-rose-400/10 [.dark_&]:via-transparent [.dark_&]:to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative py-16 sm:py-20 lg:py-24">
                <div className="text-center mb-16 sm:mb-20">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100">Career Highlights</h3>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 [.dark_&]:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                    Throughout my career, I&apos;ve worked with leading companies across fintech, e-commerce, edtech, and domain management, consistently delivering high-quality solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <Card className="group/card bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-emerald-500/30 [.dark_&]:hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/10 [.dark_&]:hover:shadow-emerald-400/10 transition-all duration-300 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 [.dark_&]:from-emerald-400 [.dark_&]:to-emerald-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20 [.dark_&]:shadow-emerald-400/20">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900 [.dark_&]:text-slate-100 group-hover/card:text-emerald-600 [.dark_&]:group-hover/card:text-emerald-400 transition-colors duration-300">Career Growth</h4>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300">
                        Progressed from Frontend Developer to Senior Full-Stack Developer at GoDaddy, demonstrating consistent growth and technical advancement.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group/card bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30 hover:shadow-lg hover:shadow-violet-500/10 [.dark_&]:hover:shadow-violet-400/10 transition-all duration-300 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 [.dark_&]:from-violet-400 [.dark_&]:to-violet-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-violet-500/20 [.dark_&]:shadow-violet-400/20">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900 [.dark_&]:text-slate-100 group-hover/card:text-violet-600 [.dark_&]:group-hover/card:text-violet-400 transition-colors duration-300">Leadership</h4>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300">
                        Led code reviews and mentored junior developers at GoDaddy and MetaMap, contributing to team growth and knowledge sharing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="group/card sm:col-span-2 lg:col-span-1 bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:border-amber-500/30 [.dark_&]:hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10 [.dark_&]:hover:shadow-amber-400/10 transition-all duration-300 hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 [.dark_&]:from-amber-400 [.dark_&]:to-amber-500 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/20 [.dark_&]:shadow-amber-400/20">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900 [.dark_&]:text-slate-100 group-hover/card:text-amber-600 [.dark_&]:group-hover/card:text-amber-400 transition-colors duration-300">Diverse Experience</h4>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 [.dark_&]:text-slate-300">
                        Worked across fintech, e-commerce, edtech, and domain management platforms, gaining expertise in multiple industries.
                      </p>
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
