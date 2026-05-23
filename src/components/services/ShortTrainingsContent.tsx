"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const TRAININGS = [
  {
    title: "Software Development Professional Trainings",
    imageLabel: "Software Development",
    summary:
      "Practical software engineering topics with emphasis on delivery, design, and modern web development.",
    bullets: [
      "Agile practices and underlying principles",
      "Software architecture and design",
      "Front end development",
      "Back end development",
      "Web security",
      "Cloud computing",
      "Data analytics",
      "Soft skills",
    ],
    pdf: "/bits-short-trainings-pdfs/software-development-professional-training.pdf",
  },
  {
    title: "Information Technology Management Trainings",
    imageLabel: "IT Management",
    summary:
      "Governance, service management, cybersecurity, and enterprise IT controls for operational maturity.",
    bullets: [
      "Boards and technology governance",
      "Governance of enterprise IT",
      "IT service management - ITIL",
      "Cyber security and resilience",
      "Systems approach to business management",
      "Change management",
      "Software project management",
    ],
    pdf: "/bits-short-trainings-pdfs/it-management.pdf",
  },
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

function CardImage({ label }: { label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-[var(--bits-surface)] shadow-[0_20px_50px_rgba(16,24,40,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-br from-bits-green-dark to-bits-green opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.18),transparent_32%)]" />
      <div className="relative flex min-h-[220px] flex-col justify-between p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/80">Short Training</p>
            <p className="text-lg font-semibold">BITS College</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {label}
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs text-white/88">
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">Industry aligned</div>
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">Hands-on</div>
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur">Career focused</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingCard({ item, index }: { item: (typeof TRAININGS)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 4);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]"
    >
      <CardImage label={item.imageLabel} />

      <div className="space-y-4 p-3 md:p-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[var(--bits-surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-bits-text">
            Professional Trainings
          </p>
          <h3 className="text-xl font-semibold text-bits-heading md:text-2xl">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-bits-text">{item.summary}</p>
        </div>

        <div className="rounded-[1.5rem] bg-[var(--bits-surface-muted)] p-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bits-text">
            What will I learn?
          </p>
          <ul className="grid gap-2 text-sm leading-6 text-bits-text">
            {visibleBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-bits-green" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {item.bullets.length > 4 ? (
            <button
              type="button"
              onClick={() => setExpanded((s) => !s)}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-bits-green-dark transition hover:text-bits-green"
            >
              {expanded ? "Show less" : "See all topics"}
              <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={item.pdf}
            className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-bits-green"
            download
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
          <a
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-bits-heading transition hover:border-bits-green-dark hover:text-bits-green-dark"
          >
            <ExternalLink className="h-4 w-4" />
            More information
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function ShortTrainingsContent() {
  const infoLinks = [
    {
      label: "Software Development PDF",
      href: "/bits-short-trainings-pdfs/software-development-professional-training.pdf",
    },
    {
      label: "IT Management PDF",
      href: "/bits-short-trainings-pdfs/it-management.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-bits-heading">
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-[#f7f5f0]">
          <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_60%_85%,rgba(16,185,129,0.10),transparent_30%)]" />
          <div className="relative mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-bits-text shadow-sm">
                  <BookOpen className="h-4 w-4 text-bits-green-dark" />
                  Professional Trainings
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                  Short trainings, rebuilt with stronger hierarchy and richer motion.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-bits-text sm:text-lg">
                  This recreation preserves the page structure, layout logic, and palette of the original training page,
                  while upgrading typography, spacing rhythm, animation, and the information layer.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#trainings"
                    className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-bits-green"
                  >
                    View trainings
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#downloads"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-bits-heading transition hover:border-bits-green hover:text-bits-green-dark"
                  >
                    Download PDFs
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/70 bg-[var(--bits-surface)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bits-text">Structure</p>
                    <p className="mt-2 text-lg font-semibold text-bits-heading">Top nav, cards, footer.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/70 bg-[var(--bits-surface)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bits-text">Motion</p>
                    <p className="mt-2 text-lg font-semibold text-bits-heading">Hover lift and reveal transitions.</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bits-text">Location</p>
                      <p className="mt-2 text-xl font-semibold text-bits-heading">Yeka Sub-city, Woreda 05, next to Yeka Park</p>
                    </div>
                    <div className="rounded-2xl bg-[var(--bits-surface-muted)] p-3 text-bits-green-dark">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-[var(--bits-surface-muted)] p-4 text-sm text-bits-text">Green palette</div>
                    <div className="rounded-2xl bg-[var(--bits-surface-muted)] p-4 text-sm text-bits-text">Soft shadow hierarchy</div>
                    <div className="rounded-2xl bg-[var(--bits-surface-muted)] p-4 text-sm text-bits-text">Responsive cards</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="trainings" className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-bits-green">Training offerings</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
                Two primary pathways, presented as animated content cards.
              </h2>
            </div>
            <p className="hidden max-w-xl text-sm leading-7 text-bits-text lg:block">
              The original page is structurally simple: header, content cards, and footer. This version preserves that hierarchy and refines the rhythm.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {TRAININGS.map((item, index) => (
              <TrainingCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="downloads" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[2rem] bg-bits-green-dark p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">More information</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">PDF references for the two detailed training pages.</h3>
                <p className="mt-4 text-sm leading-7 text-white/82">
                  The page provides downloadable PDFs with detailed curriculum information for each training pathway.
                </p>
                <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-white/85 backdrop-blur">
                  Folder path: <span className="font-semibold">bits-short-trainings-pdfs</span>
                </div>
              </motion.div>

              <div className="grid gap-4">
                {infoLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    download
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] px-5 py-5 shadow-sm transition hover:border-bits-green-dark hover:bg-white"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bits-text">PDF</p>
                      <p className="mt-1 text-lg font-semibold text-bits-heading">{link.label}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3 text-bits-green-dark shadow-sm transition group-hover:translate-x-0.5 group-hover:shadow-md">
                      <Download className="h-5 w-5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bits-green-dark text-white">
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Contact info</p>
              <p className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-white/95">
                from collecting . . . to connecting . . .
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/78">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> info@bitscollege.edu.et</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> +251-982-363636</div>
                <div className="flex items-center gap-3"><Globe className="h-4 w-4" /> Yeka Sub-city, Woreda 05, next to Yeka Park</div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Quick links</p>
              <div className="mt-4 grid gap-3">
                {["Tuition", "Undergraduate Program Admission", "Graduate Program Admission", "Undergraduate Accreditation", "Graduate Accreditation"].map((link) => (
                  <Link key={link} href={`/${link.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`} className="text-sm text-white/80 transition hover:text-white">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Summary</p>
              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/78 backdrop-blur">
                The visual language remains consistent with the source page: compact header, two primary training blocks, a reference-download layer, and a concise footer.
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>Copyright &copy; 2026 BITS College</p>
            <p>Recreated interface with upgraded motion, spacing, and information hierarchy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
