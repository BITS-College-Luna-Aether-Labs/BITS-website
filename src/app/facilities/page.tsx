import type { Metadata } from "next";
import { FacilitiesContent } from "@/components/about/FacilitiesContent";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Explore our state-of-the-art campus facilities and learning spaces.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return <FacilitiesContent />;
}
