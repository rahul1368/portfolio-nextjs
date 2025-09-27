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
    <section id="experience" className={`${theme.section.padding} ${theme.background.section} relative overflow-hidden`}>
      <AnimatedBackground />
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .experience-card {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .experience-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stats-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          <SectionHeader 
            badge={experienceData.header.badge}
            title={experienceData.header.title}
            description={experienceData.header.description}
          />
          
          {/* Enhanced Experience Stats with Modern Design */}
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Main Stats Card */}
              <Card className="bg-card border border-border hover:border-primary/40 overflow-hidden lg:col-span-2 group stats-card animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative py-8 sm:py-10 lg:py-12">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                      </div>
                      <div className={`${theme.text.h3} font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300`}>
                        {totalYears}+
                      </div>
                      <div className={`${theme.text.mutedSmall} font-semibold uppercase tracking-wide text-muted-foreground`}>Years Experience</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                      </div>
                      <div className={`${theme.text.h3} font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300`}>
                        {totalCompanies}
                      </div>
                      <div className={`${theme.text.mutedSmall} font-semibold uppercase tracking-wide text-muted-foreground`}>Companies</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                      </div>
                      <div className={`${theme.text.h3} font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300`}>
                        {totalProjects}+
                      </div>
                      <div className={`${theme.text.mutedSmall} font-semibold uppercase tracking-wide text-muted-foreground`}>Projects</div>
                    </div>
                    
                    <div className="text-center group/stat">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/stat:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                      </div>
                      <div className={`${theme.text.h3} font-bold text-foreground mb-2 group-hover/stat:text-primary transition-colors duration-300`}>
                        100%
                      </div>
                      <div className={`${theme.text.mutedSmall} font-semibold uppercase tracking-wide text-muted-foreground`}>Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Career Journey Card */}
              <Card className="bg-card border border-border hover:border-primary/40 overflow-hidden group stats-card animate-slide-in-right shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative py-8 sm:py-10 lg:py-12 h-full flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                      <Users className="w-8 h-8 sm:w-10 sm:h-10" />
                    </div>
                    <h3 className={`${theme.text.h4} font-bold text-foreground mb-2`}>Career Journey</h3>
                    <p className={`${theme.text.mutedBody} leading-relaxed text-muted-foreground`}>
                      From Frontend Developer to Senior Full-Stack Developer, working with industry leaders
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className={`${theme.text.mutedSmall} font-medium`}>5+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/20">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className={`${theme.text.mutedSmall} font-medium`}>5 Leading Companies</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/5 border border-secondary/20">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className={`${theme.text.mutedSmall} font-medium`}>Multiple Industries</span>
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
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <Card className="bg-card border border-border hover:border-primary/40 overflow-hidden group stats-card animate-scale-in shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative py-12 sm:py-16 lg:py-20">
                <div className="text-center mb-12 sm:mb-16">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className={`${theme.text.h3} text-foreground font-bold`}>Career Highlights</h3>
                  </div>
                  <p className={`${theme.text.bodyLarge} text-muted-foreground max-w-4xl mx-auto leading-relaxed`}>
                    Throughout my career, I've worked with leading companies across fintech, e-commerce, edtech, and domain management, consistently delivering high-quality solutions.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  <Card className="bg-card border border-border hover:border-primary/40 group/card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <h4 className={`${theme.text.h5} font-bold mb-3 text-foreground group-hover/card:text-primary transition-colors duration-300`}>Career Growth</h4>
                      <p className={`${theme.text.mutedBody} leading-relaxed text-muted-foreground`}>
                        Progressed from Frontend Developer to Senior Full-Stack Developer at GoDaddy, demonstrating consistent growth and technical advancement.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border border-border hover:border-primary/40 group/card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Award className="w-8 h-8" />
                      </div>
                      <h4 className={`${theme.text.h5} font-bold mb-3 text-foreground group-hover/card:text-primary transition-colors duration-300`}>Leadership</h4>
                      <p className={`${theme.text.mutedBody} leading-relaxed text-muted-foreground`}>
                        Led code reviews and mentored junior developers at GoDaddy and MetaMap, contributing to team growth and knowledge sharing.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card border border-border hover:border-primary/40 group/card sm:col-span-2 lg:col-span-1 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover/card:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                        <Briefcase className="w-8 h-8" />
                      </div>
                      <h4 className={`${theme.text.h5} font-bold mb-3 text-foreground group-hover/card:text-primary transition-colors duration-300`}>Diverse Experience</h4>
                      <p className={`${theme.text.mutedBody} leading-relaxed text-muted-foreground`}>
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
