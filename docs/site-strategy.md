# gusfeliciano.com — Content & Ecosystem Strategy

Produced 2026-06-07 by a multi-agent panel (4 lenses: career, studio-funnel, writer, pragmatist),
revised after 3 adversarial critics (7 critical flaws fixed), and amended per Codex independent
review (verdict: **sound-with-amendments** — all 4 amendments applied below).

---

## Site mission

**gusfeliciano.com is the durable identity-and-writing home for Gus the person**: the 30-second
proof for recruiters that he's a senior TPM / cloud architect who actually ships production and
open-source software, and the canonical home for his dated long-form writing — career/cloud/security,
AI tooling and basecamp, and the Made Ordinary making-of stories.

It is the **author/narrative layer** of the ecosystem, not its router. Every feature must be
build-once, file-driven, and cadence-free.

## Ecosystem map — who is canonical for what

| Property | Canonical for | Never |
|---|---|---|
| **gusfeliciano.com** | Identity, career credentials, ALL dated narrative writing | Product facts, app support |
| **madeordinary.com** | Product facts, support, per-app privacy/terms, **evergreen undated** product-philosophy pages ("Why Aery is local-first"), and product-support artifacts users need there (release notes, changelogs, security notices) | Dated narrative essays *at launch* (default with revisit triggers — e.g. an app gains real traction — not permanent doctrine) |
| **basecamp (GitHub)** | The tool itself — README, docs, releases | — (announcements/deep-dives are blog posts that the README links to) |
| **Social (LinkedIn etc.)** | Distribution only | Canonical anything |

Pattern verified against how Marco Arment, Mitchell Hashimoto, Simon Willison, Casey Liss structure
theirs — with the honest caveat that it's not unanimous (Panic and Ghostty blog on the product side).
What binds *here* is the constraint: solo author, sessions weeks apart, recruiter-first personal site.

## Writing strategy

- **One canonical home for dated writing: gusfeliciano.com.** Career posts, security write-ups,
  basecamp/AI-tooling posts, and Made Ordinary build-in-public stories all live as MDX in `src/posts/`.
- The per-post "which blog?" question is pre-answered by a one-line editorial rule (record it in
  `.rules`): *every dated post defaults to gusfeliciano.com; madeordinary.com hosts evergreen undated
  product pages + release notes/changelogs; app pages are the canonical target for product-fact links.*
