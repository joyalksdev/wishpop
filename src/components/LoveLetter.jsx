// src/components/LoveLetter.jsx
'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LoveLetter({ senderName, recipientName, config, onNext }) {
  const letterText = config.letterText || '';

  const handleFinish = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#f43f5e', '#fbbf24', '#ffffff'],
    });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#250d17]/85 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-amber-500/30 max-w-md w-full text-center transform-gpu"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-amber-600 to-yellow-500 p-4 rounded-full shadow-2xl border border-amber-300/40">
        <Heart className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
      </div>
      
      <div className="inline-flex items-center gap-1.5 bg-amber-950/80 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-amber-500/30 shadow-inner mt-3 uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Heartfelt Treasure</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand mt-4">
        A Note For You 💌
      </h2>

      <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-6 my-6 text-left shadow-inner">
        <p className="text-amber-100 font-handwriting text-xl md:text-2xl leading-relaxed whitespace-pre-line">
          {letterText}
        </p>
        <div className="mt-6 text-right font-bold text-amber-300 font-brand text-sm">
          — Forever yours, {senderName} ❤️
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleFinish}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-amber-950 font-bold py-4 rounded-2xl shadow-xl border border-amber-200/40 cursor-pointer text-sm"
      >
        <span>Complete Surprise Journey</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}