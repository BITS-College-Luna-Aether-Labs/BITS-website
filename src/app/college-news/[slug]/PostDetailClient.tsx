"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, Calendar, Play } from "lucide-react";
import type { CmsPostDetail, CmsPostMedia, CmsReadMoreMedia } from "@/lib/cms-types";

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

function YouTubePlayer({ embedUrl, title }: { embedUrl: string; title: string }) {
  const [activated, setActivated] = useState(false);
  const videoId = extractYouTubeId(embedUrl);

  if (activated) {
    return (
      <iframe
        src={`${embedUrl}?rel=0&modestbranding=1&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      className="relative h-full w-full cursor-pointer"
      aria-label={`Play ${title}`}
    >
      {videoId ? (
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-lime-50 to-slate-100 dark:from-gray-800 dark:to-gray-900">
          <Play className="h-12 w-12 text-bits-green" />
        </div>
      )}
      <span className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform hover:scale-110">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
      </span>
    </button>
  );
}

function MediaBlock({
  media,
  title,
}: {
  media: CmsPostMedia | CmsReadMoreMedia;
  title: string;
}) {
  if (media.type === "YOUTUBE" && media.embedUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-card">
        <YouTubePlayer embedUrl={media.embedUrl} title={title} />
      </div>
    );
  }

  if (media.type === "VIDEO" && media.url) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-card">
        <video
          src={media.url}
          controls
          playsInline
          className="h-full w-full object-cover"
          title={title}
        />
      </div>
    );
  }

  if (media.type === "IMAGE" && media.url) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[var(--bits-surface-muted)] shadow-card">
        <Image
          src={media.url}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }

  return null;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function PostDetailClient({ post }: { post: CmsPostDetail }) {
  const displayTitle = post.readMore?.title || post.title;
  const displayContent = post.readMore?.content || post.content;
  const gallery = post.readMore?.media ?? [];

  return (
    <article className="min-h-screen bg-[var(--bits-page)] pb-24 pt-[72px] lg:pt-[80px]">
      <header className="relative overflow-hidden bg-[var(--bits-surface)] py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/college-news"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-bits-muted transition hover:text-bits-green"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to News & Events
          </Link>

          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-bits-green-dark">
            <Calendar className="h-4 w-4 text-bits-green" />
            <time dateTime={post.publishedDate}>
              {formatDate(post.publishedDate)}
            </time>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-bits-heading sm:text-4xl lg:text-5xl">
            {displayTitle}
          </h1>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-12">
          <MediaBlock media={post.media} title={displayTitle} />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-bits-text leading-relaxed">
          {displayContent.includes("<") ? (
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: displayContent }}
            />
          ) : (
            <div className="space-y-4 whitespace-pre-line text-lg leading-relaxed">
              {displayContent}
            </div>
          )}
        </div>

        {gallery.length > 0 && (
          <section className="mt-16 border-t border-slate-200 pt-12 dark:border-gray-800">
            <h2 className="mb-6 text-2xl font-bold text-bits-heading">
              Event Gallery
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.map((item, idx) => (
                <MediaBlock
                  key={`${item.position}-${idx}`}
                  media={item}
                  title={`${displayTitle} - photo ${idx + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-gray-800">
          <Link
            href="/college-news"
            className="btn-outline-green inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            View all News & Events
          </Link>
        </div>
      </div>
    </article>
  );
}
