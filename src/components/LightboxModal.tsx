import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
  setCursorState,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[90vh] bg-[#0A0A0C] border border-[#D4AF37]/40 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col justify-between"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">
              SERENE // {title.toUpperCase()}
            </span>

            <button
              onClick={onClose}
              onMouseEnter={() => setCursorState({ text: 'CLOSE', variant: 'hover' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
              className="p-2 rounded-full border border-white/10 text-white hover:border-[#D4AF37] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Display */}
          <div className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>

          {/* Footer Bar */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
            <span>HIGH-RESOLUTION INTERFACE ASSET</span>
            <a
              href="https://serene-five-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#D4AF37] hover:underline"
            >
              <span>TEST INTERACTIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
