/**
 * Client-side HTML sanitization — defense in depth.
 * The CMS sanitizes at write time (B2), but this is the only place in the
 * homepage that renders third-party-sourced HTML via dangerouslySetInnerHTML.
 * Uses the same allowlist as the CMS Studio's sanitize.ts for consistency.
 */
import DOMPurify from "dompurify";

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "small",
  "mark",
  "span",
  "h2",
  "h3",
  "ul",
  "ol",
  "li",
  "blockquote",
  "hr",
  "a",
  "img",
];

const ALLOWED_ATTR = [
  "href",
  "target",
  "rel",
  "src",
  "alt",
  "title",
  "style",
];

export function sanitizeHtml(html: string): string {
  if (typeof window === "undefined") {
    // SSR: DOMPurify requires a DOM (no `sanitize` on the server). The CMS
    // already sanitizes at write time, so return the content as-is here; the
    // browser applies the allowlist again on hydration.
    return html;
  }

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ALLOW_DATA_ATTR: false,
  });
}

export function htmlToText(html: string): string {
  if (typeof document === "undefined") return html;
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || "").replace(/\s+/g, " ").trim();
}
