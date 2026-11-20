import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Layers, HeartHandshake } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface Chapter02EngineerProps {
  setCursorState: (state: CursorState) => void;
}

const PHILOSOPHIES = [
  {
    icon: Terminal,
    title: 'Code as Architecture',
    desc: 'Software is not just lines of syntax—it is structural integrity. Every function should have intent, every system should scale gracefully under load.',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centered Logic',
    desc: 'Complex algorithms mean nothing if they fail the end user in moments of stress. Engineering must serve human needs seamlessly.',
  },
  {
    icon: Layers,
    title: 'Relentless Refinement',
    desc: 'First versions solve the problem. Second versions optimize the memory. Final versions make the system feel invisible to the user.',
  },
];

export const Chapter02Engineer: React.FC<Chapter02EngineerProps> = ({ setCursorState }) => {
  return (
    <section
      id="chapter-02"
      className="relative min-h-screen py-24 px-6 lg:px-16 overflow-hidden border-b border-white/5 bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 02 // THE ENGINEER
          </span>
        </div>

        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Headline & Meta */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight"
              >
                Driven by curiosity, <br />
                <span className="text-[#D4AF37] italic font-normal">grounded in engineering.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-6 text-sm font-mono text-[#A1A1AA] leading-relaxed uppercase tracking-wider"
              >
                // A narrative on curiosity, clean code, and human-first digital systems.
              </motion.p>
            </div>

            {/* Metric Badge Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg text-[#F5F5F5]">
                    Computer Science & Engineering
                  </h4>
                  <p className="text-xs font-mono text-[#B8B8B8] mt-0.5">
                    Focus on Distributed Systems, Cloud Backends, and Modern Web Architecture
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative Story */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-base sm:text-lg text-[#B8B8B8] font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[#F5F5F5] font-normal"
            >
              My journey into engineering didn't begin with syntax manuals—it started with a quiet obsession: <span className="text-[#D4AF37]">understanding how complex systems talk to each other</span> when nobody is watching.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              As a Computer Science Engineering student, I see code as a medium for solving genuine human vulnerabilities. Whether designing high-concurrency real-time location engines or architecting resilient cloud authentication systems, I approach every project with mathematical rigor and aesthetic empathy.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I reject bloat, brittle hacks, and loud unnecessary visual clutter. Clean architecture isn't just about passing tests—it's about building software that engineers respect and users trust effortlessly.
            </motion.p>
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              onMouseEnter={() => setCursorState({ text: 'FOCUS', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300 mb-6">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#B8B8B8] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
