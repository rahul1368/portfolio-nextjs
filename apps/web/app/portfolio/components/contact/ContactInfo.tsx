"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { theme } from "../../theme";
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
      href: `mailto:${email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      href: "#"
    },
    {
      icon: Clock,
      label: "Availability",
      value: availability,
      href: "#"
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className={`${theme.text.h4} font-bold mb-3 sm:mb-4`}>Get in touch</h3>
        <p className={`${theme.text.mutedBody} leading-relaxed`}>
          I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and design.
        </p>
      </div>
      
      <div className="grid gap-3 sm:gap-4">
        {contactItems.map((item, index) => (
          <Card key={index} className={`${theme.card.base} ${theme.card.hover} group`}>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className={theme.text.mutedSmall}>{item.label}</p>
                  <a 
                    href={item.href}
                    className={`${theme.text.body} text-foreground hover:text-primary transition-colors`}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
