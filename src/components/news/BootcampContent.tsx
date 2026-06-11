/** Summer Bootcamp — workshop recap with image gallery and speaker highlights */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workshopImages = [
  {
    src: "/images/News-Events/Workshop%201.jpg",
    alt: "Summer bootcamp workshop session 1",
  },
  {
    src: "/images/News-Events/Workshop%202.jpg",
    alt: "Summer bootcamp workshop session 2",
  },
  {
    src: "/images/News-Events/Workshop%203.jpg",
    alt: "Summer bootcamp workshop session 3",
  },
  {
    src: "/images/News-Events/Workshop%204.jpg",
    alt: "Summer bootcamp workshop session 4",
  },
];

export function BootcampContent() {
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
                Summer Bootcamp
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
              src="/images/News-Events/summer%20bootcamp.jpg"
              alt="BITS College summer bootcamp workshop session"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            The experience-sharing session with Bruck Wubete provided valuable insights into his successful career
            in software engineering and data science. Currently leading the development of a platform for machine
            learning applications, he emphasized the importance of leveraging IT knowledge for professional growth.
            Bruck&rsquo;s practical advice and real-world examples inspired attendees to navigate their careers in
            technology. Overall, the session highlighted exciting opportunities in the evolving tech landscape.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workshopImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
