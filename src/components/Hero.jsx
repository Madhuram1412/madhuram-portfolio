import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  ExternalLink,
  Brain,
  Layers,
  ChevronDown,
  Zap,
  Star
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(35);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Animated Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[650px] sm:h-[650px] bg-gradient-to-tr from-brand-cyan/20 via-brand-indigo/20 to-brand-fuchsia/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute -top-10 left-10 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-fuchsia/15 rounded-full blur-3xl pointer-events-none -z-10 animate-float-medium" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge with Neon Ripple */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-brand-cyan/50 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/20 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-glow-cyan" />
            </span>
            <span className="font-semibold">{personalInfo.status}</span>
          </div>

          {/* Main Title & Rotating Role */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-gradient-vibrant drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-10 sm:h-12 flex items-center">
              <span className="text-lg sm:text-2xl font-semibold text-slate-300">
                I am an{' '}
              </span>
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300 ml-2 inline-flex items-center drop-shadow-md">
                {currentText}
                <span className="animate-pulse ml-0.5 text-brand-fuchsia font-extrabold">|</span>
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400 tracking-wider uppercase font-mono">
              ⚡ {personalInfo.headline}
            </p>
          </div>

          {/* Short Professional Resume Introduction */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl bg-dark-900/60 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
            {personalInfo.summary}
          </p>

          {/* Primary & Secondary Action Buttons with Shimmer Sweeps */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia hover:from-cyan-400 hover:to-fuchsia-500 shadow-xl shadow-brand-cyan/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-cyan-300/40"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md shadow-lg"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              href={personalInfo.contact.resumePdf}
              download="Madhuram_Donawat_Resume.pdf"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-400/40 hover:border-cyan-300 shadow-md shadow-cyan-950/50 transition-all duration-300"
              title="Download Verified Resume"
            >
              <Download className="w-4 h-4" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Social Links & Quick Badges */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
            <span className="text-xs font-mono text-slate-400">Connect:</span>
            
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-dark-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-1"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-dark-900/90 text-slate-300 hover:text-blue-400 hover:bg-slate-800 border border-white/10 hover:border-brand-blue/50 transition-all duration-300 hover:-translate-y-1"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-dark-900/90 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-[1px] bg-slate-800" />

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400/90 hover:text-cyan-300 transition-colors"
            >
              <span>View Resume Snapshot</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* Right Column: Animated Developer / AI Interactive Visual */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Terminal Mock Card with Glowing Border */}
          <div className="w-full max-w-lg glass-card rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden relative group hover:border-cyan-400/60 transition-all duration-500">
            
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 transition-opacity" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 transition-opacity" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">madhuram@dev: ~/portfolio</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-500/40">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                <span>AI_Pipeline.py</span>
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-2 bg-dark-900/95">
              <div className="text-slate-500"># Madhuram Donawat — Software Developer & AI Explorer</div>
              <div className="flex gap-2">
                <span className="text-fuchsia-400 font-semibold">class</span>
                <span className="text-yellow-300 font-bold">SoftwareDeveloper</span>:
              </div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-cyan-400">def</span> <span className="text-blue-300 font-medium">__init__</span>(self):
                </div>
                <div className="pl-4 space-y-1 text-slate-300">
                  <div>self.name = <span className="text-emerald-400 font-medium">"{personalInfo.name}"</span></div>
                  <div>self.education = <span className="text-emerald-400">"B.Tech CSE @ MIT Ujjain (2027)"</span></div>
                  <div>self.focus = [<span className="text-cyan-300">"Software Dev"</span>, <span className="text-fuchsia-300">"AI / LLMs"</span>, <span className="text-amber-300">"DSA"</span>]</div>
                  <div>self.projects = [<span className="text-cyan-300 font-semibold">"Vocabo"</span>, <span className="text-purple-300 font-semibold">"Citizen AI"</span>]</div>
                </div>
                <div className="pt-2">
                  <span className="text-cyan-400">def</span> <span className="text-blue-300 font-medium">build_solution</span>(self, user_query):
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-pink-400 font-semibold">return</span> <span className="text-indigo-300 font-medium">RAGModel</span>.generate_response(user_query)
                </div>
              </div>

              {/* Status Output Line */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Build Status: Active & Ready</span>
                </div>
                <span className="text-slate-400 font-mono">Python · C++ · SQL</span>
              </div>
            </div>

            {/* Floating Quick Badges around Terminal */}
            <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-dark-900/95 border border-brand-cyan/50 shadow-xl shadow-cyan-500/25 backdrop-blur-md flex items-center gap-1.5 animate-float-slow">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span className="text-xs font-bold text-slate-100">Generative AI</span>
            </div>

            <div className="absolute -bottom-3 -left-2 px-3 py-1.5 rounded-xl bg-dark-900/95 border border-brand-fuchsia/50 shadow-xl shadow-fuchsia-500/25 backdrop-blur-md flex items-center gap-1.5 animate-float-medium">
              <Brain className="w-3.5 h-3.5 text-fuchsia-400" />
              <span className="text-xs font-bold text-slate-100">Agentic AI & RAG</span>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors pointer-events-auto">
        <a href="#about" className="flex flex-col items-center gap-1 focus:outline-none" aria-label="Scroll to About section">
          <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400/80">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
}
