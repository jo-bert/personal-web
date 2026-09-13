import React, { useState } from 'react';
import { 
  MapPin, 
  FileDown, 
  Mail, 
  ArrowRight, 
  Wrench, 
  CheckCircle2, 
  GraduationCap,
  Award,
  Globe
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';
import { ARTICLES_DATA, Article } from '../data/articles.ts';

interface HomeViewProps {
  onOpenTools: () => void;
  onOpenArticle: (article: Article) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenTools, onOpenArticle }) => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const getEmail = () => {
    return ['albert', 'jonathan23', '@', 'gmail', '.', 'com'].join('');
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      
      {/* 1. Minimalist Hero */}
      <section className="space-y-6 pt-4">
        
        {/* Headline */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#23201C] tracking-tight leading-tight">
            Albert Jonathan
          </h1>
          <p className="text-lg sm:text-xl text-[#5E574D] font-medium mt-1.5">
            Full-Stack Engineer & Assistant Lead
          </p>
          <div className="flex items-center gap-1.5 text-sm text-[#544E42] mt-2 font-medium">
            <MapPin className="w-4 h-4 text-[#8C5248]" />
            <span>Kuala Lumpur, Malaysia</span>
          </div>
        </div>

        {/* Narrative / About */}
        <div className="text-base text-[#474137] leading-relaxed space-y-3 font-sans">
          <p>
            I specialize in architecting resilient frontend and full-stack systems in regulated banking and high-traffic e-commerce. Currently serving as <strong>assistant lead (acting frontend lead) for a Singapore banking client in Accenture</strong>, building digital forms for loans and account opening while managing the onboarding of new engineers onto existing projects.
          </p>
          <p>
            With 6+ years of production experience across <strong>React, TypeScript, PHP / Laravel, Next.js, Svelte, and Java Spring Boot</strong>, I focus on legacy modernization—cutting build times by 75%, pruning dead code, and maintaining zero-downtime releases. Outside of software engineering, I play competitive lacrosse for the <strong>Malaysia Lacrosse Federation</strong> and officiate as a sanctioned <strong>D1 referee</strong> under the Asia Pacific Lacrosse Union (APLU).
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/Albert_Jonathan_CV.pdf"
            download="Albert_Jonathan_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2D2823] hover:bg-[#3D3630] text-[#FAF6EE] text-sm font-medium transition-colors shadow-sm"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>

          <button
            onClick={handleEmailAction}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EFE7D8] hover:bg-[#E5DBC6] text-[#383229] border border-[#DDD0B9] text-sm font-medium transition-colors cursor-pointer"
            title={emailRevealed ? "Click to copy email address" : "Click to show email address"}
          >
            <Mail className="w-4 h-4 text-[#8C5248]" />
            {emailRevealed ? (
              <span className="font-mono text-xs sm:text-sm flex items-center gap-1.5">
                <span>{getEmail()}</span>
                {emailCopied && <span className="text-emerald-700 font-sans text-xs font-semibold">(Copied!)</span>}
              </span>
            ) : (
              <span>Show Email Address</span>
            )}
          </button>

          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#EFE7D8] hover:bg-[#E5DBC6] text-[#383229] border border-[#DDD0B9] transition-colors"
            title="GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          <a
            href={PROFILE_DATA.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#EFE7D8] hover:bg-[#E5DBC6] text-[#383229] border border-[#DDD0B9] transition-colors"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current text-[#005582]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

      </section>

      {/* 2. Special Tools Callout Card (Clean button to dedicated tools page) */}
      <section className="bg-[#FAF5EA] border border-[#E5DBC7] rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B4E1B]">
              <Wrench className="w-3.5 h-3.5" />
              <span>Curated Resources & Utilities</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#292521] tracking-tight">
              Web Tools & Open-Source Utilities
            </h2>
            <p className="text-sm text-[#5C5549] leading-relaxed">
              A private collection of zero-adware web tools for compressing videos down to 8MB/25MB for Discord/Slack, format conversions, in-browser Photoshop, and private PDF manipulation.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#8mb.video</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#Videy</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#LarkSuite</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#VERT.sh</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#CyberChef</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">#Cobalt</span>
            </div>
          </div>

          <button
            onClick={onOpenTools}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2D2823] hover:bg-[#423A33] text-[#FAF6EE] font-semibold text-sm transition-all shadow-sm shrink-0 cursor-pointer"
          >
            <span>Explore Tools Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. Streamlined Career & Leadership Highlights */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6356] font-semibold block mb-1">
            Experience & Delivery
          </span>
          <h2 className="text-2xl font-bold text-[#24201C] tracking-tight">
            Recent Roles & Engineering Impact
          </h2>
        </div>

        <div className="space-y-4">
          
          {/* Role 1: Accenture */}
          <div className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-6 transition-all hover:border-[#D8CCB5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-[#231F1B]">
                Accenture Technology Centre Malaysia
              </h3>
              <span className="text-xs font-mono text-[#544E42]">Dec 2022 – Present</span>
            </div>
            <div className="text-xs font-semibold text-[#8C5248] mb-3">
              Application Development Senior Analyst — Assistant Lead (Frontend)
            </div>
            <ul className="space-y-2 text-sm text-[#4A443B]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Assistant lead and acting frontend lead for a Singapore banking client in Accenture, delivering digital loan and account opening flows and managing engineer onboarding across existing projects.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Led legacy React modernization serving 30,000+ users: achieved 75% faster builds and ~50% code reduction.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Delivered 3 Spring Boot microservices with 30+ JUnit tests, achieving 0 major vulnerabilities under Veracode banking standards.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Won the <strong>2023 Innovation Champion</strong> award for engineering process improvements.</span>
              </li>
            </ul>
          </div>

          {/* Role 2: Photobook */}
          <div className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-6 transition-all hover:border-[#D8CCB5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-[#231F1B]">
                Photobook Worldwide
              </h3>
              <span className="text-xs font-mono text-[#544E42]">Aug 2019 – Dec 2022</span>
            </div>
            <div className="text-xs font-semibold text-[#8C5248] mb-3">
              Web Developer — High-Traffic Consumer E-Commerce
            </div>
            <ul className="space-y-2 text-sm text-[#4A443B]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Maintained and extended a global React consumer platform (MUI, SCSS), delivering improvements across SEO metadata, payment checkout flows, and product preview components.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Diagnosed and resolved critical production incidents via Laravel hotfixes and root-cause log analysis in Kibana across SQL and REST/GraphQL services.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Containerized the Laravel back-office and React frontend with Docker for consistent developer environments and cloud-native deployments on AWS.</span>
              </li>
            </ul>
          </div>

          {/* Role 3: Freelance Frontend Developer */}
          <div className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-6 transition-all hover:border-[#D8CCB5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-[#231F1B]">
                Freelance Frontend Developer
              </h3>
              <span className="text-xs font-mono text-[#544E42]">Aug 2023 – Present</span>
            </div>
            <div className="text-xs font-semibold text-[#8C5248] mb-3">
              Independent Specialist & Migration Consultant
            </div>
            <ul className="space-y-2 text-sm text-[#4A443B]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Directed migration of high-traffic game marketplace from Vue to Svelte, hitting 100 Google Lighthouse performance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Engineered live consignment tracking portal for Indonesian logistics enterprise using Vue 3, Nuxt, Pinia, and Cloudflare.</span>
              </li>
            </ul>
          </div>

          {/* Role 4: Alps Finance */}
          <div className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-6 transition-all hover:border-[#D8CCB5]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-[#231F1B]">
                Alps Finance
              </h3>
              <span className="text-xs font-mono text-[#544E42]">Mar 2022 – Jan 2023</span>
            </div>
            <div className="text-xs font-semibold text-[#8C5248] mb-3">
              Founding Engineer — Decentralized Finance & Protocols
            </div>
            <ul className="space-y-2 text-sm text-[#4A443B]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Architected digital asset transfer interface integrating AAVE liquidity pools and cross-chain routing on Polygon.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#597850] shrink-0 mt-0.5" />
                <span>Integrated Lens Protocol for decentralized social graphing and on-chain identity verification.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Education & Certifications */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6356] font-semibold block mb-1">
            Academic & Credentials
          </span>
          <h2 className="text-2xl font-bold text-[#24201C] tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Education Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C5248] font-bold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            {PROFILE_DATA.education.map((edu, idx) => (
              <div key={idx} className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-5 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#24211E]">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-[#544E42] shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#544D41]">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#544E42] pt-1">
                  {edu.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Languages Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8C5248] font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h3>

            {PROFILE_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-5 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-[#24211E]">
                    {cert.name}
                  </h4>
                  <span className="text-xs font-mono text-[#544E42] shrink-0">
                    {cert.date}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#544D41]">
                  {cert.issuer}
                </p>
              </div>
            ))}

            {/* Languages card */}
            <div className="bg-[#FAF5EA] border border-[#E8DFC9] rounded-2xl p-5 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6B6356] font-semibold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-0.5">
                {PROFILE_DATA.languages.map((lang, lIdx) => (
                  <span key={lIdx} className="text-xs px-2.5 py-1 rounded-lg bg-[#EFE7D8] text-[#3D382E] border border-[#DDD0B9]">
                    <strong>{lang.language}</strong> <span className="text-[#544E42]">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Living & Working in Malaysia (Field Notes & Guides) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6356] font-semibold block mb-1">
            Panduan & Catatan Lapangan
          </span>
          <h2 className="text-2xl font-bold text-[#24201C] tracking-tight">
            Living & Working in Malaysia
          </h2>
          <p className="mt-1 text-sm text-[#5C554A]">
            Catatan praktis seputar jalur kerja, visa ESD, transportasi harian, dan tips hidup di Kuala Lumpur (Bahasa Indonesia).
          </p>
        </div>

        <div className="divide-y divide-[#EAE0CE] border-y border-[#EAE0CE]">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
            >
              <div>
                <div className="text-xs font-mono text-[#544E42] flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[#8C5248] font-medium">{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#FBF1E1] text-[#6B4E1B] font-sans font-semibold border border-[#E8D6BD]">
                    Bahasa Indonesia
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#231F1B] group-hover:text-[#8C5248] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-[#665F53] mt-1 line-clamp-2">
                  {article.summary}
                </p>
              </div>
              <span className="text-xs font-semibold text-[#8C5248] shrink-0 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>Baca</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact & Footer Note */}
      <section className="pt-8 border-t border-[#EAE0CE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#544E42]">
        <div>
          Albert Jonathan • Kuala Lumpur, Malaysia
        </div>
        <div className="flex items-center gap-4 text-[#595246] font-medium">
          <button 
            onClick={handleEmailAction}
            className="hover:text-[#231F1B] cursor-pointer transition-colors"
          >
            {emailRevealed ? getEmail() : "Email"}
          </button>
          <span>•</span>
          <a href={PROFILE_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#231F1B]">
            LinkedIn
          </a>
          <span>•</span>
          <a href={PROFILE_DATA.contact.github} target="_blank" rel="noreferrer" className="hover:text-[#231F1B]">
            GitHub
          </a>
        </div>
      </section>

    </div>
  );
};
