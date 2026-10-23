import type { Metadata } from "next";
import { NewsEventsContent } from "@/components/news/NewsEventsContent";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news and upcoming events at BITS College.",
  alternates: { canonical: "/college-news" },
};

export default function CollegeNewsPage() {
  return <NewsEventsContent />;
}
