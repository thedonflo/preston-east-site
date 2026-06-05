# Preston East Solutions — Hybrid Build Plan (Option B)

**Date:** 2026-06-04
**Replaces:** `phase3-paste-manifest.md` (deprecated)
**Read first in new session:** this file + `PROGRESS_TRACKER.md` + `site-content-and-build-guide.md` (Parts 1 + 6)

---

## TL;DR

Build the marketing site as a static **Astro + Tailwind** project deployed to **Vercel**. Embed GHL widgets for calendar booking, chat, and forms — keeping all GHL workflows/automation untouched. Cut DNS over from GHL to Vercel when staging looks good.

---

## Stack — recommended

| Layer | Choice | Why |
|---|---|---|
| Site framework | **Astro 4.x** | Content-first SSG, partial hydration only where needed, fastest Lighthouse scores on static marketing sites. Better fit than Next.js for an 8-page brochure. |
| Styling | **Tailwind CSS** + custom `tailwind.config.mjs` | Maps the visual identity spec (dark `#0E0E0E`, lime `#C5F82A`, off-white `#E8E8E8`, Lora serif + Inter sans) to design tokens. Zero CSS files to manage. |
| Components (optional) | **shadcn-ui-equivalent for Astro** (Accordion, Dropdown) | Only if FAQ accordion or services dropdown needs JS interactivity. Most components ship as `.astro` files. |
| Hosting | **Vercel free tier** | Best Astro DX, automatic preview deploys per git push, free custom domains, edge network. (Cloudflare Pages is fine alternative; Vercel just smoother for solo dev.) |
| Analytics | **Vercel Analytics** (free tier) + GA4 | Vercel Analytics is privacy-first and just-works; GA4 for SEO + Google Search Console alignment. |
| Form backend | Direct **GHL Contacts API** POST | Custom form on the site posts to GHL → triggers existing workflows. No GHL form-iframe needed. |
| Calendar | **GHL calendar embed widget** | `<iframe>` snippet GHL provides for each calendar. Drop on `/health-check` and (future) `/scoping-call`. |
| Chat | **GHL Chat Widget** JS snippet | Site-wide `<script>` tag. Configured against Preston East sub-account. |

If you (the next-session Claude) want to propose **Next.js + App Router** instead: defend it. The Astro pick is for build speed and bundle size on a content-heavy static site with minimal interactivity. Next.js is the right call if there will be SSR pages later (member portal, dashboard, etc.) — none planned here.

---

## Project layout (target)

```
/f/Python/Python-GitHub-Repo/Preston_East_Site/
├── site/                             # NEW — the Astro project
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs           # custom palette + fonts
│   ├── package.json
│   ├── public/
│   │   ├── favicon.svg               # PE monogram (placeholder, refine later)
│   │   └── og-image.png              # 1200x630 social share card
│   ├── src/
│   │   ├── layouts/
│   │   │   └── Layout.astro          # html shell + nav + footer
│   │   ├── components/
│   │   │   ├── Nav.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Hero.astro
│   │   │   ├── StatsBar.astro
│   │   │   ├── ProblemSection.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── ServiceCard.astro
│   │   │   ├── ProcessSteps.astro
│   │   │   ├── PricingTiers.astro
│   │   │   ├── PricingCard.astro
│   │   │   ├── FAQ.astro             # accordion (interactive)
│   │   │   ├── FinalCTA.astro
│   │   │   ├── GHLChat.astro         # injects GHL chat script
│   │   │   └── GHLCalendar.astro     # injects GHL calendar iframe
│   │   ├── pages/
│   │   │   ├── index.astro           # home — 14 sections
│   │   │   ├── services.astro
│   │   │   ├── pricing.astro
│   │   │   ├── about.astro
│   │   │   ├── contact.astro
│   │   │   ├── health-check.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   └── styles/
│   │       └── global.css            # @tailwind directives + base resets
│   └── README.md
├── site-content-and-build-guide.md   # KEEP — source of truth for all copy
├── it-health-check-1pager.md         # KEEP — lead magnet
├── it-health-check-sample.html       # KEEP — sample render source
├── Preston-East-IT-Health-Check_Tidewater-Dental_2026-06-10.pdf  # KEEP — gated download
├── PROGRESS_TRACKER.md
├── hybrid-build-plan.md              # this file
├── phase3-paste-manifest.md          # DEPRECATED (kept for reference)
└── .env                              # GHL_API_KEY + GHL_LOCATION_ID
```

