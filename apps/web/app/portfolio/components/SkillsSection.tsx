"use client";

import { Badge } from "@repo/ui";
import { Separator } from "@repo/ui";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { theme, colorSchemes } from "../theme";
import { getSkillsData } from "../lib/content";

export function SkillsSection() {
  const skillsData = getSkillsData();
  const skills = skillsData.categories.map(category => ({
    ...category,
    colorScheme: colorSchemes[category.colorScheme as keyof typeof colorSchemes]
  }));
  return (
    <section id="skills" className={`${theme.section.padding} ${theme.background.section}`}>
      {/* Animated Background */}
      <div className={theme.background.animated}>
        <div className={theme.background.blur1}></div>
        <div className={theme.background.blur2}></div>
      </div>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className={theme.section.maxWidth}>
          {/* Section Header */}
          <div className={`text-center ${theme.section.spacing}`}>
            <div className={theme.header.badge.container}>
              <div className={theme.header.badge.dot}></div>
              <Badge variant="outline" className={theme.header.badge.badge}>
                {skillsData.header.badge}
              </Badge>
            </div>
            <h2 className={theme.header.title.main}>
              {skillsData.header.title.split(' ').slice(0, -1).join(' ')} <span className={theme.header.title.gradient}>{skillsData.header.title.split(' ').slice(-1)}</span>
            </h2>
            <p className={`${theme.header.subtitle} text-muted-foreground`}>
              {skillsData.header.description}
            </p>
          </div>
          
          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((category, index) => (
              <Card 
                key={category.category} 
                className={`${theme.card.base} ${theme.card.hover} ${category.colorScheme.border} hover:border-opacity-40 group relative overflow-hidden`}
                style={{ animationDelay: theme.animation.stagger(index) }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                        {category.category}
                      </CardTitle>
                      <p className={`${theme.text.small} text-muted-foreground leading-relaxed`}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs px-2.5 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 font-medium"
                        style={{ animationDelay: theme.animation.staggerSkills(index, skillIndex) }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Skill count indicator */}
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{category.skills.length} technologies</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Enhanced Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.colorScheme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg pointer-events-none`}></div>
              </Card>
            ))}
          </div>
          
          {/* Enhanced Skills Progress Visualization */}
          <div className="mb-16">
            <Card className={`${theme.card.base} bg-gradient-to-r from-primary/5 to-secondary/5`}>
              <CardContent className="py-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Technical Proficiency
                  </h3>
                  <p className="text-muted-foreground text-lg">Core competencies across modern technology stack</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-center mb-6">Development & Architecture</h4>
                    {[
                      { skill: "React/Next.js", level: 95, color: "bg-blue-500", years: "7+" },
                      { skill: "TypeScript", level: 92, color: "bg-blue-600", years: "6+" },
                      { skill: "Node.js/Express", level: 90, color: "bg-green-500", years: "7+" },
                      { skill: "Python/FastAPI", level: 88, color: "bg-yellow-500", years: "5+" },
                      { skill: "System Design", level: 85, color: "bg-purple-500", years: "5+" },
                      { skill: "Microservices", level: 82, color: "bg-pink-500", years: "4+" }
                    ].map((item, index) => (
                      <div key={item.skill} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{item.skill}</span>
                            <span className="text-xs text-muted-foreground">({item.years})</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${item.color} transition-all duration-1000 ease-out shadow-sm`}
                            style={{ 
                              width: `${item.level}%`,
                              animationDelay: theme.animation.stagger(index)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-center mb-6">Cloud & DevOps</h4>
                    {[
                      { skill: "AWS/GCP", level: 90, color: "bg-orange-500", years: "5+" },
                      { skill: "Docker/K8s", level: 88, color: "bg-cyan-500", years: "4+" },
                      { skill: "Terraform", level: 85, color: "bg-emerald-500", years: "3+" },
                      { skill: "CI/CD Pipelines", level: 87, color: "bg-indigo-500", years: "4+" },
                      { skill: "Monitoring/Observability", level: 80, color: "bg-red-500", years: "3+" },
                      { skill: "AI/ML Integration", level: 75, color: "bg-violet-500", years: "2+" }
                    ].map((item, index) => (
                      <div key={item.skill} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{item.skill}</span>
                            <span className="text-xs text-muted-foreground">({item.years})</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${item.color} transition-all duration-1000 ease-out shadow-sm`}
                            style={{ 
                              width: `${item.level}%`,
                              animationDelay: theme.animation.stagger(index + 6)
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Learning Journey */}
          <div className="text-center">
            <Card className={`max-w-6xl mx-auto ${theme.card.base} bg-gradient-to-r from-primary/5 to-secondary/5`}>
              <CardContent className="py-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="text-5xl animate-bounce">🚀</div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {skillsData.learning.title}
                  </h3>
                </div>
                <p className={`${theme.text.large} text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed`}>
                  {skillsData.learning.description}
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {skillsData.learning.topics.map((topic, index) => (
                    <Badge 
                      key={topic} 
                      variant="outline" 
                      className="text-sm px-4 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105 font-medium"
                      style={{ animationDelay: theme.animation.stagger(index) }}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                {/* Additional expertise indicators */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl mb-2">🏆</div>
                    <h4 className="font-semibold mb-1">Technical Leadership</h4>
                    <p className="text-sm text-muted-foreground">Leading engineering teams and architectural decisions</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold mb-1">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">Building scalable, high-performance applications</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30">
                    <div className="text-2xl mb-2">🔮</div>
                    <h4 className="font-semibold mb-1">Future-Ready</h4>
                    <p className="text-sm text-muted-foreground">Embracing emerging technologies and trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
