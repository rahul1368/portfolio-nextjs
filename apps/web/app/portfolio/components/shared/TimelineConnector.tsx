"use client";

interface TimelineConnectorProps {
  fromSection: string;
  toSection: string;
  className?: string;
}

export function TimelineConnector({ fromSection, toSection, className = "" }: TimelineConnectorProps) {
  return (
    <div className={`relative w-full flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      {/* Enhanced Timeline Line with Gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 sm:w-1.5 md:w-2 h-full bg-gradient-to-b from-transparent via-blue-500/40 [.dark_&]:via-blue-400/40 to-transparent"></div>
      
      {/* Animated Timeline Node */}
      <div className="relative z-10 flex flex-col items-center group">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-blue-500/20 [.dark_&]:bg-blue-400/20 animate-ping -m-1 sm:-m-2 md:-m-3 lg:-m-4"></div>
        
        {/* Main Timeline Node */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 [.dark_&]:from-blue-400 [.dark_&]:via-blue-500 [.dark_&]:to-blue-600 border-2 sm:border-3 md:border-4 border-white [.dark_&]:border-slate-800 shadow-xl sm:shadow-2xl shadow-blue-500/30 [.dark_&]:shadow-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          {/* Inner Icon Container */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full backdrop-blur-sm flex items-center justify-center">
            {getSectionIcon(fromSection, toSection)}
          </div>
        </div>
        
        {/* Section Label with Enhanced Styling */}
        <div className="mt-3 sm:mt-4 md:mt-6 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full bg-slate-100/90 [.dark_&]:bg-slate-800/90 backdrop-blur-sm border border-blue-500/20 [.dark_&]:border-blue-400/20 shadow-md sm:shadow-lg">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 [.dark_&]:bg-blue-400 animate-pulse"></div>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-600 [.dark_&]:text-blue-400">
              {getSectionLabel(fromSection, toSection)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500/5 [.dark_&]:from-blue-400/5 to-transparent animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-blue-500/10 [.dark_&]:bg-blue-400/10 animate-pulse delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500/60 [.dark_&]:bg-blue-400/60 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500/40 [.dark_&]:bg-blue-400/40 rounded-full animate-bounce delay-700"></div>
    </div>
  );
}

function getSectionIcon(fromSection: string, toSection: string) {
  // Modern SVG icons with better visual hierarchy
  if (fromSection === "hero" && toSection === "skills") {
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        <circle cx="12" cy="12" r="3" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  if (fromSection === "skills" && toSection === "experience") {
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  }
  
  if (fromSection === "experience" && toSection === "projects") {
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
        <path d="M14 12h4v4h-4v-4zm-6 0h4v4H8v-4zm0-6h4v4H8V6z" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  if (fromSection === "projects" && toSection === "github-repos") {
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    );
  }
  
  if (fromSection === "github-repos" && toSection === "contact") {
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  // Default modern arrow icon
  return (
    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function getSectionLabel(fromSection: string, toSection: string) {
  if (fromSection === "hero" && toSection === "skills") {
    return "Skills";
  }
  if (fromSection === "skills" && toSection === "experience") {
    return "Experience";
  }
  if (fromSection === "experience" && toSection === "projects") {
    return "Projects";
  }
  if (fromSection === "projects" && toSection === "github-repos") {
    return "GitHub";
  }
  if (fromSection === "github-repos" && toSection === "contact") {
    return "Contact";
  }
  return "Next";
}
