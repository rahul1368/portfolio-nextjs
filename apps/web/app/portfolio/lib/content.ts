// Consolidated SEO-Compliant Content
// This file contains all content for the portfolio with SEO-optimized copy

// SEO Meta Content
export const seoContent = {
  title: "Rahul Kumar - Full Stack Engineer & Senior Software Engineer | Modern Web Solutions",
  description: "Experienced Full Stack Engineer with 7+ years of experience. Specializing in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, Prisma ORM, GraphQL, and modern web technologies. Passionate about working with remote, international teams.",
  keywords: [
    "Full Stack Engineer",
    "Senior Software Engineer",
    "JavaScript Developer", 
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Prisma ORM",
    "GraphQL Developer",
    "Web Developer",
    "Software Engineer",
    "Remote Developer",
    "International Teams",
    "SaaS Development"
  ],
  author: "Rahul Kumar",
  canonical: "https://rahul-portfolio-six-flame.vercel.app",
  openGraph: {
    title: "Rahul Kumar - Full Stack Engineer & Senior Software Engineer",
    description: "Experienced Full Stack Engineer with 7+ years of experience. Specializing in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, and modern web technologies.",
    type: "profile",
    url: "https://rahul-portfolio-six-flame.vercel.app",
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar+Portfolio&size=1200&background=4F46E5&color=FFFFFF",
    siteName: "Rahul Kumar Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar - Full Stack Engineer & Senior Software Engineer",
    description: "Experienced Full Stack Engineer with 7+ years of experience. Specializing in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, and modern web technologies.",
    image: "https://ui-avatars.com/api/?name=Rahul+Kumar+Portfolio&size=1200&background=4F46E5&color=FFFFFF"
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahul Kumar",
    "jobTitle": "Full Stack Engineer & Senior Software Engineer",
    "description": "Experienced Full Stack Engineer with 7+ years of experience. Specializing in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, and modern web technologies",
    "url": "https://rahul-portfolio-six-flame.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/rahul1368/",
      "https://github.com/rahul1368"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js", 
      "Node.js",
      "Java",
      "Spring Boot",
      "Prisma ORM",
      "GraphQL",
      "Web Development",
      "Remote Work",
      "International Teams"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Engineer & Senior Software Engineer",
      "description": "Building scalable web applications with modern technologies for remote, international teams"
    }
  }
} as const;

// Hero Section Content
export const heroContent = {
  name: "Rahul Kumar",
  title: "Lead Full Stack Engineer",
  subtitle: "Tech Leader • Innovation Architect • Entrepreneur",
  status: "Available for work",
  description: "I transforms ambitious ideas into scalable digital realities. With 7+ years of architecting distributed systems and leading cross-functional teams of 8-12 engineers, I specialize in building enterprise-grade applications that handle 10M+ users with 99.9% uptime. My expertise spans from crafting intuitive user experiences to designing robust microservices architectures across 50+ production systems. I'm passionate about Agentic AI development, creating intelligent systems that learn and adapt. As an entrepreneur, I've built Poplitu from the ground up, proving that innovative thinking combined with technical excellence can create game-changing solutions. I thrive on solving complex problems, mentoring teams, and pushing the boundaries of what's possible in full-stack development.",  secondaryCta: "Get In Touch",
  avatar: "/me.jpg",
  fallback: "RK",
  stats: {
    projects: "50+",
    experience: "7+ Years",
    satisfaction: "100%"
  },
  seoTitle: "Full Stack Engineer & Senior Software Engineer - Rahul Kumar",
  seoDescription: "Experienced Full Stack Engineer with 7+ years of experience. Specializing in Java EE, JavaScript, TypeScript, React, Next.js, Node.js (MERN stack), Prisma ORM, GraphQL, Spring Boot. Passionate about working with remote, international teams to develop outstanding SaaS products."
} as const;

