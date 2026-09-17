export interface DevTool {
  name: string;
  category: "compiler-linting" | "backend-security" | "ai-workflow";
  badge: string;
  tagline: string;
  url: string;
  verdict?: string;
  whyAlbertUsesIt?: string;
}

export const DEV_ARSENAL_DATA: DevTool[] = [
  {
    name: "9router",
    category: "ai-workflow",
    badge: "AI Gateway & Fallback",
    tagline: "Connects Claude Code, Codex, Cursor, Cline, Copilot, and Antigravity to free Claude/GPT/Gemini models across 40+ providers with auto-fallback and token optimization.",
    url: "https://github.com/decolua/9router",
  },
  {
    name: "Goose (by Block)",
    category: "ai-workflow",
    badge: "Native Open Source Agent",
    tagline: "Native open-source autonomous AI agent designed for CLI, terminal automation, and desktop engineering workflows.",
    url: "https://goose-docs.ai",
  },
  {
    name: "Exercism",
    category: "compiler-linting",
    badge: "Free Code Practice",
    tagline: "Free forever, non-profit coding practice platform with automated test runners and human mentorship across 70+ programming languages.",
    url: "https://exercism.org/dashboard",
  },
  {
    name: "Docmost",
    category: "backend-security",
    badge: "Open Source Wiki",
    tagline: "Open-source, self-hostable collaborative wiki and documentation software with real-time editing (Notion and Confluence alternative).",
    url: "https://docmost.com/docs/",
  },
  {
    name: "anti-slop",
    category: "compiler-linting",
    badge: "AST Linter Rules",
    tagline: "Custom Oxlint AST rules to reject AI code slop, nested type assertions, and maintain strict codebase hygiene.",
    url: "https://github.com/miqdadbadjuber/anti-slop",
  },
];
