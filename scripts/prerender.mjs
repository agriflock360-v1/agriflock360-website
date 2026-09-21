import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const dist = resolve("dist");
const serverDir = resolve("node_modules/.cache/agriflock-prerender");
const modeIndex = process.argv.indexOf("--mode");
const mode = modeIndex === -1 ? "production" : process.argv[modeIndex + 1];

await build({
  mode,
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverDir,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});

const { render, renderSeoHead, seoPages, SITE_URL } = await import(pathToFileURL(resolve(serverDir, "entry-server.mjs")).href);
const template = await readFile(resolve(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-head-start-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("The HTML template is missing the SEO or prerender placeholder.");
}

for (const page of [...seoPages, { path: "/404" }]) {
  const body = await render(page.path);
  if (!body.includes("<h1")) throw new Error(`No primary heading rendered for ${page.path}`);
  const html = template
    .replace(/<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/, () => renderSeoHead(page.path))
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
  // Cloudflare serves /about.html as /about and redirects the .html alias.
  // Flat files preserve the site's existing extensionless, non-trailing-slash URLs.
  const filename = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  await writeFile(resolve(dist, filename), html);
}

const urls = seoPages.filter(page => !page.noindex).map(page => `  <url><loc>${SITE_URL}${page.path}</loc></url>`);
await writeFile(resolve(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`Prerendered ${seoPages.length} routes and a 404 page; sitemap contains ${urls.length} indexable URLs.`);
