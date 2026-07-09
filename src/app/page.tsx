/** Home page — stacks five sections (hero, announcement, why-bits, programs, contact) */
import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";
import { AnnouncementPopup } from "@/components/home/AnnouncementPopup";
import { WhyBitsSection } from "@/components/home/WhyBitsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";

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
