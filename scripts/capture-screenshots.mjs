import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE_URL = "https://kadirakdogan.vercel.app";
const OUTPUT_DIR = path.resolve(process.cwd(), "assets/screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
  });

  const page = await browser.newPage();

  // Desktop viewport (Retina 2x for sharp GitHub displays)
  await page.setViewport({
    width: 1360,
    height: 820,
    deviceScaleFactor: 2,
  });

  console.log("1. Capturing Dark Mode Hero...");
  await page.goto(BASE_URL, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-home-dark.png"),
  });

  console.log("2. Capturing Light Mode Hero...");
  await page.evaluate(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-home-light.png"),
  });

  // Reset back to Dark mode for subsequent showcases (dark mode is signature look)
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  });

  console.log("3. Capturing Experience Page...");
  await page.goto(`${BASE_URL}/experience`, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-experience.png"),
  });

  console.log("4. Capturing Skills Matrix Page...");
  await page.goto(`${BASE_URL}/skills`, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-skills.png"),
  });

  console.log("5. Capturing Certifications Page...");
  await page.goto(`${BASE_URL}/certifications`, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-certifications.png"),
  });

  console.log("6. Capturing Contact Page...");
  await page.goto(`${BASE_URL}/contact`, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-contact.png"),
  });

  console.log("7. Capturing CV Page...");
  await page.goto(`${BASE_URL}/cv`, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-cv.png"),
  });

  console.log("8. Capturing Mobile Showcase...");
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await page.goto(BASE_URL, { waitUntil: "networkidle0" });
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  });
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(OUTPUT_DIR, "preview-mobile.png"),
  });

  await browser.close();
  console.log("Screenshots captured successfully!");
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
