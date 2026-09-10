/**
 * Portfolio Data Configuration - Soorya Sankar
 * Tailored for Software Engineering, Clean Architecture, Full-Stack & API Development.
 */

export const portfolioData = {
  personal: {
    name: "Soorya Sankar",
    role: "Software Engineer",
    roles: [
      "Software Engineer",
      "Full-Stack & Backend Specialist",
      "Clean Architecture & API Architect",
      ".NET & C#",
      "Technical Leadership & Mentorship"
    ],
    status: "Available for new opportunities",
    location: "Chennai, India (Open to Remote / Global)",
    email: "sooryasan16@gmail.com",
    bioSnippet: "Engineering scalable backend architectures, high-performance web applications, and intuitive user experiences with clean code and robust domain design.",
    aboutLong: "Hello! I'm Soorya Sankar, a software engineer focused on building robust enterprise architectures, high-throughput RESTful APIs, and modern responsive user interfaces. I specialize in Clean Architecture, domain-driven design, and designing maintainable systems that scale seamlessly. From architecting secure multi-tenant PostgreSQL systems to developing interactive React and cross-platform applications, I thrive on crafting reliable end-to-end software solutions.",
    resumeUrl: "#resume",
    socialLinks: {
      github: "https://github.com/soorya1609",
      linkedin: "https://www.linkedin.com/in/soorya-sankar-software-engineer/?locale=en",
      email: "mailto:sooryasan16@gmail.com"
    }
  },

  stats: [
    { label: "Years of Engineering", value: "3+" },
    { label: "Production Solutions", value: "20+" },
    { label: "GitHub Contributions", value: "1.2k+" },
    { label: "Code Quality & Reliability", value: "100%" }
  ],

  values: [
    {
      title: "Clean Architecture",
      description: "Strict layer separation between domain rules, use cases, persistence, and presentation.",
      icon: "Layers"
    },
    {
      title: "High Performance",
      description: "Optimized SQL queries, effective caching strategies, and lean, responsive UI rendering.",
      icon: "Zap"
    },
    {
      title: "Security & Multi-Tenancy",
      description: "Zero-compromise JWT auth, granular role-based access control (RBAC), and tenant data isolation.",
      icon: "Sparkles"
    },
    {
      title: "Continuous Innovation",
      description: "Keeping pace with modern frameworks, cloud runtimes, and engineering best practices.",
      icon: "Compass"
    }
  ],

  skillCategories: [
    {
      name: "Backend & Systems",
      skills: [
        { name: "C# / .NET & ASP.NET Core", level: 94 },
        { name: "Clean Architecture & CQRS", level: 92 },
        { name: "RESTful Web APIs & WebSockets", level: 92 },
        { name: "Node.js & Express", level: 86 },
        { name: "JWT Auth & Security Protocols", level: 90 },
        { name: "Entity Framework Core & Dapper", level: 88 }
      ]
    },
    {
      name: "Frontend & Mobile",
      skills: [
        { name: "React / React 19", level: 92 },
        { name: "JavaScript (ESNext) & TypeScript", level: 90 },
        { name: "HTML5 / Modern Vanilla CSS", level: 94 },
        { name: ".NET MAUI / Mobile Apps", level: 85 },
        { name: "State Management & Responsive UI", level: 90 }
      ]
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL (Multi-Tenancy & Indexing)", level: 92 },
        { name: "Redis In-Memory Caching", level: 82 },
        { name: "Docker & Containerization", level: 84 },
        { name: "Google Cloud (Cloud Run, GCP)", level: 80 },
        { name: "Database Migrations & Optimization", level: 88 }
      ]
    },
    {
      name: "Engineering Practices",
      skills: [
        { name: "Git, GitHub & Branching Workflows", level: 95 },
        { name: "Repository & Unit of Work Patterns", level: 94 },
        { name: "CI/CD & Automated Pipelines", level: 84 },
        { name: "API Documentation (Swagger / OpenAPI)", level: 92 },
        { name: "Unit & Integration Testing", level: 82 }
      ]
    }
  ],

  projects: [
    {
      id: "case-tracker",
      title: "CaseTracker Platform",
      subtitle: "Enterprise Legal Case Management & eCourts Sync",
      description: "A comprehensive legal practice management ecosystem engineered for law firms and advocates across Tamil Nadu and Puducherry. Features Clean Architecture, ASP.NET Core Web API, PostgreSQL shared-table multi-tenancy, and .NET MAUI cross-platform clients with automated court hearing notifications.",
      category: "Full Stack",
      tags: [".NET 10", "PostgreSQL", "Clean Architecture", ".NET MAUI", "EF Core", "JWT"],
      featured: true,
      stats: "⚖️ Enterprise multi-tenant court tracking",
      demoUrl: "https://github.com/soorya1609",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)"
    },
    {
      id: "nexus-flow",
      title: "NexusFlow AI",
      subtitle: "Autonomous Workflow Orchestration Canvas",
      description: "A node-based visual workflow builder that connects multi-modal AI agents to API endpoints. Features real-time state synchronization, drag-and-drop pipeline generation, and telemetry logs.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "Canvas API"],
      featured: true,
      stats: "⚡ Sub-50ms node execution sync",
      demoUrl: "https://example.com/nexusflow",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)"
    },
    {
      id: "omni-metrics",
      title: "OmniMetrics Cloud",
      subtitle: "Distributed Observability & Trace Dashboard",
      description: "High-density monitoring suite for microservice clusters. Aggregates request latencies, error spikes, and server vitals into interactive real-time visual charts with instant anomaly alert routing.",
      category: "Full Stack",
      tags: ["React", "Chart.js", "Express", "PostgreSQL", "Docker"],
      featured: true,
      stats: "📊 Handles 50k+ metrics/sec",
      demoUrl: "https://example.com/omnimetrics",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
    },
    {
      id: "aether-design-system",
      title: "Aether UI Kit",
      subtitle: "Accessible Component Library & Tokens",
      description: "Production-ready, keyboard-navigable React design system. Built with WCAG 2.1 AAA compliance, fluid theming support, automated token export from Figma, and zero external runtime dependencies.",
      category: "Frontend",
      tags: ["React", "Vanilla CSS", "Design Tokens", "Accessibility", "NPM"],
      featured: true,
      stats: "🎨 40+ components, 100% test coverage",
      demoUrl: "https://example.com/aether-ui",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
    },
    {
      id: "pulse-store",
      title: "Pulse Edge Store",
      subtitle: "Sub-Second Headless E-Commerce Experience",
      description: "Lightning-fast digital storefront with edge cache invalidation, persistent cart syncing, instant search with auto-fuzzy match, and Stripe multi-currency checkout integration.",
      category: "Full Stack",
      tags: ["React", "Stripe API", "Node.js", "Redis", "REST"],
      featured: false,
      stats: "🚀 99 Performance Lighthouse Score",
      demoUrl: "https://example.com/pulse-store",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
    },
    {
      id: "cyber-vault",
      title: "CyberVault Pass",
      subtitle: "Client-Side Zero-Knowledge Secret Locker",
      description: "End-to-end encrypted credentials manager utilizing Web Crypto API AES-GCM 256-bit encryption. Secure master-key hashing ensures servers never receive unencrypted user credentials.",
      category: "Security & Systems",
      tags: ["React", "Web Crypto API", "Security", "PWA"],
      featured: false,
      stats: "🔒 Zero-Knowledge Architecture",
      demoUrl: "https://example.com/cybervault",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)"
    }
  ],

  experiences: [
    {
      role: "Software Engineer",
      company: "Legal Tech & Distributed Systems",
      period: "2023 - Present",
      location: "Chennai, India",
      description: "Architecting enterprise legal technology platforms, backend web APIs, and cross-platform mobile solutions utilizing Clean Architecture principles.",
      highlights: [
        "Architected CaseTracker core domain, generic repository pattern, and centralized Unit of Work persistence.",
        "Engineered PostgreSQL shared-table multi-tenant data layer ensuring robust tenant isolation.",
        "Configured secure JWT authentication, structured validation exception middleware, and standard API responses.",
        "Integrated cross-platform client flows targeting .NET MAUI mobile and responsive web portals."
      ],
      technologies: ["C#", ".NET 10", "ASP.NET Core", "PostgreSQL", "Clean Architecture", "React"]
    },
    {
      role: "Full-Stack Software Developer",
      company: "Software Engineering & Web Systems",
      period: "2021 - 2023",
      location: "Chennai, India",
      description: "Engineered scalable REST APIs, automated backend routines, and responsive single-page web applications.",
      highlights: [
        "Built responsive client portals with React and modern CSS, optimizing bundle delivery and render speeds.",
        "Developed automated data reconciliation scripts and background queue workers.",
        "Managed database schema migrations and indexing strategies for high-frequency queries."
      ],
      technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "Git", "Docker"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology / Engineering in Computer Science",
      institution: "Computer Science & Engineering",
      period: "2017 - 2021",
      honors: "First Class with Distinction",
      activities: "Specialized in Distributed Systems, Object-Oriented Design & Web Architectures"
    }
  ]
};
