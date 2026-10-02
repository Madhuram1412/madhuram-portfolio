import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Bot, 
  BookOpen, 
  Cpu, 
  Database,
  ExternalLink,
  Info,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background Accent Gradients */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="text-gradient-vibrant">Innovations</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Real-world full-stack web applications and AI-driven platforms developed by Madhuram Donawat, documented in the official resume.
          </p>
        </div>

        {/* Projects Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isVocabo = project.id === 'vocabo';
            const Icon = isVocabo ? BookOpen : Bot;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-7 sm:p-9 border border-white/10 relative group transition-all duration-400 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-950/60 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Ambient Gradient */}
                <div className={`absolute top-0 right-0 left-0 h-40 bg-gradient-to-b ${project.accent} rounded-t-3xl pointer-events-none group-hover:scale-105 transition-transform duration-500`} />

                <div>
                  {/* Category & Badge Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-dark-950/80 border border-white/10 text-slate-200 shadow-sm">
                      <span className={`w-2 h-2 rounded-full ${isVocabo ? 'bg-cyan-400' : 'bg-fuchsia-400'} animate-pulse`} />
                      <span>{project.category}</span>
                    </span>

                    <span className={`text-xs font-mono px-3.5 py-1 rounded-full border font-semibold ${project.badgeColor}`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center gap-3.5 mb-1.5">
                      <div className={`p-3 rounded-2xl bg-dark-950/90 border border-white/10 shadow-lg ${isVocabo ? 'text-cyan-400' : 'text-fuchsia-400'} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all">
                        {project.title}
                      </h3>
                    </div>
                    <p className={`text-sm font-semibold font-mono mt-1 ${isVocabo ? 'text-cyan-300' : 'text-fuchsia-300'}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-6 relative z-10">
                    {project.shortDesc}
                  </p>

                  {/* Key Resume Features List */}
                  <div className="space-y-2.5 mb-7 relative z-10 bg-dark-950/50 p-4 rounded-2xl border border-white/5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Resume-Documented Capabilities:</span>
                    </div>
                    {project.features.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isVocabo ? 'text-cyan-400' : 'text-fuchsia-400'}`} />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags (Resume Truthful) */}
                  <div className="pt-4 border-t border-slate-800/80 relative z-10 mb-6">
                    <div className="text-xs font-mono text-slate-400 mb-2.5">Technologies Used:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-dark-950/80 text-slate-200 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-shimmer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-brand-cyan/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Info className="w-3.5 h-3.5 text-cyan-200" />
                      <span>Architecture & Details</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-dark-950 hover:bg-slate-900 border border-white/10 hover:border-brand-cyan/40 transition-all hover:scale-105"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                    {project.id === 'vocabo' ? 'NLP / GenAI' : 'Agentic / RAG'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
