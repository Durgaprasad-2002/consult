"use client";
import React, { useEffect, useRef, useState } from "react";
import Testimonials from "./(components)/Testimonails";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Users, GraduationCap } from "lucide-react";
import { School, Building2, FileText } from "lucide-react";

import { BookOpen, Hammer, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
  {
    name: "Sai Krishna Reddy",
    review:
      "Varma Placements helped me improve my interview skills. The mock interviews and guidance made me confident. Truly helpful for freshers in Andhra Pradesh!",
  },
  {
    name: "Anitha Kumari",
    review:
      "The Java and SQL training sessions are very practical. Mentors explain everything clearly, which helped me get ready for IT jobs locally and outside.",
  },
  {
    name: "Ramesh Babu",
    review:
      "I was struggling with MNC interviews until I joined Varma Placements. The resume and technical support really boosted my chances. Got placed in 3 months!",
  },
  {
    name: "Sravani Devi",
    review:
      "Loved the hands-on training! The live projects added great experience to my resume. It’s truly a career-changing program for Andhra students.",
  },
  {
    name: "Venkatesh Rao",
    review:
      "Personalized feedback and continuous support made all the difference. Trainers patiently explain concepts and clarify doubts.",
  },
  {
    name: "Laxmi Narayana",
    review:
      "Perfect place for freshers and working professionals from Andhra Pradesh seeking growth. Placement help is genuine and effective.",
  },
  {
    name: "Hema Priya",
    review:
      "Thanks to Varma Placements, I’m now working at a top IT company. Real-time projects and expert guidance helped me stand out.",
  },
  {
    name: "Ravi Teja",
    review:
      "They don’t just teach; they prepare you for the industry. The focus on DBMS and Linux gave me a strong foundation for jobs in Andhra Pradesh and beyond.",
  },
  {
    name: "Sowmya Rani",
    review:
      "Very professional team and excellent training materials. They helped me find my weak areas and improve a lot.",
  },
  {
    name: "Karthikeya",
    review:
      "From resume building to mock interviews, they cover everything. The environment is motivating, and the results really show.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomePage() {
  const handleScroll = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white text-center py-36 px-4 min-h-[600px] flex items-center justify-center rounded-br-[20px] rounded-bl-[20px]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/assets/background_video.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle Dim Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Glass Card Content */}
        <motion.div
          className="relative z-10 w-full max-w-2xl mx-auto px-4 py-7 md:px-8 md:py-14 bg-white/15 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Hero Icon/Accent Line */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-1 bg-yellow-400 rounded-full" />
          </div>
          {/* Main Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Where Dedication Builds Success
          </motion.h1>
          {/* Subheading */}
          <motion.p
            className="text-base md:text-lg mb-6 text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Equipping students and professionals with practical skills,
            interview confidence, and career-focused guidance.
          </motion.p>
          {/* Slogan */}
          <motion.p
            className="text-lg md:text-xl font-semibold mb-10 text-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Connecting Talent with Oppurtunity
          </motion.p>
          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-5 flex-wrap"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-xl font-semibold shadow-md transition"
              >
                Discover Courses
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3 rounded-xl font-semibold shadow-md transition"
              >
                Speak to a Mentor
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          className="absolute left-0 right-0 bottom-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button
            onClick={handleScroll}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 border border-white/30 hover:bg-white/20 transition"
          >
            <ChevronDown className="text-white w-7 h-7" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6" id="next-section">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* New Stats Design Right */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-1/2 w-full"
            variants={staggerContainer}
          >
            {[
              {
                icon: <GraduationCap className="w-10 h-10 text-white" />,
                bg: "bg-green-600",
                value: "250+",
                label: "Students Trained",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                bg: "bg-yellow-500",
                value: "100+",
                label: "Candidates Placed in MNCs",
              },
              {
                icon: <Users className="w-10 h-10 text-white" />,
                bg: "bg-blue-600",
                value: "15+",
                label: "Corporate Trainers",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className={`${stat.bg} p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center`}
                variants={fadeInUp}
              >
                <div className="mb-4 p-3 bg-white/20 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-white font-bold text-4xl mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content Left */}
          <motion.div className="text-left lg:w-1/2" variants={fadeInUp}>
            <p className="uppercase tracking-wide text-14 md:text-16 font-semibold text-indigo-600 mb-3">
              Who We Are
            </p>
            <h2 className="text-28 md:text-44 font-semibold mb-6 text-gray-900 leading-tight">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-16 md:text-18 text-gray-600 leading-relaxed mb-6">
              Varma Placement Services is a career-focused training and
              consultancy firm committed to closing the gap between academic
              learning and real-world industry demands. Guided by seasoned
              professionals with 10+ years of expertise, we prepare every
              learner to step confidently into the workforce.
            </p>
            <Link
              href="/services"
              className="inline-block text-16 md:text-18 border border-indigo-700 text-indigo-700 font-medium py-3 px-6 rounded-md transition hover:bg-indigo-700 hover:text-white"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-14 tracking-tight"
            variants={fadeInUp}
          >
            What We Offer
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Interview-Focused Training",
                desc: "Core tech stack—Python, Java, SQL, Linux, DBMS",
                icon: <School className="w-10 h-10 text-indigo-600" />,
                accent: "bg-indigo-100",
                accentBar:
                  "bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-500",
              },
              {
                title: "MNC Internships & Exposure",
                desc: "Hands-on experience from top companies",
                icon: <Building2 className="w-10 h-10 text-yellow-500" />,
                accent: "bg-yellow-100",
                accentBar:
                  "bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600",
              },
              {
                title: "Resume Tailoring & Mocks",
                desc: "ATS-optimized CVs + weekly practice",
                icon: <FileText className="w-10 h-10 text-green-600" />,
                accent: "bg-green-100",
                accentBar:
                  "bg-gradient-to-r from-green-400 via-cyan-300 to-green-700",
              },
              {
                title: "Placement Drives",
                desc: "Online and offline hiring events",
                icon: <Briefcase className="w-10 h-10 text-blue-600" />,
                accent: "bg-blue-100",
                accentBar:
                  "bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-700",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative group p-10 rounded-xl shadow-xl border border-neutral-200 bg-white transition 
                      hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* Circular icon with accent background */}
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full shadow ${item.accent} mb-5 border-4 border-white transition`}
                >
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-950 text-center group-hover:text-indigo-700 transition">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-blue-900/80 text-base md:text-lg font-medium text-center">
                  {item.desc}
                </p>
                {/* Colorful accent bar */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 rounded-full opacity-80 group-hover:opacity-100 mt-8 transition ${item.accentBar}`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className=" py-10 px-5 ">
        <motion.h2
          className="text-24 md:text-32 font-bold text-center "
          variants={fadeInUp}
        >
          Success Stories
        </motion.h2>

        <Testimonials stories_user={stories} />
      </section>

      <div className="px-5">
        <section className="bg-gradient-to-r from-[#0A3D3B] via-[#102A43] to-[#0A3D3B] text-white py-12 px-8 mx-auto my-12 rounded-3xl shadow-lg max-w-[1300px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug max-w-lg">
              🚀 Ready to start your <br className="block md:hidden" />
              <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent underline decoration-[#FFD700] decoration-4">
                career transformation
              </span>{" "}
              today?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black px-8 py-4 rounded-xl font-semibold text-lg md:text-xl hover:opacity-90 shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
