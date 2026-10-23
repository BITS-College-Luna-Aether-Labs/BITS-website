"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  Pause,
  Play,
  AlertTriangle,
  Newspaper,
} from "lucide-react";
import type { CmsPostListItem } from "@/lib/cms-types";

type Props = {
  posts: CmsPostListItem[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  error?: string | null;
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

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

function YouTubeFacade({
  embedUrl,
  title,
}: {
  embedUrl: string;
  title: string;
}) {
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

function LocalVideo({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      document
        .querySelectorAll<HTMLVideoElement>("video[data-news-video]")
        .forEach((v) => {
          if (v !== video) v.pause();
        });
      void video.play();
    } else {
      video.pause();
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        data-news-video
        playsInline
        preload="metadata"
        className="h-full w-full cursor-pointer object-cover"
        title={title}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onClick={toggleVideo}
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleVideo();
        }}
        className={`group/video absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 ${
          isPlaying
            ? "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
            : "opacity-100"
        }`}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform hover:scale-110">
          {isPlaying ? (
            <Pause className="h-7 w-7 fill-current" />
          ) : (
            <Play className="ml-1 h-7 w-7 fill-current" />
          )}
        </span>
      </button>
    </>
  );
}

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

function stripHtml(html: string): string {
  if (typeof document === "undefined") return html;
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || "").replace(/\s+/g, " ").trim();
}

function CmsNewsCard({
  post,
  index,
}: {
  post: CmsPostListItem;
  index: number;
}) {
  const media = post.media;
  const hasImage =
    media.type === "IMAGE" && media.url;
  const hasVideo =
    media.type === "VIDEO" && media.url;
  const hasYoutube =
    media.type === "YOUTUBE" && media.embedUrl;

  const excerpt = stripHtml(post.content);

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial={{
          y: 0,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)",
        }}
        whileHover={{
          y: -6,
          boxShadow: "0 20px 25px rgba(0, 0, 0, 0.12)",
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--bits-surface)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover cursor-pointer dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bits-surface-muted)]">
          {hasYoutube ? (
            <YouTubeFacade
              embedUrl={media.embedUrl!}
              title={post.title}
            />
          ) : hasVideo ? (
            <LocalVideo src={media.url!} title={post.title} />
          ) : hasImage ? (
            <Image
              src={media.url!}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index < 1 ? "eager" : "lazy"}
              priority={index < 1}
              className="object-cover transition duration-500 group-hover:scale-110"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-lime-50 to-slate-100 dark:from-gray-800 dark:to-gray-900">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bits-green text-lg font-bold text-white">
                  {post.title.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-2 text-sm text-bits-muted">
                  {post.title}
                </p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col justify-center p-7">
          <div className="mb-3 inline-flex items-center gap-2">
            <svg
              className="h-4 w-4 text-bits-green"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-sm font-semibold text-bits-green-dark">
              {formatDate(post.publishedDate)}
            </span>
          </div>

          <h2 className="break-words text-3xl font-bold text-bits-heading transition-colors duration-300 group-hover:text-bits-green">
            {post.title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-bits-text line-clamp-4">
            {excerpt}
          </p>

          <div className="mt-auto pt-6">
            <Link
              href={`/college-news/${post.slug}`}
              className="btn-outline-green inline-block transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <span className="sr-only">{post.title}: </span>
              Read More
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Pagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (page: number) => void;
}) {
  if (total <= 1) return null;

  return (
    <nav
      className="mt-14 flex items-center justify-center gap-2"
      aria-label="News pagination"
    >
      <button
        type="button"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-bits-muted transition hover:border-bits-green hover:text-bits-green disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-bits-green"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onChange(page)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition ${
            page === current
              ? "bg-bits-green text-white shadow-sm"
              : "border border-slate-200 text-bits-text hover:border-bits-green hover:text-bits-green dark:border-gray-700 dark:hover:border-bits-green"
          }`}
          aria-current={page === current ? "page" : undefined}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-bits-muted transition hover:border-bits-green hover:text-bits-green disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:border-bits-green"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-amber-500" />
      <h2 className="text-xl font-semibold text-bits-heading">
        News is temporarily unavailable
      </h2>
      <p className="mt-2 max-w-md text-sm text-bits-muted">{message}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Newspaper className="mb-4 h-12 w-12 text-bits-green/50" />
      <h2 className="text-xl font-semibold text-bits-heading">
        No posts yet
      </h2>
      <p className="mt-2 text-sm text-bits-muted">
        Check back soon for the latest news and events.
      </p>
    </div>
  );
}

export function CmsNewsList({
  posts,
  totalPages,
  currentPage,
  onPageChange,
  error,
}: Props) {
  if (error) {
    return <ErrorState message={error} />;
  }

  if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{
            opacity: 1,
            y: -8,
            transition: { duration: 0.15 },
          }}
          className="grid gap-10 sm:grid-cols-2"
        >
          {posts.map((post, index) => (
            <CmsNewsCard
              key={post.postId}
              post={post}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        current={currentPage}
        total={totalPages}
        onChange={onPageChange}
      />
    </div>
  );
}
