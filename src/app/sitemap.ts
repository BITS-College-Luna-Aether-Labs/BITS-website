import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

const slugs: string[] = [
  "who-we-are",
  "facilities",
  "partners-and-clients",
  "faculty",
  "undergraduate-program",
  "graduate-program",
  "research",
  "software-engineering",
  "undergrad-admission",
  "graduate-admission",
  "tuition",
  "student-support",
  "short-trainings",
  "library",
  "college-news",
  "inauguration",
  "student-appreciation-night",
  "workshop",
  "college-day",
  "bootcamp",
  "scholarship-recipients",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE.url.replace(/\/$/, "");

  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...slugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
