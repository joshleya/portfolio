import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Copy, Check, ArrowUpRight } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface Chapter06ContactProps {
  setCursorState: (state: CursorState) => void;
  onOpenResume: () => void;
}

export const Chapter06Contact: React.FC<Chapter06ContactProps> = ({
  setCursorState,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'joshlinmariyaleya.27csa@licet.ac.in';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="chapter-06"
      className="relative min-h-screen py-32 px-6 lg:px-16 overflow-hidden bg-[#050505] flex flex-col justify-between"
    >
      {/* Ambient Lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] spotlight-gold rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto w-full my-auto">
        {/* Chapter Lead Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 06 // EPILOGUE & CONTACT
          </span>
        </div>

        {/* Strong Statement */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-[#F5F5F5] tracking-tight leading-[0.95]"
          >
            LET'S CREATE SOMETHING <br />
            <span className="text-stroke-gold hover:text-[#D4AF37] transition-colors duration-700">
              EXTRAORDINARY.
            </span>
          </motion.h2>

          <p className="mt-8 text-lg sm:text-2xl font-sans text-[#B8B8B8] font-light leading-relaxed max-w-2xl">
            Available for software engineering roles, product architecture collaborations, and high-impact digital initiatives.
          </p>

          {/* Main Action CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {/* Copy Email Magnetic Button */}
            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => setCursorState({ text: copied ? 'COPIED' : 'COPY', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="group flex items-center gap-4 px-8 py-5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-mono text-xs font-bold tracking-widest uppercase transition-all duration-500 shadow-xl shadow-[#D4AF37]/20"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-green-800" />
              ) : (
                <Copy className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              onMouseEnter={() => setCursorState({ text: 'VIEW CV', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="flex items-center gap-3 px-8 py-5 rounded-full glass-panel border border-white/20 hover:border-[#D4AF37] text-xs font-mono text-[#F5F5F5] hover:text-[#D4AF37] transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>VIEW RESUME</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="mt-16 flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState({ text: 'LINKEDIN', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="flex items-center gap-2 text-xs font-mono text-[#B8B8B8] hover:text-[#D4AF37] transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-[#D4AF37]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState({ text: 'GITHUB', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="flex items-center gap-2 text-xs font-mono text-[#B8B8B8] hover:text-[#D4AF37] transition-colors group"
            >
              <Github className="w-4 h-4 text-[#D4AF37]" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://serene-five-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorState({ text: 'SERENE', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="flex items-center gap-2 text-xs font-mono text-[#B8B8B8] hover:text-[#D4AF37] transition-colors group"
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>SERENE DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="max-w-7xl mx-auto w-full pt-16 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A1A1AA] gap-4 border-t border-white/5">
        <div>
          <span>© 2026 JOSHLIN MARIYA LEYA. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex items-center gap-2">
          <span>HANDCRAFTED WITH INTENT & ENGINEERING RIGOR</span>
        </div>
      </div>
    </section>
  );
};
