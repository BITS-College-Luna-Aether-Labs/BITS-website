import type { Metadata } from "next";
import { FacultyContent } from "@/components/academics/FacultyContent";

export const metadata: Metadata = {
  title: "Instructors",
  description: "Meet our talented and committed academic instructors.",
  alternates: { canonical: "/faculty" },
};

export default function FacultyPage() {
  return <FacultyContent />;
}
