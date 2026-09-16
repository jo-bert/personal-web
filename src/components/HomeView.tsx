import React, { useState } from "react";
import {
  MapPin,
  FileDown,
  Mail,
  ArrowRight,
  Wrench,
  CheckCircle2,
  GraduationCap,
  Award,
  Globe,
  Trophy,
} from "lucide-react";
import { PROFILE_DATA } from "../data/profile.ts";
import { ARTICLES_DATA, Article } from "../data/articles.ts";
import { Language, TRANSLATIONS } from "../i18n/translations.ts";
import { ScorecardModal } from "./ScorecardModal.tsx";

interface ProjectTechTagsProps {
  technologies: string[];
}

const ProjectTechTags: React.FC<ProjectTechTagsProps> = ({ technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (technologies.length <= 4) {
    return (
      <div className='flex flex-wrap gap-1.5 items-center'>
        {technologies.map((tech, tIdx) => (
          <span
            key={tIdx}
            className='text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }

  const visibleTechs = isExpanded ? technologies : technologies.slice(0, 4);
  const hiddenCount = technologies.length - 4;

  return (
    <div className='flex flex-wrap gap-1.5 items-center'>
      {visibleTechs.map((tech, tIdx) => (
        <span
          key={tIdx}
          className='text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
        >
          {tech}
        </span>
      ))}

      <div className='relative inline-flex group/tech'>
        <button
          type='button'
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-label={
            isExpanded
              ? "Show fewer technologies"
              : `Show ${hiddenCount} more technologies`
          }
          className='text-[11px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--accent-primary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] cursor-pointer transition-colors active:scale-95'
          title={
            isExpanded
              ? "Collapse"
              : `Click or tap to expand (${technologies.slice(4).join(", ")})`
          }
        >
          {isExpanded ? "−" : `+${hiddenCount}`}
        </button>

        {!isExpanded && (
          <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden md:group-hover/tech:flex flex-col items-center pointer-events-none z-30'>
            <div className='bg-slate-900 text-slate-100 dark:bg-slate-800 dark:text-slate-200 text-[10px] font-mono py-1 px-2.5 rounded-lg shadow-lg border border-slate-700 whitespace-nowrap flex items-center gap-1.5'>
              <span className='opacity-75'>Also:</span>
              <span className='text-[var(--accent-primary)] font-semibold'>
                {technologies.slice(4).join(" • ")}
              </span>
            </div>
            <div className='w-1.5 h-1.5 bg-slate-900 dark:bg-slate-800 rotate-45 -mt-0.5 border-r border-b border-slate-700'></div>
          </div>
        )}
      </div>
    </div>
  );
};

interface HomeViewProps {
  language: Language;
  onOpenTools: () => void;
  onOpenArticle: (article: Article) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  onOpenTools,
  onOpenArticle,
}) => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isScorecardOpen, setIsScorecardOpen] = useState(false);

  const [selectedScorecardEdition, setSelectedScorecardEdition] = useState<
    "2026" | "2025"
  >("2026");

  const openScorecard = (edition: "2026" | "2025" = "2026") => {
    setSelectedScorecardEdition(edition);
    setIsScorecardOpen(true);
  };

  const t = TRANSLATIONS[language];

  const getEmail = () => {
    return ["albert", "jonathan23", "@", "gmail", ".", "com"].join("");
  };

  const handleEmailAction = () => {
    const email = getEmail();

    if (!emailRevealed) {
      setEmailRevealed(true);
    } else {
      navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className='max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16'>
      {/* 1. Minimalist Hero */}
      <section className='space-y-6 pt-4'>
        {/* Headline */}
        <div>
          <h1 className='text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight'>
            {t.hero.name}
          </h1>
          <p className='text-lg sm:text-xl text-[var(--text-secondary)] font-medium mt-1.5'>
            {t.hero.title}
          </p>
          <div className='flex items-center gap-1.5 text-sm text-[var(--text-muted)] mt-2 font-medium'>
            <MapPin className='w-4 h-4 text-[var(--accent-primary)] shrink-0' />
            <span>{t.hero.location}</span>
          </div>
        </div>

        {/* Narrative / About */}
        <div className='text-base text-[var(--text-secondary)] leading-relaxed space-y-3 font-sans'>
          <p>
            {language === "id" ? (
              <>
                Saya mengkhususkan diri dalam arsitektur sistem frontend dan
                full-stack yang tangguh untuk perbankan teregulasi serta
                platform e-commerce bertrafik tinggi. Saat ini bertugas sebagai{" "}
                <strong>
                  assistant lead (acting frontend lead) untuk klien perbankan
                  Singapura di Accenture
                </strong>
                , memimpin formulir digital pinjaman dan pembukaan rekening
                serta mengelola onboarding engineer baru pada proyek yang
                berjalan.
              </>
            ) : (
              <>
                I specialize in architecting resilient frontend and full-stack
                systems in regulated banking and high-traffic e-commerce.
                Currently serving as{" "}
                <strong>
                  assistant lead (acting frontend lead) for a Singapore banking
                  client in Accenture
                </strong>
                , building digital forms for loans and account opening while
                managing the onboarding of new engineers onto existing projects.
              </>
            )}
          </p>
          <p>
            {language === "id" ? (
              <>
                Dengan pengalaman produksi 6+ tahun menggunakan{" "}
                <strong>
                  React, TypeScript, PHP / Laravel, Next.js, Svelte, dan Java
                  Spring Boot
                </strong>
                , fokus saya adalah modernisasi sistem legacy—memangkas waktu
                build hingga 75%, membersihkan dead code, dan menjaga rilis
                zero-downtime. Di luar rekayasa perangkat lunak, saya bermain
                lacrosse sixes untuk{" "}
                <strong>Malaysia Lacrosse Federation</strong> dan bertugas
                sebagai <strong>wasit D1 tersertifikasi</strong> di bawah Asia
                Pacific Lacrosse Union (APLU).
              </>
            ) : (
              <>
                With 6+ years of production experience across{" "}
                <strong>
                  React, TypeScript, PHP / Laravel, Next.js, Svelte, and Java
                  Spring Boot
                </strong>
                , I focus on legacy modernization—cutting build times by 75%,
                upgrading outdated and vulnerable libraries, pruning dead code,
                and maintaining zero-downtime releases. Outside of software
                engineering, I play competitive lacrosse sixes for the{" "}
                <strong>Malaysia Lacrosse Federation</strong> and officiate as a
                sanctioned <strong>D1 referee</strong> under the Asia Pacific
                Lacrosse Union (APLU).
              </>
            )}
          </p>
        </div>

        {/* Action Links */}
        <div className='flex flex-wrap items-center gap-3 pt-2'>
          <a
            href='/Albert_Jonathan_CV.pdf'
            download='Albert_Jonathan_CV.pdf'
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-sm font-medium transition-colors shadow-sm'
          >
            <FileDown className='w-4 h-4' />
            <span>{t.hero.downloadPdf}</span>
          </a>

          <button
            onClick={handleEmailAction}
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] text-sm font-medium transition-colors cursor-pointer'
            title={
              emailRevealed
                ? "Click to copy email address"
                : "Click to show email address"
            }
          >
            <Mail className='w-4 h-4 text-[var(--accent-primary)]' />
            {emailRevealed ? (
              <span className='font-mono text-xs sm:text-sm flex items-center gap-1.5'>
                <span>{getEmail()}</span>
                {emailCopied && (
                  <span className='text-emerald-500 font-sans text-xs font-semibold'>
                    {t.hero.copied}
                  </span>
                )}
              </span>
            ) : (
              <span>{t.hero.showEmail}</span>
            )}
          </button>

          <a
            href={PROFILE_DATA.contact.github}
            target='_blank'
            rel='noreferrer'
            className='p-2.5 rounded-xl bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors'
            title='GitHub'
          >
            <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
              <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
            </svg>
          </a>

          <a
            href={PROFILE_DATA.contact.linkedin}
            target='_blank'
            rel='noreferrer'
            className='p-2.5 rounded-xl bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors'
            title='LinkedIn'
          >
            <svg
              className='w-4 h-4 fill-current text-[#0077b5] dark:text-[#38bdf8]'
              viewBox='0 0 24 24'
            >
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
            </svg>
          </a>
        </div>
      </section>

      {/* 2. Special Tools Callout Card */}
      <section className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-sm hover:border-[var(--border-strong)] transition-all'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
          <div className='space-y-2 max-w-xl'>
            <div className='inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]'>
              <Wrench className='w-3.5 h-3.5' />
              <span>{t.toolsBanner.tag}</span>
            </div>
            <h2 className='text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
              {t.toolsBanner.title}
            </h2>
            <p className='text-sm text-[var(--text-secondary)] leading-relaxed'>
              {t.toolsBanner.desc}
            </p>
            <div className='flex flex-wrap gap-1.5 pt-1'>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #Bitwarden
              </span>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #SumatraPDF
              </span>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #8mb.video
              </span>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #StirlingPDF
              </span>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #Photopea
              </span>
              <span className='text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] border border-[var(--border-subtle)]'>
                #CyberChef
              </span>
            </div>
          </div>

          <button
            onClick={onOpenTools}
            className='inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] font-semibold text-sm transition-all shadow-sm shrink-0 cursor-pointer'
          >
            <span>{t.toolsBanner.button}</span>
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      </section>

      {/* 3. Featured Projects & Open Source */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.projects.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.projects.title}
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {PROFILE_DATA.projects.map((proj) => (
            <div
              key={proj.id}
              className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-sm'
            >
              <div className='space-y-3'>
                <div className='flex items-start justify-between gap-2'>
                  <div>
                    <span className='text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider'>
                      {proj.subtitle}
                    </span>
                    <h3 className='text-lg font-bold text-[var(--text-primary)] mt-0.5'>
                      {proj.title}
                    </h3>
                  </div>
                  <span className='px-2.5 py-0.5 rounded-full text-[11px] hidden md:inline-blockfont-mono font-medium bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] shrink-0'>
                    {proj.status}
                  </span>
                </div>

                <p className='text-sm text-[var(--text-secondary)] leading-relaxed'>
                  {proj.description}
                </p>

                <ul className='space-y-1.5 pt-1'>
                  {proj.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className='flex items-start gap-2 text-xs text-[var(--text-secondary)]'
                    >
                      <CheckCircle2 className='w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5' />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='pt-5 border-t border-[var(--border-subtle)] mt-5 flex items-center justify-between gap-3'>
                <ProjectTechTags technologies={proj.technologies} />

                {proj.id === "curated-web-tools" ? (
                  <button
                    onClick={onOpenTools}
                    className='inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer shrink-0'
                  >
                    <span>{t.projects.openApp}</span>
                    <ArrowRight className='w-3.5 h-3.5' />
                  </button>
                ) : (
                  <span className='text-xs font-mono text-[var(--text-muted)] shrink-0'>
                    Laravel Sail
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Streamlined Career & Leadership Highlights (Semi-formal structure) */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.experience.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.experience.title}
          </h2>
        </div>

        <div className='space-y-4'>
          {/* Role 1: Accenture */}
          <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all hover:border-[var(--border-strong)] shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2'>
              <h3 className='text-lg font-bold text-[var(--text-primary)]'>
                Accenture Technology Centre Malaysia
              </h3>
              <span className='text-xs font-mono text-[var(--text-muted)]'>
                Dec 2022 – Present
              </span>
            </div>
            <div className='text-xs font-semibold text-[var(--accent-primary)] mb-3'>
              Application Development Senior Analyst — Assistant Lead (Frontend)
            </div>
            <ul className='space-y-2 text-sm text-[var(--text-secondary)]'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Assistant lead and acting frontend lead for a Singapore
                  banking client in Accenture, delivering digital loan and
                  account opening flows and managing engineer onboarding across
                  existing projects.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Led legacy React modernization serving 30,000+ users: achieved
                  75% faster builds and ~50% code reduction.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Delivered 3 Spring Boot microservices with 30+ JUnit tests,
                  achieving 0 major vulnerabilities under Veracode banking
                  standards.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Won the <strong>2023 Innovation Champion</strong> award for
                  engineering process improvements.
                </span>
              </li>
            </ul>
          </div>

          {/* Role 2: Photobook */}
          <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all hover:border-[var(--border-strong)] shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2'>
              <h3 className='text-lg font-bold text-[var(--text-primary)]'>
                Photobook Worldwide
              </h3>
              <span className='text-xs font-mono text-[var(--text-muted)]'>
                Aug 2019 – Dec 2022
              </span>
            </div>
            <div className='text-xs font-semibold text-[var(--accent-primary)] mb-3'>
              Web Developer — High-Traffic Consumer E-Commerce
            </div>
            <ul className='space-y-2 text-sm text-[var(--text-secondary)]'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Maintained and extended a global React consumer platform (MUI,
                  SCSS), delivering improvements across SEO metadata, payment
                  checkout flows, and product preview components.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Diagnosed and resolved critical production incidents via
                  Laravel hotfixes and root-cause log analysis in Kibana across
                  SQL and REST/GraphQL services.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Containerized the Laravel back-office and React frontend with
                  Docker for consistent developer environments and cloud-native
                  deployments on AWS.
                </span>
              </li>
            </ul>
          </div>

          {/* Role 3: Freelance Frontend Developer */}
          <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all hover:border-[var(--border-strong)] shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2'>
              <h3 className='text-lg font-bold text-[var(--text-primary)]'>
                Freelance Frontend Developer
              </h3>
              <span className='text-xs font-mono text-[var(--text-muted)]'>
                Aug 2023 – Present
              </span>
            </div>
            <div className='text-xs font-semibold text-[var(--accent-primary)] mb-3'>
              Independent Specialist & Migration Consultant
            </div>
            <ul className='space-y-2 text-sm text-[var(--text-secondary)]'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Directed migration of high-traffic game marketplace from Vue
                  to Svelte, hitting 100 Google Lighthouse performance.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Engineered live consignment tracking portal for Indonesian
                  logistics enterprise using Vue 3, Nuxt, Pinia, and Cloudflare.
                </span>
              </li>
            </ul>
          </div>

          {/* Role 4: Alps Finance */}
          <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 transition-all hover:border-[var(--border-strong)] shadow-sm'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2'>
              <h3 className='text-lg font-bold text-[var(--text-primary)]'>
                Alps Finance
              </h3>
              <span className='text-xs font-mono text-[var(--text-muted)]'>
                Mar 2022 – Jan 2023
              </span>
            </div>
            <div className='text-xs font-semibold text-[var(--accent-primary)] mb-3'>
              Founding Engineer — Decentralized Finance & Protocols
            </div>
            <ul className='space-y-2 text-sm text-[var(--text-secondary)]'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Architected digital asset transfer interface integrating AAVE
                  liquidity pools and cross-chain routing on Polygon.
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                <span>
                  Integrated Lens Protocol for decentralized social graphing and
                  on-chain identity verification.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Education & Certifications */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.academic.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.academic.title}
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Education Column */}
          <div className='space-y-3'>
            <h3 className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold flex items-center gap-1.5'>
              <GraduationCap className='w-4 h-4' />
              <span>{t.academic.education}</span>
            </h3>

            {PROFILE_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 space-y-1 shadow-sm'
              >
                <div className='flex items-start justify-between gap-2'>
                  <h4 className='text-sm font-bold text-[var(--text-primary)]'>
                    {edu.degree}
                  </h4>
                  <span className='text-xs font-mono text-[var(--text-muted)] shrink-0'>
                    {edu.period}
                  </span>
                </div>
                <p className='text-xs font-semibold text-[var(--text-secondary)]'>
                  {edu.institution}
                </p>
                <p className='text-xs text-[var(--text-muted)] pt-1'>
                  {edu.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Languages Column */}
          <div className='space-y-3'>
            <h3 className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold flex items-center gap-1.5'>
              <Award className='w-4 h-4' />
              <span>{t.academic.certifications}</span>
            </h3>

            {PROFILE_DATA.certifications.map((cert, idx) => (
              <div
                key={idx}
                className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 space-y-1 shadow-sm'
              >
                <div className='flex items-start justify-between gap-2'>
                  <h4 className='text-sm font-bold text-[var(--text-primary)]'>
                    {cert.name}
                  </h4>
                  <span className='text-xs font-mono text-[var(--text-muted)] shrink-0'>
                    {cert.date}
                  </span>
                </div>
                <p className='text-xs font-semibold text-[var(--text-secondary)]'>
                  {cert.issuer}
                </p>
              </div>
            ))}

            {/* Languages card */}
            <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 space-y-2 shadow-sm'>
              <div className='text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-1.5'>
                <Globe className='w-3.5 h-3.5' />
                <span>{t.academic.languages}</span>
              </div>
              <div className='flex flex-wrap gap-2 pt-0.5'>
                {PROFILE_DATA.languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className='text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                  >
                    <strong>{lang.language}</strong>{" "}
                    <span className='text-[var(--text-muted)]'>
                      ({lang.proficiency})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Annual Hackathon Ritual Section (Positioned under education/certs) */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.hackathons.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.hackathons.title}
          </h2>
          <p className='mt-1 text-sm text-[var(--text-secondary)] leading-relaxed'>
            {t.hackathons.subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {PROFILE_DATA.hackathons.map((hack, hIdx) => (
            <div
              key={hIdx}
              className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-5 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all shadow-sm'
            >
              <div className='space-y-2'>
                <div className='flex items-center justify-between gap-2'>
                  <span className='px-2 py-0.5 rounded text-xs font-mono font-bold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]'>
                    {hack.year}
                  </span>
                  {hack.award && (
                    <span className='inline-flex items-center gap-1 text-[11px] font-semibold text-amber-500'>
                      <Trophy className='w-3 h-3' />
                      <span>{hack.award}</span>
                    </span>
                  )}
                </div>

                <h3 className='text-sm font-bold text-[var(--text-primary)]'>
                  {hack.name}
                </h3>

                <div className='text-xs font-medium text-[var(--accent-primary)]'>
                  {hack.role}
                </div>

                <div className='text-xs font-semibold text-[var(--text-primary)]'>
                  {hack.project}
                </div>

                <p className='text-xs text-[var(--text-secondary)] leading-relaxed pt-1'>
                  {hack.description}
                </p>
              </div>

              <div className='pt-3 border-t border-[var(--border-subtle)] mt-4 flex flex-wrap gap-1'>
                {hack.technologies.map((st, sIdx) => (
                  <span
                    key={sIdx}
                    className='text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Athletics & Officiating (Off the Pitch: Lacrosse Sixes) */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.athletics.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.athletics.title}
          </h2>
          <p className='mt-1 text-sm text-[var(--text-secondary)] leading-relaxed'>
            {t.athletics.subtitle}
          </p>
        </div>

        <div className='bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 shadow-sm hover:border-[var(--border-strong)] transition-all'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]'>
            <div className='flex items-center gap-3'>
              <div
                className='w-10 h-10 rounded-xl bg-[var(--badge-bg)] flex items-center justify-center shrink-0 border border-[var(--badge-border)] text-xl select-none'
                aria-label='Lacrosse Sixes'
              >
                🥍
              </div>
              <div>
                <h3 className='text-lg font-bold text-[var(--text-primary)]'>
                  {PROFILE_DATA.athletics.team}
                </h3>
                <p className='text-xs text-[var(--text-muted)] font-mono'>
                  {PROFILE_DATA.athletics.role} •{" "}
                  {PROFILE_DATA.athletics.discipline}
                </p>
              </div>
            </div>

            <span className='px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]'>
              APLU Sanctioned D1 Official
            </span>
          </div>

          {/* Athletic stats grid */}
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 py-5'>
            {PROFILE_DATA.athletics.stats.map((st, idx) => (
              <div
                key={idx}
                className='bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-xl p-3'
              >
                <div className='text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider'>
                  {st.label}
                </div>
                <div className='text-xs sm:text-sm font-bold text-[var(--text-primary)] mt-1'>
                  {st.value}
                </div>
              </div>
            ))}
          </div>

          <div className='pt-2 space-y-2 text-sm text-[var(--text-secondary)]'>
            <p className='leading-relaxed'>
              {PROFILE_DATA.athletics.description}
            </p>
            <ul className='space-y-1.5 pt-1'>
              {PROFILE_DATA.athletics.highlights.map((hl, hlIdx) => (
                <li
                  key={hlIdx}
                  className='flex items-start gap-2 text-xs text-[var(--text-secondary)]'
                >
                  <CheckCircle2 className='w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5' />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            {PROFILE_DATA.athletics.officiatingLog &&
              PROFILE_DATA.athletics.officiatingLog.length > 0 && (
                <details className='group mt-5 pt-4 border-t border-[var(--border-subtle)]'>
                  <summary className='flex items-center justify-between text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer select-none py-1'>
                    <span className='flex items-center gap-2'>
                      <span>🥍</span>
                      <span>{t.athletics.logToggle}</span>
                    </span>
                    <span className='text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] group-open:rotate-180 transition-transform'>
                      ▼
                    </span>
                  </summary>

                  <div className='mt-4 space-y-3 pt-1'>
                    <p className='text-xs text-[var(--text-muted)]'>
                      {t.athletics.logSubtitle}
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1'>
                      {PROFILE_DATA.athletics.officiatingLog.map(
                        (log, lIdx) => (
                          <div
                            key={lIdx}
                            className='bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-xl p-3.5 space-y-2'
                          >
                            <div className='flex items-start justify-between gap-2'>
                              <h4 className='text-xs font-bold text-[var(--text-primary)]'>
                                {log.tournament}
                              </h4>
                              <span className='text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] shrink-0'>
                                {log.year}
                              </span>
                            </div>
                            <p className='text-[11px] font-mono text-[var(--accent-primary)] font-medium'>
                              {log.role}
                            </p>
                            <ul className='space-y-1 pt-1'>
                              {log.matches.map((match, mIdx) => (
                                <li
                                  key={mIdx}
                                  className='flex items-start gap-1.5 text-xs text-[var(--text-secondary)]'
                                >
                                  <span className='text-[var(--accent-primary)] shrink-0'>
                                    •
                                  </span>
                                  <span>{match}</span>
                                </li>
                              ))}
                            </ul>
                            {log.notes && (
                              <p className='text-[11px] text-[var(--text-muted)] pt-1 border-t border-[var(--border-subtle)]/70'>
                                {log.notes}
                              </p>
                            )}
                            {log.tournament.includes("2026") && (
                              <div className='pt-1.5'>
                                <button
                                  type='button'
                                  onClick={() => openScorecard("2026")}
                                  className='inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer'
                                >
                                  <Trophy className='w-3.5 h-3.5 text-amber-400' />
                                  <span>{t.athletics.viewScorecard} (2026)</span>
                                  <ArrowRight className='w-3 h-3' />
                                </button>
                              </div>
                            )}
                            {log.tournament.includes("2025") && (
                              <div className='pt-1.5'>
                                <button
                                  type='button'
                                  onClick={() => openScorecard("2025")}
                                  className='inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:underline cursor-pointer'
                                >
                                  <Trophy className='w-3.5 h-3.5 text-amber-400' />
                                  <span>{t.athletics.viewScorecard} (2025)</span>
                                  <ArrowRight className='w-3 h-3' />
                                </button>
                              </div>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </details>
              )}
          </div>
        </div>
      </section>

      {/* 8. Living & Working in Malaysia (Field Notes & Guides) */}
      <section className='space-y-6'>
        <div>
          <span className='text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold block mb-1'>
            {t.malaysiaNotes.tag}
          </span>
          <h2 className='text-2xl font-bold text-[var(--text-primary)] tracking-tight'>
            {t.malaysiaNotes.title}
          </h2>
          <p className='mt-1 text-sm text-[var(--text-secondary)]'>
            {t.malaysiaNotes.desc}
          </p>
        </div>

        <div className='divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]'>
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className='py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group hover:bg-[var(--bg-surface-subtle)]/50 px-2 rounded-xl transition-colors'
            >
              <div>
                <div className='text-xs font-mono text-[var(--text-muted)] flex flex-wrap items-center gap-2 mb-1'>
                  <span className='text-[var(--accent-primary)] font-medium'>
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span className='px-2 py-0.5 text-[10px] rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] font-sans font-semibold border border-[var(--badge-border)]'>
                    {t.malaysiaNotes.badge}
                  </span>
                </div>
                <h3 className='text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors'>
                  {article.title}
                </h3>
                <p className='text-xs text-[var(--text-secondary)] mt-1 line-clamp-2'>
                  {article.summary}
                </p>
              </div>
              <span className='text-xs font-semibold text-[var(--accent-primary)] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1'>
                <span>{t.malaysiaNotes.readAction}</span>
                <ArrowRight className='w-3.5 h-3.5' />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Contact & Footer Note */}
      <section className='pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]'>
        <div>{t.footer.location}</div>
        <div className='flex items-center gap-4 text-[var(--text-secondary)] font-medium'>
          <button
            onClick={handleEmailAction}
            className='hover:text-[var(--accent-primary)] cursor-pointer transition-colors'
          >
            {emailRevealed ? getEmail() : "Email"}
          </button>
          <span>•</span>
          <a
            href={PROFILE_DATA.contact.linkedin}
            target='_blank'
            rel='noreferrer'
            className='hover:text-[var(--accent-primary)] transition-colors'
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={PROFILE_DATA.contact.github}
            target='_blank'
            rel='noreferrer'
            className='hover:text-[var(--accent-primary)] transition-colors'
          >
            GitHub
          </a>
        </div>
      </section>

      {/* KLFS Tournament Scorecard Modal (2026 & 2025) */}
      <ScorecardModal
        isOpen={isScorecardOpen}
        onClose={() => setIsScorecardOpen(false)}
        language={language}
        initialEdition={selectedScorecardEdition}
      />
    </div>
  );
};
