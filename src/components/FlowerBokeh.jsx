// src/components/FlowerBokeh.jsx
"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

export default function FlowerBokeh({ senderName, onNext }) {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-200 p-4 text-center overflow-hidden relative">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-300/40 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/60 max-w-md w-full z-10"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-rose-500 to-pink-500 p-3.5 rounded-full shadow-xl border-4 border-white">
          <Heart className="w-7 h-7 text-white fill-white animate-pulse" />
        </div>

        <span className="bg-rose-100 text-rose-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Forever Yours 🌸
        </span>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-5 font-brand">
          Two Hearts, One Soul
        </h2>

        <div className="my-6 p-6 bg-gradient-to-br from-pink-50/80 to-rose-50/50 rounded-2xl border border-rose-100 shadow-inner">
          <p className="font-handwriting text-xl md:text-2xl text-gray-700 leading-relaxed">
            "In a world full of temporary things, you are my absolute forever. Every moment with you feels like pure magic."
          </p>
          <div className="mt-4 text-right font-bold text-rose-600 font-brand text-sm">
            — With all my love, {senderName} ❤️
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        >
          <span>Open Golden Envelope</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
}