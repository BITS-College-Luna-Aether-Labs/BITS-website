"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Menu,
  MonitorSmartphone,
  ShieldCheck,
  Code2,
  Wifi,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const programs = [
  {
    title: "Software Engineering",
    eyebrow: "Undergraduate Program",
    description:
      "Pursue an undergraduate degree in software engineering if you want to design software systems, develop applications, and manage software development projects.",
    points: [
      "design software systems",
      "develop applications",
      "manage software development projects",
    ],
    href: "https://www.bitscollege.edu.et/software-engineering/",
    accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    icon: Code2,
    badge: "SE",
  },
  {
    title: "IT and Systems",
    eyebrow: "Undergraduate Program",
    description:
      "Pursue an undergraduate degree in information technology and systems if you want to be involved in network administration, database administration, and IT security and software application support.",
    points: [
      "network administration",
      "database administration",
      "IT security and software application support",
    ],
    href: "https://www.bitscollege.edu.et/information-technology-and-systems/",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
    icon: MonitorSmartphone,
    badge: "ITS",
  },
];

const navGroups = [
  { label: "Home", href: "#" },
  {
    label: "About",
    items: [
      { label: "Who We Are", href: "#" },
      { label: "Facilities", href: "#" },
      { label: "Partners and Clients", href: "#" },
    ],
  },
  {
    label: "Academics",
    items: [
      { label: "Faculty", href: "#" },
      { label: "Undergraduate Programs", href: "#" },
      { label: "Graduate Programs", href: "#" },
      { label: "Research", href: "#" },
    ],
  },
  {
    label: "Admissions",
    items: [
      { label: "Undergraduate Admission", href: "#" },
      { label: "Graduate Admission", href: "#" },
      { label: "Scholarship & Aid", href: "#" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Student Support", href: "#" },
      { label: "Online Learning", href: "#" },
      { label: "Library", href: "#" },
      { label: "Professional Trainings", href: "#" },
    ],
  },
  { label: "News & Events", href: "#" },
];

const footerLinks = [
  "Tuition",
  "Undergraduate Program Admission",
  "Graduate Program Admission",
  "Undergraduate Accreditation",
  "Graduate Accreditation",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-700/20">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.18em] text-emerald-800 uppercase">
              BITS College
            </p>
            <p className="text-xs text-slate-500">Undergraduate Program</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navGroups.map((group) =>
            "items" in group ? (
              <div key={group.label} className="group relative">
                <button className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">
                  {group.label}
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-2xl border border-emerald-900/10 bg-white p-2 opacity-0 shadow-xl shadow-slate-900/5 transition duration-200 group-hover:visible group-hover:opacity-100">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={group.label}
                href={group.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                {group.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#"
            className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            Apply Now
          </Link>
        </div>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.24em] text-emerald-300 uppercase">
            from collecting . . . to connecting . . .
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-emerald-300" />
              <span>info@bitscollege.edu.et</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-emerald-300" />
              <span>+251-982-363636</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-300" />
              <span>Yeka Sub-city, Woreda 05, next to Yeka Park</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
            Quick Link
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link key={link} href="#" className="transition hover:text-emerald-200">
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-emerald-300 uppercase">
            Follow
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        Copyright © 2026 BITS College
      </div>
    </footer>
  );
}

function ProgramCard({
  program,
}: {
  program: (typeof programs)[number];
}) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={item}
      className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.28)]"
    >
      <div className={`bg-gradient-to-br ${program.accent} p-6 sm:p-8`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-emerald-700 uppercase">
              {program.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {program.title}
            </h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-emerald-800 shadow-sm">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/60 bg-white/75 p-5 backdrop-blur">
            <p className="max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
              {program.description}
            </p>

            <ul className="mt-5 space-y-3">
              {program.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={program.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-white/60 bg-slate-950/90 p-5 text-white shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.34),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.22),transparent_35%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-emerald-200">
                  BITS
                </span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {program.badge}
                </span>
              </div>

              <div className="space-y-4">
                <div className="h-2 w-24 rounded-full bg-emerald-400/70" />
                <div className="h-2 w-40 rounded-full bg-white/20" />
                <div className="h-2 w-32 rounded-full bg-white/15" />
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((pill) => (
                    <div
                      key={pill}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs text-slate-300"
                    >
                      <div className="mx-auto h-8 w-8 rounded-xl bg-white/10" />
                      <div className="mt-2 h-2 rounded-full bg-white/15" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Academic Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function UndergraduateProgramPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f6] text-slate-900">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0)_30%,rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div variants={item} className="text-center">
              <p className="text-sm font-semibold tracking-[0.3em] text-emerald-700 uppercase">
                Undergraduate Programs
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Undergraduate Programs
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Two focused undergraduate pathways designed for students who want a
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

      <Footer />
    </main>
  );
}
