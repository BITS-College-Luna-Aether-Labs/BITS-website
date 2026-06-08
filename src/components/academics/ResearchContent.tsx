/** Research — two-column layout: focus description and core areas list with images */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const coreAreas = [
  "Context based software engineering methodologies",
  "Innovations on IT service industries",
  "Software security, mobility and usability",
  "Internet of things",
  "Big data analytics",
  "Cyber security",
  "E-health, Education, E-commerce, etc.",
];

const IMG = "/images/Academics-Research/";

export function ResearchContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <Sparkles className="h-4 w-4" />
              Research
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Research
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Focus
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                BITS College focuses on business and development-oriented & technology
                transfer-focused research that best supports the fulfillment of aligning IT
                with business as well as the ICT for development agenda. The main focus is on
                creating an integrated, community based research and high quality graduate
                studies so as to maximize the benefits to the society.
              </p>
            </div>

            <div className="relative aspect-[4/3]">
              <Image
                src={`${IMG}Research%201.png`}
                alt="Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] lg:order-first">
              <Image
                src={`${IMG}Research%202.png`}
                alt="Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Core Areas
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Core research areas and themes identified at BITS are:
              </p>
              <ul className="mt-4 space-y-3">
                {coreAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-bits-text">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
