import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PDF_DIR = path.join(process.cwd(), "public", "images", "About-Who we are");

const ALLOWED_FILES = new Set([
  "graduate_accreditation.pdf",
  "undergraduate_accreditation.pdf",
]);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file || !ALLOWED_FILES.has(file)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const filePath = path.join(PDF_DIR, file);

  try {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new NextResponse("File not found", { status: 404 });
  }
}
