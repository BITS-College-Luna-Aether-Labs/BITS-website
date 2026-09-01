/**
 * HTML sanitization — defense in depth for third-party-sourced CMS content.
 * The CMS sanitizes at write time, but this is the only place in the homepage
 * that renders CMS HTML via dangerouslySetInnerHTML. Uses isomorphic-dompurify
 * (jsdom-backed on the server, plain DOMPurify in the browser) so the SSR pass
 * — including the pre-hydration HTML of the "use client" PostDetailClient —
 * is sanitized too, not just the post-hydration DOM. The allowlist mirrors
 * BITS-CMS/src/Utils/sanitizeHtml.ts.
 */
import DOMPurify from "isomorphic-dompurify";

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
