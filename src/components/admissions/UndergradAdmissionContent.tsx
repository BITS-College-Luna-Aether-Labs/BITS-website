/** Undergraduate Admission — Ethiopian & foreign student requirements with numbered list cards */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { APPLY_URL } from "@/lib/constants/navigation";

const requirements = [
  "A graduate of an accredited high school with the required pass mark set by the national examination agency to enter higher education AND the necessary pass mark in the College Entrance Examination.",
  "A TVET Graduate approved for entry to higher education with official COC AND the necessary pass mark in the College Entrance Examination.",
  "A graduate of an accredited higher education and the necessary pass mark in the College Entrance Examination.",
];

const IMG = "/images/Admissions-Undergraduate/";

export function UndergradAdmissionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-bits-green-dark uppercase shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Admissions
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Undergraduate Admission
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Admission for Ethiopian Students
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                To be eligible for admission to BITS College, applicants should meet one of the
                following requirements.
              </p>
              <ul className="mt-6 space-y-4">
                {requirements.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-base text-bits-text">
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
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bits-green"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div>
              <Image
                src={`${IMG}Undergraduate%201.webp`}
                alt="Undergraduate Admission"
                width={600}
                height={450}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="w-full h-auto mx-auto object-contain"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] lg:order-first">
              <Image
                src={`${IMG}Undergraduate%202.webp`}
                alt="Undergraduate Admission"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Admission for Foreign Students
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Admission of foreign students is based on the equivalence established by the
                National Higher Education Relevance and Quality Assurance Agency.
              </p>

                <Link
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bits-green"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
