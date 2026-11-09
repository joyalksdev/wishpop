// src/components/MusicPlayer.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

export default function MusicPlayer({ audioUrl, trackName = "Romantic Melody", artistName = "WishPulse", coverImage }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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

      {/* Spotify-style Floating Vinyl Capsule */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-4 right-4 z-50 transition-all duration-300"
      >
        <div className="flex items-center gap-3 bg-gray-900/90 backdrop-blur-2xl px-3.5 py-2.5 rounded-full shadow-2xl border border-white/20 text-white">

          {/* Rotating Vinyl Disc */}
          <motion.div
            className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 via-black to-gray-900 border-2 border-gray-700 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            onClick={togglePlay}
          >
            {/* Center Album Art */}
            <div className="absolute w-7 h-7 rounded-full overflow-hidden border border-gray-600 bg-gray-800 z-10 flex items-center justify-center">
              {coverImage ? (
                <img src={coverImage} alt={trackName} className="w-full h-full object-cover" />
              ) : (
                <Music className="w-3.5 h-3.5 text-white" />
              )}
              <div className="absolute w-1.5 h-1.5 rounded-full bg-gray-900 border border-gray-500 z-20" />
            </div>
          </motion.div>

          {/* Track Info */}
          <div className="hidden sm:flex flex-col min-w-0">
            <span className="text-xs font-bold truncate max-w-[130px] font-brand text-gray-100">
              {trackName}
            </span>
            <span className="text-[10px] text-gray-400 truncate max-w-[130px]">
              {artistName}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white p-2 rounded-full shadow-md transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
          </button>
        </div>
      </motion.div>
    </>
  );
}