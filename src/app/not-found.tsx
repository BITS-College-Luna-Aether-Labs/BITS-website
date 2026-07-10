"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const float = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bits-page)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-bits-green/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-bits-gold-light/10 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[80vh] max-w-lg flex-col items-center justify-center px-4 pt-20 text-center"
      >
        <motion.div variants={item} animate="animate" className="mb-10">
          <Image
            src="/images/logo.png"
            alt="BITS College"
            width={120}
            height={120}
            className="h-24 w-auto"
            priority
          />
        </motion.div>

        <motion.div variants={item} className="mb-6 flex items-center justify-center">
          <span className="text-[7rem] font-bold leading-none tracking-tight text-bits-green-dark sm:text-[9rem]">
            4
          </span>
          <motion.span
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mx-2 text-[7rem] font-bold leading-none tracking-tight text-bits-gold sm:text-[9rem]"
          >
            0
          </motion.span>
          <span className="text-[7rem] font-bold leading-none tracking-tight text-bits-green-dark sm:text-[9rem]">
            4
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
          Page Not Found
        </motion.h1>

        <motion.p variants={item} className="mt-4 max-w-md text-sm leading-relaxed text-bits-text sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-solid-green inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/college-news"
            className="btn-outline-green inline-flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            Browse News
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
