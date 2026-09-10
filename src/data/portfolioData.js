/**
 * Portfolio Data Configuration - Soorya Sankar
 * Aligned with verified professional resume.
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
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 72000 90257",
    email: "sooryasan16@gmail.com",
    resumeUrl: "/Soorya_Sankar_Resume.pdf",
    resumeDownloadName: "Soorya_Sankar_Resume.pdf",
    bioSnippet: "Software Engineer with proven hands-on experience in architecting scalable enterprise applications, Windows systems engineering, and high-performance microservices.",
    aboutLong: "Software Engineer with proven hands-on experience in architecting scalable enterprise applications and high-performance systems. Proficient across the full stack with C#, .NET 8, ASP.NET Core, React, and Azure, alongside specialized expertise in Windows systems engineering (C, Kernel Mini-Filter Drivers, IOCTL). Proven track record of delivering resilient microservices, secure RESTful APIs, and modern UIs using Clean Architecture.",
    socialLinks: {
      github: "https://github.com/soorya1609",
      linkedin: "https://www.linkedin.com/in/soorya-sankar-software-engineer",
      email: "mailto:sooryasan16@gmail.com",
      phone: "tel:+917200090257"
    }
  },

  stats: [
    { label: "Core Tech Stack", value: ".NET 8 & C#" },
    { label: "Systems & Security", value: "Kernel / C" },
    { label: "Cloud & DevOps", value: "Azure" },
    { label: "Notice Period", value: "Immediate" }
  ],

  values: [
    {
      title: "Clean Architecture & SOLID",
      description: "Strict layer separation between domain models, use cases, persistence, and RESTful presentations.",
      icon: "Layers"
    },
    {
      title: "Systems & Kernel Security",
      description: "Deep Windows internals engineering: Mini-Filter drivers, IOCTL communication, and WinDbg BSOD analysis.",
      icon: "Zap"
    },
    {
      title: "Resilient Cloud Microservices",
      description: "Scalable Azure Function Apps, App Services, and high-throughput background data processing engines.",
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
        { name: "C# / .NET 8 & ASP.NET Core", level: 96 },
        { name: "C (Kernel Drivers & Systems)", level: 90 },
        { name: "Clean Architecture & SOLID", level: 95 },
        { name: "Entity Framework Core & LINQ", level: 92 },
        { name: "RESTful Microservices & APIs", level: 94 },
        { name: "Windows Services & IOCTL", level: 88 }
      ]
    },
    {
      name: "Frontend & UI",
      skills: [
        { name: "React 19 & React 16", level: 90 },
        { name: "TypeScript & JavaScript", level: 90 },
        { name: "HTML5 & CSS3 / SCSS", level: 92 },
        { name: "Bootstrap & Responsive Design", level: 90 },
        { name: ".NET MAUI (Cross-Platform)", level: 85 }
      ]
    },
    {
      name: "Cloud, DevOps & Security",
      skills: [
        { name: "Microsoft Azure (Functions, App Services, VMs)", level: 88 },
        { name: "Azure DevOps & CI/CD Pipelines", level: 90 },
        { name: "Git, GitHub & Branching Workflows", level: 95 },
        { name: "Memory Dumps & BSOD Debugging (WinDbg)", level: 85 },
        { name: "File System Filtering (DLP Security)", level: 88 }
      ]
    },
    {
      name: "Databases & AI",
      skills: [
        { name: "SQL Server & T-SQL", level: 90 },
        { name: "PostgreSQL (Multi-Tenancy & Indexing)", level: 90 },
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
      description: "Planned and architected the enterprise application from scratch, designing database ER diagrams, API structures, and workflow requirements. Created technical documentation, setup guides, and CI/CD pipelines with GitHub Actions and Azure DevOps to automatically build, test, and deploy updates. Led task planning, code reviews, and coding standards.",
      category: "Full Stack",
      tags: ["C#", ".NET 10", "ASP.NET Core Web API", ".NET MAUI", "PostgreSQL", "EF Core", "Azure DevOps"],
      featured: true,
      stats: "⚖️ Solution architecture & automated CI/CD pipelines",
      demoUrl: "https://github.com/soorya1609",
      githubUrl: "https://github.com/soorya1609",
      colorGradient: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)"
    },
    {
      id: "dlp-system",
      title: "Data Loss Prevention (DLP) System",
      subtitle: "Windows Kernel Mini-Filter Driver & Threat Mitigation",
      description: "Developed a Windows Mini-Filter driver in C to monitor file activity and block unauthorized file transfers across USB, Bluetooth, and network adapters. Designed an IOCTL interface to stream kernel events to user services. Diagnosed and fixed driver stability issues and kernel crashes (BSOD) using WinDbg. Built a React dashboard for administrators to view activity logs and manage security policies.",
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
      subtitle: "Low-Footprint Background Metrics & Telemetry Service",
      description: "Created lightweight Windows background services to track system activity with minimal CPU and memory usage. Built secure REST APIs to send encrypted activity logs from client systems to the central database. Packaged the application using MSI installers for seamless enterprise-wide deployment.",
      category: "Systems & Security",
      tags: ["C#", "React 16", ".NET Windows Services", ".NET Core 6 Web API", "REST APIs", "MongoDB", "MSI"],
      featured: true,
      stats: "⚙️ Low-overhead background service with encrypted telemetry",
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
      description: "Built and maintained enterprise microservices using C#, .NET 8, and Clean Architecture following SOLID principles. Developed and deployed Azure Function Apps and REST APIs to handle background data processing.",
      highlights: [
        "Built and maintained microservices using C#, .NET 8, and Clean Architecture following SOLID principles.",
        "Developed and deployed Azure Function Apps and REST APIs to handle background data processing."
      ],
      technologies: ["C#", ".NET 8", "Clean Architecture", "SOLID", "Azure Function Apps", "REST APIs", "Azure"]
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
      technologies: ["C", "C#", "Kernel Mini-Filter Drivers", "IOCTL", "WinDbg", "REST APIs", "Windows Services"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA) – Online",
      institution: "SRM Institute of Science and Technology (SRMIST), Chennai",
      period: "Feb 2025 – Present (Expected Completion: 2027)",
      honors: "Pursuing Master's Degree in Computer Applications",
      activities: "Advanced Software Architecture & Enterprise Systems"
    },
    {
      degree: "Bachelor of Arts (BA)",
      institution: "Tamil Nadu Dr. J. Jayalalithaa Music and Fine Arts University (TNJMFAU)",
      period: "May 2018 – Apr 2021",
      honors: "Graduated with Distinction",
      activities: "Creative Arts & Foundational Computing"
    }
  ],

  additionalInfo: [
    {
      title: "Architecture & Leadership",
      description: "Experience in Solution Architecture, ER diagram design, team handling, and mentoring junior developers."
    },
    {
      title: "Generative AI",
      description: "Practical experience with Prompt Engineering, LLM integrations (OpenAI / Azure OpenAI APIs), and Semantic Kernel."
    },
    {
      title: "Notice Period & Availability",
      description: "Immediate Joiner."
    }
  ]
};
