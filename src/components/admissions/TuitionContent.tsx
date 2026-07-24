/** Tuition — fee information page */
"use client";

import { motion } from "framer-motion";
import { DollarSign, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { APPLY_URL } from "@/lib/constants/navigation";

export function TuitionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[linear-gradient(180deg,rgba(125,194,67,0.06),var(--bits-page))]">
        <div className="mx-auto max-w-site px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <DollarSign className="h-4 w-4" />
              Tuition & Fee Structure
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Tuition
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: EASE_PREMIUM }}
            className="rounded-3xl border border-emerald-950/10 bg-[var(--bits-surface)] p-8 shadow-[0_16px_38px_rgba(10,41,18,0.08)] dark:border-gray-800 dark:shadow-none sm:p-12"
          >
            <p className="text-lg leading-9 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and a modest contribution
              toward technology and other facilities available at the college.
            </p>

            <p className="mt-6 text-lg leading-9 text-bits-text">
              For detailed information about tuition fees and the total cost of attendance, please
              contact us using any of the methods below, or visit the Online Application page and
              select the program you are interested in to view the estimated cost of attendance.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:0982363636"
                className="group flex items-center gap-4 rounded-2xl border border-emerald-950/8 bg-[var(--bits-page)] p-5 transition-all duration-200 hover:border-bits-green/40 hover:shadow-md dark:border-gray-800 dark:hover:border-bits-green/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bits-green/10 text-bits-green transition-colors group-hover:bg-bits-green group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-bits-muted">Call Us</p>
                  <p className="text-lg font-semibold text-bits-heading">0982363636</p>
                </div>
              </a>

              <a
                href="mailto:info@bitscollege.edu.et"
                className="group flex items-center gap-4 rounded-2xl border border-emerald-950/8 bg-[var(--bits-page)] p-5 transition-all duration-200 hover:border-bits-green/40 hover:shadow-md dark:border-gray-800 dark:hover:border-bits-green/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bits-green/10 text-bits-green transition-colors group-hover:bg-bits-green group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-bits-muted">Email Us</p>
                  <p className="text-lg font-semibold text-bits-heading">info@bitscollege.edu.et</p>
                </div>
              </a>
            </div>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-bits-green/20 bg-bits-green/5 p-5 transition-all duration-200 hover:border-bits-green/40 hover:bg-bits-green/10"
            >
              <ExternalLink className="h-5 w-5 shrink-0 text-bits-green" />
              <span className="text-sm font-semibold text-bits-green">
                View Estimated Cost on Online Application
              </span>
              <ArrowRight className="h-4 w-4 text-bits-green transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
