import React, { useState, useEffect } from "react";
import { X, Trophy, Shield, Calendar, Users, Award } from "lucide-react";
import {
  KLFS_2026_MATCHES,
  KLFS_2025_MATCHES,
  KlfsMatchItem,
} from "../data/profile.ts";
import { Language, TRANSLATIONS } from "../i18n/translations.ts";

interface ScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  initialEdition?: "2026" | "2025";
}

type TabFilter = "all" | "officiated" | "played";

export const ScorecardModal: React.FC<ScorecardModalProps> = ({
  isOpen,
  onClose,
  language,
  initialEdition = "2026",
}) => {
  const [selectedEdition, setSelectedEdition] = useState<"2026" | "2025">(
    initialEdition,
  );

  const [activeTab, setActiveTab] = useState<TabFilter>("all");

  const t = TRANSLATIONS[language];

  // Sync initialEdition on open
  useEffect(() => {
    if (initialEdition) {
      setSelectedEdition(initialEdition);
    }
  }, [initialEdition, isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeDataset =
    selectedEdition === "2026" ? KLFS_2026_MATCHES : KLFS_2025_MATCHES;

  const officiatedMatchesCount = activeDataset.filter(
    (m) => m.type === "officiated",
  ).length;

  const playedMatchesCount = activeDataset.filter(
    (m) => m.type === "played",
  ).length;

  const filteredMatches = activeDataset.filter((match) => {
    if (activeTab === "all") return true;

    return match.type === activeTab;
  });

  const days: (1 | 2 | 3)[] = [1, 2, 3];

  const playedTeamLabel =
    selectedEdition === "2026" ? "Griffins" : "Selangor White Eagles";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="scorecard-title"
    >
      <div
        className="relative w-full max-w-3xl my-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl p-5 sm:p-7 text-[var(--text-primary)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Tournament Edition Switcher */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] flex items-center gap-1.5">
              <span>🥍</span>
              <span>KLFS {selectedEdition}</span>
            </span>

            {/* Edition Switcher Tabs */}
            <div className="flex items-center bg-[var(--bg-surface-subtle)] p-0.5 rounded-lg border border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={() => {
                  setSelectedEdition("2026");
                  setActiveTab("all");
                }}
                className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedEdition === "2026"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                2026 Edition (9)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedEdition("2025");
                  setActiveTab("all");
                }}
                className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedEdition === "2025"
                    ? "bg-[var(--accent-primary)] text-white shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                2025 Edition (9)
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer ml-auto"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header & Dual role banner */}
        <div className="pt-5 space-y-2">
          <h2
            id="scorecard-title"
            className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-2.5"
          >
            <Trophy className="w-6 h-6 text-amber-400 shrink-0" />
            <span>
              {t.athletics.scorecardModalTitle} ({selectedEdition})
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {t.athletics.scorecardModalSubtitle}. Neutral tournament format with
            no home vs. away advantage. Dual-track participation as an{" "}
            <strong className="text-[var(--text-primary)]">
              APLU Sanctioned D1 Referee
            </strong>{" "}
            and{" "}
            <strong className="text-[var(--text-primary)]">
              Active Men&apos;s Sixes Player
            </strong>{" "}
            representing {playedTeamLabel}.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-xl p-2.5 flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                  Officiated
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  {selectedEdition === "2026"
                    ? "5 Matches (1 M, 4 W)"
                    : "5 Matches (3 M, 2 W)"}
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-xl p-2.5 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                  Played ({playedTeamLabel})
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  {selectedEdition === "2026"
                    ? "4 Matches (7th Place Win)"
                    : "4 Matches (Pool & Placement)"}
                </div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-xl p-2.5 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                  Sanctioning & Format
                </div>
                <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                  APLU D1 • Sixes Format
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 pt-6 pb-2 border-b border-[var(--border-subtle)]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "all"
                ? "bg-[var(--accent-primary)] text-white shadow-sm"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-subtle)]"
            }`}
          >
            {t.athletics.scorecardAllTab} ({activeDataset.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("officiated")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === "officiated"
                ? "bg-[var(--accent-primary)] text-white shadow-sm"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-subtle)]"
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>
              {t.athletics.scorecardOfficiatedTab} ({officiatedMatchesCount})
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("played")}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === "played"
                ? "bg-[var(--accent-primary)] text-white shadow-sm"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-subtle)]"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>
              {t.athletics.scorecardPlayedTab} ({playedMatchesCount})
            </span>
          </button>
        </div>

        {/* Match Days */}
        <div className="pt-4 space-y-6">
          {days.map((dayNum) => {
            const dayMatches = filteredMatches.filter((m) => m.day === dayNum);

            const showOffRotation =
              selectedEdition === "2026" &&
              dayNum === 3 &&
              (activeTab === "all" || activeTab === "officiated");

            if (dayMatches.length === 0 && !showOffRotation) {
              return null;
            }

            return (
              <div key={dayNum} className="space-y-3">
                {/* Day Header */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-primary)] bg-[var(--badge-bg)] border border-[var(--badge-border)] px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {t.athletics.scorecardDay} {dayNum}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-[var(--border-subtle)]" />
                </div>

                {/* Day 3 Rest Note for Officiating */}
                {showOffRotation && (
                  <div className="bg-[var(--bg-surface-subtle)] border border-dashed border-[var(--border-subtle)] rounded-xl p-3.5 flex items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        <span>☕</span>
                        <span>{t.athletics.scorecardOffRotation} (Referee)</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)]">
                        {t.athletics.scorecardOffRotationDesc}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] shrink-0">
                      Off Rotation
                    </span>
                  </div>
                )}

                {/* Match Cards */}
                <div className="space-y-2.5">
                  {dayMatches.map((match: KlfsMatchItem) => {
                    const isPlayedByAlbert = match.type === "played";

                    const isMyTeamA = Boolean(
                      match.playedTeam &&
                        match.teamA.includes(match.playedTeam),
                    );

                    const isMyTeamB = Boolean(
                      match.playedTeam &&
                        match.teamB.includes(match.playedTeam),
                    );

                    return (
                      <div
                        key={match.id}
                        className={`border rounded-xl p-3.5 transition-all ${
                          isPlayedByAlbert && match.result === "win"
                            ? "bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/50"
                            : isPlayedByAlbert
                            ? "bg-[var(--bg-surface)] border-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/40"
                            : "bg-[var(--bg-surface-subtle)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]"
                        }`}
                      >
                        {/* Meta top bar */}
                        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-2.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className={`px-1.5 py-0.5 rounded font-semibold text-[10px] ${
                                match.divisionCode === "M"
                                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                              }`}
                            >
                              {match.divisionCode === "M"
                                ? "Men's Sixes"
                                : "Women's Sixes"}
                            </span>
                            <span className="opacity-60">•</span>
                            <span>{match.stage}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {match.type === "officiated" ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                                <Shield className="w-2.5 h-2.5" />
                                <span>APLU D1 Referee</span>
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                                <Users className="w-2.5 h-2.5" />
                                <span>Played</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Fixture Scoreboard (Neutral Venue) */}
                        <div className="grid grid-cols-1 sm:grid-cols-7 items-center gap-2 py-1">
                          {/* Team A */}
                          <div className="sm:col-span-3 flex items-center justify-start sm:justify-end gap-2">
                            <span
                              className={`text-sm sm:text-base font-bold tracking-tight ${
                                isMyTeamA
                                  ? "text-[var(--accent-primary)] font-black"
                                  : "text-[var(--text-primary)]"
                              }`}
                            >
                              {match.teamA}
                            </span>
                            {isMyTeamA && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                                {t.athletics.scorecardYourTeam}
                              </span>
                            )}
                          </div>

                          {/* Neutral Centered Score Pill */}
                          <div className="sm:col-span-1 flex justify-center my-0.5 sm:my-0">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono font-black text-sm sm:text-base shadow-sm">
                              <span
                                className={
                                  match.scoreA > match.scoreB
                                    ? "text-[var(--accent-primary)] font-black"
                                    : match.scoreA === match.scoreB
                                    ? "text-[var(--text-primary)] font-bold"
                                    : "text-[var(--text-secondary)]"
                                }
                              >
                                {match.scoreA}
                              </span>
                              <span className="text-[var(--text-muted)] font-normal text-xs">
                                –
                              </span>
                              <span
                                className={
                                  match.scoreB > match.scoreA
                                    ? "text-[var(--accent-primary)] font-black"
                                    : match.scoreA === match.scoreB
                                    ? "text-[var(--text-primary)] font-bold"
                                    : "text-[var(--text-secondary)]"
                                }
                              >
                                {match.scoreB}
                              </span>
                            </div>
                          </div>

                          {/* Team B */}
                          <div className="sm:col-span-3 flex items-center justify-start sm:justify-start gap-2">
                            <span
                              className={`text-sm sm:text-base font-bold tracking-tight ${
                                isMyTeamB
                                  ? "text-[var(--accent-primary)] font-black"
                                  : "text-[var(--text-primary)]"
                              }`}
                            >
                              {match.teamB}
                            </span>
                            {isMyTeamB && (
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--badge-bg)] text-[var(--accent-primary)] border border-[var(--badge-border)]">
                                {t.athletics.scorecardYourTeam}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Note / Result tag if present */}
                        {match.note && (
                          <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                            <span className="flex items-center gap-1.5 font-medium text-[var(--text-secondary)]">
                              <span>ℹ️</span>
                              <span>{match.note}</span>
                            </span>
                            {match.result === "win" && (
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                Win
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <div>World Lacrosse Sixes Format • Neutral Venue Fixtures</div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] font-medium transition-colors cursor-pointer"
          >
            Close Scorecard
          </button>
        </div>
      </div>
    </div>
  );
};
