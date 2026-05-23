"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Users,
  Sparkles,
} from "lucide-react";

const requirements = [
  "A first degree in fields related to IT (Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning) or",
  "A first degree in any field of study with a minor in Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning.",
  "To secure the minimum mark in the college Entrance Exam result.",
];

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

const featureCards = [
  { title: "Academic Readiness", text: "IT-related foundation", icon: BookOpen },
  { title: "Cohort Selective", text: "Entrance exam required", icon: Users },
  { title: "Accredited Path", text: "Recognized institutions", icon: ShieldCheck },
];

export function GraduateAdmissionContent() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-bits-heading">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.07),transparent_35%),radial-gradient(circle_at_top_right,rgba(107,114,128,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-7">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm"
              >
                <Sparkles className="h-4 w-4" />
                Graduate Admission
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                  Admission to the Graduate Program
                </h1>
                <p className="max-w-2xl text-base leading-8 text-bits-text sm:text-lg">
                  The graduate programs are intended for candidates with an undergraduate degree or a postgraduate
                  diploma in IT related fields.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-3">
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="rounded-3xl border border-emerald-100 bg-[var(--bits-surface)] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark/10 text-bits-green-dark ring-1 ring-emerald-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-bits-heading">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-bits-text">{card.text}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  href="https://applications.bitscollege.edu.et"
                  className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-bits-green"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#requirements"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-bits-heading transition hover:border-emerald-200 hover:text-bits-green-dark"
                >
                  View Requirements
                </a>
              </motion.div>
            </div>

            <div className="grid gap-5">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(107,114,128,0.10),transparent_45%)]" />
                <div className="relative flex aspect-[16/11] items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-bits-green-dark/10 text-bits-green-dark transition-transform duration-300 group-hover:scale-110">
                      <GraduationCap className="h-10 w-10" />
                    </div>
                    <p className="text-sm font-medium tracking-[0.32em] text-bits-text">Graduate Studies</p>
                    <p className="mt-2 text-lg font-semibold text-bits-heading">Advance your career</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(107,114,128,0.10),transparent_45%)]" />
                <div className="relative flex aspect-[16/11] items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-bits-green-dark/10 text-bits-green-dark transition-transform duration-300 group-hover:scale-110">
                      <BookOpen className="h-10 w-10" />
                    </div>
                    <p className="text-sm font-medium tracking-[0.32em] text-bits-text">Research</p>
                    <p className="mt-2 text-lg font-semibold text-bits-heading">Research-led curriculum</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className="mx-auto max-w-site px-4 pb-14 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-emerald-100 bg-[var(--bits-surface)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark/10 text-bits-green-dark ring-1 ring-emerald-100">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-bits-heading">Admission Requirements</h2>
              <p className="text-sm text-bits-text">Prerequisites for graduate program admission.</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-8 text-bits-text">
              In particular, the following requirements must be fulfilled.
            </p>

            <ul className="grid gap-4">
              {requirements.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-[var(--bits-surface-muted)] p-4 text-sm leading-7 text-bits-text"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-emerald-100 bg-white/70">
        <div className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark text-white shadow-lg shadow-emerald-600/20">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bits-green-dark">BITS College</p>
                  <p className="text-xs text-bits-text">from collecting . . . to connecting . . .</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-bits-heading">Contact Info</h3>
              <ul className="space-y-3 text-sm text-bits-text">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-bits-green-dark" /> info@bitscollege.edu.et
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-bits-green-dark" /> +251-982-363636
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-bits-green-dark" />
                  <span>Yeka Sub-city, Woreda 05, next to Yeka Park</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-bits-heading">Quick Link</h3>
              <ul className="space-y-3 text-sm text-bits-text">
                <li><Link href="/tuition" className="transition hover:text-bits-green-dark">Tuition</Link></li>
                <li><Link href="/undergraduate-program" className="transition hover:text-bits-green-dark">Undergraduate Program Admission</Link></li>
                <li><Link href="/graduate-program" className="transition hover:text-bits-green-dark">Graduate Program Admission</Link></li>
                <li><Link href="/undergraduate-accreditation" className="transition hover:text-bits-green-dark">Undergraduate Accreditation</Link></li>
                <li><Link href="/graduate-accreditation" className="transition hover:text-bits-green-dark">Graduate Accreditation</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 text-sm text-bits-text">
            Copyright &copy; 2026 BITS College
          </div>
        </div>
      </section>
    </div>
  );
}