// Skills Section Content
export const skillsContent = {
  header: {
    badge: "Skills",
    title: "Technical Expertise",
    description: "I have more than 7 years of web development experience – since 2016."
  },
  categories: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Java", "Rust", "C++", "PHP"],
      icon: "Cpu",
      description: "Expert-level proficiency in multiple programming languages for full-stack development",
      colorScheme: "primary"
    },
    {
      category: "Frameworks",
      skills: ["Node.js", "NestJS", "Express", "Django", "Next.js", "React", "Vue.js", "Angular"],
      icon: "Monitor",
      description: "Modern web frameworks for both frontend and backend development",
      colorScheme: "accent"
    },
    {
      category: "Libraries",
      skills: ["React", "Vue", "Solid.js", "RTK", "SWR", "React-Query", "React-DND", "Redux", "Chakra-UI", "AntD", "MUI"],
      icon: "Settings",
      description: "Essential libraries and UI component frameworks for modern web development",
      colorScheme: "secondary"
    },
    {
      category: "Tools",
      skills: ["Turborepo", "Nx", "Lerna", "Vite", "Webpack", "ESLint", "Prettier", "Husky", "Jest", "Cypress"],
      icon: "Wrench",
      description: "Development tools, build systems, and monorepo management",
      colorScheme: "info"
    },
    {
      category: "Design Patterns",
      skills: ["Singleton", "Factory", "Observer", "Strategy", "Decorator", "Adapter", "Facade", "Builder", "Command", "MVC"],
      icon: "Layers",
      description: "Essential design patterns for maintainable and scalable code",
      colorScheme: "warning"
    },
    {
      category: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma ORM", "TypeORM", "Elasticsearch", "DynamoDB"],
      icon: "Database",
      description: "Database design, optimization, and management across multiple database systems",
      colorScheme: "warning"
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Jenkins", "GitLab CI/CD"],
      icon: "Cloud",
      description: "Cloud infrastructure, containerization, and CI/CD pipeline management",
      colorScheme: "info"
    },
    {
      category: "Architecture & Design",
      skills: ["System Design", "Microservices", "Event-Driven Architecture", "Domain-Driven Design", "SOLID Principles", "Clean Architecture", "CQRS", "Event Sourcing", "Hexagonal Architecture", "Onion Architecture"],
      icon: "Building",
      description: "Software architecture patterns and design principles for scalable systems",
      colorScheme: "primary"
    },
    {
      category: "Leadership & Management",
      skills: ["Team Leadership", "Technical Mentoring", "Code Reviews", "Agile/Scrum", "Project Planning", "Stakeholder Management"],
      icon: "Users",
      description: "Technical leadership, team management, and agile development practices",
      colorScheme: "success"
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Cypress", "Playwright", "Unit Testing", "Integration Testing", "E2E Testing", "TDD", "BDD"],
      icon: "TestTube",
      description: "Comprehensive testing strategies and quality assurance practices",
      colorScheme: "warning"
    },
    {
      category: "AI & Machine Learning",
      skills: ["OpenAI API", "LangChain", "Vector Databases", "Agentic AI", "Prompt Engineering", "RAG Systems", "LLM Integration"],
      icon: "Bot",
      description: "AI/ML integration, agentic AI development, and modern AI tooling",
      colorScheme: "accent"
    },
    {
      category: "Performance & Security",
      skills: ["Performance Optimization", "Web Security", "OAuth 2.0", "JWT", "Rate Limiting", "Caching Strategies", "CDN"],
      icon: "Shield",
      description: "Application performance optimization and security best practices",
      colorScheme: "destructive"
    }
  ],
  learning: {
    title: "Continuous Learning",
    description: "Always exploring new technologies and frameworks to stay current with industry trends and best practices.",
    topics: ["New Frameworks", "Cloud Technologies", "AI/ML", "DevOps", "Performance Optimization"]
  },
  proficiency: [
    // Languages
    { skill: "JavaScript", level: 95, years: "7+", category: "Languages" },
    { skill: "TypeScript", level: 90, years: "5+", category: "Languages" },
    { skill: "Python", level: 60, years: "3+", category: "Languages" },
    { skill: "Go", level: 40, years: "1+", category: "Languages" },
    { skill: "Java", level: 70, years: "4+", category: "Languages" },
    
    // Frameworks
    { skill: "Node.js", level: 90, years: "5+", category: "Frameworks" },
    { skill: "Next.js", level: 90, years: "4+", category: "Frameworks" },
    { skill: "React", level: 95, years: "6+", category: "Frameworks" },
    { skill: "Express", level: 85, years: "4+", category: "Frameworks" },
    { skill: "NestJS", level: 70, years: "2+", category: "Frameworks" },
    { skill: "Django", level: 50, years: "1+", category: "Frameworks" },
    { skill: "Vue.js", level: 60, years: "2+", category: "Frameworks" },
    { skill: "Angular", level: 55, years: "2+", category: "Frameworks" },
    
    // Libraries
    { skill: "Redux", level: 80, years: "4+", category: "Libraries" },
    { skill: "React-Query", level: 75, years: "2+", category: "Libraries" },
    { skill: "SWR", level: 70, years: "2+", category: "Libraries" },
    { skill: "Chakra-UI", level: 80, years: "3+", category: "Libraries" },
    { skill: "AntD", level: 70, years: "2+", category: "Libraries" },
    { skill: "MUI", level: 75, years: "3+", category: "Libraries" },
    { skill: "React-DND", level: 65, years: "2+", category: "Libraries" },
    { skill: "Solid.js", level: 50, years: "1+", category: "Libraries" },
    
    // Tools
    { skill: "Turborepo", level: 80, years: "2+", category: "Tools" },
    { skill: "Nx", level: 70, years: "2+", category: "Tools" },
    { skill: "Vite", level: 85, years: "3+", category: "Tools" },
    { skill: "Webpack", level: 80, years: "4+", category: "Tools" },
    { skill: "ESLint", level: 90, years: "5+", category: "Tools" },
    { skill: "Prettier", level: 90, years: "5+", category: "Tools" },
    { skill: "Jest", level: 85, years: "4+", category: "Tools" },
    { skill: "Cypress", level: 70, years: "2+", category: "Tools" },
    
    // Design Patterns
    { skill: "Singleton", level: 85, years: "4+", category: "Design Patterns" },
    { skill: "Factory", level: 80, years: "3+", category: "Design Patterns" },
    { skill: "Observer", level: 75, years: "3+", category: "Design Patterns" },
    { skill: "Strategy", level: 70, years: "2+", category: "Design Patterns" },
    { skill: "MVC", level: 90, years: "5+", category: "Design Patterns" },
    { skill: "Decorator", level: 65, years: "2+", category: "Design Patterns" },
    { skill: "Adapter", level: 70, years: "2+", category: "Design Patterns" },
    { skill: "Builder", level: 60, years: "1+", category: "Design Patterns" },
    
    // Database & Storage
    { skill: "PostgreSQL", level: 90, years: "5+", category: "Database & Storage" },
    { skill: "MongoDB", level: 90, years: "5+", category: "Database & Storage" },
    { skill: "Redis", level: 85, years: "4+", category: "Database & Storage" },
    { skill: "Prisma ORM", level: 90, years: "3+", category: "Database & Storage" },
    { skill: "Elasticsearch", level: 60, years: "2+", category: "Database & Storage" },
    
    // DevOps & Cloud
    { skill: "Docker", level: 85, years: "4+", category: "DevOps & Cloud" },
    { skill: "Kubernetes", level: 60, years: "2+", category: "DevOps & Cloud" },
    { skill: "AWS", level: 70, years: "3+", category: "DevOps & Cloud" },
    { skill: "Terraform", level: 50, years: "1+", category: "DevOps & Cloud" },
    { skill: "CI/CD", level: 80, years: "4+", category: "DevOps & Cloud" },
    
    // Architecture & Design
    { skill: "System Design", level: 75, years: "3+", category: "Architecture & Design" },
    { skill: "Microservices", level: 75, years: "3+", category: "Architecture & Design" },
    { skill: "Event-Driven Architecture", level: 70, years: "2+", category: "Architecture & Design" },
    { skill: "Domain-Driven Design", level: 65, years: "2+", category: "Architecture & Design" },
    { skill: "SOLID Principles", level: 85, years: "4+", category: "Architecture & Design" },
    { skill: "Clean Architecture", level: 70, years: "2+", category: "Architecture & Design" },
    { skill: "CQRS", level: 60, years: "1+", category: "Architecture & Design" },
    { skill: "Event Sourcing", level: 55, years: "1+", category: "Architecture & Design" },
    
    // Leadership & Management
    { skill: "Team Leadership", level: 85, years: "3+", category: "Leadership & Management" },
    { skill: "Technical Mentoring", level: 80, years: "4+", category: "Leadership & Management" },
    { skill: "Agile/Scrum", level: 90, years: "6+", category: "Leadership & Management" },
    { skill: "Code Reviews", level: 90, years: "5+", category: "Leadership & Management" },
    
    // Testing & Quality
    { skill: "Unit Testing", level: 90, years: "5+", category: "Testing & Quality" },
    { skill: "Integration Testing", level: 80, years: "4+", category: "Testing & Quality" },
    { skill: "E2E Testing", level: 75, years: "3+", category: "Testing & Quality" },
    { skill: "TDD", level: 75, years: "3+", category: "Testing & Quality" },
    { skill: "BDD", level: 70, years: "2+", category: "Testing & Quality" },
    
    // AI & Machine Learning
    { skill: "OpenAI API", level: 70, years: "2+", category: "AI & Machine Learning" },
    { skill: "LangChain", level: 60, years: "1+", category: "AI & Machine Learning" },
    { skill: "Agentic AI", level: 65, years: "1+", category: "AI & Machine Learning" },
    { skill: "Prompt Engineering", level: 70, years: "2+", category: "AI & Machine Learning" },
    
    // Performance & Security
    { skill: "Performance Optimization", level: 80, years: "4+", category: "Performance & Security" },
    { skill: "Web Security", level: 70, years: "3+", category: "Performance & Security" },
    { skill: "OAuth 2.0", level: 75, years: "3+", category: "Performance & Security" },
    { skill: "Caching Strategies", level: 80, years: "4+", category: "Performance & Security" }
  ],
  seoTitle: "Full Stack Development Skills - JavaScript, TypeScript, React, Node.js",
  seoDescription: "7+ years of web development experience with expertise in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, Prisma ORM, GraphQL, Docker, Kubernetes, and modern web technologies."
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
      logo: "/godaddy-logo.png",
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
      logo: "/metamap-logo.png",
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
      logo: "/etmoney-logo.avif",
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
      logo: "/shopclues-logo.jpg",
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
      logo: "/doubtnut.png",
      website: "https://doubtnut.com"
    }
  ],
  seoTitle: "Professional Experience - Full-Stack Developer at GoDaddy, MetaMap, ETMoney",
  seoDescription: "5+ years of professional experience as a Full-Stack Developer. Worked with GoDaddy (via EPAM), MetaMap, ETMoney (Times Internet), ShopClues, and Doubtnut. Expertise in React, Node.js, TypeScript, AWS, fintech, e-commerce, and edtech platforms."
} as const;

