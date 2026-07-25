import type { Metadata } from "next";
import { WhoWeAreContent } from "@/components/about/WhoWeAreContent";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Learn about BITS College — our mission, vision, and community.",
  alternates: { canonical: "/who-we-are" },
};

export default function WhoWeArePage() {
  return <WhoWeAreContent />;
}
