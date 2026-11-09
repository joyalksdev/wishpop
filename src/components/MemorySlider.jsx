'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight, Heart } from 'lucide-react';

export default function MemorySlider({ config, onNext }) {
  const slides = config.slides || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = slides[currentIndex];

  const handleNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!currentSlide) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="relative bg-[#250d17]/85 backdrop-blur-3xl p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] border border-rose-500/30 max-w-md w-full text-center overflow-hidden"
    >
      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Memory Lane ({currentIndex + 1} / {slides.length})</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand mb-4">
        Our Special Moments 📸
      </h2>

      {/* Slide Box */}
      <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-2xl border border-rose-500/20 bg-black/40 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            {currentSlide.type === 'video' && currentSlide.url ? (
              <video
                src={currentSlide.url}
                poster={currentSlide.poster}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={currentSlide.url || currentSlide.poster}
                alt={currentSlide.caption}
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Gradient Overlay for Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-left">
              <p className="text-white font-handwriting text-xl text-amber-100">
                "{currentSlide.caption}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <button
          onClick={handleNextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 my-5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === currentIndex ? 'w-6 bg-rose-400' : 'w-1.5 bg-rose-950/60'
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleNextSlide}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl shadow-rose-950/80 border border-rose-400/40 cursor-pointer text-sm"
      >
        <span>{currentIndex === slides.length - 1 ? 'Proceed to Love Letter' : 'Next Memory'}</span>
        <ArrowRight className="w-4 h-4 text-amber-200" />
      </motion.button>
    </motion.div>
  );
}