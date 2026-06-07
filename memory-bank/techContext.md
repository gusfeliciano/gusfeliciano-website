# Tech Context

> The stack and what binds our choices.
> Update when dependencies, runtime, or operational constraints change.

## Stack

- **Language**: TypeScript 5
- **Runtime / framework**: Next.js 16 (App Router), React 19
- **Database**: none
- **Hosting / deploy target**: Vercel (auto-deploy from GitHub, main branch)
- **Package manager**: npm

## Notable dependencies

- `next-mdx-remote` 5 — renders MDX post bodies (RSC variant)
- `gray-matter` — frontmatter parsing on post pages
- `next-themes` — dark mode
- `tailwindcss` 3.4 + `@tailwindcss/typography` — styling, `prose` for posts
- `@vercel/analytics` — traffic
- `lucide-react` + `react-icons` — icons (two icon libs)

## Development setup

```bash
npm install
npm run dev   # http://localhost:3000
```

## Environment variables

- none

## Constraints (technical)

- `.npmrc` sets `legacy-peer-deps=true` — required for Vercel builds after the
  Next 16 / React 19 upgrade (peer-dep conflicts); don't remove until deps catch up

## Known limitations

- ESLint 9 via `eslint-config-next` 16; `.eslintrc.json` is legacy-format
