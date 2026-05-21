# Automated Code Scan — CODE_ANALYSIS

Date: 2026-05-22

This file summarizes an automated scan across the repository for common issues, sensitive artifacts, and points requiring manual review. This is not a full manual "every line" audit but an automated pass that highlights likely hotspots to focus manual review on.

## Summary
- Secrets / API keys: No direct secrets found in source files. Found `process.env` usage for `NODE_ENV` and `BASE_URL` (expected).
- Generated files tracked: `.next/` and possibly `package-lock.json` and `.next/*` artifacts are present — these should not be committed.
- Console logs: Present in scripts under `scripts/` (debug and extract tools). These are fine for dev tooling but should be reviewed before shipping.
- localStorage / cookie usage: `src/components/providers/ThemeProvider.tsx` reads/writes `localStorage` and writes `document.cookie` — this is a known SSR/hydration hotspot.
- Accessibility/ARIA hints: Some dropdowns and menu items need `aria-label` and proper role assignment (e.g., `Header.tsx` nav dropdowns).

## Sensitive / Secret Scan Results
- `next.config.ts` — references `process.env.NODE_ENV` (ok)
- `scripts/visual-check.ts` — uses `process.env.BASE_URL` with default fallback (ok)
- No occurrences of raw API keys, private keys, AWS keys, or tokens were detected in code.

## Generated / Large Files Detected (should be removed from git and ignored)
- `.next/` directory found and contains multiple runtime/build artifacts. This should be removed from the repository and added to `.gitignore` (already present in `.gitignore`).
- `bun.lock` / `package-lock.json` / `pnpm-lock.yaml`: repo contains `bun.lock` and `package-lock.json`. If you standardize on Bun, consider removing `package-lock.json` from source control or keep for compatibility. Decide team preference.

Recommended commands to untrack build files:

```bash
# Remove tracked .next and other build artifacts
git rm -r --cached .next || true
git rm --cached package-lock.json || true
# Commit update
git add .gitignore
git commit -m "chore: add .gitignore and remove build artifacts from git"
```

If you prefer to keep `package-lock.json` for npm users, skip removing it.

## Code Patterns / Hotspots

1. `src/components/providers/ThemeProvider.tsx`
   - Uses `localStorage.getItem(...)`, `localStorage.setItem(...)`, `document.cookie = ...`, and `window.matchMedia(...)` inside client code. This causes hydration mismatches if server-side render assumes a default theme. Recommend reading theme cookie during SSR or adding an inline boot script in `layout.tsx` to set theme class before hydration (already noted in `SECURITY.md`).

2. `src/components/layout/Header.tsx`
   - Uses `window` scroll listener to set `scrolled` state. Ensure cleanup and passive listeners (already present). Add ARIA labels to dropdown menu items.

3. `scripts/*.ts`
   - Several dev scripts contain `console.log` for diagnostics. They are developer utilities; consider leaving them but do not ship to production bundles.

4. `.next` and build outputs contain many `any` type annotations (generated types). Ignore.

5. `analysis/` folder contains generated reports and screenshots. These are already ignored in `.gitignore`.

## Quick Fix Recommendations (high-impact, low-effort)
- Remove `.next/` from git index and ensure `.gitignore` contains `.next/` (done).
- Decide lockfile policy (Bun vs npm) and remove the unused lockfile from repo if desired.
- Fix SSR hydration for theme by reading cookie on server or applying inline script in `app/layout.tsx` to set theme class before paint.
- Centralize phone formatting logic (create `src/lib/format.ts`) — recommended for DRY.
- Extract and type-safe social icons (`src/lib/constants/icons.ts` and `src/components/icons/SocialIcon.tsx`).

## Next Manual Review Targets (by priority)
1. `src/components/providers/ThemeProvider.tsx` — SSR hydration and cookie handling.
2. `src/components/layout/Footer.tsx` — inline SocialIcon, `icon: string` typing, phone formatting duplication.
3. `src/components/layout/Header.tsx` — ARIA for dropdowns and mobile menu focus management.
4. Accessibility sweep for `aria-*` across interactive components.
5. Visual regression check after any color/token changes (Tailwind tokens).

## Notes on Running a Deeper "Every Line" Audit
A full manual audit of every line is time-consuming. Suggested approach:
1. Automated static checks: run `tsc --noEmit`, `eslint --ext .ts,.tsx src/`, and `pnpm run build` (or `bun run build`).
2. Use `rg`/`grep` to find patterns (we ran several patterns already). See scripts below for commands you can run locally.

Commands to run locally:

```bash
# Type check
pnpm dlx -y typescript --no-install --version || true
# or
npx tsc --noEmit

# Lint
npx eslint --ext .ts,.tsx src/

# Run build
bun run build

# Search for secrets or TODOs
rg "process.env|SECRET|API_KEY|TODO|FIXME|console.log" -n
```

## Files I Recommend Inspecting Manually
- `src/components/providers/ThemeProvider.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/Header.tsx`
- `tailwind.config.ts` (contrast tokens)
- `src/app/layout.tsx` (inline boot script)

---

If you want, I can now:
- Perform the manual edits for the high-priority fixes (ThemeProvider SSR, SocialIcon type-safety, phone formatter, ARIA labels) and run a build locally to verify.
- Or produce a line-by-line annotated report for a single file at a time (e.g., ThemeProvider first).

Tell me which next step you prefer. If you prefer I continue automatically, I'll implement the Phase 1 fixes now and run `bun run build` to verify.
