# Cookie & Preference Policy — BITS College Frontend

## Summary

This site stores **only** UI appearance preferences. No analytics, advertising, or tracking cookies are implemented in this frontend rebuild.

## Theme Preference Storage

### Decision: Cookie + localStorage (dual write)

| Method | Role |
|--------|------|
| **Cookie** (`bits_theme`) | SSR/middleware awareness; 1-year retention; `SameSite=Lax`; `Secure` in production |
| **localStorage** (`bits_theme`) | Client-side read without sending preference on every HTTP request body |

### Why both?

- **Cookie** allows middleware to set a default and supports future server-rendered theme hints.
- **localStorage** avoids unnecessary server round-trips for a pure UI preference and matches GDPR “appearance” exception guidance in `policies and rules.md`.

### Values stored

- `light` | `dark` | `system` — no personal data.

### Retention

- **1 year** (`max-age=31536000`), refreshed when the user changes theme.

### Consent

Under UK ICO / GDPR appearance exception, functional theme cookies do not require marketing consent. Users can:

1. Choose **System / Light / Dark** via the header theme toggle.
2. Clear site data in the browser to remove stored preference.

## Cookies We Do NOT Set

- Analytics (e.g. Google Analytics)
- Advertising
- Social tracking
- Session authentication (not applicable to public homepage)

## Cookie Table

| Name | Purpose | Retention | HttpOnly | Secure (prod) | SameSite |
|------|---------|-----------|----------|---------------|----------|
| `bits_theme` | Light/dark/system UI preference | 1 year | No | Yes | Lax |

## Opt-out

To stop storing theme preference:

1. Clear cookies and local storage for this site, or  
2. Use browser private mode (no persistence across sessions).

## Contact

Questions: `info@bitscollege.edu.et`
