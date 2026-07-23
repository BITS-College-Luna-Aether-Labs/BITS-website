/** Undergraduate Programs — single program card (SE) with staggered entrance and CTA link */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const IMG = "/images/Academics-Undergraduate-Programs/";

const programs = [
  {
    title: "Software Engineering",
    eyebrow: "Undergraduate Program",
    description: "Pursue an undergraduate degree in software engineering if you want to design software systems, develop applications, and manage software development projects.",
    points: ["design software systems", "develop applications", "manage software development projects"],
    href: "/software-engineering",
    accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    icon: Code2,
    badge: "SE",
    image: `${IMG}Software%20Engineering.jpg`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={itemAnim}
      className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_60px_-28px_rgba(15,23,42,0.28)]"
    >
      <div className={`bg-gradient-to-br ${program.accent} p-6 sm:p-8`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-bits-green-dark uppercase">
              {program.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              {program.title}
            </h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--bits-surface)]/80 text-bits-green-dark shadow-sm">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/60 bg-[var(--bits-surface)]/75 p-5 backdrop-blur">
            <p className="max-w-xl text-sm leading-7 text-bits-text sm:text-base">
              {program.description}
            </p>

            <ul className="mt-5 space-y-3">
              {program.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-bits-text">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-bits-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={program.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="group relative min-h-[240px] overflow-hidden rounded-[2rem]">
            {program.image && (
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 backdrop-blur-sm">
                  BITS
                </span>
                <span className="rounded-full bg-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur-sm">
                  {program.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function UndergraduateProgramContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0)_30%,rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div variants={itemAnim} className="text-center">
              <p className="text-sm font-semibold tracking-[0.3em] text-bits-green-dark uppercase">
                Undergraduate Programs
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                Undergraduate Programs
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-bits-text sm:text-lg">
                A focused undergraduate pathway designed for students who want a
                practical, industry-oriented computing education.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {programs.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
