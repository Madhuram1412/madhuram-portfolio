import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ChevronRight, ArrowRight, Zap, Code2, Sparkles, Laptop } from 'lucide-react';

export default function WelcomeScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const hasExitedRef = useRef(false);

  const steps = [
    { text: "Booting developer environment...", detail: "SYS_INIT" },
    { text: "Loading C++, Python, SQL & Web modules...", detail: "CORE_LANGUAGES" },
    { text: "Initializing AI, RAG & LLM Integration...", detail: "AI_MODELS" },
    { text: "Mounting Vocabo & Citizen AI showcases...", detail: "PROJECT_READY" },
    { text: "Welcome to Madhuram Donawat's Portfolio", detail: "READY" }
  ];

  const triggerExit = () => {
    if (hasExitedRef.current) return;
    hasExitedRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 650);
  };

  // Smoothly increment progress and auto-open website
  useEffect(() => {
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds smooth intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 25) {
        setCurrentStep(0);
      } else if (pct < 50) {
        setCurrentStep(1);
      } else if (pct < 75) {
        setCurrentStep(2);
      } else if (pct < 98) {
        setCurrentStep(3);
      } else {
        setCurrentStep(4);
      }

      if (pct >= 100) {
        clearInterval(timer);
        // Automatically trigger smooth transition into website
        setTimeout(() => {
          triggerExit();
        }, 400);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut: Press Escape, Enter, or Space to skip immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.code === 'Space') {
        triggerExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] select-none transition-all duration-700 ease-out overflow-hidden ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: '#030712' }}
    >
      {/* Background Animated Neon Mesh & Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-cyan/25 via-brand-indigo/15 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-brand-fuchsia/25 via-brand-purple/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      {/* Top Header Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-brand-cyan/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>PORTFOLIO // INITIALIZING</span>
        </div>

        <button
          onClick={triggerExit}
          className="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-dark-900/90 hover:bg-white/10 border border-white/15 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
          title="Skip straight to portfolio"
        >
          <span>Skip Intro</span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Center Welcome Card */}
      <div className="relative z-20 max-w-lg w-full px-6 flex flex-col items-center text-center">
        
        {/* Animated MD Hexagon & Hologram Glow */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer rotating dashed ring */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-brand-cyan/30 border-dashed animate-spin-slow pointer-events-none" />
          
          {/* Pulsing ambient aura */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-fuchsia-500/30 blur-xl animate-pulse" />
          
          {/* Futuristic Center Monogram */}
          <div className="w-20 h-20 rounded-2xl bg-dark-900/95 border-2 border-cyan-400/50 flex items-center justify-center shadow-2xl shadow-cyan-500/30 relative z-10 backdrop-blur-2xl">
            <span className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-200 to-fuchsia-300 font-mono">
              MD
            </span>
            
            {/* Live Indicator Beacon */}
            <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 border-2 border-dark-950" />
            </span>
          </div>
        </div>

        {/* Welcome Salutation & Identification */}
        <div className="space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-slate-300 shadow-md">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Hello, World! Welcome to</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            <span className="text-gradient-vibrant">Madhuram Donawat</span>
          </h1>

          <p className="text-slate-400 text-xs sm:text-sm font-mono tracking-wide">
            Computer Science Student & Aspiring Software Developer
          </p>
        </div>

        {/* Developer Loading Telemetry Box */}
        <div className="w-full bg-dark-900/95 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl mb-6 text-left relative overflow-hidden">
          
          {/* Top subtle glow edge */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia" />

          {/* Telemetry Status Bar */}
          <div className="flex items-center justify-between text-xs font-mono mb-3">
            <span className="flex items-center gap-2 text-cyan-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{steps[currentStep].detail}</span>
            </span>
            <span className="font-bold text-white font-mono text-sm tracking-wide">
              {progress}%
            </span>
          </div>

          {/* Neon Animated Progress Bar */}
          <div className="w-full h-2.5 bg-dark-950 rounded-full overflow-hidden p-0.5 border border-white/10 relative shadow-inner">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia transition-all duration-100 ease-out shadow-lg shadow-cyan-500/50 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-shimmer" />
            </div>
          </div>

          {/* Telemetry Terminal Line */}
          <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="truncate pr-2 text-slate-200">
              &gt; {steps[currentStep].text}
            </span>
            <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-wider shrink-0">
              {progress < 100 ? 'loading' : 'ready'}
            </span>
          </div>
        </div>

        {/* Enter Portfolio Action Button */}
        <button
          onClick={triggerExit}
          className={`inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform active:scale-95 btn-shimmer ${
            progress >= 85 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          <span>Open Portfolio</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </button>

      </div>

      {/* Quick Access Footnote */}
      <div className="absolute bottom-6 text-center text-xs font-mono text-slate-500">
        Press <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ESC</kbd> or <kbd className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ENTER</kbd> to open instantly
      </div>
    </div>
  );
}
