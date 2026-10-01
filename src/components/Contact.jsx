import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  AlertCircle, 
  ExternalLink, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [formFeedback, setFormFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormFeedback({
        type: 'error',
        message: 'Please fill out all fields before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormFeedback({
        type: 'info',
        message: `Thank you, ${formData.name}! Your input is verified. Since this is a client-side portfolio demonstration, please feel free to reach out directly to Madhuram via email (${personalInfo.contact.email}) or phone (${personalInfo.contact.phone}).`
      });
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-brand-cyan/15 via-brand-fuchsia/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact & <span className="text-gradient-vibrant">Connect</span>
          </h2>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Open for software developer roles, internships, engineering opportunities, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Feel free to contact me directly through phone, email, LinkedIn, or explore my GitHub repositories.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-3">
                {/* Email */}
                <div className="bg-dark-950/80 p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-400/50 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-3 rounded-xl bg-dark-900 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono text-slate-400">Email</div>
                      <a 
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-300 truncate block transition-colors"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="p-2 text-slate-400 hover:text-cyan-300 rounded-xl hover:bg-white/10 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="bg-dark-950/80 p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3 group hover:border-emerald-400/50 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-3 rounded-xl bg-dark-900 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Phone</div>
                      <a 
                        href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-emerald-300 transition-colors"
                      >
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-cyan-300 rounded-xl hover:bg-white/10 transition-colors shrink-0"
                    title="Copy Phone Number"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="bg-dark-950/80 p-4 rounded-2xl border border-white/10 flex items-center gap-3.5 shadow-sm">
                  <div className="p-3 rounded-xl bg-dark-900 text-fuchsia-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100">
                      {personalInfo.contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Link Cards */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-dark-950/90 border border-white/10 hover:border-blue-500/50 text-xs font-semibold text-slate-200 hover:text-blue-400 transition-all hover:scale-105 shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-dark-950/90 border border-white/10 hover:border-brand-cyan/50 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all hover:scale-105 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Send a Message</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Have a job opportunity or question? Submit your message below.
                </p>
              </div>

              {formFeedback && (
                <div className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm flex items-start gap-3 border shadow-md ${
                  formFeedback.type === 'error'
                    ? 'bg-rose-950/80 text-rose-300 border-rose-500/40'
                    : 'bg-cyan-950/80 text-cyan-300 border-cyan-400/40'
                }`}>
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                  <div className="leading-relaxed">{formFeedback.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-950 border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/40 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark-950 border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/40 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Madhuram, I came across your portfolio and would like to connect regarding an opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark-950 border border-white/10 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/40 transition-all shadow-inner resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia hover:from-cyan-400 hover:to-fuchsia-500 shadow-xl shadow-brand-cyan/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-cyan-300/40 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Validating...' : 'Send Message'}</span>
                  </button>

                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 text-center sm:text-right">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Direct: madhuramdonawat@gmail.com</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
