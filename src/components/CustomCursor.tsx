import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorState {
  text: string;
  variant: 'default' | 'hover' | 'magnetic' | 'gallery' | 'hidden';
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible || cursorState.variant === 'hidden') return null;

  const isHovered = cursorState.variant === 'hover' || cursorState.variant === 'gallery';
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#f04452]/40 pointer-events-none flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 18),
          y: mousePosition.y - (isHovered ? 36 : 18),
          width: isHovered ? 72 : 36,
          height: isHovered ? 72 : 36,
          backgroundColor: isHovered ? 'rgba(240, 68, 82, 0.12)' : 'rgba(240, 68, 82, 0.02)',
          borderColor: isHovered ? 'rgba(240, 68, 82, 0.6)' : 'rgba(240, 68, 82, 0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {cursorState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest text-[#ff7d85] uppercase text-center px-1 font-semibold"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#f04452] pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
        }}
      />
    </div>
  );
};
