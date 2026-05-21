"use client";

import { MotionConfig } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}>
      {children}
    </MotionConfig>
  );
}
