import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function ResumeSection({ onOpenResumeModal }) {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-cyan/15 via-brand-indigo/15 to-brand-fuchsia/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Official <span className="text-gradient-vibrant">Resume</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Verified resume document containing Madhuram Donawat's academic milestones, full-stack projects, and core technical skills.
          </p>
        </div>

        {/* Featured Resume Container Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative group overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Source File: Madhuram_Donawat_Resume.pdf</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Madhuram Donawat — Software Developer Resume
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Ready for recruiter review. Download the verified PDF copy or inspect the document directly in the interactive viewer.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
              <a
                href={personalInfo.contact.resumePdf}
                download="Madhuram_Donawat_Resume.pdf"
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia hover:from-cyan-400 hover:to-fuchsia-500 shadow-xl shadow-brand-cyan/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-300/40"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Document Summary Snapshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-slate-800">
            <div className="bg-dark-950/70 p-5 rounded-2xl border border-white/5 space-y-2 shadow-inner">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">Candidate Objective</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="bg-dark-950/70 p-5 rounded-2xl border border-white/5 space-y-2 shadow-inner">
              <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">Highest Education</div>
              <div className="text-xs font-bold text-slate-100">
                {educationData[0].degree}
              </div>
              <div className="text-xs text-slate-400">
                {educationData[0].institution} • {educationData[0].period}
              </div>
            </div>

            <div className="bg-dark-950/70 p-5 rounded-2xl border border-white/5 space-y-2 shadow-inner">
              <div className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider font-bold">Core Projects</div>
              <div className="text-xs font-bold text-slate-100">
                Vocabo & Citizen AI
              </div>
              <div className="text-xs text-slate-400">
                Personal / Academic full-stack projects featuring AI/LLM integration and personalized learning.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
