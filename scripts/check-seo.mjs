import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const read = path => readFile(path, "utf8");
const origin = "https://www.agriflock360.com";
const routes = [...(await read("src/App.tsx")).replace(/\{\/\*[\s\S]*?\*\/\}/g, "").matchAll(/<Route path="([^"]+)"/g)]
  .map(match => match[1]).filter(path => path !== "*");
const excluded = new Set(["/coming-soon", "/404"]);
const sitemap = await read("dist/sitemap.xml");
assert.match(sitemap, /^<\?xml version="1.0" encoding="UTF-8"\?>/);
assert.match(sitemap, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(new Set(urls), new Set(routes.filter(path => !excluded.has(path)).map(path => origin + path)));
assert.equal(urls.length, new Set(urls).size, "Duplicate sitemap URLs");
assert.match(await read("dist/robots.txt"), /Sitemap: https:\/\/www.agriflock360.com\/sitemap.xml/);
assert.equal(await read("dist/googled86a901fbe2a2ae7.html"), await read("public/googled86a901fbe2a2ae7.html"));
const redirects = await read("dist/_redirects").catch(error => {
  if (error.code === "ENOENT") return "";
  throw error;
});
assert.doesNotMatch(redirects, /^\/\*.*200/m, "A catch-all rewrite would override prerendered pages and 404s");

const titles = new Set();
const descriptions = new Set();
for (const path of [...routes, "/404"]) {
  const filename = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  const html = await read(resolve("dist", filename));
  const head = html.split("</head>")[0];
  const metadata = [...head.matchAll(/<meta\s[^>]*>/g)].map(match => match[0]);
  const meta = name => {
    const matches = metadata.filter(tag => tag.includes(`name="${name}"`) || tag.includes(`property="${name}"`));
    assert.equal(matches.length, 1, `${path}: ${name} should appear once`);
    return matches[0].match(/content="([^"]*)"/)[1];
  };
  const pageTitles = [...head.matchAll(/<title[^>]*>([^<]+)<\/title>/g)];
  assert.equal(pageTitles.length, 1, `${path}: exactly one title`);
  const title = pageTitles[0][1];
  assert.ok(!titles.has(title), `${path}: unique title`);
  titles.add(title);
  const description = meta("description");
  assert.ok(description.length > 40, `${path}: descriptive snippet`);
  assert.ok(!descriptions.has(description), `${path}: unique description`);
  descriptions.add(description);
  assert.equal(meta("og:title"), title);
  assert.equal(meta("twitter:title"), title);
  assert.equal(meta("og:description"), description);
  assert.equal(meta("twitter:description"), description);
  assert.equal(meta("og:image"), `${origin}/agriflock360-social-preview.png`);
  const canonicals = [...head.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  if (excluded.has(path)) {
    assert.match(meta("robots"), /noindex/);
    assert.equal(canonicals.length, 0, `${path}: excluded pages must not claim a canonical content page`);
    assert.doesNotMatch(head, /application\/ld\+json/);
  } else {
    assert.doesNotMatch(meta("robots"), /noindex/);
    assert.equal(canonicals.length, 1);
    assert.equal(canonicals[0][1], origin + path);
    assert.equal(meta("og:url"), origin + path);
    const schemaMatches = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.equal(schemaMatches.length, 1);
    const schema = JSON.parse(schemaMatches[0][1]);
    assert.equal(schema["@context"], "https://schema.org");
    assert.ok(schema["@graph"].some(item => item.url === origin + path && item.name === title.replaceAll("&amp;", "&")));
    if (path === "/pricing") {
      const app = schema["@graph"].find(item => item["@type"] === "SoftwareApplication");
      assert.deepEqual(app.offers.map(offer => [offer.price, offer.priceCurrency]), [[150, "KES"], [350, "KES"], [550, "KES"], [750, "KES"]]);
    }
  }
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: prerendered main heading`);
  assert.doesNotMatch(html, /<div id="root"><\/div>|<!--seo-head|\/src\/main.tsx/);
  assert.match(html, /<main[^>]*>[\s\S]{200,}<\/main>/);
  assert.match(html, /<a[^>]*href="\/features"/);
  // Catch server/client asset hash mismatches, including responsive images.
  const assets = new Set([...html.matchAll(/(?:src|href|poster)="(\/[^"?#]*)/g)].map(match => match[1]));
  for (const match of html.matchAll(/srcSet="([^"]+)"/gi)) {
    match[1].split(",").forEach(candidate => assets.add(candidate.trim().split(" ")[0]));
  }
  for (const asset of assets) {
    if (!asset.startsWith("/") || !/\.[a-z0-9]+$/i.test(asset)) continue;
    await access(resolve("dist", decodeURIComponent(asset.slice(1))));
  }
  console.log(`PASS ${path}: rendered content, metadata, indexing directives and assets`);
}
console.log(`SEO checks passed: ${routes.length} routes, a 404 page and ${urls.length} sitemap URLs.`);
