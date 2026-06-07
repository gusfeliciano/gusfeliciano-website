# Active Context

> The most volatile file in the bank. Current focus, recent moves, next steps.
> Update at the end of every working session.

## Current focus

Maintenance mode, with a redesign exploration queued. Latest: basecamp post published,
contact email href fixed (2026-06-07).

## Recent changes

- Fixed contact page mailto href (was template placeholder your.email@example.com) (2026-06-07)
- Created Claude Design redesign prompt doc — 3 directions (editorial / builder's desk /
  quiet professional); delivered to Gus, NOT in the repo (2026-06-07)
- Published "Giving AI Coding Agents a Memory - Why I Built basecamp" + cover image;
  drafted via multi-agent workflow, fact-checked vs README, Codex-reviewed (2026-06-07)
- Set madeordinary GitHub org bio (2026-06-07)
- Cleared all 14 Dependabot alerts: next → 16.2.7, postcss → 8.5.15 via scoped override (2026-06-07)

## Next steps

1. Run the redesign exploration in Claude Design (prompt doc delivered 2026-06-07);
   implementation would be an incremental Tailwind restyle, not a rebuild
2. Resume button decision — can fold into the redesign ("design where it would live")

## Open questions

- Restore the resume download button with an updated PDF, or remove it for good?
- Why is the OWASP Juice Shop post excluded from the blog listing?

## Notes for next session

- `EXCLUDED_POSTS` in `src/app/blog/page.tsx` controls blog listing visibility
- Hooks are intentionally off — open sessions with `/start`
