"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHY_BITS_CARDS } from "@/lib/constants/site";
import { FeatureIcon } from "@/components/icons/FeatureIcons";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, SPRING_HOVER, STAGGER_FAST } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function WhyBitsSection() {
  const { enabled } = useMotionSafe();
  const { on, tapSm } = useInteractionMotion();

  return (
    <section
      className="section-surface relative overflow-hidden py-8 md:py-12"
      aria-labelledby="why-bits-heading"
    >
      <WaveDivider flip />
      <div className="site-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionReveal className="relative">
            <motion.div
              className="pointer-events-none absolute -left-8 -top-8 h-[120%] w-[110%] opacity-90"
              aria-hidden="true"
              animate={enabled ? { x: [0, 8, 2, 6, 0] } : undefined}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full text-bits-green/30 dark:text-bits-green/20"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,200 Q100,50 200,150 T400,100 L400,400 L0,400 Z"
                />
              </svg>
            </motion.div>
            <div className="relative z-10 max-w-lg">
              <h2
                id="why-bits-heading"
                className="text-3xl font-bold text-bits-heading md:text-4xl"
              >
                Why BITS?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-bits-muted">
                Our faculty at BITS is talented and of the highest caliber, but we
                also provide more. Our institution offers more than simply
                instruction, it also gives our students a secure setting in which
                they can reach, grow, and make the most of their full potential.
              </p>
              <Link href="/who-we-are" className="btn-solid-green mt-6 inline-flex">
                Learn More
              </Link>
            </div>
          </SectionReveal>

          {enabled ? (
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: STAGGER_FAST },
              }}
            >
              {WHY_BITS_CARDS.map((card) => (
                <motion.article
                  key={card.title}
                  className="feature-card gpu"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_GENTLE },
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "var(--shadow-card-hover-rise)",
                    transition: SPRING_HOVER,
                  }}
                  whileTap={tapSm}
                >
                  <motion.div
                    className="text-bits-green"
                    whileHover={on ? { scale: 1.15, transition: SPRING_HOVER } : undefined}
                  >
                    <FeatureIcon name={card.icon} />
                  </motion.div>
                  <h3 className="mt-4 text-center text-sm font-bold leading-snug text-bits-heading">
                    {card.title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {WHY_BITS_CARDS.map((card) => (
                <article key={card.title} className="feature-card feature-card-fallback">
                  <FeatureIcon name={card.icon} />
                  <h3 className="mt-4 text-center text-sm font-bold leading-snug text-bits-heading">
                    {card.title}
                  </h3>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
