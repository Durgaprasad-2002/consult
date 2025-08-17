"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers,
  LayoutGrid,
  LineChart,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --------------------------- Config ---------------------------

const brand = {
  primary: "from-blue-950 via-blue-900 to-blue-800",
  accent: "from-yellow-400 to-yellow-300",
  glow: "bg-yellow-400/60",
};

const services = [
  {
    icon: Code2,
    title: "Technical Training",
    description:
      "Interview-focused tracks in Python, Java, SQL, Linux, and DBMS with real assignments.",
  },
  {
    icon: GraduationCap,
    title: "Internships & Projects",
    description:
      "Hands-on exposure through live, mentor-led projects mapped to job roles.",
  },
  {
    icon: Briefcase,
    title: "Corporate Upskilling",
    description:
      "Custom upskilling paths for teams with role-based competency matrices.",
  },
  {
    icon: Target,
    title: "Mock Interviews",
    description:
      "Weekly 1:1 and panel mocks with rubric-based scoring and feedback loops.",
  },
  {
    icon: Users,
    title: "Placement Support",
    description:
      "ATS-ready resumes, LinkedIn revamps, referrals and placement drives.",
  },
  {
    icon: Settings,
    title: "Custom Workshops",
    description:
      "Intensive bootcamps for colleges & enterprises on trending stacks and tools.",
  },
];

const marqueeItems = [
  { icon: BadgeCheck, label: "ATS Resume Build" },
  { icon: ShieldCheck, label: "Career Mentoring" },
  { icon: LineChart, label: "Skill Gap Analysis" },
  { icon: Layers, label: "Capstone Projects" },
  { icon: Activity, label: "Weekly Mocks" },
  { icon: LayoutGrid, label: "Role Paths" },
  { icon: Rocket, label: "Job Alerts" },
  { icon: Sparkles, label: "Portfolio Reviews" },
];

const whySteps = [
  {
    title: "Industry-Expert Mentors",
    text: "10+ years in top MNCs. Learn patterns, not just syntax.",
    icon: Users,
  },
  {
    title: "Hands-On, Job-Ready",
    text: "Build feature-complete modules aligned to real JD requirements.",
    icon: CheckCircle2,
  },
  {
    title: "Data-Driven Prep",
    text: "Rubric scores & analytics guide exactly what to fix next.",
    icon: LineChart,
  },
  {
    title: "End-to-End Support",
    text: "From skills → portfolio → interview → placement.",
    icon: ShieldCheck,
  },
];

// --------------------------- Motion ---------------------------

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
});

// --------------------------- UI Primitives ---------------------------

