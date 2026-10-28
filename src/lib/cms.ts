/**
 * CMS API client — server-side only.
 * Talks to BITS-CMS with seamless fallback to static curated content
 * if the CMS API is offline, unreachable, or empty.
 */
import type {
  CmsPostListItem,
  CmsPostDetail,
  CmsPaginatedEnvelope,
  CmsEnvelope,
  CmsPostMedia,
  CmsReadMoreMedia,
} from "./cms-types";
import { STATIC_NEWS_POSTS } from "./constants/news";

export function getCmsApiUrl(): string {
  return process.env.CMS_API_URL ?? "http://localhost:3000";
}
const FETCH_TIMEOUT_MS = 3_500;

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
  const url = `${getCmsApiUrl()}${path}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
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

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new CmsError(504, "CMS_TIMEOUT", "CMS request timed out");
    }

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

function resolveMediaUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  if (url.startsWith("/api/media")) {
    const baseUrl = getCmsApiUrl();
    return `${baseUrl}${url}`;
  }
  if (url.startsWith("/")) return url;
  const baseUrl = getCmsApiUrl();
  return `${baseUrl}/${url}`;
}

function resolveContentMedia(html: string): string {
  if (!html) return html;
  const baseUrl = getCmsApiUrl();
  return html.replace(/src=["']\/api\/media\/(\d+)["']/g, `src="${baseUrl}/api/media/$1"`);
}

function resolvePostMedia(media: CmsPostMedia): CmsPostMedia {
  return { ...media, url: resolveMediaUrl(media.url) };
}

function resolveReadMoreMedia(media: CmsReadMoreMedia): CmsReadMoreMedia {
  return { ...media, url: resolveMediaUrl(media.url) };
}

function resolvePostListItem(post: CmsPostListItem): CmsPostListItem {
  return {
    ...post,
    content: resolveContentMedia(post.content),
    media: resolvePostMedia(post.media),
  };
}

function resolvePostDetail(post: CmsPostDetail): CmsPostDetail {
  return {
    ...resolvePostListItem(post),
    readMore: post.readMore
      ? {
          ...post.readMore,
          content: resolveContentMedia(post.readMore.content),
          media: post.readMore.media.map(resolveReadMoreMedia),
        }
      : null,
  };
}

// ─── Fallback Helpers ────────────────────────────────────────────────────────

function paginateFallback(page: number, limit: number) {
  const start = (page - 1) * limit;
  const posts = STATIC_NEWS_POSTS.slice(start, start + limit);
  return {
    posts,
    pagination: {
      page,
      limit,
      total: STATIC_NEWS_POSTS.length,
    },
    isFallback: true,
  };
}

function findStaticPostBySlug(slug: string): CmsPostDetail | null {
  const found = STATIC_NEWS_POSTS.find((p) => p.slug === slug);
  if (!found) return null;

  return {
    ...found,
    readMore: null,
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────

export async function getPublishedPosts(
  page = 1,
  limit = 6,
): Promise<{
  posts: CmsPostListItem[];
  pagination: { page: number; limit: number; total: number };
  isFallback: boolean;
}> {
  try {
    const res = await cmsFetch<CmsPaginatedEnvelope<CmsPostListItem[]>>(
      `/api/posts?page=${page}&limit=${limit}`,
    );

    if (Array.isArray(res.data) && res.data.length > 0) {
      return {
        posts: res.data.map(resolvePostListItem),
        pagination: res.pagination,
        isFallback: false,
      };
    }

    // CMS is up but empty -> use static curated posts
    return paginateFallback(page, limit);
  } catch (error) {
    // CMS is down, timing out, or misconfigured -> seamless fallback
    console.warn(
      `[CMS] Unable to fetch posts (${error instanceof Error ? error.message : "error"}), using fallback content.`,
    );
    return paginateFallback(page, limit);
  }
}

export async function getPostBySlug(slug: string): Promise<CmsPostDetail> {
  try {
    const res = await cmsFetch<CmsEnvelope<CmsPostDetail>>(
      `/api/posts/${encodeURIComponent(slug)}`,
    );

    if (res.data) {
      return resolvePostDetail(res.data);
    }
  } catch (error) {
    // If post not found on CMS or CMS is down, check fallback static posts
    const staticPost = findStaticPostBySlug(slug);
    if (staticPost) return staticPost;

    if (error instanceof CmsError) throw error;
    throw new CmsError(404, "NOT_FOUND", "Post not found");
  }

  const staticPost = findStaticPostBySlug(slug);
  if (staticPost) return staticPost;

  throw new CmsError(404, "NOT_FOUND", "Post not found");
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const staticSlugs = STATIC_NEWS_POSTS.map((p) => p.slug);

  try {
    const res = await cmsFetch<CmsPaginatedEnvelope<CmsPostListItem[]>>(
      `/api/posts?page=1&limit=500`,
    );

    if (Array.isArray(res.data) && res.data.length > 0) {
      const cmsSlugs = res.data.map((p) => p.slug);
      return Array.from(new Set([...cmsSlugs, ...staticSlugs]));
    }
  } catch {
    // return static slugs if CMS unreachable
  }

  return Array.from(new Set(staticSlugs));
}
