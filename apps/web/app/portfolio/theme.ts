/**
 * Portfolio Design System - Modern Theme with Light & Dark Mode Support
 * 
 * This theme provides a comprehensive design system with:
 * - Modern color palette that works in both light and dark themes
 * - Semantic color naming for better maintainability
 * - Responsive typography system
 * - Component-specific styling utilities
 * 
 * Usage Examples:
 * 
 * Text Colors:
 * - theme.colors.text.primary - Main text color
 * - theme.colors.text.secondary - Secondary text color
 * - theme.colors.text.accent - Accent text color
 * - theme.colors.text.success - Success state text
 * 
 * Background Colors:
 * - theme.colors.background.primary - Main background
 * - theme.colors.background.card - Card backgrounds
 * - theme.colors.background.glass - Glass morphism effect
 * - theme.colors.background.gradient.primary - Gradient backgrounds
 * 
 * Border Colors:
 * - theme.colors.border.primary - Main border color
 * - theme.colors.border.accent - Accent border color
 * - theme.colors.border.hover - Hover state borders
 * 
 * Shadow Colors:
 * - theme.colors.shadow.primary - Primary colored shadows
 * - theme.colors.shadow.glow - Glow effects
 * - theme.colors.shadow.hover - Interactive shadows
 * 
 * Color Schemes:
 * - colorSchemes.primary - Primary color scheme
 * - colorSchemes.success - Success state scheme
 * - colorSchemes.warning - Warning state scheme
 * - colorSchemes.error - Error state scheme
 * 
 * Modern Styles:
 * - modernStyles.card.base - Base card styling
 * - modernStyles.button.primary - Primary button styling
 * - modernStyles.badge.primary - Primary badge styling
 */
export const theme = {
  // Layout
  section: {
    padding: "py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32",
    container: "container mx-auto px-4 max-w-full overflow-hidden",
    maxWidth: "max-w-7xl mx-auto",
    spacing: "mb-20"
  },
  
  // Headers
  header: {
    badge: {
      container: "inline-flex items-center gap-2 mb-6",
      dot: "w-2 h-2 bg-primary rounded-full animate-pulse",
      badge: "text-xs sm:text-sm"
    },
    title: {
      main: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6",
      gradient: "bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent text-primary"
    },
    subtitle: "text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
  },
  
  // Cards
  card: {
    base: "group hover:shadow-2xl transition-all duration-500 border border-border/50 bg-card/80 backdrop-blur-sm",
    hover: "hover:scale-105",
    content: "py-8",
    header: "pb-4"
  },
  
  // Backgrounds
  background: {
    section: "relative overflow-hidden",
    animated: "absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20",
    blur1: "absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse",
    blur2: "absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"
  },
  
  // Animations
  animation: {
    stagger: (index: number) => `${index * 200}ms`,
    staggerSkills: (index: number, skillIndex: number) => `${(index * 200) + (skillIndex * 100)}ms`
  },
  
  // Buttons
  button: {
    primary: "text-lg px-8 py-6 group",
    secondary: "text-lg px-8 py-6 group",
    icon: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
  },
  
  // Grids
  grid: {
    twoCol: "grid md:grid-cols-2 gap-8",
    threeCol: "grid md:grid-cols-3 gap-8",
    skills: "grid md:grid-cols-2 gap-6"
  },
  
  // Typography - Standard Design System (Following Tailwind/Chakra UI patterns)
  text: {
    // Headings - Standard hierarchy
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans",
    h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-sans",
    h4: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-sans",
    h5: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-sans",
    h6: "text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-sans",
    
    // Body Text - Standard readable sizes
    body: "text-sm sm:text-base md:text-lg font-sans",
    bodyLarge: "text-base sm:text-lg md:text-xl font-sans",
    bodySmall: "text-xs sm:text-sm md:text-base font-sans",
    
    // Specialized - Standard UI sizes
    caption: "text-xs sm:text-sm font-sans",
    label: "text-xs sm:text-sm font-medium font-sans",
    button: "text-sm sm:text-base font-medium font-sans",
    badge: "text-xs sm:text-sm font-sans",
    
    // Muted variants - Standard sizes
    muted: "text-muted-foreground font-sans",
    mutedSmall: "text-xs sm:text-sm text-muted-foreground font-sans",
    mutedBody: "text-sm sm:text-base text-muted-foreground font-sans",
    
    // Special elements - Proportional sizing
    avatarFallback: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans",
    floatingIcon: "text-lg sm:text-xl md:text-2xl",
    floatingIconSmall: "text-sm sm:text-base md:text-lg",
    floatingIconMedium: "text-base sm:text-lg md:text-xl",
    emoji: "text-2xl sm:text-3xl md:text-4xl",
    emojiSmall: "text-lg sm:text-xl md:text-2xl",
    
    // Extended body text variants - Standard scaling
    bodyLargeExtended: "text-sm sm:text-base md:text-lg lg:text-xl",
    h3Extended: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-sans"
  },

  // Modern Color System - Light & Dark Theme Compatible
  colors: {
    // Text Colors - Semantic and accessible
    text: {
      // Primary text colors
      primary: "text-foreground",
      secondary: "text-muted-foreground",
      accent: "text-primary",
      muted: "text-muted-foreground",
      
      // Interactive text colors
      interactive: "text-primary hover:text-primary/80",
      link: "text-primary hover:text-primary/70 underline-offset-4 hover:underline",
      button: "text-primary-foreground",
      
      // Status text colors
      success: "text-green-600 dark:text-green-400",
      warning: "text-orange-600 dark:text-orange-400",
      error: "text-red-600 dark:text-red-400",
      info: "text-blue-600 dark:text-blue-400",
      
      // Special text effects
      gradient: "bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent",
      glow: "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]",
      subtle: "text-muted-foreground/70"
    },

    // Background Colors - Modern and minimal
    background: {
      // Base backgrounds
      primary: "bg-background",
      secondary: "bg-muted/30",
      tertiary: "bg-muted/10",
      card: "bg-card/80 backdrop-blur-sm",
      glass: "bg-background/80 backdrop-blur-md",
      
      // Interactive backgrounds
      hover: "hover:bg-muted/50",
      active: "active:bg-muted/70",
      focus: "focus:bg-primary/10",
      
      // Gradient backgrounds
      gradient: {
        primary: "bg-gradient-to-br from-primary/10 via-background to-primary/5",
        secondary: "bg-gradient-to-br from-muted/20 via-background to-muted/10",
        accent: "bg-gradient-to-br from-accent/10 via-background to-accent/5",
        subtle: "bg-gradient-to-r from-transparent via-muted/5 to-transparent"
      },
      
      // Status backgrounds
      success: "bg-green-50 dark:bg-green-950/20",
      warning: "bg-orange-50 dark:bg-orange-950/20",
      error: "bg-red-50 dark:bg-red-950/20",
      info: "bg-blue-50 dark:bg-blue-950/20"
    },

    // Border Colors - Subtle and modern
    border: {
      // Base borders
      primary: "border-border",
      secondary: "border-border/50",
      subtle: "border-border/20",
      accent: "border-primary/20",
      
      // Interactive borders
      hover: "hover:border-primary/40",
      focus: "focus:border-primary/60",
      active: "active:border-primary/80",
      
      // Status borders
      success: "border-green-200 dark:border-green-800",
      warning: "border-orange-200 dark:border-orange-800",
      error: "border-red-200 dark:border-red-800",
      info: "border-blue-200 dark:border-blue-800"
    },

    // Shadow Colors - Depth and elevation
    shadow: {
      // Base shadows
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      
      // Colored shadows
      primary: "shadow-primary/20",
      accent: "shadow-accent/20",
      subtle: "shadow-black/5 dark:shadow-white/5",
      
      // Interactive shadows
      hover: "hover:shadow-lg hover:shadow-primary/10",
      focus: "focus:shadow-lg focus:shadow-primary/20",
      
      // Glow effects
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
      glowAccent: "shadow-[0_0_20px_rgba(168,85,247,0.15)]"
    }
  }
} as const;

