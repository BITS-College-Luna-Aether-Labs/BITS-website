/** Short-Term Trainings — beginner and advanced/specialized training cards */
"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap } from "lucide-react";

const beginnerTrainings = [
  { label: "Graphic design and digital content creation", icon: "🎨" },
  { label: "Web Development", icon: "🌐" },
  { label: "System and Network Administration", icon: "🖧" },
  { label: "Data Analytics Basics", icon: "📊" },
];

const advancedTrainings = [
  { label: "Practical and responsible use of AI", icon: "🤖" },
  { label: "Advanced Data Analytics", icon: "📈" },
  { label: "Python Programming / Basics", icon: "🐍" },
  { label: "Python Programming / Advanced", icon: "⚡" },
  { label: "Mobile App Development", icon: "📱" },
];

const fadeUp = {
  hidden: { opacity: 1, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function TrainingCard({ label, icon, index }: { label: string; icon: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index * 0.06}
      className="group flex items-center gap-4 rounded-2xl border border-emerald-900/10 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-bits-green/30 hover:shadow-[0_8px_24px_rgba(16,24,40,0.09)] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-bits-green/30"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl dark:bg-gray-800">
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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

          {/* Beginner card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
          >
            <div className="bg-gradient-to-br from-emerald-500/15 via-emerald-400/8 to-transparent px-8 py-7">
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
            <div className="h-px bg-gradient-to-r from-emerald-900/10 via-emerald-900/5 to-transparent dark:from-gray-700" />
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              {beginnerTrainings.map((item, index) => (
                <TrainingCard key={item.label} label={item.label} icon={item.icon} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Advanced card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
          >
            <div className="bg-gradient-to-br from-lime-500/15 via-lime-400/8 to-transparent px-8 py-7">
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
            <div className="h-px bg-gradient-to-r from-emerald-900/10 via-emerald-900/5 to-transparent dark:from-gray-700" />
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              {advancedTrainings.map((item, index) => (
                <TrainingCard key={item.label} label={item.label} icon={item.icon} index={index} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