- Exception (Codex amendment #4): release notes, changelogs, security notices live with the apps on
  madeordinary.com — users need them there.
- No tags/series frontmatter until ~8–12 posts. No taxonomy UI until ~12–15.
- Canonical copy never moves to Medium/Substack/dev.to; syndication always points home.
- **The priority rule that keeps this honest: no session goes to plumbing while a drafted-in-the-head
  post is unwritten — except the minimum launch gate.**

## Launch play (Made Ordinary)

**Ruthless version (post-Codex): pre-launch personal-site work is ONLY the three items below.**
Everything else loses to building madeordinary.com itself.

- **Tier 1 — must precede the announcement (~1–2h):** `metadataBase` + sitewide OpenGraph/Twitter
  metadata in `src/app/layout.tsx`, one static default OG image, `generateMetadata` on the post page
  reusing each post's `coverImage` as its OG image. Verify the launch post renders as a card.
- **Tier 2 — strongly preferred pre-launch (~one session):** shared `src/lib/posts.ts` loader on
  gray-matter that owns **everything** (Codex amendment #2): listing, post-page metadata,
  `generateStaticParams`, published-vs-hidden definition (today hidden/template posts still get
  routes), cover validation (kill both dead fallbacks). Migrate `blog/page.tsx` off the regex parser
  in the same change.
- **Escape hatch** if the launch window arrives before Tier 2: launch post title/excerpt contain no
  `: `, `coverImage` set, and the LISTING card gets a render check — not just the post page.
- **Tier 3 — minimal copy refresh:** home one-liner + About updated to 2026 identity (basecamp author,
  Made Ordinary founder), Projects page links out to madeordinary.com.
- **Launch day:** publish "Introducing Made Ordinary" on gusfeliciano.com timed to madeordinary.com
  go-live. The post is the canonical *archive* of the story, not the launch vehicle. Reach comes from
  a one-shot distribution checklist: Tune → Jellyfin clients list + r/jellyfin; Aery → local-first/
  privacy + journaling communities; basecamp → Show HN + Claude Code/Codex communities. **Each share
  links the madeordinary.com app page as the primary URL** (the young domain earns the launch links).
  LinkedIn gets the founder-story angle.
- Explicitly NOT gating: RSS, sitemap, robots, footer. A feed has zero subscribers on day one; a
  missed launch window costs more than a missing feed.

## Roadmap

### NOW (pre/at launch — capped at ~3 sessions of personal-site work)
1. **Tier 1 OG metadata** — one short session; zero ongoing
2. **Tier 2 shared loader** (full scope per amendment #2) — one session; *reduces* ongoing risk
3. **2026 copy refresh** (home + About + Projects links to studio) — one session; one-time
4. **Write & publish "Introducing Made Ordinary"** + one-shot distribution checklist — a weekend + an afternoon
5. ~~basecamp follow-up post #1~~ → **conditional** (Codex amendment #1): only if studio launch work
   is blocked or the window slips; otherwise it's first in NEXT

### NEXT (post-launch)
1. **basecamp follow-up post #1** — the AI-workflow story (how the memory bank + cross-agent review
   works in practice; doubles as the /uses replacement). The 2026 AI-agent content wave is live and
   basecamp has the only existing organic channel (GitHub)
2. **RSS** (`feed.xml` route on the shared loader) + footer rebuild (auto-year, links to
   madeordinary.com + basecamp) — one session; zero ongoing
3. **Resolve the OWASP post** — render-check via new loader, un-exclude or delete — under an hour
4. **"Why I started Made Ordinary" post** — seeds the indie-dev pillar
5. basecamp follow-up post #2 if #1 lands well

### LATER (batched, triggered, or with the redesign)
- sitemap.ts + robots.ts — batch into the next loader-touching session
- Resume (Codex amendment #3): **keep hidden by default**; unhide only during a recruiting-focused
  refresh with a freshly exported PDF (current one is July 2024 — 22 months stale) and an
  acknowledged refresh obligation
- Tags/series frontmatter — trigger: ~8–12 posts; taxonomy UI — trigger: ~12–15
- JSON-LD (Person + BlogPosting, generated from the loader)
- Housekeeping batch: README fixes (false contact-form claim), legacy favicon consolidation
- manifest + modern icons — with the redesign's asset work, not before
- Per-post dynamic OG images — trigger: only if share volume demands it
- **Record the editorial rule in `.rules`** — minutes; this keeps the whole strategy honest

## Don't build (the list that matters)

- A dated Made Ordinary "Journal" at launch (revisit triggers: app traction, user-facing release content needs)
- The resume button over the stale PDF
- Launch-gating any plumbing beyond Tier 1
- Plumbing sessions while a post is unwritten
- /now page, maintained /uses page (tell the stack story once, in a dated post)
- Newsletter, email capture, popups, contact form, backend, CMS, search, comments, taxonomy UI (yet)
- Hosting app pages on gusfeliciano.com; merging the two brands; re-homing writing off-domain
- Dynamic OG images today; data-driven Projects system (hardcoded array IS the right call at 6 entries)
- Extra analytics; any recurring marketing cadence

## Open questions for Gus

1. When is the madeordinary.com go-live window? (Tier 1+2 sequencing hangs on it)
2. Does Purpose Budget fold under Made Ordinary on the studio site, or stay separate?
3. Is the "Introducing Made Ordinary" post a launch-day piece or published a few days after go-live?
