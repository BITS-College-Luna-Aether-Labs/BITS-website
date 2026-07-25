import type { Metadata } from "next";
import { PartnersAndClientsContent } from "@/components/about/PartnersAndClientsContent";

export const metadata: Metadata = {
  title: "Partners and Clients",
  description: "Our industry partners and organizational clients.",
  alternates: { canonical: "/partners-and-clients" },
};

export default function PartnersAndClientsPage() {
  return <PartnersAndClientsContent />;
}
