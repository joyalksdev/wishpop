// src/components/MagicBackground.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MagicBackground({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#11060b] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(140,20,50,0.25),rgba(17,6,11,1))] relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Ambient floating glowing orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle floating background star particles (Client-side only to prevent hydration mismatch) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.8 + 0.4,
            }}
            animate={{
              y: [null, '-=60', '+=60'],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-1.5 h-1.5 bg-rose-300/60 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"
          />
        ))}
      </div>

      {children}
    </div>
  );
}