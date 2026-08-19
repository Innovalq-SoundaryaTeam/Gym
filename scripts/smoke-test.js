const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

function listHtml(dir, base = "") {
  let out = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory() && !["node_modules","scripts",".git"].includes(f)) {
      out = out.concat(listHtml(full, base + f + "/"));
    } else if (f.endsWith(".html")) {
      out.push(base + f);
    }
  }
  return out;
}

(async () => {
  const pages = listHtml(".");
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium-1194/chrome-linux/chrome", args: ["--no-sandbox"] });
  let failures = 0;
  for (const url of pages) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        if (text.includes("ERR_TUNNEL_CONNECTION_FAILED") || text.includes("net::ERR")) return; // expected sandbox network block
        errors.push(text);
      }
    });
    await page.goto(`http://localhost:8811/${url}`, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForTimeout(150);
    const hasHeader = await page.locator("header, [data-site-header]").count();
    const hasFooter = await page.locator("footer").count();
    const title = await page.title();
    if (errors.length) {
      failures++;
      console.log(`❌ ${url} — JS errors:`, errors);
    } else {
      console.log(`✅ ${url} — "${title}" (header:${hasHeader} footer:${hasFooter})`);
    }
    await page.close();
  }
  await browser.close();
  console.log(`\n${pages.length - failures}/${pages.length} pages clean.`);
})();
