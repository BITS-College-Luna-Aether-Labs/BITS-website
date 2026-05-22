"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SPRING_GENTLE } from "@/lib/motion-presets";

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--bits-page)] pt-[72px] lg:pt-[80px]">
      <motion.div
        className="site-container py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <SectionReveal>
          <h1 className="text-3xl font-bold text-bits-heading md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-bits-muted">
              {description}
            </p>
          )}
        </SectionReveal>
        {children && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_GENTLE, delay: 0.15 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
