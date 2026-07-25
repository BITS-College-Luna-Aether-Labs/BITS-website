/** Library page content — detailed information on physical and digital libraries with digital portal CTA */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Library as LibraryIcon } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: EASE_PREMIUM },
  }),
};

export function LibraryContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)] dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-site px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm dark:border-gray-700">
              <BookOpen className="h-4 w-4" />
              Services &middot; Library System
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Library Services
            </h1>
            <p className="mt-4 text-lg leading-8 text-bits-text">
              Comprehensive physical and digital academic resources supporting teaching, learning, and research excellence at BITS College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text and Info Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] p-8 shadow-sm dark:border-gray-700 sm:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-bits-green-dark dark:bg-gray-800">
                <LibraryIcon className="h-4 w-4" />
                Physical Libraries
              </div>
              <p className="text-base leading-8 text-bits-text sm:text-lg">
                BITS College maintains a structured library system consisting of both physical and digital resources to enhance teaching, learning, and research activities. The college has two standard libraries located on the 2nd and 4th floors, with each facility having a maximum seating capacity of 80 students. These libraries provide dedicated study areas and access to essential academic materials.
              </p>
            </div>
          </motion.div>

          {/* Gallery Image Showcase Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 shadow-md dark:border-gray-700">
              <Image
                src="/images/About-Facilities/Library%201.webp"
                alt="BITS College Library Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-sm font-medium opacity-90">Physical Study Spaces</p>
                <p className="text-lg font-semibold">Quiet & Focused Learning Environment</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-gray-700">
                <Image
                  src="/images/About-Facilities/Library%202.webp"
                  alt="Library Reading Area"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-gray-700">
                <Image
                  src="/images/About-Facilities/Library%203.webp"
                  alt="Library Books & Resources"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
