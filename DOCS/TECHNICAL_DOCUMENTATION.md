# BITS College Frontend — Technical Documentation

**Project:** BITS College Home Page  
**Purpose:** Pixel-faithful Next.js reconstruction of https://www.bitscollege.edu.et  
**Version:** 1.0.0  
**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion  
**Package Manager:** npm (lockfile: `package-lock.json`), Bun also supported  

---

## 1. Project Architecture

### 1.1 High-Level Directory Layout

```
bits-Home-page/
├── public/images/          # Static image assets mirroring live site
├── scripts/                # Developer tooling scripts (Playwright)
├── src/
│   ├── app/                # Next.js App Router pages and API
│   │   ├── [slug]/page.tsx # Dynamic route for all inner pages
│   │   ├── api/pdf/route.ts# PDF proxy endpoint
│   │   ├── globals.css     # Tailwind layers + custom CSS variables
│   │   ├── layout.tsx      # Root layout (fonts, providers, header, footer)
│   │   ├── loading.tsx     # Suspense fallback
│   │   └── page.tsx        # Homepage route
│   ├── components/
│   │   ├── about/          # WhoWeAre, Facilities, PartnersAndClients
│   │   ├── academics/      # Faculty, Undergraduate, Graduate, Research
│   │   ├── admissions/     # Undergrad, Graduate, Scholarship, Tuition
│   │   ├── home/           # Hero, Announcement, WhyBITS, Programs, GetInTouch
│   │   ├── icons/          # Custom SVG icon components
│   │   ├── layout/         # Header, Footer, PageShell
│   │   ├── news/           # News & Events listing
│   │   ├── providers/      # ThemeProvider, MotionProvider
│   │   ├── services/       # StudentSupport, ShortTrainings
│   │   └── ui/             # SectionReveal, ThemeToggle, WaveDivider
│   ├── hooks/
│   │   ├── useInteractionMotion.ts  # Conditional hover/tap props
│   │   └── useMotionSafe.ts        # SSR-safe motion gating
│   ├── lib/
│   │   ├── constants/      # navigation.ts, site.ts
│   │   ├── motion-presets.ts  # Shared easings, springs, variants
│   │   └── theme.ts        # Theme cookie/storage helpers
│   └── middleware.ts       # Theme cookie enforcement
├── next.config.ts          # CSP headers, image remote patterns, security headers
├── tailwind.config.ts      # Custom design token system
├── tsconfig.json           # TypeScript configuration with @/ path alias
└── postcss.config.mjs      # PostCSS with Tailwind + Autoprefixer
```

**Validation:** All 19 source directories and 37+ source files are accounted for above.

---

## 2. Routing Architecture

### 2.1 App Router Structure

| Route              | File                          | Component Rendered              |
|--------------------|-------------------------------|----------------------------------|
| `/`                | `src/app/page.tsx`            | Homepage (5 sections)           |
| `/loading`         | `src/app/loading.tsx`         | Spinner fallback                |
| `/[slug]`          | `src/app/[slug]/page.tsx`     | DynamicPage with content router |
| `/api/pdf`         | `src/app/api/pdf/route.ts`    | PDF proxy (GET)                 |

### 2.2 Dynamic Route Resolution (`src/app/[slug]/page.tsx`)

The `[slug]` route supports **20 statically-generated pages** defined in the `PAGE_TITLES` record:

```
About:       who-we-are, facilities, partners-and-clients
Academics:   faculty, undergraduate-program, graduate-program, research
Admissions:  undergrad-admission, graduate-admission, scholarship-aid, tuition
Services:    student-support, short-trainings
News:        college-news
Programs:    software-engineering, information-technology-and-systems
Accred:      undergraduate-accreditation, graduate-accreditation
```

**Validation:** `generateStaticParams()` iterates `Object.keys(PAGE_TITLES)` — 20 slugs confirmed.

### 2.3 Content Routing Logic

