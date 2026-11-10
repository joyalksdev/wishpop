// src/data/surpriseConfig.js
export const surpriseConfig = {
  recipientName: "Aleena",
  senderName: "Gheevas",
  passcode: null,

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
      audioUrl: "/they_call_this_love.mp3",
      title: "They Call This Love",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    },
    proposal: {
      audioUrl: "/they_call_this_love.mp3",
      title: "They Call This Love",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    },
    treasure: {
      audioUrl: "/arz-kiya-hai.mp3",
      title: "Arz Kiya Hai",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop",
    },
  },

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
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293237/WhatsApp_Image_2026-11-10_at_10.49.59_AM_muhjd0.jpg",
          },
          { 
            type: "photo",
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293236/WhatsApp_Image_2026-11-10_at_10.49.58_AM_uzgx2g.jpg",
          },
          {
            type: "photo",
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293236/WhatsApp_Image_2026-11-10_at_10.49.58_AM_1_cfagga.jpg",
          },{
            type: "photo",
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293236/WhatsApp_Image_2026-11-10_at_10.49.59_AM_1_temkr1.jpg",
          },{
            type: "photo",
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293236/WhatsApp_Image_2026-11-10_at_10.49.58_AM_2_fxxnpt.jpg",
          },{
            type: "photo",
            url: "https://res.cloudinary.com/egi20g3j/image/upload/v1794293236/WhatsApp_Image_2026-11-10_at_10.49.57_AM_pgo7rx.jpg",
          },
        ],
      },
    },
    {
      id: "proposal",
      type: "question",
      config: {
        questionText: "Will you be my baby girl until you turn 100? 🥰",
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

  share: {
    title: "My WishPulse Surprise for Aleena 💖",
    description: "Check out this interactive birthday experience!",
    hashtags: ["WishPulse", "BirthdaySurprise"],
  },
};