import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";
import { getAllPublishedSlugs, CmsError } from "@/lib/cms";

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
  "scholarship-aid",
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

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = SITE.url.replace(/\/$/, "");

  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `${siteUrl}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // Append CMS news posts
  try {
    const cmsSlugs = await getAllPublishedSlugs();

    if (Array.isArray(cmsSlugs) && cmsSlugs.length > 0) {
      const cmsPages: MetadataRoute.Sitemap = cmsSlugs.map((slug) => ({
        url: `${siteUrl}/college-news/${slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));

      pages.push(...cmsPages);
    }
  } catch (e) {
    // If CMS is unreachable, include only static pages
    if (e instanceof CmsError) {
      console.warn("CMS unavailable for sitemap — returning static pages only");
    }
  }

  return pages;
}
