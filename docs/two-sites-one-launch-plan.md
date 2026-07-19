# Plan: Two Sites, One Launch

2026-06-07. Operationalizes the site strategy (panel + critics + Codex amendments) with today's facts:
Made Ordinary is **org/brand only** (nothing shipped, nothing announced publicly), madeordinary.com
target is **1–3 months**, and **Purpose Budget stays separate** from Made Ordinary entirely.

Owner reality check that shapes everything: solo, day job, sessions weeks apart. Every phase is
sized in *sessions*, not days, and the public launch date is set by the first App Store
submission's privacy-URL requirement — not by the calendar.

---

## Phase 0 — Personal site launch-prep (start now; ~3 sessions; independent of MO timing)

These de-risk gusfeliciano.com regardless of when the studio launches. Order matters.

*Escape hatch (Codex amendment): if an announcement ever lands inside one available session,
flip the order — do OG metadata first using the existing gray-matter call in `blog/[slug]/page.tsx`,
refactor to the loader after. Loader-first is the default with months of runway, not a hard blocker.*

**Session 1 — Tier 2 first: shared post loader** (`src/lib/posts.ts` on gray-matter)
- Owns everything: blog listing, post-page metadata, `generateStaticParams`, published-vs-hidden
  (today `EXCLUDED_POSTS` only hides from the listing; hidden/template posts still get routes),
  cover validation, kill both dead image fallbacks
- Migrate `blog/page.tsx` off the hand-rolled regex parser in the same change
- Why first: Tier 1's `generateMetadata` should be *built on* the loader, not add a third
  frontmatter call-site that Tier 2 then has to migrate

**Session 2 — Tier 1: OG/social cards** (built on the loader)
- `metadataBase` + sitewide `openGraph`/`twitter` metadata in `src/app/layout.tsx`
- One static default OG image in `/public` (visual comes from the redesign's asset work if ready;
  a plain typographic card if not — don't block on the redesign)
- Post-page `generateMetadata` reusing each post's `coverImage` as its OG image
- Verify: Serel Memory post renders as a proper card in a link preview

**Session 3 — 2026 copy refresh** (content only; the visual redesign restyles it later)
- Home one-liner + About: senior TPM / AWS SA who ships — author of Serel Memory, founder of Made Ordinary
- Projects page: Serel Memory becomes the flagship entry (repo + announcement post links); Cloud Resume
  entries demoted to compact list; Made Ordinary mentioned with soft pre-announcement copy
  ("currently building Made Ordinary, an indie app studio") — no link until madeordinary.com has a
  minimal public home (Codex: don't route people to a bare GitHub org pre-announcement)
- Resume button stays hidden (per strategy; revisit only in a recruiting-focused refresh)

## Phase 1 — Design both sites (weeks 1–3, parallel with Phase 0)

- Run Claude Design with the two new prompts:
  1. **Made Ordinary site** (full prompt, rewritten): Purpose Budget removed; Aery + Tune featured,
     Alio/Larken/Rein as coming-soon; NO dated Journal at launch; evergreen undated philosophy pages
     in scope ("Why Aery is local-first", "Why Tune is open source"); per-app release-notes space;
     About/founder section links to gusfeliciano.com as the narrative home
  2. **Personal site addendum** (paste into the in-progress redesign project): Projects restructure,
     OG card template design (default + post variant), footer (links to madeordinary.com, Serel Memory,
     RSS slot), 2026 identity line — so the two designs are coherent without merging brands
- Buy/confirm madeordinary.com DNS + set up hello@/support@ email (iCloud+ Custom Domain or
  Fastmail — pick once, zero ongoing)

## Phase 2 — Build madeordinary.com (sized ~6–10 implementation sessions; Codex calendar-realism:
expect 10–14 sessions once design polish, legal copy, DNS/email, and app content are counted, and
plan in months, not weeks — the repo's own history shows burst work separated by long gaps)

- **Stack: Next.js App Router (static) + Tailwind on Vercel — CONFIRMED by Codex.** Same stack as
  the personal site: one mental model, zero new ops, memory bank already documents the gotchas.
  Codex's condition: "keep madeordinary.com brutally static — do not import the personal site's
  blog complexity unless content volume proves it necessary."
- New repo in the madeordinary org (e.g. `madeordinary/site`), Serel Memory bank installed
  day one (his own pattern, and it's the project most likely to be touched in scattered sessions)
- Page priority order — **lead-app-first** (Codex amendment: build the full submission bundle for
  whichever app submits to the App Store first; the other app's pages must not block it):
  1. Home + Apps index (coming-soon states fine)
  2. **Lead app's submission bundle**: privacy page + Support page + contact path — Apple requires
     BOTH a privacy policy URL and a Support URL with real contact info at submission
     (developer.apple.com App Store Connect: App Information / App Review Information). Include the
     app's privacy-data inventory (what's collected: often "none") while writing the privacy page —
     the same answers feed App Store Connect's privacy labels
  3. Lead app's full app page; then the second app's bundle + page
  4. About (founder → gusfeliciano.com), Contact, Terms, 404
- Site can soft-launch (DNS live, no announcement) as soon as 1–2 is done — submission URLs
  available whenever the lead app is ready, independent of the full design

## Phase 3 — The public launch (when site is live AND first app is submitted/near-live)

- Publish "Introducing Made Ordinary" on gusfeliciano.com timed to the *announcement*, not the
  soft-launch — the post is the canonical archive of the story
- One-shot distribution checklist (zero recurring cadence): Tune → Jellyfin clients list +
  r/jellyfin; Aery → local-first/privacy + journaling communities; each share links the
  **madeordinary.com app page as the primary URL**; LinkedIn gets the founder-story angle
- RSS on gusfeliciano.com lands here (NEXT-tier item, built on the Phase 0 loader)
- Serel Memory follow-up post #1 (AI-workflow story) slots wherever a free weekend appears — it must
  not displace Phase 2 sessions

## What changed vs. the strategy doc

- Purpose Budget: OUT of Made Ordinary everywhere (answers open question #2). The MO site features
  Aery + Tune; PB keeps its own existing presence untouched.
- "Launch" recalibrated: the org exists but nothing is public — so the strategy's launch play
  applies to the *announcement moment*, which is Phase 3, not now. Nothing is time-critical this
  week except starting Phase 0.
- Tier ordering flipped (loader before OG metadata) — the strategy listed them by importance,
  this plan orders them by build dependency.

## Decision points — RESOLVED (Codex review 2026-06-07, verdict: sound-with-amendments)

1. **Stack** — Next.js static + Tailwind on Vercel, kept brutally static ✅
2. **Soft-launch DNS** — yes, quietly at Phase 2 step 2; public announcement waits ✅
3. **Lead app** — whichever submits first; its submission bundle (privacy + support + contact)
   builds first and nothing else blocks it ✅
