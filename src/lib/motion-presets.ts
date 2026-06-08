/** Shared Framer Motion presets — easing curves, spring physics, hover transforms, and stagger delays */
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// SPRING PHYSICS
export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 200,
  damping: 28,
};

export const SPRING_HOVER = {
  type: "spring" as const,
  stiffness: 350,
  damping: 22,
};

// INTERACTION TRANSFORMS
export const HOVER_LIFT = { y: -4 };
export const HOVER_LIFT_SM = { y: -2 };
export const HOVER_SCALE = { scale: 1.03 };
export const HOVER_SCALE_SM = { scale: 1.02 };
export const TAP_SCALE = { scale: 0.97 };
export const TAP_SCALE_SM = { scale: 0.98 };

// CARD HOVER — uses CSS shadow custom property so dark/light switch without rework
export const CARD_HOVER_LIGHT = {
  y: -3,
  boxShadow: "var(--shadow-card-hover-rise)",
};

// REVEAL STAGGER (for scroll-triggered animations)
export const STAGGER_FAST = { staggerChildren: 0.08 };
export const STAGGER_NORMAL = { staggerChildren: 0.12 };
export const STAGGER_SLOW = { staggerChildren: 0.16 };
