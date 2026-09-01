"use client";

import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Calendar } from "lucide-react";
import { sanitizeHtml } from "@/lib/sanitize";
import type { CmsPostDetail } from "@/lib/cms-types";

type Props = {
  post: CmsPostDetail | null;
  error?: string | null;
};

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function extractYouTubeId(url: string | null): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return parsed.pathname.slice(1) || null;
    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
      if (parsed.pathname.startsWith("/embed/"))
        return parsed.pathname.split("/")[2] || null;
      if (parsed.pathname.startsWith("/shorts/"))
        return parsed.pathname.split("/")[2] || null;
    }
  } catch {
    // not a valid URL
  }
  return null;
}

function PostMedia({
  media,
  title,
}: {
  media: CmsPostDetail["media"];
  title: string;
}) {
  if (media.type === "YOUTUBE" && media.embedUrl) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl aspect-video">
        <iframe
          src={`${media.embedUrl}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  if (media.type === "VIDEO" && media.url) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl aspect-video">
        <video
          src={media.url}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          title={title}
        />
      </div>
    );
  }

  if (media.type === "IMAGE" && media.url) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl aspect-video">
        <Image
          src={media.url}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }

  return null;
}

function ReadMoreSection({
  readMore,
}: {
  readMore: CmsPostDetail["readMore"];
}) {
  if (!readMore) return null;

  return (
    <section className="mt-12 border-t border-slate-200 pt-10 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-bits-heading sm:text-3xl">
        {readMore.title}
      </h2>

      <div
        className="cms-content mt-6 space-y-4 text-base leading-relaxed text-bits-text"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(readMore.content),
        }}
      />

      {readMore.media && readMore.media.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {readMore.media.map((item) => {
            if (item.type === "YOUTUBE" && item.embedUrl) {
              const ytId = extractYouTubeId(item.embedUrl);
              return (
                <div
                  key={item.position}
                  className="relative aspect-video overflow-hidden rounded-xl"
                >
                  {ytId ? (
                    <iframe
                      src={`${item.embedUrl}?rel=0&modestbranding=1`}
                      title={`${readMore.title} - media ${item.position}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <p className="text-sm text-bits-muted">
                        Video unavailable
                      </p>
                    </div>
                  )}
                </div>
              );
            }

            if (item.url) {
              return (
                <div
                  key={item.position}
                  className="relative aspect-video overflow-hidden rounded-xl"
                >
                  {item.type === "VIDEO" ? (
                    <video
                      src={item.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.url}
                      alt={`${readMore.title} - media ${item.position}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </section>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-amber-500" />
      <h1 className="text-2xl font-semibold text-bits-heading">
        Unable to load article
      </h1>
      <p className="mt-3 max-w-md text-sm text-bits-muted">{message}</p>
      <Link
        href="/college-news"
        className="btn-outline-green mt-8 inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to News
      </Link>
    </div>
  );
}

export function PostDetailClient({ post, error }: Props) {
  if (error) {
    return <ErrorState message={error} />;
  }

  if (!post) {
    return <ErrorState message="Article not found." />;
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/college-news"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-bits-green transition-colors hover:text-bits-green-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to News
      </Link>

      <header className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <Calendar className="h-4 w-4 text-bits-green" />
          <time
            dateTime={post.publishedDate}
            className="text-sm font-semibold text-bits-green-dark"
          >
            {formatDate(post.publishedDate)}
          </time>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-bits-heading sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
      </header>

      <PostMedia media={post.media} title={post.title} />

      <div
        className="cms-content mt-8 space-y-4 text-base leading-relaxed text-bits-text"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(post.content),
        }}
      />

      <ReadMoreSection readMore={post.readMore} />
    </article>
  );
}
