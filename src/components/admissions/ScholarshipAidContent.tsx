"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Heart,
  Download,
  Sparkles,
} from "lucide-react";

type ScholarshipType = {
  title: string;
  summary: string;
  bullets: string[];
};

const scholarshipTypes: ScholarshipType[] = [
  {
    title: "Merit-based Scholarship",
    summary:
      "Granted solely based on academic performance. This option supports both incoming and already-enrolled students.",
    bullets: [
      "Outstanding academic achievement is the main criterion.",
      "Financial need is not considered for this category.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Need-Based Scholarship",
    summary:
      "Awarded to students who demonstrate financial need and strong grades, with a more balanced eligibility threshold.",
    bullets: [
      "Financial assistance is combined with grade review.",
      "More flexible than the merit-based track.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Female Scholarship",
    summary:
      "Reserved for academically qualified female students who also demonstrate financial need.",
    bullets: [
      "Designed to strengthen women's participation.",
      "Encourages applications from promising students.",
      "Mandatory on-campus employment may apply.",
    ],
  },
  {
    title: "Work Study Program",
    summary:
      "Provides on-campus employment opportunities for already-enrolled students with strong performance.",
    bullets: [
      "Built for students who need work opportunities.",
      "Focused on performance and eligibility.",
      "Students may work up to 12 hours weekly.",
    ],
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

function ScholarshipCard({ item, index }: { item: ScholarshipType; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-[var(--bits-surface)] p-6 shadow-[0_10px_30px_rgba(92,102,116,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(92,102,116,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-bits-green-dark to-bits-green" />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-bits-heading">{item.title}</h3>
          <p className="mt-2 max-w-prose text-sm leading-6 text-bits-text">
            {item.summary}
          </p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--bits-surface-muted)] text-lg text-bits-green transition-transform duration-500 group-hover:scale-110">
          <Heart className="h-5 w-5" />
        </div>
      </div>

      <ul className="space-y-3 text-sm leading-6 text-bits-text">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-bits-green" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function GlowBlob({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export function ScholarshipAidContent() {
  return (
    <div className="min-h-screen bg-[#f4f6f5] text-bits-heading">
      <main className="relative overflow-hidden">
        <GlowBlob className="left-[-6rem] top-20 h-72 w-72 bg-bits-green/20" />
        <GlowBlob className="right-[-8rem] top-56 h-96 w-96 bg-[#5c6674]/15" />
        <GlowBlob className="bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] bg-bits-green/10" />

        <section className="mx-auto max-w-site px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 rounded-full border border-bits-green/30 bg-bits-green/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green"
              >
                Admissions &middot; Scholarship &amp; Aid
              </motion.div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl"
              >
                Scholarship &amp; Aid
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-5 max-w-2xl text-base leading-8 text-bits-text sm:text-lg"
              >
                In order to make the College accessible to all, BITS offers a limited
                number of scholarships primarily for academic expenses such as tuition,
                transportation allowance, and equipment funding.
              </motion.p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "4", label: "scholarship tracks" },
                  { value: "12h", label: "max work hours/week" },
                  { value: "1", label: "brochure preview" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="rounded-[24px] border border-white bg-[var(--bits-surface)] p-5 shadow-[0_10px_30px_rgba(92,102,116,0.08)]"
                  >
                    <div className="text-2xl font-semibold text-bits-green">{stat.value}</div>
                    <div className="mt-1 text-sm text-bits-text">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 mx-auto h-[25rem] w-[25rem] rounded-full bg-bits-green/10 blur-2xl" />
              <div className="relative flex h-[23rem] w-[23rem] items-center justify-center rounded-full border-[14px] border-white bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.2)),linear-gradient(145deg,#edf4ea,#d9e6d1)] shadow-[0_18px_55px_rgba(92,102,116,0.15)]">
                <div className="absolute inset-6 rounded-full border border-dashed border-bits-green/35" />
                <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-[#5c6674]/15 blur-2xl" />
                <div className="absolute bottom-7 right-8 h-28 w-28 rounded-full bg-bits-green/20 blur-2xl" />
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 text-center">
                  <div className="mx-auto w-fit rounded-full bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-bits-green">
                    Limited opportunities
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight text-bits-heading">
                    BITS Scholarships
                  </div>
                  <div className="mx-auto mt-3 max-w-sm text-sm leading-7 text-bits-text">
                    Academic merit, need-based support, women&apos;s empowerment, and work-study
                    pathways are organized with a clean, high-contrast layout.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {scholarshipTypes.map((item, index) => (
              <ScholarshipCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[30px] bg-bits-green-dark p-7 text-white shadow-[0_18px_40px_rgba(92,102,116,0.22)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Heart className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Recognition of Donors</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/90">
                BITS College recognizes financial aid contributions through annual reports,
                recognition ceremonies, and special events that celebrate generosity and support.
              </p>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-100/90">
                  This area mirrors the visual rhythm of the source page while giving the
                  interface a cleaner animated finish.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[30px] border border-white/70 bg-[var(--bits-surface)] p-7 shadow-[0_18px_40px_rgba(92,102,116,0.08)]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full bg-bits-green/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green">
                    For More Information
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bits-heading">
                    Download the scholarship brochure
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-bits-text">
                    The brochure provides detailed information about all scholarship
                    opportunities, eligibility criteria, and application procedures.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/BITS_SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf"
                      className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-bits-green"
                    >
                      <Download className="h-4 w-4" />
                      Open brochure PDF
                    </Link>
                    <Link
                      href="/scholarship-aid"
                      className="inline-flex items-center gap-2 rounded-full border border-bits-green/20 bg-white px-5 py-3 text-sm font-semibold text-bits-heading transition-colors hover:bg-bits-green/5 hover:text-bits-green-dark"
                    >
                      View all scholarships
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-white/70 bg-[var(--bits-surface)] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-site gap-8 lg:grid-cols-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-bits-green">
                from collecting . . . to connecting . . .
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-bits-heading">Contact Info</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-bits-text">
                <p>info@bitscollege.edu.et</p>
                <p>+251-982-363636</p>
                <p>Yeka Sub-city, Woreda 05, next to Yeka Park</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-bits-heading">Quick Link</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-bits-text">
                {[
                  "Tuition",
                  "Undergraduate Program Admission",
                  "Graduate Program Admission",
                  "Undergraduate Accreditation",
                  "Graduate Accreditation",
                  "News & Events",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                    className="rounded-2xl border border-slate-200 bg-[var(--bits-surface)] px-4 py-3 transition hover:border-bits-green/30 hover:bg-bits-green/5 hover:text-bits-green-dark"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-bits-green-dark p-6 text-white shadow-[0_18px_40px_rgba(122,193,67,0.24)]">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                brochure source
              </div>
              <p className="mt-3 text-lg font-medium leading-8">
                BITS SCHOLARSHIPS INFORMATION BROCHURE 2023
              </p>
              <Link
                href="/BITS_SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-bits-green-dark"
              >
                <Download className="h-4 w-4" />
                Download / Preview PDF
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-site flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-bits-text md:flex-row md:items-center md:justify-between">
            <div>Copyright &copy; 2026 BITS College</div>
            <div className="text-bits-text/60">Recreated with motion, softer typography, and preserved palette.</div>
          </div>
        </section>
      </main>
    </div>
  );
}
