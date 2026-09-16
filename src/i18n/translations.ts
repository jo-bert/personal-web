export type Language = "id" | "en";

export const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const stored = localStorage.getItem("user_lang");

  if (stored === "id" || stored === "en") {
    return stored;
  }

  const navLanguages = [
    navigator.language,
    ...(navigator.languages || []),
  ].filter(Boolean);

  const prefersIndonesian = navLanguages.some((lang) =>
    lang.toLowerCase().startsWith("id"),
  );

  return prefersIndonesian ? "id" : "en";
};

export const setStoredLanguage = (lang: Language) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user_lang", lang);
  }
};

export const TRANSLATIONS = {
  en: {
    nav: {
      role: "Full-Stack Engineer",
      tools: "Curated Tools",
      profile: "Profile",
      downloadCV: "Download CV",
      cvShort: "CV",
    },
    hero: {
      name: "Albert Jonathan",
      title: "Full-Stack Engineer & Assistant Lead",
      location: "Kuala Lumpur, Malaysia",
      bio1: "I specialize in architecting resilient frontend and full-stack systems in regulated banking and high-traffic e-commerce. Currently serving as assistant lead (acting frontend lead) for a Singapore banking client in Accenture, building digital forms for loans and account opening while managing the onboarding of new engineers onto existing projects.",
      bio2: "With 6+ years of production experience across React, TypeScript, PHP / Laravel, Next.js, Svelte, and Java Spring Boot, I focus on legacy modernization—cutting build times by 75%, upgrading vulnerable libraries, pruning dead code, and maintaining zero-downtime releases. Outside of software engineering, I play competitive lacrosse sixes for the Malaysia Lacrosse Federation and officiate as a sanctioned D1 referee under the Asia Pacific Lacrosse Union (APLU).",
      downloadPdf: "Download CV (PDF)",
      showEmail: "Show Email Address",
      copied: "(Copied!)",
    },
    toolsBanner: {
      tag: "Curated Resources & Utilities",
      title: "Web Tools & Open-Source Utilities",
      desc: "A handpicked collection of free, minimal-ads, and open source-prioritized tools for small business and personal use: video compression down to 8MB/25MB for Discord/Slack, format conversions, in-browser graphics, and private PDF tools.",
      button: "Explore Tools Directory",
    },
    projects: {
      tag: "Portfolio & Open Source",
      title: "Featured Projects & Containerized Apps",
      dockerizedBadge: "Dockerized",
      liveBadge: "Live On Site",
      openApp: "Open Utility",
      viewCode: "View Architecture",
    },
    hackathons: {
      tag: "Annual Engineering Ritual",
      title: "Hackathon History & Rapid Prototyping",
      subtitle:
        "Attending one hackathon every year as an annual ritual to stress-test emerging tech stacks, practice 48-hour delivery sprints, and keep engineering instincts sharp.",
      roleLabel: "Role",
      stackLabel: "Stack",
      projectLabel: "Prototype",
    },
    athletics: {
      tag: "Athletics & Officiating",
      title: "Off the Pitch: Lacrosse Sixes & D1 Officiating",
      subtitle:
        "Balancing high-stakes technical leadership with fast-paced competitive athletics and international-grade rules enforcement.",
      teamLabel: "National Team / Club",
      federationLabel: "Sanctioning Body",
      roleLabel: "Role on Field",
      disciplineLabel: "Discipline",
      logToggle: "Officiating Ledger & Tournament Log (KLFS 2025 & 2026)",
      logSubtitle:
        "Personal memory archive of tournaments, stages, and matches officiated.",
      viewScorecard: "Open Match Center",
      scorecardButton: "Open Tournament Scorecards (KLFS 2025 & 2026)",
      scorecardModalTitle: "KLFS Tournament Match Center",
      scorecardModalSubtitle:
        "Kuala Lumpur Festival of Sixes • Neutral Venue Fixtures",
      scorecardEdition2026: "KLFS 2026 (9 Matches)",
      scorecardEdition2025: "KLFS 2025 (9 Matches)",
      scorecardAllTab: "All Matches",
      scorecardOfficiatedTab: "Officiated (D1)",
      scorecardPlayedTab: "Played",
      scorecardDay: "Day",
      scorecardOffRotation: "Off Rotation / Rest Day",
      scorecardOffRotationDesc:
        "No referee assignments on Day 3 (competed in placement playoff matches as player).",
      scorecardYourTeam: "Your Team",
    },
    experience: {
      tag: "Experience & Delivery",
      title: "Recent Roles & Engineering Impact",
    },
    academic: {
      tag: "Academic & Credentials",
      title: "Education & Certifications",
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
    },
    malaysiaNotes: {
      tag: "Field Notes & Runbooks",
      title: "Living & Working in Malaysia",
      desc: "Practical runbooks on ESD employment passes, daily MRT/bus commuting, vehicle import/driving licenses, and local expat tech communities (in Bahasa Indonesia).",
      readAction: "Read Note",
      badge: "Bahasa Indonesia",
    },
    toolsPage: {
      back: "Back to Profile",
      tag: "Curated Catalog",
      title: "Useful Tools & Recommended Utilities",
      desc: "A handpicked collection of minimal-ads, free, and open source-prioritized tools for small businesses and personal use: everyday file conversions, password management, video compression, and document utilities.",
      searchPlaceholder: "Search tools, utilities, or commands...",
      dailyTab: "Daily Web Tools",
      devTab: "Developer Stack",
      noResults: "No tools found matching your search.",
      verifiedBadge: "Minimal ads, free and open source-prioritized",
      visitSite: "Visit Website",
    },
    footer: {
      location: "Albert Jonathan • Kuala Lumpur, Malaysia",
    },
  },
  id: {
    nav: {
      role: "Full-Stack Engineer",
      tools: "Koleksi Alat",
      profile: "Profil",
      downloadCV: "Unduh CV",
      cvShort: "CV",
    },
    hero: {
      name: "Albert Jonathan",
      title: "Full-Stack Engineer & Assistant Lead",
      location: "Kuala Lumpur, Malaysia",
      bio1: "Saya mengkhususkan diri dalam arsitektur sistem frontend dan full-stack yang tangguh untuk perbankan teregulasi serta platform e-commerce bertrafik tinggi. Saat ini bertugas sebagai assistant lead (acting frontend lead) untuk klien perbankan Singapura di Accenture, memimpin pengembangan formulir digital pinjaman dan pembukaan rekening serta mengelola onboarding engineer baru pada proyek yang berjalan.",
      bio2: "Dengan pengalaman produksi 6+ tahun menggunakan React, TypeScript, PHP / Laravel, Next.js, Svelte, dan Java Spring Boot, fokus saya adalah modernisasi sistem legacy—memangkas waktu build hingga 75%, membersihkan dead code, dan menjaga rilis perbankan zero-downtime. Di luar rekayasa perangkat lunak, saya bermain lacrosse sixes untuk Malaysia Lacrosse Federation dan bertugas sebagai wasit D1 tersertifikasi di bawah Asia Pacific Lacrosse Union (APLU).",
      downloadPdf: "Unduh CV (PDF)",
      showEmail: "Tampilkan Alamat Email",
      copied: "(Tersalin!)",
    },
    toolsBanner: {
      tag: "Koleksi Sumber Daya & Utilitas",
      title: "Alat Web & Utilitas Open-Source",
      desc: "Koleksi alat web gratis, minim iklan, dan mengutamakan open-source untuk kebutuhan bisnis kecil dan personal: kompresi video ke 8MB/25MB (Discord/Slack), konversi format file, edit foto di browser, dan manipulasi PDF yang aman.",
      button: "Jelajahi Direktori Alat",
    },
    projects: {
      tag: "Portofolio & Kode Terbuka",
      title: "Proyek Unggulan & Aplikasi Containerized",
      dockerizedBadge: "Dockerized",
      liveBadge: "Aktif di Web",
      openApp: "Buka Utilitas",
      viewCode: "Lihat Arsitektur",
    },
    hackathons: {
      tag: "Ritual Rekayasa Tahunan",
      title: "Riwayat Hackathon & Prototyping Cepat",
      subtitle:
        "Mengikuti satu hackathon setiap tahun sebagai ritual rutin untuk menguji ketahanan teknologi baru, melatih sprint pengiriman 48 jam, dan menjaga ketajaman naluri rekayasa.",
      roleLabel: "Peran",
      stackLabel: "Teknologi",
      projectLabel: "Prototipe",
    },
    athletics: {
      tag: "Olahraga & Perwasitan",
      title: "Di Luar Layar: Lacrosse Sixes & Wasit D1",
      subtitle:
        "Menyeimbangkan kepemimpinan teknis dengan disiplin atletik lapangan dan penegakan regulasi tingkat internasional.",
      teamLabel: "Klub / Tim Nasional",
      federationLabel: "Badan Sertifikasi",
      roleLabel: "Peran Lapangan",
      disciplineLabel: "Disiplin",
      logToggle: "Arsip Perwasitan Turnamen (KLFS 2025 & 2026)",
      logSubtitle:
        "Catatan memori pertandingan, babak gugur, dan turnamen yang dipimpin.",
      viewScorecard: "Buka Pusat Pertandingan",
      scorecardButton: "Buka Scorecard Turnamen (KLFS 2025 & 2026)",
      scorecardModalTitle: "Pusat Pertandingan Turnamen KLFS",
      scorecardModalSubtitle:
        "Kuala Lumpur Festival of Sixes • Jadwal & Skor Tanpa Tuan Rumah",
      scorecardEdition2026: "KLFS 2026 (9 Pertandingan)",
      scorecardEdition2025: "KLFS 2025 (9 Pertandingan)",
      scorecardAllTab: "Semua Pertandingan",
      scorecardOfficiatedTab: "Dipimpin (Wasit D1)",
      scorecardPlayedTab: "Dimainkan",
      scorecardDay: "Hari",
      scorecardOffRotation: "Rotasi Istirahat / Bebas Tugas",
      scorecardOffRotationDesc:
        "Tidak ada tugas wasit pada Hari ke-3 (bertanding di babak playoff penentuan).",
      scorecardYourTeam: "Tim Anda",
    },
    experience: {
      tag: "Pengalaman & Rekam Jejak",
      title: "Peran Terkini & Dampak Rekayasa",
    },
    academic: {
      tag: "Akademik & Kredensial",
      title: "Pendidikan & Sertifikasi",
      education: "Pendidikan",
      certifications: "Sertifikasi",
      languages: "Kemampuan Bahasa",
    },
    malaysiaNotes: {
      tag: "Panduan & Catatan Lapangan",
      title: "Panduan Hidup & Bekerja di Malaysia",
      desc: "Catatan praktis seputar jalur kerja, visa ESD, transportasi harian MRT/Bus, SIM/kendaraan, dan komunitas expat developer di Kuala Lumpur (Bahasa Indonesia).",
      readAction: "Baca Catatan",
      badge: "Bahasa Indonesia",
    },
    toolsPage: {
      back: "Kembali ke Profil",
      tag: "Katalog Kurasi",
      title: "Alat Praktis & Utilitas Rekomendasi",
      desc: "Koleksi pilihan alat web minim iklan, gratis, dan ramah open-source untuk bisnis kecil maupun kebutuhan pribadi: konversi file harian, manajemen password, kompresi video, dan dokumen.",
      searchPlaceholder: "Cari alat, utilitas, atau perintah...",
      dailyTab: "Alat Web Harian",
      devTab: "Stack Developer",
      noResults: "Tidak ada alat yang cocok dengan pencarian Anda.",
      verifiedBadge: "Iklan minimal, gratis, prioritas open source",
      visitSite: "Buka Situs",
    },
    footer: {
      location: "Albert Jonathan • Kuala Lumpur, Malaysia",
    },
  },
} as const;
