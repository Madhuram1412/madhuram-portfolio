import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Sparkles, 
  Cpu, 
  Layers, 
  Database, 
  Compass, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Terminal,
  Brain,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const highlightCards = [
  {
    title: "Computer Science",
    icon: GraduationCap,
    gradient: "from-blue-500/25 via-cyan-500/10 to-transparent",
    border: "border-blue-500/40 hover:border-blue-400/80 hover:shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    badge: "B.Tech CSE 2023–2027",
    desc: "Undergraduate student at Mahakal Institute of Technology with rigorous study in core computing principles, system foundations, and modern software design."
  },
  {
    title: "Software Development",
    icon: Code,
    gradient: "from-cyan-500/25 via-indigo-500/10 to-transparent",
    border: "border-cyan-500/40 hover:border-cyan-300/80 hover:shadow-cyan-500/20",
    iconColor: "text-cyan-300",
    badge: "Full-Stack Web",
    desc: "Hands-on builder developing full-stack web applications with responsive interfaces, robust logic, user progress tracking, and persistent databases."
  },
  {
    title: "AI & Generative AI",
    icon: Brain,
    gradient: "from-fuchsia-500/25 via-purple-500/10 to-transparent",
    border: "border-fuchsia-500/40 hover:border-fuchsia-400/80 hover:shadow-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
    badge: "LLM & RAG Models",
    desc: "Integrating state-of-the-art AI and Large Language Models to power contextual learning, automated query understanding, and conversational intelligence."
  },
  {
    title: "Problem Solving",
    icon: Layers,
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    border: "border-emerald-500/40 hover:border-emerald-400/80 hover:shadow-emerald-500/20",
    iconColor: "text-emerald-400",
    badge: "DSA & OOP & DBMS",
    desc: "Grounded in foundational algorithms, data structures, object-oriented concepts in C++/Python, and structured relational queries with SQL & MySQL."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-brand-cyan/15 via-brand-indigo/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering with <span className="text-gradient-vibrant">Logic & Intelligence</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            A dedicated Computer Science student preparing for full-time software engineering roles by building practical full-stack and AI applications.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: Bio & Academic Snapshot */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-white/10 relative shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span>Who I Am</span>
                <span className="w-12 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia rounded-full" />
              </h3>

              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              {/* Verified Resume Quick Specs */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800 text-xs font-mono">
                <div className="bg-dark-950/80 p-3.5 rounded-2xl border border-white/10 shadow-sm">
                  <div className="text-slate-400">Location</div>
                  <div className="text-slate-100 font-bold flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personalInfo.contact.location}</span>
                  </div>
                </div>

                <div className="bg-dark-950/80 p-3.5 rounded-2xl border border-white/10 shadow-sm">
                  <div className="text-slate-400">Degree</div>
                  <div className="text-slate-100 font-bold flex items-center gap-1.5 mt-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>B.Tech CSE</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-dark-950/80 p-3.5 rounded-2xl border border-white/10 shadow-sm">
                  <div className="text-slate-400">Graduation</div>
                  <div className="text-slate-100 font-bold flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-fuchsia-400" />
                    <span>05/2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Focus Graphic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-slate-200">Technical Foundation</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-400/30 font-semibold">
                  Mahakal Inst. of Tech.
                </span>
              </div>

              <div className="py-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                    <span>Software Development & Web</span>
                    <span className="font-mono text-cyan-400">Python · JS · HTML/CSS</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                    <div className="bg-gradient-to-r from-brand-cyan to-brand-blue h-full rounded-full w-[90%] shadow-glow-cyan" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                    <span>AI, LLM Integration & RAG</span>
                    <span className="font-mono text-fuchsia-400">GenAI · Agentic AI · RAG</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                    <div className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-fuchsia h-full rounded-full w-[88%] shadow-glow-purple" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                    <span>Data Structures, Algorithms & OOP</span>
                    <span className="font-mono text-emerald-400">C · C++ · Python</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[90%] shadow-glow-emerald" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                    <span>Databases & Structured Querying</span>
                    <span className="font-mono text-amber-400">SQL · MySQL · DBMS</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/5">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full rounded-full w-[88%]" />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Resume Verified Source</span>
                </span>
                <span className="text-cyan-400 font-bold">100% Faithful</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars / Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group glass-card glass-card-hover rounded-3xl p-6 border ${card.border} transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${card.gradient} border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/10 font-semibold">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Resume Domain</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
