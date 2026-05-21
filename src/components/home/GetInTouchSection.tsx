"use client";

import { motion } from "framer-motion";
import { CONTACT_CARDS } from "@/lib/constants/site";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons/FeatureIcons";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_SMOOTH, DURATION } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

function ContactIcon({ type }: { type: "phone" | "location" | "email" }) {
  const className = "h-9 w-9";
  if (type === "phone") return <PhoneIcon className={className} />;
  if (type === "location") return <LocationIcon className={className} />;
  return <MailIcon className={className} />;
}

export function GetInTouchSection() {
  const { enabled } = useMotionSafe();
  const { tapSm } = useInteractionMotion();

  return (
    <section
      className="section-surface relative overflow-hidden py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        animate={enabled ? { opacity: [0.25, 0.4, 0.25] } : undefined}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,200 Q300,100 600,180 T1200,120"
            fill="none"
            stroke="#7DC243"
            strokeWidth="1.5"
            opacity="0.25"
          />
          <path
            d="M0,280 Q400,220 800,260 T1200,200"
            fill="none"
            stroke="#b48c1e"
            strokeWidth="1"
            opacity="0.12"
          />
        </svg>
      </motion.div>

      <div className="site-container relative z-10">
        <SectionReveal>
          <h2
            id="contact-heading"
            className="mb-10 text-center text-3xl font-bold text-bits-heading md:mb-14 md:text-4xl"
          >
            Get In Touch
          </h2>
        </SectionReveal>

        {enabled ? (
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {CONTACT_CARDS.map((card, index) => {
              const content = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ContactIcon type={card.type} />
                  </motion.div>
                  <p
                    className={`mt-4 text-sm font-semibold leading-snug ${
                      card.featured ? "text-white" : "text-bits-heading"
                    }`}
                  >
                    {card.value}
                  </p>
                  <p
                    className={`mt-2 text-base font-bold ${
                      card.featured ? "text-white" : "text-bits-heading"
                    }`}
                  >
                    {card.label}
                  </p>
                </>
              );

              const cardClasses = card.featured
                ? "contact-card-featured relative z-10 flex min-h-[220px] w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-bits-green px-8 py-10 text-white shadow-lg md:-my-4 md:min-h-[260px] md:w-[340px]"
                : "contact-card-side";

              const inner = card.href ? (
                <a href={card.href} className={cardClasses}>
                  {content}
                </a>
              ) : (
                <div className={cardClasses}>{content}</div>
              );

              return (
                <motion.div
                  key={`${card.type}-${card.label}`}
                  className={`flex w-full justify-center px-2 ${index === 1 ? "md:px-0" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: 28, scale: 0.94 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_SMOOTH },
                  }}
                  whileHover={{
                    y: card.featured ? -8 : -6,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={tapSm}
                >
                  {inner}
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0">
            {CONTACT_CARDS.map((card, index) => {
              const cardClasses = card.featured
                ? "contact-card-featured relative z-10 flex min-h-[220px] w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-bits-green px-8 py-10 text-white shadow-lg md:-my-4 md:min-h-[260px] md:w-[340px]"
                : "contact-card-side";
              const inner = card.href ? (
                <a href={card.href} className={cardClasses}>
                  <ContactIcon type={card.type} />
                  <p className={`mt-4 text-sm font-semibold ${card.featured ? "text-white" : "text-bits-heading"}`}>{card.value}</p>
                  <p className={`mt-2 text-base font-bold ${card.featured ? "text-white" : "text-bits-heading"}`}>{card.label}</p>
                </a>
              ) : (
                <div className={cardClasses}>
                  <ContactIcon type={card.type} />
                  <p className={`mt-4 text-sm font-semibold ${card.featured ? "text-white" : "text-bits-heading"}`}>{card.value}</p>
                  <p className={`mt-2 text-base font-bold ${card.featured ? "text-white" : "text-bits-heading"}`}>{card.label}</p>
                </div>
              );
              return (
                <div key={`${card.type}-${card.label}`} className={`flex w-full justify-center px-2 ${index === 1 ? "md:px-0" : ""}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
