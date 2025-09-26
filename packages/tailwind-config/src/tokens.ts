export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export interface DesignTokens {
  colors: {
    success: string
    warning: string
    error: string
    info: string
  }
  spacing: Record<string, string>
  typography: {
    fontFamily: Record<string, readonly string[]>
    fontSize: Record<string, readonly [string, { lineHeight: string }]>
  }
}

export const colors = {
  // Only add custom colors that don't conflict with Tailwind defaults
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const

export const spacing = {
  // Only add custom spacing that doesn't conflict with Tailwind defaults
  xs: '0.25rem',
  '3xl': '4rem',
} as const

export const typography = {
  fontFamily: {
    // Only add custom font families that don't conflict with Tailwind defaults
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    // Only add custom font sizes that don't conflict with Tailwind defaults
    // Keep Tailwind's default font sizes intact
  },
} as const

export const tokens: DesignTokens = {
  colors,
  spacing,
  typography,
}