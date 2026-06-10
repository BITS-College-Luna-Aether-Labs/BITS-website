import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const ALLOWED_FILES = new Set([
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
]);

export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get("file");

  if (!file || !ALLOWED_FILES.has(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    "About-Who we are",
    file
  );

  try {
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
        "Cache-Control": "public, max-age=3600",
        "X-Frame-Options": "SAMEORIGIN",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
