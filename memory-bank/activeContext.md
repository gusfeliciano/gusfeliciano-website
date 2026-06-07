# Active Context

> The most volatile file in the bank. Current focus, recent moves, next steps.
> Update at the end of every working session.

## Current focus

Maintenance mode. Just installed basecamp (v0.1.0) for session continuity.

## Recent changes

- Installed basecamp memory bank + workflows; seeded bank via init-memory (2026-06-07)
- Dependency upgrades: Next 14 → 16, React 19, ESLint 9; `.npmrc` legacy-peer-deps for Vercel (2026-01)
- Commented out resume download button on home page

## Next steps

1. Commit the basecamp install
2. (user to define — content updates? resume button decision? new posts?)

## Open questions

- Restore the resume download button with an updated PDF, or remove it for good?
- Why is the OWASP Juice Shop post excluded from the blog listing?

## Notes for next session

- `EXCLUDED_POSTS` in `src/app/blog/page.tsx` controls blog listing visibility
- Hooks are intentionally off — open sessions with `/start`
