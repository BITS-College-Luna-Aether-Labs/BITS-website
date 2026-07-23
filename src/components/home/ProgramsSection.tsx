/** Programs — graduate program card with staggered entrance and fallback static variant */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROGRAM_CARDS } from "@/lib/constants/site";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, SPRING_HOVER, EASE_PREMIUM } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

const graduateProgram = PROGRAM_CARDS[0];

function ProgramCardFallback() {
  return (
    <div className="mt-8 space-y-4">
      <Link href={graduateProgram.href} className="program-card program-card-fallback block pl-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
          {graduateProgram.title}
        </h3>
        <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
      </Link>
    </div>
  );
}

function ProgramCardAnimated() {
  const { tapSm } = useInteractionMotion();

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, x: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
    >
      <motion.div
        className="program-card gpu block pl-6"
        whileHover={{
          y: -4,
          boxShadow: "var(--shadow-card-hover-rise)",
          transition: SPRING_HOVER,
        }}
        whileTap={tapSm}
      >
        <Link href={graduateProgram.href} className="block">
          <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
            {graduateProgram.title}
          </h3>
          <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function ProgramsSection() {
  const { enabled } = useMotionSafe();

  return (
    <section
      className="section-surface py-8 md:py-12"
      aria-labelledby="programs-heading"
    >
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionReveal className="relative order-2 lg:order-1">
            <div
              className="absolute -left-4 top-8 h-56 w-56 rounded-full bg-bits-green/20 md:h-72 md:w-72"
              aria-hidden="true"
            />
            {enabled ? (
              <motion.div
                initial={{ opacity: 0, x: -24, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
              >
                <Image
                  src="/images/programs-student.webp"
                  alt="BITS student with backpack"
                  width={762}
                  height={1024}
                  priority
                  className="relative z-10 mx-auto h-auto w-full max-w-[640px] object-contain md:max-w-[760px]"
                />
              </motion.div>
            ) : (
              <Image
                src="/images/programs-student.webp"
                alt="BITS student with backpack"
                width={762}
                height={1024}
                priority
                className="relative z-10 mx-auto h-auto w-full max-w-[640px] object-contain md:max-w-[760px]"
              />
            )}
          </SectionReveal>

          <div className="order-1 lg:order-2">
            <SectionReveal>
              <h2
                id="programs-heading"
                className="text-3xl font-bold text-bits-heading md:text-4xl"
              >
                Our Programs
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-bits-muted">
                Our programs challenge students to solve problems and understand
                which problems are important by emphasizing fundamental
                principles with their connections to society.
              </p>
            </SectionReveal>
            {enabled ? <ProgramCardAnimated /> : <ProgramCardFallback />}
          </div>
        </div>
      </div>
    </section>
  );
}