// Projects Section Content
export const projectsContent = {
  header: {
    badge: "Work",
    title: "Professional Projects",
    description: "A showcase of my professional work and side projects. Each project represents a unique challenge and learning opportunity."
  },
  projects: [
    {
      title: "Merchant Dashboard",
      description: "Developed a comprehensive merchant dashboard to manage transactions, track sales, and generate reports. Utilized modern frameworks to ensure a seamless and responsive user experience.",
      image: "https://ui-avatars.com/api/?name=Merchant+Dashboard&size=600&background=4F46E5&color=FFFFFF",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      seoTitle: "Merchant Dashboard - Transaction Management & Sales Tracking",
      seoDescription: "Comprehensive merchant dashboard for managing transactions, tracking sales, and generating reports with modern web technologies."
    },
    {
      title: "Web SDK Platform",
      description: "Created a robust Web SDK platform for integrating various third-party services. Ensured high performance and scalability to support multiple clients and use cases.",
      image: "https://ui-avatars.com/api/?name=Web+SDK+Platform&size=600&background=059669&color=FFFFFF",
      technologies: ["JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      seoTitle: "Web SDK Platform - Third-party Service Integration",
      seoDescription: "Robust Web SDK platform for integrating various third-party services with high performance and scalability for multiple clients."
    },
    {
      title: "Investment Portfolio Dashboards",
      description: "Designed and implemented interactive dashboards for tracking investment portfolios. Integrated real-time data feeds to provide up-to-date financial information.",
      image: "https://ui-avatars.com/api/?name=Portfolio+Dashboard&size=600&background=DC2626&color=FFFFFF",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      seoTitle: "Investment Portfolio Dashboard - Real-time Financial Tracking",
      seoDescription: "Interactive dashboards for tracking investment portfolios with real-time data feeds and financial information visualization."
    },
    {
      title: "E-commerce Web Application at Shopclues",
      description: "Built a scalable e-commerce platform with features like product management, order processing, and payment integration. Ensured high availability and performance for a seamless shopping experience.",
      image: "https://ui-avatars.com/api/?name=E-commerce+Platform&size=600&background=7C3AED&color=FFFFFF",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://www.shopclues.com",
      githubUrl: "#",
      seoTitle: "E-commerce Platform at Shopclues - Product Management & Payment Integration",
      seoDescription: "Scalable e-commerce platform with product management, order processing, and payment integration for high availability and performance."
    }
  ],
  cta: {
    title: "Have a Project in Mind?",
    description: "I'm always excited to work on new projects and collaborate with amazing people. Let's discuss how we can bring your ideas to life.",
    button: "Let's Work Together"
  },
  seoTitle: "Professional Projects - Merchant Dashboard, Web SDK, E-commerce Platform",
  seoDescription: "Showcase of professional projects including merchant dashboard, Web SDK platform, investment portfolio dashboards, and e-commerce applications built with modern web technologies."
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
      value: "rahulchoudhary666666@gmail.com",
      action: "Send Email",
      href: "mailto:rahulchoudhary666666@gmail.com",
      icon: "Mail"
    },
    {
      title: "Phone",
      description: "Call me for urgent matters",
      value: "(+91) - 9149000589",
      action: "Call",
      href: "tel:+919149000589",
      icon: "Phone"
    },
    {
      title: "Location",
      description: "Based in India",
      value: "Bulandshahr, Uttar Pradesh, India",
      action: "View",
      href: "#",
      icon: "MapPin"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/rahul1368",
      action: "Connect",
      href: "https://www.linkedin.com/in/rahul1368/",
      icon: "Briefcase"
    },
    {
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/rahul1368",
      action: "View",
      href: "https://github.com/rahul1368",
      icon: "Github"
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
  seoTitle: "Contact Full Stack Engineer - Rahul Kumar",
  seoDescription: "Ready to work on your next project? Contact Rahul Kumar, experienced Full Stack Engineer with 7+ years of experience in JavaScript, TypeScript, React, and modern web technologies."
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
    description: "Full Stack Engineer & Senior Software Engineer",
    seoDescription: "Full Stack Engineer and Senior Software Engineer with 7+ years of experience. Specializing in JavaScript, TypeScript, React, Next.js, Node.js, Java, Spring Boot, and modern web technologies. Available for freelance and full-time opportunities."
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Resume", href: "#resume" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" }
    ]
  },
  services: {
    title: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "Full Stack Development", href: "#" },
      { label: "Consulting", href: "#" },
      { label: "Code Review", href: "#" }
    ]
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Email", href: "mailto:rahulchoudhary666666@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rahul1368/" },
      { label: "GitHub", href: "https://github.com/rahul1368" },
      { label: "Phone", href: "tel:+919149000589" }
    ]
  },
  copyright: "© 2024 Created by Rahul"
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