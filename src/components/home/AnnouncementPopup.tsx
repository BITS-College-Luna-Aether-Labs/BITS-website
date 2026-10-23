"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, GraduationCap, X } from "lucide-react";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM, SPRING_GENTLE } from "@/lib/motion-presets";

const CONFETTI_COLORS = ["#7DC243", "#d4af37", "#b48c1e", "#ffffff", "#6aad38"];

function ConfettiBurst() {
  const particles = useMemo(() =>
    Array.from({ length: 28 }, (_, i) => ({
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

const POPUP_STORAGE_KEY = "bits_announcement_v2";

export function AnnouncementPopup() {
  const { enabled } = useMotionSafe();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (alreadyShown) return;

    // Defer until after first paint / idle so popup JS does not compete with LCP
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const show = () => setOpen(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(show, { timeout: 2800 });
    } else {
      timeoutId = setTimeout(show, 1800);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
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
          <div className="relative w-[92vw] max-w-[440px]">
            {/* Close button */}
            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-3 -top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-bits-green bg-white text-bits-green shadow-lg shadow-bits-green/30 hover:bg-bits-green hover:text-white dark:bg-gray-900 dark:text-bits-green dark:hover:bg-bits-green dark:hover:text-white sm:-right-5 sm:-top-5"
              aria-label="Close announcement"
              whileHover={{ scale: 1.15 }}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.28)] dark:border-white/10 dark:bg-gray-950"
              initial={enabled ? { y: 40, scale: 0.92, opacity: 0 } : false}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={enabled ? { y: 24, scale: 0.94, opacity: 0 } : undefined}
              transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            >
              {/* Top green accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-bits-green to-transparent" aria-hidden="true" />

              {/* Title + subtitle */}
              <div className="relative flex flex-col items-center gap-2 px-6 pb-4 pt-6 text-center sm:px-8 sm:pt-8">
                <motion.div
                  className="absolute left-3 top-3 text-bits-green/15"
                  aria-hidden="true"
                  animate={enabled ? { rotate: [0, 10, 0] } : undefined}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-8 w-8" />
                </motion.div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-bits-green px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow-sm">
                  <GraduationCap className="h-3 w-3" />
                  Important Announcement
                </div>

                <motion.h2
                  id="announcement-title"
                  className="text-xl font-bold leading-tight text-bits-heading dark:text-white sm:text-2xl"
                  initial={enabled ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                >
                  Short-Term Training 2026
                </motion.h2>

                <motion.p
                  id="announcement-subtitle"
                  className="text-sm leading-6 text-bits-text dark:text-slate-300"
                  initial={enabled ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
                >
                  We are starting Short-Term Training 2026
                </motion.p>
              </div>

              {/* Image — full width, no padding */}
              <motion.div
                className="relative w-full overflow-hidden"
                initial={enabled ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
              >
                <Image
                  src="/images/Pop-up card.jpeg"
                  alt="Short-Term Training 2026"
                  width={440}
                  height={300}
                  priority
                  className="w-full object-cover"
                />
              </motion.div>

              {/* Learn More — at the bottom */}
              <motion.div
                className="flex flex-col items-center gap-2 px-6 py-6 sm:px-8"
                initial={enabled ? { opacity: 0, y: 8 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="/short-term-trainings"
                  onClick={() => setOpen(false)}
                  className="btn-solid-green inline-flex w-full items-center justify-center !px-8 !py-3.5 !text-base font-bold shadow-lg shadow-bits-green/25 transition-transform hover:scale-105 active:scale-95"
                >
                  Learn More
                </Link>
                <span className="text-xs text-bits-muted dark:text-slate-400">
                  Explore our beginner and advanced tracks.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