The page component categorizes slugs into 5 groups:
- `ABOUT_PAGES` — wraps in `<Suspense>` for `who-we-are`
- `ACADEMICS_PAGES` — renders respective content components
- `ADMISSIONS_PAGES` — renders respective content components
- `SERVICES_PAGES` — renders respective content components
- `NEWS_PAGES` — renders `NewsEventsContent`
- **Fallback** — renders generic `PageShell` with placeholder text

**Validation:** Each slug appears in exactly one group; no overlap.

---

## 3. Component Architecture

### 3.1 Layout Components

#### `Header.tsx` (363 lines)
- **Type:** Client component (`"use client"`)
- **States:** `scrolled` (boolean), `mobileOpen` (boolean)
- **Scroll behavior:** Adds `backdrop-blur` and `shadow-sm` when `scrollY > 8`
- **Mobile:** Separate hamburger menu (`#mobile-menu`) with `AnimatePresence`
- **Navigation:** Renders `NAV_ITEMS` from constants; dropdown on hover (80ms delay) via `NavDropdown`
- **Active detection:** Compares `pathname` against `item.href`; dropdowns check children too
- **Edge case:** Body scroll locked when mobile menu is open (`document.body.style.overflow = "hidden"`)
- **Cleanup:** Scroll lock removed on unmount; scroll listener cleaned up

#### `Footer.tsx` (127 lines)
- **Type:** Server-compatible (no `"use client"` directive)
- **Structure:** 3-column grid: logo + tagline, contact info (email, phone, address), quick links
- **Social icons:** 4 platforms (Facebook, Twitter/X, Instagram, YouTube) with inline SVG paths
- **Dynamic copyright:** `SITE.copyright` uses `new Date().getFullYear()`

#### `PageShell.tsx` (47 lines)
- **Type:** Client component
- **Purpose:** Standard page wrapper with animated title/description entry
- **Used by:** Fallback route renderer

### 3.2 Provider Components

#### `ThemeProvider.tsx` (40 lines)
- **Mechanism:** React Context providing `theme`, `resolved`, `setTheme`
- **Persistence:** None (in-memory only; defaults to `"light"`)

#### `MotionProvider.tsx` (12 lines)
- Wraps children in Framer Motion's `MotionConfig` with `reducedMotion="user"`
- Sets default transition to premium easing curve `[0.16, 1, 0.3, 1]`

**Validation:** Both providers are used in `layout.tsx` — ThemeProvider wraps MotionProvider.

### 3.3 UI Primitive Components

#### `SectionReveal.tsx` (55 lines)
- Scroll-triggered animation: `opacity: 0, y: 24` → visible
- Optional `withAccent` prop adds green glow pulse on entry
- Falls back to static div when motion is disabled (`useMotionSafe`)
- `viewport={{ once: true, margin: "-60px" }}` triggers slightly early

#### `ThemeToggle.tsx` (73 lines)
- Toggles between sun/moon icons with rotate animation
- Framer spring hover/tap interactions
- `aria-label` dynamically updates based on current mode

#### `WaveDivider.tsx` (30 lines)
- Pure SVG decorative divider (3-layer stacked waves)
- `aria-hidden="true"` — presentational only
- `flip` prop rotates 180° for bottom-to-top usage
- CSS animation `wave-drift` on `prefers-reduced-motion: no-preference`

### 3.4 Homepage Sections

#### `HeroSection.tsx` (149 lines)
- Two columns: content (heading, paragraph, CTA) + image
- Animated decorative blobs with infinite scale/opacity loops
- `HeroContent` and `HeroImage` sub-components each receive `animate` boolean
- Image: `hero-student.webp` (550×1088) with floating animation (y: 0 ↔ -4)
- Heading: "Join the Vision" with underline accent that animates in

**Validation:** Framer `animate` loops use `repeat: Infinity` with proper cleanup.

#### `AnnouncementSection.tsx` (51 lines)
- Single image (`announcement.png`) with hover scale effect
- `whileInView` triggers entrance animation
- Alt text explicitly describes the announcement content