// Modern Color Schemes - Light & Dark Theme Compatible
export const colorSchemes = {
  primary: {
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    text: "text-primary",
    background: "bg-primary/5",
    hover: "hover:bg-primary/10 hover:border-primary/30"
  },
  secondary: {
    gradient: "from-muted/20 to-muted/10", 
    border: "border-muted/30",
    text: "text-muted-foreground",
    background: "bg-muted/10",
    hover: "hover:bg-muted/20 hover:border-muted/40"
  },
  accent: {
    gradient: "from-accent/10 to-accent/5",
    border: "border-accent/20", 
    text: "text-accent",
    background: "bg-accent/5",
    hover: "hover:bg-accent/10 hover:border-accent/30"
  },
  success: {
    gradient: "from-green-500/10 to-green-400/5",
    border: "border-green-500/20",
    text: "text-green-600 dark:text-green-400",
    background: "bg-green-50 dark:bg-green-950/20",
    hover: "hover:bg-green-100 dark:hover:bg-green-950/30"
  },
  warning: {
    gradient: "from-orange-500/10 to-orange-400/5",
    border: "border-orange-500/20",
    text: "text-orange-600 dark:text-orange-400",
    background: "bg-orange-50 dark:bg-orange-950/20",
    hover: "hover:bg-orange-100 dark:hover:bg-orange-950/30"
  },
  error: {
    gradient: "from-red-500/10 to-red-400/5",
    border: "border-red-500/20",
    text: "text-red-600 dark:text-red-400",
    background: "bg-red-50 dark:bg-red-950/20",
    hover: "hover:bg-red-100 dark:hover:bg-red-950/30"
  },
  info: {
    gradient: "from-blue-500/10 to-blue-400/5",
    border: "border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    background: "bg-blue-50 dark:bg-blue-950/20",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-950/30"
  }
} as const;

// Modern Component Styles
export const modernStyles = {
  // Card Styles
  card: {
    base: "bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl",
    elevated: "bg-card/90 backdrop-blur-md border border-border/30 shadow-lg shadow-black/5 dark:shadow-white/5",
    glass: "bg-background/80 backdrop-blur-md border border-border/20 rounded-xl",
    interactive: "hover:bg-card/90 hover:border-border/60 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
  },
  
  // Button Styles
  button: {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-muted text-muted-foreground hover:bg-muted/80 border border-border/50",
    ghost: "hover:bg-muted/50 text-foreground",
    outline: "border border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40"
  },
  
  // Input Styles
  input: {
    base: "bg-background border border-border/50 rounded-lg focus:border-primary/60 focus:ring-2 focus:ring-primary/20",
    error: "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
    success: "border-green-500/50 focus:border-green-500 focus:ring-green-500/20"
  },
  
  // Badge Styles
  badge: {
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-muted/50 text-muted-foreground border border-border/30",
    success: "bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800",
    warning: "bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800",
    error: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800"
  }
} as const;

