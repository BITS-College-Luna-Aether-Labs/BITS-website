/** Scholarship Recipients — three student cards with hover/touch overlay showing quotes and project descriptions */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const IMG = "/images/News%20&%20Events/";

const students = [
  {
    name: "Alazar Lemma",
    quote: "I've created Ensira (Let's work), a mobile app designed for college students looking for part-time work opportunities during their studies. Students can set up profiles, browse fun and engaging job listings, & apply for short-term gigs. On the flip side, companies can post job openings directly on the platform. With Ensira, I've simplified the process of balancing learning & earning for college students.",
    image: `${IMG}Alazar%20Lemma.webp`,
  },
  {
    name: "Fanuel Anteneh",
    quote: "I made a software called Circuitry which is a logic gate simulation software. It can be used to visualize and test out designs for logic circuits and integrated circuits of various complexity levels.",
    image: `${IMG}Fanuel%20Anteneh.webp`,
  },
  {
    name: "Nahom Temesgen",
    quote: "The software I developed is called Falling Sand simulation, which simulates sand and water in a compelling manner by utilizing grid of cells. The other software is a Rope simulation that behaves and interacts with its surrounding similar as the real world.",
    image: `${IMG}Nahom%20Temesgen.webp`,
  },
];

function StudentCard({ name, quote, image }: { name: string; quote: string; image: string }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched((v) => !v);
    if (!showOverlay) setShowOverlay(true);
  };

  const show = showOverlay || touched;

  return (
    <motion.article
      initial={{ y: 32, scale: 0.97 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[500px] overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      <motion.div
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => { setShowOverlay(false); setTouched(false); }}
        onTouchStart={handleTouch}
        className="absolute inset-0 flex cursor-default flex-col justify-center overflow-y-auto bg-emerald-400/95 p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight text-emerald-900">{name}</h3>
            <p className="mt-1 text-sm font-medium text-emerald-700">Scholarship Recipient</p>
          </div>
          <div className="shrink-0 rounded-full border border-emerald-700/20 bg-emerald-700/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-800 backdrop-blur-sm">
            BITS
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-emerald-800">{quote}</p>
      </motion.div>
    </motion.article>
  );
}

export function ScholarshipRecipientsContent() {
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
                Merit Based Scholarship Recipients 2023/24
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
              src="/images/News%20&%20Events/Scholarship%20Recipients.webp"
              alt="BITS College scholarship recipients group photo"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College has awarded Merit-based Scholarships to three of our outstanding students Alazar Lemma,
            Fanuel Anteneh, and Nahom Temesgen. These scholarships were generously presented by an anonymous donor
            who will cover their tuition fees for two years. We are grateful for this kind gesture and we
            congratulate our students for their achievements.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {students.map((student) => (
              <StudentCard key={student.name} {...student} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