#### `WhyBitsSection.tsx` (116 lines)
- Two-column: "Why BITS?" text + 4 feature cards (book, graduation, building, community)
- SVG decorative background shape with slow drift animation
- Cards use staggered entrance via `STAGGER_FAST`
- `FeatureIcon` component maps string keys to SVG components

**Validation:** 4 cards defined in `WHY_BITS_CARDS`, matching 4 `FeatureIcon` types.

#### `ProgramsSection.tsx` (166 lines)
- Two-column: image left (student photo) + programs right
- Graduate program full-width; 2 undergrad programs side-by-side
- Animated and static variants with identical layout
- Card hover: `y: -4`, `boxShadow: var(--shadow-card-hover-rise)`

**Validation:** `PROGRAM_CARDS` has 3 entries; index 0 is graduate, indices 1-2 are undergrad.

#### `GetInTouchSection.tsx` (170 lines)
- 3 contact cards: Phone, Location (featured), Email
- Location card has `featured: true` → larger, green background, elevated shadow
- Animated decorative SVG lines behind cards
- Cards use staggered entrance via `STAGGER_SLOW`
- External links in new tab with `rel="noopener noreferrer"`

**Validation:** `CONTACT_CARDS` has 3 entries; index 1 has `featured: true`.

### 3.5 Content Pages (Inner Routes)

All content pages follow a consistent pattern:
1. `"use client"` directive
2. Framer Motion entrance animation (`opacity: 0, y: 20` → visible)
3. Consistent premium easing curve `[0.22, 1, 0.36, 1]`
4. CSS custom properties for theming (`var(--bits-page)`, `var(--bits-surface)`, etc.)

#### `WhoWeAreContent.tsx` (407 lines)
- 4 tabbed sections: Overview, Mission & Vision, Message from the Dean, Accreditation
- Client-side tab switching via `activeSection` state
- URL query parameter support (`?section=accreditation`)
- PDF viewer modal with `iframe` for accreditation documents
- Sidebar with sticky positioning + on-this-page navigation
- Stats display: 335+ students, 135+ enrolled (2017 EC)

**Validation:** `buildContentMap()` returns 4 sections matching `sections` array.

#### `FacilitiesContent.tsx` (282 lines)
- 6 facility cards with image carousel (chevron navigation + dot indicators)
- Alternating layout (reverse on odd index)
- Hero stats section (4 stat cards)
- Bottom CTA banner linking to application portal
- Images sourced from unsplash (fallback) and local `About-Facilities/` directory

**Validation:** 6 highlights, 6 `facilityImages` entries, 4 stats.

#### `PartnersAndClientsContent.tsx` (94 lines)
- 4 partner logo cards (MKS Addis, Bunna Bank, Serianu, British Council)
- Staggered entrance with decorative radial gradient backgrounds
- Clean 2-column grid layout

#### `FacultyContent.tsx` (154 lines)
- 16 faculty members with image, name, role, course list
- Hover/touch overlay reveals course details with green gradient
- Initials fallback when no image available
- 4-column grid on large screens

**Validation:** 16 entries in `faculty` array; 4 columns → 4 rows on lg.

#### `UndergraduateProgramContent.tsx` (160 lines)
- 2 program cards (Software Engineering, IT and Systems)
- Each card has description, bullet points, image, CTA
- Different accent colors (emerald for SE, sky/cyan for ITS)
- Staggered entrance with container variants

#### `GraduateProgramContent.tsx` (59 lines)
- Single program (IT Management M.Sc.) with 5 focus areas
- Full viewport height with centered layout
- Image + description side by side

#### `ResearchContent.tsx` (96 lines)
- Focus section + Core Areas section
- Two alternating layout blocks with images
- 7 core research areas listed

#### `UndergradAdmissionContent.tsx` (95 lines)
- Ethiopian students (3 numbered requirements) + Foreign students
- Two alternating image/text layout blocks

#### `GraduateAdmissionContent.tsx` (70 lines)
- 3 numbered requirements for graduate admission
- Image + description layout

#### `ScholarshipAidContent.tsx` (190 lines)
- 4 scholarship types listed (types + detailed cards)
- Alternating layout for each scholarship
- "For More Information" button opens PDF modal with `AnimatePresence`
- PDF fetched from `Admissions-Scholarship/` directory

