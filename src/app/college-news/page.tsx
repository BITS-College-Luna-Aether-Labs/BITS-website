import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/cms";
import { CmsNewsPage } from "./CmsNewsPage";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news and upcoming events at BITS College.",
  alternates: { canonical: "/college-news" },
};

const ITEMS_PER_PAGE = 6;

export default async function CollegeNewsPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const page = Math.max(1, Number(params.page) || 1);

  const result = await getPublishedPosts(page, ITEMS_PER_PAGE);
  const totalPages = Math.max(
    1,
    Math.ceil(result.pagination.total / ITEMS_PER_PAGE),
  );

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <div id="content">
        <section className="relative overflow-hidden bg-[var(--bits-surface)] pt-[72px] lg:pt-[80px]">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-50 to-emerald-50 opacity-60 dark:from-gray-900 dark:to-gray-800 dark:opacity-40" />
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green/10 dark:opacity-30" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200 mix-blend-multiply opacity-20 blur-3xl dark:bg-bits-green-dark/10 dark:opacity-30" />

          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-bits-heading sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-lime-700 to-emerald-700 bg-clip-text text-transparent dark:from-bits-green dark:to-bits-gold-light">
                  News & Events
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-bits-text">
                Stay updated with the latest happenings at BITS College.
                Discover workshops, hackathons, achievements, and inspiring
                stories from our community.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <CmsNewsPage
            initialPosts={result.posts}
            initialTotalPages={totalPages}
            initialPage={page}
          />
        </section>
      </div>
    </div>
  );
}
