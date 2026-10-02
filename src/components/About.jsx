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
  Zap,
  User,
  ExternalLink,
  Mail,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
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
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-l from-brand-fuchsia/15 via-brand-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

          {/* Right: Dedicated Profile Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-3xl p-6 sm:p-7 border border-brand-cyan/30 relative overflow-hidden shadow-2xl shadow-cyan-950/40 group hover:border-cyan-400/60 transition-all duration-500">
              
              {/* Top Card Ambient Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">Candidate Profile</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-mono font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to Roles</span>
                </div>
              </div>

              {/* Profile Photo with Animated Glowing Rings */}
              <div className="py-6 flex flex-col items-center text-center">
                <div className="relative mb-5 group/photo">
                  {/* Outer Glowing Pulsing Ambient Ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia rounded-full blur-lg opacity-70 group-hover/photo:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                  
                  {/* Outer Rotating Cyber Dashed Ring */}
                  <div className="absolute -inset-3.5 rounded-full border border-cyan-400/30 border-dashed animate-spin-slow pointer-events-none" />

                  {/* Profile Image Container */}
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-cyan-400/80 bg-dark-950 shadow-2xl transition-transform duration-500 group-hover/photo:scale-105">
                    <img 
                      src="./profile.jpg" 
                      alt="Madhuram Donawat" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Live Status Beacon Badge */}
                  <span className="absolute bottom-2 right-2 p-1.5 rounded-full bg-emerald-500 border-2 border-dark-950 shadow-lg" title="Active Candidate">
                    <span className="block w-2 h-2 rounded-full bg-white animate-ping" />
                  </span>
                </div>

                {/* Candidate Name & Title */}
                <h3 className="text-xl font-extrabold text-white tracking-tight mb-1">
                  Madhuram Donawat
                </h3>
                
                <p className="text-xs font-mono text-cyan-300 font-semibold mb-3">
                  Computer Science Student & Aspiring Software Developer
                </p>

                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-5">
                  Mahakal Institute of Technology, Ujjain • Dewas, India
                </p>

                {/* Quick Social & Resume Actions */}
                <div className="flex items-center gap-2.5 w-full justify-center pt-2">
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 transition-all shadow-sm"
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-900 text-slate-300 hover:text-blue-400 hover:bg-slate-800 border border-white/10 hover:border-blue-400/50 transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="p-2.5 rounded-xl bg-dark-900 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 transition-all shadow-sm"
                    aria-label="Email Madhuram"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.contact.resumePdf}
                    download="Madhuram_Donawat_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan/20 via-brand-indigo/20 to-brand-fuchsia/20 hover:from-brand-cyan/35 hover:to-brand-fuchsia/35 border border-brand-cyan/50 text-xs font-semibold text-cyan-300 transition-all hover:scale-105 shadow-md ml-1"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Resume (PDF)</span>
                  </a>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume Single Source of Truth</span>
                </span>
                <span className="text-cyan-400 font-bold">MIT Ujjain '27</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Core Pillars / Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${card.border} group relative flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-dark-950/80 border border-white/10 ${card.iconColor} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Resume Grounded</span>
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
