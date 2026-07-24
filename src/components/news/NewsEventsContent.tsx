/** News & Events — card grid with video, image, and fallback content types */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Loader2, Play } from "lucide-react";

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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const hasImage = Boolean(item.image?.src);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isIframeReady, setIsIframeReady] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        initial={{ y: 0, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)" }}
        whileHover={{ y: -6, boxShadow: "0 20px 25px rgba(0, 0, 0, 0.12)", transition: { duration: 0.25, ease: "easeOut" } }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--bits-surface)] shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover cursor-pointer dark:border-gray-800 dark:shadow-none dark:ring-1 dark:ring-gray-800 dark:hover:ring-bits-green/30"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bits-surface-muted)]">
          {item.videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={item.videoSrc}
                controls={isMediaLoaded}
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                title={item.title}
                onCanPlay={() => setIsVideoReady(true)}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  if (video.paused) {
                    void video.play();
                  } else {
                    video.pause();
                  }
                  setIsMediaLoaded(true);
                }}
              />
              {!isVideoPlaying && (
                <button
                  type="button"
                  onClick={() => {
                    const video = videoRef.current;
                    if (!video) return;
                    setIsMediaLoaded(true);
                    void video.play();
                  }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
                  aria-label={`Play or resume ${item.title}`}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform hover:scale-110">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </button>
              )}
              {!isVideoReady && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/25">
                  <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading video
                  </span>
                </div>
              )}
              {!isMediaLoaded ? (
                <div className="pointer-events-none absolute inset-0 z-[5] bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.15)_45%,rgba(2,6,23,0.35)_100%)]" />
              ) : null}
            </>
          ) : item.videoId ? (
            <>
              {!isMediaLoaded ? (
                <button
                  type="button"
                  onClick={() => setIsMediaLoaded(true)}
                  className="absolute inset-0 z-10 flex h-full w-full items-end justify-start overflow-hidden text-left text-white"
                  aria-label={`Load YouTube video for ${item.title}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,204,22,0.24),transparent_34%),linear-gradient(135deg,#0f172a_0%,#111827_52%,#020617_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06)_0%,rgba(2,6,23,0.12)_45%,rgba(2,6,23,0.82)_100%)]" />
                  <div className="relative z-10 flex w-full flex-col gap-4 p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 ring-1 ring-white/15">
                        Video
                      </span>
                      <span className="text-xs font-medium text-white/70">{item.date}</span>
                    </div>
                    <div className="max-w-[90%]">
                      <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                        Tap to load and play this video.
                      </p>
                    </div>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bits-green/90 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                      <span className="text-sm font-semibold tracking-wide text-white/90">
                        Open video
                      </span>
                    </div>
                  </div>
                </button>
              ) : (
                <>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    onLoad={() => setIsIframeReady(true)}
                  />
                  {!isIframeReady && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
                      <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading embed
                      </span>
                    </div>
                  )}
                </>
              )}
            </>
          ) : hasImage ? (
            <Image
              src={item.image!.src}
              alt={item.image!.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={index < 2 ? "eager" : "lazy"}
              priority={index < 2}
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

          <h3 className="break-words text-3xl font-bold text-bits-heading transition-colors duration-300 group-hover:text-bits-green">
            {item.title}
          </h3>

          <p className="mt-3 line-clamp-4 text-base leading-relaxed text-bits-text">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                  News & Events
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-bits-text">
                Stay updated with the latest happenings at BITS College. Discover workshops, hackathons, achievements, and inspiring stories from our community.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              className="grid gap-10 sm:grid-cols-2"
            >
              {visibleItems.map((item) => (
                <NewsCard key={`${item.title}-${item.date}`} item={item} index={0} />
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination current={page} total={totalPages} onChange={setPage} />
        </section>
      </div>
    </div>
  );
}
