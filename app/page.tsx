"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Enhanced parallax transformations with even more layers
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const layer5Y = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Click sparkle effect
  const handleSparkleClick = (e: React.MouseEvent) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Create multiple bursts of confetti
    confetti({
      origin: { x, y },
      particleCount: 15,
      spread: 360,
      startVelocity: 20,
      scalar: 0.7,
      ticks: 50,
      gravity: 0.4,
      decay: 0.94,
      colors: ["#FFD700", "#FFA500", "#FF69B4", "#87CEEB", "#DDA0DD"],
    });

    confetti({
      origin: { x, y },
      particleCount: 10,
      spread: 180,
      startVelocity: 15,
      scalar: 0.5,
      ticks: 40,
      gravity: 0.3,
      decay: 0.92,
      colors: ["#FFB7C5", "#FFD1DC", "#E6E6FA", "#B0E0E6"],
    });
  };

  const throwFlowers = () => {
    const end = Date.now() + 3000; // 3 seconds

    const colors = ["#ffb7c5", "#ffd1dc", "#ffe4e1", "#f8c8dc"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const throwStars = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["#FFD700", "#FFF8DC", "#FFFACD", "#FFE4B5"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  const throwHearts = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        startVelocity: 0,
        ticks: 200,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: ["#ff0000", "#ff69b4", "#ff1493"],
        // shapes: ['heart'],
        gravity: 0.5,
        scalar: 2,
        drift: 0,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const throwGlitter = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#ff69b4", "#ff1493", "#da70d6"],
    });
    fire(0.2, {
      spread: 60,
      colors: ["#00ffff", "#87ceeb", "#1e90ff"],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#ffd700", "#ffa500", "#ff69b4"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ff69b4", "#da70d6", "#ff1493"],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#87ceeb", "#00ffff", "#1e90ff"],
    });
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 relative"
      onClick={handleSparkleClick}
    >
      {/* Beautiful Parallax Birds Layer */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer1Y }}
      >
        <motion.svg
          className="absolute top-20 left-[10%] w-12 h-12 text-pink-400"
          viewBox="0 0 24 24"
          animate={{
            x: [0, 100, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            fill="currentColor"
            d="M12.5,3.1c0.8,0,1.6,0.3,2.2,0.9c1.3,1.3,1.3,3.3,0,4.6l-0.7,0.7l8.5,8.5l-1.4,1.4l-8.5-8.5l-0.7,0.7 c-1.3,1.3-3.3,1.3-4.6,0c-1.3-1.3-1.3-3.3,0-4.6l2.8-2.8C10.9,3.4,11.7,3.1,12.5,3.1z"
          />
        </motion.svg>

        <motion.svg
          className="absolute top-40 right-[20%] w-10 h-10 text-purple-400"
          viewBox="0 0 24 24"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            fill="currentColor"
            d="M12.5,3.1c0.8,0,1.6,0.3,2.2,0.9c1.3,1.3,1.3,3.3,0,4.6l-0.7,0.7l8.5,8.5l-1.4,1.4l-8.5-8.5l-0.7,0.7 c-1.3,1.3-3.3,1.3-4.6,0c-1.3-1.3-1.3-3.3,0-4.6l2.8-2.8C10.9,3.4,11.7,3.1,12.5,3.1z"
          />
        </motion.svg>
      </motion.div>

      {/* Beautiful Balloons Layer */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer2Y }}
      >
        <motion.div
          className="absolute top-[15%] left-[25%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-16 bg-pink-300 rounded-full relative">
            <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-pink-400 transform -translate-x-1/2" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[30%] right-[30%]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-14 h-18 bg-purple-300 rounded-full relative">
            <div className="absolute bottom-0 left-1/2 w-0.5 h-24 bg-purple-400 transform -translate-x-1/2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient Gradient Orbs */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer3Y }}
      >
        <div className="absolute top-[40%] left-[30%] w-32 h-32 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-[35%] right-[25%] w-40 h-40 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse" />
      </motion.div>

      {/* Floating Hearts Layer - Enhanced */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer4Y }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className={`w-${Math.floor(Math.random() * 3) + 4} h-${
                Math.floor(Math.random() * 3) + 4
              } text-pink-400/${Math.floor(Math.random() * 30) + 20}`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Glowing Background Circles */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: layer5Y }}
      >
        <div className="absolute top-[25%] right-[40%] w-48 h-48 bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-full blur-2xl" />
        <div className="absolute bottom-[30%] left-[35%] w-56 h-56 bg-gradient-to-tr from-purple-200/10 to-pink-200/10 rounded-full blur-2xl" />
      </motion.div>

      {/* First Section - Reduced height */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y: textY, scale }}
          className="absolute top-0 left-10 text-8xl text-pink-200/20 font-bold"
        >
          ✨
        </motion.div>
        <motion.div
          style={{ y: textY, scale, rotate: rotation }}
          className="absolute bottom-20 right-10 text-8xl text-purple-200/20 font-bold"
        >
          🌸
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-pink-600 font-bold text-center relative"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            How are you Madam ji? ✨
          </motion.div>
          <motion.div
            className="absolute -z-10 inset-0 bg-pink-200/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* Romantic Quote Section - Reduced height */}
      <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{
            rotateX: useTransform(scrollYProgress, [0.2, 0.4], [20, 0]),
            scale: useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]),
          }}
          className="text-center relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl text-purple-500 font-serif italic mb-4"
          >
            &ldquo;Every moment with you feels like a beautiful dream...
            💫&rdquo;
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-pink-400"
          >
            ...and I never want to wake up 🌙
          </motion.div>
        </motion.div>
      </section>

      {/* Second Section - Reduced height */}
      <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{
            y: layer2Y,
            scale: useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1.2]),
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-gradient-to-r from-pink-100/50 to-purple-100/50 blur-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl text-purple-600 font-bold text-center relative"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Are you fine now? 🌸
          </motion.span>
          <motion.div
            className="absolute -z-10 inset-0 bg-purple-200/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/* Interactive Buttons Section - Adjusted height */}
      <section className="h-[90vh] flex flex-col items-center justify-center gap-6 relative overflow-hidden">
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0.6, 0.8], [-100, 100]),
            opacity: useTransform(scrollYProgress, [0.6, 0.8], [0.2, 0.8]),
          }}
          className="absolute left-0 top-1/4 text-6xl"
        >
          🌟
        </motion.div>
        <motion.div
          style={{
            x: useTransform(scrollYProgress, [0.6, 0.8], [100, -100]),
            opacity: useTransform(scrollYProgress, [0.6, 0.8], [0.2, 0.8]),
          }}
          className="absolute right-0 bottom-1/4 text-6xl"
        >
          💫
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,182,193)" }}
          whileTap={{ scale: 0.9 }}
          onClick={throwFlowers}
          className="px-8 py-4 bg-pink-300 rounded-full text-white font-semibold shadow-lg hover:bg-pink-400 transition-all"
        >
          Flowers for you! 🌸
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,215,0)" }}
          whileTap={{ scale: 0.9 }}
          onClick={throwStars}
          className="px-8 py-4 bg-yellow-300 rounded-full text-white font-semibold shadow-lg hover:bg-yellow-400 transition-all"
        >
          Stars for you! ⭐
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,105,180)" }}
          whileTap={{ scale: 0.9 }}
          onClick={throwHearts}
          className="px-8 py-4 bg-red-300 rounded-full text-white font-semibold shadow-lg hover:bg-red-400 transition-all"
        >
          Hearts for you! 💖
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(218,112,214)" }}
          whileTap={{ scale: 0.9 }}
          onClick={throwGlitter}
          className="px-8 py-4 bg-purple-300 rounded-full text-white font-semibold shadow-lg hover:bg-purple-400 transition-all"
        >
          Glitter for you! ✨
        </motion.button>
      </section>

      {/* Enhanced Reminder Section - Adjusted height */}
      <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{
            y: layer3Y,
            rotateX: useTransform(scrollYProgress, [0.8, 1], [20, 0]),
            rotateY: useTransform(scrollYProgress, [0.8, 1], [-20, 0]),
            scale: useTransform(scrollYProgress, [0.8, 1], [0.8, 1]),
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-3/4 h-3/4 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-3xl blur-xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotateX: 180 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="p-8 bg-white/30 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(255,182,193,0.5)",
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl text-purple-600 font-bold mb-4"
            animate={{
              textShadow: [
                "0px 0px 4px rgba(218,112,214,0.3)",
                "0px 0px 8px rgba(218,112,214,0.6)",
                "0px 0px 4px rgba(218,112,214,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Remember our trip promise! 🌟
          </motion.h2>
          <motion.p
            className="text-lg text-pink-600 mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let&apos;s make it happen soon! 🎉
          </motion.p>
          <motion.p
            className="text-sm text-purple-500 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Because every moment spent with you is an adventure worth taking...
            💕
          </motion.p>
        </motion.div>
      </section>

      {/* Add new Floating Envelopes Section */}
      <section className="min-h-screen py-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "You make my heart skip a beat! 💓",
          "Every moment with you is magical ✨",
          "Your smile brightens up my day! 🌟",
          "You're the sweetest person I know 🍬",
          "Just thinking about you makes me smile 😊",
          "You're my favorite person in the world! 🌎",
        ].map((message, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className="w-64 h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg shadow-lg cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById(`message-${index}`);
                if (element) {
                  element.style.display =
                    element.style.display === "none" ? "block" : "none";
                }
              }}
            >
              {/* Envelope Front */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg shadow-inner"
                whileHover={{ scale: 1.1, rotateX: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">💌</span>
                </div>
              </motion.div>

              {/* Message Content */}
              <motion.div
                id={`message-${index}`}
                className="absolute inset-0 bg-white/90 backdrop-blur-sm p-4 flex flex-col items-center justify-center"
                initial={{ display: "none" }}
                animate={{
                  scale: [0.8, 1],
                  opacity: [0, 1],
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-lg text-pink-600 font-medium text-center mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {message}
                </motion.p>
                <motion.p
                  className="text-sm text-purple-500 italic"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  - Harshit
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
