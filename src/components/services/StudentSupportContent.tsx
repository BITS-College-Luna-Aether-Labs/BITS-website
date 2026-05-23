"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShieldAlert,
  Sparkles,
  Crown,
  UsersRound,
  HeartHandshake,
  CalendarDays,
  Download,
} from "lucide-react";

type SupportCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
};

const supportCards: SupportCard[] = [
  {
    title: "Academic Support",
    description:
      "Peer-to-peer mentoring and advisor guidance help students stay confident in their academic and extracurricular work.",
    icon: <BookOpen className="h-5 w-5" />,
    points: ["Mentoring", "Advisor guidance", "Confidence building"],
  },
  {
    title: "Disability Support",
    description:
      "Students with disabilities receive advice, guidance, and practical adjustments to reduce barriers to learning.",
    icon: <ShieldAlert className="h-5 w-5" />,
    points: ["Inclusive support", "Learning adjustments", "Barrier reduction"],
  },
  {
    title: "Hackathons",
    description:
      "Students can join or organize hackathons to build software, solve problems, and earn prizes.",
    icon: <Sparkles className="h-5 w-5" />,
    points: ["Build projects", "Teamwork", "Problem solving"],
  },
  {
    title: "Women in Tech",
    description:
      "Career workshops and technical sessions support women\u2019s participation and growth in technology majors.",
    icon: <Crown className="h-5 w-5" />,
    points: ["Workshops", "Technical sessions", "Gender-gap support"],
  },
  {
    title: "Leadership",
    description:
      "Student-led brainstorming and activities are intended to strengthen leadership and initiative.",
    icon: <UsersRound className="h-5 w-5" />,
    points: ["Student body", "Initiative", "Team leadership"],
  },
  {
    title: "Community Clubs",
    description:
      "Charity, Toastmasters, media, creative communications, AIESEC, and book clubs expand learning beyond class.",
    icon: <HeartHandshake className="h-5 w-5" />,
    points: ["Service", "Communication", "Talent showcase"],
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

function Card({ item, index }: { item: SupportCard; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-[var(--bits-surface)] p-6 shadow-[0_10px_30px_rgba(92,102,116,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(92,102,116,0.14)]"
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-bits-green-dark to-bits-green" />
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--bits-surface-muted)] text-bits-green transition-transform duration-500 group-hover:scale-110">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-bits-heading">{item.title}</h3>
            <p className="mt-1 max-w-prose text-sm leading-6 text-bits-text">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.points.map((p) => (
          <span key={p} className="rounded-full bg-[var(--bits-surface-muted)] px-3 py-1 text-xs font-medium text-bits-text">
            {p}
          </span>
        ))}
      </div>
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

export function StudentSupportContent() {
  return (
    <div className="min-h-screen bg-[#f4f6f5] text-bits-heading">
      <main className="relative overflow-hidden">
        <GlowBlob className="left-[-6rem] top-24 h-72 w-72 bg-bits-green/20" />
        <GlowBlob className="right-[-8rem] top-52 h-96 w-96 bg-[#5c6674]/15" />
        <GlowBlob className="bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] bg-bits-green/10" />

        <section className="mx-auto max-w-site px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 rounded-full border border-bits-green/30 bg-bits-green/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green"
              >
                Services &middot; Student Support
              </motion.div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl"
              >
                Student Support
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-5 max-w-2xl text-base leading-8 text-bits-text sm:text-lg"
              >
                BITS keeps the layout clean and information-rich: academic support first, then disability support,
                then extracurricular growth across clubs and student-led activities.
              </motion.p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "2", label: "support pillars" },
                  { value: "9+", label: "club pathways" },
                  { value: "1", label: "preview brief" },
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
                    Student experience
                  </div>
                  <div className="mt-4 text-3xl font-semibold leading-tight text-bits-heading">
                    Support that feels structured
                  </div>
                  <div className="mx-auto mt-3 max-w-sm text-sm leading-7 text-bits-text">
                    A simple hierarchy, muted slate typography, and green accents keep the page close to the source
                    while making it more polished and animated.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-site px-4 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {supportCards.map((item, index) => (
              <Card key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-site px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[30px] bg-bits-green-dark p-7 text-white shadow-[0_18px_40px_rgba(92,102,116,0.22)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold">Activities at a Glance</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100/90">
                The college\u2019s student-support page is centered around mentoring, accessibility, and co-curricular
                opportunities such as hackathons, women-in-tech, leadership, charity, Toastmasters, media,
                creative writing, AIESEC, and book clubs.
              </p>
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-slate-100/90">
                  The same muted palette and layered composition with added motion, stronger type contrast,
                  and cleaner card spacing.
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
                  <div className="inline-flex items-center gap-2 rounded-full border border-bits-green/30 bg-bits-green/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green">
                    For More Information
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-bits-heading">
                    Preview the support brief
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-bits-text">
                    The full support brief provides detailed information about all student services,
                    eligibility criteria, and how to access each program.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/BITS_Student_Support_Information_Brief.pdf"
                      className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(122,193,67,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-bits-green"
                    >
                      <Download className="h-4 w-4" />
                      Open PDF
                    </Link>
                    <Link
                      href="/student-support"
                      className="rounded-full border border-bits-green/20 bg-white px-5 py-3 text-sm font-semibold text-bits-heading transition-colors hover:bg-bits-green/5 hover:text-bits-green-dark"
                    >
                      View all services
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
                {["Tuition", "Undergraduate Program Admission", "Graduate Program Admission", "Undergraduate Accreditation", "Graduate Accreditation", "News & Events"].map((item) => (
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
                support brief
              </div>
              <p className="mt-3 text-lg font-medium leading-8">
                BITS Student Support information brief
              </p>
              <Link
                href="/BITS_Student_Support_Information_Brief.pdf"
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
