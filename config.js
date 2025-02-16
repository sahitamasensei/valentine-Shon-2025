// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Shon",

    // The title that appears in the browser tab, with a timeless ode to love
    pageTitle: "A Timeless Ode to Love for Shon 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers with a classical, poetic touch
    questions: {
        first: {
            text: "Dear Shon, does your heart echo the cadence of mine?",
            yesBtn: "Indeed, with passion!",
            noBtn: "Alas, not in measure...",
            secretAnswer: "Not mere fondness, but an eternal adoration awaits! ❤️"
        },
        second: {
            text: "How boundless is the ardor that fills your soul?",
            startText: "Infinite as the heavens!",
            nextBtn: "Proceed, with passion! ❤️"
        },
        third: {
            text: "Will you, dear Shon, join me in a bond of eternal affection? 🌹",
            yesBtn: "Forever united!",
            noBtn: "Alas, my heart laments..."
        }
    },

    // Love meter messages in a classical style
    loveMessages: {
        extreme: "Ah, the divine gaze beholds such fervor! 🥰🚀💝",
        high: "To the stars and beyond! 🚀💝",
        normal: "Ever onward in affection! 🥰"
    },

    // Messages that appear after they affirm their love
    celebration: {
        title: "Rejoice! Fate has entwined our souls in love! 🎉💝💖💝💓",
        message: "Now, dear Shon, receive this token of my affection—a warm embrace and a kiss as timeless as the eternal forms.",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/deq8nrimd/video/upload/v1739630189/PinkFloyd-04-WishYouWereHere_vn4ayr.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
