"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const highlights = [
  {
    title: "Classrooms",
    text: "Flexible teaching rooms designed for lectures, discussions, and blended delivery.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1523230410928-7a1f4a6d3c6d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computer Labs",
    text: "Full-fledged computer labs on each floor accommodating up to 50 users at a time.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "IT Infrastructure",
    text: "State-of-the-art infrastructure with high bandwidth internet connectivity.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Library",
    text: "Two libraries well equipped with the most current printed and electronic materials.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "College Building",
    text: "A purpose built five story building, situated at an accessible location.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Online Learning",
    text: "Students can learn any place / any time at their own pace and convenience. Less crowded learning sessions / less crowded classrooms / less crowded campus",
    icon: MonitorSmartphone,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

const stats = [
  { label: "Learning spaces", value: "6+" },
  { label: "Campus systems", value: "24/7" },
  { label: "Digital access", value: "High" },
  { label: "Student support", value: "Active" },
];

const facilityImages: Record<string, string[]> = {
  Classrooms: [
    "/images/About%5CFacilities/Class%20Room%201.jpg",
    "/images/About%5CFacilities/Class%20Room%202.jpg",
    "/images/About%5CFacilities/Class%20Room%203.jpg",
  ],
  "Computer Labs": [
    "/images/About%5CFacilities/Computer%20Labs%201.jpg",
    "/images/About%5CFacilities/Computer%20Labs%202.jpg",
  ],
  "IT Infrastructure": [
    "/images/About%5CFacilities/IT%20INFRASTRUCTURE%201.jpg",
    "/images/About%5CFacilities/IT%20INFRASTRUCTURE%202.jpg",
  ],
  Library: [
    "/images/About%5CFacilities/Library%201.webp",
    "/images/About%5CFacilities/Library%202.webp",
    "/images/About%5CFacilities/Library%203.webp",
  ],
  "College Building": [
    "/images/About%5CFacilities/College%201.webp",
    "/images/About%5CFacilities/COllege%202.webp",
  ],
  "Online Learning": [
    "/images/About%5CFacilities/Online%20Learning%201.webp",
    "/images/About%5CFacilities/Online%20Learning%202.webp",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: EASE_PREMIUM },
  }),
};

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
  const images = facilityImages[item.title] ?? [];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={0.08 * index}
      className={`grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] shadow-sm lg:grid-cols-2 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`relative ${reverse ? "lg:[direction:ltr]" : ""} p-4 sm:p-6`}>
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <img
            src={images[current]}
            alt={item.title}
            className="h-72 w-full object-cover transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition ${
                      i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={`flex flex-col justify-center p-6 sm:p-8 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-bits-green-dark">
          <Icon className="h-4 w-4" />
          {item.title}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-bits-heading">{item.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-bits-text">{item.text}</p>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-bits-green-dark">
          <CheckCircle2 className="h-4 w-4" />
          Modern learning support
        </div>
      </div>
    </motion.article>
  );
}

export function FacilitiesContent() {
  return (
    <div className="bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)]">
        <div className="mx-auto max-w-site px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Facilities overview
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Facilities
            </h1>
            <p className="mt-6 text-lg leading-8 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and modest contribution to
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
                  className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)]/80 p-5 shadow-sm backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-bits-green">{stat.value}</p>
                  <p className="mt-2 text-sm text-bits-text">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Campus facilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Core learning infrastructure
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-[var(--bits-surface-muted)] px-4 py-2 text-sm text-bits-text md:flex">
            <Sparkles className="h-4 w-4 text-bits-green" />
            Structured campus overview
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <FacilityCard key={item.title} item={item} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-950/10 bg-emerald-50/70">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Application path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Start your journey at BITS
            </h2>
            <p className="mt-4 text-base leading-7 text-bits-text">
              Explore our programs and take the first step toward a quality higher education experience
              with state-of-the-art facilities and dedicated faculty.
            </p>
          </div>
          <a
            href="https://applications.bitscollege.edu.et"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bits-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green-dark lg:mt-0"
          >
            Open application <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
