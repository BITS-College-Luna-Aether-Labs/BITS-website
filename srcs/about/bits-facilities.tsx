"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  BusFront,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";

const menuGroups = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    items: ["Who We Are", "Facilities", "Partners and Clients"],
  },
  {
    label: "Academics",
    items: ["Faculty", "Undergraduate Programs", "Graduate Programs", "Research"],
  },
  {
    label: "Admissions",
    items: ["Undergraduate Admission", "Graduate Admission", "Scholarship & Aid"],
  },
  {
    label: "Services",
    items: ["Student Support", "Online Learning", "Library", "Professional Trainings"],
  },
  {
    label: "News & Events",
    href: "#news",
  },
];

const highlights = [
  {
    title: "Classrooms",
    text: "Flexible teaching rooms designed for lectures, discussions, and blended delivery.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1523230410928-7a1f4a6d3c6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computer Labs",
    text: "Dedicated labs with workstation density suitable for applied computing sessions.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "IT Infrastructure",
    text: "Campus connectivity, networked services, and infrastructure oriented toward digital learning.",
    icon: Wifi,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Library",
    text: "Reading and reference areas with print and digital study support.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "College Building",
    text: "A purpose-built academic environment with vertical circulation and accessible positioning.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Online Learning",
    text: "Remote access, self-paced study, and flexible delivery outside the physical campus.",
    icon: MonitorSmartphone,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { label: "Learning spaces", value: "6+" },
  { label: "Campus systems", value: "24/7" },
  { label: "Digital access", value: "High" },
  { label: "Student support", value: "Active" },
];

const footerLinks = ["Tuition", "Undergraduate Program Admission", "Graduate Program Admission", "Undergraduate Accreditation", "Graduate Accreditation"];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
              BITS College
            </p>
            <p className="text-sm text-slate-600">Facilities</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {menuGroups.map((item) => (
            <div key={item.label} className="group relative">
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">
                {item.label}
                {item.items ? <ChevronRight className="h-4 w-4 rotate-90 opacity-60" /> : null}
              </button>
              {item.items ? (
                <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl shadow-slate-900/10 transition group-hover:visible group-hover:opacity-100">
                  {item.items.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
        >
          Apply Now <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute inset-0 -z-0 opacity-70">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Facilities overview
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Facilities
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            BITS’s estimated cost of attendance is based on tuition fees and modest contribution to
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
                className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-3xl font-semibold text-emerald-700">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
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
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                alt="BITS facilities campus"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Classrooms",
                "Computer labs",
                "Online learning",
              ].map((label) => (
                <div key={label} className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-emerald-200 bg-white px-4 py-3 shadow-lg shadow-emerald-900/10 md:block">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Built for</p>
            <p className="mt-1 font-semibold text-slate-900">Focused academic delivery</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
      className={`grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-2 ${
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
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
          <Icon className="h-4 w-4" />
          {item.title}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{item.text}</p>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-4 w-4" />
          Modern learning support
        </div>
      </div>
    </motion.article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">BITS College</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
            from collecting . . . to connecting . . .
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Contact Info
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>info@bitscollege.edu.et</li>
            <li>+251-982-363636</li>
            <li>Yeka Sub-city, Woreda 05, next to Yeka Park</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-400">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Youtube</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Quick Link
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <li key={link} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-emerald-300" />
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        Copyright © 2026 BITS College
      </div>
    </footer>
  );
}

export default function BitsFacilitiesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" }}>
      <Header />
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Campus facilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Core learning infrastructure
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 md:flex">
            <Sparkles className="h-4 w-4 text-emerald-700" />
            Structured top-to-bottom like the source page
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <FacilityCard key={item.title} item={item} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section id="apply" className="border-y border-emerald-950/10 bg-emerald-50/70">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
              Application path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Lightweight, institutional, and motion-forward
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The layout mirrors the original content order and overall density, while the visual system uses
              softer spacing, animated entrances, and cleaner hierarchy.
            </p>
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 lg:mt-0"
          >
            Open application <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
