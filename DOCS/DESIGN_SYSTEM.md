# Design System

Brand and UI rules for the BITS College frontend. Tokens live in CSS variables + Tailwind; motion lives in Framer presets + safety hooks.

**Brand anchors:** BITS green `#7DC243` · Gold `#b48c1e` / `#d4af37` · Dark footer `#454545`  
**Author:** [NathenaelTamirat](https://github.com/NathenaelTamirat) · **Audited:** July 2026

---

## 1. Design intent

The site mirrors the live college identity while modernizing structure:

- **Institutional, calm, tech-forward** — green as primary action; gold as secondary accent.
- **One composition per viewport section** — homepage hero is brand + headline + short copy + Apply CTA + hero visual.
- **Themeable surfaces** — light default; dark mode via `html.dark` (not a separate purple/AI-default theme).
- **Motion as hierarchy** — scroll reveals, soft lifts, wave divider; never motion-only information.

---

## 2. Color tokens

Defined in `src/app/globals.css` (`:root` / `.dark`) and mirrored in `tailwind.config.ts` under `theme.extend.colors.bits`.

### 2.1 Core palette

| Token | Light | Dark override | Usage |
|---|---|---|---|
| `--bits-green` | `#7dc243` | `#5db95f` | Primary CTA, accents, links hover |
| `--bits-green-dark` | `#6aad38` | `#4ade80` | Hover / stronger emphasis |
| `--bits-gold` | `#b48c1e` | (unchanged) | Secondary accent, gradients |
| `--bits-gold-light` | `#d4af37` | (unchanged) | Highlights, soft glow |
| `--bits-heading` | `#1a1a1a` | `#f1f5f9` | Headings |
| `--bits-text` | `#54595f` | `#e2e8f0` | Body |
| `--bits-muted` | `#7a7a7a` | `#cbd5e1` | Supporting text |
| `--bits-surface` | `#ffffff` | `#141414` | Cards / panels |
| `--bits-surface-muted` | `#f8f8f8` | `#0f0f0f` | Section backgrounds |
| `--bits-page` | `#ffffff` | `#0a0a0a` | Page canvas |
| `--bits-footer` | `#454545` | (footer uses `dark:bg-black`) | Footer bar |
| `--bits-footer-text` | `#f1f4fa` | — | Footer copy |

### 2.2 Shadow tokens

| Token | Role |
|---|---|
| `--shadow-card-hover` | Generic card hover |
| `--shadow-card-hover-rise` | Lifted cards (programs, features) — includes subtle gold ring |
| `--shadow-card-hover-lift` | Stronger lift |
| `--shadow-card-hover-featured` | Featured contact card (green glow) |
| `--shadow-card-hover-announce` | Announcement surfaces |

Tailwind aliases: `shadow-card`, `shadow-card-hover`, `shadow-glow-green`, `shadow-glow-gold`.

### 2.3 Usage rules

- Prefer **CSS variables** for surfaces/text so dark mode works without re-authoring components.
- Prefer Tailwind `bits-green` / `bits-gold` for fixed brand accents.
- Selection color uses translucent green: `rgba(125, 194, 67, 0.3)`.
- Focus rings: green outline + optional gold inset on interactive elements.

---

## 3. Typography

| Role | Family | Tailwind | Source |
|---|---|---|---|
| Body / UI | Open Sans | `font-sans` | `--font-open-sans` |
| Supporting serif accents | Roboto Slab | `font-slab` | `--font-roboto-slab` |
| Display / hero titles | Playfair Display | `font-display` | `--font-playfair` |

All three are **self-hosted** woff2 under `src/fonts/` via `next/font/local`.

### Scale conventions (observed)

| Context | Typical classes |
|---|---|
| Hero H1 | `font-display text-4xl … md:text-[3.25rem]` |
| Inner page H1 | `text-4xl … lg:text-6xl` semibold/tracking-tight |
| Section H2 | `text-lg`–`text-3xl` depending on density |
| Eyebrow pills | `text-xs` / `text-sm` uppercase + wide tracking (`tracking-[0.25em]`+) |
| Body | `text-base` / `text-lg` with relaxed leading |

---

## 4. Layout & spacing

| Token / class | Value / behavior |
|---|---|
| `max-w-site` | `1200px` content width |
| `.site-container` | `mx-auto max-w-site` + responsive horizontal padding |
| Header offset | Home hero pads `pt-[64px]` → `lg:pt-[76px]` for fixed header |
| Section rhythm | Alternating `section-surface` / `section-surface-muted` |

**Grid patterns**

- Home hero / programs / contact: 2-column on `lg`, stacked on mobile.
- Faculty: responsive card grid (up to 4 columns).
- News: 1 / 2 / 3 columns by breakpoint.
- Who We Are: sticky sidebar (`260px`) + main column on large screens.

**Radius**

- Pill CTAs: `rounded-pill` (`126px`) via `.btn-solid-green` / `.btn-outline-green`.
- Content cards: often `rounded-2xl` / `rounded-3xl` / `rounded-[2rem]` on newer pages.
- Avoid inventing a third radius language on a single page.

---

## 5. Component classes (CSS layer)

Defined under `@layer components` in `globals.css`:

| Class | Purpose |
|---|---|
| `.site-container` | Page width wrapper |
| `.section-surface` / `-muted` | Themed section backgrounds |
| `.nav-link` / `.nav-link-active` | Header links |
| `.btn-solid-green` | Primary CTA |
| `.btn-outline-green` | Secondary CTA |
| `.program-card` (+ `::before` green rail) | Program list cards |
| `.program-card-fallback` | CSS hover when motion off |
| `.feature-card` (+ `-fallback`) | Why BITS feature tiles |
| `.dropdown-panel` | Nav dropdown |
| `.contact-card-side` / `-featured` (+ fallbacks) | Contact strip |
| `.footer-link` / `.footer-social` | Footer micro-interactions |

Utilities:

- `.gpu` → `transform: translateZ(0)` for compositing.

---

## 6. Motion design

### 6.1 Presets (`src/lib/motion-presets.ts`)

| Category | Exports |
|---|---|
| Easing | `EASE_PREMIUM` = `[0.22, 1, 0.36, 1]` |
| Springs | `SPRING_GENTLE`, `SPRING_HOVER` |
| Hover / tap | `HOVER_LIFT`, `HOVER_LIFT_SM`, `HOVER_SCALE`, `HOVER_SCALE_SM`, `TAP_SCALE`, `TAP_SCALE_SM`, `CARD_HOVER_LIGHT` |
| Stagger | `STAGGER_FAST` / `NORMAL` / `SLOW` |

`MotionProvider` sets default transition `{ duration: 0.4, ease: EASE_PREMIUM }` and `reducedMotion="user"`.

### 6.2 Safety pattern

```tsx
const { enabled } = useMotionSafe();
if (!enabled) return <StaticVariant />;
return <AnimatedVariant />;
```

Interaction props:

```tsx
const { hoverCard, tapSm, on } = useInteractionMotion();
// pass whileHover={hoverCard} only when on === true
```

### 6.3 Signature motions

| Element | Behavior |
|---|---|
| `SectionReveal` | Soft `y` settle on enter; optional green glow pulse |
| `WaveDivider` | CSS `wave-drift` when motion allowed |
| Hero | Blob scale loops; CTA subtle rotate; image float |
| `AnnouncementPopup` | Confetti burst + spring modal (once per session) |
| Cards | Lift `y: -3/-4` + shadow CSS variable |

**Do not** introduce infinite decorative loops on every section — keep ambient motion on hero/dividers and use one-shot reveals elsewhere.

---

## 7. UI primitives

| Component | File | Role |
|---|---|---|
| `SectionReveal` | `ui/SectionReveal.tsx` | Scroll-triggered wrapper |
| `ThemeToggle` | `ui/ThemeToggle.tsx` | Sun/moon control in header |
| `WaveDivider` | `ui/WaveDivider.tsx` | SVG section separator (`flip` supported) |
| `PDFViewer` | `ui/PDFViewer.tsx` | Desktop iframe / mobile open-in-tab |

Custom icons for features/contact live in `components/icons/FeatureIcons.tsx`. Lucide is used for generic UI (chevrons, graduation cap, etc.).

---

## 8. Page design patterns

### 8.1 Homepage

1. **Hero** — Playfair “Join the Vision”, supporting paragraph, Apply Now, hero image (`hero-landingpage.png`), wave.
2. **Why BITS** — copy + four feature cards (link into programs / faculty / facilities / support); loaded via `next/dynamic`.
3. **Programs** — student image + graduate card (full width) + undergraduate Software Engineering card; `next/dynamic`.
4. **Get in touch** — phone / featured location / email; `next/dynamic`.
5. **Announcement popup** — Class of 2026 modal via `AnnouncementPopupLoader` (`ssr: false`); `sessionStorage` key `bits_announcement_shown`.

### 8.2 Inner marketing page

Shared skeleton:

1. Gradient / muted hero band with eyebrow chip + title (+ optional subtitle).
2. One primary content purpose (requirements, grid, tabs, etc.).
3. Optional bottom CTA to Apply portal or related page.

### 8.3 Who We Are (special)

- Sticky “On this page” nav.
- Tabs: Overview, Mission & Vision, Dean, Accreditation, Student Support.
- Deep-link via `?section=<id>` (e.g. `accreditation`).
- Optional `?doc=undergraduate|graduate` opens the matching accreditation PDF modal.
- Legacy accreditation URLs redirect here from `next.config.ts`.

### 8.4 News

- Card grid with image, local MP4, or YouTube `videoId`.
- Local videos use play/pause overlay and deferred loading strategies for performance.
- Detail routes under `[slug]` for major historical events.

---

## 9. Imagery guidelines

| Asset area | Path prefix | Notes |
|---|---|---|
| Logo | `/images/logo.png` | Header, footer, OG-adjacent uses |
| Hero | `/images/hero-landingpage.png` | `priority` on home |
| Programs | `/images/programs-student.webp` | Home programs section |
| Facilities | `/images/About-Facilities/` | Carousel + OG image |
| Partners | `/images/About-partner/` | Logo cards (PNG/GIF) |
| Faculty | `/images/Faculty-Members/` | Portrait grid |
| News | `/images/News-Events/` | JPG/WebP + MP4 |
| PDFs | `/images/About-Who-we-are/` | Accreditation documents |

Prefer Next.js `Image` with explicit `width`/`height` or `fill`, `alt` text, and `priority` only for LCP candidates.

---

## 10. Accessibility & inclusive design

- Skip link to `#main-content` in root layout.
- `:focus-visible` green outline on interactive elements.
- Header dropdowns support ArrowUp/ArrowDown, Escape, and `aria-expanded` / `menuitem` roles.
- Decorative SVGs use `aria-hidden="true"`.
- Motion respects user preference at CSS, Framer `MotionConfig`, and hook levels.
- External links that open new tabs use `rel="noopener noreferrer"`.

---

## 11. Dark mode design rules

- Toggle flips `html.dark`; surfaces/text come from CSS variables.
- Cards often add `dark:ring-1 dark:ring-gray-800` when shadows wash out.
- Footer becomes near-black with a subtle green ring.
- Do not hard-code large white panels without a `var(--bits-surface)` (or Tailwind dark variant).

---

## 12. Adding UI consistently

Checklist for new sections:

1. Use `.site-container` or `max-w-site` horizontal rhythm.
2. Pull colors from tokens — no one-off purple/indigo themes.
3. Gate Framer with `useMotionSafe` / `useInteractionMotion`.
4. Provide a CSS hover fallback class if the animated card has a meaningful hover state.
5. Keep first viewport of landing-like pages free of secondary promo clutter (stats strips, chip clouds).
6. Match eyebrow + heading + one supporting sentence pattern used on newer pages (Library, Tuition, Partners).

---

*Design system by **NathenaelTamirat** · July 2026*
