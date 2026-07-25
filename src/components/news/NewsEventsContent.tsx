/** News & Events — card grid with video, image, and fallback content types */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2, Pause, Play } from "lucide-react";

type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image?: { src: string; alt: string };
  videoId?: string;
  videoSrc?: string;
  href?: string;
  noButton?: true;
};

const newsItems: NewsItem[] = [
  {
    title: "BITS College Celebrates the Graduation of the Class of 2026",
    date: "July 12, 2026 GC",
    excerpt:
      "BITS College celebrated the graduation of the Class of 2026, marking a memorable milestone for students in the Undergraduate Software Engineering and Postgraduate IT Management programs.\n\nThe graduation ceremony honored the graduates' academic achievements, dedication, and perseverance throughout their studies. The event brought together students, faculty, families, and invited guests to recognize this important accomplishment and celebrate the graduates as they embark on the next chapter of their academic and professional journeys.",
    videoSrc: "/images/News-Events/graduation.mp4",
    noButton: true,
  },
  {
    title: "Data Analytics Workshop by the ITS Department",
    date: "March 22, 2025",
    excerpt:
      "Showcasing the life cycle of data analytics, starting from data processing, cleaning visualizing and gaining insight on data and making informed decisions",
    image: {
      src: "/images/News-Events/Data%20Analytics%20Workshop%20by%20the%20ITS%20Department.jpg",
      alt: "BITS College data analytics workshop audience",
    },
    href: "/bootcamp/",
  },
  {
    title: "Virtual Tour of BITS College",
    date: "November 02, 2024",
    excerpt:
      "Take a virtual tour of BITS College! Explore our campus, state-of-the-art labs, student facilities, and learning spaces. Whether you\u2019re a prospective student or a curious visitor, this tour will give you a taste of the BITS College experience",
    videoId: "xzJXNyy6sRk",
  },
  {
    title: "Hackathon Stories",
    date: "October 16, 2024",
    excerpt:
      "Hear how our participants collaborated and innovated during the BITS College Hackathon. Don\u2019t forget\u2014the winners will be revealed at the Tech Expo tomorrow!",
    videoSrc: "/images/News-Events/Hackathon%20Stories.mp4",
  },
  {
    title: "Day 3 of the BITS College Hackathon",
    date: "October 14, 2024",
    excerpt:
      "A Grand Finale! From coding breakthroughs to innovative solutions, Day 3 was nothing short of spectacular. Our participants showed incredible skill and teamwork, and we\u2019re proud to announce the winning project!",
    videoSrc: "/images/News-Events/Day%203%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "Day 2 of the BITS College Hackathon",
    date: "October 13, 2024",
    excerpt:
      "BITS College Hackathon is all about progress and innovation! Our participants are working hard to bring their ideas to life, and we\u2019re seeing some incredible teamwork and creativity! Stay tuned for more updates as we head into the final day!",
    videoSrc: "/images/News-Events/Day%202%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "Day 1 of the BITS College Hackathon",
    date: "October 12, 2024",
    excerpt:
      "Day 1 of the Hackathon is filled with creativity, problem-solving, and serious skills. Watch our teams collaborate and bring their ideas to life! Stay tuned for more epic moments tomorrow!",
    videoSrc: "/images/News-Events/Day%201%20of%20the%20BITS%20College%20Hackathon.mp4",
  },
  {
    title: "BITS Workshop Highlights",
    date: "September 29, 2024",
    excerpt:
      "A day of inspiration, career guidance, and so much energy! Watch these highlights to catch a glimpse of the event and the amazing vibes we had",
    videoSrc: "/images/News-Events/BITS%20Workshop%20Highlights.mp4",
  },
  {
    title: "Highlights from the Digital Platform Ecosystem Workshop",
    date: "November 16, 2023",
    excerpt:
      "The workshop was jointly organized by Bunna Bank, Serianu, Nib Bank and BITS College. Topics covered include: Cybersecurity and Digital Transformation, ChatGPT, Digital Banking Trends, CIO challenges in building Digital Platforms, Digital Ecosystem Trends in Logistics, and Digital Marketing",
    videoSrc: "/images/News-Events/Highlights%20from%20the%20Digital%20Platform%20Ecosystem%20Workshop.mp4",
  },
  {
    title: "Workshop on Digital Platform Ecosystems",
    date: "November 7, 2023",
    excerpt:
      "The workshop will bring together experts from different industries to discuss the latest trends and developments, share experiences and perspectives, and learn how to benefit from digital platforms.",
    image: {
      src: "/images/News-Events/Workshop%20on%20Digital%20Platform%20Ecosystems.webp",
      alt: "BITS College workshop on digital platform ecosystems",
    },
    href: "/bootcamp/",
  },
  {
    title: "Scholarship Recipients",
    date: "September 15, 2023",
    excerpt:
      "Congratulations to all our scholarship recipients! You have worked hard and achieved excellence in your academic and extracurricular pursuits. You deserve this recognition and support for your future endeavors. We are proud of you and your accomplishments!",
    image: {
      src: "/images/News-Events/Scholarship%20Recipients.webp",
      alt: "BITS College scholarship recipients group photo",
    },
    href: "/scholarship-recipients/",
  },
  {
    title: "Summer Bootcamp",
    date: "August 21, 2023",
    excerpt:
      "This bootcamp program is designed to help trainees gain practical knowledge on industry standards, best practices, tools and technologies.",
    image: {
      src: "/images/News-Events/summer%20bootcamp.jpg",
      alt: "BITS College summer bootcamp workshop session",
    },
    href: "/bootcamp/",
  },
  {
    title: "BITS College Day",
    date: "June 14, 2023",
    excerpt:
      "BITS College held a College Day, in which students works were demonstrated, discussions and panels were held and games and activities livened the day",
    image: {
      src: "/images/News-Events/BITS%20College%20Day.jpg",
      alt: "BITS College day event activity photo",
    },
    href: "/college-day/",
  },
  {
    title: "Workshop",
    date: "March 26, 2022",
    excerpt:
      "On Saturday, March 26 2022, BITS College hosted a Workshop \u201cPreparing for the Tech Industry through Higher Education\u201d",
    image: {
      src: "/images/News-Events/Workshop.jpg",
      alt: "BITS College workshop presentation photo",
    },
    href: "/workshop/",
  },
  {
    title: "Student Appreciation Night",
    date: "December 12, 2021",
    excerpt:
      "BITS College hosted a Student Appreciation Night on Friday, December 12, 2021, to honor the accomplishments and contributions of its postgraduate students.",
    image: {
      src: "/images/News-Events/Student%20Appreciation%20Night.webp",
      alt: "BITS College student appreciation group photo",
    },
    href: "/student-appreciation-night/",
  },
  {
    title: "BITS College Inauguration - Speech by Dr. Rahel Bekele",
    date: "January 02, 2021",
    excerpt: "BITS College School of Systems and Technology Inauguration Ceremony",
    videoId: "wYdFxpqX0iM",
  },
  {
    title: "Inauguration",
    date: "January 02, 2021",
    excerpt: "BITS College celebrated its inauguration on January 02, 2021.",
    image: {
      src: "/images/News-Events/Inauguration.jpg",
      alt: "BITS College inauguration banner on the campus facade",
    },
    href: "/inauguration/",
  },
  {
    title: "BITS College Introduction",
    date: "October 04, 2020",
    excerpt:
      "BITS College is a private higher learning institution with a vision of promoting excellence in the production, growth and dissemination of advanced scientifice knowledge through teaching and research",
    videoId: "cN7qtSnViBc",
  },
];

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

