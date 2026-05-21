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
- **Exception:** A minimal inline boot script in `layout.tsx` applies theme class before paint to prevent flash. It reads only `bits_theme` from `localStorage` / server default — no external input.
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
