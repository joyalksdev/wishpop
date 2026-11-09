// src/data/surpriseConfig.js
export const surpriseConfig = {
  // Meta
  recipientName: "Aleena",
  senderName: "Gheevas",

  // Optional PIN (if provided, shows PIN gate; else tap-to-open)
  passcode: null, // "1234" or null

  // Music per step (optional - falls back to default)
  music: {
    unwrap: {
      audioUrl: "/birthday.mp3",
      title: "Happy Birthday (Lo-Fi)",
      cover: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&auto=format&fit=crop",
    },
    celebrate: {
      audioUrl: "/birthday.mp3",
      title: "Happy Birthday (Lo-Fi)",
      cover: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&auto=format&fit=crop",
    },
    reminisce: {
      audioUrl: "/arz-kiya-hai.mp3",
      title: "Arz Kiya Hai",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    },
    treasure: {
      audioUrl: "/arz-kiya-hai.mp3",
      title: "Arz Kiya Hai",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    },
  },

  // Steps array - defines the flow
  steps: [
    { id: "unwrap", type: "envelope" },
    {
      id: "celebrate",
      type: "wishpop",
      config: {
        candleCount: 3,
        balloonNotes: [
          "You make every single day brighter! 🌟",
          "Your smile is literally infectious 😊",
          "Best partner & secret keeper ever 🤫❤️",
          "Thank you for being uniquely you ✨",
          "Here's to a year full of adventures! 🚀",
        ],
        balloonColors: [
          "from-rose-400 to-pink-500",
          "from-purple-400 to-indigo-500",
          "from-amber-300 to-rose-400",
          "from-sky-400 to-blue-500",
          "from-pink-300 to-rose-400",
        ],
      },
    },
    {
      id: "reminisce",
      type: "memoryslider",
      config: {
        slides: [
          {
            type: "photo",
            url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
            caption: "Our first trip together ✨",
          },
          {
            type: "photo",
            url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop",
            caption: "Coffee dates & endless giggles ☕",
          },
          {
            type: "video",
            url: "", // Add video URL here when available
            caption: "Surprise message from Alex 🎥",
            poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
          },
          {
            type: "photo",
            url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop",
            caption: "Always matching energy! 🌟",
          },
        ],
      },
    },
    {
      id: "treasure",
      type: "loveletter",
      config: {
        letterText: `Happy Birthday! 🎈

Words can't describe how grateful I am to have you in my life. Every single memory with you brings so much warmth and light.

Here's to celebrating you today and creating countless more amazing moments together! ❤️`,
      },
    },
  ],

  // Share config
  share: {
    title: "My WishPulse Surprise for Ria 💖",
    description: "Check out this interactive birthday experience!",
    hashtags: ["WishPulse", "BirthdaySurprise"],
  },
};