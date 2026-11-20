import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2 } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface Chapter01ArrivalProps {
  setCursorState: (state: CursorState) => void;
  onExploreClick: () => void;
}

export const Chapter01Arrival: React.FC<Chapter01ArrivalProps> = ({
  setCursorState,
  onExploreClick,
}) => {
  return (
    <section
      id="chapter-01"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 lg:px-16 overflow-hidden border-b border-white/5"
    >
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] spotlight-gold rounded-full blur-3xl pointer-events-none opacity-40" />

      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 01 // ARRIVAL
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#A1A1AA] border border-white/10 px-3 py-1.5 rounded-full glass-panel"
        >
          <Code2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>CS ENGINEERING & PRODUCT ARCHITECTURE</span>
        </motion.div>
      </div>

      {/* Center Massive Kinetic Typography */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 py-12">
        <div className="flex flex-col gap-2">
          {/* Subtle Lead Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A1A1AA] uppercase mb-2"
          >
            PORTFOLIO EXHIBITION 2026
          </motion.p>

          {/* Massive Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#F5F5F5] leading-[0.9] uppercase"
          >
            JOSHLIN MARIYA <br />
            <span className="text-stroke-gold hover:text-[#D4AF37] transition-colors duration-700">
              LEYA.
            </span>
          </motion.h1>

          {/* Role Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#141418] border border-[#D4AF37]/30 text-xs sm:text-sm font-mono text-[#D4AF37] tracking-wider">
              COMPUTER SCIENCE ENGINEERING STUDENT
            </span>
            <span className="text-xs font-mono text-[#6E6E73]">|</span>
            <span className="text-xs sm:text-sm font-mono text-[#B8B8B8] tracking-widest">
              SYSTEMS • PRODUCT ENGINEERING • UI/UX
            </span>
          </motion.div>
        </div>

        {/* Brand Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 max-w-3xl glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-lg sm:text-2xl text-[#F5F5F5] font-light leading-relaxed font-sans">
            “Building meaningful digital products through{' '}
            <span className="text-[#D4AF37] font-normal italic">thoughtful engineering</span>,{' '}
            <span className="text-[#F5F5F5] font-normal underline decoration-[#D4AF37]/40 underline-offset-4">
              intelligent systems
            </span>
            , and user-centered experiences.”
          </p>
        </motion.div>
      </div>

      {/* Bottom Footer Cue */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-center gap-6 text-xs font-mono text-[#6E6E73]"
        >
          <span>BASED IN INDIA</span>
          <span>•</span>
          <span>AVAILABLE FOR 2026 ROLES & CREATIVE COLLABORATIONS</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={onExploreClick}
          onMouseEnter={() => setCursorState({ text: 'ENTER', variant: 'hover' })}
          onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
          className="group flex items-center gap-4 px-6 py-3 rounded-full bg-[#0F0F12] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37] text-xs font-mono text-[#F5F5F5] hover:text-black transition-all duration-500"
        >
          <span className="tracking-widest font-semibold uppercase">BEGIN EXHIBITION</span>
          <ArrowDown className="w-4 h-4 text-[#D4AF37] group-hover:text-black transform group-hover:translate-y-1 transition-all duration-300" />
        </motion.button>
      </div>
    </section>
  );
};
