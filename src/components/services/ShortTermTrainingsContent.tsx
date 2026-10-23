/** Short-Term Trainings — beginner and advanced/specialized training cards */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Zap } from "lucide-react";

function IconFigma() {
  return (
    <svg viewBox="0 0 38 57" fill="none" className="h-6 w-6">
      <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M9.5 57A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57z" fill="#0ACF83"/>
      <path d="M19 0H9.5A9.5 9.5 0 0 0 9.5 19H19z" fill="#FF7262"/>
      <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19z" fill="#F24E1E"/>
      <path d="M28.5 19H19v19h9.5a9.5 9.5 0 0 0 0-19z" fill="#A259FF"/>
    </svg>
  );
}

function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="1.5"/>
      <path d="M12 2C12 2 8 7 8 12s4 10 4 10M12 2c0 0 4 5 4 10s-4 10-4 10M2 12h20" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="9" y="2" width="6" height="4" rx="1" fill="#059669"/>
      <rect x="2" y="18" width="6" height="4" rx="1" fill="#059669"/>
      <rect x="16" y="18" width="6" height="4" rx="1" fill="#059669"/>
      <path d="M12 6v4M12 10H5v4M12 10h7v4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconAnalytics() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M3 20h18M5 20V14m4 6V10m4 10V6m4 14v-8" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" fill="#7C3AED" opacity=".15"/>
      <circle cx="12" cy="12" r="3" fill="#7C3AED"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconAdvancedAnalytics() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M3 20h18M5 20V10m4 10V6m4 10V2m4 18v-6" stroke="#0891B2" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="19" cy="6" r="2" fill="#0891B2"/>
    </svg>
  );
}

function IconPython() {
  return (
    <svg viewBox="0 0 256 255" className="h-6 w-6">
      <defs>
        <linearGradient id="pyA" x1="12%" y1="12%" x2="88%" y2="88%">
          <stop offset="0" stopColor="#387EB8"/>
          <stop offset="1" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="pyB" x1="12%" y1="12%" x2="88%" y2="88%">
          <stop offset="0" stopColor="#FFE052"/>
          <stop offset="1" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path d="M126.9 0C62.4 0 66.3 27.3 66.3 27.3l.1 28.3h61.7v8.5H41.6S0 59.1 0 124.2s37.3 62.8 37.3 62.8h22.3v-30.2s-1.2-37.3 36.7-37.3h63.2s35.5.6 35.5-34.3V35.4S200.5 0 126.9 0zm-35 20.2a11.5 11.5 0 1 1 0 23 11.5 11.5 0 0 1 0-23z" fill="url(#pyA)"/>
      <path d="M129.1 254.8c64.5 0 60.6-27.3 60.6-27.3l-.1-28.3h-61.7v-8.5h86.5s41.6 5 41.6-60.1-37.3-62.8-37.3-62.8h-22.3v30.2s1.2 37.3-36.7 37.3H96.5s-35.5-.6-35.5 34.3v57.8s-5.4 35.4 68.1 35.4zm35-20.2a11.5 11.5 0 1 1 0-23 11.5 11.5 0 0 1 0 23z" fill="url(#pyB)"/>
    </svg>
  );
}

function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#16A34A" strokeWidth="1.5"/>
      <circle cx="12" cy="18" r="1" fill="#16A34A"/>
      <path d="M9 5h6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const beginnerTrainings = [
  { label: "Graphic design and digital content creation", icon: <IconFigma /> },
  { label: "Web Development", icon: <IconWeb /> },
  { label: "System and Network Administration", icon: <IconNetwork /> },
  { label: "Data Analytics Basics", icon: <IconAnalytics /> },
];

const advancedTrainings = [
  { label: "Practical and responsible use of AI", icon: <IconAI /> },
  { label: "Advanced Data Analytics", icon: <IconAdvancedAnalytics /> },
  { label: "Python Programming / Basics", icon: <IconPython /> },
  { label: "Python Programming / Advanced", icon: <IconPython /> },
  { label: "Mobile App Development", icon: <IconMobile /> },
];

const fadeUp = {
  hidden: { opacity: 1, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function TrainingItem({ label, icon, index }: { label: string; icon: React.ReactNode; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index * 0.06}
      className="group flex items-center gap-4 rounded-2xl border border-emerald-900/10 bg-[var(--bits-page)] px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-bits-green/30 hover:shadow-[0_8px_24px_rgba(16,24,40,0.09)] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-bits-green/30"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-gray-700">
        {icon}
      </span>
      <span className="text-sm font-medium leading-6 text-bits-text group-hover:text-bits-heading">
        {label}
      </span>
    </motion.div>
  );
}

export function ShortTermTrainingsContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)] dark:from-gray-900 dark:to-black">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl dark:bg-bits-green/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl dark:bg-bits-green-dark/10" />
        <div className="relative mx-auto max-w-site px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm dark:border-gray-700">
              <BookOpen className="h-4 w-4" />
              Services · Short-Term Training
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Short-Term Training
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-bits-text">
              Practical, focused programs designed to build real-world skills — from foundational tech to cutting-edge specializations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* Beginner card — title → description → image → items */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
          >
            {/* Title + description */}
            <div className="bg-gradient-to-br from-emerald-500/15 via-emerald-400/8 to-transparent px-8 pt-8 pb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-bits-green-dark shadow-sm dark:border-gray-700 dark:bg-gray-900/80">
                <BookOpen className="h-3.5 w-3.5" />
                Level 1
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Technical / Beginners Trainings
              </h2>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                Foundational programs for those starting their tech journey.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/About-Facilities/Computer%20Labs%201.jpg"
                alt="BITS College Computer Labs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-900/10 via-emerald-900/5 to-transparent dark:from-gray-700" />

            {/* Training items */}
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              {beginnerTrainings.map((item, index) => (
                <TrainingItem key={item.label} label={item.label} icon={item.icon} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Advanced card — title → description → image → items */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
          >
            {/* Title + description */}
            <div className="bg-gradient-to-br from-lime-500/15 via-lime-400/8 to-transparent px-8 pt-8 pb-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-bits-green-dark shadow-sm dark:border-gray-700 dark:bg-gray-900/80">
                <Zap className="h-3.5 w-3.5" />
                Level 2
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Advanced / Specialized Trainings
              </h2>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                In-depth programs for professionals looking to specialize.
              </p>
            </div>

            {/* Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/images/About-Facilities/Class%20Room%201.jpg"
                alt="BITS College Class Room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-emerald-900/10 via-emerald-900/5 to-transparent dark:from-gray-700" />

            {/* Training items */}
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              {advancedTrainings.map((item, index) => (
                <TrainingItem key={item.label} label={item.label} icon={item.icon} index={index} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
