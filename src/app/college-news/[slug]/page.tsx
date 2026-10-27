import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/cms";
import { PostDetailClient } from "./PostDetailClient";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    const plainText = stripHtml(post.readMore?.content || post.content).slice(0, 160);
    const title = post.readMore?.title || post.title;

    return {
      title,
      description: plainText || `Read more about ${title} at BITS College.`,
      alternates: { canonical: `/college-news/${slug}` },
      openGraph: {
        title,
        description: plainText,
        type: "article",
        publishedTime: post.publishedDate,
        images: post.media.url ? [{ url: post.media.url }] : [],
      },
    };
  } catch {
    return {
      title: "News Article | BITS College",
      description: "BITS College news and events article.",
    };
  }
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;

  let post = null;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  return <PostDetailClient post={post} />;
}
