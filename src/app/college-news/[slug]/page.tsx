import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, CmsError } from "@/lib/cms";
import { PostDetailClient } from "./PostDetailClient";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    const plainText = post.content
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160);

    return {
      title: post.title,
      description: plainText || `Read more about ${post.title} at BITS College.`,
      alternates: { canonical: `/college-news/${slug}` },
      openGraph: {
        title: post.title,
        description: plainText,
        type: "article",
        publishedTime: post.publishedDate,
        images: post.media.url ? [{ url: post.media.url }] : [],
      },
    };
  } catch {
    return {
      title: "News Article",
      description: "BITS College news article.",
    };
  }
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;

  let post = null;
  let error: string | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch (e) {
    if (e instanceof CmsError && e.status === 404) {
      notFound();
    }

    error =
      e instanceof CmsError
        ? e.code === "CMS_TIMEOUT"
          ? "The news service is taking too long to respond. Please try again."
          : "The news service is temporarily unavailable."
        : "An unexpected error occurred.";
  }

  if (!post && !error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--bits-page)] text-bits-heading">
      <PostDetailClient post={post} error={error} />
    </div>
  );
}
