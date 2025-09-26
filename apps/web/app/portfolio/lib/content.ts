// Portfolio content - Static data approach (best practice for portfolios)
// This approach is recommended for portfolios as content doesn't change frequently
// and provides better performance and type safety

export const heroContent = {
  name: "Rahul Kumar",
  title: "Full-Stack Developer",
  subtitle: "UI/UX Designer • Problem Solver",
  status: "Available for work",
  description: "I craft beautiful, functional digital experiences that solve real problems and delight users. Passionate about clean code, intuitive design, and innovative solutions.",
  primaryCta: "View My Work",
  secondaryCta: "Get In Touch",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  fallback: "YN",
  stats: {
    projects: "50+",
    experience: "3+ Years",
    satisfaction: "100%"
  }
} as const;

export const skillsContent = {
  header: {
    badge: "Expertise",
    title: "Technical Leadership",
    description: "7+ years of experience building scalable distributed applications, leading engineering teams, and architecting modern solutions for enterprise clients."
  },
  categories: [
    {
      category: "Frontend & UI/UX",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook", "Jest", "Cypress", "Webpack", "Vite"],
      icon: "⚛️",
      description: "Modern frontend architectures with focus on performance, accessibility, and user experience",
      colorScheme: "primary"
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs", "WebSockets", "gRPC", "PostgreSQL", "MongoDB", "Redis"],
      icon: "🔧",
      description: "Scalable backend systems, microservices architecture, and high-performance APIs",
      colorScheme: "secondary"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "ArgoCD", "Helm"],
      icon: "☁️",
      description: "Cloud-native applications, infrastructure as code, and automated deployment pipelines",
      colorScheme: "accent"
    },
    {
      category: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "RAG", "LLMs", "MLOps", "Pandas"],
      icon: "🤖",
      description: "AI agentic applications, machine learning pipelines, and intelligent automation systems",
      colorScheme: "warning"
    },
    {
      category: "Architecture & Leadership",
      skills: ["Microservices", "Monorepo", "System Design", "Team Leadership", "Code Reviews", "Technical Mentoring", "Agile", "Scrum", "Architecture Patterns"],
      icon: "🏗️",
      description: "Technical leadership, system architecture, and team management for scalable solutions",
      colorScheme: "primary"
    },
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Java", "C#", "React Native", "Flutter", "Electron"],
      icon: "💻",
      description: "Multi-language expertise across web, mobile, and desktop application development",
      colorScheme: "secondary"
    }
  ],
  learning: {
    title: "Continuous Innovation",
    description: "Passionate about emerging technologies and their practical applications. Currently exploring advanced AI agent architectures, quantum computing applications, and next-generation web technologies.",
    topics: ["AI Agents", "Quantum Computing", "WebAssembly", "Edge Computing", "Blockchain", "IoT", "AR/VR", "Serverless", "Observability"]
  }
} as const;

export const projectsContent = {
  header: {
    badge: "Portfolio",
    title: "Featured Projects",
    description: "A showcase of my recent work and side projects. Each project represents a unique challenge and learning opportunity."
  },
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payments, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/username/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and project tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/username/taskmanager"
    },
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather analytics dashboard with data visualization, historical trends, and predictive forecasting capabilities.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b2b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
      liveUrl: "https://weather.example.com",
      githubUrl: "https://github.com/username/weather-dashboard"
    }
  ],
  cta: {
    title: "Have a Project in Mind?",
    description: "I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can bring your ideas to life.",
    button: "Let's Work Together"
  }
} as const;

export const contactContent = {
  header: {
    badge: "Contact",
    title: "Let's Work Together",
    description: "Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
  },
  methods: [
    {
      title: "Email",
      description: "Send me an email anytime",
      value: "hello@yourname.com",
      action: "Send Email",
      href: "mailto:hello@yourname.com",
      icon: "✉️"
    },
    {
      title: "Phone",
      description: "Call me for urgent matters",
      value: "+1 (555) 123-4567",
      action: "Call",
      href: "tel:+15551234567",
      icon: "📞"
    },
    {
      title: "Location",
      description: "Based in the Bay Area",
      value: "San Francisco, CA",
      action: "View",
      href: "#",
      icon: "📍"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/yourname",
      action: "Connect",
      href: "https://linkedin.com/in/yourname",
      icon: "💼"
    }
  ],
  form: {
    title: "Send a Quick Message",
    description: "Prefer to send a message? Fill out the form below and I'll get back to you within 24 hours.",
    fields: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message"
    },
    button: "Send Message"
  }
} as const;

// Helper functions for easy access
export const getHeroData = () => heroContent;
export const getSkillsData = () => skillsContent;
export const getProjectsData = () => projectsContent;
export const getContactData = () => contactContent;

