# Motion Guidelines — BITS College Frontend

## Principles

Motion must feel **premium**, **academic**, and **purposeful** — never startup-flashy.

## Allowed Patterns

| Pattern | Usage in this project |
|---------|----------------------|
| Fade-in | Section entrances via `SectionReveal` |
| Subtle slide-up | Hero text, contact cards |
| Stagger reveals | Why BITS feature cards, program cards |
| Hover scale | Feature cards (`hover:scale-[1.02]`), contact cards |
| Navbar dropdown | Fade + 8px Y transition |
| Hero imagery | Opacity fade-in |

## Forbidden Patterns

- Bouncing, spinning, or looping decorative animations
- Parallax overload
- Auto-playing video backgrounds
- Flashing above 3 Hz

## Implementation

- **Library:** Framer Motion only
- **Global config:** `MotionProvider` with `reducedMotion="user"`
- **Per-component:** `useReducedMotion()` bypasses transforms when enabled

## Accessibility

- Honors `prefers-reduced-motion` at OS and Framer levels
- Keyboard navigation unaffected by motion
- Focus rings preserved (`:focus-visible` in `globals.css`)

## Performance

- Animate `opacity` and `transform` only
- `viewport={{ once: true }}` on scroll reveals
- No animation on off-screen heavy elements

## Timing

- Micro-interactions: 200–350ms
- Section reveals: 400–600ms
- Easing: `[0.4, 0, 0.2, 1]` (standard ease-out curve)
