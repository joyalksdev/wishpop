'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Trophy, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

const MESSAGES = [
  "Your smile lights up every room! ✨",
  "You are infinitely cherished & loved ❤️",
  "The most gorgeous soul inside & out 🌹",
  "Forever making my world brighter ✨"
];

export default function BalloonGrid({ onNext }) {
  const [popped, setPopped] = useState([false, false, false, false]);
  const [activeMessage, setActiveMessage] = useState(null);

  const handlePop = (index) => {
    if (popped[index]) return;

    const newPopped = [...popped];
    newPopped[index] = true;
    setPopped(newPopped);
    setActiveMessage(MESSAGES[index]);

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff']
    });

    // Check if all popped
    if (newPopped.every(Boolean)) {
      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#f43f5e', '#fb7185', '#fbbf24']
        });
      }, 500);
    }
  };

  const allPopped = popped.every(Boolean);

  return (
    <div className="w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-[#250d17]/80 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-rose-500/25 max-w-md w-full text-center overflow-hidden"
      >
        <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Interactive Surprise</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand">
          Pop the Balloons 🎈
        </h2>
        <p className="text-rose-200/70 text-xs md:text-sm mt-1 mb-6">
          Tap each balloon to reveal special notes!
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 my-4">
          {popped.map((isPopped, i) => (
            <motion.button
              key={i}
              whileHover={!isPopped ? { scale: 1.06, rotate: [0, -3, 3, 0] } : {}}
              whileTap={!isPopped ? { scale: 0.94 } : {}}
              onClick={() => handlePop(i)}
              className={cn(
                "h-32 rounded-3xl flex flex-col items-center justify-center relative transition-all shadow-lg border",
                isPopped 
                  ? "bg-rose-950/30 border-rose-500/10 opacity-50 cursor-default" 
                  : "bg-gradient-to-br from-rose-600/40 via-pink-600/30 to-purple-900/40 border-rose-400/30 hover:border-rose-400/60 cursor-pointer shadow-rose-950/50"
              )}
            >
              {isPopped ? (
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-bounce" />
              ) : (
                <>
                  <div className="w-10 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 shadow-md flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div className="w-0.5 h-6 bg-rose-400/40 mt-1" />
                </>
              )}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Note Display */}
        <div className="h-14 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeMessage ? (
              <motion.p
                key={activeMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs md:text-sm font-handwriting text-amber-200 text-glow-gold tracking-wide"
              >
                "{activeMessage}"
              </motion.p>
            ) : (
              <p className="text-xs text-rose-300/50 italic">
                Tap a balloon above to unlock hidden words...
              </p>
            )}
          </AnimatePresence>
        </div>

        {/* Continue Button */}
        {allPopped && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-rose-950/80 border border-rose-400/40 cursor-pointer text-sm"
          >
            <span>Continue Journey</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}