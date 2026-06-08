/** Graduate Admission — requirements for MSc IT Management with numbered list */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const requirements = [
  "A first degree in fields related to IT (Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning) or",
  "A first degree in any field of study with a minor in Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning.",
  "To secure the minimum mark in the college Entrance Exam result.",
];

export function GraduateAdmissionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Graduate Admission
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Admission to the Graduate Program
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <p className="text-base leading-8 text-bits-text">
                The graduate programs are intended for candidates with an undergraduate degree
                or a postgraduate diploma in IT related fields.
              </p>
              <p className="mt-6 text-base font-medium text-bits-heading">
                In particular, the following requirements must be fulfilled.
              </p>
              <ul className="mt-6 space-y-4">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-bits-text">
                    <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/images/Academics-GraduateAdmissions/Information Technology Management.webp"
                alt="Graduate Admission"
                width={600}
                height={450}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
