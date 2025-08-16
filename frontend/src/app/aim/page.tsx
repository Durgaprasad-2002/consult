"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Users,
  ShieldCheck,
  Rocket,
  Layers,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

/** ------------------ Shared Motion ------------------ */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

/** ------------------ Data ------------------ */
const coreValues = [
  {
    title: "Integrity",
    desc: "Honest, transparent guidance from training to placement. We deliver what we promise.",
    Icon: ShieldCheck,
  },
  {
    title: "Career-Oriented Training",
    desc: "Interview-based training and real projects in Python, Java, SQL, Linux, and DBMS.",
    Icon: Layers,
  },
  {
    title: "Industry Expertise",
    desc: "Mentors with 10+ years at top MNCs bring real-world insights and best practices.",
    Icon: Users,
  },
  {
    title: "Innovation & Adaptability",
    desc: "Continuously updated curriculum and tools aligned with today’s IT landscape.",
    Icon: RefreshCw,
  },
  {
    title: "End-to-End Support",
    desc: "ATS-ready resumes, weekly mocks, and placement drives — we’re with you till you’re placed.",
    Icon: LifeBuoy,
  },
  {
    title: "Outcome Focus",
    desc: "Practical, results-driven learning to convert talent into employable skill.",
    Icon: Rocket,
  },
];

const problems = [
  {
    title: "Lack of Real-World Preparation",
    description:
      "Students often miss hands-on interview and soft-skill practice that employers value.",
    good: false,
  },
  {
    title: "No Industry Exposure",
    description:
      "Fresh graduates struggle without experience in real tools and workflows.",
    good: false,
  },
  {
    title: "Weak Resumes",
    description:
      "Generic, non-targeted resumes reduce visibility and callbacks.",
    good: false,
  },
  {
    title: "We Have the Solution",
    description:
      "Practical training, tailored resumes, and expert mentorship to bridge the gap.",
    good: true,
  },
];

const reasons = [
  {
    title: "Role-Specific Technical Training",
    desc: "Train exactly for the job you want.",
  },
  {
    title: "Weekly Mock Interviews",
    desc: "Feedback from industry experts to build confidence.",
  },
  {
    title: "Tailored Resume & LinkedIn",
    desc: "ATS-friendly profile that stands out.",
  },
  {
    title: "Strong Placement Support",
    desc: "Referrals and guidance into top MNCs.",
  },
];

/** ------------------ Components ------------------ */

