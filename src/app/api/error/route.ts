/** Collects client-side error reports sent via sendBeacon and logs them server-side */
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.error("[client-error]", JSON.stringify(body));
  } catch {
    const text = await request.text();
    console.error("[client-error]", text);
  }
  return new Response(null, { status: 204 });
}
