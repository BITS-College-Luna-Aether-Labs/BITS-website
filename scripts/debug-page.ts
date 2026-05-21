import { chromium } from "@playwright/test";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("CONSOLE:", msg.type(), msg.text()));
  page.on("pageerror", (err) => console.log("PAGE ERROR:", err.message));

  await page.goto("http://localhost:3333", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);

  const debug = await page.evaluate(() => ({
    title: document.title,
    bodyText: document.body?.innerText?.slice(0, 500),
    hero: document.querySelector("#hero-heading")?.textContent,
    heroOpacity: document.querySelector("#hero-heading")
      ? getComputedStyle(document.querySelector("#hero-heading")!).opacity
      : null,
    mainChildren: document.querySelector("main")?.children.length,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    htmlClass: document.documentElement.className,
    errors: (window as unknown as { __errors?: string[] }).__errors,
  }));

  console.log(JSON.stringify(debug, null, 2));
  await page.screenshot({ path: "analysis/screenshots/debug-full.png", fullPage: true });
  await browser.close();
}

main();
