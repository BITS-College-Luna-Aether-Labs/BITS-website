"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { DURATION, EASE_OUT } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function AnnouncementSection() {
  const { enabled } = useMotionSafe();
  const { hoverScaleSm, tapSm } = useInteractionMotion();

  return (
    <section className="section-surface py-10 md:py-14" aria-label="College announcement">
      <SectionReveal className="site-container flex justify-center">
        {enabled ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: DURATION.normal, ease: EASE_OUT }}
            whileHover={hoverScaleSm}
            whileTap={tapSm}
          >
            <Image
              src="/images/announcement.png"
              alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
              width={498}
              height={461}
              className="h-auto w-full max-w-lg object-contain md:max-w-xl"
            />
          </motion.div>
        ) : (
          <Image
            src="/images/announcement.png"
            alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
            width={498}
            height={461}
            className="h-auto w-full max-w-lg object-contain md:max-w-xl"
          />
        )}
      </SectionReveal>
    </section>
  );
}