---

## Build order (recommended for next session)

1. **Scaffold** — `npm create astro@latest site -- --template basics --typescript strict` (yes typescript), then `npx astro add tailwind`. Confirm `npm run dev` boots.
2. **Tailwind config + global styles** — define design tokens (colors, fonts, typography scale, spacing rhythm) per visual identity spec.
3. **Layout + Nav + Footer** — shared across all pages, dark theme baseline. Footer matches content guide §14.
4. **Home page (longest)** — build all 14 components, drop them into `index.astro` in order.
5. **Services / About / Contact / Pricing / Health Check / Privacy / Terms** — each reuses Layout + components.
6. **GHL embeds** — Chat widget (every page via Layout), Calendar widget (`/health-check`), contact form API integration.
7. **Deploy to Vercel** — `vercel` CLI or GitHub-connected; get `<some-name>.vercel.app` URL.
8. **Mobile + Lighthouse pass** — fix any glaring issues.
9. **Stop and demo** to Flo before DNS cutover.

Realistic budget: **2–3 focused hours** to v1 of all 8 pages.

---

## Visual identity reference (already locked, copy into Tailwind config)

From `site-content-and-build-guide.md` Part 6:

```js
// tailwind.config.mjs colors
colors: {
  bg: '#0E0E0E',          // near-black background (slight warm cast)
  fg: '#E8E8E8',          // primary text off-white
  muted: '#888888',       // mid-gray for descriptions/labels
  lime: '#C5F82A',        // accent — italic emphasis, button fills, icon strokes
  card: '#171717',        // slightly lifted card bg over `bg`
  border: '#262626',      // subtle border on cards/sections
}
```

```js
// tailwind.config.mjs typography
fontFamily: {
  serif: ['Lora', 'serif'],          // headlines, italic emphasis words
  sans: ['Inter', 'sans-serif'],     // body, all-caps tracked labels
}
```

**Typography patterns to bake into components:**
- Headlines: `font-serif text-5xl/tight md:text-7xl/tight` — italic class on the emphasis word
- All-caps labels: `font-sans text-xs uppercase tracking-[0.2em] text-muted` (the `// SECTION NAME` pattern)
- Body: `font-sans text-base leading-relaxed text-fg`
- Numbers (process steps, card numerals): `font-serif italic text-lime text-7xl`
- Buttons primary: `bg-lime text-bg rounded-full px-6 py-3 font-medium`
- Buttons secondary: `border border-fg rounded-full px-6 py-3 text-fg hover:bg-fg hover:text-bg`

---

## GHL integration points

### Calendar widget (`/health-check`)

GHL gives you an iframe embed code per calendar. Build the `GHLCalendar.astro` component as:

```astro
---
const { calendarId } = Astro.props;
---
<iframe
  src={`https://api.leadconnectorhq.com/widget/booking/${calendarId}`}
  style="width:100%; border:none; min-height:600px;"
  scrolling="no"
  id={`${calendarId}_iframe`}
