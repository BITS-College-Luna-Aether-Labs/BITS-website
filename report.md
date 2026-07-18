# BITS College Frontend — Full Source Code Report

> **Project:** BITS College Homepage (bits-college-frontend)  
> **Version:** 1.0.0  

---

## 1. TECH STACK

| Layer | Technology | Details |
|---|---|---|
| **Framework** | Next.js 15.1 | App Router, standalone output |
| **Language** | TypeScript 5.7 | Strict mode, `@/*` path alias |
| **UI Library** | React 19 | Server & client components |
| **Styling** | Tailwind CSS 3.4 | Custom `bits-*` design tokens, dark mode (`class` strategy) |
| **Animation** | Framer Motion 11.18 | Page transitions, scroll reveals, hover/tap interactions, confetti |
| **Icons** | Lucide React 1.17 | Plus custom SVG icons for features, social, and contact |
| **Fonts** | Self-hosted woff2 | Open Sans (sans), Roboto Slab (slab), Playfair Display (display) |
| **Package Mgr** | Bun | Lockfile: `bun.lock` |
| **Linting** | ESLint 9 + `eslint-config-next` | |
| **PostCSS** | PostCSS 8 + Autoprefixer | |
| **Testing (dev)** | Playwright 1.49 | Visual check scripts in `scripts/` |
| **Docker** | Multi-stage Bun build | `oven/bun:1` → standalone Next.js, exposed on port 3333 |
| **Reverse Proxy** | Nginx 1.27 (Alpine) | HTTP→HTTPS redirect, SSL termination, static caching |
| **SSL** | Certbot (Let's Encrypt) | Auto-renew via docker-compose |
| **CI/CD** | Docker + docker-compose | 3 services: `app`, `nginx`, `certbot` |

### Key Dependencies (package.json)

| Package | Version | Purpose |
|---|---|---|
| `next` | ^15.1.0 | Framework core |
| `react` | ^19.0.0 | UI library |
| `framer-motion` | ^11.18.2 | Physics-based animations |
| `lucide-react` | ^1.17.0 | Icon library |
| `tailwindcss` | ^3.4.17 | Utility-first CSS |
| `typescript` | ^5.7.2 | Type checking |

---

## 2. PAGES & ROUTES

### 2.1 Root Layout (`src/app/layout.tsx`)
- Wraps all pages with `<Header>`, `<Footer>`, `<ThemeProvider>`, `<MotionProvider>`
- Injects 3 local font families via CSS variables
- Injects JSON-LD structured data (EducationalOrganization schema)
- Sets CSP headers via middleware
- Provides "Skip to main content" accessibility link

### 2.2 Route Map

| Route | Page Component | Content Component | Category |
|---|---|---|---|
| `/` | `src/app/page.tsx` | `HomePage` (composes 5 sections) | Home |
| `/[slug]` | `src/app/[slug]/page.tsx` | Dynamic dispatch (see below) | All inner pages |
| `/api/pdf?file=` | `src/app/api/pdf/route.ts` | PDF proxy | API |

### 2.3 Dynamic Slug Pages (`src/app/[slug]/page.tsx`)

All inner pages use a single dynamic `[slug]` route with `generateStaticParams` and `generateMetadata`. The slug-to-content mapping:

| Slug | Page Title | Component | Group |
|---|---|---|---|
| `who-we-are` | Who We Are | `WhoWeAreContent` | About |
| `facilities` | Facilities | `FacilitiesContent` | About |
| `partners-and-clients` | Partners and Clients | `PartnersAndClientsContent` | About |
| `faculty` | Faculty | `FacultyContent` | Academics |
| `undergraduate-program` | Undergraduate Programs | `UndergraduateProgramContent` | Academics |
| `graduate-program` | Graduate Programs | `GraduateProgramContent` | Academics |
| `research` | Research | `ResearchContent` | Academics |
| `software-engineering` | Software Engineering | `SoftwareEngineeringContent` | Academics (detail) |
| `information-technology-and-systems` | Information Technology & Systems | `InformationTechnologySystemsContent` | Academics (detail) |
| `undergrad-admission` | Undergraduate Admission | `UndergradAdmissionContent` | Admissions |
| `graduate-admission` | Graduate Admission | `GraduateAdmissionContent` | Admissions |
| `scholarship-aid` | Scholarship & Aid | `ScholarshipAidContent` | Admissions |
| `tuition` | Tuition | `TuitionContent` | Admissions |
| `student-support` | Student Support | `StudentSupportContent` | Services |
| `short-trainings` | Professional Trainings | `ShortTrainingsContent` | Services |
| `college-news` | News & Events | `NewsEventsContent` | News |
| `inauguration` | BITS College Inauguration | `InaugurationContent` | News (detail) |
| `student-appreciation-night` | Student Appreciation Night | `StudentAppreciationNightContent` | News (detail) |
| `workshop` | Workshop | `WorkshopContent` | News (detail) |
| `college-day` | BITS College Day | `CollegeDayContent` | News (detail) |
| `bootcamp` | Summer Bootcamp | `BootcampContent` | News (detail) |
| `scholarship-recipients` | Merit Based Scholarship Recipients | `ScholarshipRecipientsContent` | News (detail) |
| `undergraduate-accreditation` | Undergraduate Accreditation | `PageShell` (scaffolded) | — |
| `graduate-accreditation` | Graduate Accreditation | `PageShell` (scaffolded) | — |
| `scholarship-recepients` | *(redirects to `/scholarship-recipients`)* | — | Redirect |

### 2.4 Sitemap (`src/app/sitemap.ts`)
- Generates XML sitemap with 23 pages
- Homepage: priority 1.0, weekly
- All inner pages: priority 0.7, monthly

### 2.5 Error & Loading States
| File | Type | Purpose |
|---|---|---|
| `src/app/error.tsx` | Client error boundary | "Something went wrong" with "Try again" and "Go home" buttons |
| `src/app/loading.tsx` | Route loading | Spinner with "Loading..." text |

---

## 3. FEATURES

### 3.1 Homepage Sections

#### Hero Section (`src/components/home/HeroSection.tsx`)
- Animated heading "Join the Vision" with gradient underline
- Pulsating green blob backgrounds
- Floating student image with vertical hover animation
- "Apply Now" CTA button with gentle rotation animation
- Wave divider at bottom
- Motion-safe fallback (no animations when reduced-motion is preferred)

#### Announcement Popup (`src/components/home/AnnouncementPopup.tsx`)
- Full-screen modal overlay with backdrop blur
- "2026 Graduation" announcement
- Confetti burst animation (80 particles with varied shapes/colors)
- Pulsing close button with ripple rings
- Sparkle, PartyPopper, and ScrollText decorative icons
- Session-scoped visibility (shown once per session)
- Blocks body scroll while open

#### Announcement Section (`src/components/home/AnnouncementSection.tsx`)
- Displays "National Exit Exam 2025 pass" announcement image
- Scale/hover reveal on scroll

#### Why BITS Section (`src/components/home/WhyBitsSection.tsx`)
- 4 feature cards: High Quality Programs, Qualified Staff, State-of-the-Art Infrastructure, Student-centered Teaching
- Custom SVG blob decoration with ambient animation
- Cards have staggered entrance and hover lift effects
- "Learn More" CTA link
- Wave divider on top

#### Programs Section (`src/components/home/ProgramsSection.tsx`)
- 1 graduate program card (IT Management) + 2 undergraduate cards (SE, ITS)
- Green left-border accent on each card
- Student image with parallax on scroll
- Cards have staggered entrance from the right

#### Get In Touch Section (`src/components/home/GetInTouchSection.tsx`)
- 3 contact cards: Phone, Location (featured/raised), Email
- Featured location card has green background and extra height
- SVG path decorations with opacity animation
- Staggered entrance with slow delay

### 3.2 About Pages

#### Who We Are (`src/components/about/WhoWeAreContent.tsx`, `sections.tsx`, `data.ts`)
- Tabbed navigation (5 sections): Overview, Mission & Vision, Dean's Message, Accreditation, Student Support
- **Overview tab**: Brand identity (BITS meaning, logo narrative), stats (335+ students, 135+ enrolled), embedded YouTube virtual tour, color pairings explanation
- **Mission & Vision tab**: 6 mission points, vision statement (by 2030), 5 core values
- **Dean's Message tab**: Full message from Dr. Tesfaye Biru, photo
- **Accreditation tab**: 2 cards (undergrad/graduate) opening PDF modal
- **Student Support tab**: 3 support items + link to /student-support
- Sticky sidebar with quick-nav buttons
- PDF modal using `PDFViewer` component
- Supports query param `?section=accreditation` for deep-linking

#### Facilities (`src/components/about/FacilitiesContent.tsx`)
- 6 facility cards with carousel sliders: Classrooms, Computer Labs, IT Infrastructure, Library, College Building, Online Learning
- Alternating layout (image left/right)
- Stats row: "24/7" Campus systems, "High" Digital access, "Active" Student support
- CTA banner "Start your journey at BITS" linking to application

#### Partners & Clients (`src/components/about/PartnersAndClientsContent.tsx`)
- 4 partner logo cards: MKS Addis, Bunna Bank, Serianu, British Council
- Radial gradient background decorations
- Hover lift effect with shadow enhancement

### 3.3 Academics Pages

#### Faculty (`src/components/academics/FacultyContent.tsx`)
- 16 faculty members displayed in responsive grid (2-4 columns)
- Image cards with hover/touch overlay revealing name, role, and courses taught
- Fallback initials gradient for missing images
- Lazy loading for cards beyond first row

#### Undergraduate Programs (`src/components/academics/UndergraduateProgramContent.tsx`)
- 2 program cards: Software Engineering, IT and Systems
- Each card has description, 3 key points, image, and "Read More" link
- Icon badges (SE, ITS) with gradient accents

#### Graduate Program (`src/components/academics/GraduateProgramContent.tsx`)
- MSc in IT Management with 5 focus areas
- Hero image side-by-side layout

#### Software Engineering (detail) (`src/components/academics/SoftwareEngineeringContent.tsx`)
- Gradient hero heading
- Overview, "What will I study?" (8 course areas), Graduation Requirements (Grade, Internships, Community Service), Career Paths (5 roles)
- Staggered scroll animations with images

#### Information Technology & Systems (detail) (`src/components/academics/InformationTechnologySystemsContent.tsx`)
- Same template as SE: Overview, What will I study? (8 areas), Graduation Requirements, Career Paths (7 roles)

#### Research (`src/components/academics/ResearchContent.tsx`)
- 2-column layout: Focus description + Core Areas (7 items)
- Alternating image positions

### 3.4 Admissions Pages

#### Undergraduate Admission (`src/components/admissions/UndergradAdmissionContent.tsx`)
- 3 numbered requirements for Ethiopian students
- Foreign student admission based on HERQA equivalence
- 2 images

#### Graduate Admission (`src/components/admissions/GraduateAdmissionContent.tsx`)
- 3 numbered requirements for MSc IT Management admission
- 1 hero image

#### Scholarship & Aid (`src/components/admissions/ScholarshipAidContent.tsx`)
- 4 scholarship types: Merit-based, Need-Based, Female Scholarship, Work Study Program
- Alternating layout with images and full descriptions
- Anchor-link navigation to each scholarship type
- "For More Information" button opens PDF modal with scholarship brochure

#### Tuition (`src/components/admissions/TuitionContent.tsx`)
- 2 tables: Undergraduate (Regular/Extension at 2400 ETB/credit) and Graduate (Regular/Extension at 3500 ETB/credit)
- Note about 16-18 average credits per semester

### 3.5 Services Pages

#### Student Support (`src/components/services/StudentSupportContent.tsx`)
- Academic Support + Disability Support + Extra Curricular Activities
- 9 extracurricular tabs: Hackathons, Women in Tech, Leadership, Charity Club, Toastmasters, Media, Creative Communication, AIESEC, Book Clubs
- Each tab has detailed Q&A content with animated transitions

#### Professional Trainings (`src/components/services/ShortTrainingsContent.tsx`)
- 2 training cards: Software Development (8 topics) and IT Management (7 topics)
- Images with bullet lists

### 3.6 News & Events

#### News & Events Listing (`src/components/news/NewsEventsContent.tsx`)
- 16 news items displayed 6 per page with pagination
- Mixed content: YouTube embeds, MP4 videos, images
- Card hover lift effect with image zoom
- Date badge and "Read More" links

#### Individual News Detail Pages
- **Inauguration** (Jan 2021): Hero image + description
- **Student Appreciation Night** (Dec 2021): Award ceremony recap
- **Workshop** (Mar 2022): "Preparing for the Tech Industry" recap
- **College Day** (Jun 2023): Student demonstrations and games
- **Summer Bootcamp** (Aug 2023): Speaker recap + 4 image gallery
- **Scholarship Recipients** (Sep 2023): 3 student cards (Alazar, Fanuel, Nahom) with hover/touch overlay revealing project descriptions

### 3.7 Layout Components

#### Header (`src/components/layout/Header.tsx`)
- Fixed top navigation with scroll-aware backdrop blur
- Desktop: horizontal nav with dropdown menus (hover with 80ms delay, keyboard accessible)
- Mobile: hamburger menu with animated slide-in, focus trapping, escape-to-close
- Active page indicator with animated underline
- Theme toggle button with spring physics
- "Apply Now" button linking to external application portal
- Logo image with dark mode inversion

#### Footer (`src/components/layout/Footer.tsx`)
- 3-column grid: Logo + tagline, Contact Info (email/phone/address), Quick Links (6 links)
- 4 social media icons (Facebook, Twitter/X, Instagram, YouTube) with hover lift
- Copyright line

#### PageShell (`src/components/layout/PageShell.tsx`)
- Reusable wrapper for scaffolded pages
- Title, optional description, and children with motion entrance

### 3.8 UI Primitives

| Component | File | Purpose |
|---|---|---|
| `SectionReveal` | `ui/SectionReveal.tsx` | Scroll-triggered fade+slide entrance; optional glow accent |
| `WaveDivider` | `ui/WaveDivider.tsx` | Decorative SVG wave between sections; flippable; respects reduced-motion |
| `ThemeToggle` | `ui/ThemeToggle.tsx` | Dark/light toggle with animated sun/moon icon swap |
| `PDFViewer` | `ui/PDFViewer.tsx` | Responsive PDF viewer — opens new tab on mobile, inline iframe on desktop |

### 3.9 Providers

| Provider | File | Purpose |
|---|---|---|
| `ThemeProvider` | `providers/ThemeProvider.tsx` | Light/dark context using `useSyncExternalStore`; localStorage persistence |
| `MotionProvider` | `providers/MotionProvider.tsx` | Global Framer Motion config; respects `reducedMotion="user"` |

### 3.10 Hooks

| Hook | File | Purpose |
|---|---|---|
| `useMotionSafe` | `hooks/useMotionSafe.ts` | Returns `{ enabled, shouldReduce, ready }` to guard animations until client hydration |
| `useInteractionMotion` | `hooks/useInteractionMotion.ts` | Returns pre-configured hover/tap props only when motion is safe |

### 3.11 Icons

| Component | File | Icons |
|---|---|---|
| `FeatureIcon` | `icons/FeatureIcons.tsx` | `book`, `graduation`, `building`, `community` (custom SVG) |
| Direct exports | same file | `PhoneIcon`, `LocationIcon`, `MailIcon` |

### 3.12 Middleware (`src/middleware.ts`)
- Sets `Content-Security-Policy` with nonce-based script loading
- Permits Google Maps, YouTube, YouTube-nocookie in frame-src
- Allows `applications.bitscollege.edu.et` in form-action
- HSTS in production
- Sets `x-nonce` header for inline scripts

### 3.13 API Routes

#### PDF Proxy (`src/app/api/pdf/route.ts`)
- `GET /api/pdf?file=<filename>`
- Whitelist: only `graduate_accreditation.pdf` and `undergraduate_accreditation.pdf`
- Reads from `public/images/About-Who-we-are/`
- Sets Content-Type, Content-Disposition, Cache-Control, X-Frame-Options

### 3.14 Infrastructure & DevOps

| Component | File | Purpose |
|---|---|---|
| **Dockerfile** | `Dockerfile` | Multi-stage Bun build → standalone Next.js |
| **docker-compose.yml** | `docker-compose.yml` | `app` (Next.js), `nginx` (reverse proxy), `certbot` (SSL auto-renew) |
| **Nginx Config** | `nginx/nginx.conf` | Gzip, sendfile, MIME types, security headers |
| **Nginx Site Config** | `nginx/conf.d/bits.conf` | HTTP→HTTPS redirect, SSL termination, static asset caching (`_next/static/` 1yr, `/images/` 1wk), proxy to app:3333 |
| **Healthcheck** | docker-compose | `wget http://localhost:3333/` every 30s |

### 3.15 Navigation Structure

**Header Nav** (5 top-level items):
1. Home
2. About → Who We Are, Facilities, Partners and Clients
3. Academics → Faculty, Undergraduate Programs, Graduate Programs, Research
4. Admissions → Undergraduate Admission, Graduate Admission, Scholarship & Aid
5. Services → Student Support, Online Learning (external), Library (external), Professional Trainings
6. News & Events

**Footer Quick Links**: Tuition, Undergraduate Admission, Graduate Admission, Undergraduate Accreditation, Graduate Accreditation

**External Links**: Apply Now → `applications.bitscollege.edu.et`, Online Learning → `online.bitscollege.edu.et`, Library → `intranet.bitscollege.edu.et/library/`

### 3.16 CSS Design System (`src/app/globals.css`)

**Custom Properties** — `:root` and `.dark`:
- Colors: `--bits-green`, `--bits-gold`, `--bits-heading`, `--bits-text`, `--bits-surface`, `--bits-page`, etc.
- Shadows: 5 card hover variants (rise, lift, featured, announce)

**Component Classes** (Tailwind `@layer components`):
- `.site-container` — max-width 1200px centered wrapper
- `.section-surface` / `.section-surface-muted` — themed section backgrounds
- `.nav-link` / `.nav-link-active` — header navigation states
- `.btn-outline-green` / `.btn-solid-green` — CTA buttons with pill radius
- `.program-card` / `.feature-card` / `.contact-card-side` / `.contact-card-featured` — card layouts
- `.dropdown-panel` — header dropdown menu
- `.footer-link` / `.footer-social` — footer interaction states

**Accessibility**:
- `:focus-visible` outline with green offset
- Skip-to-main link (visible on focus)
- Respects `prefers-reduced-motion` (disables animations, scroll-behavior: auto)

### 3.17 Redirects (next.config.ts)
- `/scholarship-recepients` → `/scholarship-recipients` (301 permanent, with and without trailing slash)

### 3.18 Security Headers (next.config.ts)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `Strict-Transport-Security` (production only, 2 years)

---

## 4. PROJECT STATISTICS

| Metric | Count |
|---|---|
| Total source files (src/) | ~41 |
| Route pages | 7 (1 dynamic) |
| Components | 39 |
| Hooks | 2 |
| Lib/constants files | 4 |
| Public images | ~79 (across 13 directories) |
| Public PDFs | 2 |
| Public videos (MP4) | 7 |
| Font files | 3 (woff2) |
| Docker/Nginx configs | 4 |
| Documentation files | 4 |
| Dev scripts | 3 |
| Partners listed | 4 |
| Faculty members | 16 |
| Scholarship types | 4 |
| News events | 16 |
| Extracurricular activities | 9 |
| Professional training topics | 15 |
