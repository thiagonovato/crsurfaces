# CR Surfaces

Marketing site for CR Surfaces — flooring & countertop installation serving Sarasota and Tampa, FL.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4. Services content is authored as Markdown in `content/services/*.md` (rendered via `src/lib/services.ts`), and project photos are authored in `content/projects/*.md` (rendered via `src/lib/projects.ts`).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

All routes are statically prerendered (SSG), including one page per service via `generateStaticParams`.

## Deploy (Vercel)

Push to a Git repo and import it in Vercel — zero config needed, Next.js is auto-detected.

## Before going live

- Add real business address in `src/components/LocalBusinessJsonLd.tsx` if a physical location is added later.

## Adding a service

Add a new `.md` file to `content/services/` with the same frontmatter shape as the existing files (`title`, `slug`, `category`, `order`, `excerpt`, `metaDescription`). It will automatically appear in the services grid, sitemap, and get its own page at `/services/<slug>`.

## Adding a project

Add a new `.md` file to `content/projects/` with the same frontmatter shape as the existing files (`title`, `slug`, `category`, `order`, `excerpt`, `metaDescription`, `images`). Drop the photos in `public/images/gallery/` first and reference their paths in the `images` array. It will automatically appear on the homepage "Recent Projects" scroller, the `/projects` list, and get its own page at `/projects/<slug>`.
