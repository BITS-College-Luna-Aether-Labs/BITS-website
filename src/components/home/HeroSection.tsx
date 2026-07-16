/** Hero — main CTA section with animated content, floating blob effects, and wave divider */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { APPLY_URL } from "@/lib/constants/navigation";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM, SPRING_GENTLE } from "@/lib/motion-presets";
import { WaveDivider } from "@/components/ui/WaveDivider";

function HeroContent({ animate }: { animate?: boolean }) {
  const { hoverScaleSm, tapSm, on } = useInteractionMotion();
  const Cta = animate ? motion.a : "a";

  return (
    <>
      <div className="relative inline-block">
        <h1
          id="hero-heading"
          className="font-display text-4xl font-bold leading-tight text-bits-heading sm:text-5xl md:text-[3.25rem]"
        >
          <span className="block">Join the</span>
          <span className="block">Vision</span>
        </h1>
        {animate && on && (
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-bits-green to-bits-gold/0"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60px", opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE_PREMIUM }}
          />
        )}
      </div>
      <p className="mt-5 text-base leading-relaxed text-bits-muted md:text-lg">
        BITS offers well-designed academic programs in software engineering and IT
        Management. We provide world-class education facilities, and use
        cutting-edge technology to realize our educational vision.
      </p>
      {animate ? (
        <motion.a
          href={APPLY_URL}
          className="btn-solid-green mt-8 inline-flex relative overflow-hidden !px-10 !py-4 !text-xl"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
        >
          Apply Now
        </motion.a>
      ) : (
        <a
          href={APPLY_URL}
          className="btn-solid-green mt-8 inline-flex relative overflow-hidden !px-10 !py-4 !text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      )}
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
              animate: { scale: [1, 1.06, 1, 0.98, 1], opacity: [0.25, 0.35, 0.2, 0.3, 0.25] },
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      />
      <Blob
        className="absolute right-16 top-20 h-40 w-40 rounded-full bg-bits-green/15 md:h-52 md:w-52"
        aria-hidden="true"
        {...(animate
          ? {
              animate: { scale: [1, 1.08, 0.96, 1.04, 1] },
              transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }
          : {})}
      />
      <motion.div
        className="relative z-10"
        {...(animate
          ? {
              animate: { y: [0, -4, 0] },
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      >
        <Image
          src="/images/hero-landingpage.png"
          alt="BITS College landing page hero"
          width={550}
          height={1088}
          priority
          className="h-auto w-full max-w-[157px] object-contain sm:max-w-[190px] md:max-w-[224px] lg:max-w-[246px]" style={{ transform: "scaleX(1.8432)" }}
        />
      </motion.div>
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
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          {enabled ? (
            <motion.div
              className="z-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_GENTLE, delay: 0.1 }}
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
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...SPRING_GENTLE, delay: 0.25 }}
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
