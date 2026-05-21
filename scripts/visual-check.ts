/**
 * Validates local build is visible and has no horizontal overflow.
 * Run: bun run test:visual (requires dev or start server on :3333)
 */
import { chromium } from "@playwright/test";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const LOCAL_URL = process.env.BASE_URL || "http://localhost:3333";
const VIEWPORTS = [320, 375, 768, 1024, 1440] as const;
const OUT_DIR = join(process.cwd(), "analysis", "screenshots");

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results: Record<string, unknown> = {};

  await page.goto(LOCAL_URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  const heroVisible = await page.evaluate(() => {
    const h1 = document.querySelector("#hero-heading");
    if (!h1) return { found: false, opacity: 0 };
    const style = getComputedStyle(h1);
    const rect = h1.getBoundingClientRect();
    return {
      found: true,
      opacity: style.opacity,
      visible: rect.height > 0 && parseFloat(style.opacity) > 0.5,
      text: h1.textContent?.trim(),
    };
  });

  results.hero = heroVisible;

  if (!heroVisible.visible) {
    console.error("FAIL: Hero heading not visible (blank screen bug)");
    results.pass = false;
  } else {
    console.log("PASS: Hero heading visible");
    results.pass = true;
  }

  for (const width of VIEWPORTS) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(400);

    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      mainOpacity: (() => {
        const main = document.querySelector("main");
        if (!main) return null;
        return getComputedStyle(main).opacity;
      })(),
    }));

    const overflow = metrics.scrollWidth > metrics.clientWidth + 2;
    results[`viewport_${width}`] = { ...metrics, overflow };
    if (overflow) {
      console.error(`FAIL: Horizontal overflow at ${width}px`);
      results.pass = false;
    } else {
      console.log(`PASS: No overflow at ${width}px`);
    }

    await page.screenshot({
      path: join(OUT_DIR, `local-${width}.png`),
      fullPage: false,
    });
  }

  writeFileSync(
    join(process.cwd(), "analysis", "visual-check-report.json"),
    JSON.stringify(results, null, 2),
  );

  await browser.close();
  process.exit(results.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
