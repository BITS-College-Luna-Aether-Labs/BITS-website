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

## Documentation

| File | Purpose |
|------|---------|
| `SECURITY.md` | CSP, headers, XSS practices |
| `COOKIE_POLICY.md` | Theme preference storage |
| `MOTION_GUIDELINES.md` | Framer Motion rules |
| `ACCESSIBILITY_GUIDELINES.md` | WCAG checklist |
| `FRONTEND_RULES.md` | Engineering + fidelity rules |
| `DEPLOYMENT_RULES.md` | Production checklist |
| `policies and rules.md` | Source policy reference |

## Visual Reference

Screenshots: `public/sample image/`

## Build

```bash
npm run build
npm run start
```