></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js" is:inline></script>
```

Use on `/health-check`: `<GHLCalendar calendarId="..." />`. Calendar IDs are visible in GHL after the calendar is created (Phase 4).

### Contact form (POST to GHL Contacts API)

Custom form on `/contact` with name/email/phone/message fields. On submit, POST to:

```
POST https://services.leadconnectorhq.com/contacts/
Authorization: Bearer {GHL_API_KEY}
Version: 2021-07-28
```

Use Astro Server Endpoints (`src/pages/api/contact.ts`) — server-only code, API key stays in `.env`, never reaches the browser. On success, trigger the "Contact Form Nurture" workflow via tag (`Lead - Website`) or via direct workflow trigger.

### Chat widget (site-wide)

GHL provides a `<script>` snippet per sub-account. Drop in `Layout.astro` before `</body>`. One line.

### AI Conversation training (Phase 6, later)

Train against the final live URL once cutover happens. Static site lets the bot crawl real semantic HTML — better than crawling a GHL template.

---

## DNS cutover plan

**Today (during build):**
- `prestoneastsolutions.com` → GHL Cloudflare → "IT Advisor" template (current)
- Vercel deployment lives at `<vercel-default>.vercel.app`

**Cutover day:**
1. In Bluehost DNS, change apex `A` record: GHL Cloudflare IP → Vercel A record (Vercel docs give the exact IP — typically `76.76.21.21`)
2. Update `CNAME www` to point to `cname.vercel-dns.com`
3. In Vercel project → Domains → add `prestoneastsolutions.com` and `www.prestoneastsolutions.com`
4. Vercel auto-provisions SSL
5. Verify `https://prestoneastsolutions.com/` serves the static site
6. In GHL Sites → Domains, **detach** `prestoneastsolutions.com` from the IT Advisor website (frees it; doesn't delete the GHL site project — keep as backup for now)
7. Re-publish nothing in GHL; the static site is now the front-end

**Optional staging step before cutover:**
- Add `staging.prestoneastsolutions.com` CNAME → Vercel deployment URL
- Use this to share preview with Flo + early reviewers without touching production
- Skippable if Vercel's default `*.vercel.app` URL is fine for review

---

## Decisions still open (will be asked at start of new session)

1. **Stack confirmed?** Astro+Tailwind on Vercel — or do you want Next.js / Cloudflare Pages?
2. **TypeScript on or off?** Recommend on (strict mode); cleaner code, better autocomplete, no real cost on a static site.
3. **Staging subdomain now or later?** Recommend later — start with Vercel default URL, add `staging.prestoneastsolutions.com` if you want a custom share URL before cutover.
4. **Contact form: custom API POST or embed GHL form iframe?** Recommend custom POST — better UX, full design control, validation in our hands. GHL form iframe is the lazy fallback.
5. **AI services footer line ("coming 2026")** — keep, remove, or rephrase? Currently in content guide §14.
6. **Founder headshot for About page** — do you have one ready? If not, the About page works text-only.
7. **Real screenshots for hero/sections** — any preference, or use abstract dark gradient + subtle network/circuit SVG patterns? Recommend the latter for v1; can swap in real product/team shots later.
8. **Open-source the site repo on GitHub?** If yes, public repo at `github.com/<your-handle>/preston-east-site`. Marketing sites are commonly public — good for hiring, no secrets if API keys stay in Vercel env vars.

---

## What carries over from prior work (no regen needed)

| Asset | Where | Status |
|---|---|---|
| All site copy (14 home sections + other pages) | `site-content-and-build-guide.md` Part 1 | ✅ ready to paste into components |
| Visual identity spec | `site-content-and-build-guide.md` Part 6 | ✅ encoded above in Tailwind config snippet |
| Pricing tiers + market validation | `site-content-and-build-guide.md` Parts 6 + 7 | ✅ |
| IT Health Check lead magnet (text) | `it-health-check-1pager.md` | ✅ |
| IT Health Check sample PDF | `Preston-East-IT-Health-Check_Tidewater-Dental_2026-06-10.pdf` | ✅ — host in `/public/` for `/health-check` download |
| Phase 5 email workflow copy | `PROGRESS_TRACKER.md` Phase 5 section | ✅ — pastes into GHL workflows, unrelated to site code |
| GHL sub-account config | already done | ✅ — calendars + workflows + chat config still apply |
| Domain DNS infrastructure | Bluehost Option B | ✅ — just retarget A record at cutover |

---

## What's getting deleted / archived (don't bring forward)

- The GHL "IT Advisor" website project (keep as backup in GHL — don't delete until ~30 days post-launch)
- `phase3-paste-manifest.md` (already marked DEPRECATED)
- The GHL Sites → Domains → Default Page → `IT Advisor / Home` mapping (will be detached at cutover)
- The "fonts in GHL editor" config (Lora + Custom Color #C5F82A) — irrelevant; the static site sets these directly in CSS

---

## Kickoff prompt for the new session

Paste this verbatim:

> Pick up Preston East — pivoted to Option B Hybrid. Read `PROGRESS_TRACKER.md` and `hybrid-build-plan.md` in `/f/Python/Python-GitHub-Repo/Preston_East_Site/`, then confirm the stack/decisions and start the build. I want a working Astro+Tailwind project scaffolded + the home page hero, stats bar, and services grid built today.
