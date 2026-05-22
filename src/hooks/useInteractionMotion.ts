"use client";

import { useReducedMotion } from "framer-motion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import {
  HOVER_LIFT,
  HOVER_LIFT_SM,
  HOVER_SCALE,
  HOVER_SCALE_SM,
  TAP_SCALE,
  TAP_SCALE_SM,
  CARD_HOVER_LIGHT,
  ACCENT_GLOW_GREEN,
  SPRING_HOVER,
} from "@/lib/motion-presets";

/** Returns Framer hover/tap props only when motion is enabled and allowed */
export function useInteractionMotion() {
  const { enabled } = useMotionSafe();
  const shouldReduce = useReducedMotion();
  const on = enabled && !shouldReduce;

  return {
    on,
    hoverLift: on ? HOVER_LIFT : undefined,
    hoverLiftSm: on ? HOVER_LIFT_SM : undefined,
    hoverScale: on ? HOVER_SCALE : undefined,
    hoverScaleSm: on ? HOVER_SCALE_SM : undefined,
    tap: on ? TAP_SCALE : undefined,
    tapSm: on ? TAP_SCALE_SM : undefined,
    hoverCard: on ? { ...CARD_HOVER_LIGHT, transition: SPRING_HOVER } : undefined,
    hoverGlow: on ? { boxShadow: ACCENT_GLOW_GREEN.boxShadow } : undefined,
  };
}
