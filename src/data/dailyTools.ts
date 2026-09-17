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
    name: "Stirling-PDF",
    url: "https://github.com/Stirling-Tools/Stirling-PDF",
    category: "documents-pdf",
    tag: "Open Source PDF",
    description: "Self-hosted, open-source web application for performing all operations on PDFs: split, merge, convert, OCR, watermark, redact, and re-order.",
    whyItRocks: "Does not upload your sensitive financial or legal contracts to third-party ad servers.",
    isFavorite: true,
  },
  {
    name: "Squoosh.app",
    url: "https://squoosh.app",
    category: "graphics-design",
    tag: "Image Compression",
    description: "Google Chrome Labs' open-source in-browser image compression tool with side-by-side visual comparison and instant WebP/AVIF output.",
    whyItRocks: "Client-side WebAssembly: your private photos never leave your device.",
    isFavorite: true,
  },
  {
    name: "Cobalt.tools",
    url: "https://cobalt.tools",
    category: "video-media",
    tag: "Media Saver",
    description: "Minimalist, ad-free, open-source downloader for video and audio from YouTube, Twitter/X, TikTok, Instagram, and Reddit.",
    whyItRocks: "No popups, no tracking cookies, no sketchy fake download buttons.",
    isFavorite: true,
  },
  {
    name: "Bitwarden",
    url: "https://bitwarden.com",
    category: "privacy-security",
    tag: "Open Source Password Manager",
    description: "Industry-standard, open-source password manager with end-to-end zero-knowledge encryption across desktop, mobile, and web browsers.",
    whyItRocks: "Generous free tier for personal and small business use, independently audited, and self-hostable via Vaultwarden.",
    isFavorite: true,
  },
  {
    name: "CyberChef",
    url: "https://gchq.github.io/CyberChef",
    category: "privacy-security",
    tag: "Data Swiss Knife",
    description: "GCHQ's legendary browser-based utility for decoding Base64, extracting timestamps, beautifying JSON, hashing strings, and converting character encodings.",
    whyItRocks: "Drag-and-drop recipe pipeline handles almost any data transformation puzzle imaginable.",
    isFavorite: true,
  },
  {
    name: "Excalidraw",
    url: "https://excalidraw.com",
    category: "productivity",
    tag: "Virtual Whiteboard",
    description: "Virtual collaborative whiteboard with a charming hand-drawn feel. Great for sketching system architectures, workflows, or mindmaps.",
    whyItRocks: "End-to-end encrypted sharing, zero login barrier, exports crisp SVG or PNG.",
    isFavorite: true,
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
    name: "VERT.sh",
    url: "https://vert.sh/convert",
    category: "documents-pdf",
    tag: "Private In-Browser Converter",
    description: "Open-source in-browser file converter for images, audio, video, and documents. Client-side processing keeps your files on your device without server uploads.",
    whyItRocks: "Completely free, no ads, zero telemetry, and never queues your files on third-party conversion servers.",
    isFavorite: true,
  },
  {
    name: "delphitools",
    url: "https://delphi.tools",
    category: "productivity",
    tag: "Indie Browser Toolkit",
    description: "A digital indie toolkit containing lightweight, zero-overhead web utilities. No accounts, no subscriptions, and everything executes locally in the browser.",
    whyItRocks: "Small, low-stakes utilities that respect user privacy without login walls or marketing popups.",
  },
  {
    name: "CentOS Pastebin",
    url: "https://paste.centos.org",
    category: "productivity",
    tag: "Minimalist Pastebin",
    description: "Official, ad-free pastebin service maintained by the CentOS infrastructure. Share stack traces, server configs, and terminal outputs cleanly.",
    whyItRocks: "Fast, dependable pastebin with zero annoying ads, captcha traps, or tracking scripts.",
  },
];
