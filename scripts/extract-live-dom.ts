/**
 * Extracts layout tokens from the live BITS College homepage DOM.
 * Run: bun run extract:live
 */
import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const LIVE_URL = "https://www.bitscollege.edu.et";
const OUT_DIR = join(process.cwd(), "analysis");

type SectionSample = {
  selector: string;
  tag: string;
  text: string;
  styles: Record<string, string>;
};

async function sampleStyles(page: import("@playwright/test").Page, selector: string) {
  return page.$eval(
    selector,
    (el) => {
      const s = getComputedStyle(el);
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        color: s.color,
        backgroundColor: s.backgroundColor,
        padding: s.padding,
        margin: s.margin,
        maxWidth: s.maxWidth,
        lineHeight: s.lineHeight,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow,
        display: s.display,
        gap: s.gap,
      };
    },
    { timeout: 15000 },
  ).catch(() => null);
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(LIVE_URL, { waitUntil: "networkidle", timeout: 90000 });
  await page.waitForTimeout(2000);

  const nav = await sampleStyles(page, "#primary-site-navigation, .main-header-menu, header");
  const heroH1 = await sampleStyles(page, "h1.elementor-heading-title, .elementor-heading-title");
  const body = await sampleStyles(page, "body");

  const sections: SectionSample[] = [];
  const headings = await page.$$eval(
    "h1.elementor-heading-title, h2.elementor-heading-title, h3.elementor-heading-title",
    (nodes) =>
      nodes.slice(0, 12).map((n) => ({
        tag: n.tagName,
        text: (n.textContent || "").trim().slice(0, 80),
      })),
  );

  for (const h of headings) {
    sections.push({
      selector: h.tag,
      tag: h.tag,
      text: h.text,
      styles: {},
    });
  }

  const viewports = [320, 375, 768, 1024, 1440] as const;
  const viewportSnapshots: Record<string, { width: number; scrollWidth: number; hasOverflow: boolean }> = {};

  for (const width of viewports) {
    await page.setViewportSize({ width, height: 800 });
    await page.waitForTimeout(500);
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    viewportSnapshots[String(width)] = {
      width,
      scrollWidth: metrics.scrollWidth,
      hasOverflow: metrics.scrollWidth > metrics.clientWidth + 2,
    };
  }

  const report = {
    url: LIVE_URL,
    extractedAt: new Date().toISOString(),
    body,
    nav,
    headings,
    viewports: viewportSnapshots,
  };

  writeFileSync(join(OUT_DIR, "live-dom-report.json"), JSON.stringify(report, null, 2));
  console.log("Wrote analysis/live-dom-report.json");
  console.log(JSON.stringify(report, null, 2));

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

