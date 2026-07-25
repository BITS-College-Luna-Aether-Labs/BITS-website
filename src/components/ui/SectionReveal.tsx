/** Scroll-triggered entrance animation wrapper — skips animation when motion is disabled */
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, EASE_PREMIUM } from "@/lib/motion-presets";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  withAccent?: boolean;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  withAccent = false,
}: SectionRevealProps) {
  const { enabled } = useMotionSafe();

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...SPRING_GENTLE, delay, ease: EASE_PREMIUM }}
    >
      {withAccent ? (
        <motion.div
          initial={{ boxShadow: "0 0 0 0 rgba(125, 194, 67, 0.3)" }}
          whileInView={{
            boxShadow: [
              "0 0 0 0 rgba(125, 194, 67, 0.3)",
              "0 0 12px 6px rgba(125, 194, 67, 0.2)",
              "0 0 0 0 rgba(125, 194, 67, 0)",
            ],
          }}
          transition={{ delay: delay + 0.3, duration: 0.55 }}
          style={{ borderRadius: "inherit" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
