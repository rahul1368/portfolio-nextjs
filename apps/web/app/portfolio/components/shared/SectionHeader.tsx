"use client";

import { Badge } from "@repo/ui";
import { theme } from "../../theme";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className={`text-center ${theme.section.spacing}`}>
      <div className={theme.header.badge.container}>
        <div className={theme.header.badge.dot}></div>
        <Badge variant="outline" className={theme.header.badge.badge}>
          {badge}
        </Badge>
      </div>
      <h2 className={theme.header.title.main}>
        {title.split(' ').slice(0, -1).join(' ')} <span className={theme.header.title.gradient}>{title.split(' ').slice(-1)}</span>
      </h2>
      <p className={`${theme.header.subtitle} text-muted-foreground`}>
        {description}
      </p>
    </div>
  );
}
