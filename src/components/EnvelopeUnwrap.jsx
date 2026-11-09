'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MailOpen, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnvelopeUnwrap({ recipientName, senderName, onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff'],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative bg-[#250d17]/85 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] border border-rose-500/30 max-w-md w-full text-center"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-rose-600 to-pink-500 p-4 rounded-full shadow-2xl shadow-rose-950/80 border border-rose-400/40">
        <Heart className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner mt-3 uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Birthday Surprise</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-5 font-brand leading-tight">
        Happy Birthday, <br />
        <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">
          {recipientName}! ✨
        </span>
      </h1>

      <p className="text-rose-200/70 text-sm mt-3 font-light leading-relaxed">
        {senderName} has prepared a special interactive journey just for you. Break the seal to begin!
      </p>

      {!isOpen ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="w-48 h-36 mx-auto bg-gradient-to-tr from-rose-700 via-rose-600 to-pink-500 rounded-2xl shadow-2xl shadow-rose-950/90 border border-rose-300/40 flex flex-col items-center justify-center cursor-pointer relative group my-8"
        >
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-rose-600 to-rose-700 rounded-t-2xl border-b border-rose-400/30 clip-triangle" />
          <div className="w-12 h-12 rounded-full bg-amber-400 border-2 border-amber-200 shadow-xl flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
            <MailOpen className="w-6 h-6 text-rose-950" />
          </div>
          <span className="text-[11px] font-bold tracking-widest text-amber-200 uppercase mt-2 z-10 text-glow-gold">
            Tap to Open
          </span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-rose-950/50 border border-rose-500/30 rounded-2xl p-5 my-6 text-center backdrop-blur-md shadow-inner"
        >
          <p className="text-rose-100 font-handwriting text-xl">
            "Your magical journey awaits, {recipientName}..."
          </p>
        </motion.div>
      )}

      {isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-rose-950/80 border border-rose-400/40 cursor-pointer text-sm"
        >
          <span>Start Experience</span>
          <ArrowRight className="w-4 h-4 text-amber-200" />
        </motion.button>
      )}
    </motion.div>
  );
}