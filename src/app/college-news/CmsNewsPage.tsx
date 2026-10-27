"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { CmsNewsList } from "@/components/news/CmsNewsList";
import type { CmsPostListItem } from "@/lib/cms-types";

type Props = {
  initialPosts: CmsPostListItem[];
  initialTotalPages: number;
  initialPage: number;
};

export function CmsNewsPage({
  initialPosts,
  initialTotalPages,
  initialPage,
}: Props) {
  const [page, setPage] = useState(initialPage);
  const [posts, setPosts] = useState(initialPosts);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePageChange = useCallback(
    async (newPage: number) => {
      if (newPage < 1 || newPage > totalPages || loading) return;

      setLoading(true);

      try {
        router.push(`/college-news?page=${newPage}`, { scroll: false });

        const res = await fetch(`/api/cms?page=${newPage}&limit=6`);

        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json();
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setPage(newPage);
        window.scrollTo({ top: 300, behavior: "smooth" });
      } catch {
        // Fallback keep current posts if network failure
      } finally {
        setLoading(false);
      }
    },
    [totalPages, loading, router],
  );

  return (
    <>
      {loading && (
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-bits-muted">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-bits-green border-t-transparent" />
            Loading...
          </div>
        </div>
      )}
      <CmsNewsList
        posts={posts}
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </>
  );
}
