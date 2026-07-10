import type { Metadata } from "next";
import { UndergraduateProgramContent } from "@/components/academics/UndergraduateProgramContent";

export const metadata: Metadata = {
  title: "Undergraduate Programs",
  description: "Undergraduate programs in software engineering and IT systems.",
  alternates: { canonical: "/undergraduate-program" },
};

export default function UndergraduateProgramPage() {
  return <UndergraduateProgramContent />;
}
