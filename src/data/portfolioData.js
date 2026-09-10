/**
 * Portfolio Data Configuration - Soorya Sankar
 * Aligned 100% with verified professional resume.
 */

export const portfolioData = {
  personal: {
    name: "Soorya Sankar",
    role: "Senior Software Engineer",
    roles: [
      "Senior Software Engineer",
      "Full-Stack & Backend Architect (.NET 8 / C#)",
      "Windows Systems & Kernel Engineer (C / Mini-Filter)",
      "Cloud & Microservices Specialist (Azure)",
      "Generative AI & Semantic Kernel Integrator"
    ],
    status: "Immediate Joiner • Open to Opportunities",
    location: "Chennai, Tamil Nadu",
    phone: "72000 90257",
    email: "sooryasan16@gmail.com",
    resumeUrl: "/Soorya_Sankar_Resume.pdf",
    resumeDownloadName: "Soorya_Sankar_Resume.pdf",
    bioSnippet: "Software Engineer with proven hands-on experience in architecting scalable enterprise applications, Windows systems engineering, and high-performance microservices.",
    aboutLong: "Software Engineer with proven hands-on experience in architecting scalable enterprise applications and high-performance systems. Proficient across the full stack with C#, .NET 8, ASP.NET Core, React, and Azure, alongside specialized expertise in Windows systems engineering (C, Kernel Mini-Filter Drivers, IOCTL). Proven track record of delivering resilient microservices, secure RESTful APIs, and modern UIs using Clean Architecture.",
    socialLinks: {
      github: "https://github.com/soorya1609",
      linkedin: "https://www.linkedin.com/in/soorya-sankar-software-engineer",
      email: "mailto:sooryasan16@gmail.com",
      phone: "tel:7200090257"
    }
  },

  stats: [
    { label: "Core Backend Stack", value: ".NET 8 & C#" },
    { label: "Low-Level Systems", value: "Kernel / C" },
    { label: "Cloud & Microservices", value: "Azure" },
    { label: "Notice Period", value: "Immediate" }
  ],

  values: [
    {
      title: "Clean Architecture & SOLID",
      description: "Strict layer separation between domain models, business logic, persistence, and RESTful presentations.",
      icon: "Layers"
    },
    {
      title: "Systems & Security Engineering",
      description: "Deep Windows internals expertise: Mini-Filter drivers, IOCTL communication, memory dump analysis & WinDbg.",
      icon: "Zap"
    },
    {
      title: "Resilient Azure Microservices",
      description: "High-throughput Azure Function Apps, App Services, and scalable background data processing pipelines.",
      icon: "Sparkles"
    },
    {
      title: "Generative AI Integration",
      description: "Practical implementation of LLM integrations using OpenAI / Azure OpenAI APIs and Semantic Kernel.",
      icon: "Compass"
    }
  ],

  skillCategories: [
    {
      name: "Backend & Systems",
      skills: [
        { name: "C# (.NET 8 / .NET Core)", level: 96 },
        { name: "C (Kernel Mini-Filter Drivers & IOCTL)", level: 90 },
        { name: "ASP.NET Core Web API", level: 95 },
        { name: "Entity Framework Core & LINQ", level: 92 },
        { name: "RESTful Microservices & Clean Architecture", level: 94 },
        { name: "SOLID Principles & Design Patterns", level: 95 },
        { name: "Windows Services & User-Kernel Comm.", level: 88 }
      ]
    },
    {
      name: "Frontend & UI",
      skills: [
        { name: "React 19 & React 16", level: 90 },
        { name: "TypeScript & JavaScript", level: 90 },
        { name: "HTML5 & CSS3 / SCSS", level: 92 },
        { name: "Bootstrap & Modern Responsive UI", level: 90 },
        { name: ".NET MAUI (Cross-Platform Apps)", level: 86 }
      ]
    },
    {
      name: "Cloud, DevOps & Debugging",
      skills: [
        { name: "Microsoft Azure (Functions, App Services, Blob, VMs)", level: 90 },
        { name: "Azure DevOps & CI/CD Pipelines", level: 92 },
        { name: "Git & GitHub Branching Workflows", level: 95 },
        { name: "Memory Dumps & BSOD Debugging (WinDbg)", level: 86 },
        { name: "File System Filtering (DLP Security)", level: 90 }
      ]
    },
    {
      name: "Databases & AI",
      skills: [
        { name: "SQL Server (T-SQL)", level: 90 },
        { name: "PostgreSQL Server", level: 90 },
        { name: "MongoDB NoSQL", level: 85 },
        { name: "Stored Procedures & Query Optimization", level: 88 },
        { name: "Generative AI (OpenAI & Semantic Kernel)", level: 86 }
      ]
    }
  ],

  projects: [
    {
      id: "case-tracker",
      title: "Case Tracker Application",
      subtitle: "Enterprise Legal Case Management & eCourts Synchronization",
      description: "Planned and architected the application from scratch, designing database ER diagrams, API structures, and workflow requirements before starting development.",
      highlights: [
        "Planned and architected the application from scratch, designing database ER diagrams, API structures, and workflow requirements before starting development.",
        "Created clear technical documentation, API specifications, and setup guides to help multiple team members onboard and write code easily.",
        "Set up CI/CD pipelines using GitHub Actions / Azure DevOps to automatically build, test, and deploy code updates from team members.",
        "Led daily task planning, conducted code reviews, and guided contributors to maintain consistent coding standards."
      ],
      category: "Enterprise & Full Stack",
      tags: ["C#", ".NET 10", "ASP.NET Core Web API", "Maui", "PostgresSQL Server", "Entity Framework Core", "Azure DevOps"],
      featured: true,
      stats: "⚖️ Complete architecture from scratch with automated CI/CD",
      demoUrl: "https://github.com/soorya1609",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)"
    },
    {
      id: "dlp-system",
      title: "Data Loss Prevention (DLP) System",
      subtitle: "Windows Kernel Mini-Filter Driver & Threat Protection",
      description: "Developed a Windows Mini-Filter driver in C to track and block unauthorized file transfers across USB, Bluetooth, and network adapters.",
      highlights: [
        "Developed a Windows Mini-Filter driver in C to track and block unauthorized file transfers (USB, Bluetooth, network).",
        "Designed an IOCTL interface to send alerts and file events from kernel mode to user services.",
        "Fixed driver stability issues and kernel crashes (BSOD) using WinDbg.",
        "Built a React dashboard for administrators to view activity logs and manage security policies."
      ],
      category: "Systems & Security",
      tags: ["C", "C#", "Windows Mini-Filter Driver", "IOCTL", "Windows Services", "React", "MongoDB", "WinDbg"],
      featured: true,
      stats: "🛡️ Real-time unauthorized transfer blocking & IOCTL communication",
      demoUrl: "https://github.com/soorya1609",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
    },
    {
      id: "monitoring-agent",
      title: "Employee Activity Monitoring Agent",
      subtitle: "Low-Footprint Background Metrics & Audit Daemon",
      description: "Created lightweight Windows background services to track system metrics with minimal CPU and memory usage.",
      highlights: [
        "Created lightweight Windows background services to track system metrics with minimal CPU and memory usage.",
        "Built secure REST APIs to send encrypted activity logs from client systems to the central database.",
        "Packaged the application using MSI installers for easy installation across enterprise machines."
      ],
      category: "Systems & Security",
      tags: ["C#", "React 16", ".NET Windows Services", ".NET Core 6 Web API", "REST APIs", "MongoDB", "MSI"],
      featured: true,
      stats: "⚙️ Low CPU/memory background daemon with encrypted telemetry",
      demoUrl: "https://github.com/soorya1609",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
    }
  ],

  experiences: [
    {
      role: "Senior Software Engineer",
      company: "KnackForge Soft Solutions",
      period: "Dec 2025 – Mar 2026",
      location: "Chennai, India",
      description: "Built and maintained microservices using C#, .NET 8, and Clean Architecture following SOLID principles. Developed and deployed Azure Function Apps and REST APIs to handle background data processing.",
      highlights: [
        "Built and maintained microservices using C#, .NET 8, and Clean Architecture following SOLID principles",
        "Developed and deployed Azure Function Apps and REST APIs to handle background data processing"
      ],
      technologies: ["C#", ".NET 8", "Clean Architecture", "SOLID Principles", "Azure Function Apps", "REST APIs", "Azure"]
    },
    {
      role: "Software Engineer",
      company: "Intechhub Solutions",
      period: "Dec 2023 – Oct 2025",
      location: "Chennai, India",
      description: "Developed low-level security and monitoring products using C, C#, and Windows Kernel drivers. Built a Windows Mini-Filter driver to monitor file activity and block unauthorized file transfers.",
      highlights: [
        "Developed low-level security and monitoring products using C, C#, and Windows Kernel drivers.",
        "Built a Windows Mini-Filter driver to monitor file activity and block unauthorized file transfers (USB, network).",
        "Led a small development team, assigned daily tasks, and fixed critical system crashes (BSOD).",
        "Handled backend development using C# .NET and REST APIs for client-server communication."
      ],
      technologies: ["C", "C#", "Windows Kernel Drivers (Mini-Filter)", "IOCTL", "WinDbg", "Windows Services", "REST APIs"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA) – Online",
      institution: "SRM Institute of Science and Technology (SRMIST), Chennai",
      period: "Feb 2025 – Present (Expected Completion: 2027)",
      honors: "Pursuing Master's Degree in Computer Applications",
      activities: "Advanced Enterprise Architectures, Cloud Platforms & Distributed Systems"
    },
    {
      degree: "Bachelor of Arts (BA)",
      institution: "Tamil Nadu Dr. J. Jayalalithaa Music and Fine Arts University (TNJMFAU)",
      period: "May 2018 – Apr 2021",
      honors: "Completed Bachelor's Degree",
      activities: "Foundation in Computing & Creative Arts"
    }
  ],

  additionalInfo: [
    {
      title: "Architecture & Leadership",
      description: "Experience in Solution Architecture, ER diagram design, team handling, and mentoring junior developers.",
      icon: "Layers"
    },
    {
      title: "Generative AI",
      description: "Practical experience with Prompt Engineering, LLM integrations (OpenAI / Azure OpenAI APIs), and Semantic Kernel.",
      icon: "Compass"
    },
    {
      title: "Notice Period & Availability",
      description: "Immediate Joiner. Ready to contribute from day one.",
      badge: "Immediate Joiner",
      icon: "Zap"
    }
  ]
};
