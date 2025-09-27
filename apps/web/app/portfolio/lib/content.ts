// Consolidated SEO-Compliant Content
// This file contains all content for the portfolio with SEO-optimized copy

// SEO Meta Content
export const seoContent = {
  title: "Rahul Kumar - Full-Stack Developer & UI/UX Designer | Modern Web Solutions",
  description: "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. 7+ years building scalable applications with focus on user experience and performance.",
  keywords: [
    "Full Stack Developer",
    "React Developer", 
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Modern Web Development",
    "Responsive Design",
    "User Experience",
    "Web Performance",
    "Software Engineer"
  ],
  author: "Rahul Kumar",
  canonical: "https://rahulkumar.dev",
  openGraph: {
    title: "Rahul Kumar - Full-Stack Developer & UI/UX Designer",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building beautiful, functional digital experiences.",
    type: "profile",
    url: "https://rahulkumar.dev",
    image: "https://rahulkumar.dev/og-image.jpg",
    siteName: "Rahul Kumar Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar - Full-Stack Developer & UI/UX Designer",
    description: "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    image: "https://rahulkumar.dev/twitter-image.jpg"
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul Kumar",
    "jobTitle": "Full-Stack Developer & UI/UX Designer",
    "description": "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies",
    "url": "https://rahulkumar.dev",
    "sameAs": [
      "https://linkedin.com/in/rahulkumar",
      "https://github.com/rahulkumar",
      "https://twitter.com/rahulkumar"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "React",
      "Next.js", 
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "Web Development",
      "JavaScript",
      "CSS",
      "HTML"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer & UI/UX Designer",
      "description": "Building beautiful, functional digital experiences with modern web technologies"
    }
  }
} as const;

// Hero Section Content
export const heroContent = {
  name: "Rahul Kumar",
  title: "Full-Stack Developer",
  subtitle: "UI/UX Designer • Problem Solver",
  status: "Available for work",
  description: "I craft beautiful, functional digital experiences that solve real problems and delight users. Passionate about clean code, intuitive design, and innovative solutions.",
  primaryCta: "View My Work",
  secondaryCta: "Get In Touch",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  fallback: "RK",
  stats: {
    projects: "50+",
    experience: "5+ Years",
    satisfaction: "100%"
  },
  seoTitle: "Full-Stack Developer & UI/UX Designer - Rahul Kumar",
  seoDescription: "Experienced Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. 5+ years building scalable applications at GoDaddy, MetaMap, ETMoney, and other leading companies."
} as const;

// Skills Section Content
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
      icon: "Cpu",
      description: "Modern frontend architectures with focus on performance, accessibility, and user experience",
      colorScheme: "primary"
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs", "WebSockets", "gRPC", "PostgreSQL", "MongoDB", "Redis"],
      icon: "Settings",
      description: "Scalable backend systems, microservices architecture, and high-performance APIs",
      colorScheme: "secondary"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "ArgoCD", "Helm"],
      icon: "Cloud",
      description: "Cloud-native applications, infrastructure as code, and automated deployment pipelines",
      colorScheme: "accent"
    },
    {
      category: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Vector DBs", "RAG", "LLMs", "MLOps", "Pandas"],
      icon: "Bot",
      description: "AI agentic applications, machine learning pipelines, and intelligent automation systems",
      colorScheme: "warning"
    },
    {
      category: "Architecture & Leadership",
      skills: ["Microservices", "Monorepo", "System Design", "Team Leadership", "Code Reviews", "Technical Mentoring", "Agile", "Scrum", "Architecture Patterns"],
      icon: "Building",
      description: "Technical leadership, system architecture, and team management for scalable solutions",
      colorScheme: "primary"
    },
    {
      category: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Java", "C#", "React Native", "Flutter", "Electron"],
      icon: "Monitor",
      description: "Multi-language expertise across web, mobile, and desktop application development",
      colorScheme: "secondary"
    }
  ],
  learning: {
    title: "Continuous Innovation",
    description: "Passionate about emerging technologies and their practical applications. Currently exploring advanced AI agent architectures, quantum computing applications, and next-generation web technologies.",
    topics: ["AI Agents", "Quantum Computing", "WebAssembly", "Edge Computing", "Blockchain", "IoT", "AR/VR", "Serverless", "Observability"]
  },
  proficiency: [
    { skill: "React/Next.js", level: 95, years: "7+", category: "Frontend" },
    { skill: "TypeScript", level: 92, years: "6+", category: "Language" },
    { skill: "Node.js/Express", level: 90, years: "7+", category: "Backend" },
    { skill: "Python/FastAPI", level: 88, years: "5+", category: "Backend" },
    { skill: "AWS/GCP", level: 90, years: "5+", category: "Cloud" },
    { skill: "Docker/K8s", level: 88, years: "4+", category: "DevOps" },
    { skill: "System Design", level: 85, years: "5+", category: "Architecture" },
    { skill: "AI/ML Integration", level: 75, years: "2+", category: "AI" }
  ],
  seoTitle: "Full-Stack Development Skills & Technologies - Rahul Kumar",
  seoDescription: "Comprehensive technical expertise in React, Next.js, TypeScript, Node.js, AWS, and modern web development. 7+ years of full-stack development experience with focus on scalable solutions."
} as const;

