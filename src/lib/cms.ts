/**
 * CMS API client — server-side only.
 * Talks to BITS-CMS over the public internet. Never exposed to the browser
 * (no NEXT_PUBLIC_* prefix) — only the Next.js server fetches from here.
 */
import { cache } from "react";
import { unstable_cache } from "next/cache";
import type {
  CmsPostListItem,
  CmsPostDetail,
  CmsPaginatedEnvelope,
  CmsEnvelope,
  CmsPostMedia,
  CmsReadMoreMedia,
} from "./cms-types";

const CMS_API_URL = process.env.CMS_API_URL ?? "http://localhost:3000";
const FETCH_TIMEOUT_MS = 5_000;

export class CmsError extends Error {
  public readonly status: number;
  public readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "CmsError";
    this.status = status;
    this.code = code;
  }
}

async function cmsFetch<T>(path: string): Promise<T> {
  const url = `${CMS_API_URL}${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      let code = "CMS_ERROR";
      let message = `CMS returned ${res.status}`;

      try {
        const body = await res.json();
        code = body.code ?? code;
        message = body.message ?? message;
      } catch {
        // response wasn't JSON
      }

      throw new CmsError(res.status, code, message);
    }

    return (await res.json()) as T;
  } catch (error) {
    if (error instanceof CmsError) throw error;

    // AbortError means timeout
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new CmsError(504, "CMS_TIMEOUT", "CMS request timed out");
    }

    // Network error / CMS unreachable
    throw new CmsError(
      502,
      "CMS_UNREACHABLE",
      error instanceof Error ? error.message : "CMS is unreachable",
    );
  } finally {
    clearTimeout(timeout);
  }
}

// ─── URL resolution ──────────────────────────────────────────────────────────
// CMS returns relative URLs (/api/media/123). Since the CMS is on a different
// domain than the homepage, we must resolve them to absolute URLs.

function resolveMediaUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${CMS_API_URL}${url}`;
}

function resolvePostMedia(media: CmsPostMedia): CmsPostMedia {
  return { ...media, url: resolveMediaUrl(media.url) };
}

function resolveReadMoreMedia(media: CmsReadMoreMedia): CmsReadMoreMedia {
  return { ...media, url: resolveMediaUrl(media.url) };
}

function resolvePostListItem(post: CmsPostListItem): CmsPostListItem {
  return { ...post, media: resolvePostMedia(post.media) };
}

function resolvePostDetail(post: CmsPostDetail): CmsPostDetail {
  return {
    ...resolvePostListItem(post),
    readMore: post.readMore
      ? {
          ...post.readMore,
          media: post.readMore.media.map(resolveReadMoreMedia),
        }
      : null,
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────
// Each function is wrapped in unstable_cache (revalidate: 60) so CMS responses
// are actually cached. This is required because every consumer is a dynamic
// route (it reads searchParams/params/nextUrl): with the default fetchCache
// "auto", Next.js never caches fetches that are reached after a Request-time
// API, so "export const revalidate = 60" alone had no effect.

export const getPublishedPosts = unstable_cache(
  async (page = 1, limit = 10) => {
    const res = await cmsFetch<CmsPaginatedEnvelope<CmsPostListItem[]>>(
      `/api/posts?page=${page}&limit=${limit}`,
    );

    return {
      posts: res.data.map(resolvePostListItem),
      pagination: res.pagination,
    };
  },
  ["cms-posts"],
  { revalidate: 60 },
);

// Wrapped in React cache() so generateMetadata and the page body share a single
// CMS call within one request (unstable_cache alone doesn't dedupe those two).
export const getPostBySlug = cache(
  unstable_cache(
    async (slug: string) => {
      const res = await cmsFetch<CmsEnvelope<CmsPostDetail>>(
        `/api/posts/${encodeURIComponent(slug)}`,
      );

      return resolvePostDetail(res.data);
    },
    ["cms-post"],
    { revalidate: 60 },
  ),
);

export const getAllPublishedSlugs = unstable_cache(
  async () => {
    // Fetch all posts (high limit) to get slugs for the sitemap
    const res = await cmsFetch<CmsPaginatedEnvelope<CmsPostListItem[]>>(
      `/api/posts?page=1&limit=500`,
    );

    return res.data.map((post) => post.slug);
  },
  ["cms-slugs"],
  { revalidate: 60 },
);
