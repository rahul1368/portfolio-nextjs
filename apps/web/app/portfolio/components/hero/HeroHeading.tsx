"use client";

import { theme } from "../../theme";

interface HeroHeadingProps {
  name: string;
  title: string;
}

export function HeroHeading({ name, title }: HeroHeadingProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h1 className={`${theme.text.h1} leading-tight`}>
        <span className="block">Hi, I'm</span>
        <span className={`block ${theme.header.title.gradient}`}>
          {name}
        </span>
      </h1>
      
      <div className={`${theme.text.bodyLarge} font-light ${theme.text.muted}`}>
        <span className="inline-block animate-fade-in-up">{title}</span>
        <span className="mx-1 sm:mx-2">•</span>
        <span className="inline-block animate-fade-in-up delay-200">UI/UX Designer</span>
        <span className="mx-1 sm:mx-2">•</span>
        <span className="inline-block animate-fade-in-up delay-400">Problem Solver</span>
      </div>
    </div>
  );
}
