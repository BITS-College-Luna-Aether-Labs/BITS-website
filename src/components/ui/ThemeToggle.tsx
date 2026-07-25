/** Dark/light toggle button — animated icon swap with spring physics */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SPRING_HOVER } from "@/lib/motion-presets";

function MoonIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolved, setTheme } = useTheme();
  const shouldReduce = useReducedMotion();
  const isDark = resolved === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-bits-gray transition-colors hover:border-bits-green hover:text-bits-green dark:border-gray-600 dark:text-gray-300 dark:hover:border-bits-green dark:hover:text-bits-green"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={shouldReduce ? undefined : { scale: 0.92 }}
      whileHover={shouldReduce ? undefined : { scale: 1.06, transition: SPRING_HOVER }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        {...(shouldReduce
          ? {}
          : {
              initial: false,
              animate: { opacity: 1, rotate: 0, scale: 1 },
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            })}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </motion.button>
  );
}
