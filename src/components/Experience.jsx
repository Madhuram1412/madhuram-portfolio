import React from 'react';
import { 
  Briefcase, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  BookOpen, 
  Terminal,
  Code
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div 
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-brand-indigo/30 text-xs font-mono text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Project-Based <span className="text-gradient">Engineering Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Represented as documented on the official resume — practical engineering experience through end-to-end academic and personal software projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => {
            const isVocabo = exp.id === 'exp-vocabo';
            const Icon = isVocabo ? BookOpen : Bot;

            return (
              <div
                key={exp.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative group transition-all duration-300 hover:border-brand-cyan/40"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-dark-900 border border-white/10 text-cyan-400 mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                          {exp.category}
                        </span>
                        <span className="text-slate-500 text-xs">•</span>
                        <span className="text-xs font-mono text-slate-400">
                          Hands-on Engineering
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-dark-950/80 border border-white/5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Exact Resume Bullets */}
                <div className="space-y-3 mb-6 bg-dark-950/40 p-4 rounded-xl border border-white/5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Technical Responsibilities & Outcomes:
                  </div>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Applied */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500 mr-2">Skills Applied:</span>
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-dark-900 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
