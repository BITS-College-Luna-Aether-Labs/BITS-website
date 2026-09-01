# Security

Security model for the BITS College public frontend. Aligns with live `src/middleware.ts` and `next.config.ts`.

**Author:** [NathenaelTamirat](https://github.com/NathenaelTamirat) · **Audited:** July 2026

---

## 1. Threat model (summary)

| Asset | Risk | Mitigation |
|---|---|---|
| Public HTML/JS | XSS / script injection | CSP with nonces + script hashes; React escaping |
| PDF endpoint | Path traversal / arbitrary file read | Strict filename allowlist |
| Clickjacking | UI redress | `X-Frame-Options` + CSP `frame-ancestors` |
| Transport | MITM | HSTS in production; Nginx TLS |
| Privacy | Unwanted cookies | No theme cookies; theme uses `localStorage` only |
| Apply portal | Tabnabbing | `rel="noopener noreferrer"` on external tabs |

This site has **no authentication**, **no PII store**, and **no admin UI**.

---

## 2. Content Security Policy

CSP is built **per request** in `src/middleware.ts` and set on both request and response headers.

### 2.1 Policy shape

| Directive | Value |
|---|---|
| `default-src` | `'self'` |
| `script-src` | `'self'` + `'nonce-<uuid>'` + SHA-256 hashes for theme + error reporter; **`'unsafe-eval'` only in development** |
| `style-src` | `'self' 'unsafe-inline'` |
| `img-src` | `'self' data: blob: https://i.ytimg.com` |
| `font-src` | `'self' data:` |
| `connect-src` | `'self'` (covers `/api/error` beacons) |
| `object-src` | `'none'` |
| `base-uri` | `'self'` |
| `form-action` | `'self' https://applications.bitscollege.edu.et` |
| `frame-src` | `'self' https://www.youtube.com https://www.youtube-nocookie.com` |
| `frame-ancestors` | `'self'` |
| `upgrade-insecure-requests` | Production only |

### 2.2 Inline scripts

Root layout injects two inline scripts with the middleware nonce:

1. `THEME_SCRIPT` — dark-mode bootstrap (`src/lib/theme.ts`)
2. `ERROR_REPORTER_SCRIPT` — global error beacon (`src/lib/error-reporter.ts`)

Hashes in middleware must stay in sync if those strings change:

- Theme: `'sha256-NhzUKfveOg7mcRyOHqfXa83QgUQOuo/uyYCLkLqe9CE='`
- Error: `'sha256-SFvwRvpSGNkVRKBwaqdtHPgB8Pxaikx+oEshBInp6oY='`

JSON-LD in layout is also nonce-stamped.

### 2.3 Matcher

Middleware skips: `api`, `_next/static`, `_next/image`, `favicon.ico`, `robots.txt`, `llms.txt`, `sitemap.xml`, and static file extensions (`png|jpg|jpeg|gif|webp|svg|ico|mp4|pdf|woff2`).

---

## 3. HTTP security headers

From `next.config.ts`:

| Source | Headers |
|---|---|
| `/images/:path*` | `Cache-Control: public, max-age=31536000, immutable` |
| `/(.*)` | `X-Content-Type-Options: nosniff` |
| | `X-Frame-Options: SAMEORIGIN` |
| | `Referrer-Policy: strict-origin-when-cross-origin` |
| | `Permissions-Policy: geolocation=(), microphone=(), camera=()` |
| | `Strict-Transport-Security` (production only): `max-age=63072000; includeSubDomains; preload` |

`/api/pdf` responses also set `X-Frame-Options: SAMEORIGIN` for iframe embedding.

Nginx may add `X-Robots-Tag` and DNS prefetch — see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 4. Application controls

### 4.1 Rendering

- No `dangerouslySetInnerHTML` for user-supplied content (only trusted inline scripts / JSON-LD in layout).
- React escapes dynamic text by default.
- No third-party analytics or chat widgets in the bundle.

### 4.2 PDF API

```ts
ALLOWED_FILES = {
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
}
```

Unknown or missing `file` → `404`. Files read only from `public/images/About-Who-we-are/`.

### 4.3 External links

Apply and social destinations use `target="_blank"` + `rel="noopener noreferrer"` where applicable.

### 4.4 Client storage

| Key | Purpose |
|---|---|
| `bits_theme` | `"light"` \| `"dark"` preference |
| `bits_announcement_shown` | Session flag for graduation popup |

No secrets in client storage.

---

## 5. Dependencies

- Prefer Bun lockfile (`bun.lock`) for reproducible Docker installs.
- Run `bun audit` / `npm audit` before production releases.
- Keep Next.js and React on current patched minors.

---

## 6. Reporting

Report vulnerabilities to BITS College IT via `info@bitscollege.edu.et`.

---

## 7. Checklist before go-live

- [ ] CSP hashes match current `THEME_SCRIPT` / `ERROR_REPORTER_SCRIPT`
- [ ] HTTPS + HSTS verified behind Nginx
- [ ] `/api/pdf` rejects non-allowlisted names
- [ ] No `.env` secrets committed (none required today)
- [ ] Docker app runs as non-root `nextjs` user
- [ ] Firewall exposes only 22/80/443
- [ ] `output: "standalone"` still present in `next.config.ts` (the Dockerfile deploys via the standalone server)

---

*Security notes by **NathenaelTamirat** · July 2026*
