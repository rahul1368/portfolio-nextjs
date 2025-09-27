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
    <section id="contact" className={`${theme.section.padding} ${theme.background.section}`}>
      <AnimatedBackground />
      
      <div className={`relative z-10 ${theme.section.container}`}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            badge={contactData.header.badge}
            title={contactData.header.title}
            description={contactData.header.description}
          />
          
          <div className="grid lg:grid-cols-2 gap-12">
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
