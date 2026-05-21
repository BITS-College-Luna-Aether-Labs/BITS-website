"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Prevents SSR/hydration blank screens: content stays visible until
 * the client is ready to run Framer Motion animations.
 */
export function useMotionSafe() {
  const [ready, setReady] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  const enabled = ready && !shouldReduce;

  return { enabled, shouldReduce, ready };
}
