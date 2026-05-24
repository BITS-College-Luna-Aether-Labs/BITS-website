"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE_PREMIUM } from "@/lib/motion-presets";

type Partner = {
  name: string;
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: "MKS Addis",
    href: "https://mksaddis.com",
    logo: "/images/About%5Cpartner/Mk%20Adiss%20Logo.png",
  },
  {
    name: "Bunna Bank",
    href: "https://bunnabanksc.com",
    logo: "/images/About%5Cpartner/Buna%20Bank%20Logo.png",
  },
  {
    name: "Serianu",
    href: "https://serianu.com",
    logo: "/images/About%5Cpartner/serianu-logoo.png",
  },
  {
    name: "British Council",
    href: "https://ethiopia.britishcouncil.org",
    logo: "/images/About%5Cpartner/British%20Council%20logo.jpg",
  },
];

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  return (
    <motion.a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: EASE_PREMIUM }}
      className="group relative flex flex-col items-center overflow-hidden rounded-[26px] border border-emerald-900/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,247,0.96))] p-8 shadow-[0_16px_38px_rgba(10,41,18,0.08)] transition-all duration-200 hover:-translate-y-1.5 hover:border-emerald-900/24 hover:shadow-[0_22px_52px_rgba(10,41,18,0.13)]"
    >
      <div className="absolute inset-auto -bottom-7 -right-[18px] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(125,194,67,0.12),transparent_68%)] pointer-events-none" />
      <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white p-4 shadow-sm">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={120}
          height={120}
          className="h-auto w-full object-contain"
        />
      </div>
    </motion.a>
  );
}

export function PartnersAndClientsContent() {
  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(125,194,67,0.08),transparent_36%),linear-gradient(180deg,#fcfdfc,var(--bits-surface-muted))]">
      <section className="mx-auto max-w-site px-4 pt-28 pb-[42px] sm:px-6 lg:px-8 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
            Partners & Clients
          </h1>
        </motion.div>
      </section>

      <section className="mx-auto max-w-site px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="m-0 text-[1.15rem] font-semibold uppercase tracking-[0.08em] text-bits-green-dark">
            Featured Partners
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-900/34 to-transparent" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>

      </section>
    </div>
  );
}
