/** Shared motion tokens — additive layer only */

// EASING CURVES
export const EASE_OUT = [0.4, 0, 0.2, 1] as const;
export const EASE_IN = [0.4, 0, 1, 1] as const;
export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as const;

// SPRING PHYSICS
export const SPRING_SMOOTH = {
  type: "spring" as const,
  stiffness: 280,
  damping: 26,
};

export const SPRING_BOUNCY = {
  type: "spring" as const,
  stiffness: 320,
  damping: 20,
};

// DURATION TOKENS
export const DURATION = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.55,
};

// INTERACTION TRANSFORMS
export const HOVER_LIFT = { y: -4 };
export const HOVER_LIFT_SM = { y: -2 };
export const HOVER_SCALE = { scale: 1.03 };
export const HOVER_SCALE_SM = { scale: 1.02 };
export const TAP_SCALE = { scale: 0.97 };
export const TAP_SCALE_SM = { scale: 0.98 };

// ACCENT ANIMATION TOKENS (GREEN + GOLD SYSTEM)
export const ACCENT_GLOW_GREEN = {
  boxShadow: "0 0 0 2px rgba(125, 194, 67, 0.2), 0 0 12px rgba(125, 194, 67, 0.25)",
};

export const ACCENT_GLOW_GOLD = {
  boxShadow: "0 0 0 2px rgba(180, 140, 30, 0.15), 0 0 12px rgba(180, 140, 30, 0.2)",
};

export const ACCENT_GLOW_TRANSITION = {
  boxShadow: "0 0 0 2px rgba(125, 194, 67, 0.1), 0 0 8px rgba(180, 140, 30, 0.15)",
};

// MICRO-INTERACTIONS
export const UNDERLINE_EXPAND = {
  scaleX: [0, 1],
  opacity: [0.5, 1],
};

export const PULSE_ACCENT = {
  boxShadow: [
    "0 0 0 0 rgba(125, 194, 67, 0.4)",
    "0 0 0 8px rgba(125, 194, 67, 0)",
  ],
};

export const SHIMMER_BRIEF = {
  backgroundPosition: ["0% 0%", "100% 0%"],
};

// REVEAL STAGGER (for scroll-triggered animations)
export const STAGGER_FAST = { staggerChildren: 0.08 };
export const STAGGER_NORMAL = { staggerChildren: 0.12 };
export const STAGGER_SLOW = { staggerChildren: 0.16 };
