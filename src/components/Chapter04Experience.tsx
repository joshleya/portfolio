import React from 'react';
import { motion } from 'framer-motion';
import type { CursorState } from './CustomCursor';

interface Chapter04ExperienceProps {
  setCursorState: (state: CursorState) => void;
}

const MILESTONES = [
  {
    period: '2022 — PRESENT',
    role: 'Computer Science Engineering Student',
    organization: 'Undergraduate Degree Program',
    type: 'ACADEMIC & SYSTEMS FOCUS',
    description:
      'Immersed in advanced algorithm design, software engineering methodologies, cloud database management systems, and full-stack web applications. Consistently leading team hackathons and building production-grade prototypes.',
    highlights: ['Core Data Structures & Algorithms', 'Cloud & Firebase Architecture', 'Modern Web Standards'],
  },
  {
    period: '2025',
    role: 'Full-Stack Software Engineering Intern',
    organization: 'Technology & Digital Solutions',
    type: 'ENGINEERING & PRODUCT FELLOWSHIP',
    description:
      'Engineered scalable user interfaces and RESTful API endpoints. Collaborated closely with senior product designers and backend engineers to streamline application performance and optimize database read/write queries.',
    highlights: ['Component Design Systems', 'REST API Integration', 'Performance Benchmarking'],
  },
  {
    period: '2024 — 2025',
    role: 'Lead Architect — Project SERENE',
    organization: 'Independent Innovation Initiative',
    type: 'KEYSTONE CASE STUDY',
    description:
      'Conceptualized and delivered a complete end-to-end real-time emergency response platform. Designed bi-directional GPS tracking algorithms, role-based authorization controls, and secure OTP verification workflows.',
    highlights: ['Firebase Realtime Engine', 'Geospatial Location Sync', 'Safe Code Security Protocol'],
  },
];

export const Chapter04Experience: React.FC<Chapter04ExperienceProps> = ({ setCursorState }) => {
  return (
    <section
      id="chapter-04"
      className="relative min-h-screen py-24 px-6 lg:px-16 overflow-hidden border-b border-white/5 bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 04 // EXPERIENCE & GROWTH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column Title */}
          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-display text-4xl sm:text-6xl font-bold text-[#F5F5F5] leading-tight"
            >
              The Journey of <br />
              <span className="text-[#D4AF37] italic font-normal">Continuous Craft.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-sm font-mono text-[#A1A1AA] leading-relaxed uppercase tracking-wider"
            >
              // Editorial timeline tracking academic rigor, engineering fellowships, and project leadership.
            </motion.p>
          </div>

          {/* Right Column Editorial Timeline */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {MILESTONES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onMouseEnter={() => setCursorState({ text: 'READ', variant: 'hover' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest font-semibold">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[#B8B8B8] mt-1">
                  {item.organization}
                </p>

                <p className="mt-4 text-sm sm:text-base font-sans text-[#B8B8B8] font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Key Takeaways / Highlights */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 rounded-lg bg-[#0F0F12] border border-[#D4AF37]/20 text-[11px] font-mono text-[#D4AF37]"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
