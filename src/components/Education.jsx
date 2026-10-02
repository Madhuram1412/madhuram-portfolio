import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-900/50">
      {/* Background Subtle Accent */}
      <div 
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-brand-indigo/40 text-xs font-mono text-indigo-300 shadow-md shadow-indigo-500/10">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>02 // ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-vibrant">Foundations</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Formal computer science education and academic background directly recorded from the official resume.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 bg-gradient-to-b from-brand-cyan via-brand-indigo to-brand-fuchsia opacity-70 shadow-glow-cyan" />

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={edu.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge with Animated Ripple */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-dark-950 border-2 border-brand-cyan shadow-xl shadow-cyan-500/40 items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20" />
                    <GraduationCap className="w-5 h-5 text-cyan-300" />
                  </div>

                  {/* Content Card Side */}
                  <div className={`w-full sm:w-[calc(50%-2.2rem)] ${isEven ? 'sm:text-left sm:pl-0 sm:pr-4' : 'sm:text-left sm:pr-0 sm:pl-4'}`}>
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative group overflow-hidden">
                      
                      {/* Top Accent Strip */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia opacity-80" />

                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-400/40 font-semibold">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{edu.period}</span>
                        </span>

                        <span className={`text-[11px] font-mono px-3 py-0.5 rounded-full border font-semibold ${
                          edu.status === 'In Progress'
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400/50 shadow-sm shadow-emerald-500/20'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-slate-300 font-medium mt-1 mb-3.5">
                        <span className="text-indigo-400 font-bold">{edu.institution}</span>
                        <span className="text-slate-600">•</span>
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-mono">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{edu.location}</span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="pt-3 border-t border-slate-800 space-y-2 bg-dark-950/40 p-3 rounded-xl">
                        {edu.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty space for opposite side to balance grid */}
                  <div className="hidden sm:block w-full sm:w-[calc(50%-2.2rem)]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