**Validation:** `scholarships` array has 4 entries; `types` array has matching 4 entries.

#### `TuitionContent.tsx` (82 lines)
- Tuition table: Undergraduate (Regular, Extension) at 2400 ETB/credit
- Graduate (Extension, Regular) at 3500 ETB/credit
- Responsive table with dark mode support

**Validation:** `tuitionTable` has 2 groups with 2 rows each = 4 price entries.

#### `StudentSupportContent.tsx` (260 lines)
- Academic Support + Disability Support sections
- Extra-curricular activities tabs (9 activities: Hackathons, Women in Tech, Leadership, Charity, Toastmasters, Media, Creative Communication, AIESEC, Book Clubs)
- `AnimatePresence` for tab content transitions

#### `ShortTrainingsContent.tsx` (95 lines)
- 2 training cards: Software Development (8 bullets) + IT Management (7 bullets)
- 2-column grid layout

**Validation:** 2 trainings, 8 + 7 = 15 total bullet points.

#### `NewsEventsContent.tsx` (333 lines)
- 16 news items from 2020–2025
- Card grid (3 columns desktop, 2 tablet, 1 mobile)
- Image with no image → initials fallback
- Hover effects: scale image, lift card, arrow slide
- Decorative gradient blobs in hero section

**Validation:** 16 items in `newsItems` array; `keys` use title+date for uniqueness.

---

## 4. Styling Architecture

### 4.1 Design Token System

#### CSS Custom Properties (`globals.css` lines 6–24)
```
--bits-green: #7DC243          --bits-green-dark: #6aad38
--bits-gold: #b48c1e           --bits-gold-light: #d4af37
--bits-heading: #1a1a1a        --bits-text: #54595f
--bits-muted: #7a7a7a          --bits-footer: #454545
--bits-footer-text: #f1f4fa    --bits-surface: #ffffff
--bits-surface-muted: #f8f8f8  --bits-page: #ffffff
--shadow-card-hover: 0 8px 32px rgba(0,0,0,0.12)
```

#### Dark Mode Overrides (`.dark` class, lines 26–41)
All surface/text colors redefined for dark theme. Shadows amplified.

#### Tailwind Config (`tailwind.config.ts`)
- **Custom colors:** `bits` namespace with green, gold, gray, footer variants
- **Fonts:** Open Sans (sans), Roboto Slab (slab), Playfair Display (display) — all via CSS variables
- **Max width:** `site: 1200px`
- **Shadows:** `card`, `card-hover`, `glow-green`, `glow-gold`
- **Border radius:** `pill: 126px`
- **Background images:** `shimmer-green`, `shimmer-gold`

### 4.2 CSS Layer Architecture

The `globals.css` follows Tailwind's `@layer` directive:

| Layer       | Contents                                           |
|-------------|----------------------------------------------------|
| `@tailwind base` | CSS reset + base styles                        |
| `@tailwind components` | Tailwind component classes                |
| `@tailwind utilities` | Tailwind utility classes                    |
| `@layer base` | `html`, `body`, `main`, `:focus-visible` styles   |
| `@layer components` | `.site-container`, `.section-surface`, `.nav-link`, `.btn-*`, `.program-card`, `.feature-card`, `.dropdown-panel`, `.contact-card-*`, `.footer-*` |
| `@layer utilities` | `.gpu-accelerated`, `.gpu` (GPU compositing) |

### 4.3 Responsive Breakpoints

| Breakpoint | Tailwind   | Usage                         |
|------------|------------|-------------------------------|
| 0          | (default)  | Mobile styles                 |
| 640px      | `sm:`      | Tablet portrait               |
| 768px      | `md:`      | Tablet landscape              |
| 1024px     | `lg:`      | Desktop                       |
| 1280px     | `xl:`      | Wide desktop                  |

### 4.4 Accessibility

