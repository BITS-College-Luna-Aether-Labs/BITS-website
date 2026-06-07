"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionSafe } from "@/hooks/useMotionSafe";
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
    logo: "/images/About-partner/Mk%20Adiss%20Logo.png",
  },
  {
    name: "Bunna Bank",
    href: "https://bunnabanksc.com",
    logo: "/images/About-partner/Buna%20Bank%20Logo.png",
  },
  {
    name: "Serianu",
    href: "https://serianu.com",
    logo: "/images/About-partner/serianu-logoo.png",
  },
  {
    name: "British Council",
    href: "https://ethiopia.britishcouncil.org",
    logo: "/images/About-partner/British%20Council%20logo.jpg",
  },
];

function PartnerCard({ partner, index, enabled }: { partner: Partner; index: number; enabled: boolean }) {
  const Card = enabled ? motion.a : "a";

  return (
    <Card
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      {...(enabled ? {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.09, duration: 0.55, ease: EASE_PREMIUM },
      } : {})}
      className="group relative flex flex-col items-center overflow-hidden rounded-[26px] border border-emerald-900/12 bg-[var(--bits-surface)] p-8 shadow-[0_16px_38px_rgba(10,41,18,0.08)] transition-all duration-200 hover:-translate-y-1.5 hover:border-emerald-900/24 hover:shadow-[0_22px_52px_rgba(10,41,18,0.13)] dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
    >
      <div className="absolute inset-auto -bottom-7 -right-[18px] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(125,194,67,0.12),transparent_68%)] pointer-events-none dark:opacity-30" />
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden sm:h-32 sm:w-32">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={120}
          height={120}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="mt-6 text-sm font-semibold text-bits-heading">
        {partner.name}
      </span>
    </Card>
  );
}

export function PartnersAndClientsContent() {
  const { enabled } = useMotionSafe();

  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(125,194,67,0.08),transparent_36%),linear-gradient(180deg,#fcfdfc,var(--bits-surface-muted))] dark:bg-gray-950">
      <section className="mx-auto max-w-site px-4 pt-28 pb-[42px] sm:px-6 lg:px-8 lg:pt-32">
        {enabled ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
              Partners & Clients
            </h1>
          </motion.div>
        ) : (
          <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
            Partners & Clients
          </h1>
        )}
      </section>

      <section className="mx-auto max-w-site px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="m-0 text-[1.15rem] font-semibold uppercase tracking-[0.08em] text-bits-green-dark dark:text-bits-green">
            Featured Partners
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-900/34 to-transparent dark:from-bits-green/30 dark:to-transparent" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} enabled={enabled} />
          ))}
        </div>
      </section>
    </div>
  );
}
