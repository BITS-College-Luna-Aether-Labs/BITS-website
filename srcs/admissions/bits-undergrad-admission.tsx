"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type SectionCardProps = {
  title: string;
  description: React.ReactNode;
  accent: string;
  icon: React.ElementType;
  bullets?: string[];
};

const page = {
  title: "Undergraduate Admission",
  intro: "Admission to the Undergraduate programs for Ethiopian students",
  requirements: [
    "Successful completion of four years of secondary education.",
    "Obtaining the necessary pass mark in the national exam.",
    "Obtaining a pass mark in the College Entrance Examination.",
  ],
  foreignTitle: "Admission for Foreign Students",
  foreignBody:
    "Admission of foreign students is as per respective admission requirements taking into account the equivalence established by the National Higher Education Relevance and Quality Assurance Agency.",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SectionCard({
  title,
  description,
  accent,
  icon: Icon,
  bullets,
}: SectionCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white/80 p-6 shadow-[0_18px_60px_rgba(9,75,44,0.08)] backdrop-blur-sm"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 ${accent}`} />
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
          <Icon className="h-7 w-7" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            {title}
          </h3>
          <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-600">
            {typeof description === "string" ? <p>{description}</p> : description}
          </div>
          {bullets && bullets.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function ImagePanel({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-slate-100 shadow-[0_22px_70px_rgba(9,75,44,0.14)]"
    >
      <img
        src={src}
        alt={alt}
        className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[340px]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent p-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          {label}
        </span>
      </div>
    </motion.div>
  );
}

export default function UndergraduateAdmissionPage() {
  return (
    <div className="min-h-screen bg-[#f5f7f6] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/20">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-emerald-800 uppercase">
                BITS College
              </div>
              <div className="text-xs text-slate-500">School of Systems and Technology</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="/" className="transition hover:text-emerald-700">Home</a>
            <a href="/who-we-are" className="transition hover:text-emerald-700">About</a>
            <a href="/undergraduate-program" className="transition hover:text-emerald-700">Academics</a>
            <a href="/undergrad-admission" className="text-emerald-700">Admissions</a>
            <a href="/research" className="transition hover:text-emerald-700">Research</a>
          </nav>

          <a
            href="https://applications.bitscollege.edu.et"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(245,247,246,1))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-emerald-800 uppercase shadow-sm">
                <GraduationCap className="h-4 w-4" />
                Admissions
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                {page.title}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Structured entry pathways for Ethiopian and international applicants.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.section
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="rounded-[32px] border border-emerald-900/10 bg-white/85 p-6 shadow-[0_20px_80px_rgba(9,75,44,0.08)] backdrop-blur-sm md:p-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  <FileText className="h-3.5 w-3.5" />
                  Ethiopian Students
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {page.intro}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
                  The admission requirements for the undergraduate program are as follows:
                </p>

                <ul className="mt-6 space-y-4">
                  {page.requirements.map((item, index) => (
                    <motion.li
                      key={item}
                      custom={index + 1}
                      variants={fadeUp}
                      className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-4 text-slate-700"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="leading-7">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>

              <div className="grid gap-6">
                <ImagePanel
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt="Students collaborating in an academic setting"
                  label="Campus life"
                />
                <ImagePanel
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
                  alt="Learning environment and study space"
                  label="Learning spaces"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[32px] border border-emerald-900/10 bg-[#0b3d2b] p-6 text-white shadow-[0_20px_80px_rgba(9,75,44,0.18)] md:p-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  International Applicants
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  {page.foreignTitle}
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-emerald-50/90">
                  {page.foreignBody}
                </p>
              </motion.section>

              <motion.aside
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid gap-5 rounded-[32px] border border-emerald-900/10 bg-white/80 p-6 shadow-[0_20px_80px_rgba(9,75,44,0.08)] backdrop-blur-sm md:p-8"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    Need to know
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    Admission at a glance
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                    <MapPin className="h-5 w-5 text-emerald-700" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">Location</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Yeka Sub-city, Woreda 05</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                    <Phone className="h-5 w-5 text-emerald-700" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">Contact</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">+251-982-363636</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <Mail className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">Email</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">info@bitscollege.edu.et</p>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 bg-[#f3f5f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-slate-900">
              BITS College
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              from collecting . . . to connecting . . .
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] text-emerald-800 uppercase">
              Contact Info
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>info@bitscollege.edu.et</li>
              <li>+251-982-363636</li>
              <li>Yeka Sub-city, Woreda 05, next to Yeka Park</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.18em] text-emerald-800 uppercase">
              Quick Link
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="/tuition" className="hover:text-emerald-700">Tuition</a></li>
              <li><a href="/undergraduate-program" className="hover:text-emerald-700">Undergraduate Program Admission</a></li>
              <li><a href="/graduate-program" className="hover:text-emerald-700">Graduate Program Admission</a></li>
              <li><a href="/undergraduate-accreditation" className="hover:text-emerald-700">Undergraduate Accreditation</a></li>
              <li><a href="/graduate-accreditation" className="hover:text-emerald-700">Graduate Accreditation</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-950/10 py-5 text-center text-sm text-slate-500">
          Copyright © 2026 BITS College
        </div>
      </footer>
    </div>
  );
}
