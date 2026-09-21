# SEO and Search Console

The canonical origin is `https://www.agriflock360.com`, matching the production redirect and the Search Console URL-prefix property supplied on 21 September 2026. Keep that property and the existing Google verification file.

## Build and page metadata

`npm run build` compiles the client, then prerenders every route using React's server renderer. It produces a homepage, individual extensionless route HTML files, a `404.html`, and `sitemap.xml` in `dist`. This runs without Chromium or API requests. The browser hydrates the same content and updates metadata during client navigation.

`src/lib/seo.ts` owns titles, descriptions, canonical URLs, Open Graph/Twitter cards, structured data and sitemap inclusion. When adding a route in `src/App.tsx`, add its entry to `seoPages`. `npm run test:seo` checks route coverage, initial HTML, metadata, image paths, indexability and sitemap output after a build.

Structured data describes the organization, website, current page, breadcrumbs and relevant app pages. Pricing offers come from the same KES plan data as the visible pricing page. No ratings or reviews are invented. These tags do not guarantee a rich result.

The temporary web-launch page (`/coming-soon`) is `noindex, follow` and omitted from the sitemap. The public project knowledge base remains indexable. The removed logo tool (`/process-logo`) and disabled `/brooder` route return 404. Missing pages have no canonical or promotional structured data, and are marked `noindex` even during client navigation.

## Cloudflare Pages

- Build command: `npm run build`; output directory: `dist`.
- Use Node 22.12+ (Node 24 is verified locally).
- Deploy the entire output, including `404.html`, `_headers`, `robots.txt`, the verification file and `sitemap.xml`.
- Keep the existing apex-to-www redirect in Cloudflare's domain configuration. Pages `_redirects` rules accept relative source paths, so the preferred-host rule belongs in the domain configuration.
- Do not restore `/* /index.html 200`: it would replace route HTML and make missing URLs look successful.
- Cloudflare serves files such as `features.html` at `/features`, redirects the `.html` alias, and uses `404.html` for unknown routes. Other hosts must be configured for extensionless files and real HTTP 404 responses.

Cloudflare's behavior is documented at https://developers.cloudflare.com/pages/configuration/serving-pages/. The ordinary Vite preview server is useful for browser checks but does not reproduce Cloudflare's 404 status handling; use `wrangler pages dev dist` or a deployed preview for HTTP checks.

## After deployment

1. Open `https://www.agriflock360.com/sitemap.xml` and confirm it returns XML with 14 public URLs. The count will change when routes are added.
2. In the existing Search Console property's **Sitemaps** screen, remove the failed `/features` sitemap submission. This removes the erroneous submission, not the page from Google.
3. Submit `sitemap.xml` in the field after `https://www.agriflock360.com/`. A sitemap must be a supported sitemap document, not a page such as `/features`.
4. Use URL Inspection and **Test live URL** on the homepage, `/features`, `/pricing` and `/download`. Confirm the rendered content and declared canonical, then request indexing for the updated pages.
5. Confirm a nonexistent URL returns HTTP 404, and that the canonical host and HTML metadata match on direct page visits.
6. Monitor indexing and performance after Google recrawls. The supplied screenshots show a baseline of 12 indexed pages, 36 clicks, 768 impressions, 4.7% CTR and average position 12.5 over three months; they are a snapshot, not live measurements.

Sitemap submission guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap.

## Implementation validation (21 September 2026)

- Production build and generated SEO checks passed for all 15 routes, the 404 page and 14 sitemap entries.
- TypeScript checks and lint on all changed source files passed. Repository-wide lint still reports the existing errors in `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx` and `tailwind.config.ts`.
- The existing knowledge-base checks passed (79 visitor questions and 83 sourced articles).
- Chromium verified every route, metadata during navigation and browser history, recovery from noindex/error pages, and canonical URLs with tracking parameters.
- All 14 public pages expose their main content without JavaScript. No hydration errors were found. Desktop checks covered all routes; mobile checks covered the homepage, features, pricing, contact and download.
- Cloudflare's local Pages emulator verified HTTP 404 for missing, nested missing and disabled brooder URLs, XML sitemap delivery, HTML/trailing-slash redirects, noindex headers and the Google verification file.
- These are local implementation checks. Production deployment and Search Console submission are separate steps; no live ranking or Core Web Vitals improvement is claimed.