function IconBadge({
  icon: Icon,
  className = "",
}: {
  icon: any;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl p-3 shadow ring-1 ring-white/20 bg-white/10 backdrop-blur ${className}`}
      aria-hidden="true"
    >
      <Icon className="w-6 h-6 text-yellow-300" />
    </div>
  );
}

function GlassCard({
  icon: Icon,
  title,
  children,
  i,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
  i?: number;
}) {
  return (
    <motion.div
      {...scaleIn((i ?? 0) * 0.06)}
      className="group relative rounded-3xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/10 p-6 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="size-12 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-400/80 flex items-center justify-center shadow-md">
            <Icon className="w-6 h-6 text-blue-950" />
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-950">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 text-sm md:text-base">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}

// --------------------------- Sections ---------------------------

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-700"
        aria-hidden="true"
      />

      {/* blobs */}
      <div
        className="absolute -top-24 -left-20 h-[28rem] w-[28rem] rounded-full bg-yellow-400 blur-[120px] opacity-25"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 h-[26rem] w-[26rem] rounded-full bg-blue-600 blur-[120px] opacity-25"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/10 ring-1 ring-white/20 mb-5">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs md:text-sm text-blue-100">
              Future-proof your career
            </span>
          </div>

          {/* heading */}
          <h1 className="text-[clamp(28px,5.5vw,56px)] font-extrabold leading-tight">
            Services engineered for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              outcomes
            </span>
            , not just certificates.
          </h1>

          {/* description */}
          <p className="mt-4 text-blue-100 text-[clamp(14px,2.2vw,18px)] max-w-xl">
            Practical training, mentorship, and placement support — thoughtfully
            designed to take you from learner to professional.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="rounded-full px-6 py-3 bg-yellow-400 text-blue-950 font-semibold shadow hover:shadow-lg transition"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 ring-1 ring-white/40 text-white hover:bg-white/10 transition"
            >
              Talk to Us
            </Link>
          </div>

          {/* trust badge */}
          <div className="mt-6 flex items-center gap-3 text-blue-100">
            <ShieldCheck className="w-5 h-5" />
            <p className="text-sm">
              Trusted by students & teams across 50+ partner companies
            </p>
          </div>
        </motion.div>

        {/* illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
          aria-hidden="true"
        >
          <div className="absolute -inset-8 rounded-[32px] bg-white/10 blur-2xl" />
          <Image
            src="/assets/services-hero.webp"
            width={900}
            height={700}
            alt="Career growth illustration"
            className="relative z-10 w-full h-auto rounded-[28px] ring-1 ring-white/20"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20"
    >
      <motion.h2
        {...fadeUp(0)}
        className="text-center text-[clamp(22px,3.6vw,36px)] font-bold text-blue-950"
      >
        What We Do
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="text-center text-gray-600 mt-2 max-w-2xl mx-auto"
      >
        Modular offerings you can mix and match for students, professionals,
        colleges, and teams.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <GlassCard key={s.title} icon={s.icon} title={s.title} i={i}>
            {s.description}
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function MarqueeStrip() {
  return (
    <section className="relative py-10 md:py-14">
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent`}
        aria-hidden="true"
      />
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        {/* marquee track */}
        <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-4 px-6">
          {[...Array(2)].map((_, loop) => (
            <div className="flex gap-4" key={loop}>
              {marqueeItems.map(({ icon: Icon, label }) => (
                <div
                  key={`${label}-${loop}`}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm"
                >
                  <div className="size-8 rounded-xl bg-yellow-300/80 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-950" />
                  </div>
                  <span className="text-sm font-medium text-blue-950">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
      <motion.h2
        {...fadeUp(0)}
        className="text-center text-[clamp(22px,3.6vw,36px)] font-bold text-blue-950"
      >
        Why Choose Us
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="text-center text-gray-600 mt-2 max-w-2xl mx-auto"
      >
        Designed like a product, delivered like a partner.
      </motion.p>

      <div className="mt-10 space-y-10">
        {whySteps.map((step, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={step.title}
              {...fadeUp(0.1 + i * 0.05)}
              className={`grid gap-6 md:gap-10 md:grid-cols-[1fr,1fr] items-center ${
                isEven ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent blur-xl opacity-60" />
                <div className="relative rounded-3xl border bg-white p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-2xl bg-blue-950 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-yellow-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-950">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{step.text}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl ring-1 ring-gray-100 bg-gradient-to-br from-gray-50 to-white">
                <Image
                  src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`}
        aria-hidden="true"
      />
      <svg
        className="absolute -top-20 right-0 opacity-30"
        width="800"
        height="400"
        viewBox="0 0 800 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 200 C 150 100, 350 300, 500 200 S 800 300, 800 200 L 800 400 L 0 400 Z"
          className="fill-white/40"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-[clamp(24px,4vw,42px)] font-extrabold text-blue-950"
        >
          Let’s build your next career milestone.
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="mt-3 text-blue-950/80 max-w-2xl mx-auto"
        >
          Join our mentor-led programs and get the structure, feedback, and
          opportunities you need to move fast and confidently.
        </motion.p>
        <motion.div {...fadeUp(0.2)} className="mt-8 flex justify-center gap-3">
          <Link
            href="/apply"
            className="rounded-full px-6 py-3 bg-blue-950 text-white font-semibold shadow hover:shadow-lg transition"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-6 py-3 ring-2 ring-blue-950/20 text-blue-950 hover:bg-blue-950/5 transition"
          >
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// --------------------------- Page ---------------------------

export default function ServicesPremiumPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <ServicesGrid />
      <MarqueeStrip />
      <WhyChooseUs />
    </main>
  );
}
