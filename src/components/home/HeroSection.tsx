"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { APPLY_URL } from "@/lib/constants/navigation";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { DURATION, EASE_OUT } from "@/lib/motion-presets";
import { WaveDivider } from "@/components/ui/WaveDivider";

function HeroContent({ animate }: { animate?: boolean }) {
  const { hoverScaleSm, tapSm, on } = useInteractionMotion();
  const Cta = animate ? motion.a : "a";

  return (
    <>
      <div className="relative inline-block">
        <h1
          id="hero-heading"
          className="text-4xl font-bold leading-tight text-bits-heading sm:text-5xl md:text-[3.25rem]"
        >
          <span className="block">Join the</span>
          <span className="block">Vision</span>
        </h1>
        {/* Subtle accent underline on heading */}
        {animate && on && (
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-bits-green to-bits-gold/0"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60px", opacity: 0.6 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        )}
      </div>
      <p className="mt-5 text-base leading-relaxed text-bits-muted md:text-lg">
        BITS offers well-designed academic programs in software engineering and IT
        Management. We provide world-class education facilities, and use
        cutting-edge technology to realize our educational vision.
      </p>
      <Cta
        href={APPLY_URL}
        className="btn-solid-green mt-8 inline-flex relative overflow-hidden"
        target="_blank"
        rel="noopener noreferrer"
        {...(animate
          ? {
              whileHover: hoverScaleSm,
              whileTap: tapSm,
              transition: { duration: DURATION.fast },
            }
          : {})}
      >
        Apply Now
      </Cta>
    </>
  );
}

function HeroImage({ animate }: { animate?: boolean }) {
  const Blob = animate ? motion.div : "div";

  return (
    <>
      <Blob
        className="absolute right-4 top-8 h-64 w-64 rounded-full bg-bits-green/25 blur-sm md:h-80 md:w-80 lg:right-12 lg:top-4"
        aria-hidden="true"
        {...(animate
          ? {
              animate: { scale: [1, 1.05, 1], opacity: [0.25, 0.35, 0.25] },
              transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      />
      <Blob
        className="absolute right-16 top-20 h-40 w-40 rounded-full bg-bits-green/15 md:h-52 md:w-52"
        aria-hidden="true"
        {...(animate
          ? {
              animate: { scale: [1, 1.06, 1] },
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }
          : {})}
      />
      <Image
        src="/images/hero-student.webp"
        alt="BITS student holding Software Architecture in Practice textbook"
        width={550}
        height={1088}
        priority
        className="relative z-10 h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px]"
      />
    </>
  );
}

export function HeroSection() {
  const { enabled } = useMotionSafe();

  return (
    <section
      className="section-surface-muted relative overflow-hidden pt-[64px] md:pt-[72px] lg:pt-[76px]"
      aria-labelledby="hero-heading"
    >
      <div className="site-container relative pb-8 pt-10 md:pb-12 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {enabled ? (
            <motion.div
              className="z-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE_OUT }}
            >
              <HeroContent animate />
            </motion.div>
          ) : (
            <div className="z-10 max-w-xl">
              <HeroContent />
            </div>
          )}

          {enabled ? (
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: DURATION.slow, delay: 0.12, ease: EASE_OUT }}
            >
              <HeroImage animate />
            </motion.div>
          ) : (
            <div className="relative flex justify-center lg:justify-end">
              <HeroImage />
            </div>
          )}
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}
