const { chromium } = require("playwright");
const PAGES = [
  ["index.html", "home1"],
  ["about.html", "about"],
  ["classes.html", "classes"],
  ["blog.html", "blog"],
  ["trainers.html", "trainers"],
];
(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  for (const [url, name] of PAGES) {
    await page.goto(`http://localhost:8812/${url}`, { waitUntil: "networkidle" });
    await page.screenshot({ path: `/tmp/shots2/${name}.png` });
  }
  await browser.close();
  console.log("done");
})();
