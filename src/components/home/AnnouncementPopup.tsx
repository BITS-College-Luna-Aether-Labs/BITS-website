"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, GraduationCap, X, PartyPopper, ScrollText } from "lucide-react";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM, SPRING_GENTLE } from "@/lib/motion-presets";

const CONFETTI_COLORS = ["#7DC243", "#d4af37", "#b48c1e", "#ffffff", "#6aad38"];

function ConfettiBurst() {
  const particles = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size: 10 + Math.random() * 18,
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 900,
      rotate: Math.random() * 1440,
      shape: (i % 6 === 0 ? "ribbon" : Math.random() > 0.5 ? "circle" : "rect") as "circle" | "rect" | "ribbon",
      delay: Math.random() * 0.8,
      duration: 2.5 + Math.random() * 2.5,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.8, 2.2] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(125,194,67,0.3)_0%,rgba(212,175,55,0.15)_40%,transparent_70%)]" />
      </motion.div>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y + (p.y > 0 ? 400 : -400),
            rotate: p.rotate,
            opacity: [1, 1, 0.6, 0],
            scale: [0, 1.3, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.15, 0.5, 0.35, 1],
          }}
        >
          <div
            className={p.shape === "circle" ? "rounded-full" : p.shape === "ribbon" ? "rounded-none" : "rounded-sm"}
            style={{
              width: p.shape === "ribbon" ? p.size * 2.5 : p.size,
              height: p.shape === "circle" ? p.size : p.shape === "ribbon" ? p.size * 0.35 : p.size * 0.6,
              backgroundColor: p.color,
              boxShadow: p.shape === "circle" ? `0 0 6px ${p.color}80` : "none",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

const POPUP_STORAGE_KEY = "bits_announcement_shown";

export function AnnouncementPopup() {
  const { enabled } = useMotionSafe();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (!alreadyShown) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      sessionStorage.setItem(POPUP_STORAGE_KEY, "1");
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="announcement-title"
          aria-describedby="announcement-subtitle"
          initial={enabled ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {enabled && <ConfettiBurst />}
          {/* Wrapper — non-overflow so the close button can sit outside the card */}
          <div className="relative inline-block">
            {/* Close button — fully outside the card,5px gap from top-right corner */}
            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute z-50 inline-flex items-center justify-center rounded-full border-2 border-bits-green bg-bits-green/10 text-white shadow-lg shadow-bits-green/30 backdrop-blur-sm hover:bg-bits-green hover:text-white dark:border-bits-green dark:bg-bits-green/20 dark:text-white dark:hover:bg-bits-green right-0 h-12 w-12 max-md:-top-[79px] max-md:-right-[16px] max-md:h-16 max-md:w-16 sm:-right-[49px] sm:-top-[64px]"
              aria-label="Close announcement"
              animate={{ backgroundColor: ["rgba(125,194,67,1)", "rgba(125,194,67,0)", "rgba(125,194,67,1)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.15 }}
            >
              <X className="h-[30px] w-[30px]" />
            </motion.button>

            <motion.div
              className="relative max-w-[400px] w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(180,140,30,0.16),transparent_30%),linear-gradient(180deg,#fbfff7,rgba(255,255,255,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.28)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(180,140,30,0.12),transparent_30%),linear-gradient(180deg,#0d120f,rgba(10,10,10,0.98))]"
              initial={enabled ? { y: 40, scale: 0.92, opacity: 0 } : false}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={enabled ? { y: 24, scale: 0.94, opacity: 0 } : undefined}
              transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            >
              <motion.div
              className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-bits-green/20 blur-3xl"
              aria-hidden="true"
              animate={enabled ? { scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] } : undefined}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-bits-gold/20 blur-3xl"
              aria-hidden="true"
              animate={enabled ? { scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] } : undefined}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-bits-green to-transparent" aria-hidden="true" />

            <div className="relative z-10 flex flex-col">
              <div className="relative flex items-center overflow-hidden px-5 pt-10 pb-5 sm:px-6 sm:pt-12">
                <motion.div
                  className="absolute left-3 top-3 text-bits-green/20 dark:text-bits-green/15"
                  aria-hidden="true"
                  animate={enabled ? { rotate: [0, 10, 0] } : undefined}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-10 w-10" />
                </motion.div>

                <div className="relative z-10 flex w-full flex-col items-center gap-2.5 text-center">
                  <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-bits-green px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-sm">
                    <GraduationCap className="h-3 w-3" />
                    Important Announcement
                  </div>

                  <motion.h2
                    id="announcement-title"
                    className="font-display text-2xl font-bold leading-[1.05] text-bits-heading sm:text-3xl dark:text-white"
                    initial={enabled ? { opacity: 0, y: 10 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                  >
                    Congratulations Class of 2026
                  </motion.h2>

                  <motion.p
                    id="announcement-subtitle"
                    className="text-base font-semibold leading-tight text-bits-text sm:text-lg dark:text-slate-200"
                    initial={enabled ? { opacity: 0, y: 10 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                  >
                    Software Engineering - First Degree<br className="hidden sm:inline" />
                    <span className="inline sm:hidden"> </span>
                     IT Management - Second Degree
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap items-center gap-2 pt-0.5"
                    initial={enabled ? { opacity: 0, y: 10 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="btn-solid-green !px-4 !py-1.5 !text-xs"
                    >
                      Close
                    </button>
                    <span className="text-xs text-bits-muted dark:text-slate-400">
                      Tap close to continue to the site.
                    </span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(125,194,67,0.16),rgba(180,140,30,0.1))] p-3.5 sm:p-4"
                initial={enabled ? { opacity: 0, y: 12 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute -right-3 -top-3 h-12 w-12 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -6, 0], scale: [1, 1.08, 1] } : undefined}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-5 bottom-5 text-white/70 pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -8, 0], rotate: [-4, 4, -4] } : undefined}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PartyPopper className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="absolute right-5 bottom-5 text-white/60 pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -8, 0], rotate: [4, -4, 4] } : undefined}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                >
                  <ScrollText className="h-4 w-4" />
                </motion.div>
                <div className="relative z-10 flex flex-col items-center gap-2.5">
                  <div className="relative h-20 w-20">
                    <Image
                      src="/images/logo.png"
                      alt=""
                      fill
                      priority
                      className="object-contain opacity-90 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                  <motion.div
                    className="rounded-xl border border-white/40 bg-white/70 px-3 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-black/30"
                    initial={enabled ? { opacity: 0, y: 8 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bits-green text-white shadow-sm shadow-bits-green/30">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bits-muted dark:text-slate-300">BITS College</p>
                        <p className="text-xs font-semibold text-bits-heading dark:text-white">Class of 2026</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}