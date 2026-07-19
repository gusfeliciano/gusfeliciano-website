# Progress

> Honest status. What works, what doesn't, where we are overall.
> Update when something ships, breaks, or changes status.

## Status

**Phase:** shipped / maintenance

## What works

- All pages live on Vercel: home, about, projects, contact, blog + post pages
- MDX blog with frontmatter (title, date, excerpt, coverImage), 5 published posts
- Dark mode toggle, responsive layout, Vercel Analytics

## In progress

- Nothing — between efforts

## What's left to build

- Phase 0 (committed, ~3 sessions): shared post loader → OG/social cards → 2026 copy refresh
- Then per docs/two-sites-one-launch-plan.md: RSS + footer, OWASP post resolution,
  "Introducing Made Ordinary" post (timed to studio launch), Serel Memory follow-up posts

## Known issues

- Resume download button commented out on home page (intentional? see decisionLog)
- Posts without `coverImage` fall back to `/images/default-cover.jpg`, which does
  not exist in `public/images/` — would 404 (all current posts set one, so latent)
- Blog listing's regex frontmatter parser breaks on values containing `: ` —
  gray-matter on the post page handles them fine, so listing/post can disagree
- Older posts (pre-2026) duplicate the title: post page renders frontmatter.title as
  the H1 AND their bodies start with an H1. Quoted excerpts on older posts also show
  literal quote marks on listing cards. New posts avoid both; old ones not yet cleaned up

## Recent milestones

- 2026-06-07: site strategy + launch plan locked (multi-agent panel, Codex-reviewed twice);
  design prompts for both sites produced; strategy docs saved to docs/
- 2026-06-07: published Serel Memory (then basecamp) announcement post (giving-ai-coding-agents-a-memory)
  with cover image; verified build; live on Vercel
- 2026-06-07: all 14 Dependabot vulnerabilities cleared — next 16.2.7, postcss 8.5.15
  (scoped override for Next's nested copy), Codex-reviewed, build verified
- 2026-06-07: Serel Memory (then basecamp) v0.1.0 installed, memory bank seeded
- 2026-01: Next.js 16 / React 19 upgrade, Vercel build fixed
- 2025: OWASP + cloud resume challenge post series, Vercel Analytics added
