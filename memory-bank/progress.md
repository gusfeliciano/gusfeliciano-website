# Progress

> Honest status. What works, what doesn't, where we are overall.
> Update when something ships, breaks, or changes status.

## Status

**Phase:** shipped / maintenance

## What works

- All pages live on Vercel: home, about, projects, contact, blog + post pages
- MDX blog with frontmatter (title, date, excerpt, coverImage), 4 published posts
- Dark mode toggle, responsive layout, Vercel Analytics

## In progress

- Memory bank seeding (this session)

## What's left to build

- Nothing committed — site is feature-complete for current needs

## Known issues

- Resume download button commented out on home page (intentional? see decisionLog)
- Posts without `coverImage` fall back to `/images/default-cover.jpg`, which does
  not exist in `public/images/` — would 404 (all current posts set one, so latent)
- Blog listing's regex frontmatter parser breaks on values containing `: ` —
  gray-matter on the post page handles them fine, so listing/post can disagree

## Recent milestones

- 2026-06-07: all 14 Dependabot vulnerabilities cleared — next 16.2.7, postcss 8.5.15
  (scoped override for Next's nested copy), Codex-reviewed, build verified
- 2026-06-07: basecamp v0.1.0 installed, memory bank seeded
- 2026-01: Next.js 16 / React 19 upgrade, Vercel build fixed
- 2025: OWASP + cloud resume challenge post series, Vercel Analytics added
