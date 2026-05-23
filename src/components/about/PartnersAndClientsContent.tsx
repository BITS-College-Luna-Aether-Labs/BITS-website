"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM, SPRING_GENTLE } from "@/lib/motion-presets";

type Partner = {
  name: string;
  label: string;
  blurb: string;
  href: string;
};

const partners: Partner[] = [
  {
    name: "MKS Addis",
    label: "mksaddis.com",
    blurb: "Industry-facing collaboration and community engagement.",
    href: "#",
  },
  {
    name: "Bunna Bank",
    label: "bunnabanksc.com",
    blurb: "Financial-sector relationship and institutional support.",
    href: "#",
  },
  {
    name: "Serianu",
    label: "serianu.com",
    blurb: "Digital security, consulting, and technology alignment.",
    href: "#",
  },
  {
    name: "British Council",
    label: "ethiopia.britishcouncil.org",
    blurb: "Academic and cultural partnership ecosystem.",
    href: "#",
  },
];

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
      className="rounded-[22px] border border-emerald-900/14 bg-[var(--bits-surface)]/82 p-[18px] shadow-[0_12px_30px_rgba(15,47,24,0.06)] backdrop-blur"
    >
      <p className="text-2xl font-extrabold text-bits-green-dark">{value}</p>
      <p className="mt-1 text-[15px] text-bits-muted">{title}</p>
    </motion.div>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const initial = partner.name
    .split(" ")
    .map((chunk) => chunk[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.a
      href={partner.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: EASE_PREMIUM }}
      className="group relative overflow-hidden rounded-[26px] border border-emerald-900/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,250,247,0.96))] p-[22px] shadow-[0_16px_38px_rgba(10,41,18,0.08)] transition-all duration-200 hover:-translate-y-1.5 hover:border-emerald-900/24 hover:shadow-[0_22px_52px_rgba(10,41,18,0.13)]"
    >
      <div className="absolute inset-auto -bottom-7 -right-[18px] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(125,194,67,0.12),transparent_68%)] pointer-events-none" />
      <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[18px] bg-gradient-to-br from-bits-green to-[#45995f] font-extrabold text-white shadow-[0_14px_24px_rgba(125,194,67,0.2)]">
        {initial}
      </div>
      <p className="mt-4 text-xl font-extrabold text-bits-green-dark">{partner.name}</p>
      <p className="mt-1 font-semibold text-bits-muted">{partner.label}</p>
      <p className="mt-3.5 max-w-[36ch] leading-[1.7] text-[#476052]">{partner.blurb}</p>
    </motion.a>
  );
}

export function PartnersAndClientsContent() {
  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(125,194,67,0.08),transparent_36%),linear-gradient(180deg,#fcfdfc,var(--bits-surface-muted))]">
      <section className="mx-auto max-w-site px-4 pt-[78px] pb-[42px] sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute top-5 right-[-30px] h-[220px] w-[220px] rounded-full bg-emerald-900/10 blur-xl pointer-events-none animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[10px] left-[-20px] h-[160px] w-[160px] rounded-full bg-emerald-900/8 blur-xl pointer-events-none animate-[float_12s_ease-in-out_infinite_reverse]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
              Partners & Clients
            </h1>
            <p className="mt-[18px] max-w-[780px] text-[1.02rem] leading-[1.85] text-[#4f6557]">
              BITS College presents its collaboration ecosystem through a compact
              institutional layout: a single heading, a partner showcase area, and
              the same green-forward brand identity used across the rest of the
              site.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
              <MiniStat title="Partnerships" value="4+" />
              <MiniStat title="Institutional tone" value="Formal" />
              <MiniStat title="Visual identity" value="Green / Gray" />
            </div>
          </motion.div>
        </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          className="mt-7 rounded-[28px] bg-gradient-to-br from-bits-green/95 to-[rgba(18,84,44,0.96)] p-7 text-white shadow-[0_18px_50px_rgba(15,47,24,0.12)]"
        >
          <h3 className="text-[1.35rem] font-semibold tracking-tight">from collecting . . . to connecting . . .</h3>
          <p className="mt-2 leading-[1.7] text-white/86">
            The original page uses this line as a concise institutional bridge
            between outreach and partnership. The recreated layout keeps it as
            the closing message in the same position.
          </p>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}
