/** Home page — stacks five sections (hero, announcement, why-bits, programs, contact) */
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/constants/site";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementPopupLoader } from "@/components/home/AnnouncementPopupLoader";

/** Below-fold — keep initial JS smaller; ssr remains true (allowed in Server Components) */
const WhyBitsSection = dynamic(
  () => import("@/components/home/WhyBitsSection").then((m) => m.WhyBitsSection)
);
const ProgramsSection = dynamic(
  () => import("@/components/home/ProgramsSection").then((m) => m.ProgramsSection)
);
const GetInTouchSection = dynamic(
  () => import("@/components/home/GetInTouchSection").then((m) => m.GetInTouchSection)
);

export const metadata: Metadata = {
  title: `${SITE.name}: ${SITE.tagline}`,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyBitsSection />
      <ProgramsSection />
      <GetInTouchSection />
      <AnnouncementPopupLoader />
    </>
  );
}
