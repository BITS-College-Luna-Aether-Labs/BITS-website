import { NextRequest, NextResponse } from "next/server";
import { getPublishedPosts, CmsError } from "@/lib/cms";

export const revalidate = 60;

export async function GET(request: NextRequest) {
  const page = Math.max(1, Number(request.nextUrl.searchParams.get("page")) || 1);
  const limit = Math.min(
    Math.max(1, Number(request.nextUrl.searchParams.get("limit")) || 6),
    50,
  );

  try {
    const result = await getPublishedPosts(page, limit);

    return NextResponse.json({
      posts: result.posts,
      page: result.pagination.page,
      totalPages: Math.max(1, Math.ceil(result.pagination.total / limit)),
      total: result.pagination.total,
    });
  } catch (error) {
    const message =
      error instanceof CmsError
        ? error.code === "CMS_TIMEOUT"
          ? "The news service is taking too long to respond."
          : "The news service is temporarily unavailable."
        : "An unexpected error occurred.";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
