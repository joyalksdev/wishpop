// src/components/PetalEffect.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PetalEffect() {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setMounted(true);
    // Generate random values safely on the client side only
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 14, // 14px to 26px
      duration: Math.random() * 8 + 6, // 6s to 14s
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  // Prevent rendering on the server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -50, x: 0, opacity: 0, rotate: petal.rotate }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, Math.sin(petal.id) * 60, 0],
            opacity: [0, 0.8, 0.8, 0],
            rotate: petal.rotate + 360,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: petal.left,
            fontSize: `${petal.size}px`,
          }}
          className="select-none text-rose-300/60 filter drop-shadow-sm"
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}