# Agriflock360 Website

## Project info

Marketing website for Agriflock360, built with Vite, React, TypeScript, shadcn/ui and Tailwind CSS.

## Local development

Requirements:

- Node.js 22.12+ (Node 24 verified)
- npm 10+

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build locally with:

```sh
npm run build
```

Preview the production build with:

```sh
npm run preview
```

## Editing the project

You can update the project with any local IDE, GitHub web editing, or GitHub Codespaces.

Common workflow:

```sh
git clone <repository-url>
cd agriflock360-website
npm install
npm run dev
```

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Deployment

Production uses Cloudflare Pages. The build prerenders each page and generates an XML sitemap alongside the Vite assets.

Build command:

```sh
npm run build
```

Publish directory:

```sh
dist
```

Keep the generated `404.html` and route HTML files when deploying. Do not add a catch-all rewrite to the homepage. Other static hosts must support extensionless HTML routes and return HTTP 404 for unknown URLs.

Run `npm run test:seo` after building to check the generated SEO output. See [SEO and Search Console](docs/seo.md) for route metadata, hosting details and post-deployment sitemap submission.
