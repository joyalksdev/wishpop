// src/components/MagicBackground.jsx
'use client';

import { useState, useEffect } from 'react';

export default function MagicBackground({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#11060b] relative overflow-hidden flex flex-col items-center justify-center transform-gpu">
      {/* Static lightweight ambient glow for optimal mobile performance */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Lightweight static star particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isMounted && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-rose-300/40 rounded-full"
            style={{
              top: `${(i * 13) % 100}%`,
              left: `${(i * 27) % 100}%`,
            }}
          />
        ))}
      </div>

      {children}
    </div>
  );
}