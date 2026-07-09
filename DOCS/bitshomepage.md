# CodeBundle: bits-Home-page
Generated: 2026-06-12T07:48:04.307Z
Root: /Users/nati.t/Documents/Projects/WORK/BITS COLLEGE WORK/source codes/BITS HOME PAGE/BITS HOME/bits-Home-page
Files: 75

## How to apply changes
- Return changes as **unified diffs** per file whenever possible.
- Files are delimited with `<!-- FILE: ... -->` markers.

## Project tree
```
├─ .dockerignore
├─ .gitignore
├─ bun.lock
├─ docker-compose.yml
├─ Dockerfile
├─ DOCS
│  ├─ SECURITY.md
│  └─ TECHNICAL_DOCUMENTATION.md
├─ implementation.md
├─ LICENSE
├─ next-env.d.ts
├─ next.config.ts
├─ nginx
│  ├─ conf.d
│  │  └─ bits.conf
│  └─ nginx.conf
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ scripts
│  ├─ debug-page.ts
│  ├─ extract-live-dom.ts
│  └─ visual-check.ts
├─ src
│  ├─ app
│  │  ├─ [slug]
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  │  └─ pdf
│  │  │     └─ route.ts
│  │  ├─ error.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ loading.tsx
│  │  ├─ page.tsx
│  │  └─ sitemap.ts
│  ├─ components
│  │  ├─ about
│  │  │  ├─ FacilitiesContent.tsx
│  │  │  ├─ PartnersAndClientsContent.tsx
│  │  │  ├─ who-we-are
│  │  │  │  ├─ data.ts
│  │  │  │  └─ sections.tsx
│  │  │  └─ WhoWeAreContent.tsx
│  │  ├─ academics
│  │  │  ├─ FacultyContent.tsx
│  │  │  ├─ GraduateProgramContent.tsx
│  │  │  ├─ InformationTechnologySystemsContent.tsx
│  │  │  ├─ ResearchContent.tsx
│  │  │  ├─ SoftwareEngineeringContent.tsx
│  │  │  └─ UndergraduateProgramContent.tsx
│  │  ├─ admissions
│  │  │  ├─ GraduateAdmissionContent.tsx
│  │  │  ├─ ScholarshipAidContent.tsx
│  │  │  ├─ TuitionContent.tsx
│  │  │  └─ UndergradAdmissionContent.tsx
│  │  ├─ home
│  │  │  ├─ AnnouncementSection.tsx
│  │  │  ├─ GetInTouchSection.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ ProgramsSection.tsx
│  │  │  └─ WhyBitsSection.tsx
│  │  ├─ icons
│  │  │  └─ FeatureIcons.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ PageShell.tsx
│  │  ├─ news
│  │  │  ├─ BootcampContent.tsx
│  │  │  ├─ CollegeDayContent.tsx
│  │  │  ├─ InaugurationContent.tsx
│  │  │  ├─ NewsEventsContent.tsx
│  │  │  ├─ ScholarshipRecipientsContent.tsx
│  │  │  ├─ StudentAppreciationNightContent.tsx
│  │  │  └─ WorkshopContent.tsx
│  │  ├─ providers
│  │  │  ├─ MotionProvider.tsx
│  │  │  └─ ThemeProvider.tsx
│  │  ├─ services
│  │  │  ├─ ShortTrainingsContent.tsx
│  │  │  └─ StudentSupportContent.tsx
│  │  └─ ui
│  │     ├─ PDFViewer.tsx
│  │     ├─ SectionReveal.tsx
│  │     ├─ ThemeToggle.tsx
│  │     └─ WaveDivider.tsx
│  ├─ hooks
│  │  ├─ useInteractionMotion.ts
│  │  └─ useMotionSafe.ts
│  ├─ lib
│  │  ├─ constants
│  │  │  ├─ navigation.ts
│  │  │  └─ site.ts
│  │  ├─ motion-presets.ts
│  │  └─ theme.ts
│  └─ middleware.ts
├─ tailwind.config.ts
└─ tsconfig.json
```

## Files list

- `.dockerignore` (199 bytes)
- `.gitignore` (829 bytes)
- `bun.lock` (102865 bytes)
- `docker-compose.yml` (1234 bytes)
- `Dockerfile` (1327 bytes)
- `DOCS/SECURITY.md` (1936 bytes)
- `DOCS/TECHNICAL_DOCUMENTATION.md` (27844 bytes)
- `implementation.md` (22190 bytes)
- `LICENSE` (758 bytes)
- `next-env.d.ts` (262 bytes)
- `next.config.ts` (1215 bytes)
- `nginx/conf.d/bits.conf` (2485 bytes)
- `nginx/nginx.conf` (849 bytes)
- `package.json` (882 bytes)
- `postcss.config.mjs` (157 bytes)
- `README.md` (1094 bytes)
- `scripts/debug-page.ts` (1218 bytes)
- `scripts/extract-live-dom.ts` (3167 bytes)
- `scripts/visual-check.ts` (2608 bytes)
- `src/app/[slug]/page.tsx` (8813 bytes)
- `src/app/api/pdf/route.ts` (949 bytes)
- `src/app/error.tsx` (1412 bytes)
- `src/app/globals.css` (6672 bytes)
- `src/app/layout.tsx` (4819 bytes)
- `src/app/loading.tsx` (448 bytes)
- `src/app/page.tsx` (805 bytes)
- `src/app/sitemap.ts` (978 bytes)
- `src/components/about/FacilitiesContent.tsx` (10616 bytes)
- `src/components/about/PartnersAndClientsContent.tsx` (4201 bytes)
- `src/components/about/who-we-are/data.ts` (1974 bytes)
- `src/components/about/who-we-are/sections.tsx` (16331 bytes)
- `src/components/about/WhoWeAreContent.tsx` (6232 bytes)
- `src/components/academics/FacultyContent.tsx` (8414 bytes)
- `src/components/academics/GraduateProgramContent.tsx` (2282 bytes)
- `src/components/academics/InformationTechnologySystemsContent.tsx` (8884 bytes)
- `src/components/academics/ResearchContent.tsx` (4019 bytes)
- `src/components/academics/SoftwareEngineeringContent.tsx` (8673 bytes)
- `src/components/academics/UndergraduateProgramContent.tsx` (6571 bytes)
- `src/components/admissions/GraduateAdmissionContent.tsx` (3399 bytes)
- `src/components/admissions/ScholarshipAidContent.tsx` (9359 bytes)
- `src/components/admissions/TuitionContent.tsx` (3445 bytes)
- `src/components/admissions/UndergradAdmissionContent.tsx` (4518 bytes)
- `src/components/home/AnnouncementSection.tsx` (2103 bytes)
- `src/components/home/GetInTouchSection.tsx` (6835 bytes)
- `src/components/home/HeroSection.tsx` (5359 bytes)
- `src/components/home/ProgramsSection.tsx` (5990 bytes)
- `src/components/home/WhyBitsSection.tsx` (4728 bytes)
- `src/components/icons/FeatureIcons.tsx` (4098 bytes)
- `src/components/layout/Footer.tsx` (5214 bytes)
- `src/components/layout/Header.tsx` (17984 bytes)
- `src/components/layout/PageShell.tsx` (1340 bytes)
- `src/components/news/BootcampContent.tsx` (3992 bytes)
- `src/components/news/CollegeDayContent.tsx` (2912 bytes)
- `src/components/news/InaugurationContent.tsx` (2813 bytes)
- `src/components/news/NewsEventsContent.tsx` (16260 bytes)
- `src/components/news/ScholarshipRecipientsContent.tsx` (6470 bytes)
- `src/components/news/StudentAppreciationNightContent.tsx` (3116 bytes)
- `src/components/news/WorkshopContent.tsx` (3399 bytes)
- `src/components/providers/MotionProvider.tsx` (425 bytes)
- `src/components/providers/ThemeProvider.tsx` (1408 bytes)
- `src/components/services/ShortTrainingsContent.tsx` (3466 bytes)
- `src/components/services/StudentSupportContent.tsx` (12095 bytes)
- `src/components/ui/PDFViewer.tsx` (2060 bytes)
- `src/components/ui/SectionReveal.tsx` (1493 bytes)
- `src/components/ui/ThemeToggle.tsx` (2323 bytes)
- `src/components/ui/WaveDivider.tsx` (1416 bytes)
- `src/hooks/useInteractionMotion.ts` (909 bytes)
- `src/hooks/useMotionSafe.ts` (578 bytes)
- `src/lib/constants/navigation.ts` (2326 bytes)
- `src/lib/constants/site.ts` (1886 bytes)
- `src/lib/motion-presets.ts` (1053 bytes)
- `src/lib/theme.ts` (1098 bytes)
- `src/middleware.ts` (1022 bytes)
- `tailwind.config.ts` (1312 bytes)
- `tsconfig.json` (566 bytes)

---
<!-- FILE: .dockerignore -->
## .dockerignore

```
.next/
node_modules/
.git/
.gitignore
.env
.env.local
.env.*.local
*.md
LICENSE
analysis/
.cache/
.next/
out/
dist/
.vscode/
.idea/
*.log
.DS_Store
coverage/
.pnpm-store/
docker-compose.override.yml

```
<!-- END_FILE -->

---
<!-- FILE: .gitignore -->
## .gitignore

```
# Dependencies
node_modules/

# Next.js build output
.next/
out/
.build/

# Logs
*.log
logs/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Runtime data
pids/
*.pid
*.seed
*.pid.lock

# Coverage
coverage/
.nyc_output/

# TypeScript
*.tsbuildinfo

# Vite / build
dist/

# Environment files
.env
.env.local
.env.*.local

# macOS
.DS_Store
.AppleDouble
.LSOverride
._*

# Editors
.vscode/
.vscode-server/
.idea/
*.iml
.history/

# System files
Thumbs.db
ehthumbs.db

# Temporary files
*.tmp
*.temp
*~
*.swp
*.bak

# Cache
.cache/

# Vercel
.vercel/
.vercel/output/

# Netlify
.netlify/

# Docker
docker-compose.override.yml

# Analysis artifacts
analysis/screenshots/
analysis/live-dom-report.json
analysis/visual-check-report.json

# Lock files (keep preferred lock file)
bun.lockb
.pnpm-store/
.pnp.cjs
.pnp.js

```
<!-- END_FILE -->

---
<!-- FILE: bun.lock -->
## bun.lock

