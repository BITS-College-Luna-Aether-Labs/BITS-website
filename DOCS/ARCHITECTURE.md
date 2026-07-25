# Architecture

**Project:** BITS College Frontend (`bits-college-frontend`)  
**Purpose:** Pixel-faithful public website for BITS College (School of Systems and Technology)  
**Scope:** Marketing / informational site — no user accounts, sessions, or database  
**Author:** [NathenaelTamirat](https://github.com/NathenaelTamirat)

---

## 1. High-level system

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                              │
│  Theme (localStorage) · Motion (reduced-motion)             │
│  Client error beacon only (no analytics SDK)                │
└───────────────────────────┬─────────────────────────────────┘
                            │ HTTPS
┌───────────────────────────▼─────────────────────────────────┐
│  Nginx (Docker)                                             │
│  SSL termination · gzip · static cache · reverse proxy      │
└───────────────────────────┬─────────────────────────────────┘
                            │ http://app:3333
┌───────────────────────────▼─────────────────────────────────┐
│  Next.js 15 App Router (Bun / Node runner)                  │
│  ├── Root layout (fonts, providers, Header, Footer)         │
│  ├── Home + dedicated routes + [slug] dynamic pages         │
│  ├── Middleware (CSP nonce + hashes)                        │
│  └── Route handlers: /api/pdf, /api/error                   │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  Static assets (public/)                                    │
│  Images · WebP · MP4 · PDFs · site.webmanifest · llms.txt   │
└─────────────────────────────────────────────────────────────┘
```

**External dependencies at runtime**

| Dependency | Role |
|---|---|
| `https://applications.bitscollege.edu.et` | Apply Now / admissions portal (`APPLY_URL`) |
| `https://online.bitscollege.edu.et` | Online learning (nav external link) |
| YouTube embeds + `i.ytimg.com` thumbnails | News / virtual tour (`frame-src` / `img-src`) |
| Google Maps short link | Campus location CTA |

There is **no backend datastore**. Copy and structured lists live in `src/lib/constants/*` and inside content components.

---

## 2. Source layout

```
bits-Home-page/
├── DOCS/                     # This documentation set
├── nginx/                    # Reverse-proxy configs for Docker
├── public/                   # Static assets served as-is
│   ├── images/               # Brand, page media, PDFs, news videos
│   ├── site.webmanifest
│   ├── robots.txt
│   └── llms.txt
├── scripts/                  # Playwright visual / live-DOM tooling
├── src/
│   ├── app/                  # App Router: pages, APIs, globals.css
│   ├── components/           # UI by domain (home, about, …)
│   ├── fonts/                # Self-hosted woff2
│   ├── hooks/                # Motion safety helpers
│   ├── lib/                  # Constants, theme, motion, error script
│   └── middleware.ts         # CSP nonce injection
├── Dockerfile                # Multi-stage Bun → standalone server
├── docker-compose.yml        # app + nginx + certbot
├── next.config.ts            # Images, redirects, security headers
├── tailwind.config.ts
└── package.json
```

**Path alias:** `@/*` → `./src/*` (`tsconfig.json`).

---

## 3. Application composition

### 3.1 Root layout (`src/app/layout.tsx`)

```
<html>
  <head>
    THEME_SCRIPT          ← anti-FOUC dark class from localStorage
    ERROR_REPORTER_SCRIPT ← window.onerror → /api/error
    JSON-LD EducationalOrganization schema
  </head>
  <body fonts…>
    ThemeProvider
      MotionProvider
        Skip link → #main-content
        Header
        <main>{children}</main>
        Footer
  </body>
</html>
```

Fonts use `next/font/local` (no Google Fonts network call):

| CSS variable | File |
|---|---|
| `--font-open-sans` | `src/fonts/open-sans-latin.woff2` |
| `--font-roboto-slab` | `src/fonts/roboto-slab-latin.woff2` |
| `--font-playfair` | `src/fonts/playfair-display-latin.woff2` |

### 3.2 Provider stack

| Provider | Responsibility |
|---|---|
| `ThemeProvider` | Syncs React theme with `<html class="dark">` via `useSyncExternalStore`; persists to `localStorage` key `bits_theme` |
| `MotionProvider` | `MotionConfig` with `reducedMotion="user"` and default `EASE_PREMIUM` transition |

Theme bootstrap runs **before** hydration via `THEME_SCRIPT` in `src/lib/theme.ts`.

### 3.3 Middleware (`src/middleware.ts`)

1. Generate a request nonce (Edge-safe UUID).
2. Build CSP with nonce + SHA-256 hashes for the two inline scripts; allow YouTube frames and `i.ytimg.com` images.
3. Attach `x-nonce` + CSP on the **request** (Next stamps hydration scripts) and on the **response**.

Matcher excludes APIs, Next static/image, favicon, `robots.txt`, `llms.txt`, `sitemap.xml`, and common static extensions (png, jpg, webp, mp4, pdf, woff2, …).

Non-CSP security headers live in `next.config.ts`. See [SECURITY.md](./SECURITY.md).

---

## 4. Routing architecture

Two patterns coexist:

1. **Dedicated App Router pages** for primary nav / SEO destinations (explicit `metadata` + thin page → content component).
2. **Dynamic `[slug]`** for remaining inner pages (`generateStaticParams` + `generateMetadata`).

### 4.1 Dedicated routes

| Path | Page file | Content component |
|---|---|---|
| `/` | `app/page.tsx` | Home sections + `AnnouncementPopupLoader` |
| `/who-we-are` | `app/who-we-are/page.tsx` | `WhoWeAreContent` |
| `/facilities` | `app/facilities/page.tsx` | `FacilitiesContent` |
| `/partners-and-clients` | `app/partners-and-clients/page.tsx` | `PartnersAndClientsContent` |
| `/faculty` | `app/faculty/page.tsx` | `FacultyContent` |
| `/undergraduate-program` | `app/undergraduate-program/page.tsx` | `UndergraduateProgramContent` |
| `/student-support` | `app/student-support/page.tsx` | `StudentSupportContent` |
| `/college-news` | `app/college-news/page.tsx` | `NewsEventsContent` |

### 4.2 Dynamic `[slug]` routes

Defined in `src/app/[slug]/page.tsx` via `PAGE_TITLES` (all have real content components):

| Slug | Component |
|---|---|
| `library` | `LibraryContent` |
| `graduate-program` | `GraduateProgramContent` |
| `research` | `ResearchContent` |
| `software-engineering` | `SoftwareEngineeringContent` |
| `undergrad-admission` | `UndergradAdmissionContent` |
| `graduate-admission` | `GraduateAdmissionContent` |
| `scholarship-aid` | `ScholarshipAidContent` |
| `tuition` | `TuitionContent` |
| `short-trainings` | `ShortTrainingsContent` |
| `inauguration` | `InaugurationContent` |
| `student-appreciation-night` | `StudentAppreciationNightContent` |
| `workshop` | `WorkshopContent` |
| `college-day` | `CollegeDayContent` |
| `bootcamp` | `BootcampContent` |
| `scholarship-recipients` | `ScholarshipRecipientsContent` |

Unknown slugs call `notFound()`.

### 4.3 Redirects (`next.config.ts`)

| From | To |
|---|---|
| `/scholarship-recepients` (+ `/`) | `/scholarship-recipients` |
| `/undergraduate-accreditation` | `/who-we-are?section=accreditation&doc=undergraduate` |
| `/graduate-accreditation` | `/who-we-are?section=accreditation&doc=graduate` |
| `/information-technology-and-systems` | `/undergraduate-program` |

Who We Are reads `?section=` and optional `?doc=` to open the matching accreditation PDF modal.

### 4.4 Sitemap & SEO

- `src/app/sitemap.ts` — home + all live slugs (no removed ITS path).
- Per-page `metadata` / `generateMetadata` — titles, descriptions, canonicals.
- Root layout Open Graph image: campus photo under `About-Facilities/`.
- `public/robots.txt`, `public/llms.txt`, `public/site.webmanifest`.

JSON-LD `knowsAbout` lists graduate IT Management, Software Engineering, and Information Technology and Systems (URL points at `/undergraduate-program` after the ITS page removal).

---

## 5. Component architecture

### 5.1 Domain folders

```
src/components/
├── about/          Who We Are, Facilities, Partners (+ who-we-are/*)
├── academics/      Faculty, programs, research, SE detail
├── admissions/     Admission, scholarship, tuition
├── home/           Homepage sections + announcement popup
├── news/           News listing + event detail pages
├── services/       Student support, library, short trainings
├── layout/         Header, Footer, PageShell
├── providers/      Theme + Motion
├── ui/             SectionReveal, ThemeToggle, WaveDivider, PDFViewer
└── icons/          Feature / contact SVG icons
```

### 5.2 Homepage composition

```
HeroSection                 (eager)
WhyBitsSection              (next/dynamic)
ProgramsSection             (next/dynamic)
GetInTouchSection           (next/dynamic)
AnnouncementPopupLoader     (client-only dynamic, ssr: false)
  └── AnnouncementPopup
```

`AnnouncementSection.tsx` still exists but is **not** mounted.

### 5.3 Content component pattern

Most inner pages:

1. `"use client"` (Framer Motion / interactivity).
2. Muted/gradient hero band with eyebrow + `h1`.
3. `max-w-site` (`1200px`) content.
4. Entrance animations gated by `useMotionSafe()` or `EASE_PREMIUM`.
5. Theme-aware surfaces via CSS variables.

### 5.4 Layout chrome

| Component | Notes |
|---|---|
| `Header` | Fixed; scroll shadow/blur; desktop dropdowns (hover + keyboard); mobile drawer + body scroll lock; ThemeToggle; Apply CTA |
| `Footer` | 3 columns: logo, contact + socials, quick links; no `"use client"` |
| `PageShell` | Animated title wrapper (available for placeholders; unused by current `[slug]` set) |

Nav data: `src/lib/constants/navigation.ts`.

---

## 6. Cross-cutting systems

### 6.1 Motion safety

```
useMotionSafe()
  ready (after mount) && !prefers-reduced-motion  → enabled

useInteractionMotion()
  returns hover/tap Framer props only when enabled
  otherwise undefined → CSS *-fallback classes
```

### 6.2 Theme

```
THEME_SCRIPT (pre-hydration)
  → localStorage bits_theme → html.dark

ThemeProvider
  → useSyncExternalStore(subscribeToTheme, getDOMTheme)
  → setTheme() → applyTheme + persistTheme
```

No cookie-based theme middleware.

### 6.3 Error reporting

| Path | Behavior |
|---|---|
| `ERROR_REPORTER_SCRIPT` | `onerror` / `unhandledrejection` → `sendBeacon('/api/error')` |
| `app/error.tsx` | Segment boundary UI + beacon |
| `app/global-error.tsx` | Root fallback |
| `POST /api/error` | Server `console.error`; `204` |

### 6.4 PDF delivery

Accreditation PDFs: `public/images/About-Who-we-are/`. UI opens them via **public URLs** (and `PDFViewer`).

`GET /api/pdf?file=` allowlists only:

- `graduate_accreditation.pdf`
- `undergraduate_accreditation.pdf`

`PDFViewer`: new tab on mobile (`<768px`); iframe on desktop.

---

## 7. Data architecture

| Location | Contents |
|---|---|
| `lib/constants/site.ts` | `SITE`, Why BITS cards, program cards, contact cards |
| `lib/constants/navigation.ts` | Nav, footer links, socials, apply URL |
| `about/who-we-are/data.ts` | Tabs, mission, values, accreditation items |
| Inline arrays in content components | Faculty, news, facilities, partners, scholarships, … |

Changing content = edit TypeScript or replace files in `public/images/`.

---

## 8. Build & runtime

| Mode | Command | Notes |
|---|---|---|
| Dev | `bun run dev` | Clears `.next`, `:3333` |
| Build | `bun run build` | Next production build |
| Start | `bun run start` | Production server `:3333` |
| Docker | `docker compose up` | `app` + `nginx` + `certbot` |

Dockerfile expects `.next/standalone`. Ensure `output: "standalone"` in `next.config.ts` before Docker builds — see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 9. Tooling scripts

| Script | File | Role |
|---|---|---|
| `bun run test:visual` | `scripts/visual-check.ts` | Overflow + hero visibility vs `:3333` |
| `bun run extract:live` | `scripts/extract-live-dom.ts` | Live site DOM/style capture |
| (manual) | `scripts/debug-page.ts` | Local console / screenshot dump |

Artifacts under `analysis/` are gitignored.

---

## 10. Adding a page

- **Primary nav destination** → dedicated `app/<route>/page.tsx` + content component.
- **Secondary / news detail** → add to `PAGE_TITLES` + dispatch in `[slug]/page.tsx`; update `sitemap.ts` and nav if needed.
- Keep large copy in constants or a colocated `data.ts`.
- Follow [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) tokens and motion safety hooks.

---

*Architecture documented by **NathenaelTamirat** · July 2026*
