import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo, educationData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] glass-card rounded-2xl border border-white/15 bg-dark-900 shadow-2xl flex flex-col overflow-hidden z-10">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-dark-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Madhuram Donawat — Official Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Source Document: Madhuram_Donawat_Resume.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.contact.resumePdf}
              download="Madhuram_Donawat_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-brand-cyan/20 transition-transform active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: PDF Object / Fallback Layout */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Embedded PDF iframe or preview */}
          <div className="w-full h-[55vh] rounded-xl overflow-hidden border border-white/10 bg-slate-950 relative">
            <object
              data={personalInfo.contact.resumePdf}
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback if browser doesn't embed PDF directly */}
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                <FileText className="w-12 h-12 text-cyan-400" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-white">
                    PDF Viewer Preview
                  </p>
                  <p className="text-xs text-slate-400 max-w-sm">
                    If your browser blocks inline PDF embedding, click the button below to view or download directly.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.contact.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-dark-900 border border-cyan-500/40 text-cyan-300 hover:bg-dark-850"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in New Tab</span>
                  </a>
                  <a
                    href={personalInfo.contact.resumePdf}
                    download="Madhuram_Donawat_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </a>
                </div>
              </div>
            </object>
          </div>

          {/* Quick Structured Overview */}
          <div className="glass-card rounded-xl p-5 border border-white/5 space-y-4 text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                Resume Overview (Truth Source)
              </span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Faithful to Uploaded Resume</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div>
                <span className="font-mono text-slate-400">Professional Summary:</span>
                <p className="mt-1 leading-relaxed text-slate-200">
                  {personalInfo.summary}
                </p>
              </div>

              <div>
                <span className="font-mono text-slate-400">Education Snapshot:</span>
                <p className="mt-1 leading-relaxed text-slate-200">
                  {educationData[0].degree} — {educationData[0].institution} ({educationData[0].period})
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-dark-950/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Dewas, India • madhuramdonawat@gmail.com</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