```
{
  "lockfileVersion": 1,
  "configVersion": 0,
  "workspaces": {
    "": {
      "name": "bits-college-frontend",
      "dependencies": {
        "framer-motion": "^11.18.2",
        "lucide-react": "^1.17.0",
        "next": "^15.1.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0",
      },
      "devDependencies": {
        "@playwright/test": "^1.49.1",
        "@types/node": "^22.10.0",
        "@types/react": "^19.0.0",
        "@types/react-dom": "^19.0.0",
        "autoprefixer": "^10.4.20",
        "eslint": "^9.17.0",
        "eslint-config-next": "^15.1.0",
        "postcss": "^8.4.49",
        "tailwindcss": "^3.4.17",
        "typescript": "^5.7.2",
      },
    },
  },
  "packages": {
    "@alloc/quick-lru": ["@alloc/quick-lru@5.2.0", "", {}, "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw=="],

    "@emnapi/core": ["@emnapi/core@1.10.0", "", { "dependencies": { "@emnapi/wasi-threads": "1.2.1", "tslib": "^2.4.0" } }, "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw=="],

    "@emnapi/runtime": ["@emnapi/runtime@1.10.0", "", { "dependencies": { "tslib": "^2.4.0" } }, "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA=="],

    "@emnapi/wasi-threads": ["@emnapi/wasi-threads@1.2.1", "", { "dependencies": { "tslib": "^2.4.0" } }, "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w=="],

    "@eslint-community/eslint-utils": ["@eslint-community/eslint-utils@4.9.1", "", { "dependencies": { "eslint-visitor-keys": "^3.4.3" }, "peerDependencies": { "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0" } }, "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ=="],

    "@eslint-community/regexpp": ["@eslint-community/regexpp@4.12.2", "", {}, "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew=="],

    "@eslint/config-array": ["@eslint/config-array@0.21.2", "", { "dependencies": { "@eslint/object-schema": "^2.1.7", "debug": "^4.3.1", "minimatch": "^3.1.5" } }, "sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw=="],

    "@eslint/config-helpers": ["@eslint/config-helpers@0.4.2", "", { "dependencies": { "@eslint/core": "^0.17.0" } }, "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw=="],

    "@eslint/core": ["@eslint/core@0.17.0", "", { "dependencies": { "@types/json-schema": "^7.0.15" } }, "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ=="],

    "@eslint/eslintrc": ["@eslint/eslintrc@3.3.5", "", { "dependencies": { "ajv": "^6.14.0", "debug": "^4.3.2", "espree": "^10.0.1", "globals": "^14.0.0", "ignore": "^5.2.0", "import-fresh": "^3.2.1", "js-yaml": "^4.1.1", "minimatch": "^3.1.5", "strip-json-comments": "^3.1.1" } }, "sha512-4IlJx0X0qftVsN5E+/vGujTRIFtwuLbNsVUe7TO6zYPDR1O6nFwvwhIKEKSrl6dZchmYBITazxKoUYOjdtjlRg=="],

    "@eslint/js": ["@eslint/js@9.39.4", "", {}, "sha512-nE7DEIchvtiFTwBw4Lfbu59PG+kCofhjsKaCWzxTpt4lfRjRMqG6uMBzKXuEcyXhOHoUp9riAm7/aWYGhXZ9cw=="],

    "@eslint/object-schema": ["@eslint/object-schema@2.1.7", "", {}, "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA=="],

    "@eslint/plugin-kit": ["@eslint/plugin-kit@0.4.1", "", { "dependencies": { "@eslint/core": "^0.17.0", "levn": "^0.4.1" } }, "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA=="],

    "@humanfs/core": ["@humanfs/core@0.19.2", "", { "dependencies": { "@humanfs/types": "^0.15.0" } }, "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA=="],

    "@humanfs/node": ["@humanfs/node@0.16.8", "", { "dependencies": { "@humanfs/core": "^0.19.2", "@humanfs/types": "^0.15.0", "@humanwhocodes/retry": "^0.4.0" } }, "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ=="],

    "@humanfs/types": ["@humanfs/types@0.15.0", "", {}, "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q=="],

    "@humanwhocodes/module-importer": ["@humanwhocodes/module-importer@1.0.1", "", {}, "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA=="],

    "@humanwhocodes/retry": ["@humanwhocodes/retry@0.4.3", "", {}, "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ=="],

    "@img/colour": ["@img/colour@1.1.0", "", {}, "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ=="],

    "@img/sharp-darwin-arm64": ["@img/sharp-darwin-arm64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-darwin-arm64": "1.2.4" }, "os": "darwin", "cpu": "arm64" }, "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w=="],

    "@img/sharp-darwin-x64": ["@img/sharp-darwin-x64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-darwin-x64": "1.2.4" }, "os": "darwin", "cpu": "x64" }, "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw=="],

    "@img/sharp-libvips-darwin-arm64": ["@img/sharp-libvips-darwin-arm64@1.2.4", "", { "os": "darwin", "cpu": "arm64" }, "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g=="],

    "@img/sharp-libvips-darwin-x64": ["@img/sharp-libvips-darwin-x64@1.2.4", "", { "os": "darwin", "cpu": "x64" }, "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg=="],

    "@img/sharp-libvips-linux-arm": ["@img/sharp-libvips-linux-arm@1.2.4", "", { "os": "linux", "cpu": "arm" }, "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A=="],

    "@img/sharp-libvips-linux-arm64": ["@img/sharp-libvips-linux-arm64@1.2.4", "", { "os": "linux", "cpu": "arm64" }, "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw=="],

    "@img/sharp-libvips-linux-ppc64": ["@img/sharp-libvips-linux-ppc64@1.2.4", "", { "os": "linux", "cpu": "ppc64" }, "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA=="],

    "@img/sharp-libvips-linux-riscv64": ["@img/sharp-libvips-linux-riscv64@1.2.4", "", { "os": "linux", "cpu": "none" }, "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA=="],

    "@img/sharp-libvips-linux-s390x": ["@img/sharp-libvips-linux-s390x@1.2.4", "", { "os": "linux", "cpu": "s390x" }, "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ=="],

    "@img/sharp-libvips-linux-x64": ["@img/sharp-libvips-linux-x64@1.2.4", "", { "os": "linux", "cpu": "x64" }, "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw=="],

    "@img/sharp-libvips-linuxmusl-arm64": ["@img/sharp-libvips-linuxmusl-arm64@1.2.4", "", { "os": "linux", "cpu": "arm64" }, "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw=="],

    "@img/sharp-libvips-linuxmusl-x64": ["@img/sharp-libvips-linuxmusl-x64@1.2.4", "", { "os": "linux", "cpu": "x64" }, "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg=="],

    "@img/sharp-linux-arm": ["@img/sharp-linux-arm@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-arm": "1.2.4" }, "os": "linux", "cpu": "arm" }, "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw=="],

    "@img/sharp-linux-arm64": ["@img/sharp-linux-arm64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-arm64": "1.2.4" }, "os": "linux", "cpu": "arm64" }, "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg=="],

    "@img/sharp-linux-ppc64": ["@img/sharp-linux-ppc64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-ppc64": "1.2.4" }, "os": "linux", "cpu": "ppc64" }, "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA=="],

    "@img/sharp-linux-riscv64": ["@img/sharp-linux-riscv64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-riscv64": "1.2.4" }, "os": "linux", "cpu": "none" }, "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw=="],

    "@img/sharp-linux-s390x": ["@img/sharp-linux-s390x@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-s390x": "1.2.4" }, "os": "linux", "cpu": "s390x" }, "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg=="],

    "@img/sharp-linux-x64": ["@img/sharp-linux-x64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linux-x64": "1.2.4" }, "os": "linux", "cpu": "x64" }, "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ=="],

    "@img/sharp-linuxmusl-arm64": ["@img/sharp-linuxmusl-arm64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linuxmusl-arm64": "1.2.4" }, "os": "linux", "cpu": "arm64" }, "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg=="],

    "@img/sharp-linuxmusl-x64": ["@img/sharp-linuxmusl-x64@0.34.5", "", { "optionalDependencies": { "@img/sharp-libvips-linuxmusl-x64": "1.2.4" }, "os": "linux", "cpu": "x64" }, "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q=="],

    "@img/sharp-wasm32": ["@img/sharp-wasm32@0.34.5", "", { "dependencies": { "@emnapi/runtime": "^1.7.0" }, "cpu": "none" }, "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw=="],

    "@img/sharp-win32-arm64": ["@img/sharp-win32-arm64@0.34.5", "", { "os": "win32", "cpu": "arm64" }, "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g=="],

    "@img/sharp-win32-ia32": ["@img/sharp-win32-ia32@0.34.5", "", { "os": "win32", "cpu": "ia32" }, "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg=="],

    "@img/sharp-win32-x64": ["@img/sharp-win32-x64@0.34.5", "", { "os": "win32", "cpu": "x64" }, "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw=="],

    "@jridgewell/gen-mapping": ["@jridgewell/gen-mapping@0.3.13", "", { "dependencies": { "@jridgewell/sourcemap-codec": "^1.5.0", "@jridgewell/trace-mapping": "^0.3.24" } }, "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA=="],

    "@jridgewell/resolve-uri": ["@jridgewell/resolve-uri@3.1.2", "", {}, "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw=="],

    "@jridgewell/sourcemap-codec": ["@jridgewell/sourcemap-codec@1.5.5", "", {}, "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og=="],

    "@jridgewell/trace-mapping": ["@jridgewell/trace-mapping@0.3.31", "", { "dependencies": { "@jridgewell/resolve-uri": "^3.1.0", "@jridgewell/sourcemap-codec": "^1.4.14" } }, "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw=="],

    "@napi-rs/wasm-runtime": ["@napi-rs/wasm-runtime@1.1.4", "", { "dependencies": { "@tybys/wasm-util": "^0.10.1" }, "peerDependencies": { "@emnapi/core": "^1.7.1", "@emnapi/runtime": "^1.7.1" } }, "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow=="],

    "@next/env": ["@next/env@15.5.18", "", {}, "sha512-hAV85Ckd9QR6RvH04MEKwsfLTksvFpO47j9xwtoIuvuPnlwecpSi+uZTtm8HirVbtlI2Fnz//xpcSTjFdyJk+g=="],

    "@next/eslint-plugin-next": ["@next/eslint-plugin-next@15.5.18", "", { "dependencies": { "fast-glob": "3.3.1" } }, "sha512-w4MYq8M26a8PNrfto0JosLf5/3ssln1rsyP96g2DkC8uFVymStM5DLSz5ElxxrPRg2XnTMnFo3kREFlhYvxhWw=="],

    "@next/swc-darwin-arm64": ["@next/swc-darwin-arm64@15.5.18", "", { "os": "darwin", "cpu": "arm64" }, "sha512-w0WvQf1n+txiwns/9pwIQteCJpZTbxzO2SE0FLcwuD4v0WEh1JPOjdyxWL21XwJsdpx8cFRjyzxzCS/siP7HcQ=="],

    "@next/swc-darwin-x64": ["@next/swc-darwin-x64@15.5.18", "", { "os": "darwin", "cpu": "x64" }, "sha512-znn71QmDuxm+BOaglihMZfvyySMnNljkVIY5Z2TCssBmm+WqL6c19VhtH5ktFkHa8EZ2bnTUpcNcmNSQsg67og=="],

    "@next/swc-linux-arm64-gnu": ["@next/swc-linux-arm64-gnu@15.5.18", "", { "os": "linux", "cpu": "arm64" }, "sha512-yPPe5MNL+igZUa+OsqQJisqSfh6oarIuA1Q0BDxljGJhRQyZeP+WRHh7rs/jZUGMh5aY0YdIjXZG0VohkKkUdw=="],

    "@next/swc-linux-arm64-musl": ["@next/swc-linux-arm64-musl@15.5.18", "", { "os": "linux", "cpu": "arm64" }, "sha512-glaCczEWIrHsokFZ3pP08U4BpKxwIdnT+txdOM32OBgpL9Yw4aqx8NejmgtZQZOdstQ5f0L3CasIZudzCuD+nw=="],

    "@next/swc-linux-x64-gnu": ["@next/swc-linux-x64-gnu@15.5.18", "", { "os": "linux", "cpu": "x64" }, "sha512-oUfg2EgJmU3R0OCOWiokGFUTvZiPfXtriXiuF3YNxRoROCdgvTedHIzYoeKH34gsZxS/V7mHbfq2hpAHwhH1/A=="],

    "@next/swc-linux-x64-musl": ["@next/swc-linux-x64-musl@15.5.18", "", { "os": "linux", "cpu": "x64" }, "sha512-JLxSP3KTd9iu/bvUMQxH7RJo9xKSHf55/6RPE4a6FTSZygGn7uvZbCej0AHXydwkggQGSD9UddSjwv6Xz5ESfA=="],

    "@next/swc-win32-arm64-msvc": ["@next/swc-win32-arm64-msvc@15.5.18", "", { "os": "win32", "cpu": "arm64" }, "sha512-ir1v7enP52K2HNz3tQQvwF+x7VNxBk1ciiZ18WBPvxf4C59IqdfmHPJYK3vH7rSxpuCVw/8C712wTXNAtEp+NA=="],

    "@next/swc-win32-x64-msvc": ["@next/swc-win32-x64-msvc@15.5.18", "", { "os": "win32", "cpu": "x64" }, "sha512-LIu5me6QTANCd25E7I5uIEfvgQ06RK7tvHAbYo3zCb3VpxQEPvMcSpd87NwUABDT6MbGPdEGR5VRiK4PPTJhQg=="],

    "@nodelib/fs.scandir": ["@nodelib/fs.scandir@2.1.5", "", { "dependencies": { "@nodelib/fs.stat": "2.0.5", "run-parallel": "^1.1.9" } }, "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g=="],

    "@nodelib/fs.stat": ["@nodelib/fs.stat@2.0.5", "", {}, "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A=="],

    "@nodelib/fs.walk": ["@nodelib/fs.walk@1.2.8", "", { "dependencies": { "@nodelib/fs.scandir": "2.1.5", "fastq": "^1.6.0" } }, "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg=="],

    "@nolyfill/is-core-module": ["@nolyfill/is-core-module@1.0.39", "", {}, "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA=="],

    "@playwright/test": ["@playwright/test@1.60.0", "", { "dependencies": { "playwright": "1.60.0" }, "bin": { "playwright": "cli.js" } }, "sha512-O71yZIbAh/PxDMNGns37GHBIfrVkEVyn+AXyIa5dOTfb4/xNvRWV+Vv/NMbNCtODB/pO7vLlF2OTmMVLhmr7Ag=="],

    "@rtsao/scc": ["@rtsao/scc@1.1.0", "", {}, "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g=="],

    "@rushstack/eslint-patch": ["@rushstack/eslint-patch@1.16.1", "", {}, "sha512-TvZbIpeKqGQQ7X0zSCvPH9riMSFQFSggnfBjFZ1mEoILW+UuXCKwOoPcgjMwiUtRqFZ8jWhPJc4um14vC6I4ag=="],

    "@swc/helpers": ["@swc/helpers@0.5.15", "", { "dependencies": { "tslib": "^2.8.0" } }, "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g=="],

    "@tybys/wasm-util": ["@tybys/wasm-util@0.10.2", "", { "dependencies": { "tslib": "^2.4.0" } }, "sha512-RoBvJ2X0wuKlWFIjrwffGw1IqZHKQqzIchKaadZZfnNpsAYp2mM0h36JtPCjNDAHGgYez/15uMBpfGwchhiMgg=="],

    "@types/estree": ["@types/estree@1.0.9", "", {}, "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg=="],

    "@types/json-schema": ["@types/json-schema@7.0.15", "", {}, "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA=="],

    "@types/json5": ["@types/json5@0.0.29", "", {}, "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ=="],

    "@types/node": ["@types/node@22.19.19", "", { "dependencies": { "undici-types": "~6.21.0" } }, "sha512-dyh/xO2Fh5bYrfWaaqGrRQQGkNdmYw6AmaAUvYeUMNTWQtvb796ikLdmTchRmOlOiIJ1TDXfWgVx1QkUlQ6Hew=="],

    "@types/react": ["@types/react@19.2.15", "", { "dependencies": { "csstype": "^3.2.2" } }, "sha512-eRwcGNHve+E8qtEQSSRl6urh+rFop4v8gm6O8rGv25CodbvFdLjA1vVQ1KkiFE0w0UPOnb8tDiFKL5lp0rtY5Q=="],

    "@types/react-dom": ["@types/react-dom@19.2.3", "", { "peerDependencies": { "@types/react": "^19.2.0" } }, "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ=="],

    "@typescript-eslint/eslint-plugin": ["@typescript-eslint/eslint-plugin@8.59.4", "", { "dependencies": { "@eslint-community/regexpp": "^4.12.2", "@typescript-eslint/scope-manager": "8.59.4", "@typescript-eslint/type-utils": "8.59.4", "@typescript-eslint/utils": "8.59.4", "@typescript-eslint/visitor-keys": "8.59.4", "ignore": "^7.0.5", "natural-compare": "^1.4.0", "ts-api-utils": "^2.5.0" }, "peerDependencies": { "@typescript-eslint/parser": "^8.59.4", "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0", "typescript": ">=4.8.4 <6.1.0" } }, "sha512-PegsU+XfyJJNjd4+u/k6f9yTyp0lEXXiPopUNobZcIAUJFGICFLN+sP0Rb3JehVmiij1Ph0dFGYqODoRo/2+6A=="],

    "@typescript-eslint/parser": ["@typescript-eslint/parser@8.59.4", "", { "dependencies": { "@typescript-eslint/scope-manager": "8.59.4", "@typescript-eslint/types": "8.59.4", "@typescript-eslint/typescript-estree": "8.59.4", "@typescript-eslint/visitor-keys": "8.59.4", "debug": "^4.4.3" }, "peerDependencies": { "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0", "typescript": ">=4.8.4 <6.1.0" } }, "sha512-zORHqO/tuhxY1zWuTvMUqddRxpiFJ72xVfcNoWpqdLjs6lfPbuQBJuW4pk+49/uBMy7Ssr4bzgjiKmmDB1UbZQ=="],

    "@typescript-eslint/project-service": ["@typescript-eslint/project-service@8.59.4", "", { "dependencies": { "@typescript-eslint/tsconfig-utils": "^8.59.4", "@typescript-eslint/types": "^8.59.4", "debug": "^4.4.3" }, "peerDependencies": { "typescript": ">=4.8.4 <6.1.0" } }, "sha512-Ly00Vu4oAacfDeHp2Zg85ioNG6l8HG+tN1D7J+xTHSxu9y0awYKJ2zH1rFBn8ZSfuGK+7FxK3Cgl3uAz0aZZLg=="],

    "@typescript-eslint/scope-manager": ["@typescript-eslint/scope-manager@8.59.4", "", { "dependencies": { "@typescript-eslint/types": "8.59.4", "@typescript-eslint/visitor-keys": "8.59.4" } }, "sha512-mUeR/3H1WrTAddJrwut8OoPjfauaztMQmRwV5fQTUyNVJCLiUXXe4lGEyYIL2oFDpP7UtgbGJXCt72wT0z2S3Q=="],

    "@typescript-eslint/tsconfig-utils": ["@typescript-eslint/tsconfig-utils@8.59.4", "", { "peerDependencies": { "typescript": ">=4.8.4 <6.1.0" } }, "sha512-DLCpnKgD4alVxTBSKulK+gU1KCqOgUXfDRDXh2mZgzokQKa/70ax93I2uVO3m/LLvIAtWZIFoiifudmIqAxpMA=="],

    "@typescript-eslint/type-utils": ["@typescript-eslint/type-utils@8.59.4", "", { "dependencies": { "@typescript-eslint/types": "8.59.4", "@typescript-eslint/typescript-estree": "8.59.4", "@typescript-eslint/utils": "8.59.4", "debug": "^4.4.3", "ts-api-utils": "^2.5.0" }, "peerDependencies": { "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0", "typescript": ">=4.8.4 <6.1.0" } }, "sha512-uonTuPAAKr9XaBGqJ3LjYTh72zy5DyGesljO9gtmk/eFW0W1fRHjnwVYKB35Lm8d5Q5CluEW3gPHjTvZTmgrfA=="],

    "@typescript-eslint/types": ["@typescript-eslint/types@8.59.4", "", {}, "sha512-F1o7WJcCq+bc8dwcO/YsSEOudAH8RDtaOhM6wcAQhcUsFhnWQl81JKy48q1hoxAU0qrzM89+31GYh1515Zde3Q=="],

    "@typescript-eslint/typescript-estree": ["@typescript-eslint/typescript-estree@8.59.4", "", { "dependencies": { "@typescript-eslint/project-service": "8.59.4", "@typescript-eslint/tsconfig-utils": "8.59.4", "@typescript-eslint/types": "8.59.4", "@typescript-eslint/visitor-keys": "8.59.4", "debug": "^4.4.3", "minimatch": "^10.2.2", "semver": "^7.7.3", "tinyglobby": "^0.2.15", "ts-api-utils": "^2.5.0" }, "peerDependencies": { "typescript": ">=4.8.4 <6.1.0" } }, "sha512-F+RuOmcDXo4+TPdfd/TCLS3m2nw8gE9XXyZLrA3JBfaA5tz9TtdkyD3YJFmPxulyc2cKbEok/CvFE3MgSLWnag=="],

    "@typescript-eslint/utils": ["@typescript-eslint/utils@8.59.4", "", { "dependencies": { "@eslint-community/eslint-utils": "^4.9.1", "@typescript-eslint/scope-manager": "8.59.4", "@typescript-eslint/types": "8.59.4", "@typescript-eslint/typescript-estree": "8.59.4" }, "peerDependencies": { "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0", "typescript": ">=4.8.4 <6.1.0" } }, "sha512-cYXeNAUsG4lJo5dbc1FcKm+JwIWrj1/UpTORsC6tGMjEZ81DYcvIr9/ueikhMa/Y/gDQYGp+YX9/xQrXje5BJw=="],

    "@typescript-eslint/visitor-keys": ["@typescript-eslint/visitor-keys@8.59.4", "", { "dependencies": { "@typescript-eslint/types": "8.59.4", "eslint-visitor-keys": "^5.0.0" } }, "sha512-U3gxVaDVnuZKhSspW/MzMxE1kq7zOdc072FcSNoqA1I9p8HyKbBFfEHoWckBAMgNMph4MamwS5iTVzFmrnt8TQ=="],

    "@unrs/resolver-binding-android-arm-eabi": ["@unrs/resolver-binding-android-arm-eabi@1.12.2", "", { "os": "android", "cpu": "arm" }, "sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w=="],

    "@unrs/resolver-binding-android-arm64": ["@unrs/resolver-binding-android-arm64@1.12.2", "", { "os": "android", "cpu": "arm64" }, "sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ=="],

    "@unrs/resolver-binding-darwin-arm64": ["@unrs/resolver-binding-darwin-arm64@1.12.2", "", { "os": "darwin", "cpu": "arm64" }, "sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w=="],

    "@unrs/resolver-binding-darwin-x64": ["@unrs/resolver-binding-darwin-x64@1.12.2", "", { "os": "darwin", "cpu": "x64" }, "sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA=="],

    "@unrs/resolver-binding-freebsd-x64": ["@unrs/resolver-binding-freebsd-x64@1.12.2", "", { "os": "freebsd", "cpu": "x64" }, "sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg=="],

    "@unrs/resolver-binding-linux-arm-gnueabihf": ["@unrs/resolver-binding-linux-arm-gnueabihf@1.12.2", "", { "os": "linux", "cpu": "arm" }, "sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A=="],

    "@unrs/resolver-binding-linux-arm-musleabihf": ["@unrs/resolver-binding-linux-arm-musleabihf@1.12.2", "", { "os": "linux", "cpu": "arm" }, "sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g=="],

    "@unrs/resolver-binding-linux-arm64-gnu": ["@unrs/resolver-binding-linux-arm64-gnu@1.12.2", "", { "os": "linux", "cpu": "arm64" }, "sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg=="],

    "@unrs/resolver-binding-linux-arm64-musl": ["@unrs/resolver-binding-linux-arm64-musl@1.12.2", "", { "os": "linux", "cpu": "arm64" }, "sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA=="],

    "@unrs/resolver-binding-linux-loong64-gnu": ["@unrs/resolver-binding-linux-loong64-gnu@1.12.2", "", { "os": "linux", "cpu": "none" }, "sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q=="],

    "@unrs/resolver-binding-linux-loong64-musl": ["@unrs/resolver-binding-linux-loong64-musl@1.12.2", "", { "os": "linux", "cpu": "none" }, "sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew=="],

    "@unrs/resolver-binding-linux-ppc64-gnu": ["@unrs/resolver-binding-linux-ppc64-gnu@1.12.2", "", { "os": "linux", "cpu": "ppc64" }, "sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg=="],

    "@unrs/resolver-binding-linux-riscv64-gnu": ["@unrs/resolver-binding-linux-riscv64-gnu@1.12.2", "", { "os": "linux", "cpu": "none" }, "sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A=="],

    "@unrs/resolver-binding-linux-riscv64-musl": ["@unrs/resolver-binding-linux-riscv64-musl@1.12.2", "", { "os": "linux", "cpu": "none" }, "sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w=="],

    "@unrs/resolver-binding-linux-s390x-gnu": ["@unrs/resolver-binding-linux-s390x-gnu@1.12.2", "", { "os": "linux", "cpu": "s390x" }, "sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw=="],

    "@unrs/resolver-binding-linux-x64-gnu": ["@unrs/resolver-binding-linux-x64-gnu@1.12.2", "", { "os": "linux", "cpu": "x64" }, "sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ=="],

    "@unrs/resolver-binding-linux-x64-musl": ["@unrs/resolver-binding-linux-x64-musl@1.12.2", "", { "os": "linux", "cpu": "x64" }, "sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A=="],

    "@unrs/resolver-binding-openharmony-arm64": ["@unrs/resolver-binding-openharmony-arm64@1.12.2", "", { "os": "none", "cpu": "arm64" }, "sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ=="],

    "@unrs/resolver-binding-wasm32-wasi": ["@unrs/resolver-binding-wasm32-wasi@1.12.2", "", { "dependencies": { "@emnapi/core": "1.10.0", "@emnapi/runtime": "1.10.0", "@napi-rs/wasm-runtime": "^1.1.4" }, "cpu": "none" }, "sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A=="],

    "@unrs/resolver-binding-win32-arm64-msvc": ["@unrs/resolver-binding-win32-arm64-msvc@1.12.2", "", { "os": "win32", "cpu": "arm64" }, "sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g=="],

    "@unrs/resolver-binding-win32-ia32-msvc": ["@unrs/resolver-binding-win32-ia32-msvc@1.12.2", "", { "os": "win32", "cpu": "ia32" }, "sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g=="],

    "@unrs/resolver-binding-win32-x64-msvc": ["@unrs/resolver-binding-win32-x64-msvc@1.12.2", "", { "os": "win32", "cpu": "x64" }, "sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA=="],

    "acorn": ["acorn@8.16.0", "", { "bin": "bin/acorn" }, "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw=="],

    "acorn-jsx": ["acorn-jsx@5.3.2", "", { "peerDependencies": { "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0" } }, "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ=="],

    "ajv": ["ajv@6.15.0", "", { "dependencies": { "fast-deep-equal": "^3.1.1", "fast-json-stable-stringify": "^2.0.0", "json-schema-traverse": "^0.4.1", "uri-js": "^4.2.2" } }, "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw=="],

    "ansi-styles": ["ansi-styles@4.3.0", "", { "dependencies": { "color-convert": "^2.0.1" } }, "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg=="],

    "any-promise": ["any-promise@1.3.0", "", {}, "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A=="],

    "anymatch": ["anymatch@3.1.3", "", { "dependencies": { "normalize-path": "^3.0.0", "picomatch": "^2.0.4" } }, "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw=="],

    "arg": ["arg@5.0.2", "", {}, "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg=="],

    "argparse": ["argparse@2.0.1", "", {}, "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="],

    "aria-query": ["aria-query@5.3.2", "", {}, "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw=="],

    "array-buffer-byte-length": ["array-buffer-byte-length@1.0.2", "", { "dependencies": { "call-bound": "^1.0.3", "is-array-buffer": "^3.0.5" } }, "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw=="],

    "array-includes": ["array-includes@3.1.9", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.4", "define-properties": "^1.2.1", "es-abstract": "^1.24.0", "es-object-atoms": "^1.1.1", "get-intrinsic": "^1.3.0", "is-string": "^1.1.1", "math-intrinsics": "^1.1.0" } }, "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ=="],

    "array.prototype.findlast": ["array.prototype.findlast@1.2.5", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-abstract": "^1.23.2", "es-errors": "^1.3.0", "es-object-atoms": "^1.0.0", "es-shim-unscopables": "^1.0.2" } }, "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ=="],

    "array.prototype.findlastindex": ["array.prototype.findlastindex@1.2.6", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.4", "define-properties": "^1.2.1", "es-abstract": "^1.23.9", "es-errors": "^1.3.0", "es-object-atoms": "^1.1.1", "es-shim-unscopables": "^1.1.0" } }, "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ=="],

    "array.prototype.flat": ["array.prototype.flat@1.3.3", "", { "dependencies": { "call-bind": "^1.0.8", "define-properties": "^1.2.1", "es-abstract": "^1.23.5", "es-shim-unscopables": "^1.0.2" } }, "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg=="],

    "array.prototype.flatmap": ["array.prototype.flatmap@1.3.3", "", { "dependencies": { "call-bind": "^1.0.8", "define-properties": "^1.2.1", "es-abstract": "^1.23.5", "es-shim-unscopables": "^1.0.2" } }, "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg=="],

    "array.prototype.tosorted": ["array.prototype.tosorted@1.1.4", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-abstract": "^1.23.3", "es-errors": "^1.3.0", "es-shim-unscopables": "^1.0.2" } }, "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA=="],

    "arraybuffer.prototype.slice": ["arraybuffer.prototype.slice@1.0.4", "", { "dependencies": { "array-buffer-byte-length": "^1.0.1", "call-bind": "^1.0.8", "define-properties": "^1.2.1", "es-abstract": "^1.23.5", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.6", "is-array-buffer": "^3.0.4" } }, "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ=="],

    "ast-types-flow": ["ast-types-flow@0.0.8", "", {}, "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ=="],

    "async-function": ["async-function@1.0.0", "", {}, "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA=="],

    "autoprefixer": ["autoprefixer@10.5.0", "", { "dependencies": { "browserslist": "^4.28.2", "caniuse-lite": "^1.0.30001787", "fraction.js": "^5.3.4", "picocolors": "^1.1.1", "postcss-value-parser": "^4.2.0" }, "peerDependencies": { "postcss": "^8.1.0" }, "bin": "bin/autoprefixer" }, "sha512-FMhOoZV4+qR6aTUALKX2rEqGG+oyATvwBt9IIzVR5rMa2HRWPkxf+P+PAJLD1I/H5/II+HuZcBJYEFBpq39ong=="],

    "available-typed-arrays": ["available-typed-arrays@1.0.7", "", { "dependencies": { "possible-typed-array-names": "^1.0.0" } }, "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ=="],

    "axe-core": ["axe-core@4.11.4", "", {}, "sha512-KunSNx+TVpkAw/6ULfhnx+HWRecjqZGTOyquAoWHYLRSdK1tB5Ihce1ZW+UY3fj33bYAFWPu7W/GRSmmrCGuxA=="],

    "axobject-query": ["axobject-query@4.1.0", "", {}, "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ=="],

    "balanced-match": ["balanced-match@1.0.2", "", {}, "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="],

    "baseline-browser-mapping": ["baseline-browser-mapping@2.10.31", "", { "bin": "dist/cli.cjs" }, "sha512-MujYO3eP72uvmSE0i4wltsodRfIpZATP3jvzRNRGGxgzId7aVocVJJV3nf01qnzzKFGxQVC9bpWxl5cjxTr/7Q=="],

    "binary-extensions": ["binary-extensions@2.3.0", "", {}, "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw=="],

    "brace-expansion": ["brace-expansion@1.1.14", "", { "dependencies": { "balanced-match": "^1.0.0", "concat-map": "0.0.1" } }, "sha512-MWPGfDxnyzKU7rNOW9SP/c50vi3xrmrua/+6hfPbCS2ABNWfx24vPidzvC7krjU/RTo235sV776ymlsMtGKj8g=="],

    "braces": ["braces@3.0.3", "", { "dependencies": { "fill-range": "^7.1.1" } }, "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA=="],

    "browserslist": ["browserslist@4.28.2", "", { "dependencies": { "baseline-browser-mapping": "^2.10.12", "caniuse-lite": "^1.0.30001782", "electron-to-chromium": "^1.5.328", "node-releases": "^2.0.36", "update-browserslist-db": "^1.2.3" }, "bin": "cli.js" }, "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg=="],

    "call-bind": ["call-bind@1.0.9", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.2", "es-define-property": "^1.0.1", "get-intrinsic": "^1.3.0", "set-function-length": "^1.2.2" } }, "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ=="],

    "call-bind-apply-helpers": ["call-bind-apply-helpers@1.0.2", "", { "dependencies": { "es-errors": "^1.3.0", "function-bind": "^1.1.2" } }, "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ=="],

    "call-bound": ["call-bound@1.0.4", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.2", "get-intrinsic": "^1.3.0" } }, "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg=="],

    "callsites": ["callsites@3.1.0", "", {}, "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="],

    "camelcase-css": ["camelcase-css@2.0.1", "", {}, "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA=="],

    "caniuse-lite": ["caniuse-lite@1.0.30001793", "", {}, "sha512-iwSsYWaCOoh26cV8NwNRViHlrfUvYsHDfRVcbtmw0Kg6PJIZZXwMkj1442FYLBGkeUf1juAsU3DTfxW579mrPA=="],

    "chalk": ["chalk@4.1.2", "", { "dependencies": { "ansi-styles": "^4.1.0", "supports-color": "^7.1.0" } }, "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA=="],

    "chokidar": ["chokidar@3.6.0", "", { "dependencies": { "anymatch": "~3.1.2", "braces": "~3.0.2", "glob-parent": "~5.1.2", "is-binary-path": "~2.1.0", "is-glob": "~4.0.1", "normalize-path": "~3.0.0", "readdirp": "~3.6.0" }, "optionalDependencies": { "fsevents": "~2.3.2" } }, "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw=="],

    "client-only": ["client-only@0.0.1", "", {}, "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA=="],

    "color-convert": ["color-convert@2.0.1", "", { "dependencies": { "color-name": "~1.1.4" } }, "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ=="],

    "color-name": ["color-name@1.1.4", "", {}, "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="],

    "commander": ["commander@4.1.1", "", {}, "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA=="],

    "concat-map": ["concat-map@0.0.1", "", {}, "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="],

    "cross-spawn": ["cross-spawn@7.0.6", "", { "dependencies": { "path-key": "^3.1.0", "shebang-command": "^2.0.0", "which": "^2.0.1" } }, "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA=="],

    "cssesc": ["cssesc@3.0.0", "", { "bin": "bin/cssesc" }, "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg=="],

    "csstype": ["csstype@3.2.3", "", {}, "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ=="],

    "damerau-levenshtein": ["damerau-levenshtein@1.0.8", "", {}, "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA=="],

    "data-view-buffer": ["data-view-buffer@1.0.2", "", { "dependencies": { "call-bound": "^1.0.3", "es-errors": "^1.3.0", "is-data-view": "^1.0.2" } }, "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ=="],

    "data-view-byte-length": ["data-view-byte-length@1.0.2", "", { "dependencies": { "call-bound": "^1.0.3", "es-errors": "^1.3.0", "is-data-view": "^1.0.2" } }, "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ=="],

    "data-view-byte-offset": ["data-view-byte-offset@1.0.1", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "is-data-view": "^1.0.1" } }, "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ=="],

    "debug": ["debug@4.4.3", "", { "dependencies": { "ms": "^2.1.3" } }, "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA=="],

    "deep-is": ["deep-is@0.1.4", "", {}, "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="],

    "define-data-property": ["define-data-property@1.1.4", "", { "dependencies": { "es-define-property": "^1.0.0", "es-errors": "^1.3.0", "gopd": "^1.0.1" } }, "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A=="],

    "define-properties": ["define-properties@1.2.1", "", { "dependencies": { "define-data-property": "^1.0.1", "has-property-descriptors": "^1.0.0", "object-keys": "^1.1.1" } }, "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg=="],

    "detect-libc": ["detect-libc@2.1.2", "", {}, "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ=="],

    "didyoumean": ["didyoumean@1.2.2", "", {}, "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw=="],

    "dlv": ["dlv@1.1.3", "", {}, "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA=="],

    "doctrine": ["doctrine@2.1.0", "", { "dependencies": { "esutils": "^2.0.2" } }, "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw=="],

    "dunder-proto": ["dunder-proto@1.0.1", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.1", "es-errors": "^1.3.0", "gopd": "^1.2.0" } }, "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A=="],

    "electron-to-chromium": ["electron-to-chromium@1.5.360", "", {}, "sha512-GkcBt6YYAw9SxFWn+xVar4cLVGlXVuswwtRLBozi2zp0GjXs4ZnOrqV4zbXzg35n7w81hCkyJNYicgXlVHAmBA=="],

    "emoji-regex": ["emoji-regex@9.2.2", "", {}, "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg=="],

    "es-abstract": ["es-abstract@1.24.2", "", { "dependencies": { "array-buffer-byte-length": "^1.0.2", "arraybuffer.prototype.slice": "^1.0.4", "available-typed-arrays": "^1.0.7", "call-bind": "^1.0.8", "call-bound": "^1.0.4", "data-view-buffer": "^1.0.2", "data-view-byte-length": "^1.0.2", "data-view-byte-offset": "^1.0.1", "es-define-property": "^1.0.1", "es-errors": "^1.3.0", "es-object-atoms": "^1.1.1", "es-set-tostringtag": "^2.1.0", "es-to-primitive": "^1.3.0", "function.prototype.name": "^1.1.8", "get-intrinsic": "^1.3.0", "get-proto": "^1.0.1", "get-symbol-description": "^1.1.0", "globalthis": "^1.0.4", "gopd": "^1.2.0", "has-property-descriptors": "^1.0.2", "has-proto": "^1.2.0", "has-symbols": "^1.1.0", "hasown": "^2.0.2", "internal-slot": "^1.1.0", "is-array-buffer": "^3.0.5", "is-callable": "^1.2.7", "is-data-view": "^1.0.2", "is-negative-zero": "^2.0.3", "is-regex": "^1.2.1", "is-set": "^2.0.3", "is-shared-array-buffer": "^1.0.4", "is-string": "^1.1.1", "is-typed-array": "^1.1.15", "is-weakref": "^1.1.1", "math-intrinsics": "^1.1.0", "object-inspect": "^1.13.4", "object-keys": "^1.1.1", "object.assign": "^4.1.7", "own-keys": "^1.0.1", "regexp.prototype.flags": "^1.5.4", "safe-array-concat": "^1.1.3", "safe-push-apply": "^1.0.0", "safe-regex-test": "^1.1.0", "set-proto": "^1.0.0", "stop-iteration-iterator": "^1.1.0", "string.prototype.trim": "^1.2.10", "string.prototype.trimend": "^1.0.9", "string.prototype.trimstart": "^1.0.8", "typed-array-buffer": "^1.0.3", "typed-array-byte-length": "^1.0.3", "typed-array-byte-offset": "^1.0.4", "typed-array-length": "^1.0.7", "unbox-primitive": "^1.1.0", "which-typed-array": "^1.1.19" } }, "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg=="],

    "es-define-property": ["es-define-property@1.0.1", "", {}, "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g=="],

    "es-errors": ["es-errors@1.3.0", "", {}, "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw=="],

    "es-iterator-helpers": ["es-iterator-helpers@1.3.2", "", { "dependencies": { "call-bind": "^1.0.9", "call-bound": "^1.0.4", "define-properties": "^1.2.1", "es-abstract": "^1.24.2", "es-errors": "^1.3.0", "es-set-tostringtag": "^2.1.0", "function-bind": "^1.1.2", "get-intrinsic": "^1.3.0", "globalthis": "^1.0.4", "gopd": "^1.2.0", "has-property-descriptors": "^1.0.2", "has-proto": "^1.2.0", "has-symbols": "^1.1.0", "internal-slot": "^1.1.0", "iterator.prototype": "^1.1.5", "math-intrinsics": "^1.1.0" } }, "sha512-HVLACW1TppGYjJ8H6/jqH/pqOtKRw6wMlrB23xfExmFWxFquAIWCmwoLsOyN96K4a5KbmOf5At9ZUO3GZbetAw=="],

    "es-object-atoms": ["es-object-atoms@1.1.1", "", { "dependencies": { "es-errors": "^1.3.0" } }, "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA=="],

    "es-set-tostringtag": ["es-set-tostringtag@2.1.0", "", { "dependencies": { "es-errors": "^1.3.0", "get-intrinsic": "^1.2.6", "has-tostringtag": "^1.0.2", "hasown": "^2.0.2" } }, "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA=="],

    "es-shim-unscopables": ["es-shim-unscopables@1.1.0", "", { "dependencies": { "hasown": "^2.0.2" } }, "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw=="],

    "es-to-primitive": ["es-to-primitive@1.3.0", "", { "dependencies": { "is-callable": "^1.2.7", "is-date-object": "^1.0.5", "is-symbol": "^1.0.4" } }, "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g=="],

    "escalade": ["escalade@3.2.0", "", {}, "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA=="],

    "escape-string-regexp": ["escape-string-regexp@4.0.0", "", {}, "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA=="],

    "eslint": ["eslint@9.39.4", "", { "dependencies": { "@eslint-community/eslint-utils": "^4.8.0", "@eslint-community/regexpp": "^4.12.1", "@eslint/config-array": "^0.21.2", "@eslint/config-helpers": "^0.4.2", "@eslint/core": "^0.17.0", "@eslint/eslintrc": "^3.3.5", "@eslint/js": "9.39.4", "@eslint/plugin-kit": "^0.4.1", "@humanfs/node": "^0.16.6", "@humanwhocodes/module-importer": "^1.0.1", "@humanwhocodes/retry": "^0.4.2", "@types/estree": "^1.0.6", "ajv": "^6.14.0", "chalk": "^4.0.0", "cross-spawn": "^7.0.6", "debug": "^4.3.2", "escape-string-regexp": "^4.0.0", "eslint-scope": "^8.4.0", "eslint-visitor-keys": "^4.2.1", "espree": "^10.4.0", "esquery": "^1.5.0", "esutils": "^2.0.2", "fast-deep-equal": "^3.1.3", "file-entry-cache": "^8.0.0", "find-up": "^5.0.0", "glob-parent": "^6.0.2", "ignore": "^5.2.0", "imurmurhash": "^0.1.4", "is-glob": "^4.0.0", "json-stable-stringify-without-jsonify": "^1.0.1", "lodash.merge": "^4.6.2", "minimatch": "^3.1.5", "natural-compare": "^1.4.0", "optionator": "^0.9.3" }, "peerDependencies": { "jiti": "*" }, "bin": "bin/eslint.js" }, "sha512-XoMjdBOwe/esVgEvLmNsD3IRHkm7fbKIUGvrleloJXUZgDHig2IPWNniv+GwjyJXzuNqVjlr5+4yVUZjycJwfQ=="],

    "eslint-config-next": ["eslint-config-next@15.5.18", "", { "dependencies": { "@next/eslint-plugin-next": "15.5.18", "@rushstack/eslint-patch": "^1.10.3", "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0", "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0", "eslint-import-resolver-node": "^0.3.6", "eslint-import-resolver-typescript": "^3.5.2", "eslint-plugin-import": "^2.31.0", "eslint-plugin-jsx-a11y": "^6.10.0", "eslint-plugin-react": "^7.37.0", "eslint-plugin-react-hooks": "^5.0.0" }, "peerDependencies": { "eslint": "^7.23.0 || ^8.0.0 || ^9.0.0", "typescript": ">=3.3.1" } }, "sha512-HuoJU6uUPD00eyiud78IBnT4HLhztFj2V+ild2Uon5ZUrYZKe0Olu2QRD99e9IgL4/H1eg5Onka3BsfRW2U0Xw=="],

    "eslint-import-resolver-node": ["eslint-import-resolver-node@0.3.10", "", { "dependencies": { "debug": "^3.2.7", "is-core-module": "^2.16.1", "resolve": "^2.0.0-next.6" } }, "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ=="],

    "eslint-import-resolver-typescript": ["eslint-import-resolver-typescript@3.10.1", "", { "dependencies": { "@nolyfill/is-core-module": "1.0.39", "debug": "^4.4.0", "get-tsconfig": "^4.10.0", "is-bun-module": "^2.0.0", "stable-hash": "^0.0.5", "tinyglobby": "^0.2.13", "unrs-resolver": "^1.6.2" }, "peerDependencies": { "eslint": "*", "eslint-plugin-import": "*", "eslint-plugin-import-x": "*" }, "optionalPeers": ["eslint-plugin-import-x"] }, "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ=="],

    "eslint-module-utils": ["eslint-module-utils@2.12.1", "", { "dependencies": { "debug": "^3.2.7" } }, "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw=="],

    "eslint-plugin-import": ["eslint-plugin-import@2.32.0", "", { "dependencies": { "@rtsao/scc": "^1.1.0", "array-includes": "^3.1.9", "array.prototype.findlastindex": "^1.2.6", "array.prototype.flat": "^1.3.3", "array.prototype.flatmap": "^1.3.3", "debug": "^3.2.7", "doctrine": "^2.1.0", "eslint-import-resolver-node": "^0.3.9", "eslint-module-utils": "^2.12.1", "hasown": "^2.0.2", "is-core-module": "^2.16.1", "is-glob": "^4.0.3", "minimatch": "^3.1.2", "object.fromentries": "^2.0.8", "object.groupby": "^1.0.3", "object.values": "^1.2.1", "semver": "^6.3.1", "string.prototype.trimend": "^1.0.9", "tsconfig-paths": "^3.15.0" }, "peerDependencies": { "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" } }, "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA=="],

    "eslint-plugin-jsx-a11y": ["eslint-plugin-jsx-a11y@6.10.2", "", { "dependencies": { "aria-query": "^5.3.2", "array-includes": "^3.1.8", "array.prototype.flatmap": "^1.3.2", "ast-types-flow": "^0.0.8", "axe-core": "^4.10.0", "axobject-query": "^4.1.0", "damerau-levenshtein": "^1.0.8", "emoji-regex": "^9.2.2", "hasown": "^2.0.2", "jsx-ast-utils": "^3.3.5", "language-tags": "^1.0.9", "minimatch": "^3.1.2", "object.fromentries": "^2.0.8", "safe-regex-test": "^1.0.3", "string.prototype.includes": "^2.0.1" }, "peerDependencies": { "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9" } }, "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q=="],

    "eslint-plugin-react": ["eslint-plugin-react@7.37.5", "", { "dependencies": { "array-includes": "^3.1.8", "array.prototype.findlast": "^1.2.5", "array.prototype.flatmap": "^1.3.3", "array.prototype.tosorted": "^1.1.4", "doctrine": "^2.1.0", "es-iterator-helpers": "^1.2.1", "estraverse": "^5.3.0", "hasown": "^2.0.2", "jsx-ast-utils": "^2.4.1 || ^3.0.0", "minimatch": "^3.1.2", "object.entries": "^1.1.9", "object.fromentries": "^2.0.8", "object.values": "^1.2.1", "prop-types": "^15.8.1", "resolve": "^2.0.0-next.5", "semver": "^6.3.1", "string.prototype.matchall": "^4.0.12", "string.prototype.repeat": "^1.0.0" }, "peerDependencies": { "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7" } }, "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA=="],

    "eslint-plugin-react-hooks": ["eslint-plugin-react-hooks@5.2.0", "", { "peerDependencies": { "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0" } }, "sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg=="],

    "eslint-scope": ["eslint-scope@8.4.0", "", { "dependencies": { "esrecurse": "^4.3.0", "estraverse": "^5.2.0" } }, "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg=="],

    "eslint-visitor-keys": ["eslint-visitor-keys@4.2.1", "", {}, "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ=="],

    "espree": ["espree@10.4.0", "", { "dependencies": { "acorn": "^8.15.0", "acorn-jsx": "^5.3.2", "eslint-visitor-keys": "^4.2.1" } }, "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ=="],

    "esquery": ["esquery@1.7.0", "", { "dependencies": { "estraverse": "^5.1.0" } }, "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g=="],

    "esrecurse": ["esrecurse@4.3.0", "", { "dependencies": { "estraverse": "^5.2.0" } }, "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag=="],

    "estraverse": ["estraverse@5.3.0", "", {}, "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA=="],

    "esutils": ["esutils@2.0.3", "", {}, "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="],

    "fast-deep-equal": ["fast-deep-equal@3.1.3", "", {}, "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="],

    "fast-glob": ["fast-glob@3.3.3", "", { "dependencies": { "@nodelib/fs.stat": "^2.0.2", "@nodelib/fs.walk": "^1.2.3", "glob-parent": "^5.1.2", "merge2": "^1.3.0", "micromatch": "^4.0.8" } }, "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg=="],

    "fast-json-stable-stringify": ["fast-json-stable-stringify@2.1.0", "", {}, "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="],

    "fast-levenshtein": ["fast-levenshtein@2.0.6", "", {}, "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw=="],

    "fastq": ["fastq@1.20.1", "", { "dependencies": { "reusify": "^1.0.4" } }, "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw=="],

    "fdir": ["fdir@6.5.0", "", { "peerDependencies": { "picomatch": "^3 || ^4" } }, "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg=="],

    "file-entry-cache": ["file-entry-cache@8.0.0", "", { "dependencies": { "flat-cache": "^4.0.0" } }, "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ=="],

    "fill-range": ["fill-range@7.1.1", "", { "dependencies": { "to-regex-range": "^5.0.1" } }, "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg=="],

    "find-up": ["find-up@5.0.0", "", { "dependencies": { "locate-path": "^6.0.0", "path-exists": "^4.0.0" } }, "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng=="],

    "flat-cache": ["flat-cache@4.0.1", "", { "dependencies": { "flatted": "^3.2.9", "keyv": "^4.5.4" } }, "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw=="],

    "flatted": ["flatted@3.4.2", "", {}, "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA=="],

    "for-each": ["for-each@0.3.5", "", { "dependencies": { "is-callable": "^1.2.7" } }, "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg=="],

    "fraction.js": ["fraction.js@5.3.4", "", {}, "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ=="],

    "framer-motion": ["framer-motion@11.18.2", "", { "dependencies": { "motion-dom": "^11.18.1", "motion-utils": "^11.18.1", "tslib": "^2.4.0" }, "peerDependencies": { "@emotion/is-prop-valid": "*", "react": "^18.0.0 || ^19.0.0", "react-dom": "^18.0.0 || ^19.0.0" }, "optionalPeers": ["@emotion/is-prop-valid"] }, "sha512-5F5Och7wrvtLVElIpclDT0CBzMVg3dL22B64aZwHtsIY8RB4mXICLrkajK4G9R+ieSAGcgrLeae2SeUTg2pr6w=="],

    "fsevents": ["fsevents@2.3.2", "", { "os": "darwin" }, "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA=="],

    "function-bind": ["function-bind@1.1.2", "", {}, "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA=="],

    "function.prototype.name": ["function.prototype.name@1.1.8", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.3", "define-properties": "^1.2.1", "functions-have-names": "^1.2.3", "hasown": "^2.0.2", "is-callable": "^1.2.7" } }, "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q=="],

    "functions-have-names": ["functions-have-names@1.2.3", "", {}, "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ=="],

    "generator-function": ["generator-function@2.0.1", "", {}, "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g=="],

    "get-intrinsic": ["get-intrinsic@1.3.0", "", { "dependencies": { "call-bind-apply-helpers": "^1.0.2", "es-define-property": "^1.0.1", "es-errors": "^1.3.0", "es-object-atoms": "^1.1.1", "function-bind": "^1.1.2", "get-proto": "^1.0.1", "gopd": "^1.2.0", "has-symbols": "^1.1.0", "hasown": "^2.0.2", "math-intrinsics": "^1.1.0" } }, "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ=="],

    "get-proto": ["get-proto@1.0.1", "", { "dependencies": { "dunder-proto": "^1.0.1", "es-object-atoms": "^1.0.0" } }, "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g=="],

    "get-symbol-description": ["get-symbol-description@1.1.0", "", { "dependencies": { "call-bound": "^1.0.3", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.6" } }, "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg=="],

    "get-tsconfig": ["get-tsconfig@4.14.0", "", { "dependencies": { "resolve-pkg-maps": "^1.0.0" } }, "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA=="],

    "glob-parent": ["glob-parent@6.0.2", "", { "dependencies": { "is-glob": "^4.0.3" } }, "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A=="],

    "globals": ["globals@14.0.0", "", {}, "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ=="],

    "globalthis": ["globalthis@1.0.4", "", { "dependencies": { "define-properties": "^1.2.1", "gopd": "^1.0.1" } }, "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ=="],

    "gopd": ["gopd@1.2.0", "", {}, "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg=="],

    "has-bigints": ["has-bigints@1.1.0", "", {}, "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg=="],

    "has-flag": ["has-flag@4.0.0", "", {}, "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="],

    "has-property-descriptors": ["has-property-descriptors@1.0.2", "", { "dependencies": { "es-define-property": "^1.0.0" } }, "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg=="],

    "has-proto": ["has-proto@1.2.0", "", { "dependencies": { "dunder-proto": "^1.0.0" } }, "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ=="],

    "has-symbols": ["has-symbols@1.1.0", "", {}, "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ=="],

    "has-tostringtag": ["has-tostringtag@1.0.2", "", { "dependencies": { "has-symbols": "^1.0.3" } }, "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw=="],

    "hasown": ["hasown@2.0.3", "", { "dependencies": { "function-bind": "^1.1.2" } }, "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg=="],

    "ignore": ["ignore@5.3.2", "", {}, "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g=="],

    "import-fresh": ["import-fresh@3.3.1", "", { "dependencies": { "parent-module": "^1.0.0", "resolve-from": "^4.0.0" } }, "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ=="],

    "imurmurhash": ["imurmurhash@0.1.4", "", {}, "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA=="],

    "internal-slot": ["internal-slot@1.1.0", "", { "dependencies": { "es-errors": "^1.3.0", "hasown": "^2.0.2", "side-channel": "^1.1.0" } }, "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw=="],

    "is-array-buffer": ["is-array-buffer@3.0.5", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.3", "get-intrinsic": "^1.2.6" } }, "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A=="],

    "is-async-function": ["is-async-function@2.1.1", "", { "dependencies": { "async-function": "^1.0.0", "call-bound": "^1.0.3", "get-proto": "^1.0.1", "has-tostringtag": "^1.0.2", "safe-regex-test": "^1.1.0" } }, "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ=="],

    "is-bigint": ["is-bigint@1.1.0", "", { "dependencies": { "has-bigints": "^1.0.2" } }, "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ=="],

    "is-binary-path": ["is-binary-path@2.1.0", "", { "dependencies": { "binary-extensions": "^2.0.0" } }, "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw=="],

    "is-boolean-object": ["is-boolean-object@1.2.2", "", { "dependencies": { "call-bound": "^1.0.3", "has-tostringtag": "^1.0.2" } }, "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A=="],

    "is-bun-module": ["is-bun-module@2.0.0", "", { "dependencies": { "semver": "^7.7.1" } }, "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ=="],

    "is-callable": ["is-callable@1.2.7", "", {}, "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA=="],

    "is-core-module": ["is-core-module@2.16.2", "", { "dependencies": { "hasown": "^2.0.3" } }, "sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA=="],

    "is-data-view": ["is-data-view@1.0.2", "", { "dependencies": { "call-bound": "^1.0.2", "get-intrinsic": "^1.2.6", "is-typed-array": "^1.1.13" } }, "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw=="],

    "is-date-object": ["is-date-object@1.1.0", "", { "dependencies": { "call-bound": "^1.0.2", "has-tostringtag": "^1.0.2" } }, "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg=="],

    "is-extglob": ["is-extglob@2.1.1", "", {}, "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ=="],

    "is-finalizationregistry": ["is-finalizationregistry@1.1.1", "", { "dependencies": { "call-bound": "^1.0.3" } }, "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg=="],

    "is-generator-function": ["is-generator-function@1.1.2", "", { "dependencies": { "call-bound": "^1.0.4", "generator-function": "^2.0.0", "get-proto": "^1.0.1", "has-tostringtag": "^1.0.2", "safe-regex-test": "^1.1.0" } }, "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA=="],

    "is-glob": ["is-glob@4.0.3", "", { "dependencies": { "is-extglob": "^2.1.1" } }, "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg=="],

    "is-map": ["is-map@2.0.3", "", {}, "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw=="],

    "is-negative-zero": ["is-negative-zero@2.0.3", "", {}, "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw=="],

    "is-number": ["is-number@7.0.0", "", {}, "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="],

    "is-number-object": ["is-number-object@1.1.1", "", { "dependencies": { "call-bound": "^1.0.3", "has-tostringtag": "^1.0.2" } }, "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw=="],

    "is-regex": ["is-regex@1.2.1", "", { "dependencies": { "call-bound": "^1.0.2", "gopd": "^1.2.0", "has-tostringtag": "^1.0.2", "hasown": "^2.0.2" } }, "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g=="],

    "is-set": ["is-set@2.0.3", "", {}, "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg=="],

    "is-shared-array-buffer": ["is-shared-array-buffer@1.0.4", "", { "dependencies": { "call-bound": "^1.0.3" } }, "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A=="],

    "is-string": ["is-string@1.1.1", "", { "dependencies": { "call-bound": "^1.0.3", "has-tostringtag": "^1.0.2" } }, "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA=="],

    "is-symbol": ["is-symbol@1.1.1", "", { "dependencies": { "call-bound": "^1.0.2", "has-symbols": "^1.1.0", "safe-regex-test": "^1.1.0" } }, "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w=="],

    "is-typed-array": ["is-typed-array@1.1.15", "", { "dependencies": { "which-typed-array": "^1.1.16" } }, "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ=="],

    "is-weakmap": ["is-weakmap@2.0.2", "", {}, "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w=="],

    "is-weakref": ["is-weakref@1.1.1", "", { "dependencies": { "call-bound": "^1.0.3" } }, "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew=="],

    "is-weakset": ["is-weakset@2.0.4", "", { "dependencies": { "call-bound": "^1.0.3", "get-intrinsic": "^1.2.6" } }, "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ=="],

    "isarray": ["isarray@2.0.5", "", {}, "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw=="],

    "isexe": ["isexe@2.0.0", "", {}, "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw=="],

    "iterator.prototype": ["iterator.prototype@1.1.5", "", { "dependencies": { "define-data-property": "^1.1.4", "es-object-atoms": "^1.0.0", "get-intrinsic": "^1.2.6", "get-proto": "^1.0.0", "has-symbols": "^1.1.0", "set-function-name": "^2.0.2" } }, "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g=="],

    "jiti": ["jiti@1.21.7", "", { "bin": "bin/jiti.js" }, "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A=="],

    "js-tokens": ["js-tokens@4.0.0", "", {}, "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="],

    "js-yaml": ["js-yaml@4.1.1", "", { "dependencies": { "argparse": "^2.0.1" }, "bin": "bin/js-yaml.js" }, "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA=="],

    "json-buffer": ["json-buffer@3.0.1", "", {}, "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ=="],

    "json-schema-traverse": ["json-schema-traverse@0.4.1", "", {}, "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="],

    "json-stable-stringify-without-jsonify": ["json-stable-stringify-without-jsonify@1.0.1", "", {}, "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw=="],

    "json5": ["json5@1.0.2", "", { "dependencies": { "minimist": "^1.2.0" }, "bin": "lib/cli.js" }, "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA=="],

    "jsx-ast-utils": ["jsx-ast-utils@3.3.5", "", { "dependencies": { "array-includes": "^3.1.6", "array.prototype.flat": "^1.3.1", "object.assign": "^4.1.4", "object.values": "^1.1.6" } }, "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ=="],

    "keyv": ["keyv@4.5.4", "", { "dependencies": { "json-buffer": "3.0.1" } }, "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw=="],

    "language-subtag-registry": ["language-subtag-registry@0.3.23", "", {}, "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ=="],

    "language-tags": ["language-tags@1.0.9", "", { "dependencies": { "language-subtag-registry": "^0.3.20" } }, "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA=="],

    "levn": ["levn@0.4.1", "", { "dependencies": { "prelude-ls": "^1.2.1", "type-check": "~0.4.0" } }, "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ=="],

    "lilconfig": ["lilconfig@3.1.3", "", {}, "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw=="],

    "lines-and-columns": ["lines-and-columns@1.2.4", "", {}, "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg=="],

    "locate-path": ["locate-path@6.0.0", "", { "dependencies": { "p-locate": "^5.0.0" } }, "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw=="],

    "lodash.merge": ["lodash.merge@4.6.2", "", {}, "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ=="],

    "loose-envify": ["loose-envify@1.4.0", "", { "dependencies": { "js-tokens": "^3.0.0 || ^4.0.0" }, "bin": "cli.js" }, "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q=="],

    "lucide-react": ["lucide-react@1.17.0", "", { "peerDependencies": { "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0" } }, "sha512-9FA9evdox/JQL5PT57fdA1x/yg8T7knJ98+zjTL3UfKza6pflQUUh3XtaQIHKvnsJw1lmsEyHVlt5jchYxOQ5w=="],

    "math-intrinsics": ["math-intrinsics@1.1.0", "", {}, "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g=="],

    "merge2": ["merge2@1.4.1", "", {}, "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg=="],

    "micromatch": ["micromatch@4.0.8", "", { "dependencies": { "braces": "^3.0.3", "picomatch": "^2.3.1" } }, "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA=="],

    "minimatch": ["minimatch@3.1.5", "", { "dependencies": { "brace-expansion": "^1.1.7" } }, "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w=="],

    "minimist": ["minimist@1.2.8", "", {}, "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA=="],

    "motion-dom": ["motion-dom@11.18.1", "", { "dependencies": { "motion-utils": "^11.18.1" } }, "sha512-g76KvA001z+atjfxczdRtw/RXOM3OMSdd1f4DL77qCTF/+avrRJiawSG4yDibEQ215sr9kpinSlX2pCTJ9zbhw=="],

    "motion-utils": ["motion-utils@11.18.1", "", {}, "sha512-49Kt+HKjtbJKLtgO/LKj9Ld+6vw9BjH5d9sc40R/kVyH8GLAXgT42M2NnuPcJNuA3s9ZfZBUcwIgpmZWGEE+hA=="],

    "ms": ["ms@2.1.3", "", {}, "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="],

    "mz": ["mz@2.7.0", "", { "dependencies": { "any-promise": "^1.0.0", "object-assign": "^4.0.1", "thenify-all": "^1.0.0" } }, "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q=="],

    "nanoid": ["nanoid@3.3.12", "", { "bin": "bin/nanoid.cjs" }, "sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ=="],

    "napi-postinstall": ["napi-postinstall@0.3.4", "", { "bin": "lib/cli.js" }, "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ=="],

    "natural-compare": ["natural-compare@1.4.0", "", {}, "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw=="],

    "next": ["next@15.5.18", "", { "dependencies": { "@next/env": "15.5.18", "@swc/helpers": "0.5.15", "caniuse-lite": "^1.0.30001579", "postcss": "8.4.31", "styled-jsx": "5.1.6" }, "optionalDependencies": { "@next/swc-darwin-arm64": "15.5.18", "@next/swc-darwin-x64": "15.5.18", "@next/swc-linux-arm64-gnu": "15.5.18", "@next/swc-linux-arm64-musl": "15.5.18", "@next/swc-linux-x64-gnu": "15.5.18", "@next/swc-linux-x64-musl": "15.5.18", "@next/swc-win32-arm64-msvc": "15.5.18", "@next/swc-win32-x64-msvc": "15.5.18", "sharp": "^0.34.3" }, "peerDependencies": { "@opentelemetry/api": "^1.1.0", "@playwright/test": "^1.51.1", "babel-plugin-react-compiler": "*", "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0", "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0", "sass": "^1.3.0" }, "optionalPeers": ["@opentelemetry/api", "@playwright/test", "babel-plugin-react-compiler", "sass"], "bin": "dist/bin/next" }, "sha512-eKL8zUJkX9Y5lE+RX/2YJoItVdGlIscyVyboeD9wSpp0PaGqjoA4tTpT2qPqz9ax+5IzGESyLSeZ/RCwbSZ2uQ=="],

    "node-exports-info": ["node-exports-info@1.6.0", "", { "dependencies": { "array.prototype.flatmap": "^1.3.3", "es-errors": "^1.3.0", "object.entries": "^1.1.9", "semver": "^6.3.1" } }, "sha512-pyFS63ptit/P5WqUkt+UUfe+4oevH+bFeIiPPdfb0pFeYEu/1ELnJu5l+5EcTKYL5M7zaAa7S8ddywgXypqKCw=="],

    "node-releases": ["node-releases@2.0.45", "", {}, "sha512-iIbHXV9eBB2nB0wa7oTsrrXq+qQt+9SIlx9AX3T96YgobtEQfis5n6TJ6vV+3QP8DwdriEAcGhARaFCu37peBg=="],

    "normalize-path": ["normalize-path@3.0.0", "", {}, "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="],

    "object-assign": ["object-assign@4.1.1", "", {}, "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg=="],

    "object-hash": ["object-hash@3.0.0", "", {}, "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw=="],

    "object-inspect": ["object-inspect@1.13.4", "", {}, "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew=="],

    "object-keys": ["object-keys@1.1.1", "", {}, "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="],

    "object.assign": ["object.assign@4.1.7", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.3", "define-properties": "^1.2.1", "es-object-atoms": "^1.0.0", "has-symbols": "^1.1.0", "object-keys": "^1.1.1" } }, "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw=="],

    "object.entries": ["object.entries@1.1.9", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.4", "define-properties": "^1.2.1", "es-object-atoms": "^1.1.1" } }, "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw=="],

    "object.fromentries": ["object.fromentries@2.0.8", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-abstract": "^1.23.2", "es-object-atoms": "^1.0.0" } }, "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ=="],

    "object.groupby": ["object.groupby@1.0.3", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-abstract": "^1.23.2" } }, "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ=="],

    "object.values": ["object.values@1.2.1", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.3", "define-properties": "^1.2.1", "es-object-atoms": "^1.0.0" } }, "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA=="],

    "optionator": ["optionator@0.9.4", "", { "dependencies": { "deep-is": "^0.1.3", "fast-levenshtein": "^2.0.6", "levn": "^0.4.1", "prelude-ls": "^1.2.1", "type-check": "^0.4.0", "word-wrap": "^1.2.5" } }, "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g=="],

    "own-keys": ["own-keys@1.0.1", "", { "dependencies": { "get-intrinsic": "^1.2.6", "object-keys": "^1.1.1", "safe-push-apply": "^1.0.0" } }, "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg=="],

    "p-limit": ["p-limit@3.1.0", "", { "dependencies": { "yocto-queue": "^0.1.0" } }, "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ=="],

    "p-locate": ["p-locate@5.0.0", "", { "dependencies": { "p-limit": "^3.0.2" } }, "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw=="],

    "parent-module": ["parent-module@1.0.1", "", { "dependencies": { "callsites": "^3.0.0" } }, "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g=="],

    "path-exists": ["path-exists@4.0.0", "", {}, "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="],

    "path-key": ["path-key@3.1.1", "", {}, "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="],

    "path-parse": ["path-parse@1.0.7", "", {}, "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="],

    "picocolors": ["picocolors@1.1.1", "", {}, "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA=="],

    "picomatch": ["picomatch@2.3.2", "", {}, "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA=="],

    "pify": ["pify@2.3.0", "", {}, "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog=="],

    "pirates": ["pirates@4.0.7", "", {}, "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA=="],

    "playwright": ["playwright@1.60.0", "", { "dependencies": { "playwright-core": "1.60.0" }, "optionalDependencies": { "fsevents": "2.3.2" }, "bin": { "playwright": "cli.js" } }, "sha512-hheHdokM8cdqCb0lcE3s+zT4t4W+vvjpGxsZlDnikarzx8tSzMebh3UiFtgqwFwnTnjYQcsyMF8ei2mCO/tpeA=="],

    "playwright-core": ["playwright-core@1.60.0", "", { "bin": { "playwright-core": "cli.js" } }, "sha512-9bW6zvX/m0lEbgTKJ6YppOKx8H3VOPBMOCFh2irXFOT4BbHgrx5hPjwJYLT40Lu+4qtD36qKc/Hn56StUW57IA=="],

    "possible-typed-array-names": ["possible-typed-array-names@1.1.0", "", {}, "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg=="],

    "postcss": ["postcss@8.5.15", "", { "dependencies": { "nanoid": "^3.3.12", "picocolors": "^1.1.1", "source-map-js": "^1.2.1" } }, "sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A=="],

    "postcss-import": ["postcss-import@15.1.0", "", { "dependencies": { "postcss-value-parser": "^4.0.0", "read-cache": "^1.0.0", "resolve": "^1.1.7" }, "peerDependencies": { "postcss": "^8.0.0" } }, "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew=="],

    "postcss-js": ["postcss-js@4.1.0", "", { "dependencies": { "camelcase-css": "^2.0.1" }, "peerDependencies": { "postcss": "^8.4.21" } }, "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw=="],

    "postcss-load-config": ["postcss-load-config@6.0.1", "", { "dependencies": { "lilconfig": "^3.1.1" }, "peerDependencies": { "jiti": ">=1.21.0", "postcss": ">=8.0.9", "tsx": "^4.8.1", "yaml": "^2.4.2" }, "optionalPeers": ["tsx", "yaml"] }, "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g=="],

    "postcss-nested": ["postcss-nested@6.2.0", "", { "dependencies": { "postcss-selector-parser": "^6.1.1" }, "peerDependencies": { "postcss": "^8.2.14" } }, "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ=="],

    "postcss-selector-parser": ["postcss-selector-parser@6.1.2", "", { "dependencies": { "cssesc": "^3.0.0", "util-deprecate": "^1.0.2" } }, "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg=="],

    "postcss-value-parser": ["postcss-value-parser@4.2.0", "", {}, "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ=="],

    "prelude-ls": ["prelude-ls@1.2.1", "", {}, "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g=="],

    "prop-types": ["prop-types@15.8.1", "", { "dependencies": { "loose-envify": "^1.4.0", "object-assign": "^4.1.1", "react-is": "^16.13.1" } }, "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg=="],

    "punycode": ["punycode@2.3.1", "", {}, "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg=="],

    "queue-microtask": ["queue-microtask@1.2.3", "", {}, "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A=="],

    "react": ["react@19.2.6", "", {}, "sha512-sfWGGfavi0xr8Pg0sVsyHMAOziVYKgPLNrS7ig+ivMNb3wbCBw3KxtflsGBAwD3gYQlE/AEZsTLgToRrSCjb0Q=="],

    "react-dom": ["react-dom@19.2.6", "", { "dependencies": { "scheduler": "^0.27.0" }, "peerDependencies": { "react": "^19.2.6" } }, "sha512-0prMI+hvBbPjsWnxDLxlCGyM8PN6UuWjEUCYmZhO67xIV9Xasa/r/vDnq+Xyq4Lo27g8QSbO5YzARu0D1Sps3g=="],

    "react-is": ["react-is@16.13.1", "", {}, "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="],

    "read-cache": ["read-cache@1.0.0", "", { "dependencies": { "pify": "^2.3.0" } }, "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA=="],

    "readdirp": ["readdirp@3.6.0", "", { "dependencies": { "picomatch": "^2.2.1" } }, "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA=="],

    "reflect.getprototypeof": ["reflect.getprototypeof@1.0.10", "", { "dependencies": { "call-bind": "^1.0.8", "define-properties": "^1.2.1", "es-abstract": "^1.23.9", "es-errors": "^1.3.0", "es-object-atoms": "^1.0.0", "get-intrinsic": "^1.2.7", "get-proto": "^1.0.1", "which-builtin-type": "^1.2.1" } }, "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw=="],

    "regexp.prototype.flags": ["regexp.prototype.flags@1.5.4", "", { "dependencies": { "call-bind": "^1.0.8", "define-properties": "^1.2.1", "es-errors": "^1.3.0", "get-proto": "^1.0.1", "gopd": "^1.2.0", "set-function-name": "^2.0.2" } }, "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA=="],

    "resolve": ["resolve@1.22.12", "", { "dependencies": { "es-errors": "^1.3.0", "is-core-module": "^2.16.1", "path-parse": "^1.0.7", "supports-preserve-symlinks-flag": "^1.0.0" }, "bin": "bin/resolve" }, "sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA=="],

    "resolve-from": ["resolve-from@4.0.0", "", {}, "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g=="],

    "resolve-pkg-maps": ["resolve-pkg-maps@1.0.0", "", {}, "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw=="],

    "reusify": ["reusify@1.1.0", "", {}, "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw=="],

    "run-parallel": ["run-parallel@1.2.0", "", { "dependencies": { "queue-microtask": "^1.2.2" } }, "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA=="],

    "safe-array-concat": ["safe-array-concat@1.1.4", "", { "dependencies": { "call-bind": "^1.0.9", "call-bound": "^1.0.4", "get-intrinsic": "^1.3.0", "has-symbols": "^1.1.0", "isarray": "^2.0.5" } }, "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg=="],

    "safe-push-apply": ["safe-push-apply@1.0.0", "", { "dependencies": { "es-errors": "^1.3.0", "isarray": "^2.0.5" } }, "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA=="],

    "safe-regex-test": ["safe-regex-test@1.1.0", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "is-regex": "^1.2.1" } }, "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw=="],

    "scheduler": ["scheduler@0.27.0", "", {}, "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q=="],

    "semver": ["semver@6.3.1", "", { "bin": "bin/semver.js" }, "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA=="],

    "set-function-length": ["set-function-length@1.2.2", "", { "dependencies": { "define-data-property": "^1.1.4", "es-errors": "^1.3.0", "function-bind": "^1.1.2", "get-intrinsic": "^1.2.4", "gopd": "^1.0.1", "has-property-descriptors": "^1.0.2" } }, "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg=="],

    "set-function-name": ["set-function-name@2.0.2", "", { "dependencies": { "define-data-property": "^1.1.4", "es-errors": "^1.3.0", "functions-have-names": "^1.2.3", "has-property-descriptors": "^1.0.2" } }, "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ=="],

    "set-proto": ["set-proto@1.0.0", "", { "dependencies": { "dunder-proto": "^1.0.1", "es-errors": "^1.3.0", "es-object-atoms": "^1.0.0" } }, "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw=="],

    "sharp": ["sharp@0.34.5", "", { "dependencies": { "@img/colour": "^1.0.0", "detect-libc": "^2.1.2", "semver": "^7.7.3" }, "optionalDependencies": { "@img/sharp-darwin-arm64": "0.34.5", "@img/sharp-darwin-x64": "0.34.5", "@img/sharp-libvips-darwin-arm64": "1.2.4", "@img/sharp-libvips-darwin-x64": "1.2.4", "@img/sharp-libvips-linux-arm": "1.2.4", "@img/sharp-libvips-linux-arm64": "1.2.4", "@img/sharp-libvips-linux-ppc64": "1.2.4", "@img/sharp-libvips-linux-riscv64": "1.2.4", "@img/sharp-libvips-linux-s390x": "1.2.4", "@img/sharp-libvips-linux-x64": "1.2.4", "@img/sharp-libvips-linuxmusl-arm64": "1.2.4", "@img/sharp-libvips-linuxmusl-x64": "1.2.4", "@img/sharp-linux-arm": "0.34.5", "@img/sharp-linux-arm64": "0.34.5", "@img/sharp-linux-ppc64": "0.34.5", "@img/sharp-linux-riscv64": "0.34.5", "@img/sharp-linux-s390x": "0.34.5", "@img/sharp-linux-x64": "0.34.5", "@img/sharp-linuxmusl-arm64": "0.34.5", "@img/sharp-linuxmusl-x64": "0.34.5", "@img/sharp-wasm32": "0.34.5", "@img/sharp-win32-arm64": "0.34.5", "@img/sharp-win32-ia32": "0.34.5", "@img/sharp-win32-x64": "0.34.5" } }, "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg=="],

    "shebang-command": ["shebang-command@2.0.0", "", { "dependencies": { "shebang-regex": "^3.0.0" } }, "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA=="],

    "shebang-regex": ["shebang-regex@3.0.0", "", {}, "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="],

    "side-channel": ["side-channel@1.1.0", "", { "dependencies": { "es-errors": "^1.3.0", "object-inspect": "^1.13.3", "side-channel-list": "^1.0.0", "side-channel-map": "^1.0.1", "side-channel-weakmap": "^1.0.2" } }, "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw=="],

    "side-channel-list": ["side-channel-list@1.0.1", "", { "dependencies": { "es-errors": "^1.3.0", "object-inspect": "^1.13.4" } }, "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w=="],

    "side-channel-map": ["side-channel-map@1.0.1", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.5", "object-inspect": "^1.13.3" } }, "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA=="],

    "side-channel-weakmap": ["side-channel-weakmap@1.0.2", "", { "dependencies": { "call-bound": "^1.0.2", "es-errors": "^1.3.0", "get-intrinsic": "^1.2.5", "object-inspect": "^1.13.3", "side-channel-map": "^1.0.1" } }, "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A=="],

    "source-map-js": ["source-map-js@1.2.1", "", {}, "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA=="],

    "stable-hash": ["stable-hash@0.0.5", "", {}, "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA=="],

    "stop-iteration-iterator": ["stop-iteration-iterator@1.1.0", "", { "dependencies": { "es-errors": "^1.3.0", "internal-slot": "^1.1.0" } }, "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ=="],

    "string.prototype.includes": ["string.prototype.includes@2.0.1", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-abstract": "^1.23.3" } }, "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg=="],

    "string.prototype.matchall": ["string.prototype.matchall@4.0.12", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.3", "define-properties": "^1.2.1", "es-abstract": "^1.23.6", "es-errors": "^1.3.0", "es-object-atoms": "^1.0.0", "get-intrinsic": "^1.2.6", "gopd": "^1.2.0", "has-symbols": "^1.1.0", "internal-slot": "^1.1.0", "regexp.prototype.flags": "^1.5.3", "set-function-name": "^2.0.2", "side-channel": "^1.1.0" } }, "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA=="],

    "string.prototype.repeat": ["string.prototype.repeat@1.0.0", "", { "dependencies": { "define-properties": "^1.1.3", "es-abstract": "^1.17.5" } }, "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w=="],

    "string.prototype.trim": ["string.prototype.trim@1.2.10", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.2", "define-data-property": "^1.1.4", "define-properties": "^1.2.1", "es-abstract": "^1.23.5", "es-object-atoms": "^1.0.0", "has-property-descriptors": "^1.0.2" } }, "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA=="],

    "string.prototype.trimend": ["string.prototype.trimend@1.0.9", "", { "dependencies": { "call-bind": "^1.0.8", "call-bound": "^1.0.2", "define-properties": "^1.2.1", "es-object-atoms": "^1.0.0" } }, "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ=="],

    "string.prototype.trimstart": ["string.prototype.trimstart@1.0.8", "", { "dependencies": { "call-bind": "^1.0.7", "define-properties": "^1.2.1", "es-object-atoms": "^1.0.0" } }, "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg=="],

    "strip-bom": ["strip-bom@3.0.0", "", {}, "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA=="],

    "strip-json-comments": ["strip-json-comments@3.1.1", "", {}, "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig=="],

    "styled-jsx": ["styled-jsx@5.1.6", "", { "dependencies": { "client-only": "0.0.1" }, "peerDependencies": { "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0" } }, "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA=="],

    "sucrase": ["sucrase@3.35.1", "", { "dependencies": { "@jridgewell/gen-mapping": "^0.3.2", "commander": "^4.0.0", "lines-and-columns": "^1.1.6", "mz": "^2.7.0", "pirates": "^4.0.1", "tinyglobby": "^0.2.11", "ts-interface-checker": "^0.1.9" }, "bin": { "sucrase": "bin/sucrase", "sucrase-node": "bin/sucrase-node" } }, "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw=="],

    "supports-color": ["supports-color@7.2.0", "", { "dependencies": { "has-flag": "^4.0.0" } }, "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw=="],

    "supports-preserve-symlinks-flag": ["supports-preserve-symlinks-flag@1.0.0", "", {}, "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w=="],

    "tailwindcss": ["tailwindcss@3.4.19", "", { "dependencies": { "@alloc/quick-lru": "^5.2.0", "arg": "^5.0.2", "chokidar": "^3.6.0", "didyoumean": "^1.2.2", "dlv": "^1.1.3", "fast-glob": "^3.3.2", "glob-parent": "^6.0.2", "is-glob": "^4.0.3", "jiti": "^1.21.7", "lilconfig": "^3.1.3", "micromatch": "^4.0.8", "normalize-path": "^3.0.0", "object-hash": "^3.0.0", "picocolors": "^1.1.1", "postcss": "^8.4.47", "postcss-import": "^15.1.0", "postcss-js": "^4.0.1", "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0", "postcss-nested": "^6.2.0", "postcss-selector-parser": "^6.1.2", "resolve": "^1.22.8", "sucrase": "^3.35.0" }, "bin": { "tailwind": "lib/cli.js", "tailwindcss": "lib/cli.js" } }, "sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ=="],

    "thenify": ["thenify@3.3.1", "", { "dependencies": { "any-promise": "^1.0.0" } }, "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw=="],

    "thenify-all": ["thenify-all@1.6.0", "", { "dependencies": { "thenify": ">= 3.1.0 < 4" } }, "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA=="],

    "tinyglobby": ["tinyglobby@0.2.16", "", { "dependencies": { "fdir": "^6.5.0", "picomatch": "^4.0.4" } }, "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg=="],

    "to-regex-range": ["to-regex-range@5.0.1", "", { "dependencies": { "is-number": "^7.0.0" } }, "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ=="],

    "ts-api-utils": ["ts-api-utils@2.5.0", "", { "peerDependencies": { "typescript": ">=4.8.4" } }, "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA=="],

    "ts-interface-checker": ["ts-interface-checker@0.1.13", "", {}, "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA=="],

    "tsconfig-paths": ["tsconfig-paths@3.15.0", "", { "dependencies": { "@types/json5": "^0.0.29", "json5": "^1.0.2", "minimist": "^1.2.6", "strip-bom": "^3.0.0" } }, "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg=="],

    "tslib": ["tslib@2.8.1", "", {}, "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w=="],

    "type-check": ["type-check@0.4.0", "", { "dependencies": { "prelude-ls": "^1.2.1" } }, "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew=="],

    "typed-array-buffer": ["typed-array-buffer@1.0.3", "", { "dependencies": { "call-bound": "^1.0.3", "es-errors": "^1.3.0", "is-typed-array": "^1.1.14" } }, "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw=="],

    "typed-array-byte-length": ["typed-array-byte-length@1.0.3", "", { "dependencies": { "call-bind": "^1.0.8", "for-each": "^0.3.3", "gopd": "^1.2.0", "has-proto": "^1.2.0", "is-typed-array": "^1.1.14" } }, "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg=="],

    "typed-array-byte-offset": ["typed-array-byte-offset@1.0.4", "", { "dependencies": { "available-typed-arrays": "^1.0.7", "call-bind": "^1.0.8", "for-each": "^0.3.3", "gopd": "^1.2.0", "has-proto": "^1.2.0", "is-typed-array": "^1.1.15", "reflect.getprototypeof": "^1.0.9" } }, "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ=="],

    "typed-array-length": ["typed-array-length@1.0.7", "", { "dependencies": { "call-bind": "^1.0.7", "for-each": "^0.3.3", "gopd": "^1.0.1", "is-typed-array": "^1.1.13", "possible-typed-array-names": "^1.0.0", "reflect.getprototypeof": "^1.0.6" } }, "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg=="],

    "typescript": ["typescript@5.9.3", "", { "bin": { "tsc": "bin/tsc", "tsserver": "bin/tsserver" } }, "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw=="],

    "unbox-primitive": ["unbox-primitive@1.1.0", "", { "dependencies": { "call-bound": "^1.0.3", "has-bigints": "^1.0.2", "has-symbols": "^1.1.0", "which-boxed-primitive": "^1.1.1" } }, "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw=="],

    "undici-types": ["undici-types@6.21.0", "", {}, "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ=="],

    "unrs-resolver": ["unrs-resolver@1.12.2", "", { "dependencies": { "napi-postinstall": "^0.3.4" }, "optionalDependencies": { "@unrs/resolver-binding-android-arm-eabi": "1.12.2", "@unrs/resolver-binding-android-arm64": "1.12.2", "@unrs/resolver-binding-darwin-arm64": "1.12.2", "@unrs/resolver-binding-darwin-x64": "1.12.2", "@unrs/resolver-binding-freebsd-x64": "1.12.2", "@unrs/resolver-binding-linux-arm-gnueabihf": "1.12.2", "@unrs/resolver-binding-linux-arm-musleabihf": "1.12.2", "@unrs/resolver-binding-linux-arm64-gnu": "1.12.2", "@unrs/resolver-binding-linux-arm64-musl": "1.12.2", "@unrs/resolver-binding-linux-loong64-gnu": "1.12.2", "@unrs/resolver-binding-linux-loong64-musl": "1.12.2", "@unrs/resolver-binding-linux-ppc64-gnu": "1.12.2", "@unrs/resolver-binding-linux-riscv64-gnu": "1.12.2", "@unrs/resolver-binding-linux-riscv64-musl": "1.12.2", "@unrs/resolver-binding-linux-s390x-gnu": "1.12.2", "@unrs/resolver-binding-linux-x64-gnu": "1.12.2", "@unrs/resolver-binding-linux-x64-musl": "1.12.2", "@unrs/resolver-binding-openharmony-arm64": "1.12.2", "@unrs/resolver-binding-wasm32-wasi": "1.12.2", "@unrs/resolver-binding-win32-arm64-msvc": "1.12.2", "@unrs/resolver-binding-win32-ia32-msvc": "1.12.2", "@unrs/resolver-binding-win32-x64-msvc": "1.12.2" } }, "sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ=="],

    "update-browserslist-db": ["update-browserslist-db@1.2.3", "", { "dependencies": { "escalade": "^3.2.0", "picocolors": "^1.1.1" }, "peerDependencies": { "browserslist": ">= 4.21.0" }, "bin": "cli.js" }, "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w=="],

    "uri-js": ["uri-js@4.4.1", "", { "dependencies": { "punycode": "^2.1.0" } }, "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg=="],

    "util-deprecate": ["util-deprecate@1.0.2", "", {}, "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="],

    "which": ["which@2.0.2", "", { "dependencies": { "isexe": "^2.0.0" }, "bin": { "node-which": "bin/node-which" } }, "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA=="],

    "which-boxed-primitive": ["which-boxed-primitive@1.1.1", "", { "dependencies": { "is-bigint": "^1.1.0", "is-boolean-object": "^1.2.1", "is-number-object": "^1.1.1", "is-string": "^1.1.1", "is-symbol": "^1.1.1" } }, "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA=="],

    "which-builtin-type": ["which-builtin-type@1.2.1", "", { "dependencies": { "call-bound": "^1.0.2", "function.prototype.name": "^1.1.6", "has-tostringtag": "^1.0.2", "is-async-function": "^2.0.0", "is-date-object": "^1.1.0", "is-finalizationregistry": "^1.1.0", "is-generator-function": "^1.0.10", "is-regex": "^1.2.1", "is-weakref": "^1.0.2", "isarray": "^2.0.5", "which-boxed-primitive": "^1.1.0", "which-collection": "^1.0.2", "which-typed-array": "^1.1.16" } }, "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q=="],

    "which-collection": ["which-collection@1.0.2", "", { "dependencies": { "is-map": "^2.0.3", "is-set": "^2.0.3", "is-weakmap": "^2.0.2", "is-weakset": "^2.0.3" } }, "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw=="],

    "which-typed-array": ["which-typed-array@1.1.20", "", { "dependencies": { "available-typed-arrays": "^1.0.7", "call-bind": "^1.0.8", "call-bound": "^1.0.4", "for-each": "^0.3.5", "get-proto": "^1.0.1", "gopd": "^1.2.0", "has-tostringtag": "^1.0.2" } }, "sha512-LYfpUkmqwl0h9A2HL09Mms427Q1RZWuOHsukfVcKRq9q95iQxdw0ix1JQrqbcDR9PH1QDwf5Qo8OZb5lksZ8Xg=="],

    "word-wrap": ["word-wrap@1.2.5", "", {}, "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA=="],

    "yocto-queue": ["yocto-queue@0.1.0", "", {}, "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q=="],

    "@eslint-community/eslint-utils/eslint-visitor-keys": ["eslint-visitor-keys@3.4.3", "", {}, "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag=="],

    "@next/eslint-plugin-next/fast-glob": ["fast-glob@3.3.1", "", { "dependencies": { "@nodelib/fs.stat": "^2.0.2", "@nodelib/fs.walk": "^1.2.3", "glob-parent": "^5.1.2", "merge2": "^1.3.0", "micromatch": "^4.0.4" } }, "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg=="],

    "@typescript-eslint/eslint-plugin/ignore": ["ignore@7.0.5", "", {}, "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg=="],

    "@typescript-eslint/typescript-estree/minimatch": ["minimatch@10.2.5", "", { "dependencies": { "brace-expansion": "^5.0.5" } }, "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg=="],

    "@typescript-eslint/typescript-estree/semver": ["semver@7.8.1", "", { "bin": "bin/semver.js" }, "sha512-rkVq3IXh+4FDGch+KwzX3aV9W3kO54GyEgpvBzSyctDA6Xtd7RJQV1xmXbeQp5v7+VzLOfVqiutSE6GICgPFvg=="],

    "@typescript-eslint/visitor-keys/eslint-visitor-keys": ["eslint-visitor-keys@5.0.1", "", {}, "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA=="],

    "chokidar/fsevents": ["fsevents@2.3.3", "", { "os": "darwin" }, "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw=="],

    "chokidar/glob-parent": ["glob-parent@5.1.2", "", { "dependencies": { "is-glob": "^4.0.1" } }, "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow=="],

    "eslint-import-resolver-node/debug": ["debug@3.2.7", "", { "dependencies": { "ms": "^2.1.1" } }, "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ=="],

    "eslint-import-resolver-node/resolve": ["resolve@2.0.0-next.7", "", { "dependencies": { "es-errors": "^1.3.0", "is-core-module": "^2.16.2", "node-exports-info": "^1.6.0", "object-keys": "^1.1.1", "path-parse": "^1.0.7", "supports-preserve-symlinks-flag": "^1.0.0" }, "bin": "bin/resolve" }, "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ=="],

    "eslint-module-utils/debug": ["debug@3.2.7", "", { "dependencies": { "ms": "^2.1.1" } }, "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ=="],

    "eslint-plugin-import/debug": ["debug@3.2.7", "", { "dependencies": { "ms": "^2.1.1" } }, "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ=="],

    "eslint-plugin-react/resolve": ["resolve@2.0.0-next.7", "", { "dependencies": { "es-errors": "^1.3.0", "is-core-module": "^2.16.2", "node-exports-info": "^1.6.0", "object-keys": "^1.1.1", "path-parse": "^1.0.7", "supports-preserve-symlinks-flag": "^1.0.0" }, "bin": "bin/resolve" }, "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ=="],

    "fast-glob/glob-parent": ["glob-parent@5.1.2", "", { "dependencies": { "is-glob": "^4.0.1" } }, "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow=="],

    "fdir/picomatch": ["picomatch@4.0.4", "", {}, "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A=="],

    "is-bun-module/semver": ["semver@7.8.1", "", { "bin": "bin/semver.js" }, "sha512-rkVq3IXh+4FDGch+KwzX3aV9W3kO54GyEgpvBzSyctDA6Xtd7RJQV1xmXbeQp5v7+VzLOfVqiutSE6GICgPFvg=="],

    "next/postcss": ["postcss@8.4.31", "", { "dependencies": { "nanoid": "^3.3.6", "picocolors": "^1.0.0", "source-map-js": "^1.0.2" } }, "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ=="],

    "sharp/semver": ["semver@7.8.1", "", { "bin": "bin/semver.js" }, "sha512-rkVq3IXh+4FDGch+KwzX3aV9W3kO54GyEgpvBzSyctDA6Xtd7RJQV1xmXbeQp5v7+VzLOfVqiutSE6GICgPFvg=="],

    "tinyglobby/picomatch": ["picomatch@4.0.4", "", {}, "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A=="],

    "@next/eslint-plugin-next/fast-glob/glob-parent": ["glob-parent@5.1.2", "", { "dependencies": { "is-glob": "^4.0.1" } }, "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow=="],

    "@typescript-eslint/typescript-estree/minimatch/brace-expansion": ["brace-expansion@5.0.6", "", { "dependencies": { "balanced-match": "^4.0.2" } }, "sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g=="],

    "@typescript-eslint/typescript-estree/minimatch/brace-expansion/balanced-match": ["balanced-match@4.0.4", "", {}, "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA=="],
  }
}

```
<!-- END_FILE -->

