"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Parallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  return (
    <section
      ref={ref}
      className="relative h-screen max-h-[600px] overflow-hidden select-none"
      aria-label="Hero section with parallax background"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/assets/contact-bg.webp"
          alt="Empowering Career Background"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 sm:px-10 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl drop-shadow-xl"
        >
          Empower Your Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl font-medium tracking-wide text-white/90 drop-shadow-lg"
        >
          Join expert-led training and build your career from the ground up with
          Varma Placement Services.
        </motion.p>
      </div>
    </section>
  );
}
