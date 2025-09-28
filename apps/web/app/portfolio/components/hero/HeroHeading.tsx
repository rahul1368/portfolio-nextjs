"use client";

interface HeroHeadingProps {
  name: string;
  title: string;
  subtitle: string;
}

export function HeroHeading({ name, title, subtitle }: HeroHeadingProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span className="block text-slate-700 [.dark_&]:text-slate-300 animate-fade-in-up">Hi, I&apos;m</span>
        <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 [.dark_&]:from-blue-400 [.dark_&]:via-violet-400 [.dark_&]:to-purple-400 bg-clip-text text-transparent animate-fade-in-up delay-100">
          {name}
        </span>
      </h1>
      
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 [.dark_&]:text-slate-100 mb-2">
        <span className="inline-block animate-fade-in-up delay-200">{title}</span>
      </div>
      
      <div className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 [.dark_&]:text-slate-300">
        <span className="inline-block animate-fade-in-up delay-300">{subtitle}</span>
      </div>
    </div>
  );
}
