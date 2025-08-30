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
  "/assets/companys/Accenture.png",
  "/assets/companys/capgemini.png",
  "/assets/companys/CGI.png",
  "/assets/companys/cognizant.jpg",
  "/assets/companys/concentrix.png",
  "/assets/companys/genpact.png",
  "/assets/companys/IBM.webp",
  "/assets/companys/Infosys.png",
  "/assets/companys/Jp_morgan.png",
  "/assets/companys/oracle.png",
  "/assets/companys/Persistent.png",
  "/assets/companys/Quess.png",
  "/assets/companys/Tech_Mahindra.png",
  "/assets/companys/Ust_global.jpg",
  "/assets/companys/virtusa.png",
  "/assets/companys/wipro.webp",
  "/assets/companys/Coforge.png",
  "/assets/companys/deloitte.png",
];

const values = [
  {
    title: "Excellence in Training",
    icon: Award,
    desc: "Hands-on, high-quality learning delivered by seasoned industry experts.",
    color: "bg-blue-100 text-[#0A3D3B]",
  },
  {
    title: "Commitment to Success",
    icon: Target,
    desc: "Ongoing mentorship and support to ensure every learner achieves their goals.",
    color: "bg-yellow-100 text-[#B8860B]",
  },
  {
    title: "Ethical Career Growth",
    icon: Handshake,
    desc: "Transparency and integrity guide every step of your professional journey.",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Industry-Relevant Skills",
    icon: Hammer,
    desc: "A curriculum designed to meet current market demands and ensure job readiness.",
    color: "bg-blue-100 text-[#102A43]",
  },
];

const steps = [
  {
    title: "Personalized Counseling",
    icon: MessageSquare,
    description:
      "We take the time to understand your career goals and craft a clear, actionable roadmap.",
  },
  {
    title: "Skill-Focused Training",
    icon: BookOpen,
    description:
      "Enhance technical and soft skills specifically aligned with your target role.",
  },
  {
    title: "Mock Interviews & Resume",
    icon: CheckCircle,
    description:
      "Experience realistic interview simulations and build polished, market-ready resumes.",
  },
  {
    title: "Placement Support",
    icon: Briefcase,
    description:
      "Get connected with recruiters and receive continuous assistance to land your ideal job.",
  },
];

const stats = [
  { icon: Users, number: "10k+", label: "Students Placed" },
  { icon: GraduationCap, number: "15+", label: "Expert Trainers" },
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
      <section className="bg-[#0A3D3B] text-white py-16 ">
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
      <section className="py-16 px-6 bg-gray-50 rounded-t-2xl max-w-[1440px] mx-auto">
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
      <section className="relative   py-20 overflow-hidden">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Trusted Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border bg-white border-gray-100">
            {companys.map((company: any, ind: number) => (
              <div
                key={ind}
                className="border border-gray-100 cursor-pointer flex justify-center items-center p-6 transition-transform duration-300"
              >
                <Image
                  src={company}
                  alt="company"
                  width={120}
                  height={40}
                  className="w-auto h-[30px] object-contain filter transition duration-300 bg-white"
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
            Join Our WhatsApp Community{" "}
          </h3>
          <p className="text-blue-100 text-lg mb-10">
            At Varma Placements, we are committed to creating a strong network
            that connects aspiring candidates with the right opportunities. To
            enhance communication and provide timely updates, we have
            established a dedicated WhatsApp Community.
          </p>
          <Link
            href="https://whatsapp.com/channel/0029Vb7LQagG8l5H5IPPzs1u"
            target="new"
          >
            <button className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition transform hover:scale-105">
              Join the Community Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
