# Phase 3 — Paste Manifest [DEPRECATED 2026-06-04]

> # ⚠️ DEPRECATED — Project pivoted to Option B Hybrid
>
> This manifest was written for customizing the GHL "IT Advisor" template page-by-page. **The project pivoted 2026-06-04** to a static Astro+Tailwind site (deployed to Vercel) + GHL backend for ops. The GHL website project is no longer the front-end.
>
> **Do not work through this manifest.** Use `hybrid-build-plan.md` instead for the active plan.
>
> **What's still useful here:** the per-section content mappings (e.g., "Hero subhead = guide §1 subheadline") are CMS-agnostic and remain valid as a reference for the static-site build. The GHL-specific instructions (page editor clicks, toggles, slug renames) are obsolete.
>
> See `preston_east_site.md` memory or `PROGRESS_TRACKER.md` Decisions Log for full pivot rationale.

---

**For:** Preston East Solutions site build (originally GHL → prestoneastsolutions.com)
**Source of full content:** `site-content-and-build-guide.md` Part 1
**Date:** 2026-06-04

This manifest is a **mapping doc**, not a content doc. For every edit, it tells you (a) where in the GHL editor to find the element, (b) what to replace it with (referencing the content guide by section), and (c) any layout/background/link change that goes with it.

Work through it top-to-bottom in a single sit-down session. Estimated time: **90–120 min** of focused clicking.

---

## Already done (don't redo)

- ✅ Site renamed "IT Advisor" → "Preston East Solutions" (Sites → Websites → Settings)
- ✅ Default Page mapped to Home (Sites → Domains → prestoneastsolutions.com → Set Default Page)
- ✅ Global Headline Font → **Lora** (Typography panel, top toolbar)
- ✅ Global Link color → **#C5F82A** (saved as "Preston Lime" in Custom Colors)
- ✅ Hero headline on Home: "Transform Your Business with Expert IT Solutions" → **"Enterprise-grade IT — without the enterprise headcount."**
- ✅ Nav logo "IT Consultant" → **"Preston East"** (Lora serif, propagated to all 7 pages via Global Section)

## ⚠️ Side fix still needed — Business Profile

The sub-account Business Profile has stale info from the old domain. Fix at **Settings → Business Profile** before launch:
- **Business Email:** `info@prestonsolutionsllc.com` → `info@prestoneastsolutions.com`
- **Business Phone:** `+1 227-218-5459` → `+1 443-218-3731`
- (Address + Friendly Business Name are already correct)

This affects emails sent from GHL, calendar invites, and any automation that references business contact info — fix before Phase 5 wiring.

---

## How to open the editor (so you don't get lost)

- **Sites → Websites → Preston East Solutions** (the only site)
- **Pages tab** → see all 7 pages → **Edit** on the one you want
- Inside the editor: **click any text/element** to select it (right panel shows General/Styles/Animations)
- **Double-click text** to enter inline-edit mode → `Ctrl+A` selects all → type new text → click outside
- **Ctrl+S** saves the page. **Publish** button (top-right) re-pushes to the live site
- Top-left **Typography (T) icon** = global font/color panel

---

# STEP 0 — Page management (do FIRST, 5 min)

In **Sites → Websites → Preston East Solutions → Pages**:

| Page | Action | Why |
|---|---|---|
| Home | KEEP, EDIT | Main page |
| Services | KEEP, EDIT | One overview page (not 6 sub-pages) per build guide |
| About | KEEP, EDIT | |
| Contact | KEEP, EDIT | |
| Network Setup & Support | **DELETE** | Template's per-service detail page; not in our scope |
| Book Consultation | **RENAME slug** to `/health-check`; EDIT | This becomes the Free IT Health Check landing |
| Thankyou | KEEP, light edit | Use for form/booking confirmations |

Then **Add new page** × 3:
- **Pricing** — slug `/pricing`
- **Privacy Policy** — slug `/privacy`
- **Terms of Service** — slug `/terms`

For each new page, just create blank and we'll fill in below.

---

# STEP 1 — Home page (60–80 min)

Open: **Sites → Websites → Preston East Solutions → Home → Edit**

The template currently has these sections (top to bottom). I'm using template names from the current screenshots; your editor's left "Layers" panel (toggle if hidden) will help you locate each.

