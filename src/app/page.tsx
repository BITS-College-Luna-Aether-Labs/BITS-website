import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementSection } from "@/components/home/AnnouncementSection";
import { WhyBitsSection } from "@/components/home/WhyBitsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { GetInTouchSection } from "@/components/home/GetInTouchSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <WhyBitsSection />
      <ProgramsSection />
      <GetInTouchSection />
    </>
  );
}
