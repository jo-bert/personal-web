export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  tagline: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  notes: string;
}

export interface CertificationItem {
  name: string;
  date: string;
  issuer: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  availability: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  stats: { value: string; label: string; detail: string }[];
  bio: string[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: { language: string; proficiency: string }[];
  athletics: {
    team: string;
    role: string;
    sanctioningBody: string;
    description: string;
  };
}

export const PROFILE_DATA: ProfileData = {
  name: "Albert Jonathan",
  title: "Full-Stack Engineer & Assistant Lead",
  subtitle: "Specializing in full-stack web applications, banking-grade frontend architecture, legacy modernization at scale, and Spring Boot microservices.",
  location: "Kuala Lumpur, Malaysia",
  availability: "Based in Kuala Lumpur, Malaysia",
  contact: {
    email: "albert.jonathan23@gmail.com",
    phone: "+60 17-314 9872",
    github: "https://github.com/jo-bert",
    linkedin: "https://linkedin.com/in/albertjonathan3",
  },
  stats: [
    { value: "6+", label: "Years Experience", detail: "Enterprise Banking & E-Commerce" },
    { value: "30K+", label: "Active Banking Users", detail: "Singapore Banking Client" },
    { value: "75%", label: "Faster CI/CD Builds", detail: "Legacy React Modernization" },
    { value: "0", label: "Major Vulnerabilities", detail: "Veracode Banking Compliance" },
    { value: "2023", label: "Innovation Champion", detail: "Accenture Technology Centre" },
  ],
  bio: [
    "Full-stack engineer with 6+ years delivering enterprise web applications in regulated banking and high-traffic consumer platforms.",
    "Currently serving as assistant lead / acting frontend lead for a Singapore banking client in Accenture, delivering digital forms for loans and account opening while managing the onboarding of new engineers onto existing projects. Deep expertise in React, TypeScript, PHP / Laravel, and modern build tooling, paired with production experience in Java Spring Boot microservices.",
    "Proven track record in defining architectural boundaries, mentoring multi-national engineering squads, reducing technical debt, and leading zero-downtime releases in rigorous regulatory environments."
  ],
  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Vue 3", "Nuxt", "SvelteKit", "Tailwind CSS", "MUI", "SCSS", "Vite", "Webpack"]
    },
    {
      title: "Backend & Microservices",
      skills: ["Java 11 / Spring Boot", "Node.js", "Express", "PHP 8 / Laravel", "REST APIs", "GraphQL", "Spring Security", "Hibernate / JPA"]
    },
    {
      title: "Quality, Testing & Security",
      skills: ["Jest", "React Testing Library", "JUnit 5", "SonarQube", "Veracode Compliance", "Oxlint (Anti-Slop)", "AST Linting"]
    },
    {
      title: "DevOps, Cloud & Data",
      skills: ["Docker", "Kubernetes", "AWS", "Cloudflare Pages", "Jenkins CI/CD", "Kibana", "Nginx", "PostgreSQL", "MySQL", "Oracle DB", "MongoDB"]
    }
  ],
  experiences: [
    {
      company: "Accenture Technology Centre Malaysia",
      role: "Application Development Senior Analyst — Assistant Lead",
      period: "Dec 2022 – Present",
      location: "Kuala Lumpur, Malaysia",
      tagline: "Assistant lead on a major Singapore banking client in Accenture managing loan and account opening forms and personnel onboarding across existing projects.",
      highlights: [
        "Architectural Governance: Defined architecture standards separating UI components, business logic, and API adapters—enabling safe incremental modernization without stopping active sprint delivery.",
        "System De-risking: Proposed an alternative system architecture for a marketing analytics platform to VP & Solution Architects; adopted and deployed successfully.",
        "Delivery Stabilization: Rescued a critical banking stream experiencing team attrition by onboarding squad lead, senior PM, and 10 engineers with structured knowledge transfer.",
        "Team Leadership: Mentored 6 frontend developers; reviewed 15+ complex PRs monthly focusing on scalability, strict typing, and testability.",
        "Legacy React Overhaul: Upgraded legacy React app serving 30K+ users: removed duplicate logic and established unit-testing, yielding 75% faster builds and ~50% code reduction.",
        "Microservices & Compliance: Delivered 3 Spring Boot microservices with 30+ JUnit tests, achieving 0 major vulnerabilities under Veracode banking standards.",
        "Zero-Downtime Releases: Governed 3 production banking releases and coordinated zero-downtime rollouts across 6 banking applications.",
        "Won 2023 Innovation Champion for driving process improvements through engineering innovation."
      ],
      technologies: ["React", "TypeScript", "Java 11", "Spring Boot", "Redux", "Tailwind CSS", "Jest", "RTL", "Jenkins", "Oracle DB", "Veracode", "TeamSite"]
    },
    {
      company: "Photobook Worldwide",
      role: "Web Developer",
      period: "Aug 2019 – Dec 2022",
      location: "Kuala Lumpur, Malaysia",
      tagline: "High-traffic global consumer e-commerce platform processing millions in personalized print orders.",
      highlights: [
        "Consumer App Scalability: Maintained and optimized high-traffic React consumer application with MUI and SCSS across payment funnels, SEO metadata, and product previews.",
        "Production Incident Response: Diagnosed and deployed hotfixes for high-severity production incidents using Kibana log forensics across PHP/Laravel and SQL databases.",
        "Containerization & Cloud: Containerized Laravel back-office and React frontend with Docker for consistent developer environments and automated AWS cloud deployments."
      ],
      technologies: ["React", "PHP / Laravel", "MySQL", "Docker", "AWS", "Kibana", "MUI", "REST / GraphQL", "SCSS"]
    },
    {
      company: "Independent Freelance & Contract",
      role: "Senior Frontend Developer",
      period: "Aug 2023 – Present",
      location: "Remote / Hybrid",
      tagline: "High-performance specialized web projects and migration consulting.",
      highlights: [
        "100 Lighthouse Migration: Directed two remote engineers migrating a hyper-localized game marketplace from Vue to Svelte, hitting a flawless 100 Google Lighthouse score.",
        "Logistics Tracking Platform: Built a live consignment tracking web portal for an Indonesian logistics enterprise using Vue 3, Nuxt, Pinia, and Vite; deployed via Cloudflare and CircleCI.",
        "AMP-Optimized News Portal: Architected SEO-optimized AMP-ready publishing platform with React, Next.js, Zustand, and Tailwind."
      ],
      technologies: ["Svelte", "Vue 3", "Nuxt", "Next.js", "Zustand", "Cloudflare", "Tailwind CSS", "Pinia"]
    },
    {
      company: "Alps Finance",
      role: "Founding Engineer",
      period: "Mar 2022 – Jan 2023",
      location: "Remote",
      tagline: "Web3 DeFi asset transfer protocol and decentralized social application.",
      highlights: [
        "DeFi Protocol Integration: Architected digital asset transfer interface integrating AAVE liquidity pools and Jumper Exchange cross-chain routing.",
        "Decentralized Social Features: Integrated Lens Protocol for on-chain identity and social graphing with Polygon state verification.",
        "Distributed Team Leadership: Directed UX design, code review, and delivery cadence across 3 GitHub repositories."
      ],
      technologies: ["React", "Next.js", "TypeScript", "GraphQL", "EVM Clients", "IPFS", "AAVE", "Lens Protocol"]
    }
  ],
  education: [
    {
      degree: "BSc (Hons) Computer Science (Data Analytics)",
      institution: "Staffordshire University, UK (awarded via Asia Pacific University, Malaysia)",
      period: "2016 – 2019",
      notes: "Second Class Honours, First Division • Sydney Accord-accredited"
    },
    {
      degree: "Associate of Art",
      institution: "Portland Community College, USA",
      period: "2012 – 2015",
      notes: "Dean's List Honoree"
    }
  ],
  certifications: [
    {
      name: "Google Cloud Digital Leader",
      date: "Feb 2025",
      issuer: "Google Cloud"
    },
    {
      name: "Reinvention with Agentic AI",
      date: "April 2026",
      issuer: "Accenture / DeepLearning"
    }
  ],
  languages: [
    { language: "English", proficiency: "Fluent / Professional Working" },
    { language: "Indonesian", proficiency: "Native" },
    { language: "Malay", proficiency: "Advanced / Professional" },
    { language: "Mandarin Chinese", proficiency: "Conversational" },
  ],
  athletics: {
    team: "Malaysia Lacrosse Federation",
    role: "Player & D1 Referee",
    sanctioningBody: "Asia Pacific Lacrosse Union (APLU)",
    description: "Plays lacrosse for the Malaysia Lacrosse Federation and officiates as a certified D1 referee sanctioned by the Asia Pacific Lacrosse Union."
  }
};

