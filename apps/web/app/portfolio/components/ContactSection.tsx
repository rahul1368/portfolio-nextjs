"use client";

import { theme } from "../theme";
import { getContactData } from "../lib/content";
import { AnimatedBackground } from "./shared/AnimatedBackground";
import { SectionHeader } from "./shared/SectionHeader";
import { ContactForm } from "./contact/ContactForm";
import { ContactInfo } from "./contact/ContactInfo";

export function ContactSection() {
  const contactData = getContactData();
  return (
    <section id="contact" className={`${theme.section.padding} relative overflow-hidden`}>
      <AnimatedBackground />
      
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 via-transparent to-cyan-500/3 [.dark_&]:from-emerald-400/5 [.dark_&]:via-transparent [.dark_&]:to-cyan-400/5"></div>
      
      <div className={`relative z-10 ${theme.section.container} overflow-hidden`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader 
            badge={contactData.header.badge}
            title={contactData.header.title}
            description={contactData.header.description}
          />
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <ContactInfo 
              email={contactData.methods[0].value}
              phone={contactData.methods[1].value}
              location={contactData.methods[2].value}
              availability={contactData.methods[3].value}
            />
            
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