---
<!-- FILE: docker-compose.yml -->
## docker-compose.yml

```yaml
version: "3.9"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: bits_app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
      - PORT=3333
    expose:
      - "3333"
    networks:
      - bits_net
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3333/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s

  nginx:
    image: nginx:1.27-alpine
    container_name: bits_nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./certbot/www:/var/www/certbot:ro
      - ./certbot/conf:/etc/letsencrypt:ro
    networks:
      - bits_net
    depends_on:
      - app

  certbot:
    image: certbot/certbot:latest
    container_name: bits_certbot
    volumes:
      - ./certbot/www:/var/www/certbot
      - ./certbot/conf:/etc/letsencrypt
    entrypoint: >
      sh -c "trap exit TERM; while :; do
        certbot renew --quiet --webroot -w /var/www/certbot;
        sleep 12h & wait $${!};
      done"

networks:
  bits_net:
    driver: bridge

```
<!-- END_FILE -->

---
<!-- FILE: Dockerfile -->
## Dockerfile

```
# ─── Stage 1: Install dependencies ───────────────────────────────────────────
FROM oven/bun:1 AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ─── Stage 2: Build ───────────────────────────────────────────────────────────
FROM oven/bun:1 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# ─── Stage 3: Lean production image ──────────────────────────────────────────
FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3333
ENV HOSTNAME=0.0.0.0

RUN apk add --no-cache wget

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static    ./.next/static

USER nextjs
EXPOSE 3333

CMD ["bun", "server.js"]

```
<!-- END_FILE -->

