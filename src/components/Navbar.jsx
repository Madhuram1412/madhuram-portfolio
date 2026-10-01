import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResumeModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Neon Gradient Accent */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Madhuram Donawat Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan via-brand-indigo to-brand-fuchsia p-[1.5px] transition-transform duration-300 group-hover:scale-110 shadow-glow-cyan">
              <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia text-lg">
                  MD
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
                Madhuram Donawat
              </span>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold -mt-1 hidden sm:block">
                Software Dev & AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-dark-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/25 via-brand-indigo/25 to-brand-fuchsia/25 text-cyan-300 border border-brand-cyan/50 shadow-md shadow-brand-cyan/20 scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View Resume Button (Modal) */}
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-dark-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-400/50 rounded-xl transition-all hover:scale-105"
              title="Preview Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview</span>
            </button>

            {/* Download Resume Button with Shimmer */}
            <a
              href={personalInfo.contact.resumePdf}
              download="Madhuram_Donawat_Resume.pdf"
              className="btn-shimmer inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia hover:from-cyan-400 hover:to-fuchsia-500 shadow-lg shadow-brand-cyan/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-300/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalInfo.contact.resumePdf}
              download="Madhuram_Donawat_Resume.pdf"
              className="p-2 text-brand-cyan bg-cyan-950/60 border border-brand-cyan/40 rounded-xl text-xs"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-slate-800/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-7 space-y-3 animate-card-enter">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan/20 to-brand-fuchsia/20 text-cyan-300 border border-brand-cyan/40 font-bold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Preview Resume</span>
            </button>

            <a
              href={personalInfo.contact.resumePdf}
              download="Madhuram_Donawat_Resume.pdf"
              className="btn-shimmer w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia text-white shadow-lg shadow-brand-cyan/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
