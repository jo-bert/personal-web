import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const ExperienceTimeline: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <section id="experience" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proven Leadership Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Enterprise Banking</span> & High-Traffic Scale.
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            From governing release pipelines for Singapore banking clients to optimizing consumer e-commerce funnels and pioneering decentralized protocols.
          </p>
        </div>

        {/* Experience Interactive Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Company Selector Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            {PROFILE_DATA.experiences.map((exp, idx) => {
              const isSelected = selectedExp === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedExp(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-indigo-400">{exp.period}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>}
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-indigo-300">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                    {exp.role}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Experience View */}
          <div className="lg:col-span-8">
            {(() => {
              const current = PROFILE_DATA.experiences[selectedExp];

              return (
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{current.company}</span>
                        {current.location && (
                          <>
                            <span>•</span>
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-400">{current.location}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-white">{current.role}</h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{current.period}</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="py-4 text-sm text-slate-300 italic border-b border-slate-800/40">
                    "{current.tagline}"
                  </div>

                  {/* Key Highlights */}
                  <div className="py-6 space-y-3">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Key Deliverables & Architectural Milestones</h4>
                    <div className="space-y-3">
                      {current.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2.5">Technologies Leveraged</h4>
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-300 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

        {/* Education, Certifications & Multilingual Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Education Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 text-indigo-400 mb-4">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4 text-sm">
              {PROFILE_DATA.education.map((edu, idx) => (
                <div key={idx} className="pb-3 last:pb-0 border-b last:border-0 border-slate-800/60">
                  <div className="font-semibold text-white">{edu.degree}</div>
                  <div className="text-xs text-indigo-300 mt-0.5">{edu.institution}</div>
                  <div className="text-xs text-slate-400 mt-1">{edu.notes}</div>
                  <div className="text-xs font-mono text-slate-500 mt-1">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 text-purple-400 mb-4">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4 text-sm">
              {PROFILE_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="pb-3 last:pb-0 border-b last:border-0 border-slate-800/60">
                  <div className="font-semibold text-white">{cert.name}</div>
                  <div className="text-xs text-purple-300 mt-0.5">{cert.issuer}</div>
                  <div className="text-xs font-mono text-slate-400 mt-1">Issued: {cert.date}</div>
                </div>
              ))}
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Actively expanding AI & Cloud credentials</span>
                </span>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 text-cyan-400 mb-4">
              <Languages className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Global Team Fluency</h3>
            </div>
            <div className="space-y-3">
              {PROFILE_DATA.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm py-1 border-b last:border-0 border-slate-800/60">
                  <span className="font-medium text-slate-200">{lang.language}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-cyan-500/20">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
              <p className="text-xs text-slate-400 pt-2 leading-relaxed">
                Experienced collaborating and directing multi-national engineering squads across Singapore, Malaysia, Indonesia, and global teams.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