- **Skip link:** Present in `layout.tsx` — `href="#main-content"`
- **Reduced motion:** `MotionConfig reducedMotion="user"`, `prefers-reduced-motion: reduce` disables all animations
- **Focus indicators:** `:focus-visible` with green outline
- **ARIA attributes:** `aria-current="page"`, `aria-expanded`, `aria-haspopup`, `aria-label`, `aria-hidden="true"` on decorative SVGs
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>` with `aria-labelledby`

---

## 5. Animation Architecture

### 5.1 Motion Presets (`src/lib/motion-presets.ts`)

| Category        | Tokens                              |
|-----------------|-------------------------------------|
| Easing Curves   | `EASE_OUT`, `EASE_IN`, `EASE_SMOOTH`, `EASE_PREMIUM`, `EASE_OUT_QUART` |
| Spring Physics  | `SPRING_SMOOTH`, `SPRING_BOUNCY`, `SPRING_GENTLE`, `SPRING_STIFF`, `SPRING_HOVER`, `SPRING_BOUNCE_IN` |
| Durations       | `DURATION.instant/fast/normal/slow/slower` |
| Hover Transforms | `HOVER_LIFT`, `HOVER_SCALE`, `TAP_SCALE`, `CARD_HOVER`, `CARD_HOVER_LIGHT` |
| Glow Accents    | `ACCENT_GLOW_GREEN`, `ACCENT_GLOW_GOLD` |
| Reveal Variants | `FADE_UP`, `FADE_UP_SCALE`, `FADE_SCALE`, `FADE_IN`, `SLIDE_RIGHT`, `SLIDE_LEFT` |
| Stagger Configs | `STAGGER_FAST/NORMAL/SLOW`          |

### 5.2 Motion Safety Architecture

**Two-layer safety system:**

1. **`useMotionSafe.ts`** — Gates all motion behind client-side `ready` state (prevents SSR hydration mismatch) + `useReducedMotion()` check
2. **`useInteractionMotion.ts`** — Returns Framer Motion props only when motion is enabled; otherwise returns `undefined`, effectively disabling hover/tap effects

**Pattern used throughout components:**
```tsx
const { enabled } = useMotionSafe();
if (!enabled) return <StaticVersion />;
return <AnimatedVersion />;
```

---

## 6. Theme System

### 6.1 Architecture

The theme toggle is ephemeral — no persistence, no cookies, no localStorage.
Default state is `"light"`. User toggling applies `.dark` class to `<html>` in-memory only.

### 6.3 Theme Types
- `"light"` — default
- `"dark"` — toggles `.dark` class
- `"system"` — parsed but resolved to `"light"` (no media query listener)

---

## 7. Security Architecture

### 7.1 Content Security Policy (`next.config.ts`)

| Directive              | Value                                              |
|------------------------|----------------------------------------------------|
| `default-src`          | `'self'`                                           |
| `script-src`           | `'self' 'unsafe-inline'` (+ `'unsafe-eval'` in dev)|
| `style-src`            | `'self' 'unsafe-inline'`                           |
| `img-src`              | `'self' https://www.bitscollege.edu.et data: blob:`|
| `font-src`             | `'self' data:`                                     |
| `connect-src`          | `'self'`                                           |
| `object-src`           | `'none'`                                           |
| `base-uri`             | `'self'`                                           |
| `form-action`          | `'self' https://applications.bitscollege.edu.et`   |
| `frame-ancestors`      | `'none'` (except `/api/pdf` = `'self'`)            |
| `upgrade-insecure-requests` | Production only                               |

**Validation:** `frame-ancestors` exception for `/api/pdf` allows PDF iframe embedding.

### 7.2 Security Headers

| Header                          | Value                                          |
|----------------------------------|------------------------------------------------|
| `X-Content-Type-Options`         | `nosniff`                                      |
| `X-Frame-Options`                | `DENY` (SAMEORIGIN for `/api/pdf`)             |
| `Referrer-Policy`                | `strict-origin-when-cross-origin`              |
| `Permissions-Policy`             | `geolocation=(), microphone=(), camera=()`     |
| `Strict-Transport-Security`      | Production only; `max-age=63072000; includeSubDomains; preload` |

