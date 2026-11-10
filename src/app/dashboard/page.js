'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ArrowLeft, Wand2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    recipientName: 'Aleena',
    senderName: 'Gheevas',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/w/demo`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#11060b] p-4 md:p-8 flex flex-col transform-gpu">
      
      {/* Top Navigation Bar */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between mb-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-rose-300/80 hover:text-white transition-colors font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-rose-600 to-pink-500 p-2 rounded-xl shadow-md">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-extrabold font-brand text-white tracking-tight">
            Wish<span className="text-rose-400">Pulse</span> <span className="text-xs bg-rose-950 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full uppercase">Creator</span>
          </span>
        </div>
      </div>

      {/* Creator Form Container */}
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="md:col-span-2 bg-[#250d17]/80 border border-rose-500/30 p-6 md:p-8 rounded-[2.5rem] shadow-2xl flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-extrabold font-brand text-white">
              Customize Surprise Experience 🎁
            </h1>
            <p className="text-xs md:text-sm text-rose-200/70 mt-1">
              Configure names and personalized touches for your cinematic journey.
            </p>
          </div>

          <hr className="border-rose-500/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                Recipient Name
              </label>
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-rose-500/30 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-950/40 text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                Your Name (Sender)
              </label>
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-rose-500/30 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-rose-950/40 text-white"
              />
            </div>
          </div>
        </div>

        {/* Share & Preview Card */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#250d17]/80 border border-rose-500/30 p-6 rounded-[2.5rem] shadow-2xl flex flex-col gap-4">
            <h3 className="font-extrabold font-brand text-white text-lg flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-rose-400" />
              <span>Ready to Share</span>
            </h3>
            <p className="text-xs text-rose-200/70">
              Copy your unique link and send it via WhatsApp or Instagram!
            </p>

            <div className="bg-rose-950/60 p-3 rounded-xl border border-rose-500/30 flex items-center justify-between gap-2">
              <span className="text-xs text-rose-200 truncate font-mono">
                wishpulse.app/w/demo
              </span>
              <button
                onClick={handleCopyLink}
                className="bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-lg transition-colors flex-shrink-0 cursor-pointer shadow-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {copied && (
              <span className="text-xs text-amber-300 font-semibold text-center animate-pulse">
                ✨ Link copied to clipboard!
              </span>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/w/demo')}
              className="w-full mt-2 bg-gradient-to-r from-rose-500 via-pink-600 to-rose-600 text-white font-bold py-3.5 rounded-xl shadow-xl transition-all text-sm cursor-pointer border border-rose-400/40"
            >
              Preview Live Experience 🚀
            </motion.button>
          </div>
        </div>

      </div>
    </div>
  );
}