/** Diagonal background band */
function DiagonalBand({
  from = "from-blue-100",
  to = "to-yellow-100",
  className = "",
}: {
  from?: string;
  to?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -top-24 h-64 -z-10 overflow-hidden ${className}`}
    >
      <div
        className={`mx-[-10%] h-full transform -skew-y-6 bg-gradient-to-r ${from} ${to}`}
      />
    </div>
  );
}

/** Glass card */
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/60 shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

/** Mobile carousel (scroll-snap) */
function SnapCarousel({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2">
      {items.map((node, i) => (
        <div key={i} className="snap-start shrink-0 w-[85%]">
          {node}
        </div>
      ))}
    </div>
  );
}

/** ------------------ Page ------------------ */
export default function Aim() {
  const reduce = useReducedMotion();
  const heroMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    }),
    []
  );

  return (
    <main className="mx-auto max-w-7xl px-5 md:px-8 py-10 space-y-24">
      {/* ------------------ HERO ------------------ */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100">
        <DiagonalBand from="from-blue-100" to="to-indigo-100" />
        <div className="grid md:grid-cols-2 gap-10 items-center p-8 md:p-14">
          <motion.div
            {...heroMotion}
            className="text-center md:text-left space-y-6"
          >
            <h1
              className="text-blue-950 font-extrabold leading-tight"
              style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
            >
              Aim Higher.{" "}
              <span className="text-indigo-600">Achieve Faster.</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              We empower students and professionals through expert training,
              mentorship, and hands-on learning to build future-proof careers.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Link href="/services" aria-label="Go to Services">
                <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition">
                  Get Started
                </button>
              </Link>
              <Link href="/contact" aria-label="Contact us">
                <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow border border-indigo-200 hover:bg-indigo-50 transition">
                  Talk to Us
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { stat: "50+", label: "MNC Partners" },
                { stat: "10+ yrs", label: "Mentor Exp." },
                { stat: "300+", label: "Resumes Tailored" },
              ].map(({ stat, label }) => (
                <GlassCard key={label} className="p-4 text-center">
                  <div className="text-xl font-extrabold text-blue-950">
                    {stat}
                  </div>
                  <div className="text-xs text-gray-600">{label}</div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.95, rotate: -1.5 },
                  whileInView: { opacity: 1, scale: 1, rotate: 0 },
                  viewport: { once: true, amount: 0.3 },
                  transition: { duration: 0.6 },
                })}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-indigo-600" />
                  <h3 className="font-semibold text-blue-950">Job-Ready</h3>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  Role-specific learning paths aligned to hiring needs.
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-indigo-600" />
                  <h3 className="font-semibold text-blue-950">Mentorship</h3>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  1:1 guidance from seasoned professionals.
                </p>
              </GlassCard>
              <GlassCard className="p-6 col-span-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  <h3 className="font-semibold text-blue-950">
                    Placement Support
                  </h3>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  ATS resumes, mock interviews, referrals & drives.
                </p>
              </GlassCard>
            </div>
            {/* soft glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-200 to-yellow-200 blur-3xl opacity-50"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------ MISSION + VISION (overlapping cards) ------------------ */}
      <section className="relative">
        <div className="absolute inset-x-0 -top-10 -z-10 h-40 bg-gradient-to-r from-blue-100 to-yellow-100 opacity-60 blur-2xl" />
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <GlassCard className="p-8 md:col-span-1">
            <h2 className="text-2xl font-bold text-blue-950">Our Mission</h2>
            <p className="text-gray-700 mt-3">
              Bridge the gap between academics and industry with practical,
              job-ready programs and personal guidance.
            </p>
          </GlassCard>

          <div className="relative md:col-span-2">
            <div className="absolute -top-6 -left-6 -right-6 -bottom-6 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 to-yellow-50" />
            <GlassCard className="p-8 h-full">
              <h2 className="text-2xl font-bold text-blue-950">Our Vision</h2>
              <p className="text-gray-700 mt-3">
                Be a nationally recognized consultancy that turns talent into
                skilled professionals through consistent mentorship and
                result-driven learning.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ------------------ CORE VALUES (3-col grid) ------------------ */}
      <section>
        <motion.h2
          {...fade(0)}
          className="text-center text-3xl font-extrabold text-blue-950"
        >
          Core Values
        </motion.h2>

        {/* mobile carousel */}
        <SnapCarousel
          items={coreValues.map(({ title, desc, Icon }) => (
            <GlassCard key={title} className="p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-indigo-100">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">{title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        />

        {/* desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
          {coreValues.map(({ title, desc, Icon }, i) => (
            <motion.div key={title} {...fade(i * 0.05)}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-indigo-100">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-950">{title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------ PROBLEMS TIMELINE ------------------ */}
      <section>
        <motion.h2
          {...fade(0)}
          className="text-center text-3xl font-extrabold text-red-700"
        >
          Problems We Solve
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <div>
            <ol className="relative border-s border-red-200 ps-5 space-y-8">
              {problems.slice(0, 3).map((p, i) => (
                <li key={i}>
                  <span className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-8 ring-white shadow">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </span>
                  <h3 className="font-semibold text-red-700">{p.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{p.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <ol className="relative border-s border-green-200 ps-5 space-y-8">
              {problems.slice(3).map((p, i) => (
                <li key={i}>
                  <span className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-8 ring-white shadow">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </span>
                  <h3 className="font-semibold text-green-700">{p.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{p.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ------------------ WHY CHOOSE US (grid + mobile carousel) ------------------ */}
      <section>
        <motion.h2
          {...fade(0)}
          className="text-center text-3xl font-extrabold text-blue-950"
        >
          Why Choose Us
        </motion.h2>

        {/* mobile carousel */}
        <SnapCarousel
          items={reasons.map((r) => (
            <GlassCard key={r.title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-yellow-100">
                  <Users className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">{r.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{r.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        />

        {/* desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 mt-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} {...fade(i * 0.06)}>
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-yellow-100">
                    <Users className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-950">{r.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{r.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-700 p-10 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.25),transparent)]"
        />
        <h2 className="text-white text-2xl md:text-3xl font-extrabold">
          Ready to accelerate your career?
        </h2>
        <p className="text-indigo-100 mt-2 max-w-2xl mx-auto">
          Join our mentor-led programs, practice with weekly mocks, and get
          guided to the right opportunities.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <Link href="/services">
            <button className="px-6 py-3 rounded-full bg-white text-indigo-700 font-semibold shadow hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition">
              Explore Programs
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