## 1.1 Nav bar (top) — **GLOBAL SECTION** (changes propagate to all 7 pages)

> **GHL gotcha:** The Navigation Menu is a Global Section AND the "IT Consultant" was both an image logo AND a text element. Two fixes were needed:
> 1. **Right panel → Logo settings → "Logo In Menu"** toggle = OFF (removes the image)
> 2. **Right panel → Menu Settings → "Business Name"** toggle = ON (shows brand text instead)
> 3. **Double-click the "IT Consultant" text** on the canvas to edit it directly (the text is a child element inside Nav Menu — single click selects parent, double-click enters edit mode)
> 4. Save will prompt "Section Changes Made — Global Sections" — confirm Save; check "Don't show again"
>
> ✅ Already done by Claude — nav now shows "Preston East" in Lora.

| Element | Action | Replace with |
|---|---|---|
| ~~"IT Consultant" logo text~~ | ✅ DONE | "Preston East" |
| Nav link: Home | Keep | (already correct) |
| Nav link: Services | Keep | |
| Nav link: Services dropdown items | Replace each | Map to our 6 services from content guide §4: Cloud Solutions · App Development & Support · QA & Test Automation · Managed IT Services · Cybersecurity & Compliance · Fractional CTO |
| Nav link: About | Keep | |
| Nav link: Contact | Keep | |
| **ADD** nav link | Add | **Pricing** → `/pricing` |
| **ADD** nav link | Add | **Health Check** → `/health-check` |
| "Book Consultation" CTA button | Change text + link | Text: **Book Free Health Check** · Link: `/health-check` |

## 1.2 Hero (already partly done)

| Element | Action | Replace with |
|---|---|---|
| Pill badge "TRUSTED IT CONSULTANCY" | Replace | **// ENTERPRISE IT FOR SMBs** |
| Headline | ✅ DONE | "Enterprise-grade IT — without the enterprise headcount." |
| Subhead "From network infrastructure to cybersecurity..." | Replace | Content guide §1 subheadline: **"15 years inside the engine rooms of Fortune 500s, federal contractors, and high-growth SaaS — now delivered to small businesses that need real technical horsepower without hiring a CTO."** |
| Primary CTA button | Change text + link | Text: **Book My Free IT Health Check →** · Link: `/health-check` |
| Secondary CTA button | Change text + link | Text: **See What We Do** · Link: `#services` (anchor scroll) |
| Background | Change | Set to near-black `#0E0E0E` (right panel → Styles tab → Background). Template currently uses a blue gradient; replace with solid dark, OR upload a subtle dark circuit/network image at 15-20% opacity |

## 1.3 Stats Bar (template has this row of stats below hero)

The template currently shows "0+ / 0.0% / 24/0 / 0+" placeholder stats. Replace per content guide §2:

| Stat 1 | Stat 2 | Stat 3 | Stat 4 |
|---|---|---|---|
| **15+** Years | **6** Services | **4** Certifications | **Public Trust** clearance |
| (subhead) Hands-on IT experience | One partner, one bill | AWS · CCNA · MSSQL · Public Trust | Federal-grade clearance |

Background: also dark `#0E0E0E`. Number color: Preston Lime `#C5F82A` (use the global custom color you saved).

## 1.4 Problem Section ("The Reality")

If template has a similar problem/pain-points block, edit in place. If not, **add a new section** (top toolbar + → section).

Content from guide §3:

- **Section headline:** *Most small businesses are one outage, one breach, or one bad cloud bill away from a really bad week.* (use italic via element styles)
- **5 pain-point items:** copy all five bullets verbatim from §3 (cloud bill creep, untested backups, weak security, duct-tape apps, no roadmap)
- **Transition line at bottom:** *You don't need a $200K CTO. You need a partner who's already solved this for 15 years.*

Background: dark. Each pain point: icon (lime stroke) + bold title + 1-line description in mid-gray.

## 1.5 Services 6-Stack

Template has a "Comprehensive IT Solutions" section showing 6 service cards. Replace each card per content guide §4:

