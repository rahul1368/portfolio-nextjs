"use client";

import { theme } from "../../theme";

export function AnimatedBackground() {
  return (
    <div className={theme.background.animated}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className={theme.background.blur1}></div>
      <div className={theme.background.blur2}></div>
    </div>
  );
}
