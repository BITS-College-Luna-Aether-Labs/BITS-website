import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { getAllPublishedSlugs } from "@/lib/cms";

const staticPages: string[] = [
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
  "short-term-trainings",
  "library",
  "college-news",
  "inauguration",
  "student-appreciation-night",
  "workshop",
  "college-day",
  "bootcamp",
  "scholarship-recipients",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = SITE.url.replace(/\/$/, "");
  const cmsSlugs = await getAllPublishedSlugs();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    ...staticPages.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const newsEntries: MetadataRoute.Sitemap = cmsSlugs.map((slug) => ({
    url: `${siteUrl}/college-news/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...newsEntries];
}
