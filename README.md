# Akira Kurosawa — Photography Portfolio

Photographer portfolio site built with Next.js (App Router) and TypeScript.

## Features

- Bilingual: Ukrainian (default) and English, via `next-intl`, with localized URLs
- Light / dark theme with `next-themes`
- Pages: Home, Works (gallery + individual project pages), About, Contact
- SEO: per-page metadata, Open Graph / Twitter cards, JSON-LD, sitemap, robots.txt

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/[locale]/    routes: home, works, works/[slug], about, contact
  app/             root-level SEO files (sitemap, robots, manifest, opengraph-image)
  components/      shared UI components
  i18n/            next-intl routing/navigation config
  lib/             site config, works data, SEO helpers
  messages/        uk.json / en.json translation strings
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
