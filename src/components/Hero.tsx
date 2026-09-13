import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Award, 
  Gauge, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Compass, 
  Wrench, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Hero: React.FC<{ onNavigate: (sectionId: string) => void }> = ({ onNavigate }) => {
  const [activeSnippet, setActiveSnippet] = useState<'architecture' | 'antislop' | 'spring'>('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  const snippets = {
    architecture: `// Strict Decoupled Banking Architecture
// 1. Domain Boundary: UI is purely presentational
export const TransactionApprovalModal: React.FC<ModalProps> = ({ 
  transferId, 
  onApproved 
}) => {
  // Logic & side-effects live in dedicated store/hooks
  const { submitApproval, isAuthorizing } = useBankingTransaction(transferId);

  return (
    <ModalLayout title="Authorize SGD Transfer">
      <SecurityBadge level="VERACODE_COMPLIANT" />
      <ApprovalWorkflow 
        loading={isAuthorizing} 
        onConfirm={() => submitApproval(onApproved)} 
      />
    </ModalLayout>
  );
};`,
    antislop: `// Oxlint + Anti-Slop AST Rules
// Rejects low-evidence patterns before Pull Request review

export default defineConfig({
  jsPlugins: [{ name: "anti-slop", specifier: "./tools/oxlint/anti-slop" }],
  rules: {
    // ❌ Banned: Chained type laundering (as unknown as T)
    "anti-slop/no-chained-type-assertions": "error",
    // ❌ Banned: Eager quadratic array passes
    "anti-slop/no-array-filter-map": "error",
    // ❌ Banned: Unvalidated runtime typeof narrowing
    "anti-slop/no-runtime-typeof": "error",
    // 🛡️ Enforced: Strict contract boundaries & spacing
    "anti-slop/require-readable-spacing": "error",
  }
});`,
    spring: `// Banking Microservice: Spring Boot 11 + Security
@RestController
@RequestMapping("/api/v1/banking/transfers")
public class TransferController {

    private final TransferExecutionService transferService;

    @PostMapping("/{transferId}/authorize")
    @PreAuthorize("hasRole('BANKING_CUSTOMER') and hasValidSession()")
    public ResponseEntity<TransactionReceipt> authorizeTransfer(
        @PathVariable String transferId,
        @AuthenticationPrincipal JwtAuthenticationToken bearerToken
    ) {
        // Zero-downtime backward-compatible response contract
        return ResponseEntity.ok(transferService.process(transferId, bearerToken));
    }
}`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(snippets[activeSnippet]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="profile" className="relative pt-12 pb-20 overflow-hidden border-b border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges cluster */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Kuala Lumpur, Malaysia</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>2023 Innovation Champion</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                <span>100 Lighthouse Performance</span>
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">Resilient Web Systems</span> at Enterprise Scale.
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-white font-semibold">{PROFILE_DATA.name}</strong> — Acting Frontend Technical Lead at Accenture Technology Centre Malaysia. Over 6+ years delivering regulated banking solutions, microservices, and high-performance modern web apps.
              </p>
            </div>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Leading frontend for <strong>Singapore Banking Client</strong> (Onboarding & Transactions)</span>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong>75% Faster CI/CD Builds</strong> & ~50% code reduction in legacy refactors</span>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span><strong>Zero-Downtime Governance</strong> across 6 core banking applications</span>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Full-stack fluency: <strong>React, TypeScript, Svelte, Java Spring Boot</strong></span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onNavigate('malaysia')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4" />
                <span>Living in Malaysia Guide</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('daily-tools')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:border-slate-600"
              >
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Curated Web Tools</span>
              </button>

              <button
                onClick={() => onNavigate('experience')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
              >
                <span>View Career History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Header bar */}
              <div className="px-4 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">engineering_standards.ts</span>
                </div>

                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Console Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/40 text-xs font-mono">
                <button
                  onClick={() => setActiveSnippet('architecture')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                    activeSnippet === 'architecture'
                      ? 'border-indigo-500 text-indigo-300 bg-slate-900/80 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>

                <button
                  onClick={() => setActiveSnippet('antislop')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                    activeSnippet === 'antislop'
                      ? 'border-indigo-500 text-indigo-300 bg-slate-900/80 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Anti-Slop AST</span>
                </button>

                <button
                  onClick={() => setActiveSnippet('spring')}
                  className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
                    activeSnippet === 'spring'
                      ? 'border-indigo-500 text-indigo-300 bg-slate-900/80 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Spring Boot</span>
                </button>
              </div>

              {/* Code display area */}
              <div className="p-4 text-xs font-mono leading-relaxed overflow-x-auto max-h-[360px] text-slate-300 bg-slate-950/60">
                <pre>
                  <code>{snippets[activeSnippet]}</code>
                </pre>
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Veracode Compliant • 0 Code Smell</span>
                </div>
                <span className="text-slate-500">Node v22 / Java 11 / Oxlint</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
