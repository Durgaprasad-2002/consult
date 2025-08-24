"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-fit  h-[500px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col justify-center items-center text-center px-6">
      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Where Dedication Builds <span className="text-yellow-400">Success</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Connecting Talent with Oppurtunity
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="px-8 py-3 rounded-full bg-yellow-400 text-blue-950 font-semibold shadow-md hover:bg-yellow-300 transition">
          Get Started
        </button>
        <button className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
