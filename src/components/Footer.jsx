import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="text-base font-bold text-white tracking-tight">
              Madhuram Donawat
            </span>
            <span className="text-slate-400 font-mono text-[11px]">
              Computer Science Student & Aspiring Software Developer
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-5 text-slate-400">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-dark-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-dark-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-dark-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-dark-900 text-cyan-400 hover:bg-cyan-950/80 border border-cyan-500/30 transition-all hover:scale-105 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Rights Notice & Replay Intro */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500 font-mono text-[11px]">
          <div>
            © 2026 Madhuram Donawat. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors flex items-center gap-1"
              >
                <span>↺ Replay Welcome Animation</span>
              </button>
            )}
            <span>•</span>
            <span>Resume single source of truth</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
