// src/components/ReplayFooter.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Copy, MessageSquare, Heart, Sparkles, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function ReplayFooter({ senderName, recipientName, onReplay, surpriseUrl }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(surpriseUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      prompt("Copy link:", surpriseUrl || window.location.href);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hey! ${senderName} made me this incredible birthday surprise ✨ Check it out: ${surpriseUrl || window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleReplayClick = () => {
    confetti({ 
      particleCount: 150, 
      spread: 90, 
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff'] 
    });
    onReplay();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#250d17]/85 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-rose-500/30 max-w-md w-full text-center transform-gpu"
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-rose-600 to-pink-500 p-4 rounded-full shadow-2xl border border-rose-400/40">
        <Heart className="w-6 h-6 text-amber-100 fill-amber-100 animate-pulse" />
      </div>

      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner mt-3 uppercase tracking-widest">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Journey Complete</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 font-brand">
        Happy Birthday, <br />
        <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">
          {recipientName}! 🎉
        </span>
      </h2>

      <p className="font-handwriting text-2xl md:text-3xl text-amber-200 text-glow-gold my-4">
        "Crafted with endless love by {senderName} ❤️"
      </p>

      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />
        <Heart className="w-4 h-4 text-rose-400 fill-rose-400 animate-pulse" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />
      </div>

      <div className="space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReplayClick}
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold px-6 py-4 rounded-2xl shadow-xl border border-rose-400/40 cursor-pointer text-sm"
        >
          <RefreshCw className="w-4 h-4 text-amber-200" />
          <span>Replay Experience</span>
          <Sparkles className="w-4 h-4 text-amber-200 animate-spin" />
        </motion.button>

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 font-semibold py-3 rounded-xl border border-emerald-500/35 transition-all cursor-pointer text-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 bg-rose-950/50 hover:bg-rose-900/60 text-rose-200 font-semibold py-3 rounded-xl border border-rose-500/35 transition-all cursor-pointer text-xs"
          >
            {copied ? <Check className="w-4 h-4 text-amber-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </motion.button>
        </div>
      </div>

      <p className="text-xs text-rose-300/50 italic mt-6">
        💡 Tip: Screenshot your favorite moments to save them forever!
      </p>
    </motion.div>
  );
}