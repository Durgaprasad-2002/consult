"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    // Generate positions on client only
    const generated = Array.from({ length: 25 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setPositions(generated);
  }, []);
  return (
    <section className="relative h-[600px] md:h-[750px] overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-yellow-500">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_70%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle particle layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {positions.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Decorative blurred circles */}
      <motion.div
        className="absolute -top-10 left-10 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Where Talent Meets Dedication
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200/90 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Train with experts. Build skills. Unlock opportunities. Your career –
          our responsibility.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-white/30 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.1"
          d="M0,288L1440,128L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
