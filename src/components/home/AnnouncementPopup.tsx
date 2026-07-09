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

let shownDuringSession = false;

export function AnnouncementPopup() {
  const { enabled } = useMotionSafe();
  const [open, setOpen] = useState(!shownDuringSession);

  useEffect(() => {
    shownDuringSession = true;
  }, []);

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
          <motion.div
            className="relative max-w-xl w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(180,140,30,0.16),transparent_30%),linear-gradient(180deg,#fbfff7,rgba(255,255,255,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.28)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(180,140,30,0.12),transparent_30%),linear-gradient(180deg,#0d120f,rgba(10,10,10,0.98))]"
            initial={enabled ? { y: 40, scale: 0.92, opacity: 0 } : false}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={enabled ? { y: 24, scale: 0.94, opacity: 0 } : undefined}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
          >
            <motion.div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-bits-green/20 blur-3xl"
              aria-hidden="true"
              animate={enabled ? { scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] } : undefined}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-bits-gold/20 blur-3xl"
              aria-hidden="true"
              animate={enabled ? { scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] } : undefined}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-bits-green to-transparent" aria-hidden="true" />

            <div className="absolute right-3 top-3 z-30">
              {enabled && (
                <>
                  <motion.div
                    className="absolute -inset-4 rounded-full ring-2 ring-bits-green/50"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -inset-8 rounded-full ring-1 ring-bits-green/30"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#7DC243" : "#d4af37",
                        top: `${20 + Math.sin(i * 1.05) * 28}px`,
                        left: `${20 + Math.cos(i * 1.05) * 28}px`,
                      }}
                      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], y: [0, -20, -40] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
                    />
                  ))}
                </>
              )}
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-bits-green bg-bits-green/10 text-bits-heading shadow-lg shadow-bits-green/30 backdrop-blur-sm hover:bg-bits-green hover:text-white dark:border-bits-green dark:bg-bits-green/20 dark:text-white dark:hover:bg-bits-green"
                aria-label="Close announcement"
                animate={{ backgroundColor: ["rgba(125,194,67,0.1)", "rgba(125,194,67,0.35)", "rgba(125,194,67,0.1)"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.15 }}
              >
                <X className="h-7 w-7" />
              </motion.button>
            </div>

            {enabled && <ConfettiBurst />}
            <div className="relative z-10 flex flex-col">
              <div className="relative flex items-center overflow-hidden px-6 pt-16 pb-8 sm:px-8 sm:pt-20">
                <motion.div
                  className="absolute left-4 top-4 text-bits-green/20 dark:text-bits-green/15"
                  aria-hidden="true"
                  animate={enabled ? { rotate: [0, 10, 0] } : undefined}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-16 w-16" />
                </motion.div>

                <div className="relative z-10 flex w-full flex-col items-center gap-4 text-center">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-bits-green px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white shadow-sm">
                    <GraduationCap className="h-4 w-4" />
                    Important Announcement
                  </div>

                  <motion.h2
                    id="announcement-title"
                    className="font-display text-4xl font-bold leading-[1.02] text-bits-heading sm:text-5xl lg:text-6xl dark:text-white"
                    initial={enabled ? { opacity: 0, y: 14 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                  >
                    Congratulations Class of 2026
                  </motion.h2>

                  <motion.p
                    id="announcement-subtitle"
                    className="text-2xl font-semibold leading-tight text-bits-text sm:text-3xl dark:text-slate-200"
                    initial={enabled ? { opacity: 0, y: 12 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                  >
                    Software Engineering - First Degree<br className="hidden sm:inline" />
                    <span className="inline sm:hidden"> </span>
                     IT Management - Second Degree
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap items-center gap-3 pt-1"
                    initial={enabled ? { opacity: 0, y: 12 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="btn-solid-green"
                    >
                      Close
                    </button>
                    <span className="text-sm text-bits-muted dark:text-slate-400">
                      Tap close to continue to the site.
                    </span>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(125,194,67,0.16),rgba(180,140,30,0.1))] p-5 sm:p-6"
                initial={enabled ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -6, 0], scale: [1, 1.08, 1] } : undefined}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-6 bottom-6 text-white/70 pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -8, 0], rotate: [-4, 4, -4] } : undefined}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PartyPopper className="h-5 w-5" />
                </motion.div>
                <motion.div
                  className="absolute right-6 bottom-6 text-white/60 pointer-events-none"
                  aria-hidden="true"
                  animate={enabled ? { y: [0, -8, 0], rotate: [4, -4, 4] } : undefined}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                >
                  <ScrollText className="h-5 w-5" />
                </motion.div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="relative h-28 w-28">
                    <Image
                      src="/images/logo.png"
                      alt=""
                      fill
                      priority
                      className="object-contain opacity-90 drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                  <motion.div
                    className="rounded-2xl border border-white/40 bg-white/70 px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md dark:bg-black/30"
                    initial={enabled ? { opacity: 0, y: 10 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bits-green text-white shadow-sm shadow-bits-green/30">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bits-muted dark:text-slate-300">BITS College</p>
                        <p className="text-sm font-semibold text-bits-heading dark:text-white">Class of 2026</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}