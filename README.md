# BITS College Frontend

Pixel-faithful Next.js rebuild of the [BITS College](https://www.bitscollege.edu.et) public website — same visual identity, modern App Router engineering.

**Author:** [NathenaelTamirat](https://github.com/NathenaelTamirat)

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) · React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 · CSS variables (light/dark) |
| Motion | Framer Motion 11 |
| Icons | Lucide React + custom SVGs |
| Package manager | Bun (`bun.lock`) |
| Deploy | Docker (Bun) · Nginx · Certbot |

**Dev / prod port:** `3333`  
**No database, auth, or CMS** — copy lives in TypeScript; media under `public/images/`.

## Quick start

```bash
bun install
bun run dev
```

Open [http://localhost:3333](http://localhost:3333).

If you see an application error or a blank/unstyled page, clear the Next.js cache:

```bash
bun run dev:clean
```

## Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Wipe `.next`, start Next on `:3333` |
| `bun run build` | Production build |
| `bun run start` | Serve production on `:3333` |
| `bun run lint` | ESLint (`next lint`) |
| `bun run test:visual` | Playwright overflow / hero checks (server must be on `:3333`) |
| `bun run extract:live` | Extract live-site DOM/styles for parity |

## Project structure

```
src/
  app/              # Routes (home, dedicated pages, [slug], APIs)
  components/       # Domain UI (home, about, academics, …)
  hooks/            # Motion safety helpers
  lib/              # Constants, theme, motion presets, error script
  fonts/            # Self-hosted Open Sans, Roboto Slab, Playfair
  middleware.ts     # CSP nonce + policy
public/             # images, site.webmanifest, llms.txt, robots.txt
scripts/            # Playwright visual / live-DOM tooling
nginx/              # Reverse-proxy configs for Docker
DOCS/               # Architecture, design, security, deployment
```

## Documentation

Full docs (audited against source, July 2026):

| Document | Contents |
|---|---|
| [DOCS/README.md](./DOCS/README.md) | Doc map & orientation |
| [ARCHITECTURE.md](./DOCS/ARCHITECTURE.md) | System design, routing, providers, data flow |
| [DESIGN_SYSTEM.md](./DOCS/DESIGN_SYSTEM.md) | Brand tokens, typography, motion, UI patterns |
| [TECHNICAL_DOCUMENTATION.md](./DOCS/TECHNICAL_DOCUMENTATION.md) | Routes, components, APIs, assets |
| [SECURITY.md](./DOCS/SECURITY.md) | CSP, headers, PDF allowlist |
| [DEPLOYMENT.md](./DOCS/DEPLOYMENT.md) | Docker / Nginx / Certbot |

## Build & Docker

```bash
bun run build
bun run start
```

For production containers, see [DOCS/DEPLOYMENT.md](./DOCS/DEPLOYMENT.md).  
**Note:** the Dockerfile expects Next `output: "standalone"` — confirm that is set in `next.config.ts` before `docker compose build`.

## License

See [LICENSE](./LICENSE) — content and design are property of BITS College.

---

*Frontend authored by **NathenaelTamirat**.*
