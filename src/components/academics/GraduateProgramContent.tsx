"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const focuses = [
  "Service Management",
  "IT Governance",
  "IT Audit",
  "IT Security",
  "IT Service Innovation And Project Management",
];

export function GraduateProgramContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] items-center max-w-site px-4 sm:px-6 lg:min-h-[calc(100vh-76px)] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Graduate Program
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl lg:text-5xl">
              Information Technology Management
            </h1>
            <p className="mt-6 text-base font-medium text-bits-green-dark">
              The M.Sc. Program In IT Management Focuses On:
            </p>
            <ul className="mt-4 space-y-3">
              {focuses.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-bits-text">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.08)]">
            <Image
              src="/images/Academics-GraduateAdmissions/Information%20Technology%20Management.webp"
              alt="Information Technology Management"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
