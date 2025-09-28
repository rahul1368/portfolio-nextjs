"use client";

import { Card, CardContent } from "@repo/ui";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export function ContactInfo({ email, phone, location, availability }: ContactInfoProps) {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "emerald"
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "blue"
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      href: "#",
      color: "violet"
    },
    {
      icon: Clock,
      label: "Availability",
      value: availability,
      href: "#",
      color: "amber"
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-hidden">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 [.dark_&]:text-slate-100">Get in touch</h3>
        <p className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 leading-relaxed">
          I&apos;m always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
        </p>
      </div>
      
      <div className="grid gap-3 sm:gap-4 w-full">
        {contactItems.map((item, index) => {
          const getColorClasses = (color: string) => {
            switch (color) {
              case 'emerald':
                return {
                  card: 'hover:border-emerald-500/30 [.dark_&]:hover:border-emerald-400/30 hover:shadow-emerald-500/10 [.dark_&]:hover:shadow-emerald-400/10',
                  icon: 'bg-emerald-500/10 [.dark_&]:bg-emerald-400/10 text-emerald-600 [.dark_&]:text-emerald-400',
                  link: 'hover:text-emerald-600 [.dark_&]:hover:text-emerald-400'
                };
              case 'blue':
                return {
                  card: 'hover:border-blue-500/30 [.dark_&]:hover:border-blue-400/30 hover:shadow-blue-500/10 [.dark_&]:hover:shadow-blue-400/10',
                  icon: 'bg-blue-500/10 [.dark_&]:bg-blue-400/10 text-blue-600 [.dark_&]:text-blue-400',
                  link: 'hover:text-blue-600 [.dark_&]:hover:text-blue-400'
                };
              case 'violet':
                return {
                  card: 'hover:border-violet-500/30 [.dark_&]:hover:border-violet-400/30 hover:shadow-violet-500/10 [.dark_&]:hover:shadow-violet-400/10',
                  icon: 'bg-violet-500/10 [.dark_&]:bg-violet-400/10 text-violet-600 [.dark_&]:text-violet-400',
                  link: 'hover:text-violet-600 [.dark_&]:hover:text-violet-400'
                };
              case 'amber':
                return {
                  card: 'hover:border-amber-500/30 [.dark_&]:hover:border-amber-400/30 hover:shadow-amber-500/10 [.dark_&]:hover:shadow-amber-400/10',
                  icon: 'bg-amber-500/10 [.dark_&]:bg-amber-400/10 text-amber-600 [.dark_&]:text-amber-400',
                  link: 'hover:text-amber-600 [.dark_&]:hover:text-amber-400'
                };
              default:
                return {
                  card: 'hover:border-emerald-500/30 [.dark_&]:hover:border-emerald-400/30 hover:shadow-emerald-500/10 [.dark_&]:hover:shadow-emerald-400/10',
                  icon: 'bg-emerald-500/10 [.dark_&]:bg-emerald-400/10 text-emerald-600 [.dark_&]:text-emerald-400',
                  link: 'hover:text-emerald-600 [.dark_&]:hover:text-emerald-400'
                };
            }
          };
          
          const colors = getColorClasses(item.color);
          
          return (
            <Card key={index} className={`bg-white/50 [.dark_&]:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 [.dark_&]:border-slate-700/50 hover:shadow-lg hover:bg-white/70 [.dark_&]:hover:bg-slate-800/70 transition-all duration-300 group w-full max-w-full overflow-hidden ${colors.card}`}>
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${colors.icon}`}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-slate-600 [.dark_&]:text-slate-400">{item.label}</p>
                    <a 
                      href={item.href}
                      className={`text-sm sm:text-base text-slate-900 [.dark_&]:text-slate-100 transition-colors break-words ${colors.link}`}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
