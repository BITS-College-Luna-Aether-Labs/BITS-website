import { NextRequest, NextResponse } from "next/server";
import { getCmsApiUrl } from "@/lib/cms";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const mediaId = Number(id);

  if (!Number.isInteger(mediaId) || mediaId <= 0) {
    return new NextResponse("Invalid media id", { status: 400 });
  }

  const cmsUrl = `${getCmsApiUrl()}/api/media/${mediaId}`;

  try {
    const forwardHeaders: Record<string, string> = {};
    const ifNoneMatch = request.headers.get("if-none-match");
    const range = request.headers.get("range");

    if (ifNoneMatch) forwardHeaders["if-none-match"] = ifNoneMatch;
    if (range) forwardHeaders["range"] = range;

    const cmsRes = await fetch(cmsUrl, {
      headers: forwardHeaders,
    });

    if (cmsRes.status === 304) {
      return new NextResponse(null, { status: 304 });
    }

    const headers = new Headers();
    const contentType = cmsRes.headers.get("content-type");
    const contentLength = cmsRes.headers.get("content-length");
    const cacheControl = cmsRes.headers.get("cache-control");
    const etag = cmsRes.headers.get("etag");
    const acceptRanges = cmsRes.headers.get("accept-ranges");
    const contentRange = cmsRes.headers.get("content-range");

    if (contentType) headers.set("content-type", contentType);
    if (contentLength) headers.set("content-length", contentLength);
    if (cacheControl) headers.set("cache-control", cacheControl);
    if (etag) headers.set("etag", etag);
    if (acceptRanges) headers.set("accept-ranges", acceptRanges);
    if (contentRange) headers.set("content-range", contentRange);

    return new NextResponse(cmsRes.body, {
      status: cmsRes.status,
      headers,
    });
  } catch {
    return new NextResponse("Media not found", { status: 404 });
  }
}
