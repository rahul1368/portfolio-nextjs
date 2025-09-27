"use client";

interface TimelineConnectorProps {
  fromSection: string;
  toSection: string;
  className?: string;
}

export function TimelineConnector({ fromSection, toSection, className = "" }: TimelineConnectorProps) {
  return (
    <div className={`relative w-full flex justify-center items-center py-12 sm:py-16 ${className}`}>
      {/* Enhanced Timeline Line with Gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
      
      {/* Animated Timeline Node */}
      <div className="relative z-10 flex flex-col items-center group">
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 animate-ping"></div>
        
        {/* Main Timeline Node */}
        <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 border-4 border-white shadow-2xl shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          {/* Inner Icon Container */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {getSectionIcon(fromSection, toSection)}
          </div>
        </div>
        
        {/* Section Label with Enhanced Styling */}
        <div className="mt-4 sm:mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-primary/20 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm sm:text-base font-semibold text-primary">
              {getSectionLabel(fromSection, toSection)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-primary/5 to-transparent animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 animate-pulse delay-1000"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary/60 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary/40 rounded-full animate-bounce delay-700"></div>
    </div>
  );
}

function getSectionIcon(fromSection: string, toSection: string) {
  // Modern SVG icons with better visual hierarchy
  if (fromSection === "hero" && toSection === "skills") {
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        <circle cx="12" cy="12" r="3" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  if (fromSection === "skills" && toSection === "experience") {
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  }
  
  if (fromSection === "experience" && toSection === "projects") {
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"/>
        <path d="M14 12h4v4h-4v-4zm-6 0h4v4H8v-4zm0-6h4v4H8V6z" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  if (fromSection === "projects" && toSection === "contact") {
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.8"/>
      </svg>
    );
  }
  
  // Default modern arrow icon
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
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
  if (fromSection === "projects" && toSection === "contact") {
    return "Contact";
  }
  return "Next";
}