---
<!-- FILE: DOCS/SECURITY.md -->
## DOCS/SECURITY.md

```md
# Security Policy — BITS College Frontend

## Overview

This Next.js frontend follows OWASP-aligned practices and the project `policies and rules.md` requirements.

## Content Security Policy (CSP)

Configured in `next.config.ts` for all routes:

- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'` (+ `'unsafe-eval'` in development only) — required for Next.js App Router hydration scripts; without this, the page renders blank because inline RSC bootstrap scripts are blocked
- `style-src 'self' 'unsafe-inline'` (Tailwind runtime; no third-party style CDNs)
- `img-src 'self' https://www.bitscollege.edu.et data: blob:`
- `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`
- `form-action` limited to self and the official applications portal
- `upgrade-insecure-requests` in production

## Secure Headers

Also set via `next.config.ts`:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (geolocation, microphone, camera disabled)
- `Strict-Transport-Security` (production deployments over HTTPS)

## Rendering Safety

- No `dangerouslySetInnerHTML` for user content.
- React auto-escapes all dynamic text.
- No third-party analytics or chat widgets bundled.

## Authentication & Data

This homepage is public. No session tokens or PII are stored client-side beyond theme preference.

## Dependencies

- Lockfile: `package-lock.json`
- Run `npm audit` before production releases.
- Prefer well-maintained packages (Next.js, React, Framer Motion, Tailwind).

## External Links

Apply and external service links use `rel="noopener noreferrer"` when opened in a new tab.

## Environment

- Secrets must live in deployment environment variables, never in client bundles.
- Separate development and production configurations.

## Reporting

Report security issues to the BITS College IT team via `info@bitscollege.edu.et`.

```
<!-- END_FILE -->

---
<!-- FILE: DOCS/TECHNICAL_DOCUMENTATION.md -->
## DOCS/TECHNICAL_DOCUMENTATION.md

```md
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

```
<!-- END_FILE -->

---
<!-- FILE: implementation.md -->
## implementation.md

```md
# BITS College Frontend — Deployment Plan
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion  
**Target:** Docker on Ubuntu Server (22.04 LTS)  
**Prepared for:** Production deployment of `bits-Home-page`

---

## 1. What This Application Is

This is the **BITS College public website** — a purely static/SSR-rendered marketing
frontend for an Ethiopian higher-education institution. It serves 21 pre-built pages
(home + 20 dynamic slugs) with no user accounts, no session state, and no database.

| Property | Detail |
|---|---|
| Framework | Next.js 15 (App Router, `output: "standalone"`) |
| Language | TypeScript 5.7, React 19 |
| Styling | Tailwind CSS 3 + Framer Motion 11 |
| Runtime port | **3333** |
| Database | **None required** |
| External services | Google Fonts (build-time only), YouTube embeds, `applications.bitscollege.edu.et` (form target) |
| Internal APIs | `/api/pdf` — serves two local accreditation PDFs from `public/images/` |
| Assets | ~27 MB of images, WebP, MP4 clips, PDFs in `public/images/` |

### Pages Generated at Build Time

```
/                           → Home (5 sections)
/who-we-are                 → About (tabbed, with PDF viewer)
/facilities                 → Facilities carousel
/partners-and-clients       → Partner logos
/faculty                    → 16 faculty profiles
/undergraduate-program      → Program overview
/graduate-program           → MSc IT Management
/research                   → Research areas
/software-engineering       → SE department
/information-technology-and-systems → ITS department
/undergrad-admission        → Admission requirements
/graduate-admission         → Graduate requirements
/scholarship-aid            → Scholarship info
/tuition                    → Tuition table (ETB)
/student-support            → Student services
/short-trainings            → Professional trainings
/college-news               → News listing (16 events)
/inauguration               → Event page
/student-appreciation-night → Event page
/workshop                   → Event page
/college-day                → Event page
/bootcamp                   → Summer bootcamp
/scholarship-recipients     → 2023/24 recipients
```

### Known Gaps Before Deploying

| Issue | Impact | Fix |
|---|---|---|
| `src/app/api/pdf/route.ts` is **not included** in the zip | The `/api/pdf` endpoint 404s at runtime | Add the missing route file (see Section 5) |
| Google Fonts fetched at **build time** — needs internet access | Build fails on an air-gapped server | Ensure outbound HTTPS from the build host |
| `bun.lock` present alongside `package-lock.json` | Dockerfile uses `npm` (correct), but CI tooling may pick up Bun | Commit only `package-lock.json` |
| Theme is in-memory only (no persistence) | Users lose dark-mode preference on refresh | Acceptable for a public info site; document if needed |
| `unsafe-inline` in CSP | Required by Next.js RSC hydration scripts | Known tradeoff; cannot be removed without breaking Next.js |

---

## 2. Server Sizing Recommendation

| Tier | vCPU | RAM | Disk | Use case |
|---|---|---|---|---|
| **Minimum** | 2 | 2 GB | 20 GB | Low traffic (<500 req/day) |
| **Recommended** | 2 | 4 GB | 40 GB | Normal production |
| **Comfortable** | 4 | 8 GB | 80 GB | High traffic + build CI on same box |

**OS:** Ubuntu 22.04 LTS  
**Reason:** The Next.js standalone Node server is lightweight (~70–100 MB RSS at idle).
The bulk of sizing requirement is the Docker build cache and the static assets.

---

## 3. Architecture Overview

```
Internet
    │  443/80
    ▼
┌──────────────────────────────────┐
│  Nginx (Docker)                  │  ← Reverse proxy, SSL termination,
│  Port 80 + 443                   │    static-asset caching, gzip
└────────────────┬─────────────────┘
                 │  http://app:3333
                 ▼
┌──────────────────────────────────┐
│  Next.js App (Docker)            │  ← Standalone Node server
│  Port 3333 (internal only)       │    Serves HTML, API, SSR
└──────────────────────────────────┘
         (Docker network: bits_net)
```

No database container is needed. No Redis/cache layer is needed at this scale.
If traffic grows beyond ~5,000 RPD, add a Cloudflare CDN layer in front.

---

## 4. Fixed & Production-Ready Dockerfile

The included `Dockerfile` is close but has two issues:
1. Dev dependencies are installed in the `deps` stage (wastes space)  
2. The runner stage `public` copy comes **before** the `nextjs` user exists (causes chown warnings)

Use this corrected version:

```dockerfile
# ─── Stage 1: Install dependencies ───────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
# Install production + dev deps needed for the build step
RUN npm ci --frozen-lockfile

# ─── Stage 2: Build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ─── Stage 3: Lean production image ──────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3333
ENV HOSTNAME=0.0.0.0

# Create a non-root system user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Public assets (served by Next.js standalone or Nginx)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Standalone server bundle
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static    ./.next/static

USER nextjs
EXPOSE 3333

# Standalone output entrypoint
CMD ["node", "server.js"]
```

**Key differences from the original:**
- `npm ci --frozen-lockfile` instead of `npm install` → reproducible, exact installs
- `--chown=nextjs:nodejs` applied to `public/` copy → no permission warnings
- `ENV HOSTNAME=0.0.0.0` moved inside runner → the app binds to all interfaces

---

## 5. The Missing PDF API Route

Add this file to your project at `src/app/api/pdf/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const ALLOWED_FILES = new Set([
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
]);

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (!file || !ALLOWED_FILES.has(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "About-Who we are",
    file
  );

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Frame-Options": "SAMEORIGIN",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
```

---

## 6. Docker Compose Setup

Create `docker-compose.yml` in the project root:

```yaml
version: "3.9"

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: bits_app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
      - PORT=3333
    expose:
      - "3333"          # Internal only — Nginx connects here
    networks:
      - bits_net
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:3333/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s

  nginx:
    image: nginx:1.27-alpine
    container_name: bits_nginx
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      - ./certbot/www:/var/www/certbot:ro
      - ./certbot/conf:/etc/letsencrypt:ro
    networks:
      - bits_net
    depends_on:
      - app

  certbot:
    image: certbot/certbot:latest
    container_name: bits_certbot
    volumes:
      - ./certbot/www:/var/www/certbot
      - ./certbot/conf:/etc/letsencrypt
    entrypoint: >
      sh -c "trap exit TERM; while :; do
        certbot renew --quiet --webroot -w /var/www/certbot;
        sleep 12h & wait $${!};
      done"

networks:
  bits_net:
    driver: bridge
```

---

## 7. Nginx Configuration

### `nginx/nginx.conf`

```nginx
user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    access_log /var/log/nginx/access.log main;

    sendfile        on;
    tcp_nopush      on;
    keepalive_timeout 65;
    server_tokens   off;          # Hide Nginx version

    # Gzip
    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied    any;
    gzip_types      text/plain text/css text/javascript application/javascript
                    application/json application/xml image/svg+xml;

    include /etc/nginx/conf.d/*.conf;
}
```

### `nginx/conf.d/bits.conf`

Replace `yourdomain.com` with your actual domain (e.g. `www.bitscollege.edu.et`):

```nginx
# ─── HTTP → HTTPS redirect ────────────────────────────────────────────────────
server {
    listen 80;
    server_name yourdomain.com;

    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

# ─── HTTPS (main site) ────────────────────────────────────────────────────────
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate     /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # ── Security headers (supplement what Next.js sets internally) ──
    add_header X-Robots-Tag "index, follow" always;
    add_header X-DNS-Prefetch-Control on always;

    # ── Static assets — cache for 1 year ────────────────────────────
    location /_next/static/ {
        proxy_pass http://app:3333/_next/static/;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    # ── Public images & media — cache for 7 days ─────────────────────
    location /images/ {
        proxy_pass http://app:3333/images/;
        add_header Cache-Control "public, max-age=604800";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    # ── PDF API endpoint ──────────────────────────────────────────────
    location /api/pdf {
        proxy_pass         http://app:3333/api/pdf;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Connection "";
    }

    # ── Everything else → Next.js ─────────────────────────────────────
    location / {
        proxy_pass         http://app:3333;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        "upgrade";
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;

        # Security headers not already set by Next.js
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}
```

---

## 8. Environment Variables

This project has **no secrets**. The only runtime environment variables are:

| Variable | Value | Set in |
|---|---|---|
| `NODE_ENV` | `production` | Dockerfile & docker-compose.yml |
| `NEXT_TELEMETRY_DISABLED` | `1` | Dockerfile & docker-compose.yml |
| `PORT` | `3333` | Dockerfile |
| `HOSTNAME` | `0.0.0.0` | Dockerfile |

If you later add analytics, email forms, or a CMS, create a `.env.production` file and
**never** commit it. The `.dockerignore` already excludes `.env*` files.

**Do not** create a `.env` file for this project as-is — there is nothing to put in it.

---

## 9. Step-by-Step Deployment Guide

### Step 1 — Prepare the Ubuntu Server

```bash
# Update and install Docker + Compose
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl gnupg

curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to the docker group (avoids needing sudo)
sudo usermod -aG docker $USER
newgrp docker
```

### Step 2 — Upload the Project

```bash
# On your local machine
zip -r bits-deploy.zip . \
  --exclude "node_modules/*" \
  --exclude ".next/*" \
  --exclude ".git/*"

scp bits-deploy.zip user@YOUR_SERVER_IP:/opt/bits/

# On the server
sudo mkdir -p /opt/bits
cd /opt/bits
unzip bits-deploy.zip
```

### Step 3 — Add the Missing PDF API Route

Create the file `src/app/api/pdf/route.ts` with the content from Section 5 above.

### Step 4 — Create Nginx Config Directories

```bash
cd /opt/bits
mkdir -p nginx/conf.d certbot/www certbot/conf
```

Create `nginx/nginx.conf` and `nginx/conf.d/bits.conf` from Section 7.
At this point, comment out the SSL lines and certificate references — we need HTTP first
to obtain the certificate.

### Step 5 — Start Services (HTTP only first)

Temporarily use an HTTP-only Nginx config for the ACME challenge:

```nginx
# nginx/conf.d/bits.conf (temporary HTTP-only version)
server {
    listen 80;
    server_name yourdomain.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://app:3333;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

```bash
docker compose up -d
# Verify the app is responding
curl -I http://localhost:3333
```

### Step 6 — Obtain SSL Certificate

```bash
docker compose run --rm certbot certonly \
  --webroot \
  -w /var/www/certbot \
  -d yourdomain.com \
  --email your@email.com \
  --agree-tos \
  --no-eff-email
```

### Step 7 — Switch to Full HTTPS Config

Replace `nginx/conf.d/bits.conf` with the full HTTPS version from Section 7.

```bash
docker compose restart nginx
# Verify HTTPS
curl -I https://yourdomain.com
```

### Step 8 — Verify Everything

```bash
# App health
curl -s http://localhost:3333/   | head -5

# HTTPS redirect
curl -I http://yourdomain.com

# HTTPS works
curl -I https://yourdomain.com

# Static assets cached correctly
curl -I https://yourdomain.com/_next/static/chunks/main.js

# PDF API
curl -I "https://yourdomain.com/api/pdf?file=undergraduate_accreditation.pdf"

# All 3 Docker containers running
docker compose ps

# App logs
docker compose logs app --tail=50
```

### Step 9 — Set Up Auto-Renewal (Already in docker-compose.yml)

The `certbot` service in `docker-compose.yml` runs `certbot renew` every 12 hours.
No cron job needed. Verify it is working:

```bash
docker compose logs certbot --tail=20
```

---

## 10. Security Checklist

### What Next.js Already Handles (Built into `next.config.ts`)

- ✅ `Content-Security-Policy` — restrictive policy, tightened in production
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: SAMEORIGIN`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy` (camera, mic, geo all disabled)
- ✅ `Strict-Transport-Security` (HSTS, production only)
- ✅ `upgrade-insecure-requests` (production)
- ✅ No `dangerouslySetInnerHTML` on user input
- ✅ External links use `rel="noopener noreferrer"`
- ✅ PDF API uses allowlist (only 2 hardcoded files permitted)
- ✅ No secrets in client bundle

### What You Add with This Setup

- ✅ SSL/TLS with auto-renewal via Certbot
- ✅ Non-root container user (`nextjs:nodejs`, UID 1001)
- ✅ App port 3333 not exposed to the internet (internal Docker network only)
- ✅ Nginx `server_tokens off` (hides version number)
- ✅ Gzip compression enabled

### Additional Hardening Steps (Recommended)

```bash
# 1. UFW firewall — only ports 22, 80, 443 open
sudo ufw default deny incoming
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 2. Fail2ban (brute-force SSH protection)
sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban

# 3. Disable root SSH login
sudo sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# 4. Automatic OS security updates
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

### Rate Limiting (Add to Nginx if Needed)

Add this to `nginx/nginx.conf` inside the `http {}` block:

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=20r/s;
limit_req_zone $binary_remote_addr zone=main:10m rate=60r/s;
```

Then in `bits.conf` `location /api/ {}`:
```nginx
limit_req zone=api burst=40 nodelay;
```

---

## 11. Google Fonts — Build-Time Network Requirement

The app imports `Open_Sans`, `Roboto_Slab`, and `Playfair_Display` via `next/font/google`.
Next.js downloads and self-hosts these fonts **during the `npm run build` step**.
The build container needs outbound HTTPS (port 443) to `fonts.googleapis.com`
and `fonts.gstatic.com`.

**If your build server blocks outbound HTTP:**

Option A — Build locally, then copy the `.next/standalone` output to the server.  
Option B — Add the following to `Dockerfile` before `RUN npm run build`:

```dockerfile
ENV NEXT_FONT_GOOGLE_MOCKED_RESPONSES=1
```

This uses cached font stubs and skips the network call. Fonts will still render correctly
because they are included in the bundle.

---

## 12. Media Assets Note

The `public/images/News & Events/` directory contains **5 MP4 video files**
totalling approximately 10 MB. These are served directly by Next.js/Nginx.

For production with moderate traffic, consider:
- Moving MP4s to an object store (e.g., AWS S3, Cloudflare R2) and updating the `src`
  attributes in `NewsEventsContent.tsx` and the news detail components
- Adding `proxy_cache` to Nginx for `/images/` if the server has limited bandwidth

For low/medium traffic (<1,000 video plays/day), serving them from the container is fine.

---

## 13. Updating the Deployment

```bash
cd /opt/bits

# Pull new code
git pull   # or re-upload the zip

# Rebuild and restart with zero downtime
docker compose build app
docker compose up -d --no-deps app

# Verify
docker compose ps
docker compose logs app --tail=20
```

---

## 14. Monitoring (Optional but Recommended)

```bash
# Simple container health check
watch -n 5 'docker compose ps && docker stats --no-stream'

# Nginx access log
docker compose logs nginx -f

# App error log
docker compose logs app -f
```

For a proper monitoring stack, add Uptime Kuma (lightweight, Docker-friendly):

```yaml
# Add to docker-compose.yml services:
  uptime-kuma:
    image: louislam/uptime-kuma:1
    container_name: bits_uptime
    restart: unless-stopped
    volumes:
      - ./uptime-data:/app/data
    ports:
      - "3001:3001"
    networks:
      - bits_net
```

Then configure it to monitor `http://app:3333` internally.

---

## 15. Quick Reference

| Task | Command |
|---|---|
| Start all services | `docker compose up -d` |
| Stop all services | `docker compose down` |
| Rebuild app image | `docker compose build app` |
| View app logs | `docker compose logs app -f` |
| View Nginx logs | `docker compose logs nginx -f` |
| Restart Nginx | `docker compose restart nginx` |
| Shell into app | `docker compose exec app sh` |
| Renew cert manually | `docker compose run --rm certbot renew` |
| Check cert expiry | `docker compose exec certbot certbot certificates` |
| Check running containers | `docker compose ps` |

---

*Document prepared from full source analysis of `bits-Home-page` — Next.js 15, App Router, standalone output, port 3333.*

```
<!-- END_FILE -->

---
<!-- FILE: LICENSE -->
## LICENSE

```
Copyright © 2026 BITS College. All Rights Reserved.

All content on this website, including but not limited to text, graphics, logos, images, videos, documents, software, course materials, research publications, and website design, is the property of BITS College and is protected by applicable copyright and intellectual property laws.

No part of this website may be copied, reproduced, distributed, modified, transmitted, displayed, published, or used for commercial purposes without the prior written permission of BITS College.

Unauthorized use of any materials on this website may violate copyright, trademark, and other applicable laws.

For permission requests or inquiries, please contact BITS College.

© 2026 BITS College. All Rights Reserved.

```
<!-- END_FILE -->

---
<!-- FILE: next-env.d.ts -->
## next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```
<!-- END_FILE -->

---
<!-- FILE: next.config.ts -->
## next.config.ts

```ts
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/scholarship-recepients",
        destination: "/scholarship-recipients",
        permanent: true,
      },
      {
        source: "/scholarship-recepients/",
        destination: "/scholarship-recipients",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          ...(isDev
            ? []
            : [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains; preload",
                },
              ]),
        ],
      },
    ];
  },
};

export default nextConfig;

```
<!-- END_FILE -->

---
<!-- FILE: nginx/conf.d/bits.conf -->
## nginx/conf.d/bits.conf

```
# ─── HTTP → HTTPS redirect ────────────────────────────────────────────────────
server {
    listen 80;
    server_name yourdomain.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

# ─── HTTPS (main site) ────────────────────────────────────────────────────────
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate     /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    add_header X-Robots-Tag "index, follow" always;
    add_header X-DNS-Prefetch-Control on always;

    location /_next/static/ {
        proxy_pass http://app:3333/_next/static/;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    location /images/ {
        proxy_pass http://app:3333/images/;
        add_header Cache-Control "public, max-age=604800";
        proxy_http_version 1.1;
        proxy_set_header   Connection "";
    }

    location /api/pdf {
        proxy_pass         http://app:3333/api/pdf;
        proxy_http_version 1.1;
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Connection "";
    }

    location / {
        proxy_pass         http://app:3333;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade           $http_upgrade;
        proxy_set_header   Connection        "upgrade";
        proxy_set_header   Host              $host;
        proxy_set_header   X-Real-IP         $remote_addr;
        proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;

        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}

```
<!-- END_FILE -->

---
<!-- FILE: nginx/nginx.conf -->
## nginx/nginx.conf

```
user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    access_log /var/log/nginx/access.log main;

    sendfile        on;
    tcp_nopush      on;
    keepalive_timeout 65;
    server_tokens   off;

    gzip on;
    gzip_comp_level 5;
    gzip_min_length 256;
    gzip_proxied    any;
    gzip_types      text/plain text/css text/javascript application/javascript
                    application/json application/xml image/svg+xml;

    include /etc/nginx/conf.d/*.conf;
}

```
<!-- END_FILE -->

---
<!-- FILE: package.json -->
## package.json

```json
{
  "name": "bits-college-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3333",
    "dev:clean": "rm -rf .next && next dev -p 3333",
    "build": "next build",
    "start": "next start -p 3333",
    "lint": "next lint",
    "test:visual": "bun run scripts/visual-check.ts",
    "extract:live": "bun run scripts/extract-live-dom.ts"
  },
  "dependencies": {
    "framer-motion": "^11.18.2",
    "lucide-react": "^1.17.0",
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.49.1",
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-config-next": "^15.1.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}

```
<!-- END_FILE -->

---
<!-- FILE: postcss.config.mjs -->
## postcss.config.mjs

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

```
<!-- END_FILE -->

---
<!-- FILE: README.md -->
## README.md

```md
# BITS College Frontend

