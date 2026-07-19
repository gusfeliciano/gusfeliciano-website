# Made Ordinary Website — Claude Design Prompt v2

For: Anthropic's Claude Design (claude.ai → palette icon)
Purpose: Design the studio website at madeordinary.com — all pages
Supersedes: the original Made Ordinary design prompt. Changes in v2: **Purpose Budget removed**
(it stays a separate product, not part of the studio), **no dated Journal at launch** (ecosystem
strategy: all dated writing lives on gusfeliciano.com), **evergreen philosophy pages and per-app
release notes added**, **Support page elevated to launch-critical** (Apple requires both a privacy
policy URL and a Support URL with real contact info at App Store submission), and implementation
locked to Next.js static + Tailwind on Vercel.

---

## How to use this file

1. Open claude.ai → palette icon → Claude Design.
2. Start a new project named "Made Ordinary Website."
3. Paste the entire prompt below as your first message.
4. Iterate using the follow-up prompts at the bottom.
5. Optionally upload `aery/docs/prd.md` and `tune/docs/prd.md` as reference files.

---

## The prompt — paste this entire block

> # Made Ordinary — studio website design brief for Claude Design
>
> I'm designing the marketing website for **Made Ordinary**, an indie software studio that builds
> intentional apps for Apple platforms. The site lives at **madeordinary.com**. The voice is
> **calm, intentional, warm, humble** — the studio's thesis is "elevating the everyday." We're
> explicitly NOT trying to look like a VC-backed startup; we want to feel like a small, considered
> publishing house for software.
>
> The site has five jobs, in priority order:
> 1. Host the App Store submission requirements: a **privacy policy URL and a Support page with
>    real contact info per app** — Apple requires both before an app can be submitted
> 2. Showcase the apps: **Aery** and **Tune** now; **Alio, Larken, Rein** coming soon
> 3. Establish the studio's identity and philosophy
> 4. Serve as the canonical landing page for community arrivals — when someone shares Tune in a
>    Jellyfin forum or Aery in a local-first/privacy community, THIS site's app page is the link
> 5. Tell the studio's story honestly — solo founder, indie, here for the long haul
>
> One structural rule from our ecosystem strategy: **this site hosts no dated blog or journal.**
> All dated narrative writing (launch stories, making-of posts) lives on the founder's personal
> site, gusfeliciano.com, which links here. What this site DOES host: **evergreen, undated
> product-philosophy pages** ("Why Aery is local-first," "Why Tune is open source") and **per-app
> release notes** (versioned support artifacts, not essays). Design for that split.
>
> Reference points I admire: **Tiny.dev** (humility), **Iconfactory** (portfolio-as-studio),
> **Panic.com** (personality), **Linear's company page** (restraint with confidence), **Tapbots**
> (apps presented with care). NOT VC-startup launch sites, NOT agency sites, NOT corporate.
>
> Please design a complete responsive marketing website. Start with the design system, then mock
> up each page. Show desktop (1440px) AND mobile (375px) versions of every page.
>
> ## Design system to establish first
>
> - **Typography:** type-driven. Editorial serif for headings (a warm serif like Newsreader,
>   GT Sectra, or similar). Clean sans-serif for body and UI. Generous line height.
> - **Color palette:** warm and paper-like. Off-white background (#FAF7F2 or similar warm cream).
>   Deep warm gray for body text. ONE accent color (soft amber #D89B4F or deep sage #5B6F4B).
>   Light and dark mode — dark mode should feel like ink on warm dark paper, not gray on black.
> - **Spacing and layout:** generous whitespace. Single-column where possible. Content max-width
>   ~720px for reading comfort.
> - **Imagery:** sparse and intentional. Real app screenshots (provided later), minimal
>   illustration. No stock photography, no abstract gradients.
> - **Iconography:** subtle — SF Symbols-style or hand-drawn line work.
> - **Motion:** restrained. Fade-ins on scroll, subtle hover states. Nothing bouncing.
> - **Voice in copy:** first person ("we" or "I"). Plain English. No corporate-ese, no superlatives.
>
> ## Pages needed
>
> Design these in order. Desktop + mobile for each.
>
> ### 1. Home (madeordinary.com)
> - Hero: studio name in beautiful type, tagline ("An indie studio building intentional apps for
>   everyday life." — or similar), short thesis paragraph
> - Apps grid: TWO featured apps (Aery, Tune) as elegant cards — app icon, name, one-line
>   description, "Learn more." Three "coming soon" cards (Alio, Larken, Rein) styled to feel like
>   a curated bookshelf with room to grow, not an empty marketplace
> - Brief "About the studio" section: founder photo placeholder + one paragraph + a quiet link:
>   "The studio's story and making-of writing lives on [the founder's blog]" → gusfeliciano.com
> - Footer: nav (Apps, About, Support), social links, "© [year] Made Ordinary, LLC", "Made in Colorado"
>
> ### 2. Apps index (madeordinary.com/apps)
> - Title + brief intro; full grid: Aery, Tune + coming-soon cards for Alio, Larken, Rein
> - Each card: app icon, name, platform badges, short tagline, "View" link
>
> ### 3. App page — Aery (madeordinary.com/apps/aery)
> - Hero: app icon, name, tagline ("A quiet place for your thoughts" or similar), platform badges
>   (iPhone, iPad, Mac)
> - Brief pitch paragraph; 3–5 feature highlights with screenshots/subtle illustrations
> - **Evergreen "Why local-first" section**: undated, philosophy-grade — local-first, end-to-end
>   encrypted, no Aery account, your data is yours. Design it so it could graduate to a standalone
>   page (madeordinary.com/apps/aery/why-local-first) if it grows
> - Pricing: Free + Pro ($29.99 lifetime, $4.99/mo, $34.99/yr)
> - Download buttons (App Store badge placeholder); "Made by Made Ordinary" link
> - This page is a **canonical link target** — someone arriving cold from a privacy/journaling
>   community should get the whole pitch without visiting any other page
>
> ### 4. App page — Tune (madeordinary.com/apps/tune)
> - Hero: app icon, name, tagline ("Your Jellyfin library, on every screen" or similar), platform
>   badges (iPhone, iPad, Apple TV)
> - Brief pitch; 3–5 feature highlights
> - **Evergreen "Why open source" section**: MPL-2.0, GitHub link, donations support development
> - Tuned for self-hosters arriving from Jellyfin communities: "free, open source, your server,
>   your data" must be visible above the fold
> - Download buttons (App Store badge + "View on GitHub"); "Made by Made Ordinary" link
>
> ### 5. Support (madeordinary.com/support) — LAUNCH-CRITICAL
> - Apple requires a Support URL with real contact information per app at submission. This page
>   ships in the first cut of the site, before the full design is done — design it to work standalone
> - Brief intro; per-app support blocks (Aery support email, Tune issues on GitHub)
> - Email: support@madeordinary.com; FAQ section with 5–8 common questions
>
> ### 6. Per-app release notes (madeordinary.com/apps/aery/releases)
> - Versioned, undated-essay-free support artifact: version number, date, short plain-English
>   change list. Reusable template shown for Aery
> - This is NOT a blog — design it as reference documentation with warmth
>
> ### 7. About (madeordinary.com/about)
> - Founder story: who, why this studio exists, what "intentional" means here
> - Studio principles (3–5 considered statements — privacy-first, indie, local-first where
>   possible, long-term commitment)
> - Link to the founder's personal site for the longer story and ongoing writing
> - Contact CTA at the bottom
>
> ### 8. Contact (madeordinary.com/contact)
> - Simple: email (hello@madeordinary.com), social links, response-time note. NOT a form.
>
> ### 9. Privacy policy template (madeordinary.com/apps/aery/privacy)
> - The most important page for App Store submission. Reusable per-app template; show Aery's
>   version: What we collect (almost nothing — say so), How we use it, Sharing (we don't), Your
>   rights, Contact, Effective date
> - Plain English, not legalese. Single column, generous reading width
>
> ### 10. Terms (madeordinary.com/terms) — brief, plain English
>
> ### 11. 404 — on-brand, warm, links to home + app cards
>
> ### 12. Header + footer components
> - Sticky header: wordmark, nav. Footer: sitemap, social, copyright, "Made in Colorado"
>
> ## What to avoid
>
> - Marketing-speak ("revolutionize," "AI-powered," "unleash")
> - A blog/journal section (lives on the founder's site by design)
> - Auto-playing media, carousels, popups, email-capture nags
> - Cookie banners (we don't collect cookies — say so quietly)
> - Fake-looking testimonials, investor/team logos, cookie-cutter SaaS template look
>
> ## Output preferences
>
> - All pages desktop (1440px) + mobile (375px); light mode default; dark mode for Home, About,
>   one app page
> - Design system page first: typography, both palettes, components (cards, buttons, badges,
>   release-note entry, FAQ item), spacing scale
> - Realistic copy in the studio's voice — not lorem ipsum
> - The apps grid should feel like a curated bookshelf with two books and three reserved slots —
>   intentional, not sparse

---

## After the first generation — follow-up prompts

- "Refine the home page — less SaaS, more 'studio with a viewpoint.'"
- "Show 3 alternate hero treatments: type-heavy, image-heavy, minimalist."
- "Design the standalone 'Why Aery is local-first' page — philosophy-grade, evergreen, the page a
  privacy community would link to directly."
- "Show the Tune page exactly as a r/jellyfin reader would experience it on mobile — does the
  self-hoster pitch land in the first screen?"
- "Design the coming-soon card states for Alio, Larken, Rein — intriguing but honest, no fake
  countdown energy."
- "Mock the Support page as it would ship in the first cut — standalone, before the rest of the
  site exists. Does it still feel like Made Ordinary?"
- "Show the release-notes template with 5 versions of history — still scannable?"
- "Design a press kit page (logo files, screenshots, founder bio, brand colors)."
- "Try a darker, moodier dark-mode home — beautifully designed magazine at night."
- "Show the apps index at 6 shipped apps — does the bookshelf still work?"
- (LATER, only if the studio earns a journal — an app gains real traction and needs user-facing
  release content beyond notes: "Design a Journal index that won't look dead at one post per
  quarter." Until then, no journal.)

## After mockups are locked

1. **Export design tokens** (colors, type, spacing).
2. **Implementation — decided** (Codex-confirmed): **Next.js App Router (static) + Tailwind on
   Vercel**, same stack as gusfeliciano.com — one mental model, zero new ops. Keep it brutally
   static: no CMS, no API routes, no blog machinery. New repo: `madeordinary/site`, with a
   Serel Memory memory bank installed day one.
3. **Build order (lead-app-first):** Home + Apps index → lead app's submission bundle (privacy +
   Support + contact) → lead app page → second app's bundle + page → About/Contact/Terms/404.
   Soft-launch DNS as soon as the submission bundle is live; the public announcement waits.
4. **Domain + email:** point madeordinary.com; hello@ + support@ via iCloud+ Custom Domain or
   Fastmail.
5. **The announcement** is a post on gusfeliciano.com ("Introducing Made Ordinary") timed to the
   public launch, with a one-shot distribution checklist linking THIS site's app pages as the
   primary URLs.

## URL structure

```
madeordinary.com/                       → Home
madeordinary.com/apps                   → Apps index
madeordinary.com/apps/aery              → Aery page
madeordinary.com/apps/aery/privacy      → Aery privacy policy (Apple-required)
madeordinary.com/apps/aery/releases     → Aery release notes
madeordinary.com/apps/aery/why-local-first → (optional standalone philosophy page)
madeordinary.com/apps/tune              → Tune page
madeordinary.com/apps/tune/privacy      → Tune privacy policy
madeordinary.com/apps/tune/releases     → Tune release notes
madeordinary.com/about                  → About
madeordinary.com/support                → Support (Apple-required, ships first)
madeordinary.com/contact                → Contact
madeordinary.com/terms                  → Terms
```

No /journal at launch — by design, with revisit triggers documented in the ecosystem strategy.
