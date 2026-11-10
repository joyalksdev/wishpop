// src/components/MusicPlayer.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

export default function MusicPlayer({ audioUrl, trackName = "Romantic Melody", artistName = "WishPulse", coverImage }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      <motion.div
        initial={{ opacity: 0, y: -15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="fixed top-4 right-4 z-50 transform-gpu"
      >
        <div className="flex items-center gap-3 bg-[#250d17]/90 backdrop-blur-md px-3.5 py-2 rounded-full shadow-2xl border border-rose-500/30 text-white">

          <motion.div
            className="relative w-10 h-10 rounded-full bg-gradient-to-br from-rose-950 via-black to-rose-950 border border-rose-500/40 shadow-md flex items-center justify-center overflow-hidden cursor-pointer"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            onClick={togglePlay}
          >
            <div className="absolute w-6 h-6 rounded-full overflow-hidden bg-rose-950 z-10 flex items-center justify-center">
              {coverImage ? (
                <img src={coverImage} alt={trackName} className="w-full h-full object-cover" />
              ) : (
                <Music className="w-3 h-3 text-white" />
              )}
            </div>
          </motion.div>

          <div className="hidden sm:flex flex-col min-w-0">
            <span className="text-xs font-bold truncate max-w-[120px] font-brand text-rose-100">
              {trackName}
            </span>
            <span className="text-[10px] text-rose-300/60 truncate max-w-[120px]">
              {artistName}
            </span>
          </div>

          <button
            onClick={togglePlay}
            aria-label="Toggle music"
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white p-2 rounded-full shadow-md transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          </button>
        </div>
      </motion.div>
    </>
  );
}