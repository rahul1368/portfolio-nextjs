"use client";

import { Button } from "@repo/ui";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Input } from "@repo/ui";
import { Label } from "@repo/ui";
import { Textarea } from "@repo/ui";
import { theme } from "../theme";
import { getContactData } from "../lib/content";

export function ContactSection() {
  const contactData = getContactData();
  return (
    <section id="contact" className={`${theme.section.padding} ${theme.background.section}`}>
      {/* Animated Background */}
      <div className={theme.background.animated}>
        <div className={theme.background.blur1}></div>
        <div className={theme.background.blur2}></div>
      </div>
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center ${theme.section.spacing}`}>
            <div className={theme.header.badge.container}>
              <div className={theme.header.badge.dot}></div>
              <Badge variant="outline" className={theme.header.badge.badge}>
                {contactData.header.badge}
              </Badge>
            </div>
            <h2 className={theme.header.title.main}>
              {contactData.header.title.split(' ').slice(0, -1).join(' ')} <span className={theme.header.title.gradient}>{contactData.header.title.split(' ').slice(-1)}</span>
            </h2>
            <p className={`${theme.header.subtitle} text-muted-foreground`}>
              {contactData.header.description}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent text-primary">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground text-lg">
                  Choose your preferred way to connect with me
                </p>
              </div>
              
              <div className="space-y-4">
                {contactData.methods.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`${theme.card.base} hover:shadow-lg hover:scale-[1.02] transition-all duration-300 bg-card border border-border/50 group`}
                    style={{ animationDelay: theme.animation.stagger(index) }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              {method.title === 'Email' && '📧'}
                              {method.title === 'Phone' && '📞'}
                              {method.title === 'Location' && '📍'}
                              {method.title === 'LinkedIn' && '💼'}
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg">{method.title}</h4>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                          <div className="pl-13">
                            <p className="text-sm font-medium text-foreground">{method.value}</p>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="ml-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                          asChild
                        >
                          <a href={method.href} target="_blank" rel="noopener noreferrer">
                            {method.action}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent text-primary">
                  Send a Message
                </h3>
                <p className="text-muted-foreground text-lg">
                  Drop me a line and I&apos;ll get back to you
                </p>
              </div>
              
              <Card className={`${theme.card.base} bg-card/80 backdrop-blur-sm border border-border/50`}>
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      📧
                    </div>
                    {contactData.form.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {contactData.form.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        {contactData.form.fields.name}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={contactData.form.fields.name}
                        className="h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {contactData.form.fields.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={contactData.form.fields.email}
                        className="h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      {contactData.form.fields.subject}
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder={contactData.form.fields.subject}
                      className="h-12 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      {contactData.form.fields.message}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={contactData.form.fields.message}
                      rows={5}
                      className="resize-none border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <Button className={`w-full h-12 text-base font-medium ${theme.button.primary} group`}>
                    <span>{contactData.form.button}</span>
                    <svg className={theme.button.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
