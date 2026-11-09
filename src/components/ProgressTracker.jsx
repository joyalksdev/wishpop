// src/components/ProgressTracker.jsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STEP_LABELS = ["Unwrap", "Celebrate", "Reminisce", "Treasure"];

export default function ProgressTracker({ currentStep, totalSteps = 4 }) {
  // Hide on the first step for a clean entrance
  if (currentStep === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-4 py-2 bg-[#250d17]/85 backdrop-blur-xl rounded-full shadow-2xl border border-rose-500/30"
    >
      {STEP_LABELS.slice(0, totalSteps).map((label, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isFuture = index > currentStep;

        return (
          <motion.div
            key={label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 500, damping: 25 }}
            className="relative flex items-center gap-1.5 group"
          >
            {/* Connecting line */}
            {index < totalSteps - 1 && (
              <div className="absolute top-1/2 left-full h-0.5 w-8 -translate-y-1/2 -translate-x-1 overflow-hidden bg-rose-950/80">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isCompleted || isCurrent ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500 origin-left"
                />
              </div>
            )}

            {/* Step Dot */}
            <div
              className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                isCompleted
                  ? "bg-gradient-to-br from-rose-500 to-pink-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]"
                  : isCurrent
                  ? "bg-[#250d17] ring-2 ring-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.8)]"
                  : "bg-rose-950/50 ring-1 ring-rose-500/20"
              }`}
            >
              {isCompleted ? (
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              ) : (
                <div
                  className={`w-2 h-2 rounded-full ${
                    isCurrent ? "bg-amber-300 animate-pulse shadow-[0_0_8px_#fbbf24]" : "bg-rose-500/40"
                  }`}
                />
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}