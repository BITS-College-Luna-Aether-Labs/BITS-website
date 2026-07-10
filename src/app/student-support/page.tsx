import type { Metadata } from "next";
import { StudentSupportContent } from "@/components/services/StudentSupportContent";

export const metadata: Metadata = {
  title: "Student Support",
  description: "Support services available to BITS students.",
  alternates: { canonical: "/student-support" },
};

export default function StudentSupportPage() {
  return <StudentSupportContent />;
}
