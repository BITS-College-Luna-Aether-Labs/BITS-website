/** Graduate Admission — requirements for MSc IT Management with numbered list */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { APPLY_URL } from "@/lib/constants/navigation";

const requirements = [
  "A first degree in fields related to IT (Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning) or",
  "A first degree in any field of study with a minor in Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning.",
  "To secure the minimum mark in the college Entrance Exam result.",
];

export function GraduateAdmissionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_60px_-28px_rgba(15,23,42,0.28)]"
        >
          <div className="bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent p-6 sm:p-8">
            <div className="mb-6 text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm dark:border-bits-green/20 dark:bg-bits-green/10 dark:text-bits-green">
                <GraduationCap className="h-4 w-4" />
                Graduate Admission
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl lg:text-4xl">
                Admission to the Graduate Program
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-bits-text">
                The graduate programs are intended for candidates with an undergraduate degree
                or a postgraduate diploma in IT related fields.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="rounded-[1.5rem] border border-black/10 bg-[var(--bits-surface)]/75 p-5 backdrop-blur dark:border-bits-green/20 sm:p-6">
                <p className="text-base font-medium text-bits-heading">
                  In particular, the following requirements must be fulfilled.
                </p>
                <ul className="mt-8 space-y-4">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-bits-text">
                      <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bits-green"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/Academics-GraduateAdmissions/Information%20Technology%20Management.webp"
                  alt="Graduate Admission"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </motion.article>
      </section>
    </div>
  );
}