| Card | Title | Tagline |
|---|---|---|
| 01 | Cloud Solutions | Right-sized cloud. No more surprise bills. |
| 02 | Application Development & Support | Custom software that ships tested and stays maintainable. |
| 03 | QA & Test Automation | Catch the bug before your customer does. |
| 04 | Managed IT Services | Your IT department, on retainer. |
| 05 | Cybersecurity & Compliance | Stop hoping you don't get breached. Know you're protected. |
| 06 | Fractional CTO / IT Strategy | The CTO you couldn't afford — on the days you need one. |

If template cards have a "Learn More" link, point each to `#services` or the matching slug on `/services` page.

Numbers (01–06) in Preston Lime serif italic. Card icons: lime stroke if template allows.

## 1.6 Process (3 steps)

If template has a "How we work" or process section, edit in place. Otherwise add new section. Content guide §5:

- Step 01 — Free IT Health Check (30 min, zero pitch...)
- Step 02 — Scoped Engagement (Foundation / Growth / Command...)
- Step 03 — Build, Optimize, Maintain

Numbers in lime serif italic. Background: dark.

## 1.7 Pricing 3 tiers + Custom

This belongs on Home (per content guide §6) AND on the Pricing page (STEP 4 below). On Home it's a summary section that links to the full Pricing page. If template doesn't have a pricing strip, add a new section with 4 cards side-by-side.

Tier names + headline pricing only (full bullets live on Pricing page):
- **Foundation** — $1,497/mo + $1,500 setup
- **Growth** — $2,997/mo + $2,500 setup · ⭐ MOST POPULAR (lime border + "// RECOMMENDED" tag)
- **Command** — $4,997/mo + $4,000 setup
- **Custom** — Let's talk

CTA on each card: "Start with [tier]" → `/pricing#[tier]`

## 1.8 Founder / About snippet

Short version of guide §7 (3 paragraphs — use only the first one on Home, link "Read full story →" to `/about`).

Add pull quote in serif italic:
> "If your business runs on technology, you shouldn't be running it alone."
> — Flo Ogunleye, Founder

Background: dark.

## 1.9 Industries Served

Guide §8 — 6-pill row: Federal · SaaS · Healthcare · Finance · E-Commerce · Tech

Below: *Currently accepting new SMB clients in all sectors. Federal work limited to subcontract engagements.*

## 1.10 Certifications

Guide §9 — 4-badge grid: AWS · CCNA · MSSQL · Public Trust

## 1.11 Lead magnet CTA section

Guide §10 — dedicated Free IT Health Check block with the 5 bullets ("Cloud Spend Audit", "Security Posture Check", etc.) + big lime CTA button: **Book My Free Health Check** → `/health-check`

## 1.12 Guarantee

Guide §11 — 3 commitments. Numbered, dark bg, lime numerals.

## 1.13 FAQ

Guide §12 — 9 Q&As. Accordion-style if template supports.

## 1.14 Final CTA + Footer

- **Final CTA block:** Guide §13 — "Ready to stop hoping your IT works?" + CTA
- **Footer:** Guide §14 — 4 columns + legal row. Add the small "AI Automation Services — launching 2026" line.

---

# STEP 2 — Health Check landing (was Book Consultation)

Open: **Sites → Pages → Health Check (renamed Book Consultation) → Edit**

| Element | Replace with |
|---|---|
| Page slug | `/health-check` (Page settings → URL) |
| Hero headline | **Free IT Health Check — 30 minutes. Zero pitch.** |
| Subhead | Guide §10 subhead: "Most small business owners don't know what they don't know..." |
| "What you get" bullets | Guide §10 — 5 bullets (Cloud Spend Audit, Security Posture Check, Backup Status, Tech Debt Inventory, 1-Page Action Report) |
| Calendar embed | Will be added in **Phase 4** (Calendars → embed widget) |
| Form (above calendar) | Will be added in **Phase 4** (Sites → Forms → Health Check Intake) |
| Below-CTA microcopy | "No credit card. No sales pressure. Worst case: you leave with a free report and a clearer picture of your IT." |

Optionally embed a preview thumbnail of the rendered IT Health Check sample PDF here.

---

# STEP 3 — Services page (15 min)

Open: **Sites → Pages → Services → Edit**

Hero: **Six services. One operator. Built by someone who's worn every hat in the IT stack.** (guide §4 subhead)

