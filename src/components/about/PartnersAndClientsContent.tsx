/** Partners & Clients — hero banner + partner cards with hover overlay */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { ExternalLink, Handshake } from "lucide-react";

type Partner = {
  name: string;
  href: string;
  logo: string;
  description: string;
  tag: string;
};

const partners: Partner[] = [
  {
    name: "MKS Addis",
    href: "https://mksaddis.com",
    logo: "/images/About-partner/Mk%20Adiss%20Logo.png",
    description: "Software Development Company",
    tag: "Technology",
  },
  {
    name: "Bunna Bank",
    href: "https://bunnabanksc.com",
    logo: "/images/About-partner/Buna%20Bank%20Logo.png",
    description: "Industry Partner",
    tag: "Finance",
  },
  {
    name: "Serianu",
    href: "https://serianu.com",
    logo: "/images/About-partner/serianu-logoo.png",
    description: "Cyber Security Company",
    tag: "Security",
  },
  {
    name: "Custor",
    href: "https://custor-eth.com/",
    logo: "/images/About-partner/custor.gif",
    description: "Software Development Company",
    tag: "Technology",
  },
  {
    name: "USI",
    href: "https://usiafrica.com/",
    logo: "/images/About-partner/USI-Logi.png",
    description: "Information Technology and System Company",
    tag: "IT Services",
  },
];

function PartnerCard({ partner, index, enabled }: { partner: Partner; index: number; enabled: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isGif = partner.logo.toLowerCase().endsWith(".gif");

  return (
    <motion.a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      {...(enabled
        ? {
            initial: { opacity: 1, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: index * 0.07, duration: 0.45, ease: EASE_PREMIUM },
          }
        : {})}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_8px_32px_rgba(16,24,40,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-bits-green/30 hover:shadow-[0_24px_56px_rgba(16,24,40,0.13)] dark:border-gray-800 dark:hover:border-bits-green/30"
    >
      {/* Tag */}
      <div className="absolute left-4 top-4 z-10 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-bits-green-dark backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
        {partner.tag}
      </div>

      {/* Logo area */}
      <div className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-50/60 to-white p-8 dark:from-gray-900 dark:to-gray-800">
        <div className="flex h-24 w-40 items-center justify-center dark:rounded-xl dark:bg-white/90 dark:p-2">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            sizes="160px"
            loading={index < 2 ? "eager" : "lazy"}
            unoptimized={isGif}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between border-t border-emerald-900/8 p-6 dark:border-gray-700">
        <div>
          <h3 className="text-lg font-semibold text-bits-heading">{partner.name}</h3>
          <p className="mt-1 text-sm leading-6 text-bits-text">{partner.description}</p>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-bits-green-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Visit Website
          <ExternalLink className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-bits-green/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.a>
  );
}

export function PartnersAndClientsContent() {
  const { enabled } = useMotionSafe();

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)] dark:from-gray-900 dark:to-black">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl dark:bg-bits-green/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl dark:bg-bits-green-dark/10" />
        <div className="relative mx-auto max-w-site px-4 pb-14 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm dark:border-gray-700">
              <Handshake className="h-4 w-4" />
              About BITS
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Partners &amp; Clients
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-bits-text">
              We collaborate with leading organizations across technology, finance, and security to deliver real-world impact and industry-aligned education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-bits-green-dark dark:text-bits-green">
            Featured Partners
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-900/20 to-transparent dark:from-bits-green/20" aria-hidden="true" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} enabled={enabled} />
          ))}
        </div>
      </section>
    </div>
  );
}
