"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
} from "lucide-react";

const newsItems = [
  {
    title: "Data Analytics Workshop by the ITS Department",
    date: "March 22, 2025",
    excerpt:
      "Showcasing the life cycle of data analytics, starting from data processing, cleaning, visualizing and gaining insight on data and making informed decisions.",
    accent: "from-emerald-500 to-lime-400",
  },
  {
    title: "Virtual Tour of BITS College",
    date: "November 02, 2024",
    excerpt:
      "Explore the campus, state-of-the-art labs, student facilities, and learning spaces through a guided virtual experience.",
    accent: "from-emerald-500 to-green-400",
  },
  {
    title: "Hackathon Stories",
    date: "October 16, 2024",
    excerpt:
      "A focused recap of collaboration, innovation, and the competitive energy that shaped the BITS College Hackathon.",
    accent: "from-emerald-600 to-green-500",
  },
  {
    title: "Day 3 of the BITS College Hackathon",
    date: "October 14, 2024",
    excerpt:
      "A grand finale featuring coding breakthroughs, teamwork, and the announcement of the winning project.",
    accent: "from-emerald-500 to-lime-400",
  },
  {
    title: "Day 2 of the BITS College Hackathon",
    date: "October 13, 2024",
    excerpt:
      "Projects advanced rapidly as teams pushed ideas from concept to execution with momentum and creativity.",
    accent: "from-emerald-500 to-cyan-400",
  },
  {
    title: "Day 1 of the BITS College Hackathon",
    date: "October 12, 2024",
    excerpt:
      "Creativity, problem solving, and serious technical skill defined the opening day of the event.",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    title: "BITS Workshop Highlights",
    date: "September 29, 2024",
    excerpt:
      "A day of inspiration, career guidance, and energy captured through the most memorable workshop moments.",
    accent: "from-emerald-500 to-lime-300",
  },
  {
    title: "Highlights from the Digital Platform Ecosystem Workshop",
    date: "November 16, 2023",
    excerpt:
      "Jointly organized with industry partners, the workshop covered cybersecurity, digital transformation, ChatGPT, banking trends, logistics ecosystems, and digital marketing.",
    accent: "from-emerald-500 to-cyan-300",
  },
  {
    title: "Workshop on Digital Platform Ecosystems",
    date: "November 7, 2023",
    excerpt:
      "Experts from multiple industries gathered to discuss trends, share perspectives, and benefit from digital platforms.",
    accent: "from-emerald-500 to-green-300",
  },
  {
    title: "Scholarship Recipients",
    date: "September 15, 2023",
    excerpt:
      "Celebrating outstanding students and their achievements with scholarship recognition and support for future endeavors.",
    accent: "from-emerald-600 to-yellow-400",
  },
  {
    title: "Summer Bootcamp",
    date: "August 21, 2023",
    excerpt:
      "A practical training environment built around industry standards, best practices, tools, and technologies.",
    accent: "from-emerald-500 to-sky-400",
  },
  {
    title: "BITS College Day",
    date: "June 14, 2023",
    excerpt:
      "Students\u2019 work, panels, discussions, and games came together in a college-wide celebration.",
    accent: "from-emerald-500 to-green-400",
  },
  {
    title: "Workshop",
    date: "March 26, 2022",
    excerpt:
      "Preparing for the tech industry through higher education, practical discussion, and applied insight.",
    accent: "from-bits-green-dark to-emerald-600",
  },
  {
    title: "Student Appreciation Night",
    date: "December 12, 2021",
    excerpt:
      "A formal evening honoring the accomplishments and contributions of postgraduate students.",
    accent: "from-emerald-600 to-pink-400",
  },
  {
    title: "BITS College Inauguration - Speech by Dr. Rahel Bekele",
    date: "January 02, 2021",
    excerpt:
      "A record of the BITS College School of Systems and Technology inauguration ceremony.",
    accent: "from-bits-green-dark to-emerald-500",
  },
  {
    title: "Inauguration",
    date: "January 02, 2021",
    excerpt:
      "A celebration of the institution\u2019s inauguration and early milestone in its academic journey.",
    accent: "from-emerald-600 to-teal-400",
  },
  {
    title: "BITS College Introduction",
    date: "October 04, 2020",
    excerpt:
      "The founding overview: a private higher learning institution focused on advanced scientific knowledge through teaching and research.",
    accent: "from-bits-green-dark to-emerald-500",
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

function FeaturedCard() {
  const item = newsItems[0];
  return (
    <motion.article
      variants={fadeUp}
      className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative flex min-h-[320px] items-center justify-center bg-gradient-to-br from-bits-green-dark/20 via-emerald-100 to-lime-50">
          <CalendarDays className="h-20 w-20 text-bits-green-dark/30" />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bits-green-dark/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-bits-green-dark">
            Featured update
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">{item.title}</h2>
          <div className="mt-4 flex items-center gap-2 text-sm text-bits-text">
            <Clock3 className="h-4 w-4" />
            {item.date}
          </div>
          <p className="mt-5 text-base leading-7 text-bits-text">{item.excerpt}</p>
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-bits-green">
              Read More
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-sm text-bits-text">Updated archive entry</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function NewsCard({ item, index }: { item: (typeof newsItems)[number]; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[var(--bits-surface)] shadow-sm transition-shadow hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
    >
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--bits-surface-muted)] to-emerald-50">
        <CalendarDays className="h-16 w-16 text-bits-green/30 transition duration-700 group-hover:scale-110" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-bits-text backdrop-blur">
          News item
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-bits-text">
          <CalendarDays className="h-4 w-4" />
          {item.date}
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-bits-heading">{item.title}</h3>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-bits-text">{item.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-bits-green-dark transition group-hover:text-bits-green">
            Read More
            <ArrowRight className="h-4 w-4" />
          </span>
          <div className="h-2 w-2 rounded-full bg-bits-green" />
        </div>
      </div>
    </motion.article>
  );
}

export function NewsEventsContent() {
  return (
    <div className="min-h-screen bg-[#f7faf8] text-bits-heading">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.08),_transparent_40%)]" />
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <CalendarDays className="h-4 w-4" />
              Archive of institutional announcements
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              News and Events
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bits-text sm:text-lg">
              A visually modernized version of the original archive layout, preserving the structure, spacing logic, and green institutional palette while adding motion, depth, and improved readability.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bits-green-dark">Archive</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-bits-heading">Recent campus stories</h2>
          </div>
          <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-bits-text shadow-sm md:flex">
            <Search className="h-4 w-4" />
            Search stories
          </div>
        </div>

        <div className="grid gap-8">
          <FeaturedCard />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.slice(1).map((item, index) => (
              <NewsCard key={`${item.title}-${item.date}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
