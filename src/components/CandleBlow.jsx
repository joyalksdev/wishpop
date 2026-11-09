// src/components/CandleBlow.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Flame, Mic, ArrowRight, Sparkles } from "lucide-react";

export default function CandleBlow({ recipientName, onNext }) {
  const [isLit, setIsLit] = useState(true);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let audioContext, analyser, microphone, stream;

    const startMic = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        setListening(true);

        const detect = () => {
          if (!isLit) return;
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < bufferLength; i++) sum += dataArray[i];
          if (sum / bufferLength > 35) {
            extinguish();
          } else {
            requestAnimationFrame(detect);
          }
        };
        detect();
      } catch (err) {
        setListening(false);
      }
    };

    if (isLit) startMic();

    return () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (audioContext && audioContext.state !== "closed") audioContext.close();
    };
  }, [isLit]);

  const extinguish = () => {
    setIsLit(false);
    setListening(false);
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate([60, 60]);
    confetti({ 
      particleCount: 150, 
      spread: 90, 
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fbbf24', '#ffffff']
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative bg-[#250d17]/85 backdrop-blur-3xl p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] border border-rose-500/30 max-w-md w-full text-center overflow-hidden"
    >
      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Birthday Candle</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand">
        {isLit ? "Blow Out the Candle! 🎂" : "Wish Granted! ✨"}
      </h2>
      <p className="text-rose-200/70 text-xs md:text-sm mt-1 mb-6">
        {isLit ? "Blow into your microphone or tap the flame to extinguish it." : "Your birthday wish has been locked in!"}
      </p>

      {/* Candle Graphic */}
      <div className="relative my-6 z-10 flex flex-col items-center">
        <div className="mb-[-6px] z-20">
          <div onClick={extinguish} className="flex flex-col items-center cursor-pointer group">
            <AnimatePresence>
              {isLit ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.25, 1], rotate: [-5, 5, -5] }}
                  exit={{ opacity: 0, y: -30, scale: 0 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="w-7 h-10 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full shadow-[0_0_30px_#f59e0b] mb-1 flex items-center justify-center"
                >
                  <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
                </motion.div>
              ) : (
                <div className="w-3 h-6 bg-rose-950 rounded-full blur-[1px] mb-1 animate-pulse" />
              )}
            </AnimatePresence>
            <div className="w-3.5 h-16 bg-gradient-to-b from-rose-300 to-rose-500 rounded-t-sm shadow-md" />
          </div>
        </div>

        <div className="w-48 h-16 bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 rounded-t-3xl border-b-4 border-rose-400 shadow-xl flex items-center justify-center z-10">
          <span className="text-xs font-bold tracking-widest text-amber-200 uppercase font-brand text-glow-gold">
            {recipientName}
          </span>
        </div>
        <div className="w-60 h-16 bg-gradient-to-r from-rose-700 to-pink-600 rounded-t-2xl border-b-4 border-rose-500 shadow-xl" />
        <div className="w-72 h-3 bg-rose-950/80 rounded-full shadow-2xl mt-[-2px] border border-rose-500/20" />
      </div>

      {isLit && (
        <div className="inline-flex items-center gap-2 bg-rose-950/60 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-rose-500/30 text-xs font-semibold text-rose-200 my-4">
          <Mic className={`w-4 h-4 ${listening ? "text-amber-300 animate-pulse" : "text-rose-400"}`} />
          <span>{listening ? "Listening for your breath..." : "Tap flame to blow out manually"}</span>
        </div>
      )}

      {!isLit && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-rose-950/80 border border-rose-400/40 cursor-pointer text-sm"
          >
            <span>Continue Journey</span>
            <ArrowRight className="w-4 h-4 text-amber-200" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}