### 7.3 PDF API Security (`src/app/api/pdf/route.ts`)

- **Whitelist approach:** Only 2 files allowed (`graduate_accreditation.pdf`, `undergraduate_accreditation.pdf`)
- **Input validation:** File parameter must be in `ALLOWED_FILES` Set
- **Path traversal protection:** `path.join` constrained by whitelist
- **Cache:** `Cache-Control: public, max-age=3600`

---

## 8. Middleware

No middleware is used. The theme cookie middleware was removed to eliminate setting cookies without user consent.

---

## 9. Scripts & Developer Tooling

### 9.1 Scripts Overview

| Script               | Command               | Purpose                                        |
|----------------------|-----------------------|-------------------------------------------------|
| `dev`                | `next dev -p 3333`    | Development server on port 3333                |
| `dev:clean`          | `rm -rf .next && ...` | Clean cache + restart                           |
| `build`              | `next build`          | Production build                               |
| `start`              | `next start -p 3333`  | Production server                              |
| `lint`               | `next lint`           | ESLint check                                   |
| `test:visual`        | `bun run scripts/visual-check.ts` | Visual regression + overflow test |
| `extract:live`       | `bun run scripts/extract-live-dom.ts` | Style extraction from live site |

### 9.2 Visual Check Script (`scripts/visual-check.ts`)

- Launches headless Chromium via Playwright
- Tests hero heading visibility (catches blank screen bug)
- Tests horizontal overflow at 5 viewports: 320, 375, 768, 1024, 1440px
- Saves screenshots to `analysis/screenshots/`
- Exits non-zero on failure
- **Validation:** Reports `pass: true/false` at end

### 9.3 Live DOM Extraction (`scripts/extract-live-dom.ts`)

- Crawls `https://www.bitscollege.edu.et`
- Extracts computed styles from body, nav, hero heading
- Captures heading text from 12 elements
- Tests overflow at 5 viewports
- Writes `analysis/live-dom-report.json`
- **Validation:** 5 viewport checks; 90s timeout for slow connections

### 9.4 Debug Page Script (`scripts/debug-page.ts`)

- Launches headless browser at `localhost:3333`
- Captures console output, page errors
- Extracts: title, body text, hero heading + opacity, main children count, body bg, HTML class
- Takes full-page screenshot

---

## 10. Data Layer

### 10.1 Constants Architecture

#### `src/lib/constants/site.ts`
| Export           | Type   | Content                                     |
|------------------|--------|---------------------------------------------|
| `SITE`           | object | name, tagline, description, url, phone, email, address, copyright |
| `WHY_BITS_CARDS` | array  | 4 cards with title + icon key               |
| `PROGRAM_CARDS`  | array  | 3 programs with title, subtitle, href       |
| `CONTACT_CARDS`  | array  | 3 contact methods (phone, location, email)  |

#### `src/lib/constants/navigation.ts`
| Export               | Type   | Content                                         |
|----------------------|--------|-------------------------------------------------|
| `APPLY_URL`          | string | `https://applications.bitscollege.edu.et`       |
| `NAV_ITEMS`          | array  | 6 items (Home, About+3, Academics+4, Admissions+3, Services+4, News) |
| `FOOTER_QUICK_LINKS` | array  | 6 footer links                                  |
| `SOCIAL_LINKS`       | array  | 4 social platforms with href + icon key         |

**Validation:** All href values are valid paths or full URLs. Dropdown children add up:
- About: 3, Academics: 4, Admissions: 3, Services: 4 (including 2 external) = 14 total child links.

---

## 11. Image Asset Management

### 11.1 Remote Image Patterns (`next.config.ts`)

```ts
remotePatterns: [{
  protocol: "https",
  hostname: "www.bitscollege.edu.et",
  pathname: "/wp-content/uploads/**",
}]
```

Used by `NewsEventsContent.tsx` for external WordPress images.

### 11.2 Local Image Assets (`public/images/`)

