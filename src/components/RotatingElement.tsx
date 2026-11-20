import { useState } from 'react';
import { motion } from 'framer-motion';

export function RotatingElement() {
  const [accelerated, setAccelerated] = useState(false);

  return (
    <button
      type="button"
      aria-label="Spin the interactive 3D web emblem"
      aria-pressed={accelerated}
      onClick={() => setAccelerated((value) => !value)}
      className="orb-button relative grid place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#f04452]"
    >
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [0, 12, 0] }}
        transition={{
          rotateY: { duration: accelerated ? 2.4 : 12, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="orb-face relative grid place-items-center rounded-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox="0 0 240 240"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <circle cx="120" cy="120" r="103" stroke="rgba(244,75,87,.66)" />
          <circle cx="120" cy="120" r="73" stroke="rgba(89,157,255,.55)" />
          <circle cx="120" cy="120" r="41" stroke="rgba(244,75,87,.55)" />
          <path
            d="M120 17v206M17 120h206M47 47l146 146M193 47 47 193M84 23l36 97 36-97M23 84l97 36-97 36m194-72-97 36 97 36M84 217l36-97 36 97"
            stroke="rgba(179,197,225,.35)"
          />
        </svg>
        <span className="relative z-10 text-center font-mono text-[10px] font-semibold uppercase leading-[1.7] tracking-[.22em] text-white sm:text-xs">
          Just
          <br />
          click it
        </span>
      </motion.div>
      <span className="sr-only">
        {accelerated ? 'The emblem is spinning quickly' : 'The emblem is spinning slowly'}
      </span>
    </button>
  );
}
