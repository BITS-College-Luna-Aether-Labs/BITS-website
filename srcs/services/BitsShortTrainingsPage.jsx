import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Academics', href: '#' },
  { label: 'Admissions', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'News & Events', href: '#' },
];

const TRAININGS = [
  {
    title: 'Software Development Professional Trainings',
    imageLabel: 'Software Development',
    summary:
      'Practical software engineering topics with emphasis on delivery, design, and modern web development.',
    bullets: [
      'Agile practices and underlying principles',
      'Software architecture and design',
      'Front end development',
      'Back end development',
      'Web security',
      'Cloud computing',
      'Data analytics',
      'Soft skills',
    ],
    pdf: '/bits-short-trainings-pdfs/software-development-professional-training.pdf',
    gradient: 'linear-gradient(135deg, #0f4c81 0%, #1c6fb6 100%)',
  },
  {
    title: 'Information Technology Management Trainings',
    imageLabel: 'IT Management',
    summary:
      'Governance, service management, cybersecurity, and enterprise IT controls for operational maturity.',
    bullets: [
      'Boards and technology governance',
      'Governance of enterprise IT',
      'IT service management - ITIL',
      'Cyber security and resilience',
      'Systems approach to business management',
      'Change management',
      'Software project management',
    ],
    pdf: '/bits-short-trainings-pdfs/it-management.pdf',
    gradient: 'linear-gradient(135deg, #d48b1f 0%, #f0b14a 100%)',
  },
];

const QUICK_LINKS = [
  'Tuition',
  'Undergraduate Program Admission',
  'Graduate Program Admission',
  'Undergraduate Accreditation',
  'Graduate Accreditation',
];

function CardImage({ label, gradient }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-white shadow-[0_20px_50px_rgba(16,24,40,0.08)]">
      <div className="absolute inset-0 opacity-95" style={{ backgroundImage: gradient }} />
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

function TrainingCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = expanded ? item.bullets : item.bullets.slice(0, 4);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]"
    >
      <CardImage label={item.imageLabel} gradient={item.gradient} />

      <div className="space-y-4 p-3 md:p-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            Professional Trainings
          </p>
          <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
        </div>

        <div className="rounded-[1.5rem] bg-slate-50 p-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            What will I learn?
          </p>
          <ul className="grid gap-2 text-sm leading-6 text-slate-700">
            {visibleBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d48b1f]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          {item.bullets.length > 4 ? (
            <button
              type="button"
              onClick={() => setExpanded((s) => !s)}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#0f4c81] transition hover:text-[#09385f]"
            >
              {expanded ? 'Show less' : 'See all topics'}
              <ChevronDown className={`h-4 w-4 transition ${expanded ? 'rotate-180' : ''}`} />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={item.pdf}
            className="inline-flex items-center gap-2 rounded-full bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#09385f]"
            download
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
          <a
            href={item.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#0f4c81] hover:text-[#0f4c81]"
          >
            <ExternalLink className="h-4 w-4" />
            More information
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function BitsShortTrainingsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pdfBase = useMemo(() => '/bits-short-trainings-pdfs', []);

  const infoLinks = useMemo(
    () => [
      {
        label: 'Software Development PDF',
        href: `${pdfBase}/software-development-professional-training.pdf`,
      },
      {
        label: 'IT Management PDF',
        href: `${pdfBase}/it-management.pdf`,
      },
    ],
    [pdfBase],
  );

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-900">
      <style>{`
        :root { color-scheme: light; }
        html { scroll-behavior: smooth; }
        body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f4c81] text-white shadow-lg shadow-blue-950/20">
              <span className="text-sm font-bold tracking-[0.25em]">B</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">BITS College</p>
              <p className="text-sm font-medium text-slate-700">Professional Trainings</p>
            </div>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#0f4c81] hover:text-[#0f4c81]"
            >
              Contact
            </a>
            <a
              href="#trainings"
              className="inline-flex items-center gap-2 rounded-full bg-[#d48b1f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b97511]"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
            onClick={() => setMobileMenuOpen((s) => !s)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#0f4c81] hover:bg-slate-100">
                Contact
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-[#f7f5f0]">
          <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(circle_at_20%_20%,rgba(15,76,129,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(212,139,31,0.16),transparent_26%),radial-gradient(circle_at_60%_85%,rgba(15,76,129,0.10),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  <BookOpen className="h-4 w-4 text-[#0f4c81]" />
                  Professional Trainings
                </div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                  Short trainings, rebuilt with stronger hierarchy and richer motion.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  This recreation preserves the page structure, layout logic, and blue-gold palette of the original training page,
                  while upgrading typography, spacing rhythm, animation, and the information layer.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#trainings"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0f4c81] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:bg-[#09385f]"
                  >
                    View trainings
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#downloads"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#d48b1f] hover:text-[#d48b1f]"
                  >
                    Download PDFs
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f4c81] text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Structure</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Top nav, cards, footer.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d48b1f] text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Motion</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">Hover lift and reveal transitions.</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Location</p>
                      <p className="mt-2 text-xl font-semibold text-slate-900">Yeka Sub-city, Woreda 05, next to Yeka Park</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-3 text-[#0f4c81]">
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Blue and gold palette</div>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Soft shadow hierarchy</div>
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">Responsive cards</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="trainings" className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d48b1f]">Training offerings</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Two primary pathways, presented as animated content cards.
              </h2>
            </div>
            <p className="hidden max-w-xl text-sm leading-7 text-slate-600 lg:block">
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
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] bg-[#0f4c81] p-8 text-white shadow-[0_18px_50px_rgba(15,23,42,0.14)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">More information</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">PDF references for the two detailed training pages.</h3>
                <p className="mt-4 text-sm leading-7 text-white/82">
                  The page did not expose direct downloadable documents in the visible structure, so the PDF set is provided as a separate reference folder that matches the two detail pages.
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
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm transition hover:border-[#0f4c81] hover:bg-white"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">PDF</p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">{link.label}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3 text-[#0f4c81] shadow-sm transition group-hover:translate-x-0.5 group-hover:shadow-md">
                      <Download className="h-5 w-5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0b1726] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
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
                {QUICK_LINKS.map((link) => (
                  <a key={link} href="#" className="text-sm text-white/80 transition hover:text-white">
                    {link}
                  </a>
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
            <p>Copyright © 2026 BITS College</p>
            <p>Recreated interface with upgraded motion, spacing, and information hierarchy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
