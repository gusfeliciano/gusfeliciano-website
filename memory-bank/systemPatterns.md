# System Patterns

> Architecture and design decisions. The "how" at the structural level.
> Update when an architectural decision is made or revised.
>
> This file holds the patterns *currently in force*. The dated record of *how* and
> *why* a decision was reached — with alternatives — lives in `decisionLog.md`.

## Architecture

Next.js App Router, all static/server-rendered pages. No API routes, no database.

```text
src/app/            → routes (home, about, projects, contact, blog, blog/[slug])
src/components/     → Navbar, Footer, ThemeToggle/Provider, SocialLinks, button
src/posts/*.mdx     → blog content with YAML frontmatter
public/             → profile image, resume PDF, post cover images
```

## Key decisions

- **MDX files in-repo as blog content**: no CMS; publish = commit (alternatives: CMS, headless CMS)
- **next-mdx-remote/rsc renders post bodies**: frontmatter parsed with gray-matter in
  `blog/[slug]/page.tsx` (note: `@next/mdx` + `mdxRs` is ALSO configured in
  `next.config.mjs` — dual MDX setup; only the next-mdx-remote path appears used by the blog)
- **next-themes for dark mode**: class strategy with Tailwind `dark:` variants

## Patterns in use

- Post bodies must NOT start with an H1 — `blog/[slug]/page.tsx` already renders
  frontmatter.title as the page H1 (older posts violate this and show double titles)
- Hiding posts: add filename to `EXCLUDED_POSTS` in `src/app/blog/page.tsx` — excluded
  from the listing but still statically generated and reachable by direct URL
- Blog listing parses frontmatter with a hand-rolled regex (`getPostMetadata`), while
  the post page uses gray-matter — two parsers for the same frontmatter
- Per-page `export const metadata` for SEO

## Component relationships

`layout.tsx` wraps everything in ThemeProvider + Navbar + Footer + Vercel Analytics.

## Data flow

Blog listing: `fs.readdirSync(src/posts)` → filter `EXCLUDED_POSTS` → regex frontmatter →
sort by date desc. Post page: `generateStaticParams` over all files → gray-matter →
`<MDXRemote source>` inside a Tailwind `prose` article.
