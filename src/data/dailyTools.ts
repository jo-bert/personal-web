export interface DailyTool {
  name: string;
  url: string;
  category: "video-media" | "documents-pdf" | "graphics-design" | "privacy-security" | "productivity";
  tag: string;
  description: string;
  whyItRocks: string;
  isFavorite?: boolean;
}

export const DAILY_TOOLS_DATA: DailyTool[] = [
  {
    name: "8mb.video",
    url: "https://8mb.video",
    category: "video-media",
    tag: "Video Compression",
    description: "Compresses any video down to exactly 8MB or 25MB with one click so you can share it on Discord, Slack, or email without hitting file size limits.",
    whyItRocks: "Zero watermark, no account required, adjusts bitrates intelligently without destroying audio quality.",
    isFavorite: true
  },
  {
    name: "CloudConvert",
    url: "https://cloudconvert.com",
    category: "documents-pdf",
    tag: "Universal Converter",
    description: "Converts audio, video, document, ebook, archive, image, and CAD files between 200+ formats straight in your browser.",
    whyItRocks: "High fidelity conversions (e.g. EPUB to PDF, WEBM to MP4, HEIC to JPG) without sketchy adware.",
    isFavorite: true
  },
  {
    name: "Photopea",
    url: "https://www.photopea.com",
    category: "graphics-design",
    tag: "Web Photoshop",
    description: "A full-featured web-based raster and vector image editor that looks and feels like Adobe Photoshop. Opens PSD, AI, XD, Sketch, and RAW files.",
    whyItRocks: "100% runs in your browser without desktop installation, supports layers, masks, smart filters, and keyboard shortcuts.",
    isFavorite: true
  },
  {
    name: "Stirling-PDF",
    url: "https://github.com/Stirling-Tools/Stirling-PDF",
    category: "documents-pdf",
    tag: "Open Source PDF",
    description: "Self-hosted, open-source web application for performing all operations on PDFs: split, merge, convert, OCR, watermark, redact, and re-order.",
    whyItRocks: "Does not upload your sensitive financial or legal contracts to third-party ad servers.",
    isFavorite: true
  },
  {
    name: "Squoosh.app",
    url: "https://squoosh.app",
    category: "graphics-design",
    tag: "Image Compression",
    description: "Google's open-source in-browser image compression tool with side-by-side visual comparison and instant WebP/AVIF output.",
    whyItRocks: "Client-side WebAssembly: your private photos never leave your device.",
    isFavorite: true
  },
  {
    name: "Cobalt.tools",
    url: "https://cobalt.tools",
    category: "video-media",
    tag: "Media Saver",
    description: "Minimalist, ad-free, open-source downloader for video and audio from YouTube, Twitter/X, TikTok, Instagram, and Reddit.",
    whyItRocks: "No popups, no tracking cookies, no sketchy fake download buttons.",
    isFavorite: true
  },
  {
    name: "CyberChef",
    url: "https://gchq.github.io/CyberChef",
    category: "privacy-security",
    tag: "Data Swiss Knife",
    description: "GCHQ's legendary browser-based utility for decoding Base64, extracting timestamps, beautifying JSON, hashing strings, and converting character encodings.",
    whyItRocks: "Drag-and-drop recipe pipeline handles almost any data transformation puzzle imaginable.",
    isFavorite: true
  },
  {
    name: "Excalidraw",
    url: "https://excalidraw.com",
    category: "productivity",
    tag: "Virtual Whiteboard",
    description: "Virtual collaborative whiteboard with a charming hand-drawn feel. Great for sketching system architectures, workflows, or mindmaps.",
    whyItRocks: "End-to-end encrypted sharing, zero login barrier, exports crisp SVG or PNG.",
    isFavorite: true
  },
  {
    name: "Diffchecker",
    url: "https://www.diffchecker.com",
    category: "productivity",
    tag: "Diff & Compare",
    description: "Side-by-side comparison tool that highlights the exact differences between two text documents, PDFs, spreadsheets, or images.",
    whyItRocks: "Saves hours when auditing updated agreements, contracts, or messy text copies.",
  },
  {
    name: "SVGOMG",
    url: "https://jakearchibald.github.io/svgomg",
    category: "graphics-design",
    tag: "SVG Optimizer",
    description: "Visual GUI for SVGO. Strips metadata, useless editor comments, and bloated coordinates from vector SVGs, saving 40-70% filesize.",
    whyItRocks: "Clean live preview so you can see if precision reduction affects your artwork.",
  },
  {
    name: "JustDelete.me",
    url: "https://backgroundchecks.org/justdeleteme",
    category: "privacy-security",
    tag: "Account Deletion",
    description: "A directory of direct links to delete your accounts from hundreds of web services and social platforms, color-coded by difficulty.",
    whyItRocks: "Cuts through deliberate dark patterns when you want to erase unneeded online accounts.",
  },
  {
    name: "TinyPNG / TinyJPG",
    url: "https://tinypng.com",
    category: "graphics-design",
    tag: "Quick Optimizer",
    description: "Smart lossy compression for PNG, JPEG, and WebP images. Drops file sizes by 60-80% while preserving optical transparency.",
    whyItRocks: "Drag in 20 images at once and download a clean zip in seconds.",
  },
  {
    name: "Lark Suite",
    url: "https://www.larksuite.com",
    category: "productivity",
    tag: "All-in-One Workspace",
    description: "ByteDance's unified enterprise workspace (\"Notion versi TikTok\") combining rich docs, relational tables/Base, team chat, calendar, and video meetings in one fluid app.",
    whyItRocks: "Consolidates docs, messaging, and automation into a single responsive ecosystem with generous free-tier features.",
    isFavorite: true
  },
  {
    name: "Videy",
    url: "https://videy.co",
    category: "video-media",
    tag: "Instant Video Host",
    description: "Frictionless, zero-signup video hosting. Upload clips directly from your browser and get an instant streaming link or embed with zero ads or tracking.",
    whyItRocks: "Buat upload video instantly—no account creation, no wait times, clean direct playback.",
    isFavorite: true
  },
  {
    name: "VERT.sh",
    url: "https://vert.sh/convert",
    category: "documents-pdf",
    tag: "Private In-Browser Converter",
    description: "Open-source in-browser file converter for images, audio, video, and documents. Client-side processing keeps your files on your device without server uploads.",
    whyItRocks: "Completely free, no ads, zero telemetry, and never queues your files on third-party conversion servers.",
    isFavorite: true
  },
  {
    name: "delphitools",
    url: "https://delphi.tools",
    category: "productivity",
    tag: "Indie Browser Toolkit",
    description: "A digital indie toolkit containing lightweight, zero-overhead web utilities. No accounts, no subscriptions, and everything executes locally in the browser.",
    whyItRocks: "Small, low-stakes utilities that respect user privacy without login walls or marketing popups."
  },
  {
    name: "TuneMyMusic",
    url: "https://www.tunemymusic.com/home",
    category: "productivity",
    tag: "Playlist Migrator",
    description: "Effortlessly transfer, sync, and back up music playlists between Spotify, Apple Music, YouTube Music, Deezer, and Tidal.",
    whyItRocks: "Eliminates the painful chore of rebuilding library playlists by hand when switching streaming platforms."
  },
  {
    name: "CentOS Pastebin",
    url: "https://paste.centos.org",
    category: "productivity",
    tag: "Minimalist Pastebin",
    description: "Official, ad-free pastebin service maintained by the CentOS infrastructure. Share stack traces, server configs, and terminal outputs cleanly.",
    whyItRocks: "Fast, dependable pastebin with zero annoying ads, captcha traps, or tracking scripts."
  },
  {
    name: "Helium Browser",
    url: "https://helium.computer",
    category: "productivity",
    tag: "Privacy Browser",
    description: "Minimalist, privacy-first web browser designed to block ads, trackers, and telemetry by default with a clean and distraction-free UI.",
    whyItRocks: "No noise, no bloatware, and gives you a pure, lightweight web browsing experience."
  },
  {
    name: "Riff (Flathub)",
    url: "https://flathub.org/apps/dev.diegovsky.Riff",
    category: "productivity",
    tag: "Distraction-Free Spotify",
    description: "Lightweight, distraction-free native Spotify client for Linux desktops available on Flathub.",
    whyItRocks: "Listen to music cleanly without the CPU overhead, heavy Electron footprint, and telemetry of official desktop apps."
  }
];

