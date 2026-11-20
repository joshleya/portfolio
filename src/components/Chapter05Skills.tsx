import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface Chapter05SkillsProps {
  setCursorState: (state: CursorState) => void;
}

interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'cs-design';
  categoryLabel: string;
  context: string;
  highlight: string;
}

const SKILL_MATRIX: SkillItem[] = [
  // Languages
  {
    name: 'Java',
    category: 'languages',
    categoryLabel: 'Core Languages',
    context: 'Object-oriented application development, multithreading, and algorithmic problem solving.',
    highlight: 'Production Systems & OOP Design',
  },
  {
    name: 'Python',
    category: 'languages',
    categoryLabel: 'Core Languages',
    context: 'Data processing, backend scripting, automation tools, and algorithmic analysis.',
    highlight: 'Data Processing & Automation',
  },
  {
    name: 'JavaScript',
    category: 'languages',
    categoryLabel: 'Core Languages',
    context: 'Modern ES6+ asynchronous web applications, event loop management, and DOM interaction.',
    highlight: 'Async & ES6+ Architecture',
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    context: 'Component lifecycle, state management, custom hooks, and high-performance UI rendering.',
    highlight: 'React 18 & Ecosystem',
  },
  {
    name: 'HTML',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    context: 'Semantic HTML5 structure, web accessibility (WCAG), and search engine optimization.',
    highlight: 'Semantic Web Standards',
  },
  {
    name: 'CSS',
    category: 'frontend',
    categoryLabel: 'Frontend Engineering',
    context: 'Tailwind CSS, Flexbox/Grid systems, custom animations, and luxury dark mode design systems.',
    highlight: 'Vanilla CSS & Tailwind CSS',
  },

  // Backend & Cloud
  {
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend & Databases',
    context: 'Asynchronous event-driven backend servers, RESTful microservices, and API routing.',
    highlight: 'RESTful Server Engineering',
  },
  {
    name: 'MongoDB',
    category: 'backend',
    categoryLabel: 'Backend & Databases',
    context: 'NoSQL document database architecture, aggregation pipelines, and JSON schema modeling.',
    highlight: 'NoSQL Document Schemas',
  },
  {
    name: 'Firebase',
    category: 'backend',
    categoryLabel: 'Backend & Databases',
    context: 'Cloud Firestore, Realtime Database sync, Authentication rules, and Cloud Storage integration.',
    highlight: 'Live Sync & Auth Protocols',
  },
  {
    name: 'SQL',
    category: 'backend',
    categoryLabel: 'Backend & Databases',
    context: 'Relational database schema normalization, indexing, joins, and complex queries.',
    highlight: 'Relational Data Modeling',
  },

  // Core CS & Design
  {
    name: 'Data Structures',
    category: 'cs-design',
    categoryLabel: 'Computer Science & Design',
    context: 'Trees, Graphs, Hash Maps, Heaps, and memory-efficient data representation.',
    highlight: 'Algorithmic Efficiency',
  },
  {
    name: 'Algorithms',
    category: 'cs-design',
    categoryLabel: 'Computer Science & Design',
    context: 'Sorting, Dynamic Programming, Greedy approaches, and Graph traversal (BFS/DFS).',
    highlight: 'Time & Space Optimization',
  },
  {
    name: 'UI/UX',
    category: 'cs-design',
    categoryLabel: 'Computer Science & Design',
    context: 'User flow mapping, wireframing, component design tokens, and human-centered design principles.',
    highlight: 'User-Centered Architecture',
  },
  {
    name: 'Figma',
    category: 'cs-design',
    categoryLabel: 'Computer Science & Design',
    context: 'High-fidelity UI mockups, interactive component variants, and design system specs.',
    highlight: 'Interactive UI Prototyping',
  },
  {
    name: 'Canva',
    category: 'cs-design',
    categoryLabel: 'Computer Science & Design',
    context: 'Rapid visual branding assets, presentation decks, and graphic media production.',
    highlight: 'Visual Asset Design',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Domains' },
  { id: 'languages', label: 'Core Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & Cloud' },
  { id: 'cs-design', label: 'CS & UI/UX' },
];

export const Chapter05Skills: React.FC<Chapter05SkillsProps> = ({ setCursorState }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILL_MATRIX[3]); // React default

  const filteredSkills =
    activeCategory === 'all'
      ? SKILL_MATRIX
      : SKILL_MATRIX.filter((s) => s.category === activeCategory);

  return (
    <section
      id="chapter-05"
      className="relative min-h-screen py-24 px-6 lg:px-16 overflow-hidden border-b border-white/5 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 05 // TECHNICAL MATRIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#F5F5F5]">
              Engineering Stack & <br />
              <span className="text-[#D4AF37] italic font-normal">Technical Competencies.</span>
            </h2>
            <p className="text-xs font-mono text-[#A1A1AA] mt-3 uppercase tracking-wider">
              // An interactive taxonomy of languages, frameworks, cloud databases, and design systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                onMouseEnter={() => setCursorState({ text: cat.label, variant: 'hover' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#0F0F12] border border-white/10 text-[#B8B8B8] hover:text-[#F5F5F5] hover:border-white/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout: Grid + Context Detail Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid Matrix */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <motion.button
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setCursorState({ text: 'INSPECT', variant: 'hover' })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#141418] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10'
                      : 'bg-[#0F0F12] border-white/10 hover:border-white/30 hover:bg-[#121215]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                      {skill.categoryLabel}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                    )}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-3 group-hover:text-[#D4AF37] transition-colors">
                    {skill.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-[#D4AF37]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{skill.highlight}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Selected Skill Deep-Dive Inspector */}
          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              {selectedSkill && (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel-gold p-8 rounded-3xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 mb-6">
                    <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-widest uppercase">
                      // INSPECTOR DETAIL
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[10px] font-mono text-[#D4AF37]">
                      {selectedSkill.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-extrabold text-[#F5F5F5]">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-xs font-mono text-[#D4AF37] mt-1">
                    Focus: {selectedSkill.highlight}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">
                      Engineering Application
                    </h4>
                    <p className="text-sm font-sans text-[#B8B8B8] leading-relaxed">
                      {selectedSkill.context}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#6E6E73]">
                    <span>STATUS: ACTIVE DISCIPLINE</span>
                    <span>JOSHLIN M. LEYA</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
