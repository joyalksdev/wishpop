// src/components/WelcomeGate.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Stars } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeGate({ recipientName, onNext }) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 140;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    confetti({ 
      particleCount: 120, 
      spread: 80, 
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff'] 
    });
    onNext();
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#250d17]/80 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-rose-500/25 max-w-md w-full text-center z-10"
      >
        {/* Ambient background glow inside card */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Heart Badge */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-rose-600 to-pink-500 p-4 rounded-full shadow-2xl shadow-rose-950/80 border border-rose-400/40">
          <Heart className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
        </div>

        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner mt-3 uppercase tracking-widest">
          <Stars className="w-3.5 h-3.5 text-amber-300" />
          <span>Special Birthday Journey</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-5 font-brand leading-tight tracking-tight">
          Happy Birthday <br />
          <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 bg-clip-text text-transparent text-glow-rose">
            {recipientName}! ✨
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-rose-200/70 text-sm md:text-base mt-3 font-light leading-relaxed">
          Are you ready for a little magic crafted just for you?
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-4 mt-9 relative h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="flex items-center gap-2.5 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-rose-950/80 hover:shadow-rose-900/90 transition-all cursor-pointer border border-rose-400/40 z-20"
          >
            <span>Yes! Absolutely ❤️</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </motion.button>

          <motion.button
            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="absolute right-2 bg-rose-950/50 hover:bg-rose-900/60 text-rose-300/80 hover:text-white font-medium text-sm px-6 py-4 rounded-2xl border border-rose-500/20 shadow-lg cursor-pointer z-10 backdrop-blur-md transition-colors"
          >
            No 🙈
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}