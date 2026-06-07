"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, EASE_PREMIUM, SPRING_HOVER } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function AnnouncementSection() {
  const { enabled } = useMotionSafe();
  const { tapSm } = useInteractionMotion();

  return (
    <section className="section-surface py-12 md:py-16" aria-label="College announcement">
      <SectionReveal className="flex justify-center px-4 sm:px-6 lg:px-8">
        {enabled ? (
          <motion.div
            className="gpu w-full max-w-sm"
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
            <Image
              src="/images/announcement.png"
              alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
              width={498}
              height={461}
              className="h-auto w-full rounded-lg object-contain"
            />
          </motion.div>
        ) : (
          <div className="w-full max-w-sm">
            <Image
              src="/images/announcement.png"
              alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
              width={498}
              height={461}
              className="h-auto w-full object-contain"
            />
          </div>
        )}
      </SectionReveal>
    </section>
  );
}
