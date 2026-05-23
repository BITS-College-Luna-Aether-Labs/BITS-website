"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Cpu,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const highlights = [
  {
    title: "Classrooms",
    text: "Flexible teaching rooms designed for lectures, discussions, and blended delivery.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1523230410928-7a1f4a6d3c6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computer Labs",
    text: "Dedicated labs with workstation density suitable for applied computing sessions.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "IT Infrastructure",
    text: "Campus connectivity, networked services, and infrastructure oriented toward digital learning.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Library",
    text: "Reading and reference areas with print and digital study support.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "College Building",
    text: "A purpose-built academic environment with vertical circulation and accessible positioning.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Online Learning",
    text: "Remote access, self-paced study, and flexible delivery outside the physical campus.",
    icon: MonitorSmartphone,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { label: "Learning spaces", value: "6+" },
  { label: "Campus systems", value: "24/7" },
  { label: "Digital access", value: "High" },
  { label: "Student support", value: "Active" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: EASE_PREMIUM },
  }),
};

function FacilityCard({
  item,
  reverse = false,
  index,
}: {
  item: (typeof highlights)[number];
  reverse?: boolean;
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={0.08 * index}
      className={`grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] shadow-sm lg:grid-cols-2 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`${reverse ? "lg:[direction:ltr]" : ""} p-4 sm:p-6`}>
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src={item.image}
            alt={item.title}
            className="h-72 w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>

      <div className={`flex flex-col justify-center p-6 sm:p-8 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-bits-green-dark">
          <Icon className="h-4 w-4" />
          {item.title}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-bits-heading">{item.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-bits-text">{item.text}</p>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-bits-green-dark">
          <CheckCircle2 className="h-4 w-4" />
          Modern learning support
        </div>
      </div>
    </motion.article>
  );
}

export function FacilitiesContent() {
  return (
    <div className="bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)]">
        <div className="absolute inset-0 -z-0 opacity-70">
          <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
          <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-site gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Facilities overview
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Facilities
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and modest contribution to
              technology and other facilities that exist in the college. For more information on cost of
              attendance, you may visit the online application and select the program you would like to join.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.1 * idx}
                  className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)]/80 p-5 shadow-sm backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-bits-green">{stat.value}</p>
                  <p className="mt-2 text-sm text-bits-text">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] p-4 shadow-2xl shadow-slate-900/10">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                  alt="BITS facilities campus"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Classrooms", "Computer labs", "Online learning"].map((label) => (
                  <div key={label} className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-bits-green-dark">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-emerald-200 bg-[var(--bits-surface)] px-4 py-3 shadow-lg shadow-emerald-900/10 md:block">
              <p className="text-xs uppercase tracking-[0.3em] text-bits-green-dark">Built for</p>
              <p className="mt-1 font-semibold text-bits-heading">Focused academic delivery</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Campus facilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Core learning infrastructure
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-[var(--bits-surface-muted)] px-4 py-2 text-sm text-bits-text md:flex">
            <Sparkles className="h-4 w-4 text-bits-green" />
            Structured campus overview
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <FacilityCard key={item.title} item={item} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-950/10 bg-emerald-50/70">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Application path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Start your journey at BITS
            </h2>
            <p className="mt-4 text-base leading-7 text-bits-text">
              Explore our programs and take the first step toward a quality higher education experience
              with state-of-the-art facilities and dedicated faculty.
            </p>
          </div>
          <a
            href="https://applications.bitscollege.edu.et"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bits-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green-dark lg:mt-0"
          >
            Open application <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
