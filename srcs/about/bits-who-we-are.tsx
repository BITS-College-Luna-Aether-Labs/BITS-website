import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'mission', label: 'Mission & Vision' },
  { id: 'dean', label: 'Message from the Dean' },
  { id: 'accreditation', label: 'Accreditation' },
];

const missionPoints = [
  'Providing quality higher education and research relevant to sustainable development.',
  'Offering a welcoming and rewarding environment for students, faculty, and staff.',
  'Fostering innovative learning, entrepreneurship, community engagement, and industry partnership.',
  'Building capacity to unlock technology-enabled education without boundaries.',
  'Cultivating strategic partnerships with industry leaders and academic institutions.',
  'Maintaining financing plans to sustain innovation and growth.',
];

const values = [
  'Open-mindedness, dynamism, and innovation',
  'Performance without compromising quality',
  'A nurturing environment for students and employees',
  'Integrity, mutual respect, collaboration, and unity',
  'Responsible governance and a commitment to service',
];

const accreditationItems = [
  {
    title: 'Graduate Accreditation',
    description: 'Documented recognition for graduate-level study and academic compliance.',
    href: '#',
  },
  {
    title: 'Undergraduate Accreditation',
    description: 'Documented recognition for undergraduate-level programs and standards.',
    href: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BitsWhoWeArePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f4] text-slate-800 antialiased">
      <style jsx global>{`
        :root {
          --bits-green: #2f6b4f;
          --bits-green-deep: #234f3a;
          --bits-gray: #6f7680;
          --bits-bg: #f7f8f4;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          background: var(--bits-bg);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-950/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--bits-green),var(--bits-green-deep))] text-white shadow-lg shadow-emerald-900/15">
              <span className="text-xs font-black tracking-[0.25em]">BITS</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-[var(--bits-green-deep)]">BITS College</p>
              <p className="text-xs text-slate-500">Who We Are</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group text-sm font-medium text-slate-600 transition hover:text-[var(--bits-green-deep)]"
              >
                {section.label}
                <span className="mt-1 block h-0.5 w-0 rounded-full bg-[var(--bits-green)] transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#accreditation"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--bits-green)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-[var(--bits-green-deep)]"
            >
              Apply Now <ChevronRight className="h-4 w-4" />
            </a>
          </nav>

          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero / Page title */}
      <section className="relative overflow-hidden border-b border-emerald-950/5 bg-[radial-gradient(circle_at_top_left,rgba(47,107,79,0.12),transparent_35%),linear-gradient(180deg,#ffffff,rgba(247,248,244,1))]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--bits-green-deep)] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Institutional profile
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A structured, content-first rebuild of the BITS College “Who We Are” page, preserving the page logic,
              section order, and green-gray identity while adding motion, refined spacing, and sharper typography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
          {/* Left rail / section nav */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-3xl border border-emerald-950/8 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">On this page</p>
              <div className="mt-4 space-y-2">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-emerald-900/10 hover:bg-emerald-50 hover:text-[var(--bits-green-deep)]"
                  >
                    <span>{section.label}</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Snapshot</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[var(--bits-green)]" />
                      <div>
                        <p className="text-2xl font-semibold text-slate-900">335+</p>
                        <p className="text-xs text-slate-500">Students enrolled</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-[var(--bits-green)]" />
                      <div>
                        <p className="text-2xl font-semibold text-slate-900">135+</p>
                        <p className="text-xs text-slate-500">Enrolled within 2017 EC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-8">
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Overview</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Overview</h2>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="space-y-5">
                  <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(47,107,79,0.07),rgba(111,118,128,0.05))] p-5">
                    <p className="text-lg font-semibold text-[var(--bits-green-deep)]">Attributes behind the brand</p>
                    <p className="mt-3 leading-7 text-slate-600">
                      The brand identity is built around the meaning of BITS, the visual logic of the logo, and a color
                      pairing that communicates freshness, energy, creativity, and determination.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-slate-900">BITS meaning</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Business, Innovation, Technology, and System.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                        <Target className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-slate-900">Logo narrative</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Learning and growth through connected knowledge in an infinity of combinations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(47,107,79,0.09),rgba(47,107,79,0.02))] p-5 sm:p-6">
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <span className="text-xl font-black text-[var(--bits-green-deep)]">B</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">BITS College</p>
                        <p className="text-xs text-slate-500">Private higher learning institution</p>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-600">
                      BITS began from a focused system development and training company and is pursuing a full-fledged
                      university vision through faculty expertise, academic design, and technology-forward delivery.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Current</p>
                        <p className="mt-1 text-lg font-semibold text-slate-900">335+ Students</p>
                      </div>
                      <div className="rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Goal</p>
                        <p className="mt-1 text-lg font-semibold text-slate-900">Full-fledged University</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="mission"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Mission and Vision</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Mission and Vision</h2>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5 sm:p-6">
                  <p className="text-lg font-semibold text-slate-900">Mission</p>
                  <p className="mt-3 leading-7 text-slate-600">
                    The purpose of BITS College is to enable its community to grow, thrive, and prosper through continual
                    innovation in education, research, and entrepreneurship.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--bits-green)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-emerald-950/8 bg-[linear-gradient(135deg,rgba(47,107,79,0.08),rgba(255,255,255,1))] p-5 sm:p-6">
                    <p className="text-lg font-semibold text-slate-900">Vision</p>
                    <p className="mt-3 leading-7 text-slate-600">
                      By 2030, BITS College aspires to grow in reputation nationally as a model of academic excellence and
                      innovative student support in an environment strengthened by industry partnerships and technology
                      enablement.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200 p-5 sm:p-6">
                    <p className="text-lg font-semibold text-slate-900">Values</p>
                    <div className="mt-4 grid gap-3">
                      {values.map((value) => (
                        <div key={value} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                          <Sparkles className="mt-0.5 h-4 w-4 text-[var(--bits-green)]" />
                          <p className="text-sm leading-6 text-slate-600">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="dean"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Message from the Dean</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Message from the Dean</h2>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <blockquote className="rounded-3xl border-l-4 border-[var(--bits-green)] bg-[linear-gradient(135deg,rgba(47,107,79,0.06),rgba(255,255,255,1))] p-6 sm:p-8">
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    On behalf of our faculty and staff and on my own behalf, I warmly welcome you to our website.
                    BITS College is conceived and established by caring and committed educators, innovators, and business
                    people who seek to contribute to the ongoing efforts of improving the quality of higher education in the
                    country.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    At BITS College, we strive to promote excellence in the production, growth, and dissemination of advanced
                    scientific knowledge through teaching, research, innovation, consultancy, and community service. We intend
                    to contribute to the high-level human resource need of the country by providing and advancing quality and
                    relevant education to our students.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    We are proud of our college facilities designed entirely with the ambitions of our higher education students
                    in mind: well-equipped classrooms, computer labs, libraries, and state-of-the-art technology facilities.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    One of the best things about our college is that it gives equal importance to each and every area so that
                    students will get a chance to achieve overall skills and personality development as they progress in their
                    careers.
                  </p>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-[linear-gradient(135deg,var(--bits-green),var(--bits-green-deep))]" />
                    <div>
                      <p className="font-semibold text-slate-900">Tesfaye Biru (PHD)</p>
                      <p className="text-sm text-slate-500">Dean</p>
                    </div>
                  </div>
                </blockquote>

                <div className="rounded-3xl bg-slate-50 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--bits-green)] shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Dean’s emphasis</p>
                      <p className="text-xs text-slate-500">Teaching, research, innovation, consultancy</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      'Academic excellence',
                      'Relevant education',
                      'Community service',
                      'Personal development',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                        <div className="h-2.5 w-2.5 rounded-full bg-[var(--bits-green)]" />
                        <p className="text-sm font-medium text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="accreditation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.55 }}
              className="scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-[var(--bits-green)]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Accreditation</p>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Accreditation</h2>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {accreditationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,rgba(247,248,244,1))] p-5 transition hover:-translate-y-1 hover:border-emerald-900/15 hover:shadow-lg hover:shadow-emerald-900/10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                      <ChevronRight className="mt-1 h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[var(--bits-green)]" />
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-[var(--bits-green-deep)]">
                      View document
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-950/8 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contact Info</p>
              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--bits-green)]" /> info@bitscollege.edu.et</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--bits-green)]" /> +251-982-363636</div>
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--bits-green)]" /> Yeka Sub-city, Woreda 05, next to Yeka Park</div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-slate-500">
                <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-emerald-900/20 hover:text-[var(--bits-green)]"><Facebook className="h-4 w-4" /></a>
                <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-emerald-900/20 hover:text-[var(--bits-green)]"><Twitter className="h-4 w-4" /></a>
                <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-emerald-900/20 hover:text-[var(--bits-green)]"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="rounded-full border border-slate-200 p-2 transition hover:border-emerald-900/20 hover:text-[var(--bits-green)]"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Quick Links</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                {['Tuition', 'Undergraduate Program Admission', 'Graduate Program Admission', 'Undergraduate Accreditation', 'Graduate Accreditation'].map(
                  (link) => (
                    <a key={link} href="#" className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm transition hover:text-[var(--bits-green-deep)]">
                      <span>{link}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            Copyright © 2026 BITS College
          </div>
        </div>
      </footer>
    </div>
  );
}
