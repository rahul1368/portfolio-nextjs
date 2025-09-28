"use client";

import { Separator } from "@repo/ui";

interface FooterProps {
  brand: {
    name: string;
    description: string;
  };
  copyright: string;
}

export function Footer({ brand, copyright }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 md:py-16 lg:py-20 border-t border-slate-200/50 [.dark_&]:border-slate-700/50 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-transparent to-slate-500/5 [.dark_&]:from-slate-400/10 [.dark_&]:via-transparent [.dark_&]:to-slate-400/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 group">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 [.dark_&]:text-slate-100">{brand.name}</h3>
            <p className="text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 leading-relaxed">
              {brand.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="group">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-900 [.dark_&]:text-slate-100 group-hover:text-blue-600 [.dark_&]:group-hover:text-blue-400 transition-colors">Quick Links</h4>
            <div className="space-y-2">
              <a href="/portfolio" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-blue-600 [.dark_&]:hover:text-blue-400 transition-colors">Portfolio</a>
              <a href="#experience" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-blue-600 [.dark_&]:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-blue-600 [.dark_&]:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-blue-600 [.dark_&]:hover:text-blue-400 transition-colors">Skills</a>
            </div>
          </div>
          
          {/* Services */}
          <div className="group">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-900 [.dark_&]:text-slate-100 group-hover:text-emerald-600 [.dark_&]:group-hover:text-emerald-400 transition-colors">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-emerald-600 [.dark_&]:hover:text-emerald-400 transition-colors">Consulting</a>
              <a href="#" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-emerald-600 [.dark_&]:hover:text-emerald-400 transition-colors">Development</a>
              <a href="#" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-emerald-600 [.dark_&]:hover:text-emerald-400 transition-colors">Architecture</a>
              <a href="#" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-emerald-600 [.dark_&]:hover:text-emerald-400 transition-colors">Team Leadership</a>
            </div>
          </div>
          
          {/* Connect */}
          <div className="group">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-900 [.dark_&]:text-slate-100 group-hover:text-violet-600 [.dark_&]:group-hover:text-violet-400 transition-colors">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:contact@rahulchoudhary.dev" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-violet-600 [.dark_&]:hover:text-violet-400 transition-colors">Email</a>
              <a href="https://linkedin.com/in/rahulchoudhary" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-violet-600 [.dark_&]:hover:text-violet-400 transition-colors">LinkedIn</a>
              <a href="https://github.com/rahulchoudhary" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-violet-600 [.dark_&]:hover:text-violet-400 transition-colors">GitHub</a>
              <a href="https://twitter.com/rahulchoudhary" className="block text-sm sm:text-base text-slate-600 [.dark_&]:text-slate-300 hover:underline hover:text-violet-600 [.dark_&]:hover:text-violet-400 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 sm:my-8 bg-slate-200/50 [.dark_&]:bg-slate-700/50" />
        
        <div className="text-center">
          <p className="text-xs sm:text-sm text-slate-500 [.dark_&]:text-slate-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