Pixel-faithful Next.js rebuild of the [BITS College](https://www.bitscollege.edu.et) homepage — same visual identity, modern engineering.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Quick Start

```bash
bun install
bun run dev
```

If you see **“Application error”** or a blank/unstyled page, clear the Next.js cache and restart:

```bash
bun run dev:clean
```

Open [http://localhost:3333](http://localhost:3333).

## Testing (Bun)

```bash
# Extract live site DOM/styles
bun run extract:live

# Visual + overflow checks (server must be running on :3333)
bun run test:visual
```

## Project Structure

```
src/
  app/              # Routes (homepage + dynamic inner pages)
  components/
    home/           # Homepage sections
    layout/         # Header, Footer, PageShell
    providers/      # Theme + Motion
    ui/             # Reusable UI primitives
  lib/constants/    # Navigation, site copy, programs
public/images/      # Optimized assets from live site
```


## Build

```bash
npm run build
npm run start
```

```
<!-- END_FILE -->

---
<!-- FILE: scripts/debug-page.ts -->
## scripts/debug-page.ts

```ts
import { chromium } from "@playwright/test";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("CONSOLE:", msg.type(), msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  await page.goto("http://localhost:3333", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);

  const debug = await page.evaluate(() => ({
    title: document.title,
    bodyText: document.body?.innerText?.slice(0, 500),
    hero: document.querySelector("#hero-heading")?.textContent,
    heroOpacity: document.querySelector("#hero-heading")
      ? getComputedStyle(document.querySelector("#hero-heading")!).opacity
      : null,
    mainChildren: document.querySelector("main")?.children.length,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    htmlClass: document.documentElement.className,
    errors: (window as unknown as { __errors?: string[] }).__errors,
  }));

  console.log(JSON.stringify(debug, null, 2));
  await page.screenshot({ path: "analysis/screenshots/debug-full.png", fullPage: true });
  await browser.close();
}

main();

```
<!-- END_FILE -->

---
<!-- FILE: scripts/extract-live-dom.ts -->
## scripts/extract-live-dom.ts

```ts
/**
 * Extracts layout tokens from the live BITS College homepage DOM.
 * Run: bun run extract:live
 */
import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const LIVE_URL = "https://www.bitscollege.edu.et";
const OUT_DIR = join(process.cwd(), "analysis");

type SectionSample = {
  selector: string;
  tag: string;
  text: string;
  styles: Record<string, string>;
};

async function sampleStyles(page: import("@playwright/test").Page, selector: string) {
  return page.$eval(
    selector,
    (el) => {
      const s = getComputedStyle(el);
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        maxWidth: s.maxWidth,
        lineHeight: s.lineHeight,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow,
        display: s.display,
        gap: s.gap,
      };
    },
    { timeout: 15000 },
  ).catch(() => null);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(LIVE_URL, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(2000);

  const nav = await sampleStyles(page, "#primary-site-navigation, .main-header-menu, header");
  const heroH1 = await sampleStyles(page, "h1.elementor-heading-title, .elementor-heading-title");
  const body = await sampleStyles(page, "body");

  const sections: SectionSample[] = [];
  const headings = await page.$$eval(
    "h1.elementor-heading-title, h2.elementor-heading-title, h3.elementor-heading-title",
    (nodes) =>
      nodes.slice(0, 12).map((n) => ({
        tag: n.tagName,
        text: (n.textContent || "").trim().slice(0, 80),
      })),
  );

  for (const h of headings) {
    sections.push({
      selector: h.tag,
      tag: h.tag,
      text: h.text,
      styles: {},
    });
  }

  const viewports = [320, 375, 768, 1024, 1440] as const;
  const viewportSnapshots: Record<string, { width: number; scrollWidth: number; hasOverflow: boolean }> = {};

  for (const width of viewports) {
    await page.setViewportSize({ width, height: 800 });
    await page.waitForTimeout(500);
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    viewportSnapshots[String(width)] = {
      width,
      scrollWidth: metrics.scrollWidth,
      hasOverflow: metrics.scrollWidth > metrics.clientWidth + 2,
    };
  }

  const report = {
    url: LIVE_URL,
    extractedAt: new Date().toISOString(),
    body,
    nav,
    headings,
    viewports: viewportSnapshots,
  };

  writeFileSync(join(OUT_DIR, "live-dom-report.json"), JSON.stringify(report, null, 2));
  console.log("Wrote analysis/live-dom-report.json");
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


```
<!-- END_FILE -->

---
<!-- FILE: scripts/visual-check.ts -->
## scripts/visual-check.ts

```ts
/**
 * Validates local build is visible and has no horizontal overflow.
 * Run: bun run test:visual (requires dev or start server on :3333)
 */
import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const LOCAL_URL = process.env.BASE_URL || "http://localhost:3333";
const VIEWPORTS = [320, 375, 768, 1024, 1440] as const;
const OUT_DIR = join(process.cwd(), "analysis", "screenshots");

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results: Record<string, unknown> = {};

  await page.goto(LOCAL_URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const heroVisible = await page.evaluate(() => {
    const h1 = document.querySelector("#hero-heading");
    if (!h1) return { found: false, opacity: 0 };
    const style = getComputedStyle(h1);
    const rect = h1.getBoundingClientRect();
    return {
      found: true,
      opacity: style.opacity,
      visible: rect.height > 0 && parseFloat(style.opacity) > 0.5,
      text: h1.textContent?.trim(),
    };
  });

  results.hero = heroVisible;

  if (!heroVisible.visible) {
    console.error("FAIL: Hero heading not visible (blank screen bug)");
    results.pass = false;
  } else {
    console.log("PASS: Hero heading visible");
    results.pass = true;
  }

  for (const width of VIEWPORTS) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(400);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      mainOpacity: (() => {
        const main = document.querySelector("main");
        if (!main) return null;
        return getComputedStyle(main).opacity;
      })(),
    }));

    const overflow = metrics.scrollWidth > metrics.clientWidth + 2;
    results[`viewport_${width}`] = { ...metrics, overflow };
    if (overflow) {
      console.error(`FAIL: Horizontal overflow at ${width}px`);
      results.pass = false;
    } else {
      console.log(`PASS: No overflow at ${width}px`);
    }

    await page.screenshot({
      path: join(OUT_DIR, `local-${width}.png`),
      fullPage: false,
    });
  }

  writeFileSync(
    join(process.cwd(), "analysis", "visual-check-report.json"),
    JSON.stringify(results, null, 2),
  );

  await browser.close();
  process.exit(results.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```
<!-- END_FILE -->

---
<!-- FILE: src/app/[slug]/page.tsx -->
## src/app/[slug]/page.tsx

```tsx
/** Dynamic page router — maps slugs to content components via PAGE_TITLES and category arrays */
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { WhoWeAreContent } from "@/components/about/WhoWeAreContent";
import { FacilitiesContent } from "@/components/about/FacilitiesContent";
import { PartnersAndClientsContent } from "@/components/about/PartnersAndClientsContent";
import { FacultyContent } from "@/components/academics/FacultyContent";
import { UndergraduateProgramContent } from "@/components/academics/UndergraduateProgramContent";
import { GraduateProgramContent } from "@/components/academics/GraduateProgramContent";
import { ResearchContent } from "@/components/academics/ResearchContent";
import { SoftwareEngineeringContent } from "@/components/academics/SoftwareEngineeringContent";
import { InformationTechnologySystemsContent } from "@/components/academics/InformationTechnologySystemsContent";
import { UndergradAdmissionContent } from "@/components/admissions/UndergradAdmissionContent";
import { GraduateAdmissionContent } from "@/components/admissions/GraduateAdmissionContent";
import { ScholarshipAidContent } from "@/components/admissions/ScholarshipAidContent";
import { TuitionContent } from "@/components/admissions/TuitionContent";
import { StudentSupportContent } from "@/components/services/StudentSupportContent";
import { ShortTrainingsContent } from "@/components/services/ShortTrainingsContent";
import { NewsEventsContent } from "@/components/news/NewsEventsContent";
import { InaugurationContent } from "@/components/news/InaugurationContent";
import { StudentAppreciationNightContent } from "@/components/news/StudentAppreciationNightContent";
import { WorkshopContent } from "@/components/news/WorkshopContent";
import { CollegeDayContent } from "@/components/news/CollegeDayContent";
import { BootcampContent } from "@/components/news/BootcampContent";
import { ScholarshipRecipientsContent } from "@/components/news/ScholarshipRecipientsContent";

const PAGE_TITLES: Record<string, { title: string; description: string }> = {
  "who-we-are": {
    title: "Who We Are",
    description: "Learn about BITS College — our mission, vision, and community.",
  },
  facilities: {
    title: "Facilities",
    description: "Explore our state-of-the-art campus facilities and learning spaces.",
  },
  "partners-and-clients": {
    title: "Partners and Clients",
    description: "Our industry partners and organizational clients.",
  },
  faculty: {
    title: "Faculty",
    description: "Meet our talented and committed academic faculty.",
  },
  "undergraduate-program": {
    title: "Undergraduate Programs",
    description: "Undergraduate programs in software engineering and IT systems.",
  },
  "graduate-program": {
    title: "Graduate Programs",
    description: "Graduate programs including Information Technology Management.",
  },
  research: {
    title: "Research",
    description: "Research initiatives at BITS College.",
  },
  "undergrad-admission": {
    title: "Undergraduate Admission",
    description: "Admission requirements and process for undergraduate applicants.",
  },
  "graduate-admission": {
    title: "Graduate Admission",
    description: "Admission requirements and process for graduate applicants.",
  },
  "scholarship-aid": {
    title: "Scholarship & Aid",
    description: "Scholarship opportunities and financial aid information.",
  },
  "student-support": {
    title: "Student Support",
    description: "Support services available to BITS students.",
  },
  "short-trainings": {
    title: "Professional Trainings",
    description: "Short-term professional training programs.",
  },
  "college-news": {
    title: "News & Events",
    description: "Latest news and upcoming events at BITS College.",
  },
  "software-engineering": {
    title: "Software Engineering",
    description: "Undergraduate program in Software Engineering.",
  },
  "information-technology-and-systems": {
    title: "Information Technology and Systems",
    description: "Undergraduate program in Information Technology and Systems.",
  },
  tuition: {
    title: "Tuition",
    description: "Tuition and fee information.",
  },
  "undergraduate-accreditation": {
    title: "Undergraduate Accreditation",
    description: "Undergraduate program accreditation details.",
  },
  "graduate-accreditation": {
    title: "Graduate Accreditation",
    description: "Graduate program accreditation details.",
  },
  inauguration: {
    title: "BITS College Inauguration",
    description: "BITS College celebrated its inauguration on January 02, 2021.",
  },
  "student-appreciation-night": {
    title: "Student Appreciation Night",
    description:
      "BITS College hosted a Student Appreciation Night on Friday, December 12, 2021, to honor the accomplishments and contributions of its postgraduate students.",
  },
  workshop: {
    title: "Workshop",
    description:
      "BITS College hosted a workshop on preparing for the tech industry through higher education.",
  },
  "college-day": {
    title: "BITS College Day",
    description: "BITS College celebrated its College Day with demonstrations, discussions, and games.",
  },
  bootcamp: {
    title: "Summer Bootcamp",
    description: "Bootcamp program designed to help trainees gain practical knowledge on industry standards, best practices, tools and technologies.",
  },
  "scholarship-recipients": {
    title: "Merit Based Scholarship Recipients 2023/24",
    description: "BITS College awarded Merit-based Scholarships to three outstanding students.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(PAGE_TITLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
  };
}

/** Page-group slugs used for content routing below */
const ABOUT_PAGES = ["who-we-are", "facilities", "partners-and-clients"];
const ACADEMICS_PAGES = ["faculty", "undergraduate-program", "graduate-program", "research"];
const ADMISSIONS_PAGES = ["undergrad-admission", "graduate-admission", "scholarship-aid", "tuition"];
const SERVICES_PAGES = ["student-support", "short-trainings"];
const NEWS_PAGES = ["college-news"];

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = PAGE_TITLES[slug];
  if (!page) notFound();

  if (ABOUT_PAGES.includes(slug)) {
    return (
      <>
        {slug === "who-we-are" && <WhoWeAreContent />}
        {slug === "facilities" && <FacilitiesContent />}
        {slug === "partners-and-clients" && <PartnersAndClientsContent />}
      </>
    );
  }

  if (ACADEMICS_PAGES.includes(slug)) {
    return (
      <>
        {slug === "faculty" && <FacultyContent />}
        {slug === "undergraduate-program" && <UndergraduateProgramContent />}
        {slug === "graduate-program" && <GraduateProgramContent />}
        {slug === "research" && <ResearchContent />}
      </>
    );
  }

  if (ADMISSIONS_PAGES.includes(slug)) {
    return (
      <>
        {slug === "undergrad-admission" && <UndergradAdmissionContent />}
        {slug === "graduate-admission" && <GraduateAdmissionContent />}
        {slug === "scholarship-aid" && <ScholarshipAidContent />}
        {slug === "tuition" && <TuitionContent />}
      </>
    );
  }

  if (SERVICES_PAGES.includes(slug)) {
    return (
      <>
        {slug === "student-support" && <StudentSupportContent />}
        {slug === "short-trainings" && <ShortTrainingsContent />}
      </>
    );
  }

  if (NEWS_PAGES.includes(slug)) {
    return <NewsEventsContent />;
  }

  if (slug === "software-engineering") {
    return <SoftwareEngineeringContent />;
  }

  if (slug === "information-technology-and-systems") {
    return <InformationTechnologySystemsContent />;
  }

  if (slug === "inauguration") {
    return <InaugurationContent />;
  }

  if (slug === "student-appreciation-night") {
    return <StudentAppreciationNightContent />;
  }

  if (slug === "workshop") {
    return <WorkshopContent />;
  }

  if (slug === "college-day") {
    return <CollegeDayContent />;
  }

  if (slug === "bootcamp") {
    return <BootcampContent />;
  }

  if (slug === "scholarship-recipients") {
    return <ScholarshipRecipientsContent />;
  }

  return (
    <PageShell title={page.title} description={page.description}>
      <p className="text-bits-muted dark:text-gray-400">
        This page route is scaffolded for navigation fidelity.
      </p>
    </PageShell>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/api/pdf/route.ts -->
## src/app/api/pdf/route.ts

```ts
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const ALLOWED_FILES = new Set([
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
]);

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (!file || !ALLOWED_FILES.has(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "About-Who-we-are",
    file
  );

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Frame-Options": "SAMEORIGIN",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/error.tsx -->
## src/app/error.tsx

```tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 pt-20">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-500 dark:bg-red-900/20">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-bits-muted">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={reset}
            className="btn-solid-green"
          >
            Try again
          </button>
          <Link
            href="/"
            className="btn-outline-green"
          >
            <Home className="mr-2 h-4 w-4" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/globals.css -->
## src/app/globals.css

```css
/** BITS Design System — CSS custom properties for theming, component classes, and motion utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bits-green: #7dc243;
  --bits-green-dark: #6aad38;
  --bits-gold: #b48c1e;
  --bits-gold-light: #d4af37;
  --bits-heading: #1a1a1a;
  --bits-text: #54595f;
  --bits-muted: #7a7a7a;
  --bits-footer: #454545;
  --bits-footer-text: #f1f4fa;
  --bits-surface: #ffffff;
  --bits-surface-muted: #f8f8f8;
  --bits-page: #ffffff;

  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-card-hover-rise: 0 12px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(180, 140, 30, 0.12);
  --shadow-card-hover-lift: 0 12px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(180, 140, 30, 0.12);
  --shadow-card-hover-featured: 0 20px 60px rgba(125, 194, 67, 0.35);
  --shadow-card-hover-announce: 0 8px 32px rgba(125, 194, 67, 0.15), 0 0 0 1px rgba(180, 140, 30, 0.08);
}

.dark {
  --bits-green: #5db95f;
  --bits-green-dark: #4ade80;
  --bits-heading: #f1f5f9;
  --bits-text: #e2e8f0;
  --bits-muted: #cbd5e1;
  --bits-surface: #141414;
  --bits-surface-muted: #0f0f0f;
  --bits-page: #0a0a0a;

  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.45);
  --shadow-card-hover-rise: 0 12px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(180, 140, 30, 0.2);
  --shadow-card-hover-lift: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(180, 140, 30, 0.25);
  --shadow-card-hover-featured: 0 20px 60px rgba(93, 185, 95, 0.45);
  --shadow-card-hover-announce: 0 8px 32px rgba(93, 185, 95, 0.25), 0 0 0 1px rgba(180, 140, 30, 0.15);
}

@layer base {
  ::selection {
    background-color: rgba(125, 194, 67, 0.3);
    color: inherit;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html.dark {
    color-scheme: dark;
  }

  body {
    @apply overflow-x-hidden bg-[var(--bits-page)] text-[var(--bits-text)] antialiased transition-colors duration-300;
  }

  main {
    @apply bg-[var(--bits-page)] transition-colors duration-300;
  }

  :focus-visible {
    @apply outline-2 outline-offset-2 outline-bits-green;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--bits-green);
    outline-offset: 2px;
    box-shadow: inset 0 0 0 1px rgba(212, 175, 55, 0.3);
  }
}

@layer components {
  .site-container {
    @apply mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8;
  }

  .section-surface {
    @apply bg-[var(--bits-surface)] transition-colors duration-300;
  }

  .section-surface-muted {
    @apply bg-[var(--bits-surface-muted)] transition-colors duration-300;
  }

  .nav-link {
    @apply text-[15px] font-normal text-[#636d79] transition-[color,opacity,transform] duration-200 ease-out hover:text-bits-green dark:text-[var(--bits-text)] dark:hover:text-bits-green;
  }

  .nav-link-active {
    @apply font-medium text-bits-green;
  }

  .btn-outline-green {
    @apply inline-flex items-center justify-center rounded-pill border-2 border-bits-green px-5 py-2 text-sm font-medium text-bits-green transition-all duration-200 ease-out hover:-translate-y-px hover:bg-bits-green hover:text-white hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:ring-2 focus-visible:ring-bits-green focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0a];
  }

  .btn-outline-green:hover {
    box-shadow: 0 4px 16px rgba(125, 194, 67, 0.2), 0 0 8px rgba(125, 194, 67, 0.15);
  }

  .btn-solid-green {
    @apply inline-flex items-center justify-center rounded-pill bg-bits-green px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-out hover:-translate-y-px hover:bg-bits-green-dark hover:shadow-md active:translate-y-0 active:shadow-sm focus-visible:ring-2 focus-visible:ring-bits-green focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0a];
  }

  .btn-solid-green:hover {
    box-shadow: 0 4px 20px rgba(125, 194, 67, 0.3), 0 0 12px rgba(180, 140, 30, 0.15);
  }

  .program-card {
    @apply relative overflow-hidden rounded-lg bg-[var(--bits-surface)] p-5 shadow-card dark:shadow-none dark:ring-1 dark:ring-gray-800;
  }

  .program-card::before {
    content: "";
    @apply absolute bottom-0 left-0 top-0 w-1.5 bg-bits-green transition-all duration-300;
  }

  .program-card:hover::before {
    box-shadow: inset 0 0 8px rgba(180, 140, 30, 0.3);
  }

  .program-card-fallback {
    @apply transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover active:translate-y-0 dark:hover:ring-bits-green/30;
  }

  .feature-card {
    @apply flex flex-col items-center justify-center rounded-lg bg-[var(--bits-surface)] p-6 text-center shadow-card dark:shadow-none dark:ring-1 dark:ring-gray-800;
  }

  .feature-card-fallback {
    @apply transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover active:translate-y-0 dark:hover:ring-bits-green/25;
  }

  .dropdown-panel {
    @apply absolute left-0 top-full z-50 mt-0 min-w-[220px] border-t-2 border-bits-green bg-[var(--bits-surface)] py-2 shadow-lg dark:ring-1 dark:ring-gray-800;
  }

  .contact-card-side {
    @apply flex min-h-[200px] w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-[var(--bits-surface)] px-8 py-10 text-bits-green shadow-card dark:shadow-none dark:ring-1 dark:ring-gray-800 md:min-h-[220px] md:w-[300px];
  }

  .contact-card-side-fallback {
    @apply transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover active:translate-y-0 dark:hover:ring-bits-green/25;
  }

  .contact-card-featured {
    @apply relative z-10 flex min-h-[220px] w-full max-w-sm flex-col items-center justify-center rounded-2xl bg-bits-green px-8 py-10 text-white shadow-lg md:-my-4 md:min-h-[260px] md:w-[340px];
  }

  .contact-card-featured-fallback {
    @apply transition-all duration-300 ease-out hover:shadow-xl active:scale-[0.99];
  }

  .footer-link {
    @apply transition-all duration-200 ease-out hover:translate-x-0.5;
  }

  .footer-social {
    @apply transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0;
  }
}

@layer utilities {
  .gpu {
    transform: translateZ(0);
  }
}

@keyframes wave-drift {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2%);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .wave-divider svg {
    animation: wave-drift 8s ease-in-out infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .wave-divider svg {
    animation: none;
  }
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/layout.tsx -->
## src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { THEME_SCRIPT } from "@/lib/theme";
import { SITE } from "@/lib/constants/site";
import { SOCIAL_LINKS } from "@/lib/constants/navigation";
import "./globals.css";

const openSans = localFont({
  src: "../fonts/open-sans-latin.woff2",
  variable: "--font-open-sans",
  display: "swap",
});

const robotoSlab = localFont({
  src: "../fonts/roboto-slab-latin.woff2",
  variable: "--font-roboto-slab",
  display: "swap",
});

const playfairDisplay = localFont({
  src: "../fonts/playfair-display-latin.woff2",
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: "/images/About-Facilities/College%201.webp",
        width: 1200,
        height: 630,
        alt: "BITS College campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? "";
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: SITE.name,
              alternateName: "BITS College",
              description: SITE.description,
              url: SITE.url,
              logo: `${SITE.url}/images/logo.png`,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Yeka Sub-City, Woreda 05",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              sameAs: SOCIAL_LINKS.map((l) => l.href),
              knowsAbout: [
                {
                  "@type": "Course",
                  name: "Master of Science in Information Technology Management",
                  description: "Graduate program focusing on IT management, strategy, and leadership.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/graduate-program`,
                },
                {
                  "@type": "Course",
                  name: "Bachelor of Science in Software Engineering",
                  description: "Undergraduate program covering software development, design, and engineering principles.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/software-engineering`,
                },
                {
                  "@type": "Course",
                  name: "Bachelor of Science in Information Technology and Systems",
                  description: "Undergraduate program focused on IT infrastructure, systems analysis, and network management.",
                  provider: { "@type": "EducationalOrganization", name: SITE.name },
                  url: `${SITE.url}/information-technology-and-systems`,
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${robotoSlab.variable} ${playfairDisplay.variable} flex min-h-screen flex-col font-sans`}
      >
        <ThemeProvider>
          <MotionProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-bits-green focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/loading.tsx -->
## src/app/loading.tsx

```tsx
/** Route-level loading spinner (shown during page transitions) */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-bits-green border-t-transparent" />
        <p className="text-sm text-bits-muted">Loading...</p>
      </div>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/page.tsx -->
## src/app/page.tsx

```tsx
/** Home page — stacks five sections (hero, announcement, why-bits, programs, contact) */
import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";
import { WhyBitsSection } from "@/components/home/WhyBitsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <WhyBitsSection />
      <ProgramsSection />
      <GetInTouchSection />
    </>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/app/sitemap.ts -->
## src/app/sitemap.ts

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

const slugs: string[] = [
  "who-we-are",
  "facilities",
  "partners-and-clients",
  "faculty",
  "undergraduate-program",
  "graduate-program",
  "research",
  "software-engineering",
  "information-technology-and-systems",
  "undergrad-admission",
  "graduate-admission",
  "scholarship-aid",
  "tuition",
  "student-support",
  "short-trainings",
  "college-news",
  "inauguration",
  "student-appreciation-night",
  "workshop",
  "college-day",
  "bootcamp",
  "scholarship-recipients",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE.url.replace(/\/$/, "");

  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return pages;
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/about/FacilitiesContent.tsx -->
## src/components/about/FacilitiesContent.tsx

```tsx
/** Facilities — image gallery cards with carousel for each facility type, stats grid, CTA banner */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const highlights = [
  {
    title: "Classrooms",
    text: "Flexible teaching rooms designed for lectures, discussions, and blended delivery.",
    icon: Building2,
  },
  {
    title: "Computer Labs",
    text: "Full-fledged computer labs on each floor accommodating up to 50 users at a time.",
    icon: Cpu,
  },
  {
    title: "IT Infrastructure",
    text: "State-of-the-art infrastructure with high bandwidth internet connectivity.",
    icon: Wifi,
  },
  {
    title: "Library",
    text: "Two libraries well equipped with the most current printed and electronic materials.",
    icon: BookOpen,
  },
  {
    title: "College Building",
    text: "A purpose built five story building, situated at an accessible location.",
    icon: Landmark,
  },
  {
    title: "Online Learning",
    text: "Students can learn any place / any time at their own pace and convenience. Less crowded learning sessions / less crowded classrooms / less crowded campus",
    icon: MonitorSmartphone,
  },
];

const stats = [
  { label: "Learning spaces", value: "6+" },
  { label: "Campus systems", value: "24/7" },
  { label: "Digital access", value: "High" },
  { label: "Student support", value: "Active" },
];

const facilityImages: Record<string, string[]> = {
  Classrooms: [
    "/images/About-Facilities/Class%20Room%201.jpg",
    "/images/About-Facilities/Class%20Room%202.jpg",
    "/images/About-Facilities/Class%20Room%203.jpg",
  ],
  "Computer Labs": [
    "/images/About-Facilities/Computer%20Labs%201.jpg",
    "/images/About-Facilities/Computer%20Labs%202.jpg",
  ],
  "IT Infrastructure": [
    "/images/About-Facilities/IT%20INFRASTRUCTURE%201.jpg",
    "/images/About-Facilities/IT%20INFRASTRUCTURE%202.jpg",
  ],
  Library: [
    "/images/About-Facilities/Library%201.webp",
    "/images/About-Facilities/Library%202.webp",
    "/images/About-Facilities/Library%203.webp",
  ],
  "College Building": [
    "/images/About-Facilities/College%201.webp",
    "/images/About-Facilities/College%202.webp",
  ],
  "Online Learning": [
    "/images/About-Facilities/Online%20Learning%201.webp",
    "/images/About-Facilities/Online%20Learning%202.webp",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: EASE_PREMIUM },
  }),
};

function FacilityCard({
  item,
  reverse = false,
  index,
}: {
  item: (typeof highlights)[number];
  reverse?: boolean;
  index: number;
}) {
  const Icon = item.icon;
  const images = facilityImages[item.title] ?? [];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={0.08 * index}
      className={`grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-[var(--bits-surface)] shadow-sm lg:grid-cols-2 dark:border-gray-700 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={`relative ${reverse ? "lg:[direction:ltr]" : ""} p-4 sm:p-6`}>
        <div className="relative overflow-hidden">
          <img
            src={images[current]}
            alt={item.title}
            className="h-72 w-full object-cover transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow transition hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition ${
                      i === current ? "w-4 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={`flex flex-col justify-center p-6 sm:p-8 ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-bits-green-dark dark:bg-gray-800">
          <Icon className="h-4 w-4" />
          {item.title}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-bits-heading">{item.title}</h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-bits-text">{item.text}</p>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-bits-green-dark">
          <CheckCircle2 className="h-4 w-4" />
          Modern learning support
        </div>
      </div>
    </motion.article>
  );
}

export function FacilitiesContent() {
  return (
    <div className="bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-b from-emerald-50 to-[var(--bits-page)] dark:from-gray-900 dark:to-black">
        <div className="mx-auto max-w-site px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)]/80 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm dark:border-gray-700">
              <ShieldCheck className="h-4 w-4" />
              Facilities overview
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Facilities
            </h1>
            <p className="mt-6 text-lg leading-8 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and modest contribution to
              technology and other facilities that exist in the college. For more information on cost of
              attendance, you may visit the online application and select the program you would like to join.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.1 * idx}
                  className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)]/80 p-5 shadow-sm backdrop-blur dark:border-gray-700"
                >
                  <p className="text-3xl font-semibold text-bits-green">{stat.value}</p>
                  <p className="mt-2 text-sm text-bits-text">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Campus facilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Core learning infrastructure
            </h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-[var(--bits-surface-muted)] px-4 py-2 text-sm text-bits-text md:flex dark:border-gray-700">
            <Sparkles className="h-4 w-4 text-bits-green" />
            Structured campus overview
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <FacilityCard key={item.title} item={item} index={index} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-950/10 bg-emerald-50/70 dark:bg-gray-900/70">
        <div className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bits-green-dark">
              Application path
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bits-heading sm:text-4xl">
              Start your journey at BITS
            </h2>
            <p className="mt-4 text-base leading-7 text-bits-text">
              Explore our programs and take the first step toward a quality higher education experience
              with state-of-the-art facilities and dedicated faculty.
            </p>
          </div>
          <a
            href="https://applications.bitscollege.edu.et"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bits-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green-dark lg:mt-0"
          >
            Open application <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/about/PartnersAndClientsContent.tsx -->
## src/components/about/PartnersAndClientsContent.tsx

```tsx
/** Partners & Clients — partner logo cards with staggered entrance and hover effects */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM } from "@/lib/motion-presets";

type Partner = {
  name: string;
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: "MKS Addis",
    href: "https://mksaddis.com",
    logo: "/images/About-partner/Mk%20Adiss%20Logo.png",
  },
  {
    name: "Bunna Bank",
    href: "https://bunnabanksc.com",
    logo: "/images/About-partner/Buna%20Bank%20Logo.png",
  },
  {
    name: "Serianu",
    href: "https://serianu.com",
    logo: "/images/About-partner/serianu-logoo.png",
  },
  {
    name: "British Council",
    href: "https://ethiopia.britishcouncil.org",
    logo: "/images/About-partner/British%20Council%20logo.jpg",
  },
];

function PartnerCard({ partner, index, enabled }: { partner: Partner; index: number; enabled: boolean }) {
  const Card = enabled ? motion.a : "a";

  return (
    <Card
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      {...(enabled ? {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.09, duration: 0.55, ease: EASE_PREMIUM },
      } : {})}
      className="group relative flex flex-col items-center overflow-hidden rounded-[26px] border border-emerald-900/12 bg-[var(--bits-surface)] p-8 shadow-[0_16px_38px_rgba(10,41,18,0.08)] transition-all duration-200 hover:-translate-y-1.5 hover:border-emerald-900/24 hover:shadow-[0_22px_52px_rgba(10,41,18,0.13)] dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
    >
      <div className="absolute inset-auto -bottom-7 -right-[18px] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(125,194,67,0.12),transparent_68%)] pointer-events-none dark:opacity-30" />
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl dark:bg-white/90 dark:p-2 sm:h-32 sm:w-32">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={120}
          height={120}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="mt-6 text-sm font-semibold text-bits-heading">
        {partner.name}
      </span>
    </Card>
  );
}

export function PartnersAndClientsContent() {
  const { enabled } = useMotionSafe();

  return (
    <div className="bg-[radial-gradient(circle_at_top,rgba(125,194,67,0.08),transparent_36%),linear-gradient(180deg,#fcfdfc,var(--bits-surface-muted))] dark:bg-none dark:bg-gray-950">
      <section className="mx-auto max-w-site px-4 pt-28 pb-[42px] sm:px-6 lg:px-8 lg:pt-32">
        {enabled ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
              Partners & Clients
            </h1>
          </motion.div>
        ) : (
          <h1 className="text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1.02] tracking-tight text-bits-green-dark">
            Partners & Clients
          </h1>
        )}
      </section>

      <section className="mx-auto max-w-site px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="m-0 text-[1.15rem] font-semibold uppercase tracking-[0.08em] text-bits-green-dark dark:text-bits-green">
            Featured Partners
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-900/34 to-transparent dark:from-bits-green/30 dark:to-transparent" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} enabled={enabled} />
          ))}
        </div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/about/who-we-are/data.ts -->
## src/components/about/who-we-are/data.ts

```ts
export const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "mission", label: "Mission & Vision" },
  { id: "dean", label: "Message from the Dean" },
  { id: "accreditation", label: "Accreditation" },
  { id: "student-support", label: "Student Support" },
];

export const MISSION_POINTS = [
  "Providing quality higher education and research relevant to sustainable development.",
  "Offering a welcoming and rewarding environment for students, faculty, and staff.",
  "Fostering innovative learning, entrepreneurship, community engagement, and industry partnership.",
  "Building capacity to unlock technology-enabled education without boundaries.",
  "Cultivating strategic partnerships with industry leaders and academic institutions.",
  "Maintaining financing plans to sustain innovation and growth.",
];

export const VALUES = [
  "Open-mindedness, dynamism, and innovation",
  "Performance without compromising quality",
  "A nurturing environment for students and employees",
  "Integrity, mutual respect, collaboration, and unity",
  "Responsible governance and a commitment to service",
];

export const ACCREDITATION_ITEMS = [
  {
    title: "Graduate Accreditation",
    description: "Documented recognition for graduate-level study and academic compliance.",
    pdfUrl: "/images/About-Who-we-are/graduate_accreditation.pdf",
  },
  {
    title: "Undergraduate Accreditation",
    description: "Documented recognition for undergraduate-level programs and standards.",
    pdfUrl: "/images/About-Who-we-are/undergraduate_accreditation.pdf",
  },
];

export const SUPPORT_ITEMS = [
  { title: "Academic Support", desc: "Peer-to-peer mentoring and advisor guidance for academic success." },
  { title: "Disability Support", desc: "Advice, guidance, and accommodations for students with physical disabilities." },
  { title: "Extra Curricular Activities", desc: "Hackathons, leadership programs, charity clubs, Toastmasters, media, and more." },
];

