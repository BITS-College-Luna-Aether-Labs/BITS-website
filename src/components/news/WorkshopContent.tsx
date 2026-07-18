/** Workshop — March 2022 tech industry workshop recap */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkshopContent() {
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
                Workshop
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
              src="/images/News-Events/Workshop.jpg"
              alt="BITS College workshop presentation photo"
              width={1200}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            On Saturday, March 26, 2022, BITS College hosted a Workshop &ldquo;Preparing for the Tech Industry
            through Higher Education&rdquo;. The workshop attracted more than 100 students who were interested in
            pursuing a career in the tech sector.
          </p>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            The workshop aimed to provide students with an overview of the skills and knowledge required for working
            in the tech industry, as well as the latest trends and best practices in each field. The students also
            had the opportunity to engage with the BITS College students (the ninjas) who are working on exciting
            projects in web development, mobile app development, and game development. The ninjas showcased their
            work and shared their experiences and challenges with the participants.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
