// src/components/ProposalQuestion.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProposalQuestion({ recipientName, config, onNext }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [answered, setAnswered] = useState(false);

  const question = config?.questionText || `Will you be my baby girl until you turn 100, ${recipientName}? ❤️`;

  const moveButton = (e) => {
    if (e) e.preventDefault();
    const rx = (Math.random() - 0.5) * 110;
    const ry = (Math.random() - 0.5) * 70;
    setNoPos({ x: rx, y: ry });
  };

  const handleYes = () => {
    setAnswered(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff'],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#250d17]/85 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-rose-500/35 max-w-md w-full text-center transform-gpu"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-rose-600 to-pink-500 p-4 rounded-full shadow-2xl border border-rose-400/40">
        <Heart className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner mt-3 uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Important Question</span>
      </div>

      <h2 className="font-handwriting text-3xl md:text-4xl text-amber-100 text-glow-gold my-6 leading-relaxed">
        "{question}"
      </h2>

      {!answered ? (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative min-h-[110px] my-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleYes}
            className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl border border-rose-400/40 cursor-pointer text-sm z-20"
          >
            Yes! A Million Times Yes ❤️
          </motion.button>

          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: 'spring', stiffness: 600, damping: 20 }}
            onMouseEnter={moveButton}
            onTouchStart={moveButton}
            onClick={moveButton}
            className="w-28 sm:w-auto bg-rose-950/60 hover:bg-rose-900/60 text-rose-300/80 font-medium px-6 py-4 rounded-2xl border border-rose-500/20 shadow-lg cursor-pointer text-sm z-10 transition-colors"
          >
            No 🙈
          </motion.button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <p className="font-handwriting text-2xl text-amber-200">Yaaay! Locked in forever! 🥰🍾</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl border border-rose-400/40 cursor-pointer text-sm"
          >
            <span>Proceed to Love Letter</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}