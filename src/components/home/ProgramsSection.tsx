"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROGRAM_CARDS } from "@/lib/constants/site";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_SMOOTH, STAGGER_NORMAL } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

const graduateProgram = PROGRAM_CARDS[0];
const undergradPrograms = PROGRAM_CARDS.slice(1);

function ProgramCardsList() {
  return (
    <div className="mt-8 space-y-4">
      <Link href={graduateProgram.href} className="program-card block pl-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
          {graduateProgram.title}
        </h3>
        <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
      </Link>
      <div className="grid gap-4 sm:grid-cols-2">
        {undergradPrograms.map((program) => (
          <Link
            key={program.title}
            href={program.href}
            className="program-card block h-full pl-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
              {program.title}
            </h3>
            <p className="mt-1 text-sm text-bits-muted">{program.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProgramCardsAnimated() {
  const { hoverLiftSm, tapSm } = useInteractionMotion();

  return (
    <motion.div
      className="mt-8 space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 16 },
          visible: { opacity: 1, x: 0, transition: SPRING_SMOOTH },
        }}
        whileHover={hoverLiftSm}
        whileTap={tapSm}
      >
        <Link href={graduateProgram.href} className="program-card block pl-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
            {graduateProgram.title}
          </h3>
          <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
        </Link>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {undergradPrograms.map((program) => (
          <motion.div
            key={program.title}
            variants={{
              hidden: { opacity: 0, x: 16 },
              visible: { opacity: 1, x: 0, transition: SPRING_SMOOTH },
            }}
            whileHover={hoverLiftSm}
            whileTap={tapSm}
          >
            <Link href={program.href} className="program-card block h-full pl-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
                {program.title}
              </h3>
              <p className="mt-1 text-sm text-bits-muted">{program.subtitle}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ProgramsSection() {
  const { enabled } = useMotionSafe();

  return (
    <section
      className="section-surface py-14 md:py-20"
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <Image
                  src="/images/programs-student.webp"
                  alt="BITS student with backpack"
                  width={762}
                  height={1024}
                  className="relative z-10 mx-auto h-auto w-full max-w-[320px] object-contain md:max-w-[380px]"
                />
              </motion.div>
            ) : (
              <Image
                src="/images/programs-student.webp"
                alt="BITS student with backpack"
                width={762}
                height={1024}
                className="relative z-10 mx-auto h-auto w-full max-w-[320px] object-contain md:max-w-[380px]"
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
            {enabled ? <ProgramCardsAnimated /> : <ProgramCardsList />}
          </div>
        </div>
      </div>
    </section>
  );
}
