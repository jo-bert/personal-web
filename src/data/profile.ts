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

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: string;
  repoUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export interface HackathonItem {
  year: string;
  name: string;
  role: string;
  project: string;
  description: string;
  award?: string;
  technologies: string[];
}

export interface OfficiatingTournament {
  tournament: string;
  year: string;
  edition: string;
  role: string;
  matches: string[];
  notes?: string;
}

export interface AthleticsData {
  team: string;
  role: string;
  sanctioningBody: string;
  discipline: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  officiatingLog?: OfficiatingTournament[];
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
  projects: ProjectItem[];
  hackathons: HackathonItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: { language: string; proficiency: string }[];
  athletics: AthleticsData;
}

export const PROFILE_DATA: ProfileData = {
  name: "Albert Jonathan (陈)",
  title: "Full-Stack Engineer & Assistant Lead",
  subtitle:
    "Specializing in full-stack web applications, banking-grade frontend architecture, legacy modernization at scale, and Spring Boot microservices.",
  location: "Kuala Lumpur, Malaysia",
  availability: "Based in Kuala Lumpur, Malaysia",
  contact: {
    email: "albert.jonathan23@gmail.com",
    phone: "+60 17-314 9872",
    github: "https://github.com/jo-bert",
    linkedin: "https://linkedin.com/in/albertjonathan3",
  },
  stats: [
    {
      value: "6+",
      label: "Years Experience",
      detail: "Enterprise Banking & E-Commerce",
    },
    {
      value: "30K+",
      label: "Active Banking Users",
      detail: "Singapore Banking Client",
    },
    {
      value: "75%",
      label: "Faster CI/CD Builds",
      detail: "Legacy React Modernization",
    },
    {
      value: "0",
      label: "Major Vulnerabilities",
      detail: "Veracode Banking Compliance",
    },
    {
      value: "2023",
      label: "Innovation Champion",
      detail: "Accenture Technology Centre",
    },
  ],
  bio: [
    "Full-stack engineer with 6+ years delivering enterprise web applications in regulated banking and high-traffic consumer platforms.",
    "Currently serving as assistant lead / acting frontend lead for a Singapore banking client in Accenture, delivering digital forms for loans and account opening while managing the onboarding of new engineers onto existing projects. Deep expertise in React, TypeScript, PHP / Laravel, and modern build tooling, paired with production experience in Java Spring Boot microservices.",
    "Proven track record in defining architectural boundaries, mentoring multi-national engineering squads, reducing technical debt, and leading zero-downtime releases in rigorous regulatory environments.",
  ],
  skillCategories: [
    {
      title: "Frontend Engineering",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Redux Toolkit",
        "Vue 3",
        "Nuxt",
        "SvelteKit",
        "Tailwind CSS",
        "MUI",
        "SCSS",
        "Vite",
        "Webpack",
      ],
    },
    {
      title: "Backend & Microservices",
      skills: [
        "Java 11 / Spring Boot",
        "Node.js",
        "Express",
        "PHP 8 / Laravel",
        "REST APIs",
        "GraphQL",
        "Spring Security",
        "Hibernate / JPA",
      ],
    },
    {
      title: "Quality, Testing & Security",
      skills: [
        "Jest",
        "React Testing Library",
        "JUnit 5",
        "SonarQube",
        "Veracode Compliance",
        "Oxlint (Anti-Slop)",
        "AST Linting",
      ],
    },
    {
      title: "DevOps, Cloud & Data",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Cloudflare Pages",
        "Jenkins CI/CD",
        "Kibana",
        "Nginx",
        "PostgreSQL",
        "MySQL",
        "Oracle DB",
        "MongoDB",
      ],
    },
  ],
  experiences: [
    {
      company: "Accenture Technology Centre Malaysia",
      role: "Application Development Senior Analyst — Assistant Lead",
      period: "Dec 2022 – Present",
      location: "Kuala Lumpur, Malaysia",
      tagline:
        "Assistant lead on a major Singapore banking client in Accenture managing loan and account opening forms and personnel onboarding across existing projects.",
      highlights: [
        "Architectural Governance: Defined architecture standards separating UI components, business logic, and API adapters—enabling safe incremental modernization without stopping active sprint delivery.",
        "System De-risking: Proposed an alternative system architecture for a marketing analytics platform to VP & Solution Architects; adopted and deployed successfully.",
        "Delivery Stabilization: Rescued a critical banking stream experiencing team attrition by onboarding squad lead, senior PM, and 10 engineers with structured knowledge transfer.",
        "Team Leadership: Mentored 6 frontend developers; reviewed 15+ complex PRs monthly focusing on scalability, strict typing, and testability.",
        "Legacy React Overhaul: Upgraded legacy React app serving 30K+ users: removed duplicate logic and established unit-testing, yielding 75% faster builds and ~50% code reduction.",
        "Microservices & Compliance: Delivered 3 Spring Boot microservices with 30+ JUnit tests, achieving 0 major vulnerabilities under Veracode banking standards.",
        "Zero-Downtime Releases: Governed 3 production banking releases and coordinated zero-downtime rollouts across 6 banking applications.",
        "Won 2023 Innovation Champion for driving process improvements through engineering innovation.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Java 11",
        "Spring Boot",
        "Redux",
        "Tailwind CSS",
        "Jest",
        "RTL",
        "Jenkins",
        "Oracle DB",
        "Veracode",
        "TeamSite",
      ],
    },
    {
      company: "Photobook Worldwide",
      role: "Web Developer",
      period: "Aug 2019 – Dec 2022",
      location: "Kuala Lumpur, Malaysia",
      tagline:
        "High-traffic global consumer e-commerce platform processing millions in personalized print orders.",
      highlights: [
        "Consumer App Scalability: Maintained and optimized high-traffic React consumer application with MUI and SCSS across payment funnels, SEO metadata, and product previews.",
        "Production Incident Response: Diagnosed and deployed hotfixes for high-severity production incidents using Kibana log forensics across PHP/Laravel and SQL databases.",
        "Containerization & Cloud: Containerized Laravel back-office and React frontend with Docker for consistent developer environments and automated AWS cloud deployments.",
      ],
      technologies: [
        "React",
        "PHP / Laravel",
        "MySQL",
        "Docker",
        "AWS",
        "Kibana",
        "MUI",
        "REST / GraphQL",
        "SCSS",
      ],
    },
    {
      company: "Independent Freelance & Contract",
      role: "Senior Frontend Developer",
      period: "Aug 2023 – Present",
      location: "Remote / Hybrid",
      tagline:
        "High-performance specialized web projects and migration consulting.",
      highlights: [
        "100 Lighthouse Migration: Directed two remote engineers migrating a hyper-localized game marketplace from Vue to Svelte, hitting a flawless 100 Google Lighthouse score.",
        "Logistics Tracking Platform: Built a live consignment tracking web portal for an Indonesian logistics enterprise using Vue 3, Nuxt, Pinia, and Vite; deployed via Cloudflare and CircleCI.",
        "AMP-Optimized News Portal: Architected SEO-optimized AMP-ready publishing platform with React, Next.js, Zustand, and Tailwind.",
      ],
      technologies: [
        "Svelte",
        "Vue 3",
        "Nuxt",
        "Next.js",
        "Zustand",
        "Cloudflare",
        "Tailwind CSS",
        "Pinia",
      ],
    },
    {
      company: "Alps Finance",
      role: "Founding Engineer",
      period: "Mar 2022 – Jan 2023",
      location: "Remote",
      tagline:
        "Web3 DeFi asset transfer protocol and decentralized social application.",
      highlights: [
        "DeFi Protocol Integration: Architected digital asset transfer interface integrating AAVE liquidity pools and Jumper Exchange cross-chain routing.",
        "Decentralized Social Features: Integrated Lens Protocol for on-chain identity and social graphing with Polygon state verification.",
        "Distributed Team Leadership: Directed UX design, code review, and delivery cadence across 3 GitHub repositories.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "EVM Clients",
        "IPFS",
        "AAVE",
        "Lens Protocol",
      ],
    },
  ],
  projects: [
    {
      id: "weather-intelligence",
      title: "Weather Analytics & Alert Platform",
      subtitle: "Laravel 11, Inertia.js, Vue 3 & PostgreSQL Time-Series",
      description:
        "A full-stack meteorological intelligence platform featuring real-time condition monitoring, configurable alert rule triggers, historical time-series analytics, and interactive geospatial weather maps.",
      technologies: [
        "Laravel 11",
        "Inertia.js",
        "Vue 3",
        "PostgreSQL",
        "Docker Sail",
        "Leaflet",
        "Chart.js",
        "TypeScript",
      ],
      status: "Dockerized • Full Stack",
      highlights: [
        "Interactive geospatial weather maps via Leaflet and dynamic condition visualizations with Chart.js.",
        "Automated background queue jobs for data aggregation (OpenWeatherMap, WeatherAPI), API rate limiting, and configurable alert rules.",
        "PostgreSQL time-series schema with custom calculation functions and geospatial queries, containerized via Laravel Sail.",
      ],
    },
    {
      id: "curated-web-tools",
      title: "Curated Web Tools & Open-Source Utilities",
      subtitle: "Minimal Ads, Free & Open Source-Prioritized Utilities",
      description:
        "A handpicked web utility suite for small business and personal use: compressing videos down to Discord/Slack file limits (8MB / 25MB), offline-capable document conversions, and fast developer utilities without intrusive ads or paywalls.",
      technologies: [
        "Preact",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Web APIs",
      ],
      status: "Live on this site",
      demoUrl: "#tools",
      highlights: [
        "Client-side processing: Zero uploads to external servers, protecting user privacy and confidential documents.",
        "Engineered with Preact and modern tree-shaking for sub-second page loads and zero tracker footprint.",
        "Integrated into this personal platform as a free community utility for small businesses and individuals.",
      ],
    },
  ],
  hackathons: [
    {
      year: "2025",
      name: "The Great Malaysia AI Hackathon 2025",
      role: "Full-Stack Developer (Team LARP)",
      project: "LinkedIn-to-Tailored-CV Chrome Extension",
      description:
        "Engineered a Google Chrome extension enabling job seekers to dynamically tailor their CV/resume against any open LinkedIn job description in real-time. Handled text & LaTeX document parsing on AWS, piping processed inputs through in-house LLMs for automated skill-gap alignment.",
      award: "AI Hackathon Entry",
      technologies: ["Chrome Extensions", "AWS", "LaTeX", "LLMs", "TypeScript"],
    },
    {
      year: "2024",
      name: "Superteam Malaysia Solana Hackathon 2024",
      role: "Full-Stack & DeFi Architect",
      project: "Yankee Swap: Cross-Chain Yield Aggregator",
      description:
        "Architected a Solana-first cross-chain automated yield protocol powered by Wormhole messaging. Solved DeFi liquidity fragmentation by allowing Solana users to route capital into top EVM protocols (Aave, Pendle, Uniswap) without leaving Solana or hopping between chain ecosystems.",
      award: "Solana Hackathon Entry",
      technologies: ["Solana", "Wormhole", "Cross-Chain DeFi", "React", "TypeScript"],
    },
  ],
  education: [
    {
      degree: "BSc (Hons) Computer Science (Data Analytics)",
      institution:
        "Staffordshire University, UK (awarded via Asia Pacific University, Malaysia)",
      period: "2016 – 2019",
      notes: "Second Class Honours, First Division • Sydney Accord-accredited",
    },
    {
      degree: "Associate of Art",
      institution: "Portland Community College, USA",
      period: "2012 – 2015",
      notes: "Dean's List Honoree",
    },
  ],
  certifications: [
    {
      name: "Google Cloud Digital Leader",
      date: "Feb 2025",
      issuer: "Google Cloud",
    },
    {
      name: "Reinvention with Agentic AI",
      date: "April 2026",
      issuer: "Accenture / DeepLearning",
    },
  ],
  languages: [
    { language: "English", proficiency: "Fluent / Professional Working" },
    { language: "Indonesian", proficiency: "Native" },
    { language: "Malay", proficiency: "Advanced / Professional" },
    { language: "Mandarin Chinese", proficiency: "Conversational" },
  ],
  athletics: {
    team: "Malaysia Lacrosse Federation",
    role: "Active Player & Certified D1 Referee",
    sanctioningBody: "Asia Pacific Lacrosse Union (APLU)",
    discipline: "Lacrosse Sixes",
    description:
      "Competes as an active player focusing on Lacrosse Sixes for the Malaysia Lacrosse Federation and officiates high-intensity matches as a certified D1 referee sanctioned under the Asia Pacific Lacrosse Union (APLU).",
    stats: [
      { label: "Official Certification", value: "APLU Certified D1 Referee" },
      { label: "National Federation", value: "Malaysia Lacrosse Fed." },
      { label: "Discipline & Format", value: "Lacrosse Sixes" },
      { label: "On-Field Focus", value: "High-Pace Sixes & Rule Governance" },
    ],
    highlights: [
      "Sanctioned D1 Referee by the Asia Pacific Lacrosse Union (APLU), governing rules, field safety, and rapid real-time officiating on the pitch.",
      "Applies athletic discipline, split-second conflict management, and high-pressure leadership directly from the field into engineering squad leadership.",
    ],
    officiatingLog: [
      {
        tournament: "Kuala Lumpur Festival of Sixes (KLFS 2026)",
        year: "2026",
        edition: "KLFS 2026",
        role: "APLU Sanctioned D1 Referee",
        matches: [
          "Men's Sixes Championship Knockouts",
          "Group Stage Pool Play Matches",
          "Playoff Elimination Series",
        ],
        notes:
          "Officiating 30-second shot clock compliance, rapid restart transitions, and technical foul enforcement under World Lacrosse Sixes specifications.",
      },
      {
        tournament: "Kuala Lumpur Festival of Sixes (KLFS 2025)",
        year: "2025",
        edition: "KLFS 2025",
        role: "APLU Sanctioned D1 Referee",
        matches: [
          "Men's Sixes Division Playoffs",
          "Pool Play Round-Robin Matches",
          "Bronze Medal Consolation Match",
        ],
        notes:
          "Officiated inaugural regional Sixes matches, managing game tempo, bench decorum, and goal verification.",
      },
    ],
  },
};
