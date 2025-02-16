// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Shon",

    // The title that appears in the browser tab
    pageTitle: "A Slightly Twisted Love Ode for You, Shon 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                       
    },

    // Questions and answers with a witty, dark twist
    questions: {
        first: {
            text: "Hey Shon, ever wonder why I exist if not for this peculiar kind of affection?",
            yesBtn: "I'm intrigued!",
            noBtn: "Not feeling it...",
            secretAnswer: "Maybe it's fate, or just my odd sense of humor. ❤️"
        },
        second: {
            text: "How intense is this weird, all-consuming fondness I have for you?",
            startText: "Off the charts and then some!",
            nextBtn: "Show me more ❤️"
        },
        third: {
            text: "Will you be my Valentine and dive into this delightfully dark romance with me? 🌹",
            yesBtn: "Absolutely, let's embrace the madness!",
            noBtn: "I think I'll pass..."
        }
    },

    // Love meter messages with a twist of dark humor
    loveMessages: {
        extreme: "Whoa, you've reached the cosmic absurdity of my affection! 🥰🚀💝",
        high: "To the edge of sanity and back! 🚀💝",
        normal: "Just a quirky dose of love for you! 🥰"
    },

    // Messages that appear after a positive response
    celebration: {
        title: "Cheers! Fate (and a touch of madness) brought us together! 🎉💝💖💝💓",
        message: "Here's my non utility attempt at love—irreverent, dark, and refreshingly genuine.",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings for a playful vibe
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/deq8nrimd/video/upload/v1739630189/PinkFloyd-04-WishYouWereHere_vn4ayr.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
