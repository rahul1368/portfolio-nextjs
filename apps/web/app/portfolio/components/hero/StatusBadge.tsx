"use client";

import { Badge } from "@repo/ui";
import { theme } from "../../theme";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className={theme.header.badge.container}>
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <Badge variant="secondary" className={theme.header.badge.badge}>
        {status}
      </Badge>
    </div>
  );
}
