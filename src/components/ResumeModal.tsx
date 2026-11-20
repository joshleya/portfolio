import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  setCursorState,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-4xl bg-[#0A0A0C] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-[#F5F5F5] max-h-[90vh] overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase font-semibold">
                CURRICULUM VITAE // EXHIBITION SPECIFICATION
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                onMouseEnter={() => setCursorState({ text: 'PRINT', variant: 'hover' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-xs font-mono text-[#F5F5F5] hover:text-[#D4AF37] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SAVE / PRINT</span>
              </button>

              <button
                onClick={onClose}
                onMouseEnter={() => setCursorState({ text: 'CLOSE', variant: 'hover' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className="p-2 rounded-full border border-white/10 text-[#A1A1AA] hover:text-white hover:border-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content Body */}
          <div className="flex flex-col gap-8">
            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
              <div>
                <h2 className="font-display text-4xl font-extrabold text-[#F5F5F5]">
                  JOSHLIN MARIYA LEYA
                </h2>
                <p className="text-sm font-mono text-[#D4AF37] mt-1">
                  Computer Science Engineering Student & Digital Product Engineer
                </p>
              </div>

              <div className="flex flex-col gap-1 text-xs font-mono text-[#B8B8B8]">
                <span>Email: joshlinmariyaleya.27csa@licet.ac.in</span>
                <span>Role: CS Engineering Student (2022-2026)</span>
                <span>Focus: Full-Stack Systems & Realtime Web Architecture</span>
              </div>
            </div>

            {/* Core Summary */}
            <div>
              <h3 className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-2">
                // EXECUTIVE SUMMARY
              </h3>
              <p className="text-sm font-sans text-[#B8B8B8] leading-relaxed">
                Computer Science Engineering student with deep expertise in modern Web Architectures, Firebase Realtime Database systems, React, and cloud authentication models. Lead developer of SERENE, a real-time emergency dispatch platform. Committed to clean code standards, human-centered UI design, and resilient backend systems.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3">
                // EDUCATION
              </h3>
              <div className="glass-panel p-5 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-base text-[#F5F5F5]">
                      Bachelor of Technology in Computer Science Engineering
                    </h4>
                    <p className="text-xs font-mono text-[#B8B8B8] mt-0.5">
                      Focus: Algorithms, Software Engineering, Distributed Systems, Web Architecture
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37]">2022 — 2026</span>
                </div>
              </div>
            </div>

            {/* Key Featured Project */}
            <div>
              <h3 className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3">
                // KEY FEATURED PROJECT
              </h3>
              <div className="glass-panel p-5 rounded-2xl border border-[#D4AF37]/20">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-display font-bold text-lg text-[#F5F5F5]">
                      SERENE — Real-Time Emergency Response Platform
                    </h4>
                    <p className="text-xs font-mono text-[#D4AF37] mt-0.5">
                      Live App: https://serene-five-chi.vercel.app/
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-mono font-bold">
                    DEPLOYED
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs font-sans text-[#B8B8B8] leading-relaxed">
                  <li>• Engineered a zero-latency SOS activation engine leveraging Firebase Cloud Firestore geohashes.</li>
                  <li>• Built bi-directional live GPS tracking vectors with turn-by-turn ETA calculations.</li>
                  <li>• Implemented cryptographic 4-digit Safe Code verification to authenticate responder identity on scene.</li>
                </ul>
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h3 className="font-mono text-xs text-[#D4AF37] tracking-widest uppercase mb-3">
                // TECHNICAL SKILL MATRIX
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#D4AF37] font-bold block mb-1">LANGUAGES</span>
                  Java, Python, JavaScript, HTML, CSS, SQL
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#D4AF37] font-bold block mb-1">FRONTEND</span>
                  React, Tailwind CSS, GSAP, Framer Motion
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#D4AF37] font-bold block mb-1">BACKEND & CLOUD</span>
                  Node.js, MongoDB, Firebase, Cloud Firestore
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#D4AF37] font-bold block mb-1">CORE & DESIGN</span>
                  Data Structures, Algorithms, UI/UX, Figma, Canva
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
