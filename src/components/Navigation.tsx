import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface NavigationProps {
  activeChapter: number;
  onNavigate: (chapterIndex: number) => void;
  setCursorState: (state: CursorState) => void;
  onOpenResume: () => void;
}

const CHAPTERS = [
  { id: 1, label: 'Arrival', sectionId: 'chapter-01' },
  { id: 2, label: 'The Engineer', sectionId: 'chapter-02' },
  { id: 3, label: 'SERENE Case Study', sectionId: 'chapter-03' },
  { id: 4, label: 'Experience', sectionId: 'chapter-04' },
  { id: 5, label: 'Skills', sectionId: 'chapter-05' },
  { id: 6, label: 'Contact', sectionId: 'chapter-06' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeChapter,
  onNavigate,
  setCursorState,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 px-6 lg:px-16 py-6 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-[#050505]/75 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Identity / Monogram */}
          <button
            onClick={() => onNavigate(1)}
            onMouseEnter={() => setCursorState({ text: 'TOP', variant: 'hover' })}
            onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#0F0F12] group-hover:border-[#D4AF37] transition-colors duration-300">
              <span className="font-display font-bold text-xs text-[#D4AF37]">JL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-wider text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                JOSHLIN LEYA
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA] tracking-widest uppercase">
                ENGINEERING EXHIBITION
              </span>
            </div>
          </button>

          {/* Center Chapter Indicator (Desktop) */}
          <div className="hidden md:flex items-center gap-4 px-5 py-2 rounded-full glass-panel text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#A1A1AA]">EXHIBITION STATUS:</span>
            <span className="text-[#D4AF37] font-semibold tracking-wider">
              CH 0{activeChapter} / {CHAPTERS[activeChapter - 1]?.label.toUpperCase()}
            </span>
          </div>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Quick Chapter Links */}
            <div className="flex items-center gap-6 text-xs font-mono">
              {CHAPTERS.map((chap) => (
                <button
                  key={chap.id}
                  onClick={() => onNavigate(chap.id)}
                  onMouseEnter={() => setCursorState({ text: `CH 0${chap.id}`, variant: 'hover' })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                  className={`transition-colors duration-300 relative py-1 ${
                    activeChapter === chap.id
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#B8B8B8] hover:text-[#F5F5F5]'
                  }`}
                >
                  0{chap.id}
                  {activeChapter === chap.id && (
                    <motion.div
                      layoutId="activeChapterDot"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              onMouseEnter={() => setCursorState({ text: 'CV', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#0F0F12] text-xs font-mono text-[#F5F5F5] hover:text-[#D4AF37] transition-all duration-300"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37]"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F5] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl pt-28 px-8 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                // EXHIBITION DIRECTORY
              </span>
              <div className="flex flex-col gap-4">
                {CHAPTERS.map((chap) => (
                  <button
                    key={chap.id}
                    onClick={() => {
                      onNavigate(chap.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between text-left border-b border-white/10 pb-4 group"
                  >
                    <span className="font-display text-2xl font-bold text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors">
                      0{chap.id}. {chap.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#D4AF37] transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-xs font-mono text-[#A1A1AA]">
              <span>JOSHLIN MARIYA LEYA</span>
              <span>COMPUTER SCIENCE ENGINEERING STUDENT</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
