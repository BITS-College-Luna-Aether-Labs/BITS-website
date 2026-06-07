import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PDF_FILES: Record<string, { dir: string; name: string }> = {
  "graduate_accreditation.pdf": { dir: "About-Who we are", name: "graduate_accreditation.pdf" },
  "undergraduate_accreditation.pdf": { dir: "About-Who we are", name: "undergraduate_accreditation.pdf" },
  "scholarship_brochure.pdf": { dir: "Admissions-Scholarship", name: "BITS SCHOLARSHIPS_INFORMATION_BROCHURE_2023.pdf" },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file || !PDF_FILES[file]) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { dir, name } = PDF_FILES[file];
  const filePath = path.join(process.cwd(), "public", "images", dir, name);

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
