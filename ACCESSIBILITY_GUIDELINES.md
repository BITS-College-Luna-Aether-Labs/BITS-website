# Accessibility Guidelines — BITS College Frontend

## Standards Target

WCAG 2.1 Level AA (aligned with project policy requirements).

## Semantic Structure

- `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` landmarks
- Single `<h1>` per page (homepage: “Join the Vision”)
- Logical heading hierarchy in sections

## Keyboard & Focus

- Skip link to `#main-content`
- All interactive elements reachable via Tab
- Visible `:focus-visible` outlines (green, 2px offset)
- Mobile menu button with `aria-expanded` / `aria-controls`
- Dropdown menus use `role="menu"` / `role="menuitem"`

## Color & Contrast

- Primary green `#7DC243` on white meets contrast for large text/UI
- Body text uses `#54595F` / `#7A7A7A` on white
- Dark mode adjusts text to lighter grays on dark backgrounds

## Images

- Descriptive `alt` on hero, announcement, and program imagery
- Decorative SVG waves marked `aria-hidden="true"`

## Motion

- `prefers-reduced-motion` respected globally
- See `MOTION_GUIDELINES.md`

## Forms & Links

- External Apply links: `rel="noopener noreferrer"`
- `tel:` and `mailto:` links for contact cards

## Testing Checklist

- [ ] Tab through header, mobile menu, all CTAs
- [ ] Screen reader announces landmarks and headings
- [ ] Enable “Reduce motion” in OS — animations disabled
- [ ] Zoom to 200% — layout remains usable
- [ ] Lighthouse Accessibility ≥ 90
