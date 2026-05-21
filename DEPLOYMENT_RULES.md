# Deployment Rules — BITS College Frontend

## Hosting Targets

Recommended: **Vercel**, **Netlify**, or **Cloudflare Pages** — all support Next.js, TLS, and security headers.

## Pre-deploy Checklist

1. `bun run build` succeeds with zero errors
2. `bun run lint` passes
3. Environment variables reviewed (no secrets in client bundle)
4. HTTPS enforced; HSTS active (configured in `next.config.ts`)
5. `npm audit` — address high/critical issues
6. Lighthouse: Performance, Accessibility, SEO, Best Practices reviewed

## Build Commands

```bash
bun install
bun run build
bun run start
```

## Environment

| Variable | Required | Notes |
|----------|----------|-------|
| `NODE_ENV` | Auto | `production` on deploy |

No public API keys required for static homepage.

## Assets

- Local images in `public/images/`
- Remote images allowed only from `www.bitscollege.edu.et` (see `next.config.ts`)

## CSP in Production

- `'unsafe-eval'` is **disabled** in production CSP
- Verify no inline scripts beyond theme boot block

## Rollback

Use platform-native instant rollback (Vercel/Netlify deployment history).

## Domain

Point `www.bitscollege.edu.et` (or staging subdomain) to deployment after stakeholder visual sign-off against reference screenshots.

