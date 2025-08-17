"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  MessageSquare,
  BookOpen,
  Briefcase,
  Users,
  GraduationCap,
  Star,
  Award,
  Target,
  Hammer,
  Handshake,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const companys = [
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
  "https://www.opentext.com/assets/images/partners/accenture-logo-416x274.png",
];

const values = [
  {
    title: "Excellence in Training",
    icon: Award,
    desc: "High-quality, hands-on training by industry experts.",
    color: "bg-blue-100 text-[#0A3D3B]",
  },
  {
    title: "Commitment to Success",
    icon: Target,
    desc: "Mentorship & continuous support for every learner.",
    color: "bg-yellow-100 text-[#B8860B]",
  },
  {
    title: "Ethical Career Growth",
    icon: Handshake,
    desc: "Transparency & integrity in every career step.",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Industry-Relevant Skills",
    icon: Hammer,
    desc: "Market-aligned curriculum for job readiness.",
    color: "bg-blue-100 text-[#102A43]",
  },
];

const steps = [
  {
    title: "Personalized Counseling",
    icon: MessageSquare,
    description: "We understand your goals and guide your path.",
  },
  {
    title: "Skill-Focused Training",
    icon: BookOpen,
    description: "Technical & soft skills tailored to your role.",
  },
  {
    title: "Mock Interviews & Resume Prep",
    icon: CheckCircle,
    description: "Simulated interviews & market-ready resumes.",
  },
  {
    title: "Placement Support",
    icon: Briefcase,
    description: "Connections with recruiters & job assistance.",
  },
];

const stats = [
  { icon: Users, number: "1000+", label: "Students Placed" },
  { icon: GraduationCap, number: "20+", label: "Expert Trainers" },
  { icon: Briefcase, number: "50+", label: "Hiring Partners" },
  { icon: Star, number: "100%", label: "Career Support" },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#0A3D3B] to-[#102A43] text-white py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                Careers
              </span>
              , Shaping{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                Futures
              </span>
            </h1>
            <p className="mt-4 text-blue-100 text-lg">
              At Varma Placements Services, we transform talent into
              industry-ready professionals with expert guidance and ethical
              values.
            </p>
            <Link href="/services">
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-semibold rounded-full hover:opacity-90 transition">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Career Growth"
              width={500}
              height={500}
              className="mx-auto drop-shadow-lg rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - BIG NUMBERS */}
      <section className="bg-[#0A3D3B] text-white py-16 rounded-b-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4">
                <Icon className="w-8 h-8 mx-auto mb-3 text-[#FFD700]" />
                <p className="text-3xl font-bold">{s.number}</p>
                <p className="text-blue-100 text-sm">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">How We Work</h2>
        <div className="w-12 h-1 bg-[#FFD700] mx-auto mb-12 rounded-full"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-blue-100 z-0"></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative z-10 bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/4 h-full"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-blue-100 text-[#0A3D3B] rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-6 bg-gray-50 rounded-t-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Our Core Values</h2>
        <div className="w-12 h-1 bg-[#FFD700] mx-auto mb-10 rounded-full"></div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] bg-white shadow-lg rounded-xl p-6 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${val.color} mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{val.title}</h3>
                <p className="text-gray-600 text-sm">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="relative bg-[#0A3D3B] text-white py-20 overflow-hidden">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border border-gray-600">
            {companys.map((company: any, ind: number) => (
              <div
                key={ind}
                className="border border-gray-600 cursor-pointer flex justify-center items-center p-6 transition-transform duration-300 hover:scale-105 hover:bg-[#0A3D3B]/40"
              >
                <Image
                  src={company}
                  alt="company"
                  width={120}
                  height={60}
                  className="w-auto h-[50px] object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[#0A3D3B] text-white py-20 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#4FC3F7] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Shape Your{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
              Future
            </span>{" "}
            Today
          </h3>
          <p className="text-blue-100 text-lg mb-10">
            Join hands with us and take the leap toward career success. Learn
            from experts, build real skills, and get industry-ready.
          </p>
          <Link href="/services">
            <button className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition transform hover:scale-105">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
