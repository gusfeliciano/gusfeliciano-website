# Active Context

> The most volatile file in the bank. Current focus, recent moves, next steps.
> Update at the end of every working session.

## Current focus

Launch-prep era: visual redesign in progress (Claude Design) + "two sites, one launch"
plan locked (2026-06-07). Next implementation work is Phase 0 of the plan.

## Recent changes

- Site strategy locked via 11-agent panel + Codex; execution plan Codex-approved; both
  Claude Design prompts produced (MO site v2, personal addendum); all saved to docs/ (2026-06-07)
- Decisions: ecosystem split, MO stack (Next.js/Vercel), Purpose Budget out, resume
  button stays hidden — see decisionLog (2026-06-07)
- Fixed contact page mailto href (was template placeholder your.email@example.com) (2026-06-07)
- Claude Design redesign prompt doc (now in repo: docs/personal-site-claude-design-prompt.md) (2026-06-07)
- Published "Giving AI Coding Agents a Memory - Why I Built basecamp" + cover image (2026-06-07)

## Next steps

1. Phase 0, session 1: shared post loader src/lib/posts.ts (gray-matter; owns listing,
   post page, generateStaticParams, published/hidden, cover validation) — see plan
2. Phase 0, session 2: OG/social metadata built on the loader; session 3: 2026 copy refresh
3. Gus: paste docs/personal-site-redesign-addendum.md into the in-progress Claude Design
   project; start a new project with docs/made-ordinary-website-claude-design-prompt-v2.md

## Open questions

- Why is the OWASP Juice Shop post excluded from the blog listing?
  (plan puts resolution in NEXT tier: render-check via new loader, un-exclude or delete)

## Notes for next session

- `EXCLUDED_POSTS` in `src/app/blog/page.tsx` controls blog listing visibility
- Hooks are intentionally off — open sessions with `/start`
