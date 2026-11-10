'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Wand2, Play, Stars } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#11060b] relative overflow-hidden flex flex-col items-center justify-between p-6 transform-gpu">
      
      {/* Optimized Ambient Glow */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-rose-600/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-amber-600/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full max-w-5xl flex items-center justify-between py-6 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-rose-600 to-pink-500 p-2.5 rounded-2xl shadow-lg shadow-rose-900/40 border border-rose-400/30">
            <Sparkles className="w-5 h-5 text-amber-200" />
          </div>
          <span className="text-2xl font-extrabold font-brand tracking-tight text-white">
            Wish<span className="text-rose-400">Pulse</span>
          </span>
        </div>

        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-rose-900/50 transition-all border border-rose-400/30 cursor-pointer"
        >
          Create Surprise 🎁
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="max-w-3xl text-center flex flex-col items-center my-auto py-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-rose-950/70 text-rose-300 text-xs font-semibold px-5 py-2 rounded-full border border-rose-500/30 shadow-inner mb-6 uppercase tracking-widest"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 animate-pulse" />
          <span>Cinematic Interactive Love & Birthday Journeys</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-brand text-white leading-[1.1]"
        >
          Craft Unforgettable <br />
          <span className="bg-gradient-to-r from-rose-300 via-pink-400 to-amber-300 bg-clip-text text-transparent text-glow-rose">
            Digital Masterpieces
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-rose-200/70 text-base md:text-lg mt-6 max-w-xl font-light leading-relaxed"
        >
          Build immersive multi-stage web gifts complete with evasive refusal gates, interactive photo lanes, microphone candle blowing, and custom romantic question flows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <Link
            href="/dashboard"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-rose-950/60 transition-all border border-rose-400/40 cursor-pointer"
          >
            <Wand2 className="w-4 h-4 text-amber-200" />
            <span>Create Free Surprise</span>
          </Link>

          <Link
            href="/w/demo"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-200 font-semibold text-sm px-8 py-4 rounded-2xl border border-rose-500/20 shadow-lg transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span>Try Live Demo</span>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-rose-300/40 font-medium py-4 z-10 flex items-center gap-1.5">
        <Stars className="w-3.5 h-3.5 text-amber-300/60" />
        <span>Powered by WishPulse ✨ Handcrafted for special celebrations.</span>
      </footer>

    </div>
  );
}