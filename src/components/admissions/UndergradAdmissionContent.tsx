"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from "lucide-react";

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

export function UndergradAdmissionContent() {
  return (
    <div className="min-h-screen bg-[#f5f7f6] text-bits-heading">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.7),rgba(245,247,246,1))]" />
        <div className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] text-bits-green-dark uppercase shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Admissions
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-bits-text lg:text-lg">
              Structured entry pathways for Ethiopian and international applicants.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-[32px] border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-[0_20px_80px_rgba(9,75,44,0.08)] sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-3 py-1 text-xs font-semibold text-white">
                <FileText className="h-3.5 w-3.5" />
                Ethiopian Students
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                {page.intro}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-bits-text">
                The admission requirements for the undergraduate program are as follows:
              </p>

              <ul className="mt-6 space-y-4">
                {page.requirements.map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index + 1}
                    variants={fadeUp}
                    className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-4 text-bits-text"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <div className="grid gap-6">
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-slate-100 shadow-[0_22px_70px_rgba(9,75,44,0.14)]"
              >
                <div className="h-[280px] w-full bg-gradient-to-br from-bits-green-dark/20 via-emerald-100 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" />
                    Campus life
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-[30px] border border-emerald-900/10 bg-slate-100 shadow-[0_22px_70px_rgba(9,75,44,0.14)]"
              >
                <div className="h-[280px] w-full bg-gradient-to-br from-emerald-100 via-lime-50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent p-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
                    <Sparkles className="h-3.5 w-3.5" />
                    Learning spaces
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[32px] bg-bits-green-dark p-6 text-white shadow-[0_20px_80px_rgba(9,75,44,0.18)] sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                International Applicants
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
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
              className="grid gap-5 rounded-[32px] border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-[0_20px_80px_rgba(9,75,44,0.08)] sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bits-green-dark">
                  Need to know
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-bits-heading">
                  Admission at a glance
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                  <MapPin className="h-5 w-5 text-bits-green-dark" />
                  <p className="mt-3 text-sm font-semibold text-bits-heading">Location</p>
                  <p className="mt-1 text-sm leading-6 text-bits-text">Yeka Sub-city, Woreda 05</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                  <Phone className="h-5 w-5 text-bits-green-dark" />
                  <p className="mt-3 text-sm font-semibold text-bits-heading">Contact</p>
                  <p className="mt-1 text-sm leading-6 text-bits-text">+251-982-363636</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--bits-surface-muted)] p-4 ring-1 ring-slate-200">
                <Mail className="h-5 w-5 text-bits-green-dark" />
                <p className="mt-3 text-sm font-semibold text-bits-heading">Email</p>
                <p className="mt-1 text-sm leading-6 text-bits-text">info@bitscollege.edu.et</p>
              </div>
            </motion.aside>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://applications.bitscollege.edu.et"
              className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
