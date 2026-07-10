/** Home page — stacks five sections (hero, announcement, why-bits, programs, contact) */
import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";
import { WhyBitsSection } from "@/components/home/WhyBitsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";
import { AnnouncementPopup } from "@/components/home/AnnouncementPopup";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <WhyBitsSection />
      <ProgramsSection />
      <GetInTouchSection />
      <AnnouncementPopup />
    </>
  );
}
