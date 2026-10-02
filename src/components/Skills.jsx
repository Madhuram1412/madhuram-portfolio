import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Code2, 
  FileCode, 
  Database, 
  Layout, 
  Palette, 
  GitBranch, 
  Laptop, 
  Server, 
  Binary, 
  Layers, 
  Table2, 
  Sparkles, 
  Brain, 
  Network,
  Search,
  CheckCircle2,
  ShieldCheck,
  Zap,
  FolderGit2,
  BookOpen,
  Filter
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/portfolioData';

const iconMap = {
  Terminal,
  Cpu,
  Code2,
  FileCode,
  Database,
  Layout,
  Palette,
  GitBranch,
  Laptop,
  Server,
  Binary,
  Layers,
  Table2,
  Sparkles,
  Brain,
  Network
};

// Map each resume skill to its practical application in Madhuram's projects & coursework
const projectUsageMap = {
  "Python": "Applied in Vocabo & Citizen AI",
  "C": "Low-Level Programming & Logic",
  "C++": "Data Structures & Algorithms",
  "JavaScript": "Applied in Vocabo & Citizen AI",
  "SQL": "Applied in Vocabo & Citizen AI",
  "HTML": "Applied in Vocabo & Citizen AI",
  "CSS": "Applied in Vocabo & Citizen AI",
  "Git/GitHub": "Code Versioning & Collaboration",
  "VS Code": "Primary Development IDE",
  "MySQL": "Applied in Vocabo & Citizen AI",
  "Data Structures": "Core Academic Foundation",
  "OOP": "Software Architecture Foundation",
  "DBMS": "Relational Data Modeling",
  "Generative AI": "Applied in Vocabo & Citizen AI",
  "Agentic AI": "Applied in Citizen AI",
  "RAG Models": "Applied in Citizen AI",
  "LLM Integration": "Applied in Vocabo & Citizen AI"
};

const categoryBadgeConfig = {
  languages: {
    label: "Programming & Web",
    badgeBg: "bg-cyan-950/80 text-cyan-300 border-cyan-400/40",
    iconBox: "bg-cyan-950/60 text-cyan-400 border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400",
    hoverBorder: "hover:border-cyan-400/70 hover:shadow-cyan-500/20",
    glowDot: "bg-cyan-400",
    pingDot: "bg-cyan-400",
    accentGradient: "from-cyan-400 via-teal-400 to-blue-500"
  },
  ai: {
    label: "AI / ML",
    badgeBg: "bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-400/40",
    iconBox: "bg-fuchsia-950/60 text-fuchsia-400 border-fuchsia-500/30 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-400",
    hoverBorder: "hover:border-fuchsia-400/70 hover:shadow-fuchsia-500/20",
    glowDot: "bg-fuchsia-400",
    pingDot: "bg-fuchsia-400",
    accentGradient: "from-indigo-400 via-purple-400 to-fuchsia-400"
  },
  concepts: {
    label: "CS Concepts",
    badgeBg: "bg-emerald-950/80 text-emerald-300 border-emerald-400/40",
    iconBox: "bg-emerald-950/60 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500/20 group-hover:border-emerald-400",
    hoverBorder: "hover:border-emerald-400/70 hover:shadow-emerald-500/20",
    glowDot: "bg-emerald-400",
    pingDot: "bg-emerald-400",
    accentGradient: "from-emerald-400 via-teal-400 to-cyan-400"
  },
  tools: {
    label: "Developer Tools",
    badgeBg: "bg-amber-950/80 text-amber-300 border-amber-400/40",
    iconBox: "bg-amber-950/60 text-amber-400 border-amber-500/30 group-hover:bg-amber-500/20 group-hover:border-amber-400",
    hoverBorder: "hover:border-amber-400/70 hover:shadow-amber-500/20",
    glowDot: "bg-amber-400",
    pingDot: "bg-amber-400",
    accentGradient: "from-amber-400 via-orange-400 to-yellow-400"
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (projectUsageMap[skill.name] && projectUsageMap[skill.name].toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Animated Atmosphere Glows */}
      <div 
        className="absolute top-1/4 -right-16 w-96 h-96 rounded-full pointer-events-none animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-1/4 -left-16 w-96 h-96 rounded-full pointer-events-none animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-brand-cyan/40 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10 animate-fade-in">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
            <span>03 // TECHNICAL TOOLKIT</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-vibrant">Core Competencies</span>
          </h2>
          
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Technologies and concepts directly drawn from Madhuram Donawat's official resume, structured across programming languages, AI engineering, system concepts, and developer tools.
          </p>
        </div>

        {/* Animated Infinite Streaming Tech Marquee */}
        <div className="w-full overflow-hidden py-3 mb-10 border-y border-white/10 bg-dark-900/90 relative rounded-xl shadow-lg">
          <div className="flex whitespace-nowrap animate-gradient-x w-max space-x-8 text-xs font-mono">
            {skillsData.concat(skillsData).map((skill, index) => {
              const config = categoryBadgeConfig[skill.category] || categoryBadgeConfig.languages;
              return (
                <span 
                  key={index} 
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 cursor-default px-2"
                >
                  <span className={`w-2 h-2 rounded-full ${config.glowDot} animate-pulse`} />
                  <span className="font-semibold text-slate-200 hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    • {config.label}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Animated Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-dark-900/95 rounded-2xl border border-white/10 shadow-xl">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? skillsData.length 
                : skillsData.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 group ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-fuchsia text-white shadow-lg shadow-brand-indigo/35 scale-105'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                    isActive 
                      ? 'bg-black/40 text-white font-bold' 
                      : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900/90 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/50 transition-all shadow-inner"
            />
            {searchQuery && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-cyan-400 bg-slate-800 px-2 py-0.5 rounded-md font-semibold">
                {filteredSkills.length} matches
              </span>
            )}
          </div>

        </div>

        {/* Animated Skills Cards Grid */}
        <div 
          key={activeCategory} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const config = categoryBadgeConfig[skill.category] || categoryBadgeConfig.languages;
            const usageInfo = projectUsageMap[skill.name] || "Verified Resume Skill";
            const isHovered = hoveredCard === skill.name;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredCard(skill.name)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animation: `cardEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${(index % 8) * 50}ms`
                }}
                className={`glass-card rounded-2xl p-5 border border-white/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] ${config.hoverBorder} group relative flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* Top Subtle Animated Accent Beam */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Subtle Radial Backlight on Hover */}
                <div 
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.2) 0%, transparent 70%)' }}
                />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl border ${config.iconBox} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner`}>
                      <IconComponent className="w-5 h-5 transition-transform duration-300" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.pingDot}`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${config.glowDot}`} />
                      </span>
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${config.badgeBg}`}>
                        {config.label}
                      </span>
                    </div>
                  </div>

                  {/* Skill Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all duration-200">
                    {skill.name}
                  </h3>

                  {/* Skill Resume Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Context: Project Application Tag */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-cyan-300 transition-colors">
                    <FolderGit2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 shrink-0" />
                    <span className="truncate max-w-[170px]" title={usageInfo}>
                      {usageInfo}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold shrink-0 ml-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Authenticity Guarantee Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-brand-cyan/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xl">
          <div className="flex items-center gap-2.5 text-slate-300">
            <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>
              All listed technologies strictly adhere to the skills present on Madhuram Donawat's official resume.
            </span>
          </div>
          <span className="font-mono text-[11px] text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            Zero Unverified Additions
          </span>
        </div>

      </div>
    </section>
  );
}