// Experience Section Content
export const experienceContent = {
  header: {
    badge: "Experience",
    title: "Professional Journey",
    description: "5+ years of building scalable applications across fintech, e-commerce, edtech, and domain management platforms. Experience with leading companies like GoDaddy, MetaMap, and ETMoney."
  },
  experiences: [
    {
      company: "GoDaddy via EPAM Systems",
      position: "Senior Full-Stack Developer",
      duration: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Working as a Senior Full-Stack Developer for GoDaddy through EPAM Systems, focusing on building scalable web applications and domain management solutions for millions of users worldwide.",
      achievements: [
        "Developed and maintained GoDaddy's core domain management platform",
        "Built responsive web applications serving 20M+ customers globally",
        "Implemented microservices architecture improving system scalability by 50%",
        "Led code reviews and mentored junior developers in best practices"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL", "GraphQL"],
      logo: "https://www.godaddy.com/favicon.ico",
      website: "https://www.godaddy.com"
    },
    {
      company: "MetaMap",
      position: "Full-Stack Developer",
      duration: "2022 - 2023",
      location: "Remote",
      type: "Full-time",
      description: "Developed identity verification and KYC solutions for fintech companies. Built scalable APIs and frontend applications for digital identity verification services.",
      achievements: [
        "Built identity verification APIs serving 1M+ verification requests",
        "Developed React-based dashboard for identity verification workflows",
        "Implemented real-time data processing reducing verification time by 60%",
        "Collaborated with product team to enhance user experience"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Python", "FastAPI", "MongoDB", "Redis", "AWS"],
      logo: "https://metamap.com/favicon.ico",
      website: "https://metamap.com"
    },
    {
      company: "ETMoney, Times Internet Pvt. Limited",
      position: "Full-Stack Developer",
      duration: "2021 - 2022",
      location: "Gurgaon, India",
      type: "Full-time",
      description: "Developed financial technology solutions for ETMoney, a leading fintech platform. Built investment tracking, portfolio management, and financial planning tools.",
      achievements: [
        "Built investment tracking dashboard for 5M+ users",
        "Developed real-time portfolio analytics reducing load time by 40%",
        "Implemented secure payment processing integration with multiple banks",
        "Created responsive mobile-first designs for financial data visualization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
      logo: "https://etmoney.com/favicon.ico",
      website: "https://etmoney.com"
    },
    {
      company: "ShopClues",
      position: "Frontend Developer",
      duration: "2020 - 2021",
      location: "Gurgaon, India",
      type: "Full-time",
      description: "Developed e-commerce platform features and user interfaces for ShopClues, one of India's leading online marketplaces. Focused on improving user experience and conversion rates.",
      achievements: [
        "Built product catalog and search functionality for 10M+ products",
        "Developed responsive checkout flow improving conversion by 25%",
        "Implemented real-time inventory management system",
        "Optimized frontend performance reducing page load time by 35%"
      ],
      technologies: ["React", "JavaScript", "Redux", "HTML", "CSS", "SASS", "Webpack", "Jest"],
      logo: "https://www.shopclues.com/favicon.ico",
      website: "https://www.shopclues.com"
    },
    {
      company: "Doubtnut",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Gurgaon, India",
      type: "Full-time",
      description: "Developed educational technology platform for Doubtnut, India's leading edtech startup. Built interactive learning interfaces and video-based educational content delivery systems.",
      achievements: [
        "Built video-based learning platform serving 2M+ students",
        "Developed interactive question-answer interface with real-time chat",
        "Implemented video streaming optimization reducing buffering by 50%",
        "Created responsive mobile-first design for educational content"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Video.js", "WebRTC", "Firebase", "MongoDB"],
      logo: "https://doubtnut.com/favicon.ico",
      website: "https://doubtnut.com"
    }
  ],
  seoTitle: "Professional Experience - Full-Stack Developer at GoDaddy, MetaMap, ETMoney",
  seoDescription: "5+ years of professional experience as a Full-Stack Developer. Worked with GoDaddy (via EPAM), MetaMap, ETMoney (Times Internet), ShopClues, and Doubtnut. Expertise in React, Node.js, TypeScript, AWS, fintech, e-commerce, and edtech platforms."
} as const;

// Projects Section Content
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
      githubUrl: "https://github.com/username/ecommerce",
      seoTitle: "E-Commerce Platform - Next.js, TypeScript, Stripe Integration",
      seoDescription: "Full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. Features real-time inventory management, secure payments, and responsive design."
    },
    {
      title: "Task Management App",
      description: "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and project tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "https://tasks.example.com",
      githubUrl: "https://github.com/username/taskmanager",
      seoTitle: "Task Management App - React, Node.js, Real-time Collaboration",
      seoDescription: "Real-time collaborative task management application built with React and Node.js. Features drag-and-drop functionality, team collaboration, and project tracking."
    },
    {
      title: "Weather Dashboard",
      description: "A comprehensive weather analytics dashboard with data visualization, historical trends, and predictive forecasting capabilities.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b2b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
      liveUrl: "https://weather.example.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      seoTitle: "Weather Dashboard - Vue.js, D3.js, Data Visualization",
      seoDescription: "Comprehensive weather analytics dashboard with data visualization, historical trends, and predictive forecasting. Built with Vue.js, D3.js, and Python."
    }
  ],
  cta: {
    title: "Have a Project in Mind?",
    description: "I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can bring your ideas to life.",
    button: "Let's Work Together"
  },
  seoTitle: "Portfolio of Full-Stack Development Projects - Rahul Kumar",
  seoDescription: "Showcase of full-stack development projects including e-commerce platforms, task management apps, and data visualization dashboards built with React, Next.js, and modern web technologies."
} as const;

// Contact Section Content
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
      value: "hello@rahulkumar.dev",
      action: "Send Email",
      href: "mailto:hello@rahulkumar.dev",
      icon: "Mail"
    },
    {
      title: "Phone",
      description: "Call me for urgent matters",
      value: "+1 (555) 123-4567",
      action: "Call",
      href: "tel:+15551234567",
      icon: "Phone"
    },
    {
      title: "Location",
      description: "Based in the Bay Area",
      value: "San Francisco, CA",
      action: "View",
      href: "#",
      icon: "MapPin"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/rahulkumar",
      action: "Connect",
      href: "https://linkedin.com/in/rahulkumar",
      icon: "Briefcase"
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
  },
  seoTitle: "Contact Full-Stack Developer - Rahul Kumar",
  seoDescription: "Ready to work on your next project? Contact Rahul Kumar, experienced Full-Stack Developer specializing in React, Next.js, and modern web technologies."
} as const;

