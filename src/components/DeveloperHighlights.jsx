import React from 'react';
import { 
  Sparkles, 
  Layout, 
  Cpu, 
  Brain, 
  Network, 
  Database, 
  Terminal, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { highlightsData } from '../data/portfolioData';

const iconMap = {
  Layout,
  Cpu,
  Sparkles,
  Brain,
  Network,
  Database,
  Terminal
};

export default function DeveloperHighlights() {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background Lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // CORE COMPETENCY PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Developer <span className="text-gradient-vibrant">Highlights</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Key areas of specialization drawn directly from the resume, reflecting hands-on software development and AI engineering capability.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;

            return (
              <div
                key={item.title}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative group flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Top Subtle Gradient Light */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-dark-950/90 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-dark-950/80 text-slate-300 border border-white/10 group-hover:border-cyan-400/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authenticity note without fake numbers */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-white/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Curated strictly from documented skills & academic projects • Zero fabricated metrics</span>
          </p>
        </div>

      </div>
    </section>
  );
}
