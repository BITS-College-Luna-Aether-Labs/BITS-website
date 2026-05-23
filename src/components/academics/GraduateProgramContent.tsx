"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CheckCircle2,
  CloudCog,
  Database,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const studyItems = [
  "Service Innovation and Design",
  "Systems Theory and Systems Thinking",
  "Enterprise Cloud Computing",
  "Cyber Security",
  "Information Technology Project Management",
  "Data Center Design and Management",
];

const requirements = [
  { title: "Courses", text: "Students must complete 27 credit hours of compulsory courses and 3 credit hours from electives, with a cumulative GPA of at least 3.0.", icon: BookOpen },
  { title: "Thesis", text: "Each student conducts a 6-credit research or industry project, produces a report, and defends the thesis publicly before examiners.", icon: GraduationCap },
];

const careers = [
  { title: "IT Project Manager", icon: BriefcaseBusiness },
  { title: "IT Service Manager", icon: CloudCog },
  { title: "Chief Technology Officer", icon: Building2 },
  { title: "IT Auditor", icon: ShieldCheck },
  { title: "Information Security Analyst", icon: Database },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fdfb_0%,var(--bits-page)_100%)]">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-lime-100 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
            <CalendarRange className="h-4 w-4" />
            Academic Programs
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
            Graduate Programs
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-bits-text sm:text-lg">
            The graduate program is organized to move from institutional framing
            into a focused academic pathway, with clear program overview,
            curriculum emphasis, graduation requirements, and career outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramOverview() {
  return (
    <section className="mx-auto max-w-site px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-6 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.08)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark">
            <TerminalSquare className="h-4 w-4" />
            Information Technology Management
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
            Overview
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-bits-text">
            This program is designed to produce graduates who have a broad and
            detailed knowledge in management of information technology services
            and governance.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {studyItems.map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[var(--bits-surface-muted)]/80 p-4 transition hover:-translate-y-0.5 hover:bg-emerald-50/60"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bits-green-dark text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-bits-heading">Study Focus</p>
                  <p className="mt-1 text-sm leading-6 text-bits-text">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://www.bitscollege.edu.et/information-technology-management/"
              className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[var(--bits-surface)] px-5 py-3 text-sm font-medium text-bits-text">
              <Sparkles className="h-4 w-4 text-bits-green" />
              Research-led curriculum
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-gradient-to-br from-bits-green-dark via-emerald-700 to-lime-700 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_45%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                Built for professionals
              </div>
              <h3 className="max-w-sm text-2xl font-semibold tracking-tight text-white">
                From collecting . . . to connecting . . .
              </h3>
              <p className="max-w-md text-sm leading-7 text-emerald-50/90">
                A refined academic presentation that preserves the original
                institutional language while improving motion, contrast, and
                visual hierarchy.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Professional cohort</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm font-medium">Governance and security</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-medium">Graduate-level rigor</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function RequirementsSection() {
  return (
    <section className="mx-auto max-w-site px-4 py-2 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] p-6 shadow-[0_20px_60px_rgba(16,24,40,0.05)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-bits-heading">
            Graduation Requirements
          </h2>
          <div className="mt-6 space-y-4">
            {requirements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-[var(--bits-surface-muted)]/70 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bits-green-dark text-white shadow-lg shadow-emerald-800/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-bits-heading">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-bits-text">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-emerald-900/10 bg-emerald-50 p-6 shadow-[0_20px_60px_rgba(16,24,40,0.05)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-bits-heading">
            Career Paths
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-bits-text">
            Graduates are prepared for roles that sit at the intersection of
            management, technology, and governance.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {careers.map((career, index) => {
              const Icon = career.icon;
              return (
                <motion.div
                  key={career.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bits-green-dark text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-bits-heading">{career.title}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-[var(--bits-surface)] p-5 text-sm leading-7 text-bits-text shadow-sm">
            The emphasis remains on service delivery, security, enterprise
            systems, and informed decision-making across IT operations.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GraduateProgramContent() {
  return (
    <div className="min-h-screen bg-[#f6fbf9] text-bits-heading">
      <Hero />
      <ProgramOverview />
      <RequirementsSection />
    </div>
  );
}
