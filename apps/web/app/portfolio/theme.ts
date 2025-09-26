// Portfolio Design System - Consistent Theme Variables
export const theme = {
  // Layout
  section: {
    padding: "py-24",
    container: "container mx-auto px-4",
    maxWidth: "max-w-7xl mx-auto",
    spacing: "mb-20"
  },
  
  // Headers
  header: {
    badge: {
      container: "inline-flex items-center gap-2 mb-6",
      dot: "w-2 h-2 bg-primary rounded-full animate-pulse",
      badge: "text-sm"
    },
    title: {
      main: "text-4xl md:text-6xl font-bold mb-6",
      gradient: "bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent text-primary"
    },
    subtitle: "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
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
  
  // Typography
  text: {
    large: "text-lg md:text-xl",
    medium: "text-base md:text-lg",
    small: "text-sm md:text-base",
    muted: "text-muted-foreground"
  }
} as const;

// Color schemes for different sections
export const colorSchemes = {
  primary: {
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    text: "text-blue-600"
  },
  secondary: {
    gradient: "from-green-500/10 to-emerald-500/10", 
    border: "border-green-500/20",
    text: "text-green-600"
  },
  accent: {
    gradient: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20", 
    text: "text-purple-600"
  },
  warning: {
    gradient: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    text: "text-orange-600"
  }
} as const;

