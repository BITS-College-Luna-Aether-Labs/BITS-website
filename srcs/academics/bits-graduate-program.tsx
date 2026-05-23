"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CheckCircle2,
  ChevronRight,
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
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const menuGroups = [
  {
    title: "About",
    items: ["Who We Are", "Facilities", "Partners and Clients"],
  },
  {
    title: "Academics",
    items: ["Faculty", "Undergraduate Programs", "Graduate Programs", "Research"],
  },
  {
    title: "Admissions",
    items: ["Undergraduate Admission", "Graduate Admission", "Scholarship & Aid"],
  },
  {
    title: "Services",
    items: ["Student Support", "Online Learning", "Library", "Professional Trainings"],
  },
];

const studyItems = [
  "Service Innovation and Design",
  "Systems Theory and Systems Thinking",
  "Enterprise Cloud Computing",
  "Cyber Security",
  "Information Technology Project Management",
  "Data Center Design and Management",
];

const requirements = [
  {
    title: "Courses",
    text: "Students must complete 27 credit hours of compulsory courses and 3 credit hours from electives, with a cumulative GPA of at least 3.0.",
    icon: BookOpen,
  },
  {
    title: "Thesis",
    text: "Each student conducts a 6-credit research or industry project, produces a report, and defends the thesis publicly before examiners.",
    icon: GraduationCap,
  },
];

const careers = [
  {
    title: "IT Project Manager",
    icon: BriefcaseBusiness,
  },
  {
    title: "IT Service Manager",
    icon: CloudCog,
  },
  {
    title: "Chief Technology Officer",
    icon: Building2,
  },
  {
    title: "IT Auditor",
    icon: ShieldCheck,
  },
  {
    title: "Information Security Analyst",
    icon: Database,
  },
];

function TopNav() {
  return (
    <header className="border-b border-emerald-900/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-lg shadow-emerald-800/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-800">
              BITS COLLEGE
            </p>
            <p className="text-xs text-slate-500">Graduate Program</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {menuGroups.map((group) => (
            <div key={group.title} className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-emerald-800">
                {group.title}
                <ChevronRight className="h-4 w-4 rotate-90 opacity-70" />
              </button>
            </div>
          ))}
          <Link
            href="https://applications.bitscollege.edu.et"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-emerald-900"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fdfb_0%,#ffffff_100%)]">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-lime-100 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm">
            <CalendarRange className="h-4 w-4" />
            Academic Programs
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Graduate Programs
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The graduate program is organized to move from institutional framing
            into a focused academic pathway, with clear program overview,
            curriculum emphasis, graduation requirements, and career outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramCard() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-6 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-[0_20px_80px_rgba(16,24,40,0.08)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900">
            <TerminalSquare className="h-4 w-4" />
            Information Technology Management
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Overview
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
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
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-emerald-50/60"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Study Focus</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://www.bitscollege.edu.et/information-technology-management/"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-800/20 transition hover:-translate-y-0.5 hover:bg-emerald-900"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              Research-led curriculum
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-gradient-to-br from-emerald-900 via-emerald-800 to-lime-700 p-6 sm:p-8">
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
    <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(16,24,40,0.05)] sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
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
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-lg shadow-emerald-800/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Career Paths
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
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
                  className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    {career.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
            The emphasis remains on service delivery, security, enterprise
            systems, and informed decision-making across IT operations.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-emerald-900/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white">
                BITS COLLEGE
              </p>
              <p className="text-xs text-slate-400">Graduate Program</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            From collecting . . . to connecting . . . a refined presentation of
            the graduate program with the same institutional structure and
            improved UI treatment.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contact Info
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>info@bitscollege.edu.et</li>
            <li>+251-982-363636</li>
            <li>Yeka Sub-city, Woreda 05, next to Yeka Park</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Quick Link
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li>Tuition</li>
            <li>Undergraduate Program Admission</li>
            <li>Graduate Program Admission</li>
            <li>Undergraduate Accreditation</li>
            <li>Graduate Accreditation</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        Copyright © 2026 BITS College
      </div>
    </footer>
  );
}

export default function GraduateProgramPage() {
  return (
    <main className="min-h-screen bg-[#f6fbf9] text-slate-900">
      <TopNav />
      <Hero />
      <ProgramCard />
      <RequirementsSection />
      <Footer />
    </main>
  );
}
