import { NextRequest, NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/cms";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = Math.min(
    Math.max(1, Number(searchParams.get("limit")) || 6),
    20,
  );

  try {
    const result = await getPublishedPosts(page, limit);
    const totalPages = Math.max(1, Math.ceil(result.pagination.total / limit));

    return NextResponse.json({
      posts: result.posts,
      totalPages,
      page: result.pagination.page,
      total: result.pagination.total,
      isFallback: result.isFallback,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: true,
        message: error instanceof Error ? error.message : "Failed to load posts",
      },
      { status: 500 },
    );
  }
}