function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
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
      {/* Native img avoids /_next/image proxy hop for third-party thumbs */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform hover:scale-110">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
      </span>
    </button>
  );
}

function LocalVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [pendingPlay, setPendingPlay] = useState(false);

  const pauseOtherVideos = useCallback((currentVideo: HTMLVideoElement) => {
    document.querySelectorAll<HTMLVideoElement>("video[data-news-video]").forEach((video) => {
      if (video !== currentVideo) video.pause();
    });
  }, []);

  const toggleVideo = () => {
    if (!shouldLoad) {
      setShouldLoad(true);
      setPendingPlay(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      pauseOtherVideos(video);
      void video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    if (!shouldLoad || !pendingPlay) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      pauseOtherVideos(video);
      void video.play();
      setPendingPlay(false);
    };

    if (video.readyState >= 2) {
      tryPlay();
      return;
    }

    video.addEventListener("loadeddata", tryPlay, { once: true });
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [shouldLoad, pendingPlay, pauseOtherVideos]);

  return (
    <>
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          data-news-video
          playsInline
          preload="metadata"
          className="h-full w-full cursor-pointer object-cover"
          title={title}
          onLoadedData={() => setIsVideoReady(true)}
          onPlay={() => {
            if (videoRef.current) pauseOtherVideos(videoRef.current);
            setIsVideoPlaying(true);
          }}
          onPause={() => setIsVideoPlaying(false)}
          onEnded={() => setIsVideoPlaying(false)}
          onClick={toggleVideo}
        />
      ) : (
        <div
          className="h-full w-full cursor-pointer bg-[var(--bits-surface-muted)]"
          onClick={toggleVideo}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleVideo();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Play ${title}`}
        />
      )}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          toggleVideo();
        }}
        className={`group/video absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-200 ${
          isVideoPlaying
            ? "pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100"
            : "opacity-100"
        }`}
        aria-label={`${isVideoPlaying ? "Pause" : "Play"} ${title}`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform hover:scale-110">
          {isVideoPlaying ? <Pause className="h-7 w-7 fill-current" /> : <Play className="ml-1 h-7 w-7 fill-current" />}
        </span>
      </button>
      {shouldLoad && !isVideoReady && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/25">
          <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading video
          </span>
        </div>
      )}
    </>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const hasImage = Boolean(item.image?.src);

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial={{ y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)" }}
        whileHover={{ y: -6, boxShadow: "0 20px 25px rgba(0, 0, 0, 0.12)", transition: { duration: 0.25, ease: "easeOut" } }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--bits-surface)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover cursor-pointer dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bits-surface-muted)]">
          {item.videoSrc ? (
            <LocalVideo src={item.videoSrc} title={item.title} />
          ) : item.videoId ? (
            <YouTubeFacade videoId={item.videoId} title={item.title} />
          ) : hasImage ? (
            <Image
              src={item.image!.src}
              alt={item.image!.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index < 1 ? "eager" : "lazy"}
              priority={index < 1}
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-lime-50 to-slate-100 p-6 dark:from-gray-800 dark:to-gray-900">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bits-green text-lg font-bold text-white">
                  {item.title.slice(0, 2).toUpperCase()}
                </div>
                <p className="mt-2 text-sm text-bits-muted">{item.title}</p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col justify-center p-7">
          <div className="mb-3 inline-flex items-center gap-2">
            <svg className="h-4 w-4 text-bits-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-sm font-semibold text-bits-green-dark">{item.date}</span>
          </div>

          <h2 className="break-words text-3xl font-bold text-bits-heading transition-colors duration-300 group-hover:text-bits-green">
            {item.title}
          </h2>

          <p className={`mt-3 text-base leading-relaxed text-bits-text ${item.noButton ? "whitespace-pre-line" : "line-clamp-4"}`}>
            {item.excerpt}
          </p>

          {item.href && (
            <div className="mt-auto pt-6">
              <Link
                href={item.href}
                className="btn-outline-green inline-block transition-transform duration-200 hover:scale-105 active:scale-95"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="sr-only">{item.title}: </span>
                Read More
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const ITEMS_PER_PAGE = 6;

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
    <nav className="mt-14 flex items-center justify-center gap-2" aria-label="News pagination">
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

export function NewsEventsContent() {
  const [page, setPage] = useState(1);
  const totalPages = useMemo(() => Math.ceil(newsItems.length / ITEMS_PER_PAGE), []);
  const visibleItems = useMemo(
    () => newsItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
    [page]
  );

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <div id="content">
        <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            {/* Static hero — opacity must stay 1 for LCP (Framer initial:0 blocked paint for ~17s) */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                  News & Events
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-bits-text">
                Stay updated with the latest happenings at BITS College. Discover workshops, hackathons, achievements, and inspiring stories from our community.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 1, y: -8, transition: { duration: 0.15 } }}
              className="grid gap-10 sm:grid-cols-2"
            >
              {visibleItems.map((item, index) => (
                <NewsCard key={`${item.title}-${item.date}`} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination current={page} total={totalPages} onChange={setPage} />
        </section>
      </div>
    </div>
  );
}
