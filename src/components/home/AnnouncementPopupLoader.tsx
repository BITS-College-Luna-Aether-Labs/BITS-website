"use client";

import dynamic from "next/dynamic";

/** Client-only loader — `ssr: false` is invalid in Server Components */
export const AnnouncementPopupLoader = dynamic(
  () => import("@/components/home/AnnouncementPopup").then((m) => m.AnnouncementPopup),
  { ssr: false }
);