Then 6 service blocks — long versions of each service (Title + Tagline + "What's included" bullets + Stat) from content guide §4. Same 6 services as Home but expanded.

Bottom CTA: "Not sure which fits? Start with a free Health Check →" `/health-check`

---

# STEP 4 — Pricing page (NEW — 20 min)

Sites → Pages → Add new page → slug `/pricing`

Use a 3+1 card layout (Foundation · Growth ⭐ · Command · Custom). Full content from content guide §6, including:
- Tier name
- Price + setup
- "Best for: [employee count]" line
- Full bullet list
- CTA button

Below pricing cards, add the reassurance line: "All plans include free monthly business reviews, written documentation of everything we build, and a no-fault exit clause: 14 days' notice to cancel any future cycle."

Optional: a comparison table below the cards (dark rows, lime "// FOUNDATION" "// GROWTH" "// COMMAND" labels).

---

# STEP 5 — About page (15 min)

Open: **Sites → Pages → About → Edit**

Replace template content with guide §7 (full 3 paragraphs) + §8 (Industries) + §9 (Certifications) + the pull quote.

Hero headline: **Built by an operator, not a salesperson.**

---

# STEP 6 — Contact page (10 min)

Open: **Sites → Pages → Contact → Edit**

| Element | Replace with |
|---|---|
| Hero headline | **Let's talk.** |
| Subhead | "Send a message, book a Health Check, or just pick up the phone. We answer." |
| Contact form | Will be added in **Phase 4** (Sites → Forms → Contact Form) |
| Phone | (443) 218-3731 — make this `tel:+14432183731` link |
| Email | info@prestoneastsolutions.com — `mailto:` link |
| Address | 1125 West St, Ste 200 #335, Annapolis, MD 21401 |
| Map embed | Google Maps embed pointing at the Annapolis address |

---

# STEP 7 — Thankyou page (5 min)

Open: **Sites → Pages → Thankyou → Edit**

| Element | Replace with |
|---|---|
| Headline | **You're booked. See you soon.** |
| Body | "We sent a confirmation email with the calendar invite. If you don't see it in 2 minutes, check your spam folder or reply to this thread." |
| CTA | "Back to home" → `/` |

---

# STEP 8 — Privacy + Terms (NEW — 10 min)

Sites → Pages → Add new page × 2.

For both, use GHL's built-in generator if available (Settings or page-level option), or paste a standard template. Substitute:
- Business name: Preston East Solutions LLC
- Address: 1125 West St, Ste 200 #335, Annapolis, MD 21401
- Email: info@prestoneastsolutions.com
- Effective date: today's date

---

# STEP 9 — Global theme cleanup (10 min — DO LAST)

Once every section background is set to dark `#0E0E0E`, switch the global text color to off-white:

1. Top toolbar → **Typography (T) icon**
2. **Text color** → change from black → **#E8E8E8** (off-white)
3. Save

This re-skins body text across every page in one shot. Do not do this earlier or any still-light section will have invisible text.

Also consider adding a **second custom color** "Preston Dark" = `#0E0E0E` so section backgrounds reference the same registry.

---

# STEP 10 — Mobile preview (10 min)

In the editor: top-bar **mobile icon** (📱) next to desktop icon (🖥️) at center of toolbar. Click each page in mobile view and check:
- Headlines don't overflow
- Nav collapses to hamburger
- Buttons stack instead of crowd
- Padding doesn't break

Fix anything obvious; full mobile QA happens in Phase 9.

---

# Final check before declaring Phase 3 done

- [ ] All 8 pages have real content (no template placeholders)
- [ ] All buttons link to real targets (no `/book-consultation` or `#` placeholders)
- [ ] All dark sections have lime accents (numbers, badges, CTA buttons)
- [ ] Nav bar updated on every page (Home/Services/Pricing/About/Health Check/Contact)
- [ ] Footer correct on every page (4 columns + legal)
- [ ] Site published (top-right Publish button — re-publish after edits)
- [ ] Verify on live: `https://prestoneastsolutions.com/` shows new hero (not "Trusted IT Consultancy")

Once those 7 checkboxes are real, Phase 3 is done and Phase 4 (Forms & Calendar) begins.