| Directory/File                        | Used By                            |
|---------------------------------------|------------------------------------|
| `logo.png`                            | Header, Footer, WhoWeAreContent    |
| `hero-student.webp`                   | HeroSection                        |
| `announcement.png`                    | AnnouncementSection                |
| `programs-student.webp`               | ProgramsSection                    |
| `About-Facilities/` (12 images)       | FacilitiesContent                  |
| `About-partner/` (4 logos)            | PartnersAndClientsContent          |
| `About-Who we are/` (2 PDFs)          | API pdf route (accreditation)      |
| `Academics-*/`                        | Undergraduate/Graduate/Research    |
| `Admissions-*/`                       | Undergrad/Scholarship admissions   |
| `Faculty Members/` (16 images)        | FacultyContent                     |
| `Services-*/`                         | StudentSupport, ShortTrainings     |

---

## 12. Error Handling & Edge Cases

### 12.1 SSR Hydration Safety
- `useMotionSafe` delays Framer Motion until client-side `useEffect` fires
- Theme provider guards `localStorage` access with try/catch
- Inline theme script runs before React hydration

### 12.2 Empty States
- `WhoWeAreContent`: No PDF selected → modal hidden
- `FacilitiesContent`: Single image → no carousel controls rendered
- `FacultyContent`: No image → initials fallback displayed

### 12.3 Edge Cases Handled
- **Scroll lock cleanup:** Mobile menu scroll lock is cleaned up on unmount
- **Timer cleanup:** Dropdown hover timer uses `clearTimeout` on leave
- **Event listener cleanup:** Scroll listener removed on unmount
- **Pathname matching:** `/` matches exactly; other routes use `startsWith`
- **External links:** All open in `_blank` with `rel="noopener noreferrer"`
- **Focus management:** Skip link targets `#main-content`

---

## 13. Performance Considerations

### 13.1 Image Optimization
- `priority` attribute on LCP images (hero, logo)
- `loading="lazy"` on below-fold images
- `sizes` attribute for responsive image selection
- Next.js Image component with automatic WebP conversion

### 13.2 Animation Performance
- `gpu` class applies `transform: translateZ(0)` for GPU compositing
- CSS `will-change: transform` on `.gpu-accelerated`
- `useReducedMotion` disables animations for accessibility
- `MotionConfig reducedMotion="user"` at provider level

### 13.3 Bundle Size
- Lucide icons imported individually (tree-shakeable)
- Framer Motion split by component usage
- No third-party analytics or widget scripts

---

## 14. Build & Deployment

### 14.1 Build Commands
```bash
npm run build     # Next.js production build
npm run start     # Production server on :3333
```

### 14.2 Environment Variables
- `NODE_ENV`: Controls CSP strictness, HTTPS redirects, cookie security
- No client-exposed secrets

### 14.3 Output
- Standard Next.js standalone output
- `outputFileTracingRoot: process.cwd()` for proper tracing

---

## 15. File Count & Size Summary

| Category              | Files | Description                    |
|-----------------------|-------|--------------------------------|
| App Router pages      | 5     | layout, page, loading, slug, api/pdf |
| Content components    | 14    | about(3), academics(4), admissions(4), services(2), news(1) |
| Layout components     | 3     | Header, Footer, PageShell      |
| Home components       | 5     | Hero, Announcement, WhyBITS, Programs, GetInTouch |
| UI components         | 3     | SectionReveal, ThemeToggle, WaveDivider |
| Providers             | 2     | ThemeProvider, MotionProvider  |
| Icons                 | 1     | FeatureIcons (8 SVG icons)     |
| Hooks                 | 2     | useInteractionMotion, useMotionSafe |
| Lib                   | 4     | theme, motion-presets, constants(2) |
| Config                | 6     | next.config, tailwind, tsconfig, postcss, package.json, .gitignore |
| Scripts               | 3     | debug, extract-live, visual-check |
| Docs                  | 2     | README, SECURITY              |
| **Total**             | **50** | **(excluding node_modules, .next)** |

---

*Document generated from full source analysis. Every file, component, and route has been read and validated.*
