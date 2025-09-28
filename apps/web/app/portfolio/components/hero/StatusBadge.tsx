"use client";

import { Badge } from "@repo/ui";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in-up">
      <div className="w-2 h-2 bg-emerald-500 [.dark_&]:bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-500/30 [.dark_&]:shadow-emerald-400/30"></div>
      <Badge variant="secondary" className="bg-emerald-500/10 [.dark_&]:bg-emerald-400/10 text-emerald-600 [.dark_&]:text-emerald-400 border-emerald-500/20 [.dark_&]:border-emerald-400/20 hover:bg-emerald-500/20 [.dark_&]:hover:bg-emerald-400/20 transition-all duration-200 shadow-sm">
        {status}
      </Badge>
    </div>
  );
}
