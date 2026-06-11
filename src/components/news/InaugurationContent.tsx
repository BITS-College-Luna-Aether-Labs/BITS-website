/** Inauguration — hero image + description of the January 2021 inauguration event */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InaugurationContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                BITS College Inauguration
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/Inauguration.jpg"
              alt="BITS College inauguration banner on the campus facade"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College celebrated its inauguration on January 02, 2021. The event was held on the campus grounds
            and was attended by esteemed guests from various sectors, including government officials, academics,
            business professionals, and media representatives.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
