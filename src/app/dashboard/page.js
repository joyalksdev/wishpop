// src/app/dashboard/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ArrowLeft, Wand2, Heart } from 'lucide-react';
import Link from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    recipientName: 'Aleena',
    senderName: 'Joe',
    videoUrl: '',
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
    <div className="min-h-dvh bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 p-4 md:p-8">
      
      {/* Top Navigation Bar */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-8">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <div className="flex items-center gap-2">
          <div className="bg-rose-500 p-2 rounded-xl shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-extrabold font-brand text-gray-800 tracking-tight">
            Wish<span className="text-rose-500">Pulse</span> <span className="text-xs bg-rose-200 text-rose-800 px-2 py-0.5 rounded-full uppercase">Creator</span>
          </span>
        </div>
      </div>

      {/* Creator Form Container */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-2 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-pink-100 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-extrabold font-brand text-gray-800">
              Customize Surprise Experience 🎁
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Configure names and video URL for Aleena's cinematic journey.
            </p>
          </div>

          <hr className="border-pink-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Recipient Name
              </label>
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Your Name (Sender)
              </label>
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              His Video Message URL (MP4)
            </label>
            <input
              type="text"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://example.com/video.mp4 (or leave blank)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 text-sm bg-white font-mono text-xs"
            />
          </div>
        </div>

        {/* Share & Preview Card */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-pink-100 flex flex-col gap-4 sticky top-24">
            <h3 className="font-extrabold font-brand text-gray-800 text-lg flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-rose-500" />
              <span>Ready to Share</span>
            </h3>
            <p className="text-xs text-gray-500">
              Copy your unique link and send it via WhatsApp or Instagram!
            </p>

            <div className="bg-pink-50 p-3 rounded-xl border border-pink-200/60 flex items-center justify-between gap-2">
              <span className="text-xs text-gray-600 truncate font-mono">
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
              <span className="text-xs text-emerald-600 font-semibold text-center animate-pulse">
                ✨ Link copied to clipboard!
              </span>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/w/demo')}
              className="w-full mt-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm cursor-pointer"
            >
              Preview Live Experience 🚀
            </motion.button>
          </div>
        </div>

      </div>
    </div>
  );
}