// Navigation Content
export const navigationContent = {
  brand: "Rahul Kumar",
  downloadResume: "Download Resume",
  getStarted: "Get Started",
  menu: "Menu",
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
} as const;

// Footer Content
export const footerContent = {
  brand: {
    name: "Rahul Kumar",
    description: "Full-Stack Developer & UI/UX Designer",
    seoDescription: "Full-Stack Developer and UI/UX Designer specializing in React, Next.js, TypeScript, and modern web technologies. Available for freelance and full-time opportunities."
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  },
  services: {
    title: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Consulting", href: "#" },
      { label: "Code Review", href: "#" }
    ]
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:hello@rahulkumar.dev" },
      { label: "LinkedIn", href: "https://linkedin.com/in/rahulkumar" },
      { label: "GitHub", href: "https://github.com/rahulkumar" },
      { label: "Twitter", href: "https://twitter.com/rahulkumar" }
    ]
  },
  copyright: "© 2024 Rahul Kumar. All rights reserved."
} as const;

// Helper functions for easy access
export const getHeroData = () => heroContent;
export const getSkillsData = () => skillsContent;
export const getExperienceData = () => experienceContent;
export const getProjectsData = () => projectsContent;
export const getContactData = () => contactContent;
export const getNavigationData = () => navigationContent;
export const getFooterData = () => footerContent;
export const getSEOData = () => seoContent;

// Export all content as a single object for easy access
export const portfolioContent = {
  seo: seoContent,
  hero: heroContent,
  skills: skillsContent,
  experience: experienceContent,
  projects: projectsContent,
  contact: contactContent,
  navigation: navigationContent,
  footer: footerContent
} as const;