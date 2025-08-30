"use client";
import React, { useEffect, useRef, useState } from "react";
import Testimonials from "./(components)/Testimonails";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Users, GraduationCap } from "lucide-react";
import { School, Building2, FileText } from "lucide-react";
import Image from "next/image";

import { BookOpen, Hammer, Award, Briefcase } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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

function HeroSection({ handleScroll }: { handleScroll: () => void }) {
  const texts = ["Interview Training", "Internships", "Placement Support"];
  const [index, setIndex] = useState(0);

  // Auto rotate text every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative overflow-hidden text-white text-center py-28 px-4 min-h-[600px] h-[100vh] flex items-center justify-center translate-y-[-100px]">
      {/* Background Image */}
      <Image
        alt="hero-img"
        width={1980}
        height={1200}
        src="/assets/home-hero-ng.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 z-0" />

      {/* Floating Accent Text */}
      {/* <motion.span
        className="absolute top-16 left-6 text-5xl md:text-7xl font-bold text-white/5 select-none hidden md:block"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Careers
      </motion.span> */}

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto px-3 md:px-6 py-6 md:py-10 rounded-3xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Connecting Talent with Opportunity
        </motion.h1>

        {/* Rotating Text */}
        <div className="relative h-8 sm:h-10 overflow-hidden">
          {/* Rotating Text - centered below heading */}
          <div className="relative h-8 sm:h-10 flex justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="absolute text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-6 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Equipping students and professionals with practical skills, interview
          confidence, and career-focused guidance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-md md:rounded-xl font-semibold shadow-sm sm:shadow-md w-full sm:w-auto text-sm sm:text-base transition"
            >
              Contact Now
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md md:rounded-xl font-semibold shadow-sm sm:shadow-md w-full sm:w-auto text-sm sm:text-base transition"
            >
              Our Services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-0 right-0 bottom-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={handleScroll}
          className="relative flex flex-col items-center gap-2 text-white hover:opacity-80 transition"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="text-xs sm:text-sm tracking-widest uppercase opacity-70">
            Scroll
          </span>
        </button>
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  const handleScroll = () => {
    document
      .getElementById("next-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <HeroSection handleScroll={handleScroll} />

      {/* About Section */}
      <motion.section
        id="next-section"
        className="py-20 px-6 sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-1/2 w-full">
            {[
              {
                icon: <GraduationCap className="w-10 h-10 text-white" />,
                bg: "bg-green-600",
                value: "15k+",
                label: "Students Trained",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-white" />,
                bg: "bg-yellow-500",
                value: "10k+",
                label: "Candidates Placed in MNCs",
              },
              {
                icon: <Users className="w-10 h-10 text-white" />,
                bg: "bg-blue-600",
                value: "15+",
                label: "Corporate Trainers",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.bg} p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-3 p-3 bg-white/20 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-white font-bold text-3xl mb-1">
                  {stat.value}
                </div>
                <div className="text-white text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* About Text */}
          <div className="lg:w-1/2 text-left space-y-4">
            <p className="uppercase tracking-wide text-indigo-600 font-semibold text-sm md:text-base">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Varma Placement Services is a career-focused training and
              consultancy firm committed to closing the gap between academic
              learning and real-world industry demands. Guided by seasoned
              professionals with 10+ years of expertise, we prepare every
              learner to step confidently into the workforce.
            </p>
            <Link
              href="/services"
              className="inline-block border border-indigo-700 text-indigo-700 font-medium py-2 px-6 rounded-md transition hover:bg-indigo-700 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </motion.section>

      {/* What We Offer */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/20 rounded-full -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-yellow-100/20 rounded-full -z-10 blur-3xl"></div>

        {/* Section header */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="uppercase text-indigo-600 font-semibold mb-2 tracking-wider">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Structured programs designed to equip students and professionals
            with industry-ready skills and real-world exposure.
          </p>
        </div>

        {/* Cards with connecting line */}
        <div className="relative max-w-[1440px] mx-auto space-y-12">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-1 bg-gray-300/30 z-0"></div>

          {[
            {
              title: "Interview-Focused Training",
              desc: "Core tech stack — Python, Java, SQL, Linux, DBMS",
              icon: <School className="w-10 h-10 text-indigo-600" />,
            },
            {
              title: "MNC Internships & Exposure",
              desc: "Hands-on experience from top companies",
              icon: <Building2 className="w-10 h-10 text-yellow-600" />,
            },
            {
              title: "Resume Tailoring & Mocks",
              desc: "ATS-optimized CVs + weekly practice",
              icon: <FileText className="w-10 h-10 text-green-600" />,
            },
            {
              title: "Placement Drives",
              desc: "Online and offline hiring events",
              icon: <Briefcase className="w-10 h-10 text-blue-600" />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-0 rounded-2xl transition-all hover:scale-105 hover:shadow-xl ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } border border-gray-200 bg-white z-10`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
            >
              {/* Connector dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>

              {/* Icon */}
              <div className="flex-shrink-0 w-24 h-24 bg-white rounded-full shadow-lg md:shadow-none flex items-center justify-center transition-transform duration-500 hover:scale-110 md:hover:scale-100">
                {item.icon}
              </div>

              {/* Text */}
              <div className="text-center md:text-left max-w-md">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p className="uppercase text-indigo-600 font-semibold mb-2">
            Our Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-indigo-600">Varma Placements?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine expertise, hands-on learning, and personalized support to
            ensure each learner reaches their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1440px] mx-auto">
          {[
            {
              icon: <Award className="w-10 h-10 text-indigo-600" />,
              title: "Expert Mentorship",
              desc: "Guidance from professionals with 10+ years of real industry experience.",
            },
            {
              icon: <Hammer className="w-10 h-10 text-yellow-600" />,
              title: "Hands-On Learning",
              desc: "Practical projects and mock interviews to build job-ready confidence.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-green-600" />,
              title: "End-to-End Support",
              desc: "From resume tailoring to placement drives, we’re with you at every step.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-lg flex flex-col items-center text-center transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4 p-4 bg-white rounded-full shadow flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Training & Placement */}
      <motion.section
        className="relative py-20 px-6 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-100 rounded-full opacity-20 pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-yellow-100 rounded-full opacity-20 pointer-events-none -z-10"></div>

        <motion.div
          className="max-w-6xl mx-auto text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Training & Placements
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Structured programs designed to equip candidates with industry-ready
            skills and direct placement opportunities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image with slide-in animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="Training and Placement"
              src="/assets/home2.jpg"
              width={500}
              height={500}
              className="rounded-xl shadow-xl w-full object-cover max-h-[550px]"
            />
          </motion.div>

          {/* Text content with side animation */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg leading-relaxed">
              At <span className="font-semibold">Varma Placements</span>, we
              believe that the right guidance and preparation are the foundation
              of a successful career. Our Training and Placement division equips
              candidates with industry-relevant skills and connects them with
              top organizations.
            </p>

            <h5 className="text-lg sm:text-xl font-semibold mb-4">
              Our services include:
            </h5>

            {/* Feature Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Skill Development Programs",
                  desc: "Training in technical, analytical, and professional domains.",
                  color: "bg-indigo-50",
                },
                {
                  title: "Soft Skills & Interview Preparation",
                  desc: "Communication skills, aptitude training, and mock sessions.",
                  color: "bg-yellow-50",
                },
                {
                  title: "Placement Assistance",
                  desc: "Direct engagement with companies via drives & events.",
                  color: "bg-green-50",
                },
                {
                  title: "Career Guidance",
                  desc: "Mentoring to align strengths with opportunities.",
                  color: "bg-pink-50",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-xl shadow-md ${item.color} hover:shadow-xl transition cursor-default`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <span className="font-bold text-indigo-600">{i + 1}</span>
                  </div>
                  <div>
                    <h6 className="text-base sm:text-lg font-semibold text-gray-900">
                      {item.title}
                    </h6>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Through our structured approach, we ensure every candidate is
              well-prepared to meet industry expectations and achieve their
              career goals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <section className="py-16 px-5 max-w-[1440px] mx-auto">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Success Stories
        </motion.h2>
        <Testimonials stories_user={stories} />
      </section>

      {/* CTA */}
      <section className="px-5">
        <div className="bg-gradient-to-r from-[#0A3D3B] via-[#102A43] to-[#0A3D3B] text-white py-12 px-8 mx-auto my-12 rounded-3xl shadow-lg max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug max-w-lg">
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
    </main>
  );
}
