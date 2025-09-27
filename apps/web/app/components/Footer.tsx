"use client";

import { Separator } from "@repo/ui";
import { theme } from '../portfolio/theme';

interface FooterProps {
  brand: {
    name: string;
    description: string;
  };
  copyright: string;
}

export function Footer({ brand, copyright }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 md:py-16 lg:py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className={`${theme.text.h5} font-semibold mb-3 sm:mb-4`}>{brand.name}</h3>
            <p className={`${theme.text.mutedBody} leading-relaxed`}>
              {brand.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className={`${theme.text.h6} font-semibold mb-3 sm:mb-4`}>Quick Links</h4>
            <div className="space-y-2">
              <a href="/portfolio" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Portfolio</a>
              <a href="#experience" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Experience</a>
              <a href="#projects" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Projects</a>
              <a href="#skills" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Skills</a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className={`${theme.text.h6} font-semibold mb-3 sm:mb-4`}>Services</h4>
            <div className="space-y-2">
              <a href="#" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Consulting</a>
              <a href="#" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Development</a>
              <a href="#" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Architecture</a>
              <a href="#" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Team Leadership</a>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className={`${theme.text.h6} font-semibold mb-3 sm:mb-4`}>Connect</h4>
            <div className="space-y-2">
              <a href="mailto:contact@rahulchoudhary.dev" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Email</a>
              <a href="https://linkedin.com/in/rahulchoudhary" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>LinkedIn</a>
              <a href="https://github.com/rahulchoudhary" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>GitHub</a>
              <a href="https://twitter.com/rahulchoudhary" className={`block ${theme.text.mutedBody} hover:underline hover:text-foreground transition-colors`}>Twitter</a>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 sm:my-8" />
        
        <div className="text-center">
          <p className={theme.text.mutedSmall}>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
