export interface DesktopApp {
  name: string;
  url: string;
  tag: string;
  description: string;
  whyItRocks: string;
  isFavorite?: boolean;
}

export const DESKTOP_APPS_DATA: DesktopApp[] = [
  {
    name: "ZapFast",
    url: "https://zapfast.rocks/",
    tag: "Lightweight WhatsApp Client",
    description: "A fast, lightweight, and open-source WhatsApp desktop application for Linux, macOS, and Windows.",
    whyItRocks: "Zero Electron bloatware, minimal memory and CPU usage, and snappy distraction-free messaging.",
    isFavorite: true,
  },
  {
    name: "Sumatra PDF",
    url: "https://www.sumatrapdfreader.org",
    tag: "Lightweight Document Reader",
    description: "Lightning-fast, ultra-lightweight open-source reader for PDF, eBook (ePub, Mobi), XPS, DjVu, CHM, and comic book formats.",
    whyItRocks: "Instant startup with zero background bloatware, minimal memory usage, and no intrusive ads.",
    isFavorite: true,
  },
  {
    name: "Helium Browser",
    url: "https://helium.computer",
    tag: "Privacy Desktop Browser",
    description: "Minimalist, privacy-first web browser designed to block ads, trackers, and telemetry by default with a clean and distraction-free UI.",
    whyItRocks: "No noise, no bloatware, and gives you a pure, lightweight web browsing experience.",
  },
  {
    name: "Riff (Flathub)",
    url: "https://flathub.org/apps/dev.diegovsky.Riff",
    tag: "Distraction-Free Spotify",
    description: "Lightweight, distraction-free native Spotify client for Linux desktops available on Flathub.",
    whyItRocks: "Listen to music cleanly without the CPU overhead, heavy Electron footprint, and telemetry of official desktop apps.",
  },
];
