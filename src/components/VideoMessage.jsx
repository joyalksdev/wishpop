// src/components/VideoMessage.jsx
"use client";

import { motion } from "framer-motion";
import { Video, ArrowRight, Sparkles } from "lucide-react";

export default function VideoMessage({ videoUrl, config, onNext }) {
  const url = videoUrl || config?.url || "";
  const caption = config?.caption || "A special video greeting just for you 🎥";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative bg-[#250d17]/85 backdrop-blur-3xl p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] border border-rose-500/30 max-w-md w-full text-center overflow-hidden"
    >
      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Video Showcase</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand mb-4">
        Special Message 🎥
      </h2>

      {/* Video Container */}
      <div className="relative w-full h-80 bg-black/60 rounded-2xl overflow-hidden shadow-2xl border border-rose-500/30 flex items-center justify-center my-4">
        {url ? (
          <video
            src={url}
            className="w-full h-full object-cover"
            controls
            playsInline
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-rose-300/60 bg-rose-950/20 p-6">
            <Video className="w-14 h-14 mb-3 text-rose-400 animate-pulse" />
            <span className="text-sm font-medium text-rose-200">Video greeting placeholder</span>
            <p className="text-xs text-rose-300/50 mt-1">Add your MP4 URL in the config</p>
          </div>
        )}
      </div>

      <p className="font-handwriting text-2xl md:text-3xl text-amber-200 text-glow-gold my-4">
        "{caption}"
      </p>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-rose-950/80 border border-rose-400/40 cursor-pointer text-sm"
      >
        <span>Continue Journey</span>
        <ArrowRight className="w-4 h-4 text-amber-200" />
      </motion.button>
    </motion.div>
  );
}