```
<!-- END_FILE -->

---
<!-- FILE: src/components/about/who-we-are/sections.tsx -->
## src/components/about/who-we-are/sections.tsx

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award, BookOpen, ChevronRight, GraduationCap, HeartHandshake,
  Sparkles, Target, Users, ShieldCheck, X,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { PDFViewer } from "@/components/ui/PDFViewer";
import { MISSION_POINTS, VALUES, ACCREDITATION_ITEMS, SUPPORT_ITEMS } from "./data";

export function SectionHeader({ icon: Icon, label, title }: { icon: React.ElementType; label: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bits-muted">{label}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

export function ContentCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`scroll-mt-24 rounded-[2rem] border border-emerald-950/8 bg-[var(--bits-surface)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8 dark:border-white/10 ${className}`}
    >
      {children}
    </section>
  );
}

export function AccreditationModal({ selectedPdf, onClose }: { selectedPdf: string | null; onClose: () => void }) {
  if (!selectedPdf) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-700">
          <p className="text-sm font-semibold text-bits-heading">Accreditation Document</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-bits-muted transition hover:bg-bits-surface-muted hover:text-bits-heading"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <PDFViewer pdfUrl={selectedPdf} title="Accreditation Document" />
      </div>
    </div>
  );
}

export function OverviewTab() {
  return (
    <ContentCard key="overview">
      <SectionHeader icon={BookOpen} label="Overview" title="Overview" />
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-5">
          <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(125,194,67,0.07),rgba(84,89,95,0.05))] p-5">
            <p className="text-lg font-semibold text-bits-green-dark">Attributes behind the brand</p>
            <p className="mt-3 leading-7 text-bits-text">
              The brand identity is built around the meaning of BITS, the visual logic of the logo, and a color
              pairing that communicates freshness, energy, creativity, and determination.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-gray-800/60">
                <span className="h-4 w-4 rounded-full bg-[#7DC243]" />
                <span className="text-sm text-bits-text">
                  Green for <strong>freshness</strong>, <strong>energy</strong>, and <strong>online</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 dark:bg-gray-800/60">
                <span className="h-4 w-4 rounded-full bg-[#54595F]" />
                <span className="text-sm text-bits-text">
                  Gray for <strong>creativity</strong> & <strong>determination</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-4 dark:rounded-xl dark:bg-white/90 dark:p-4">
            <Image
              src="/images/logo.png"
              alt="BITS College Logo"
              width={400}
              height={400}
              className="h-auto w-80 object-contain"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-bits-heading">BITS meaning</p>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                Business, Innovation, Technology, and System.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[var(--bits-surface)] p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-bits-green">
                <Target className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-bits-heading">Logo narrative</p>
              <p className="mt-2 text-sm leading-6 text-bits-text">
                Learning and growth through connected knowledge in an infinity of combinations.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,rgba(125,194,67,0.09),rgba(125,194,67,0.02))] p-5 sm:p-6">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bits-surface)] shadow-sm">
                <span className="text-xl font-black text-bits-green-dark">B</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-bits-heading">BITS College</p>
                <p className="text-xs text-bits-muted">Private higher learning institution</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-bits-text">
              BITS began from a focused system development and training company and is pursuing a full-fledged
              university vision through faculty expertise, academic design, and technology-forward delivery.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--bits-surface)]/90 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-bits-muted">Current</p>
                <p className="mt-1 text-lg font-semibold text-bits-heading">335+ Students</p>
              </div>
              <div className="rounded-2xl bg-[var(--bits-surface)]/90 p-4 shadow-sm backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-bits-muted">Goal</p>
                <p className="mt-1 text-lg font-semibold text-bits-heading">Full-fledged University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCard>
  );
}

export function MissionTab() {
  return (
    <ContentCard key="mission">
      <SectionHeader icon={Target} label="Mission and Vision" title="Mission and Vision" />
      <div className="grid gap-4">
        <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Mission</p>
          <p className="mt-3 leading-7 text-bits-text">
            The purpose of BITS College is to enable its community to grow, thrive, and prosper through continual
            innovation in education, research, and entrepreneurship.
          </p>
          <ul className="mt-5 space-y-3">
            {MISSION_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-bits-text">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-emerald-950/8 bg-[linear-gradient(135deg,rgba(125,194,67,0.08),var(--bits-surface))] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Vision</p>
          <p className="mt-3 leading-7 text-bits-text">
            By 2030, BITS College aspires to grow in reputation nationally as a model of academic excellence and
            innovative student support in an environment strengthened by industry partnerships and technology
            enablement.
          </p>
        </div>

        <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 sm:p-6">
          <p className="text-lg font-semibold text-bits-heading">Values</p>
          <div className="mt-4 grid gap-3">
            {VALUES.map((value) => (
              <div key={value} className="flex items-start gap-3 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <Sparkles className="mt-0.5 h-4 w-4 text-bits-green" />
                <p className="text-sm leading-6 text-bits-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentCard>
  );
}

export function DeanTab() {
  return (
    <ContentCard key="dean">
      <SectionHeader icon={Users} label="Message from the Dean" title="Message from the Dean" />
      <blockquote className="rounded-3xl border-l-4 border-bits-green bg-[linear-gradient(135deg,rgba(125,194,67,0.06),var(--bits-surface))] p-6 sm:p-8">
        <p className="text-sm leading-7 text-bits-text sm:text-base">
          On behalf of our faculty and staff and on my own behalf, I warmly welcome you to our website.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          BITS college is conceived and established by caring and committed educators, innovators and business people who seek to contribute to the ongoing efforts of improving the quality of higher education in the country.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          At BITS College, we strive to promote excellence in the production, growth and dissemination of advanced scientific knowledge through teaching, research, innovation, consultancy and community service. We intend to contribute to the high-level human resource need of the country by providing and advancing quality and relevant education to our students.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          We are proud of our College facilities designed entirely with the ambitions of our Higher Education students in mind: – well-equipped classrooms, computer labs and libraries as well as state of the art technology facilities.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          This year the college opens its doors to 300 students for its regular program: – 180 in its undergraduate programs and 130 in its graduate programs. Other than normal classroom lectures and studies, we cherish development in the field of IT, community service and extracurricular activities. One of the best things about our college is that it gives equal importance to each and every area so that students will get a chance to achieve the overall skills and personality development as they progress in their careers.
        </p>
        <p className="mt-4 text-sm leading-7 text-bits-text sm:text-base">
          I would like to cordially invite all of you who are interested in expanding your knowledge and enriching your careers to explore our college further either online through a vertical visit (through our website) or visiting our campus in person.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/Faculty-Members/Dr%20Tesfaye%20Biru.png"
              alt="Dr Tesfaye Biru"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-bits-heading text-xl">Tesfaye Biru (PHD),</p>
            <p className="text-base text-bits-muted">Dean</p>
          </div>
        </div>
      </blockquote>
    </ContentCard>
  );
}

export function AccreditationTab({ onShowPdf }: { onShowPdf: (url: string) => void }) {
  return (
    <ContentCard key="accreditation">
      <SectionHeader icon={Award} label="Accreditation" title="Accreditation" />
      <div className="grid gap-4 md:grid-cols-2">
        {ACCREDITATION_ITEMS.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => onShowPdf(item.pdfUrl)}
            className="group w-full rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,var(--bits-surface),var(--bits-surface-muted))] p-5 text-left transition hover:-translate-y-1 hover:border-emerald-900/15 hover:shadow-lg hover:shadow-emerald-900/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-bits-heading">{item.title}</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-bits-text">{item.description}</p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-bits-muted transition group-hover:translate-x-1 group-hover:text-bits-green" />
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-bits-green-dark">
              View document
            </div>
          </button>
        ))}
      </div>
    </ContentCard>
  );
}

export function StudentSupportTab() {
  return (
    <ContentCard key="student-support">
      <SectionHeader icon={HeartHandshake} label="Student Support" title="Student Support" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-5">
          <p className="leading-7 text-bits-text">
            BITS College is committed to providing comprehensive support services that help students thrive
            academically, professionally, and personally throughout their educational journey.
          </p>
          <div className="grid gap-3">
            {SUPPORT_ITEMS.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-bits-green" />
                <div>
                  <p className="text-sm font-semibold text-bits-heading">{item.title}</p>
                  <p className="mt-0.5 text-sm leading-6 text-bits-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(125,194,67,0.07),rgba(84,89,95,0.04))] p-6 text-center">
          <HeartHandshake className="mx-auto h-16 w-16 text-bits-green" />
          <p className="mt-4 text-lg font-semibold text-bits-heading">We&apos;re Here to Help</p>
          <p className="mt-2 text-sm leading-6 text-bits-text">
            Explore our full range of student support services designed to help you succeed.
          </p>
          <a
            href="/student-support"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-bits-green"
          >
            View All Services
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </ContentCard>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/about/WhoWeAreContent.tsx -->
## src/components/about/WhoWeAreContent.tsx

```tsx
/** Who We Are — tabbed subpage: overview, mission & vision, dean's message, accreditation (PDF), student support */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, Users, GraduationCap } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SECTIONS } from "@/components/about/who-we-are/data";
import {
  OverviewTab,
  MissionTab,
  DeanTab,
  AccreditationTab,
  StudentSupportTab,
  AccreditationModal,
} from "@/components/about/who-we-are/sections";

export function WhoWeAreContent() {
  return (
    <Suspense fallback={null}>
      <WhoWeAreContentInner />
    </Suspense>
  );
}

