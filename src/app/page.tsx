/** Home page — stacks five sections (hero, announcement, why-bits, programs, contact) */
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/constants/site";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";
import { WhyBitsSection } from "@/components/home/WhyBitsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";

const AnnouncementPopup = dynamic(
  () => import("@/components/home/AnnouncementPopup").then((m) => ({ default: m.AnnouncementPopup })),
);

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <AnnouncementPopup />
      <HeroSection />
      <AnnouncementSection />
      <WhyBitsSection />
      <ProgramsSection />
      <GetInTouchSection />
    </>
  );
}
