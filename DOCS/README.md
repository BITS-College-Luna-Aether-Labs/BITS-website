# BITS College Frontend — Documentation

Documentation for the public marketing site rebuild of [bitscollege.edu.et](https://www.bitscollege.edu.et).

| | |
|---|---|
| **Package** | `bits-college-frontend@1.0.0` |
| **Stack** | Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion 11 · Bun |
| **Runtime port** | `3333` |
| **Author** | [NathenaelTamirat](https://github.com/NathenaelTamirat) |
| **Audited against source** | July 2026 |

---

## Document map

| Document | Purpose |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System shape, routing, providers, data flow, deploy topology |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Brand tokens, typography, motion, layout patterns, UI primitives |
| [TECHNICAL_DOCUMENTATION.md](./TECHNICAL_DOCUMENTATION.md) | Routes, components, APIs, constants, assets, tooling |
| [SECURITY.md](./SECURITY.md) | CSP, headers, PDF allowlist, threat model |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Docker / Nginx / Certbot production setup |

---

## Quick orientation

This is a **content-driven college homepage** with no database, no auth, and no CMS. Pages are React components fed by TypeScript constants and static files under `public/images/`.

```
Internet → Nginx (80/443) → Next.js app (:3333)
                              ├── SSR / static pages
                              ├── /api/pdf   (allowlisted accreditation PDFs)
                              └── /api/error (client error beacon)
```

Local start:

```bash
bun install
bun run dev        # http://localhost:3333
```

- Architecture decisions → **ARCHITECTURE.md**
- Visual / brand rules → **DESIGN_SYSTEM.md**
- Route & API reference → **TECHNICAL_DOCUMENTATION.md**

---

*Documentation maintained by **NathenaelTamirat**.*
