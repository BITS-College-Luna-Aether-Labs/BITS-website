# Technical Documentation

Authoritative reference for routes, components, APIs, constants, and assets. Companion to [ARCHITECTURE.md](./ARCHITECTURE.md) and [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

| | |
|---|---|
| **Package** | `bits-college-frontend@1.0.0` |
| **Author** | [NathenaelTamirat](https://github.com/NathenaelTamirat) |
| **Audited against source** | July 2026 |

---

## 1. Stack

| Layer | Technology |
|---|---|
| Framework | Next.js `^15.1` App Router |
| UI | React `^19` |
| Language | TypeScript `^5.7` (strict) |
| Styling | Tailwind CSS `^3.4` + PostCSS + Autoprefixer |
| Motion | Framer Motion `^11.18` |
| Icons | Lucide React `^1.17` + custom SVGs |
| Package manager | Bun (`bun.lock`) |
| Visual QA | Playwright `@playwright/test` (dev) |
| Deploy | Docker (`oven/bun:1`) + Nginx + Certbot |

---

## 2. Route catalog

### 2.1 App Router files

| File | Role |
|---|---|
| `src/app/layout.tsx` | Root shell, fonts, providers, SEO, JSON-LD |
| `src/app/page.tsx` | Homepage |
| `src/app/globals.css` | Design tokens + component classes |
| `src/app/loading.tsx` | Route loading UI |
| `src/app/error.tsx` | Segment error boundary |
| `src/app/global-error.tsx` | Root error boundary |
| `src/app/not-found.tsx` | Branded 404 |
| `src/app/sitemap.ts` | XML sitemap |
| `src/app/api/pdf/route.ts` | PDF allowlist proxy |
| `src/app/api/error/route.ts` | Client error ingest |
| `src/middleware.ts` | CSP nonce + policy |

### 2.2 Dedicated pages

| URL | Content |
|---|---|
| `/` | `HeroSection`, dynamic `WhyBitsSection` / `ProgramsSection` / `GetInTouchSection`, `AnnouncementPopupLoader` |
| `/who-we-are` | `WhoWeAreContent` |
| `/facilities` | `FacilitiesContent` |
| `/partners-and-clients` | `PartnersAndClientsContent` |
| `/faculty` | `FacultyContent` |
| `/undergraduate-program` | `UndergraduateProgramContent` |
| `/student-support` | `StudentSupportContent` |
| `/college-news` | `NewsEventsContent` |

### 2.3 `[slug]` pages (all content-backed)

`library`, `graduate-program`, `research`, `software-engineering`, `undergrad-admission`, `graduate-admission`, `scholarship-aid`, `tuition`, `short-trainings`, `inauguration`, `student-appreciation-night`, `workshop`, `college-day`, `bootcamp`, `scholarship-recipients`

### 2.4 Redirects

| From | To |
|---|---|
| `/scholarship-recepients` | `/scholarship-recipients` |
| `/undergraduate-accreditation` | `/who-we-are?section=accreditation&doc=undergraduate` |
| `/graduate-accreditation` | `/who-we-are?section=accreditation&doc=graduate` |
| `/information-technology-and-systems` | `/undergraduate-program` |

### 2.5 Navigation

Primary nav (`NAV_ITEMS`):

- Home `/`
- About → Who We Are, Facilities, Partners
- Academics → Instructors (`/faculty`), Undergraduate Programs, Graduate Programs, Research
- Admissions → Undergrad, Graduate, Scholarship & Aid
- Services → Student Support, Online Learning (external), Library, Professional Trainings
- News & Events `/college-news`

Footer also links Tuition and accreditation deep links into Who We Are.

---

## 3. Homepage modules

| Component | Responsibility |
|---|---|
| `HeroSection` | “Join the Vision”, Apply CTA, blobs, hero image, wave divider |
| `WhyBitsSection` | Four feature cards from `WHY_BITS_CARDS` (dynamic import) |
| `ProgramsSection` | Image + `PROGRAM_CARDS` (dynamic import) |
| `GetInTouchSection` | Three contact cards (dynamic import) |
| `AnnouncementPopupLoader` | Client-only wrapper (`ssr: false`) → `AnnouncementPopup` |
| `AnnouncementPopup` | Class of 2026 modal; `sessionStorage` key `bits_announcement_shown` |

Legacy unused: `AnnouncementSection.tsx`.

---

## 4. Content modules by domain

### 4.1 About

| Component | Highlights |
|---|---|
| `WhoWeAreContent` | Tabs via `who-we-are/data.ts` + `sections.tsx`; `?section=` / `?doc=` deep links; accreditation PDF modal |
| `FacilitiesContent` | Facility highlights with image carousels; stats; Apply CTA |
| `PartnersAndClientsContent` | Five partners: MKS Addis, Bunna Bank, Serianu, Custor, USI |

### 4.2 Academics

| Component | Highlights |
|---|---|
| `FacultyContent` | Instructor grid with portraits / initials fallback |
| `UndergraduateProgramContent` | Software Engineering card → `/software-engineering` |
| `GraduateProgramContent` | M.Sc. Information Technology Management |
| `ResearchContent` | Focus + core research areas |
| `SoftwareEngineeringContent` | SE program detail |

### 4.3 Admissions

| Component | Highlights |
|---|---|
| `UndergradAdmissionContent` | Ethiopian + foreign applicant requirements |
| `GraduateAdmissionContent` | Graduate requirements |
| `ScholarshipAidContent` | Scholarship types + PDF brochure modal |
| `TuitionContent` | Narrative fee guidance + phone/email + Apply portal (no hardcoded price table) |

### 4.4 Services

| Component | Highlights |
|---|---|
| `StudentSupportContent` | Academic / disability support + extracurricular tabs |
| `LibraryContent` | Physical + digital library + portal CTA |
| `ShortTrainingsContent` | Professional short training cards |

### 4.5 News

| Component | Highlights |
|---|---|
| `NewsEventsContent` | Card feed (~18 items: images, local MP4, YouTube); play/pause overlays |
| `InaugurationContent` | Event detail |
| `StudentAppreciationNightContent` | Event detail |
| `WorkshopContent` | Event detail |
| `CollegeDayContent` | Event detail |
| `BootcampContent` | Summer bootcamp detail |
| `ScholarshipRecipientsContent` | 2023/24 recipients |

```ts
type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image?: { src: string; alt: string };
  videoId?: string;   // YouTube
  videoSrc?: string;  // local MP4
  href?: string;
  noButton?: true;
};
```

---

## 5. Layout, providers, UI

### 5.1 Layout

| File | Notes |
|---|---|
| `Header.tsx` | Client; scroll state; desktop dropdowns; mobile menu; Apply + ThemeToggle |
| `Footer.tsx` | Server-friendly; contact, socials, quick links |
| `PageShell.tsx` | Animated title shell (available for placeholders) |

### 5.2 Providers & hooks

| File | Notes |
|---|---|
| `ThemeProvider.tsx` | `useSyncExternalStore` over DOM theme |
| `MotionProvider.tsx` | Framer `MotionConfig` |
| `useMotionSafe.ts` | `enabled = ready && !reducedMotion` |
| `useInteractionMotion.ts` | Conditional hover/tap props |

### 5.3 UI primitives

`SectionReveal`, `ThemeToggle`, `WaveDivider`, `PDFViewer` — see Design System §7.

### 5.4 Icons

`FeatureIcons.tsx` — book, graduation, building, community, phone, mail, location, etc.

---

## 6. Lib modules

### 6.1 `site.ts`

- `SITE` — name, tagline, description, url, phone, email, address, copyright year
- `WHY_BITS_CARDS` — 4 cards with icon keys + hrefs
- `PROGRAM_CARDS` — graduate IT Management + undergraduate Software Engineering
- `CONTACT_CARDS` — phone, featured location, email

### 6.2 `navigation.ts`

- `APPLY_URL`
- `NAV_ITEMS`
- `FOOTER_QUICK_LINKS`
- `SOCIAL_LINKS` (Facebook, X, Instagram, YouTube)

### 6.3 Theme & errors

| Export | Role |
|---|---|
| `THEME_SCRIPT` | Pre-hydration dark class |
| `applyTheme` / `persistTheme` / `subscribeToTheme` | Theme runtime API |
| `ERROR_REPORTER_SCRIPT` | Global error → `sendBeacon('/api/error')` |
| Motion presets | See Design System §6 |

---

## 7. APIs

### 7.1 `GET /api/pdf?file=`

Allowlist:

- `graduate_accreditation.pdf`
- `undergraduate_accreditation.pdf`

Path: `public/images/About-Who-we-are/<file>`  
Responses: `200` PDF (`inline`, `Cache-Control: public, max-age=3600`) or `404`.

### 7.2 `POST /api/error`

Accepts JSON or text; logs server-side; returns `204`.

---

## 8. Configuration

### 8.1 `next.config.ts`

- Image formats: AVIF, WebP
- `deviceSizes` / `imageSizes` capped (no 3840 default)
- Remote pattern: `i.ytimg.com/vi/**` (YouTube thumbs)
- `experimental.optimizePackageImports` for `lucide-react`, `framer-motion`
- Redirects (typo + accreditation + ITS → undergrad)
- Headers: long-cache for `/images/*`; site-wide `nosniff`, `SAMEORIGIN`, Referrer-Policy, Permissions-Policy; production HSTS

CSP is owned by middleware — see [SECURITY.md](./SECURITY.md).

### 8.2 `tailwind.config.ts`

- `darkMode: "class"`
- Content: `src/app/**`, `src/components/**`
- Extended: `bits` colors, fonts, `maxWidth.site`, shadows, `rounded-pill`

### 8.3 TypeScript

Strict mode, `moduleResolution: "bundler"`, path alias `@/*`.

---

## 9. Assets (`public/images/`)

| Directory / file | Consumers |
|---|---|
| `logo.png` | Header, Footer, popup, 404 |
| `hero-landingpage.png` | Hero |
| `programs-student.webp` | Programs section |
| `About-Facilities/` | Facilities + OG |
| `About-Who-we-are/` | Accreditation PDFs |
| `About-partner/` | Partner logos |
| `Academics-*` | Program / research / SE media |
| `Admissions-*` | Admission / scholarship media |
| `Faculty-Members/` | Faculty portraits |
| `News-Events/` | News images + MP4s |
| `Services-*` | Support / training imagery |

Also: `public/site.webmanifest`, `public/robots.txt`, `public/llms.txt`.  
News MP4s are the largest bandwidth cost.

---

## 10. Error & empty states

| Case | Handling |
|---|---|
| Unknown route | `not-found.tsx` |
| Unknown `[slug]` | `notFound()` |
| React render error | `error.tsx` + beacon |
| Faculty missing image | Initials fallback |
| Motion reduced / SSR | Static variants via hooks |
| PDF missing / bad file | API `404` |
| Announcement already shown | Popup skipped for session |

---

## 11. Scripts

| Script | Purpose |
|---|---|
| `dev` / `dev:clean` | Wipe `.next`, run Next on `3333` |
| `build` | Production build |
| `start` | Serve production on `3333` |
| `lint` | `next lint` |
| `test:visual` | Playwright visual/overflow check |
| `extract:live` | Live site DOM extraction |

---

## 12. Known gaps (current)

1. **`output: "standalone"`** — Dockerfile copies `.next/standalone`, but `next.config.ts` does not currently declare it. Add before Docker production builds.
2. **`AnnouncementSection`** — unused on home; candidate for removal or reuse.
3. **ITS undergrad page** — removed; permanent redirect to `/undergraduate-program`. JSON-LD still names the program with that URL.

---

## 13. Source scale

| Area | Scale (approx.) |
|---|---|
| App routes / APIs | ~17 TSX/TS files under `src/app` |
| Components | ~45 TSX files |
| Hooks + lib | ~7 files |
| Fonts | 3 woff2 |
| Public media | ~80+ files |

Exact listing: `find src -type f | sort`.

---

*Technical docs by **NathenaelTamirat** · July 2026*
