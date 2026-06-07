"use client";

import { motion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, EASE_PREMIUM, SPRING_HOVER } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Megaphone } from "lucide-react";

export function AnnouncementSection() {
  const { enabled } = useMotionSafe();
  const { tapSm } = useInteractionMotion();

  const announcementContent = (
    <div className="w-full max-w-sm rounded-xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-lime-50 p-6 text-center shadow-lg dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bits-green/10">
        <Megaphone className="h-6 w-6 text-bits-green-dark" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-bits-green-dark">
        Great News!
      </p>
      <h2 className="mt-3 text-xl font-bold leading-snug text-bits-heading">
        BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination
      </h2>
      <div className="mt-5 inline-block rounded-full bg-bits-green-dark px-5 py-1.5 text-xs font-bold text-white">
        100% Pass Rate
      </div>
    </div>
  );

  return (
    <section className="section-surface py-12 md:py-16" aria-label="College announcement">
      <SectionReveal className="flex justify-center px-4 sm:px-6 lg:px-8">
        {enabled ? (
          <motion.div
            className="gpu"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            whileHover={{
              scale: 1.02,
              boxShadow: "var(--shadow-card-hover-announce)",
              transition: SPRING_HOVER,
            }}
            whileTap={tapSm}
          >
            {announcementContent}
          </motion.div>
        ) : (
          announcementContent
        )}
      </SectionReveal>
    </section>
  );
}
