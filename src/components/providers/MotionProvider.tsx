"use client";

import { MotionConfig } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion-presets";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: EASE_PREMIUM }}>
      {children}
    </MotionConfig>
  );
}
