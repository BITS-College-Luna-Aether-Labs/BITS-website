/** Shared motion tokens — additive layer only */

// EASING CURVES
export const EASE_OUT = [0.4, 0, 0.2, 1] as const;
export const EASE_IN = [0.4, 0, 1, 1] as const;
export const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as const;
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

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

export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 200,
  damping: 28,
};

export const SPRING_STIFF = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

export const SPRING_HOVER = {
  type: "spring" as const,
  stiffness: 350,
  damping: 22,
};

export const SPRING_BOUNCE_IN = {
  type: "spring" as const,
  stiffness: 260,
  damping: 18,
};

// DURATION TOKENS
export const DURATION = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.35,
  slow: 0.55,
  slower: 0.7,
};

// INTERACTION TRANSFORMS
export const HOVER_LIFT = { y: -4 };
export const HOVER_LIFT_SM = { y: -2 };
export const HOVER_SCALE = { scale: 1.03 };
export const HOVER_SCALE_SM = { scale: 1.02 };
export const TAP_SCALE = { scale: 0.97 };
export const TAP_SCALE_SM = { scale: 0.98 };

// ENHANCED CARD HOVER
export const CARD_HOVER = {
  y: -6,
  boxShadow: "var(--shadow-card-hover-lift)",
};

export const CARD_HOVER_LIGHT = {
  y: -3,
  boxShadow: "var(--shadow-card-hover-rise)",
};

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

// REVEAL VARIANTS (for stagger containers)
export const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FADE_UP_SCALE = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const FADE_SCALE = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const SLIDE_LEFT = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

// REVEAL STAGGER (for scroll-triggered animations)
export const STAGGER_FAST = { staggerChildren: 0.08 };
export const STAGGER_NORMAL = { staggerChildren: 0.12 };
export const STAGGER_SLOW = { staggerChildren: 0.16 };
