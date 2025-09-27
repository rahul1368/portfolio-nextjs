"use client";

import { Button } from "@repo/ui";
import { theme } from "../../theme";

interface HeroActionsProps {
  primaryCta: string;
  secondaryCta: string;
}

export function HeroActions({ primaryCta, secondaryCta }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <Button size="lg" className={`${theme.button.primary} group w-full sm:w-auto`}>
        <span className={theme.text.button}>{primaryCta}</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Button>
      <Button variant="outline" size="lg" className={`${theme.button.secondary} group w-full sm:w-auto`}>
        <span className={theme.text.button}>{secondaryCta}</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Button>
    </div>
  );
}