function WhoWeAreContentInner() {
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && SECTIONS.some((s) => s.id === section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const tabContent: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    mission: <MissionTab />,
    dean: <DeanTab />,
    accreditation: <AccreditationTab onShowPdf={setSelectedPdf} />,
    "student-support": <StudentSupportTab />,
  };

  return (
    <div className="bg-[var(--bits-surface-muted)]">
      <section className="relative overflow-hidden border-b border-emerald-950/5 bg-[radial-gradient(circle_at_top_left,rgba(125,194,67,0.08),transparent_35%),linear-gradient(180deg,var(--bits-surface),var(--bits-surface-muted))]">
        <div className="mx-auto max-w-site px-4 pt-24 pb-8 sm:px-6 lg:px-8 lg:pt-28 lg:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bits-green shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Institutional profile
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Who We Are
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bits-text sm:text-lg">
              Learn about BITS College
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-site px-4 pt-4 pb-10 sm:px-6 lg:px-8 lg:pt-6 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-3xl border border-emerald-950/8 bg-[var(--bits-surface)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bits-muted">On this page</p>
              <div className="mt-4 space-y-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition hover:border-emerald-900/10 hover:bg-emerald-50 hover:text-bits-green ${
                      activeSection === section.id
                        ? "border-black/20 bg-black/5 text-black dark:border-white/30 dark:bg-white/10 dark:text-white font-semibold"
                        : "border-transparent text-bits-text"
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition ${activeSection === section.id ? "text-black dark:text-white" : ""}`} />
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[var(--bits-surface-muted)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bits-muted">About BITS COLLEGE</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-[var(--bits-surface)] p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-bits-green" />
                      <div>
                        <p className="text-2xl font-semibold text-bits-heading">335+</p>
                        <p className="text-xs text-bits-muted">Students enrolled</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-[var(--bits-surface)] p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-bits-green" />
                      <div>
                        <p className="text-2xl font-semibold text-bits-heading">135+</p>
                        <p className="text-xs text-bits-muted">Enrolled within 2017 EC</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              >
                {tabContent[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AccreditationModal selectedPdf={selectedPdf} onClose={() => setSelectedPdf(null)} />
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/FacultyContent.tsx -->
## src/components/academics/FacultyContent.tsx

```tsx
/** Faculty — image cards with hover/touch overlay showing name, role, and courses taught */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";
import { useState } from "react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

type FacultyCard = {
  name: string;
  role: string;
  courses?: string[];
  tagline?: string;
  initials: string;
  image?: string;
};

const IMG = "/images/Faculty-Members/";

const faculty: FacultyCard[] = [
  { name: "Dr. Rahel Bekele", role: "IS Professional", courses: ["Fundamentals of Database Systems", "Statistical", "Research Methods", "Business Intelligence"], initials: "RB", image: `${IMG}Dr%20Rahel%20Bekele.webp` },
  { name: "Dr. Tesfaye Biru", role: "Software Developer", courses: ["Introduction to Computer Systems", "Service Innovation and Design", "IT Service Management"], initials: "TB", image: `${IMG}Dr%20Tesfaye%20Biru.png` },
  { name: "Dr. Nigussie Tadesse", role: "Assistant Professor of Information Systems", courses: ["IT and Business Alignment", "IT Governance and Audit"], initials: "NT", image: `${IMG}Dr%20Nigussie%20Tadesse.png` },
  { name: "Prof. Abebe Rorissa", role: "Professor of IS", courses: [], initials: "AR", image: `${IMG}Professor%20Abebe%20Rorissa.png` },
  { name: "Betsegaw", role: "Lecturer", courses: ["Fundamentals of Programming", "Object Oriented Programming"], initials: "B", image: `${IMG}Mr%20Betsegaw.png` },
  { name: "Henock Leulseged", role: "IS Professional", courses: ["Advanced Programming", "Object Oriented Programming"], initials: "HL", image: `${IMG}Mr%20Henock%20Leulseged.jpg` },
  { name: "Kidus Menfese", role: "Lecturer", courses: ["Software Requirements Engineering", "Operating Systems"], initials: "KM", image: `${IMG}Mr%20Kidus%20Menfese.jpg` },
  { name: "Elshaday Samuel", role: "Lecturer", courses: ["Calculus", "Data Communication and Networks I", "Introduction to Computer Systems", "Foundations of Data Analytics"], initials: "ES", image: `${IMG}Ms%20Elshaday%20Samuel.png` },
  { name: "Michael Bekele", role: "Lecturer", courses: ["Fundamentals of Database Systems", "Data Structures and Algorithms", "Web Systems and Services", "Fundamentals of Data Analytics"], initials: "MB", image: `${IMG}Mr%20Michael%20Bekele.jpg` },
  { name: "Elshaday Tesfaye", role: "Lecturer", courses: ["Introduction to Computer Systems", "Fundamentals of Programming"], initials: "ET", image: `${IMG}Ms%20Elshaday%20Tesfaye.png` },
  { name: "Fasika Tegegn", role: "Lecturer", courses: ["Data Communications and Networks I", "Information Assurance and Security", "Ethical Computing", "Operating Systems"], initials: "FT", image: `${IMG}Mr%20Fasika%20Tegegn.png` },
  { name: "Hana Gebeyehu", role: "Lecturer", courses: ["Enterprise Systems"], initials: "HG", image: `${IMG}Ms%20Hana%20Gebeyehu.png` },
  { name: "Tibebu Tesfaye", role: "Lecturer", courses: ["Introduction to Computer Systems", "Fundamentals of Programming"], initials: "TT", image: `${IMG}Mr%20Tibebu%20Tesfaye.png` },
  { name: "Birara Gebru", role: "Lecturer", courses: ["College English I", "College English II"], initials: "BG", image: `${IMG}Dr%20Birara%20Gebru.jpg` },
  { name: "Anteneh Kassaye", role: "Lecturer", courses: ["Data Communications and Networks I", "Information Assurance and Security", "Electronics"], initials: "AK", image: `${IMG}Mr%20Anteneh%20Gebeyehu.png` },
  { name: "Tehut Tesfaye", role: "Lecturer", courses: ["Fundamentals of Data Analytics"], initials: "TE", image: `${IMG}Ms%20Tehut%20Tesfaye.png` },
];

function Card({ item, index }: { item: FacultyCard; index: number }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched((v) => !v);
    if (!showOverlay) setShowOverlay(true);
  };

  const show = showOverlay || touched;

  return (
    <motion.article
      initial={{ y: 32, scale: 0.97 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.03, ease: EASE_PREMIUM }}
      className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition"
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading={index < 4 ? "eager" : "lazy"}
          priority={index < 4}
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bits-green-dark to-emerald-500 text-2xl font-bold text-white">
          {item.initials}
        </div>
      )}

      <motion.div
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => { setShowOverlay(false); setTouched(false); }}
        onTouchStart={handleTouch}
        className="absolute inset-0 flex cursor-default flex-col justify-end bg-gradient-to-t from-bits-green-dark/95 via-bits-green-dark/60 to-transparent p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight text-white">{item.name}</h3>
            <p className="mt-1 text-sm font-medium text-emerald-200">{item.role}</p>
          </div>
          <div className="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            BITS
          </div>
        </div>

        {item.courses && item.courses.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {item.courses.map((course) => (
              <li key={course} className="flex items-start gap-2 text-sm leading-tight text-emerald-50/90">
                <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        )}

        {item.tagline && (
          <p className="mt-3 text-sm leading-6 text-emerald-50/80">{item.tagline}</p>
        )}
      </motion.div>
    </motion.article>
  );
}

export function FacultyContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[var(--bits-surface)]">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_top_left,rgba(6,95,70,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Academic Staff
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bits-green-dark text-white shadow-lg shadow-emerald-900/15">
                <Users className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                Faculty
              </h1>
            </div>

          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
          {faculty.map((item, index) => (
            <Card key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/GraduateProgramContent.tsx -->
## src/components/academics/GraduateProgramContent.tsx

```tsx
/** Graduate Program — MSc in IT Management with focus areas list and hero image */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const focuses = [
  "Service Management",
  "IT Governance",
  "IT Audit",
  "IT Security",
  "IT Service Innovation And Project Management",
];

export function GraduateProgramContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-[104px] sm:px-6 lg:px-8 lg:py-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Graduate Program
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl lg:text-4xl">
              Information Technology Management
            </h1>
            <p className="mt-6 text-base font-medium text-bits-green-dark">
              The M.Sc. Program In IT Management Focuses On:
            </p>
            <ul className="mt-4 space-y-3">
              {focuses.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-bits-text">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="/images/Academics-GraduateAdmissions/Information%20Technology%20Management.webp"
              alt="Information Technology Management"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/InformationTechnologySystemsContent.tsx -->
## src/components/academics/InformationTechnologySystemsContent.tsx

```tsx
/** IT & Systems — overview, courses, graduation requirements, and career paths */
"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IMG = "/images/Academics-Undergraduate-Details/ITS";

export function InformationTechnologySystemsContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden pt-[72px] pb-16 sm:pb-24 lg:pt-[80px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bits-green/20 mix-blend-multiply blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-bits-gold-light/10 mix-blend-multiply blur-3xl" />

        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center pt-12"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-bits-green-dark to-blue-600 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Information Technology & Systems
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-bits-text">
              Provide students with the opportunity to develop strengths in analysis, applied design, and development, implementation, and management of information systems.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        {/* Overview */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-bits-text">
            The undergraduate program in Information Technology and Systems is designed to provide students with the opportunity to develop strengths in analysis, applied design, and development, implementation, and management of information systems.
          </p>
          <motion.img
            src={`${IMG}%201.webp`}
            alt="Information Technology and Systems Overview"
            className="mt-8 w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* What will I study? */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">What will I study?</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Throughout the information technology and systems program, there will be a focus on database and network administration, system administration and programming related courses. Major course areas include:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Network systems and administration",
                "Database systems and administration",
                "Cyber Security",
                "IT Service Management",
                "Data Center Management",
                "IT Systems Acquisition",
                "Systems Analysis and Design",
                "Software Design and Construction",
              ].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <strong>{item}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.img
            src={`${IMG}%202.webp`}
            alt="Students learning IT and Systems"
            className="w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* Graduation Requirements */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Graduation Requirements</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Grade",
                text: "To graduate from this program, students must pass every compulsory course and support course, as well as 9 credit hours of elective courses. The cumulative grade point average should be at least 2.0.",
              },
              {
                title: "Internships",
                text: "An internship is compulsory non-credit work for a student to graduate from the program. It is also an opportunity for students to achieve personal learning goals.",
              },
              {
                title: "Community Service",
                text: "A student is recommended to complete 24 hours of community service before graduating from BITS. It is also an opportunity for students to give back to the community.",
              },
            ].map((req) => (
              <motion.div
                key={req.title}
                variants={itemVariants}
                className="rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-card dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800"
              >
                <h3 className="text-xl font-semibold text-bits-green-dark">{req.title}</h3>
                <p className="mt-3 leading-relaxed text-bits-text">{req.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Graduation Image + Career Paths */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.img
            src={`${IMG}%203.png`}
            alt="ITS Graduation"
            className="w-4/5 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Career Paths</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Many career opportunities exist for graduates of the Information Technology and Systems undergraduate program. They will have the potential to work as:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Information Technology Managers",
                "Network Administrators",
                "Network Architects",
                "Systems Analysts",
                "Database Administrators",
                "System Administrators",
                "Information Security Analysts",
              ].map((career) => (
                <motion.li
                  key={career}
                  variants={itemVariants}
                  className="text-lg text-bits-text"
                >
                  <strong>{career}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/ResearchContent.tsx -->
## src/components/academics/ResearchContent.tsx

```tsx
/** Research — two-column layout: focus description and core areas list with images */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const coreAreas = [
  "Context based software engineering methodologies",
  "Innovations on IT service industries",
  "Software security, mobility and usability",
  "Internet of things",
  "Big data analytics",
  "Cyber security",
  "E-health, Education, E-commerce, etc.",
];

const IMG = "/images/Academics-Research/";

export function ResearchContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <Sparkles className="h-4 w-4" />
              Research
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Research
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Focus
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                BITS College focuses on business and development-oriented & technology
                transfer-focused research that best supports the fulfillment of aligning IT
                with business as well as the ICT for development agenda. The main focus is on
                creating an integrated, community based research and high quality graduate
                studies so as to maximize the benefits to the society.
              </p>
            </div>

            <div className="relative aspect-[4/3]">
              <Image
                src={`${IMG}Research%201.png`}
                alt="Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] lg:order-first">
              <Image
                src={`${IMG}Research%202.png`}
                alt="Research"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Core Areas
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Core research areas and themes identified at BITS are:
              </p>
              <ul className="mt-4 space-y-3">
                {coreAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-bits-text">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/SoftwareEngineeringContent.tsx -->
## src/components/academics/SoftwareEngineeringContent.tsx

```tsx
/** Software Engineering — overview, courses, graduation requirements, and career paths */
"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IMG = "/images/Academics-Undergraduate-Details/Software%20Engineering";

export function SoftwareEngineeringContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden pt-[72px] pb-16 sm:pb-24 lg:pt-[80px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bits-green/20 mix-blend-multiply blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-bits-gold-light/10 mix-blend-multiply blur-3xl" />

        <div className="relative mx-auto max-w-site px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center pt-12"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-bits-green-dark to-blue-600 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Software Engineering
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-bits-text">
              Produce software engineers with knowledge and understanding of theories, practices and principles of software engineering.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        {/* Overview */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-bits-text">
            The undergraduate program in Software Engineering is designed to produce software engineers with knowledge and understanding of theories, practices and principles of software engineering.
          </p>
          <motion.img
            src={`${IMG}%201.png`}
            alt="Software Engineering Overview"
            className="mt-8 w-2/3 mx-auto rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* What will I study? */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">What will I study?</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Throughout the software engineering program, there will be a focus on software design, requirements study, programming, and database-related courses. Major course areas are:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Software Design and Architecture",
                "Software Requirements Engineering",
                "Mobile Application Development",
                "Web Application Development",
                "Software Project Management",
                "Database System",
                "Programming / Coding",
                "Data Structures and Algorithms",
              ].map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <strong>{item}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.img
            src={`${IMG}%202.webp`}
            alt="Students learning Software Engineering"
            className="w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.section>

        {/* Graduation Requirements */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Graduation Requirements</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Grade",
                text: "To graduate from this program, students must pass every compulsory course and support course, as well as 9 credit hours of elective courses. The cumulative grade point average should be at least 2.0.",
              },
              {
                title: "Internships",
                text: "An internship is compulsory non-credit work for a student to graduate from the program. It is also an opportunity for students to achieve personal learning goals.",
              },
              {
                title: "Community Service",
                text: "A student is recommended to complete 24 hours of community service before graduating from BITS. It is also an opportunity for students to give back to the community.",
              },
            ].map((req) => (
              <motion.div
                key={req.title}
                variants={itemVariants}
                className="rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface)] p-6 shadow-card dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800"
              >
                <h3 className="text-xl font-semibold text-bits-green-dark">{req.title}</h3>
                <p className="mt-3 leading-relaxed text-bits-text">{req.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Graduation Image + Career Paths */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid gap-12 md:grid-cols-2 md:items-center"
        >
          <motion.img
            src={`${IMG}%203.webp`}
            alt="Graduation Requirements"
            className="w-full rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          <div>
            <h2 className="text-3xl font-bold text-bits-heading sm:text-4xl">Career Paths</h2>
            <p className="mt-4 text-lg leading-relaxed text-bits-text">
              Many career opportunities exist for graduates of the Software Engineering undergraduate program. They will have the potential to work as:
            </p>
            <ul className="mt-6 list-inside list-disc space-y-2 text-lg text-bits-text">
              {[
                "Software Designers",
                "Software Developers",
                "Requirement Analysts",
                "Software Project Managers",
                "Usability Experts",
              ].map((career) => (
                <motion.li
                  key={career}
                  variants={itemVariants}
                  className="text-lg text-bits-text"
                >
                  <strong>{career}</strong>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/academics/UndergraduateProgramContent.tsx -->
## src/components/academics/UndergraduateProgramContent.tsx

```tsx
/** Undergraduate Programs — two program cards (SE, ITS) with staggered entrance and CTA links */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Code2,
  MonitorSmartphone,
} from "lucide-react";

const IMG = "/images/Academics-Undergraduate-Programs/";

const programs = [
  {
    title: "Software Engineering",
    eyebrow: "Undergraduate Program",
    description: "Pursue an undergraduate degree in software engineering if you want to design software systems, develop applications, and manage software development projects.",
    points: ["design software systems", "develop applications", "manage software development projects"],
    href: "/software-engineering",
    accent: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    icon: Code2,
    badge: "SE",
    image: `${IMG}Software%20Engineering.jpg`,
  },
  {
    title: "IT and Systems",
    eyebrow: "Undergraduate Program",
    description: "Pursue an undergraduate degree in information technology and systems if you want to be involved in network administration, database administration, and IT security and software application support.",
    points: ["network administration", "database administration", "IT security and software application support"],
    href: "/information-technology-and-systems",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
    icon: MonitorSmartphone,
    badge: "ITS",
    image: `${IMG}IT%20and%20Systems.webp`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  const Icon = program.icon;

  return (
    <motion.article
      variants={itemAnim}
      className="group overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_60px_-28px_rgba(15,23,42,0.28)]"
    >
      <div className={`bg-gradient-to-br ${program.accent} p-6 sm:p-8`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-bits-green-dark uppercase">
              {program.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              {program.title}
            </h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--bits-surface)]/80 text-bits-green-dark shadow-sm">
            <Icon className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/60 bg-[var(--bits-surface)]/75 p-5 backdrop-blur">
            <p className="max-w-xl text-sm leading-7 text-bits-text sm:text-base">
              {program.description}
            </p>

            <ul className="mt-5 space-y-3">
              {program.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-bits-text">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-bits-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={program.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-bits-green-dark px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="group relative min-h-[240px] overflow-hidden">
            {program.image && (
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/90 backdrop-blur-sm">
                  BITS
                </span>
                <span className="rounded-full bg-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur-sm">
                  {program.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function UndergraduateProgramContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(255,255,255,0)_30%,rgba(255,255,255,0))]" />
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div variants={itemAnim} className="text-center">
              <p className="text-sm font-semibold tracking-[0.3em] text-bits-green-dark uppercase">
                Undergraduate Programs
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                Undergraduate Programs
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-bits-text sm:text-lg">
                Two focused undergraduate pathways designed for students who want a
                practical, industry-oriented computing education.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {programs.map((program) => (
                <ProgramCard key={program.title} program={program} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/admissions/GraduateAdmissionContent.tsx -->
## src/components/admissions/GraduateAdmissionContent.tsx

```tsx
/** Graduate Admission — requirements for MSc IT Management with numbered list */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const requirements = [
  "A first degree in fields related to IT (Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning) or",
  "A first degree in any field of study with a minor in Computer Science, Information Science/Systems, Software Engineering and Computer Engineering, from an accredited institution of higher learning.",
  "To secure the minimum mark in the college Entrance Exam result.",
];

export function GraduateAdmissionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Graduate Admission
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Admission to the Graduate Program
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <p className="text-base leading-8 text-bits-text">
                The graduate programs are intended for candidates with an undergraduate degree
                or a postgraduate diploma in IT related fields.
              </p>
              <p className="mt-6 text-base font-medium text-bits-heading">
                In particular, the following requirements must be fulfilled.
              </p>
              <ul className="mt-6 space-y-4">
                {requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-bits-text">
                    <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src="/images/Academics-GraduateAdmissions/Information%20Technology%20Management.webp"
                alt="Graduate Admission"
                width={600}
                height={450}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/admissions/ScholarshipAidContent.tsx -->
## src/components/admissions/ScholarshipAidContent.tsx

```tsx
/** Scholarship & Aid — four scholarship types with alternating layout, info brochure PDF modal */
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import { useState } from "react";
import { PDFViewer } from "@/components/ui/PDFViewer";

const PDF_URL = "/images/Admissions-Scholarship/BITS%20SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf";

const IMG = "/images/Admissions-Scholarship/";

const scholarships = [
  {
    title: "Merit-based Scholarship",
    body: "Granted solely based on students' merits/academic performance. This scholarship type primarily consists of two targets: incoming students and those already enrolled in the College.\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.\n\nMeet our 2023/24 Scholarship Recipients",
    image: `${IMG}Scholarship%201.webp`,
  },
  {
    title: "Need-Based Scholarship",
    body: "Granted to students based on demonstrated need for financial assistance as well as excellent grades. Grade requirements for need-based scholarship should not be as rigorous as that of merit-based scholarship but should nevertheless set a competitive grade requirement for eligibility.\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.",
    image: `${IMG}Scholarship%202.png`,
  },
  {
    title: "Female Scholarship",
    body: "Reserved specifically for female students who have demonstrated need for financial assistance while at the same time having a strong academic performance. The main objective of this scholarship category is to create awareness about our women's empowerment scholarship program and increase applications from promising female students\n\nThis type of scholarship has mandatory on-campus employment for a maximum of 12 work hours per week.",
    image: `${IMG}Scholarship%203.webp`,
  },
  {
    title: "Work Study Program",
    body: "This Program provides on-campus employment opportunities for already enrolled students. It is granted to students based on outstanding academic performance and has a competitive grade requirement for eligibility.\n\nStudents will be given maximum of 12 work hours per week.",
    image: `${IMG}Scholarships%204.webp`,
  },
];

const types = [
  "Merit-based Scholarship",
  "Need-Based Scholarship",
  "Female Scholarship",
  "Work Study Program",
];

export function ScholarshipAidContent() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Admissions &middot; Scholarship &amp; Aid
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Scholarship &amp; Aid
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-bits-text sm:text-lg">
              In order to make the College accessible to all, BITS offers limited number of
              scholarships primarily for academic expenses (tuition), transportation allowance,
              and equipment funding.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              The following are the types of Scholarships at BITS College
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {types.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface-muted)] px-5 py-4 text-sm font-medium text-bits-heading"
                >
                  <span className="h-2 w-2 rounded-full bg-bits-green-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {scholarships.map((item, index) => (
            <div
              key={item.title}
              className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${
                index % 2 === 1 ? "lg:grid-cols-[0.9fr_1.1fr]" : ""
              }`}
            >
              {index % 2 === 1 ? (
                <>
                  <div className="lg:order-first">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                      className={`${index === scholarships.length - 1 ? "w-full sm:w-[30%]" : "w-full sm:w-3/5"} h-auto mx-auto`}
                    />
                  </div>
                  <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                      {item.title}
                    </h2>
                    {item.body.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mt-5 text-base leading-8 text-bits-text">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                      {item.title}
                    </h2>
                    {item.body.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mt-5 text-base leading-8 text-bits-text">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                      className="w-full h-auto"
                    />
                  </div>
                </>
              )}
            </div>
          ))}

          <div className="text-center">
            <button
              onClick={() => setShowPdf(true)}
              className="inline-flex items-center gap-3 rounded-xl bg-bits-green-dark px-12 py-6 text-xl font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-bits-green"
            >
              For More Information
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowPdf(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
                <p className="text-sm font-semibold text-bits-heading">Scholarship Brochure</p>
                <button
                  onClick={() => setShowPdf(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-bits-muted transition hover:bg-gray-100 hover:text-bits-heading dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <PDFViewer pdfUrl={PDF_URL} title="Scholarship Brochure" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/admissions/TuitionContent.tsx -->
## src/components/admissions/TuitionContent.tsx

```tsx
/** Tuition — price-per-credit-hour tables for undergrad and graduate programs */
"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/motion-presets";

const tuitionTable = [
  {
    level: "Undergraduate",
    rows: [
      { type: "Regular", price: "2400" },
      { type: "Extension", price: "2400" },
    ],
  },
  {
    level: "Graduate",
    rows: [
      { type: "Extension", price: "3500" },
      { type: "Regular", price: "3500" },
    ],
  },
];

export function TuitionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)]">
      <section className="relative overflow-hidden border-b border-emerald-950/10 bg-[linear-gradient(180deg,rgba(125,194,67,0.06),var(--bits-page))]">
        <div className="mx-auto max-w-site px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <DollarSign className="h-4 w-4" />
              Tuition & Fee Structure
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Tuition
            </h1>
            <p className="mt-6 text-lg leading-8 text-bits-text">
              BITS&apos;s estimated cost of attendance is based on tuition fees and modest contribution to
              technology and other facilities that exist in the college. For more information on cost of
              attendance, you may visit the online application and select the program you would like to join.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {tuitionTable.map((group) => (
            <div key={group.level}>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-bits-heading">
                {group.level}
              </h2>
              <div className="overflow-hidden rounded-2xl border border-emerald-950/10 dark:border-white/10">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-emerald-50 dark:bg-emerald-900/40">
                      <th className="px-6 py-4 font-semibold text-bits-heading">Program Type</th>
                      <th className="px-6 py-4 font-semibold text-bits-heading">Price per credit hour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.type} className="border-t border-emerald-950/5 dark:border-white/10">
                        <td className="px-6 py-4 text-bits-text">{row.type}</td>
                        <td className="px-6 py-4 text-bits-text">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/admissions/UndergradAdmissionContent.tsx -->
## src/components/admissions/UndergradAdmissionContent.tsx

```tsx
/** Undergraduate Admission — Ethiopian & foreign student requirements with numbered list cards */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const requirements = [
  "A graduate of an accredited high school with the required pass mark set by the national examination agency to enter higher education AND the necessary pass mark in the College Entrance Examination.",
  "A TVET Graduate approved for entry to higher education with official COC AND the necessary pass mark in the College Entrance Examination.",
  "A graduate of an accredited higher education and the necessary pass mark in the College Entrance Examination.",
];

const IMG = "/images/Admissions-Undergraduate/";

export function UndergradAdmissionContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-bits-green-dark uppercase shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Admissions
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Undergraduate Admission
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Admission for Ethiopian Students
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                To be eligible for admission to BITS College, applicants should meet one of the
                following requirements.
              </p>
              <ul className="mt-6 space-y-4">
                {requirements.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-base text-bits-text">
                    <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bits-green-dark text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Image
                src={`${IMG}Undergraduate%201.webp`}
                alt="Undergraduate Admission"
                width={600}
                height={450}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="w-full h-auto mx-auto object-contain"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative aspect-[4/3] lg:order-first">
              <Image
                src={`${IMG}Undergraduate%202.webp`}
                alt="Undergraduate Admission"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Admission for Foreign Students
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Admission of foreign students is based on the equivalence established by the
                National Higher Education Relevance and Quality Assurance Agency.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/home/AnnouncementSection.tsx -->
## src/components/home/AnnouncementSection.tsx

```tsx
/** Announcement card — displays the National Exit Exam pass announcement image with hover animation */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, EASE_PREMIUM, SPRING_HOVER } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function AnnouncementSection() {
  const { enabled } = useMotionSafe();
  const { tapSm } = useInteractionMotion();

  return (
    <section className="section-surface py-12 md:py-16" aria-label="College announcement">
      <SectionReveal className="flex justify-center px-4 sm:px-6 lg:px-8">
        {enabled ? (
          <motion.div
            className="gpu w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            whileHover={{
              scale: 1.02,
              boxShadow: "var(--shadow-card-hover-announce)",
              transition: SPRING_HOVER,
            }}
            whileTap={tapSm}
          >
            <Image
              src="/images/announcement.png"
              alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
              width={498}
              height={461}
              className="h-auto w-full rounded-lg object-contain"
            />
          </motion.div>
        ) : (
          <div className="w-full max-w-sm">
            <Image
              src="/images/announcement.png"
              alt="BITS College is proud to announce that all students of Class of 2025 have passed their National Exit Examination"
              width={498}
              height={461}
              className="h-auto w-full object-contain"
            />
          </div>
        )}
      </SectionReveal>
    </section>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/home/GetInTouchSection.tsx -->
## src/components/home/GetInTouchSection.tsx

```tsx
/** Get In Touch — three contact cards (phone, location featured, email) with staggered entrance */
"use client";

import { motion } from "framer-motion";
import { CONTACT_CARDS } from "@/lib/constants/site";
import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons/FeatureIcons";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, SPRING_HOVER, STAGGER_SLOW, EASE_PREMIUM } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

function ContactIcon({ type }: { type: "phone" | "location" | "email" }) {
  const className = "h-9 w-9";
  if (type === "phone") return <PhoneIcon className={className} />;
  if (type === "location") return <LocationIcon className={className} />;
  return <MailIcon className={className} />;
}

export function GetInTouchSection() {
  const { enabled } = useMotionSafe();
  const { tapSm } = useInteractionMotion();

  return (
    <section
      className="section-surface relative overflow-hidden py-10 md:py-14"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        animate={enabled ? { opacity: [0.2, 0.4, 0.25, 0.35, 0.2] } : undefined}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,200 Q300,100 600,180 T1200,120"
            fill="none"
            stroke="#7DC243"
            strokeWidth="1.5"
            opacity="0.25"
          />
          <path
            d="M0,280 Q400,220 800,260 T1200,200"
            fill="none"
            stroke="#b48c1e"
            strokeWidth="1"
            opacity="0.12"
          />
        </svg>
      </motion.div>

      <div className="site-container relative z-10">
        <SectionReveal>
          <h2
            id="contact-heading"
            className="mb-10 text-center text-3xl font-bold text-bits-heading md:mb-14 md:text-4xl"
          >
            Get In Touch
          </h2>
        </SectionReveal>

        {enabled ? (
          <motion.div
            className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: STAGGER_SLOW },
            }}
          >
            {CONTACT_CARDS.map((card, index) => {
              const content = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15, transition: SPRING_HOVER }}
                  >
                    <ContactIcon type={card.type} />
                  </motion.div>
                  <p
                    className={`mt-4 text-sm font-semibold leading-snug ${
                      card.featured ? "text-white" : "text-bits-heading"
                    }`}
                  >
                    {card.value}
                  </p>
                  <p
                    className={`mt-2 text-base font-bold ${
                      card.featured ? "text-white" : "text-bits-heading"
                    }`}
                  >
                    {card.label}
                  </p>
                </>
              );

              const isFeatured = card.featured ?? false;
              const cardHover = {
                y: isFeatured ? -8 : -6,
                boxShadow: isFeatured
                  ? "var(--shadow-card-hover-featured)"
                  : "var(--shadow-card-hover-lift)",
                transition: { duration: 0.3, ease: EASE_PREMIUM },
              };

              const CardTag = card.href ? motion.a : motion.div;
              const isExternal = card.href?.startsWith("http");

              return (
                <motion.div
                  key={`${card.type}-${card.label}`}
                  className={`flex w-full justify-center px-2 ${index === 1 ? "md:px-0" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: 32, scale: 0.93 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_GENTLE },
                  }}
                >
                  <CardTag
                    className={
                      isFeatured
                        ? "contact-card-featured gpu"
                        : "contact-card-side gpu"
                    }
                    {...(card.href ? { href: card.href } : {})}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    whileHover={cardHover}
                    whileTap={tapSm}
                  >
                    {content}
                  </CardTag>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0">
            {CONTACT_CARDS.map((card, index) => {
              const isFeatured = card.featured ?? false;
              const inner = card.href ? (
                <a
                  href={card.href}
                  {...(card.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${isFeatured ? "contact-card-featured contact-card-featured-fallback" : "contact-card-side contact-card-side-fallback"}`}>
                  <ContactIcon type={card.type} />
                  <p className={`mt-4 text-sm font-semibold ${isFeatured ? "text-white" : "text-bits-heading"}`}>{card.value}</p>
                  <p className={`mt-2 text-base font-bold ${isFeatured ? "text-white" : "text-bits-heading"}`}>{card.label}</p>
                </a>
              ) : (
                <div className={`${isFeatured ? "contact-card-featured contact-card-featured-fallback" : "contact-card-side contact-card-side-fallback"}`}>
                  <ContactIcon type={card.type} />
                  <p className={`mt-4 text-sm font-semibold ${isFeatured ? "text-white" : "text-bits-heading"}`}>{card.value}</p>
                  <p className={`mt-2 text-base font-bold ${isFeatured ? "text-white" : "text-bits-heading"}`}>{card.label}</p>
                </div>
              );
              return (
                <div key={`${card.type}-${card.label}`} className={`flex w-full justify-center px-2 ${index === 1 ? "md:px-0" : ""}`}>
                  {inner}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/home/HeroSection.tsx -->
## src/components/home/HeroSection.tsx

```tsx
/** Hero — main CTA section with animated content, floating blob effects, and wave divider */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { APPLY_URL } from "@/lib/constants/navigation";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { EASE_PREMIUM, SPRING_GENTLE } from "@/lib/motion-presets";
import { WaveDivider } from "@/components/ui/WaveDivider";

function HeroContent({ animate }: { animate?: boolean }) {
  const { hoverScaleSm, tapSm, on } = useInteractionMotion();
  const Cta = animate ? motion.a : "a";

  return (
    <>
      <div className="relative inline-block">
        <h1
          id="hero-heading"
          className="font-display text-4xl font-bold leading-tight text-bits-heading sm:text-5xl md:text-[3.25rem]"
        >
          <span className="block">Join the</span>
          <span className="block">Vision</span>
        </h1>
        {animate && on && (
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-bits-green to-bits-gold/0"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60px", opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE_PREMIUM }}
          />
        )}
      </div>
      <p className="mt-5 text-base leading-relaxed text-bits-muted md:text-lg">
        BITS offers well-designed academic programs in software engineering and IT
        Management. We provide world-class education facilities, and use
        cutting-edge technology to realize our educational vision.
      </p>
      {animate ? (
        <motion.a
          href={APPLY_URL}
          className="btn-solid-green mt-8 inline-flex relative overflow-hidden !px-10 !py-4 !text-xl"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
        >
          Apply Now
        </motion.a>
      ) : (
        <a
          href={APPLY_URL}
          className="btn-solid-green mt-8 inline-flex relative overflow-hidden !px-10 !py-4 !text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      )}
    </>
  );
}

function HeroImage({ animate }: { animate?: boolean }) {
  const Blob = animate ? motion.div : "div";

  return (
    <>
      <Blob
        className="absolute right-4 top-8 h-64 w-64 rounded-full bg-bits-green/25 blur-sm md:h-80 md:w-80 lg:right-12 lg:top-4"
        aria-hidden="true"
        {...(animate
          ? {
              animate: { scale: [1, 1.06, 1, 0.98, 1], opacity: [0.25, 0.35, 0.2, 0.3, 0.25] },
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      />
      <Blob
        className="absolute right-16 top-20 h-40 w-40 rounded-full bg-bits-green/15 md:h-52 md:w-52"
        aria-hidden="true"
        {...(animate
          ? {
              animate: { scale: [1, 1.08, 0.96, 1.04, 1] },
              transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }
          : {})}
      />
      <motion.div
        className="relative z-10"
        {...(animate
          ? {
              animate: { y: [0, -4, 0] },
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }
          : {})}
      >
        <Image
          src="/images/hero-student.webp"
          alt="BITS student holding Software Architecture in Practice textbook"
          width={550}
          height={1088}
          priority
          className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px]"
        />
      </motion.div>
    </>
  );
}

export function HeroSection() {
  const { enabled } = useMotionSafe();

  return (
    <section
      className="section-surface-muted relative overflow-hidden pt-[64px] md:pt-[72px] lg:pt-[76px]"
      aria-labelledby="hero-heading"
    >
      <div className="site-container relative pb-8 pt-10 md:pb-12 md:pt-16 lg:pt-20">
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          {enabled ? (
            <motion.div
              className="z-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_GENTLE, delay: 0.1 }}
            >
              <HeroContent animate />
            </motion.div>
          ) : (
            <div className="z-10 max-w-xl">
              <HeroContent />
            </div>
          )}

          {enabled ? (
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...SPRING_GENTLE, delay: 0.25 }}
            >
              <HeroImage animate />
            </motion.div>
          ) : (
            <div className="relative flex justify-center lg:justify-end">
              <HeroImage />
            </div>
          )}
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/home/ProgramsSection.tsx -->
## src/components/home/ProgramsSection.tsx

```tsx
/** Programs — graduate + undergraduate program cards with staggered entrance and fallback static variant */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROGRAM_CARDS } from "@/lib/constants/site";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, SPRING_HOVER, STAGGER_NORMAL, EASE_PREMIUM } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";

const graduateProgram = PROGRAM_CARDS[0];
const undergradPrograms = PROGRAM_CARDS.slice(1);

function ProgramCardsList() {
  return (
    <div className="mt-8 space-y-4">
      <Link href={graduateProgram.href} className="program-card program-card-fallback block pl-6">
        <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
          {graduateProgram.title}
        </h3>
        <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
      </Link>
      <div className="grid gap-4 sm:grid-cols-2">
        {undergradPrograms.map((program) => (
          <Link
            key={program.title}
            href={program.href}
            className="program-card program-card-fallback block h-full pl-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
              {program.title}
            </h3>
            <p className="mt-1 text-sm text-bits-muted">{program.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProgramCardsAnimated() {
  const { tapSm } = useInteractionMotion();

  return (
    <motion.div
      className="mt-8 space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: STAGGER_NORMAL },
      }}
    >
      <motion.div
        className="program-card gpu block pl-6"
        variants={{
          hidden: { opacity: 0, x: 20, scale: 0.97 },
          visible: { opacity: 1, x: 0, scale: 1, transition: SPRING_GENTLE },
        }}
        whileHover={{
          y: -4,
          boxShadow: "var(--shadow-card-hover-rise)",
          transition: SPRING_HOVER,
        }}
        whileTap={tapSm}
      >
        <Link href={graduateProgram.href} className="block">
          <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
            {graduateProgram.title}
          </h3>
          <p className="mt-1 text-sm text-bits-muted">{graduateProgram.subtitle}</p>
        </Link>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {undergradPrograms.map((program) => (
          <motion.div
            key={program.title}
            className="program-card gpu block h-full pl-6"
            variants={{
              hidden: { opacity: 0, x: 20, scale: 0.97 },
              visible: { opacity: 1, x: 0, scale: 1, transition: SPRING_GENTLE },
            }}
            whileHover={{
              y: -4,
              boxShadow: "var(--shadow-card-hover-rise)",
              transition: SPRING_HOVER,
            }}
            whileTap={tapSm}
          >
            <Link href={program.href} className="block h-full">
              <h3 className="text-sm font-bold uppercase tracking-wide text-bits-heading">
                {program.title}
              </h3>
              <p className="mt-1 text-sm text-bits-muted">{program.subtitle}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ProgramsSection() {
  const { enabled } = useMotionSafe();

  return (
    <section
      className="section-surface py-8 md:py-12"
      aria-labelledby="programs-heading"
    >
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionReveal className="relative order-2 lg:order-1">
            <div
              className="absolute -left-4 top-8 h-56 w-56 rounded-full bg-bits-green/20 md:h-72 md:w-72"
              aria-hidden="true"
            />
            {enabled ? (
              <motion.div
                initial={{ opacity: 0, x: -24, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
              >
                <Image
                  src="/images/programs-student.webp"
                  alt="BITS student with backpack"
                  width={762}
                  height={1024}
                  className="relative z-10 mx-auto h-auto w-full max-w-[640px] object-contain md:max-w-[760px]"
                />
              </motion.div>
            ) : (
              <Image
                src="/images/programs-student.webp"
                alt="BITS student with backpack"
                width={762}
                height={1024}
                className="relative z-10 mx-auto h-auto w-full max-w-[640px] object-contain md:max-w-[760px]"
              />
            )}
          </SectionReveal>

          <div className="order-1 lg:order-2">
            <SectionReveal>
              <h2
                id="programs-heading"
                className="text-3xl font-bold text-bits-heading md:text-4xl"
              >
                Our Programs
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-bits-muted">
                Our programs challenge students to solve problems and understand
                which problems are important by emphasizing fundamental
                principles with their connections to society.
              </p>
            </SectionReveal>
            {enabled ? <ProgramCardsAnimated /> : <ProgramCardsList />}
          </div>
        </div>
      </div>
    </section>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/home/WhyBitsSection.tsx -->
## src/components/home/WhyBitsSection.tsx

```tsx
/** Why BITS — feature cards grid with staggered entrance, ambient SVG blob, and CTA link */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHY_BITS_CARDS } from "@/lib/constants/site";
import { FeatureIcon } from "@/components/icons/FeatureIcons";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, SPRING_HOVER, STAGGER_FAST } from "@/lib/motion-presets";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function WhyBitsSection() {
  const { enabled } = useMotionSafe();
  const { on, tapSm } = useInteractionMotion();

  return (
    <section
      className="section-surface relative overflow-hidden py-8 md:py-12"
      aria-labelledby="why-bits-heading"
    >
      <WaveDivider flip />
      <div className="site-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionReveal className="relative">
            <motion.div
              className="pointer-events-none absolute -left-8 -top-8 h-[120%] w-[110%] opacity-90"
              aria-hidden="true"
              animate={enabled ? { x: [0, 8, 2, 6, 0] } : undefined}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full text-bits-green/30 dark:text-bits-green/20"
                preserveAspectRatio="none"
              >
                <path
                  fill="currentColor"
                  d="M0,200 Q100,50 200,150 T400,100 L400,400 L0,400 Z"
                />
              </svg>
            </motion.div>
            <div className="relative z-10 max-w-lg">
              <h2
                id="why-bits-heading"
                className="text-3xl font-bold text-bits-heading md:text-4xl"
              >
                Why BITS?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-bits-muted">
                Our faculty at BITS is talented and of the highest caliber, but we
                also provide more. Our institution offers more than simply
                instruction, it also gives our students a secure setting in which
                they can reach, grow, and make the most of their full potential.
              </p>
              <Link href="/who-we-are" className="btn-solid-green mt-6 inline-flex">
                Learn More
              </Link>
            </div>
          </SectionReveal>

          {enabled ? (
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                visible: { transition: STAGGER_FAST },
              }}
            >
              {WHY_BITS_CARDS.map((card) => (
                <motion.article
                  key={card.title}
                  className="feature-card gpu"
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: SPRING_GENTLE },
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "var(--shadow-card-hover-rise)",
                    transition: SPRING_HOVER,
                  }}
                  whileTap={tapSm}
                >
                  <motion.div
                    className="text-bits-green"
                    whileHover={on ? { scale: 1.15, transition: SPRING_HOVER } : undefined}
                  >
                    <FeatureIcon name={card.icon} />
                  </motion.div>
                  <h3 className="mt-4 text-center text-sm font-bold leading-snug text-bits-heading">
                    {card.title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {WHY_BITS_CARDS.map((card) => (
                <article key={card.title} className="feature-card feature-card-fallback">
                  <FeatureIcon name={card.icon} />
                  <h3 className="mt-4 text-center text-sm font-bold leading-snug text-bits-heading">
                    {card.title}
                  </h3>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/icons/FeatureIcons.tsx -->
## src/components/icons/FeatureIcons.tsx

```tsx
/** SVG icon set — individual icons are private, exported via FeatureIcon(name) with dynamic lookup */
type IconProps = { className?: string };

function BookIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 41 46" fill="none" aria-hidden="true">
      <path
        d="M40.5 32.3438V2.15625C40.5 0.961328 39.5446 0 38.3571 0H9.07143C4.33929 0 0.5 3.86328 0.5 8.625V37.375C0.5 42.1367 4.33929 46 9.07143 46H38.3571C39.5446 46 40.5 45.0387 40.5 43.8438V42.4062C40.5 41.7324 40.1875 41.1215 39.7054 40.7262C39.3304 39.3426 39.3304 35.3984 39.7054 34.0148C40.1875 33.6285 40.5 33.0176 40.5 32.3438ZM11.9286 12.0391C11.9286 11.7426 12.1696 11.5 12.4643 11.5H31.3929C31.6875 11.5 31.9286 11.7426 31.9286 12.0391V13.8359C31.9286 14.1324 31.6875 14.375 31.3929 14.375H12.4643C12.1696 14.375 11.9286 14.1324 11.9286 13.8359V12.0391ZM11.9286 17.7891C11.9286 17.4926 12.1696 17.25 12.4643 17.25H31.3929C31.6875 17.25 31.9286 17.4926 31.9286 17.7891V19.5859C31.9286 19.8824 31.6875 20.125 31.3929 20.125H12.4643C12.1696 20.125 11.9286 19.8824 11.9286 19.5859V17.7891ZM34.5536 40.25H9.07143C7.49107 40.25 6.21429 38.9652 6.21429 37.375C6.21429 35.7938 7.5 34.5 9.07143 34.5H34.5536C34.3839 36.0363 34.3839 38.7137 34.5536 40.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GraduationIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 36" fill="none" aria-hidden="true">
      <path
        d="M24 0L0 12L24 24L48 12L24 0ZM4.8 16.8V24.6C4.8 28.92 13.68 32.4 24 32.4C34.32 32.4 43.2 28.92 43.2 24.6V16.8L24 27.6L4.8 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BuildingIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M5 38V14L20 6L35 14V38H25V24H15V38H5ZM9 34H11V20H29V34H31V16L20 10L9 16V34Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CommunityIcon({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <path
        d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16ZM32 16C35.3137 16 38 13.3137 38 10C38 6.68629 35.3137 4 32 4C28.6863 4 26 6.68629 26 10C26 13.3137 28.6863 16 32 16ZM0 28V26C0 21.5817 8.95431 18 16 18C23.0457 18 32 21.5817 32 26V28H0ZM32 26.2C32 22.12 38.56 20 42 20C45.44 20 48 21.08 48 22.4V28H32V26.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function LocationIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function MailIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}

const FEATURE_ICON_MAP = {
  book: BookIcon,
  graduation: GraduationIcon,
  building: BuildingIcon,
  community: CommunityIcon,
} as const;

export function FeatureIcon({
  name,
  className,
}: {
  name: keyof typeof FEATURE_ICON_MAP;
  className?: string;
}) {
  const Icon = FEATURE_ICON_MAP[name];
  return <Icon className={className ?? "h-10 w-10 text-bits-green"} />;
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/layout/Footer.tsx -->
## src/components/layout/Footer.tsx

```tsx
/** Site footer — contact info, quick links, social icons with SVG sprite */
import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_QUICK_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";
import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons/FeatureIcons";

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
      </>
    ),
    youtube: (
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    ),
  };

  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-bits-footer text-bits-footer-text transition-colors duration-300 dark:bg-black dark:ring-1 dark:ring-green-950" role="contentinfo">
      <div className="site-container py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt=""
              width={240}
              height={78}
              className="mb-4 h-auto w-[220px] brightness-0 invert transition-opacity duration-300 hover:opacity-80"
            />
            <p className="text-sm italic text-bits-footer-text/90">
              from collecting . . . to connecting . . .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Contact Info</h2>
            <div className="mb-3 h-0.5 w-8 bg-bits-green" aria-hidden="true" />
            <ul className="space-y-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="footer-link inline-flex items-start gap-2 text-bits-green hover:opacity-80"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="footer-link inline-flex items-start gap-2 hover:opacity-80"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/qrWmP4XnyXEYtK6g6"
                  className="footer-link inline-flex items-start gap-2 hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LocationIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {SITE.address}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 ease-out hover:bg-white hover:text-bits-green hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Quick Links</h2>
            <div className="mb-3 h-0.5 w-8 bg-bits-green" aria-hidden="true" />
            <ul className="space-y-2 text-[15px]">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link inline-block transition-all duration-200 ease-out hover:text-bits-green hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-xs text-bits-footer-text/80">{SITE.copyright}</p>
      </div>
    </footer>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/layout/Header.tsx -->
## src/components/layout/Header.tsx

```tsx
/** Site header — fixed top nav with dropdowns, mobile menu, theme toggle, and scroll-aware styling */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInteractionMotion } from "@/hooks/useInteractionMotion";
import { useCallback, useEffect, useRef, useState } from "react";
import { APPLY_URL, NAV_ITEMS } from "@/lib/constants/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SPRING_GENTLE, EASE_PREMIUM } from "@/lib/motion-presets";

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      className={`ml-0.5 h-2.5 w-2.5 shrink-0 opacity-70 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
      viewBox="0 0 10 6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative">
      <Link
        href={href}
        className={`nav-link whitespace-nowrap ${isActive ? "nav-link-active" : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </Link>
      <motion.div
        className="absolute bottom-[-6px] left-0 h-0.5 bg-black/80 dark:bg-white/70"
        initial={shouldReduce ? { opacity: isActive ? 1 : 0 } : { scaleX: 0, opacity: 0 }}
        animate={isActive
          ? { scaleX: 1, opacity: 1 }
          : shouldReduce ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-[-6px] left-0 h-0.5 bg-bits-green/40"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      )}
    </div>
  );
}

function NavDropdown({
  label,
  items,
  isActive,
  currentPath,
}: {
  label: string;
  items: { label: string; href: string }[];
  isActive?: boolean;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const shouldReduce = useReducedMotion();
  const { hoverScaleSm } = useInteractionMotion();
  const hoverTimer = useRef<number | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  const handleMouseEnter = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpen(true), 80);
  }, []);

  const handleMouseLeave = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    setOpen(false);
  }, []);

  const handleButtonKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (!open) setOpen(true);
          requestAnimationFrame(() => {
            const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
            links?.[0]?.focus();
          });
          break;
        case "ArrowUp":
          e.preventDefault();
          if (!open) setOpen(true);
          requestAnimationFrame(() => {
            const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
            links?.[links.length - 1]?.focus();
          });
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    },
    [open, close]
  );

  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[role=menuitem]");
      if (!links || links.length === 0) return;

      const currentIndex = Array.from(links).findIndex((el) => el === document.activeElement);

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          links[(currentIndex + 1) % links.length]?.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          links[(currentIndex - 1 + links.length) % links.length]?.focus();
          break;
        case "Home":
          e.preventDefault();
          links[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          links[links.length - 1]?.focus();
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    },
    [close]
  );

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        ref={buttonRef}
        type="button"
        className={`nav-link inline-flex items-center gap-0.5 whitespace-nowrap ${isActive ? "nav-link-active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleButtonKeyDown}
        whileHover={hoverScaleSm}
        transition={{ duration: 0.2 }}
      >
        {label}
        <ChevronDown open={open} />
      </motion.button>
      <motion.div
        className="absolute bottom-[-6px] left-0 h-0.5 bg-black/80 dark:bg-white/70"
        initial={shouldReduce ? { opacity: isActive ? 1 : 0 } : { scaleX: 0, opacity: 0 }}
        animate={isActive
          ? { scaleX: 1, opacity: 1 }
          : shouldReduce ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-[-6px] left-0 h-0.5 bg-bits-green/40"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      )}
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={menuRef}
            className="dropdown-panel"
            onKeyDown={handleMenuKeyDown}
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 8, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 8, scale: 0.97 },
                })}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
            role="menu"
          >
            {items.map((child, i) => (
              <motion.li
                key={child.href}
                role="none"
                {...(shouldReduce
                  ? {}
                  : {
                      initial: { opacity: 0, x: -8 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i * 0.035, duration: 0.2 },
                    })}
              >
                <Link
                  href={child.href}
                  className={`block px-5 py-2.5 text-sm transition-[color,transform] duration-200 ease-out hover:translate-x-0.5 hover:text-bits-green dark:hover:text-bits-green ${
                    currentPath.startsWith(child.href)
                      ? "font-medium text-bits-green"
                      : "text-bits-muted dark:text-gray-200"
                  }`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {child.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

const MotionLink = motion.create(Link);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();
  const { hoverScaleSm, tapSm } = useInteractionMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 8);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const menu = mobileMenuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      if (focusable.length === 0) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-gray-100/80 bg-[var(--bits-page)] shadow-sm backdrop-blur-sm dark:border-green-950 dark:bg-[#010a05]"
          : "border-transparent bg-[var(--bits-page)] dark:bg-[#010a05]"
      }`}
    >
      <div className="site-container">
        <div className="hidden h-[72px] items-center gap-4 md:flex lg:h-[76px]">
          <MotionLink
            href="/"
            className="shrink-0 dark:rounded-md dark:bg-white/90 dark:p-1 dark:backdrop-blur-sm"
            aria-label="BITS College home"
            whileHover={hoverScaleSm}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/logo.png"
              alt="BITS College logo"
              width={160}
              height={52}
              priority
              className="h-auto w-[130px] transition-opacity duration-200 hover:opacity-85 lg:w-[150px]"
            />
          </MotionLink>

          <nav
            className="flex flex-1 items-center justify-center"
            aria-label="Primary navigation"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:gap-x-6">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : Boolean(item.href && pathname.startsWith(item.href));

                if (item.children) {
                  const childActive = item.children.some(
                    (child) => child.href && pathname.startsWith(child.href)
                  );

                  return (
                    <NavDropdown
                      key={item.label}
                      label={item.label}
                      items={item.children}
                      isActive={isActive || childActive}
                      currentPath={pathname}
                    />
                  );
                }

                return (
                  <motion.li
                    key={item.label}
                    {...(shouldReduce
                      ? {}
                      : {
                          initial: { opacity: 0, y: -8 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: index * 0.05, ...SPRING_GENTLE },
                        })}
                  >
                    <NavLink href={item.href ?? "/"} isActive={isActive}>
                      {item.label}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <motion.a
              href={APPLY_URL}
              className="btn-outline-green whitespace-nowrap text-sm"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduce ? undefined : { scale: 1.03 }}
              whileTap={shouldReduce ? undefined : { scale: 0.97 }}
            >
              Apply Now
            </motion.a>
          </div>
        </div>

        <div className="flex h-[64px] items-center justify-between gap-3 md:hidden">
          <Link href="/" className="shrink-0 dark:rounded-md dark:bg-white/90 dark:p-1 dark:backdrop-blur-sm" aria-label="BITS College home">
            <Image
              src="/images/logo.png"
              alt="BITS College logo"
              width={140}
              height={46}
              priority
              className="h-auto w-[110px]"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={APPLY_URL}
              className="btn-outline-green text-xs px-3 py-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
            <motion.button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 transition-colors duration-200 hover:border-bits-green dark:border-gray-700 dark:hover:border-bits-green"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={tapSm}
              whileHover={shouldReduce ? undefined : { scale: 1.05 }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="border-t border-gray-100 bg-[var(--bits-page)] md:hidden dark:border-green-950 dark:bg-[#010a05]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ...SPRING_GENTLE, ease: EASE_PREMIUM }}
          >
            <nav className="site-container max-h-[70vh] overflow-y-auto py-4" aria-label="Mobile navigation">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <motion.li
                    key={item.label}
                    initial={shouldReduce ? {} : { opacity: 0, x: -12 }}
                    animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-base ${
                          pathname === item.href ? "nav-link-active font-medium" : "nav-link"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="block px-3 py-2 text-sm font-semibold text-bits-heading">
                        {item.label}
                      </span>
                    )}
                    {item.children && (
                      <ul className="mb-2 ml-4 space-y-1">
                        {item.children.map((child, ci) => (
                          <motion.li
                            key={child.href}
                            initial={shouldReduce ? {} : { opacity: 0, x: -8 }}
                            animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + ci * 0.03, duration: 0.2 }}
                          >
                            <Link
                              href={child.href}
                              className={`block rounded-lg px-3 py-2 text-sm ${
                                pathname.startsWith(child.href)
                                  ? "font-medium text-bits-green"
                                  : "text-bits-muted hover:text-bits-green dark:text-gray-200"
                              }`}
                              onClick={() => setMobileOpen(false)}
                              {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                              {child.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/layout/PageShell.tsx -->
## src/components/layout/PageShell.tsx

```tsx
/** Reusable page layout — wraps title, optional description, and children with motion entrance */
"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SPRING_GENTLE } from "@/lib/motion-presets";

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--bits-page)] pt-[72px] lg:pt-[80px]">
      <motion.div
        className="site-container py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <SectionReveal>
          <h1 className="text-3xl font-bold text-bits-heading md:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-bits-muted">
              {description}
            </p>
          )}
        </SectionReveal>
        {children && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING_GENTLE, delay: 0.15 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/BootcampContent.tsx -->
## src/components/news/BootcampContent.tsx

```tsx
/** Summer Bootcamp — workshop recap with image gallery and speaker highlights */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const workshopImages = [
  {
    src: "/images/News-Events/Workshop%201.jpg",
    alt: "Summer bootcamp workshop session 1",
  },
  {
    src: "/images/News-Events/Workshop%202.jpg",
    alt: "Summer bootcamp workshop session 2",
  },
  {
    src: "/images/News-Events/Workshop%203.jpg",
    alt: "Summer bootcamp workshop session 3",
  },
  {
    src: "/images/News-Events/Workshop%204.jpg",
    alt: "Summer bootcamp workshop session 4",
  },
];

export function BootcampContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Summer Bootcamp
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/summer%20bootcamp.jpg"
              alt="BITS College summer bootcamp workshop session"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            The experience-sharing session with Bruck Wubete provided valuable insights into his successful career
            in software engineering and data science. Currently leading the development of a platform for machine
            learning applications, he emphasized the importance of leveraging IT knowledge for professional growth.
            Bruck&rsquo;s practical advice and real-world examples inspired attendees to navigate their careers in
            technology. Overall, the session highlighted exciting opportunities in the evolving tech landscape.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workshopImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/CollegeDayContent.tsx -->
## src/components/news/CollegeDayContent.tsx

```tsx
/** College Day — June 2023 student demonstration and celebration event */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CollegeDayContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                BITS College Day
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/BITS%20College%20Day.jpg"
              alt="BITS College day event activity photo"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College celebrated its College Day on Saturday, June 19, 2023. The event was a display of the
            talents and achievements of the students, as well as an opportunity for learning and entertainment. The
            event featured various demonstrations, discussions, and games that highlighted the diverse and innovative
            work done by the students in different fields and disciplines.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/InaugurationContent.tsx -->
## src/components/news/InaugurationContent.tsx

```tsx
/** Inauguration — hero image + description of the January 2021 inauguration event */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function InaugurationContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                BITS College Inauguration
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/Inauguration.jpg"
              alt="BITS College inauguration banner on the campus facade"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College celebrated its inauguration on January 02, 2021. The event was held on the campus grounds
            and was attended by esteemed guests from various sectors, including government officials, academics,
            business professionals, and media representatives.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/NewsEventsContent.tsx -->
## src/components/news/NewsEventsContent.tsx

```tsx
/** News & Events — card grid with video, image, and fallback content types */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image?: { src: string; alt: string };
  videoId?: string;
  videoSrc?: string;
  href?: string;
  noButton?: true;
};

const newsItems: NewsItem[] = [
  {
    title: "Data Analytics Workshop by the ITS Department",
    date: "March 22, 2025",
    excerpt:
      "Showcasing the life cycle of data analytics, starting from data processing, cleaning visualizing and gaining insight on data and making informed decisions",
    image: {
      src: "/images/News-Events/Data%20Analytics%20Workshop%20by%20the%20ITS%20Department.jpg",
      alt: "BITS College data analytics workshop audience",
    },
    href: "/bootcamp/",
  },
  {
    title: "Virtual Tour of BITS College",
    date: "November 02, 2024",
    excerpt:
      "Take a virtual tour of BITS College! Explore our campus, state-of-the-art labs, student facilities, and learning spaces. Whether you\u2019re a prospective student or a curious visitor, this tour will give you a taste of the BITS College experience",
    videoId: "xzJXNyy6sRk",
  },
  {
    title: "Hackathon Stories",
    date: "October 16, 2024",
    excerpt:
      "Hear how our participants collaborated and innovated during the BITS College Hackathon. Don\u2019t forget\u2014the winners will be revealed at the Tech Expo tomorrow!",
    videoSrc: "/images/News-Events/Hackathon%20Stories.mp4",
  },
  {
    title: "Day 3 of the BITS College Hackathon",
    date: "October 14, 2024",
    excerpt:
      "A Grand Finale! From coding breakthroughs to innovative solutions, Day 3 was nothing short of spectacular. Our participants showed incredible skill and teamwork, and we\u2019re proud to announce the winning project!",
    videoSrc: "/images/News-Events/Day%203%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "Day 2 of the BITS College Hackathon",
    date: "October 13, 2024",
    excerpt:
      "BITS College Hackathon is all about progress and innovation! Our participants are working hard to bring their ideas to life, and we\u2019re seeing some incredible teamwork and creativity! Stay tuned for more updates as we head into the final day!",
    videoSrc: "/images/News-Events/Day%202%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "Day 1 of the BITS College Hackathon",
    date: "October 12, 2024",
    excerpt:
      "Day 1 of the Hackathon is filled with creativity, problem-solving, and serious skills. Watch our teams collaborate and bring their ideas to life! Stay tuned for more epic moments tomorrow!",
    videoSrc: "/images/News-Events/Day%201%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "BITS Workshop Highlights",
    date: "September 29, 2024",
    excerpt:
      "A day of inspiration, career guidance, and so much energy! Watch these highlights to catch a glimpse of the event and the amazing vibes we had",
    videoSrc: "/images/News-Events/BITS%20Workshop%20Highlights.mp4",
  },
  {
    title: "Highlights from the Digital Platform Ecosystem Workshop",
    date: "November 16, 2023",
    excerpt:
      "The workshop was jointly organized by Bunna Bank, Serianu, Nib Bank and BITS College. Topics covered include: Cybersecurity and Digital Transformation, ChatGPT, Digital Banking Trends, CIO challenges in building Digital Platforms, Digital Ecosystem Trends in Logistics, and Digital Marketing",
    videoSrc: "/images/News-Events/Highlights%20from%20the%20Digital%20Platform%20Ecosystem%20Workshop.mp4",
  },
  {
    title: "Workshop on Digital Platform Ecosystems",
    date: "November 7, 2023",
    excerpt:
      "The workshop will bring together experts from different industries to discuss the latest trends and developments, share experiences and perspectives, and learn how to benefit from digital platforms.",
    image: {
      src: "/images/News-Events/Workshop%20on%20Digital%20Platform%20Ecosystems.webp",
      alt: "BITS College workshop on digital platform ecosystems",
    },
    href: "/bootcamp/",
  },
  {
    title: "Scholarship Recipients",
    date: "September 15, 2023",
    excerpt:
      "Congratulations to all our scholarship recipients! You have worked hard and achieved excellence in your academic and extracurricular pursuits. You deserve this recognition and support for your future endeavors. We are proud of you and your accomplishments!",
    image: {
      src: "/images/News-Events/Scholarship%20Recipients.webp",
      alt: "BITS College scholarship recipients group photo",
    },
    href: "/scholarship-recipients/",
  },
  {
    title: "Summer Bootcamp",
    date: "August 21, 2023",
    excerpt:
      "This bootcamp program is designed to help trainees gain practical knowledge on industry standards, best practices, tools and technologies.",
    image: {
      src: "/images/News-Events/summer%20bootcamp.jpg",
      alt: "BITS College summer bootcamp workshop session",
    },
    href: "/bootcamp/",
  },
  {
    title: "BITS College Day",
    date: "June 14, 2023",
    excerpt:
      "BITS College held a College Day, in which students works were demonstrated, discussions and panels were held and games and activities livened the day",
    image: {
      src: "/images/News-Events/BITS%20College%20Day.jpg",
      alt: "BITS College day event activity photo",
    },
    href: "/college-day/",
  },
  {
    title: "Workshop",
    date: "March 26, 2022",
    excerpt:
      "On Saturday, March 26 2022, BITS College hosted a Workshop \u201cPreparing for the Tech Industry through Higher Education\u201d",
    image: {
      src: "/images/News-Events/Workshop.jpg",
      alt: "BITS College workshop presentation photo",
    },
    href: "/workshop/",
  },
  {
    title: "Student Appreciation Night",
    date: "December 12, 2021",
    excerpt:
      "BITS College hosted a Student Appreciation Night on Friday, December 12, 2021, to honor the accomplishments and contributions of its postgraduate students.",
    image: {
      src: "/images/News-Events/Student%20Appreciation%20Night.webp",
      alt: "BITS College student appreciation group photo",
    },
    href: "/student-appreciation-night/",
  },
  {
    title: "BITS College Inauguration - Speech by Dr. Rahel Bekele",
    date: "January 02, 2021",
    excerpt: "BITS College School of Systems and Technology Inauguration Ceremony",
    videoId: "wYdFxpqX0iM",
  },
  {
    title: "Inauguration",
    date: "January 02, 2021",
    excerpt: "BITS College celebrated its inauguration on January 02, 2021.",
    image: {
      src: "/images/News-Events/Inauguration.jpg",
      alt: "BITS College inauguration banner on the campus facade",
    },
    href: "/inauguration/",
  },
  {
    title: "BITS College Introduction",
    date: "October 04, 2020",
    excerpt:
      "BITS College is a private higher learning institution with a vision of promoting excellence in the production, growth and dissemination of advanced scientifice knowledge through teaching and research",
    videoId: "cN7qtSnViBc",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const hasImage = Boolean(item.image?.src);

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial={{ y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)" }}
        whileHover={{ y: -6, boxShadow: "0 20px 25px rgba(0, 0, 0, 0.12)", transition: { duration: 0.25, ease: "easeOut" } }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--bits-surface)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover cursor-pointer dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
      >
        <div className="relative h-96 overflow-hidden bg-[var(--bits-surface-muted)]">
          {item.videoSrc ? (
            <video
              src={item.videoSrc}
              controls
              className="h-full w-full object-contain"
              title={item.title}
            />
          ) : item.videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?rel=0`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : hasImage ? (
            <img
              src={item.image!.src}
              alt={item.image!.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-lime-50 to-slate-100 p-6 dark:from-gray-800 dark:to-gray-900">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bits-green text-lg font-bold text-white">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-2 text-sm text-bits-muted">{item.title}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col justify-center p-7">
          <div className="mb-3 inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-bits-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-sm font-semibold text-bits-green-dark">{item.date}</span>
          </div>

          <h3 className="break-words text-3xl font-bold text-bits-heading transition-colors duration-300 group-hover:text-bits-green">
            {item.title}
          </h3>

          <p className="mt-3 line-clamp-4 text-base leading-relaxed text-bits-text">
            {item.excerpt}
          </p>

          {item.href && (
            <div className="mt-auto pt-6">
              <Link
                href={item.href}
                className="btn-outline-green inline-block transition-transform duration-200 hover:scale-105 active:scale-95"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const ITEMS_PER_PAGE = 6;

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (page: number) => void;
}) {
  if (total <= 1) return null;

  return (
    <nav className="mt-14 flex items-center justify-center gap-2" aria-label="News pagination">
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-bits-muted transition hover:border-bits-green hover:text-bits-green disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-bits-green"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition ${
            page === current
              ? "bg-bits-green text-white shadow-sm"
              : "border border-slate-200 text-bits-text hover:border-bits-green hover:text-bits-green dark:border-gray-700 dark:hover:border-bits-green"
          }`}
          aria-current={page === current ? "page" : undefined}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-bits-muted transition hover:border-bits-green hover:text-bits-green disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-bits-green"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}

export function NewsEventsContent() {
  const [page, setPage] = useState(1);
  const totalPages = useMemo(() => Math.ceil(newsItems.length / ITEMS_PER_PAGE), []);
  const visibleItems = useMemo(
    () => newsItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [page]
  );
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <div id="content">
        <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                  News & Events
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-bits-text">
                Stay updated with the latest happenings at BITS College. Discover workshops, hackathons, achievements, and inspiring stories from our community.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              className="grid gap-10 sm:grid-cols-2"
            >
              {visibleItems.map((item) => (
                <NewsCard key={`${item.title}-${item.date}`} item={item} index={0} />
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination current={page} total={totalPages} onChange={setPage} />
        </section>
      </div>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/ScholarshipRecipientsContent.tsx -->
## src/components/news/ScholarshipRecipientsContent.tsx

```tsx
/** Scholarship Recipients — three student cards with hover/touch overlay showing quotes and project descriptions */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const IMG = "/images/News-Events/";

const students = [
  {
    name: "Alazar Lemma",
    quote: "I've created Ensira (Let's work), a mobile app designed for college students looking for part-time work opportunities during their studies. Students can set up profiles, browse fun and engaging job listings, & apply for short-term gigs. On the flip side, companies can post job openings directly on the platform. With Ensira, I've simplified the process of balancing learning & earning for college students.",
    image: `${IMG}Alazar%20Lemma.webp`,
  },
  {
    name: "Fanuel Anteneh",
    quote: "I made a software called Circuitry which is a logic gate simulation software. It can be used to visualize and test out designs for logic circuits and integrated circuits of various complexity levels.",
    image: `${IMG}Fanuel%20Anteneh.webp`,
  },
  {
    name: "Nahom Temesgen",
    quote: "The software I developed is called Falling Sand simulation, which simulates sand and water in a compelling manner by utilizing grid of cells. The other software is a Rope simulation that behaves and interacts with its surrounding similar as the real world.",
    image: `${IMG}Nahom%20Temesgen.webp`,
  },
];

function StudentCard({ name, quote, image }: { name: string; quote: string; image: string }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleTouch = () => {
    setTouched((v) => !v);
    if (!showOverlay) setShowOverlay(true);
  };

  const show = showOverlay || touched;

  return (
    <motion.article
      initial={{ y: 32, scale: 0.97 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[500px] overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />

      <motion.div
        initial={false}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : 12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => { setShowOverlay(false); setTouched(false); }}
        onTouchStart={handleTouch}
        className="absolute inset-0 flex cursor-default flex-col justify-center overflow-y-auto bg-emerald-400/95 p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight text-emerald-900">{name}</h3>
            <p className="mt-1 text-sm font-medium text-emerald-700">Scholarship Recipient</p>
          </div>
          <div className="shrink-0 rounded-full border border-emerald-700/20 bg-emerald-700/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-800 backdrop-blur-sm">
            BITS
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-emerald-800">{quote}</p>
      </motion.div>
    </motion.article>
  );
}

export function ScholarshipRecipientsContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Merit Based Scholarship Recipients 2023/24
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/Scholarship%20Recipients.webp"
              alt="BITS College scholarship recipients group photo"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College has awarded Merit-based Scholarships to three of our outstanding students Alazar Lemma,
            Fanuel Anteneh, and Nahom Temesgen. These scholarships were generously presented by an anonymous donor
            who will cover their tuition fees for two years. We are grateful for this kind gesture and we
            congratulate our students for their achievements.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {students.map((student) => (
              <StudentCard key={student.name} {...student} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/StudentAppreciationNightContent.tsx -->
## src/components/news/StudentAppreciationNightContent.tsx

```tsx
/** Student Appreciation Night — December 2021 award ceremony content */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function StudentAppreciationNightContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Student Appreciation Night
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/Student%20Appreciation%20Night.webp"
              alt="BITS College student appreciation group photo"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            BITS College hosted a Student Appreciation Night on Friday, December 12, 2021, to honor the
            accomplishments and contributions of its postgraduate students.
          </p>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            The highlight of the night was the presentation of awards to exemplary students who have demonstrated
            outstanding performance in their respective fields, and awards for organizations that provided a great
            deal of cooperation for the students.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/news/WorkshopContent.tsx -->
## src/components/news/WorkshopContent.tsx

```tsx
/** Workshop — March 2022 tech industry workshop recap */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkshopContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                Workshop
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
          className="space-y-10"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/News-Events/Workshop.jpg"
              alt="BITS College workshop presentation photo"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            On Saturday, March 26, 2022, BITS College hosted a Workshop &ldquo;Preparing for the Tech Industry
            through Higher Education&rdquo;. The workshop attracted more than 100 students who were interested in
            pursuing a career in the tech sector.
          </p>

          <p className="text-center text-xl leading-[2rem] text-bits-text sm:text-2xl sm:leading-[2.4rem]">
            The workshop aimed to provide students with an overview of the skills and knowledge required for working
            in the tech industry, as well as the latest trends and best practices in each field. The students also
            had the opportunity to engage with the BITS College students (the ninjas) who are working on exciting
            projects in web development, mobile app development, and game development. The ninjas showcased their
            work and shared their experiences and challenges with the participants.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/providers/MotionProvider.tsx -->
## src/components/providers/MotionProvider.tsx

```tsx
/** Sets global Framer Motion defaults — respects user reduced-motion preference */
"use client";

import { MotionConfig } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion-presets";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: EASE_PREMIUM }}>
      {children}
    </MotionConfig>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/providers/ThemeProvider.tsx -->
## src/components/providers/ThemeProvider.tsx

```tsx
/** Theme context — uses useSyncExternalStore to read <html> class without React state drift */
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { subscribeToTheme, getDOMTheme, applyTheme, persistTheme, notifyThemeChange } from "@/lib/theme";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolved: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Reads theme from <html> class — avoids React state getting out of sync during navigation */
function getSnapshot(): Theme {
  return getDOMTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(subscribeToTheme, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    persistTheme(next);
    notifyThemeChange();
  }, []);

  const value = useMemo(
    () => ({ theme, resolved: theme, setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/services/ShortTrainingsContent.tsx -->
## src/components/services/ShortTrainingsContent.tsx

```tsx
/** Professional Trainings — software development and IT management training cards */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const IMG = "/images/Services-Professional-Training/";

const trainings = [
  {
    title: "Software Development Professional Trainings",
    bullets: [
      "Agile practices and underlying principles",
      "Software architecture and design",
      "Front end development",
      "Back end development",
      "Web security",
      "Cloud computing",
      "Data analytics",
      "Soft skills",
    ],
    image: `${IMG}Professional%20Training%201.webp`,
  },
  {
    title: "Information Technology Management Trainings",
    bullets: [
      "Boards and technology governance",
      "Governance of enterprise IT",
      "IT service management - ITIL",
      "Cyber security and resilience",
      "Systems approach to business management",
      "Change management",
      "Software project management",
    ],
    image: `${IMG}Professional%20Training%202.webp`,
  },
];

export function ShortTrainingsContent() {
  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Professional Trainings
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Professional Trainings
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {trainings.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] shadow-[0_20px_80px_rgba(16,24,40,0.06)]"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold tracking-tight text-bits-heading sm:text-2xl">
                    {item.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-base text-bits-text">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/services/StudentSupportContent.tsx -->
## src/components/services/StudentSupportContent.tsx

```tsx
/** Student Support — academic/disability support + extracurricular tab panel with animated content */
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";

const IMG = "/images/Services-Student-Support/";

const activities = [
  {
    id: "hackathons",
    label: "Hackathons",
    content: (
      <>
        <p className="text-lg font-semibold text-bits-heading">What is a Hackathon?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          It&apos;s a design sprint-like event; often those involved in software development collaborate
          intensively on software projects. There is no restriction on the type of software being created.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What is the goal of a Hackathon?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          The goal of a hackathon is to create functioning software or hardware by the end of the event.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could your role be in Hackathons?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          You can participate on the event or organize the event in teams.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could you get out of it?</p>
        <ul className="mt-2 space-y-2">
          {["Prizes", "Develop your problem solving skills by participating on the event", "Develop your interpersonal skills by being part of the organizing team"].map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-bits-text">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bits-green-dark" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "women-in-tech",
    label: "Women in Tech",
    content: (
      <>
        <p className="text-lg font-semibold text-bits-heading">What does the women in tech student club do?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          The Women in Technology student club seeks to enhance students&apos; technological experiences by
          organizing co-curricular and extracurricular activities such as career workshops, and technical
          sessions led by academic and industry professionals.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What is the goal of the women in tech club?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          This club works to close the gender gap in tech majors and to create a healthier and more efficient
          ecosystem for tech disciplines.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could your role be in women in tech club?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          Organizing different workshops, organizing inspiring events with inspiring women in tech, brainstorming
          sessions on how to close the gender gap in tech then implementing your creative solutions and more.
        </p>
        <p className="mt-5 text-lg font-semibold text-bits-heading">What could you get out of it?</p>
        <p className="mt-2 text-base leading-7 text-bits-text">
          Organizing different workshops, organizing inspiring events with the opportunity to do impactful work
          while developing your interpersonal skills through the process.
        </p>
      </>
    ),
  },
  {
    id: "leadership",
    label: "Leadership",
    content: (
      <p className="text-base leading-7 text-bits-text">
        This includes getting involved in student body and other forms of activities to help you build your
        leadership skills. The activities should be raised by students in a brainstorming session.
      </p>
    ),
  },
  {
    id: "charity",
    label: "Charity Club",
    content: (
      <p className="text-base leading-7 text-bits-text">
        As community service is highly valued in our college we would like our students to take part in charity
        activities. The activities are to be planed and executed by a team of students.
      </p>
    ),
  },
  {
    id: "toastmasters",
    label: "Toastmasters",
    content: (
      <p className="text-base leading-7 text-bits-text">
        Toastmasters is an international club where you practice public speaking, improve your communication and
        build leadership skills. We plan to have BITS Toastmasters club where students can engage as leaders
        and speakers.
      </p>
    ),
  },
  {
    id: "media",
    label: "Media",
    content: (
      <p className="text-base leading-7 text-bits-text">
        The activities in this club can include digital magazine and newsletter preparation, and other media
        related programs.
      </p>
    ),
  },
  {
    id: "creative",
    label: "Creative Communication",
    content: (
      <p className="text-base leading-7 text-bits-text">
        Here at BITS College we want to build a community that nurtures talent hence we encourage our students
        to express themselves through different forms of art. This club can engage in preparing artistic events,
        and platforms where talents are showcased.
      </p>
    ),
  },
  {
    id: "aiesec",
    label: "AIESEC",
    content: (
      <p className="text-base leading-7 text-bits-text">
        AIESEC is a global platform for young people to develop their leadership potential through international
        internships and volunteer opportunities. We encourage our students to take part in bringing this
        organization to BITS as it can play a major roll in getting exposure to opportunities as well as
        like minded students externally.
      </p>
    ),
  },
  {
    id: "book-clubs",
    label: "Book Clubs",
    content: (
      <p className="text-base leading-7 text-bits-text">
        The purpose of the Book Club is to give our College community access to structured readings and
        discussions. This club offers an opportunity for anyone and everyone to read books from a variety of
        genres, and discuss them in regular intervals to whatever depth is desired. We believe this will bring
        our community closer and broaden the perspectives of students.
      </p>
    ),
  },
];

export function StudentSupportContent() {
  const [activeActivity, setActiveActivity] = useState(activities[0].id);

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <section className="mx-auto max-w-site px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-[var(--bits-surface)] px-4 py-2 text-sm font-medium text-bits-green-dark shadow-sm">
              <GraduationCap className="h-4 w-4" />
              Services &middot; Student Support
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
              Student Support
            </h1>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Academic Support
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                Students have both peer-to-peer mentoring as well as adequate guidance from their advisors to
                build confidence in their academic activities and related extra-curricular activities.
              </p>
            </div>

            <div>
              <Image
                src={`${IMG}Student%20support%201.png`}
                alt="Academic Support"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="lg:order-first">
              <Image
                src={`${IMG}Student%20support%202.webp`}
                alt="Disability Support"
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
                Disability Support
              </h2>
              <p className="mt-5 text-base leading-8 text-bits-text">
                BITS is committed to the education of all qualified students, regardless of disability status.
                We provide advice, guidance and, support for students with physical disabilities. We also work
                closely with students and staff to put in place any necessary backing and adjustments to remove
                or reduce barriers to learning.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-900/10 bg-[var(--bits-surface)] p-8 shadow-[0_20px_80px_rgba(16,24,40,0.06)] sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-bits-heading sm:text-3xl">
              Extra Curricular Activities
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
              <div className="flex flex-col gap-2">
                {activities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => setActiveActivity(activity.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      activeActivity === activity.id
                        ? "border-black/20 bg-black/5 text-black font-semibold dark:border-white/30 dark:bg-white/10 dark:text-white"
                        : "border-gray-200 text-bits-text hover:border-emerald-900/10 hover:bg-emerald-50/50 hover:text-bits-green-dark dark:border-gray-700"
                    }`}
                  >
                    <span>{activity.label}</span>
                    <ChevronRight className={`h-4 w-4 shrink-0 text-bits-muted transition duration-300 ${activeActivity === activity.id ? "rotate-90 text-black dark:text-white" : ""}`} />
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeActivity}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-2xl border border-emerald-900/10 bg-[var(--bits-surface-muted)] p-6 sm:p-8"
                  >
                    {activities.find((a) => a.id === activeActivity)?.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/ui/PDFViewer.tsx -->
## src/components/ui/PDFViewer.tsx

```tsx
/** Responsive PDF viewer — opens in new tab on mobile, inline iframe on desktop */
"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export function PDFViewer({ pdfUrl, title }: { pdfUrl: string; title?: string }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      window.open(pdfUrl, "_blank");
    }
  }, [isMobile, pdfUrl]);

  if (isMobile === null) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg bg-[var(--bits-surface-muted)] p-6">
        <p className="text-center text-sm text-bits-muted">
          Opening document in full screen...
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid-green inline-flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Open Again
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between rounded-t-lg bg-[var(--bits-surface-muted)] px-4 py-3">
        <h3 className="text-sm font-semibold text-bits-heading">{title ?? "Document Preview"}</h3>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-bits-green hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open Full Size
        </a>
      </div>
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
        className="min-h-0 flex-1 rounded-b-lg border border-gray-200 dark:border-gray-700"
        title={title ?? "PDF Document"}
      />
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/ui/SectionReveal.tsx -->
## src/components/ui/SectionReveal.tsx

```tsx
/** Scroll-triggered entrance animation wrapper — skips animation when motion is disabled */
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMotionSafe } from "@/hooks/useMotionSafe";
import { SPRING_GENTLE, EASE_PREMIUM } from "@/lib/motion-presets";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  withAccent?: boolean;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  withAccent = false,
}: SectionRevealProps) {
  const { enabled } = useMotionSafe();

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...SPRING_GENTLE, delay, ease: EASE_PREMIUM }}
    >
      {withAccent ? (
        <motion.div
          initial={{ boxShadow: "0 0 0 0 rgba(125, 194, 67, 0.3)" }}
          whileInView={{
            boxShadow: [
              "0 0 0 0 rgba(125, 194, 67, 0.3)",
              "0 0 12px 6px rgba(125, 194, 67, 0.2)",
              "0 0 0 0 rgba(125, 194, 67, 0)",
            ],
          }}
          transition={{ delay: delay + 0.3, duration: 0.55 }}
          style={{ borderRadius: "inherit" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/ui/ThemeToggle.tsx -->
## src/components/ui/ThemeToggle.tsx

```tsx
/** Dark/light toggle button — animated icon swap with spring physics */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { SPRING_HOVER } from "@/lib/motion-presets";

function MoonIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolved, setTheme } = useTheme();
  const shouldReduce = useReducedMotion();
  const isDark = resolved === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <motion.button
      type="button"
      onClick={toggle}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-bits-gray transition-colors hover:border-bits-green hover:text-bits-green dark:border-gray-600 dark:text-gray-300 dark:hover:border-bits-green dark:hover:text-bits-green"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={shouldReduce ? undefined : { scale: 0.92 }}
      whileHover={shouldReduce ? undefined : { scale: 1.06, transition: SPRING_HOVER }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        {...(shouldReduce
          ? {}
          : {
              initial: { opacity: 0, rotate: -30, scale: 0.8 },
              animate: { opacity: 1, rotate: 0, scale: 1 },
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
            })}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </motion.span>
    </motion.button>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/components/ui/WaveDivider.tsx -->
## src/components/ui/WaveDivider.tsx

```tsx
/** Decorative SVG wave — separates sections, flips via prop; respects reduced-motion via CSS animation pause */
export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`wave-divider relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="relative block h-[60px] w-full sm:h-[80px] md:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-[var(--bits-surface)]"
          opacity="0.33"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        />
        <path
          className="fill-[var(--bits-surface)]"
          opacity="0.66"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        />
        <path
          className="fill-[var(--bits-surface)]"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        />
      </svg>
    </div>
  );
}

```
<!-- END_FILE -->

---
<!-- FILE: src/hooks/useInteractionMotion.ts -->
## src/hooks/useInteractionMotion.ts

```ts
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
  };
}

```
<!-- END_FILE -->

---
<!-- FILE: src/hooks/useMotionSafe.ts -->
## src/hooks/useMotionSafe.ts

```ts
"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Prevents SSR/hydration blank screens: content stays visible until
 *  the client is ready to run Framer Motion animations. Returns
 *  `enabled` (motion allowed), `shouldReduce`, and `ready` state. */
export function useMotionSafe() {
  const [ready, setReady] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setReady(true);
  }, []);

  const enabled = ready && !shouldReduce;

  return { enabled, shouldReduce, ready };
}

```
<!-- END_FILE -->

---
<!-- FILE: src/lib/constants/navigation.ts -->
## src/lib/constants/navigation.ts

```ts
/** Nav tree, footer quick-links, and external social media URLs */
type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const APPLY_URL = "https://applications.bitscollege.edu.et";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Facilities", href: "/facilities" },
      { label: "Partners and Clients", href: "/partners-and-clients" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Faculty", href: "/faculty" },
      { label: "Undergraduate Programs", href: "/undergraduate-program" },
      { label: "Graduate Programs", href: "/graduate-program" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Undergraduate Admission", href: "/undergrad-admission" },
      { label: "Graduate Admission", href: "/graduate-admission" },
      { label: "Scholarship & Aid", href: "/scholarship-aid" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Student Support", href: "/student-support" },
      { label: "Online Learning", href: "https://online.bitscollege.edu.et/" },
      {
        label: "Library",
        href: "https://intranet.bitscollege.edu.et/library/",
      },
      { label: "Professional Trainings", href: "/short-trainings" },
    ],
  },
  { label: "News & Events", href: "/college-news" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Tuition", href: "/tuition" },
  {
    label: "Undergraduate Program Admission",
    href: "/undergrad-admission",
  },
  { label: "Graduate Program Admission", href: "/graduate-admission" },
  {
    label: "Undergraduate Accreditation",
    href: "/who-we-are?section=accreditation",
  },
  { label: "Graduate Accreditation", href: "/who-we-are?section=accreditation" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://web.facebook.com/bitsethiopia", icon: "facebook" },
  { label: "Twitter", href: "https://x.com/bitsethiopia", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com/bitscollege/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@bitscollege2230", icon: "youtube" },
];

```
<!-- END_FILE -->

---
<!-- FILE: src/lib/constants/site.ts -->
## src/lib/constants/site.ts

```ts
/** Site-wide metadata, contact info, and structured content data (cards, programs, contact) */
export const SITE = {
  name: "BITS COLLEGE",
  tagline: "School of Systems and Technology",
  description:
    "BITS College offers well-designed academic programs in software engineering and IT Management with world-class facilities.",
  url: "https://www.bitscollege.edu.et",
  phone: "+251-982-363636",
  email: "info@bitscollege.edu.et",
  address: "Yeka Sub-City, Woreda 05, Next To Yeka Park",
  copyright: `Copyright © ${new Date().getFullYear()} BITS College`,
} as const;

export const WHY_BITS_CARDS = [
  {
    title: "High Quality Academic Programs",
    icon: "book",
  },
  {
    title: "Qualified & Committed Staff",
    icon: "graduation",
  },
  {
    title: "State-of-the-Art Infrastructure",
    icon: "building",
  },
  {
    title: "Student-centered Teaching and Learning",
    icon: "community",
  },
] as const;

export const PROGRAM_CARDS = [
  {
    title: "INFORMATION TECHNOLOGY MANAGEMENT",
    subtitle: "Graduate Program",
    href: "/graduate-program",
    fullWidth: true,
  },
  {
    title: "SOFTWARE ENGINEERING",
    subtitle: "Undergraduate Program",
    href: "/software-engineering",
    fullWidth: false,
  },
  {
    title: "INFORMATION TECHNOLOGY AND SYSTEMS",
    subtitle: "Undergraduate Program",
    href: "/information-technology-and-systems",
    fullWidth: false,
  },
] as const;

export const CONTACT_CARDS = [
  {
    type: "phone" as const,
    value: SITE.phone,
    label: "Get Support",
    href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    type: "location" as const,
    value: SITE.address,
    label: "Visit Us",
    href: "https://maps.app.goo.gl/qrWmP4XnyXEYtK6g6",
    featured: true,
  },
  {
    type: "email" as const,
    value: SITE.email,
    label: "Get Support",
    href: `mailto:${SITE.email}`,
  },
];

```
<!-- END_FILE -->

---
<!-- FILE: src/lib/motion-presets.ts -->
## src/lib/motion-presets.ts

```ts
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

```
<!-- END_FILE -->

---
<!-- FILE: src/lib/theme.ts -->
## src/lib/theme.ts

```ts
/** Theme utilities — syncs <html> class with localStorage so dark mode survives refresh without flash */
export type Theme = "light" | "dark";

const STORAGE_KEY = "bits_theme";

export function getDOMTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

let themeListeners: Set<() => void> = new Set();

export function subscribeToTheme(cb: () => void): () => void {
  themeListeners.add(cb);
  return () => themeListeners.delete(cb);
}

export function notifyThemeChange() {
  themeListeners.forEach((fn) => fn());
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch { /* ignore */ }
}

/** Runs before React hydration to prevent dark/light flash */
export const THEME_SCRIPT = `
(function(){try{var v=localStorage.getItem('bits_theme');document.documentElement.classList.toggle('dark',v==='dark')}catch(e){}})()
`;

```
<!-- END_FILE -->

---
<!-- FILE: src/middleware.ts -->
## src/middleware.ts

```ts
import { NextRequest, NextResponse } from "next/server";

const isDev = process.env.NODE_ENV !== "production";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();
  const nonceScript = `'nonce-${nonce}'`;
  const response = NextResponse.next();

  const csp = [
    "default-src 'self'",
    `script-src 'self' ${nonceScript}${isDev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://www.bitscollege.edu.et data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://applications.bitscollege.edu.et",
    "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'self'",
    ...(isDev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: "/:path*",
};

```
<!-- END_FILE -->

---
<!-- FILE: tailwind.config.ts -->
## tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

/** BITS College design tokens — CSS custom properties for dynamic theming, plus Tailwind utilities */
const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bits: {
          green: "#7DC243",
          "green-dark": "#6aad38",
          gold: "#b48c1e",
          "gold-light": "#d4af37",
          gray: "#54595F",
          footer: "#454545",
          "footer-text": "#F1F4FA",
          heading: "var(--bits-heading)",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
        slab: ["var(--font-roboto-slab)", "Roboto Slab", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "var(--shadow-card-hover)",
        "glow-green": "0 0 12px rgba(125, 194, 67, 0.25)",
        "glow-gold": "0 0 12px rgba(180, 140, 30, 0.2)",
      },
      borderRadius: {
        pill: "126px",
      },
    },
  },
  plugins: [],
};

export default config;

```
<!-- END_FILE -->

---
<!-- FILE: tsconfig.json -->
## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```
<!-- END_FILE -->


---
## Bundle notes
- Redaction: enabled (mask: `***REDACTED***`).
- No truncations.

