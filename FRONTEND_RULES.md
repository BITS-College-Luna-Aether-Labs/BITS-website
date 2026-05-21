# Frontend Rules — BITS College

## Design Fidelity

1. **Do not redesign** — match [bitscollege.edu.et](https://www.bitscollege.edu.et) layout, section order, colors, and typography.
2. Reference screenshots live in `public/sample image/`.
3. Primary brand green: `#7DC243` (Elementor/Astra source).
4. Max content width: `1200px`.

## Stack

- Next.js 15 App Router
- TypeScript (strict)
- Tailwind CSS 3
- Framer Motion 11
- **Bun** for install/scripts (do not use npm or yarn)

## Code Standards

- Reusable components under `src/components/`
- Constants in `src/lib/constants/`
- No magic strings for nav/site data
- Server Components by default; `"use client"` only when needed
- No `dangerouslySetInnerHTML` except documented theme boot script

## Performance

- `next/image` for all raster assets
- Priority loading on hero logo and student image
- Lazy load below-fold images
- No third-party script tags

## Security

See `SECURITY.md` and `policies and rules.md`.

## Theme

See `COOKIE_POLICY.md`. Toggle in header (sm+); available in mobile menu.

## Inner Pages

Dynamic routes under `src/app/[slug]/page.tsx` provide navigation stubs. Replicate each page’s full UI from its screenshot folder before removing scaffold notices.
