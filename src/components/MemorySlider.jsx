// src/components/MemorySlider.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function MemorySlider({ config, onNext }) {
  const slides = config.slides || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.url) {
        const img = new Image();
        img.src = slide.url;
      }
    });
  }, [slides]);

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

  const handleDragEnd = (e, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNextSlide();
    } else if (info.offset.x > swipeThreshold) {
      handlePrevSlide();
    }
  };

  if (!slides.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative bg-[#250d17]/85 backdrop-blur-xl p-5 md:p-8 rounded-[2.5rem] shadow-2xl border border-rose-500/30 max-w-md w-full text-center transform-gpu"
    >
      <div className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-rose-500/30 shadow-inner uppercase tracking-widest mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        <span>Memory Lane ({currentIndex + 1} / {slides.length})</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white font-brand mb-4">
        Our Special Moments 📸
      </h2>

      {/* GPU Accelerated Smooth Slider */}
      <div 
        ref={containerRef}
        className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-rose-500/20 bg-[#170910] flex items-center justify-center touch-pan-y"
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          className="flex w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing transform-gpu"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center p-2 relative"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center">
                <img
                  src={slide.url}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {currentIndex > 0 && (
          <button
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer z-20 border border-white/10 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {currentIndex < slides.length - 1 && (
          <button
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer z-20 border border-white/10 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <p className="text-[11px] text-rose-300/50 mt-2 italic">
        💡 Swipe smoothly or use arrows to view photos
      </p>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 my-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              i === currentIndex ? 'w-6 bg-rose-400' : 'w-1.5 bg-rose-950/60'
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNextSlide}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-xl border border-rose-400/40 cursor-pointer text-sm"
      >
        <span>{currentIndex === slides.length - 1 ? 'Proceed to Question' : 'Next Memory'}</span>
        <ArrowRight className="w-4 h-4 text-amber-200" />
      </motion.button>
    </motion.div>
  );
}