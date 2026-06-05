# IT Health Check — 1-pager

Lead magnet for prestoneastsolutions.com. Two artifacts in this file:

1. **Template** — blank, fillable. Use after every 30-min discovery call.
2. **Sample** — a filled-in example for a fictional SMB. Publishable as "here's what you'll get" preview on the site.
3. **Render notes** — how to take the markdown to a branded PDF.

---

## PART 1 — Template (blank)

> Copy everything between the rules into a new doc and fill in the bracketed fields.

---

**IT HEALTH CHECK**
*Prepared for* {{Client name}} · *Date* {{YYYY-MM-DD}}
*Prepared by* Preston East Solutions · info@prestoneastsolutions.com · (443) 218-3731

---

### Executive summary

{{2–4 sentences. Cover: overall posture, the single biggest risk, the biggest fast-win opportunity, and the rough lift to fix the critical items.}}

**Overall posture:** {{At risk / Stabilizing / Healthy}}

---

### Scorecard

| Domain | Status | One-line read |
|---|---|---|
| Cybersecurity & Compliance | {{Red / Amber / Green}} | {{1 line}} |
| Cloud & Infrastructure | {{Red / Amber / Green}} | {{1 line}} |
| Backup & Disaster Recovery | {{Red / Amber / Green}} | {{1 line}} |
| Identity & Access Management | {{Red / Amber / Green}} | {{1 line}} |
| Applications & SaaS Footprint | {{Red / Amber / Green}} | {{1 line}} |
| IT Operations & Support | {{Red / Amber / Green}} | {{1 line}} |

**Legend:** Red = active risk, fix within 30 days. Amber = degraded, fix within 90. Green = healthy.

---

### Top findings

**1. {{Finding title}}** — *Severity: {{Critical / High / Medium / Low}}*
{{1–2 sentences. What's broken or missing, and the business consequence if it stays this way.}}

**2. {{Finding title}}** — *Severity: {{...}}*
{{...}}

**3. {{Finding title}}** — *Severity: {{...}}*
{{...}}

*(3–5 findings total. More than 5 = pad the executive summary instead, the prospect's eyes glaze over.)*

---

### Recommended next 90 days

**This week (quick wins)**
- {{Action}}
- {{Action}}

**Next 30 days**
- {{Action}}
- {{Action}}

**60–90 days**
- {{Action}}
- {{Action}}

---

### Your next step

This 1-pager is the diagnostic. The next step is a 45-minute scoping call where we turn it into a costed roadmap with start dates and the Preston East tier that fits.

→ **Book scoping call:** {{calendar link}}

---

## PART 2 — Sample (fictional company — publishable preview)

> Use this exact sample on the site as "here's what your IT Health Check looks like." Swap to a real anonymized case once one exists.

---

**IT HEALTH CHECK**
*Prepared for* Tidewater Dental Group · *Date* 2026-06-10
*Prepared by* Preston East Solutions · info@prestoneastsolutions.com · (443) 218-3731

---

### Executive summary

Tidewater Dental is running a 22-person, three-location practice on a mix of legacy Windows Server, ad-hoc cloud backups, and shared admin passwords. The infrastructure works day-to-day, but HIPAA exposure is high, recovery from a ransomware event would take 5+ days, and the practice has no formal offboarding for departing staff. The fixes are mostly off-the-shelf — about 6 weeks of focused work to move from at-risk to healthy.

**Overall posture:** At risk

---

### Scorecard

| Domain | Status | One-line read |
|---|---|---|
| Cybersecurity & Compliance | Red | No MFA on email or PMS; shared admin password across 3 sites; no documented HIPAA controls. |
| Cloud & Infrastructure | Amber | M365 in use but tenant settings default-permissive; one on-prem server past EOL. |
| Backup & Disaster Recovery | Red | Backups exist but have never been test-restored; RTO unknown; no offsite copy. |
| Identity & Access Management | Red | 4 shared logins; no offboarding checklist; ex-staff still in PMS. |
| Applications & SaaS Footprint | Amber | 14 SaaS tools billed, ~5 actively used; no central inventory. |
| IT Operations & Support | Amber | Help routes through office manager; no ticketing; response times not tracked. |

---

### Top findings

**1. No multi-factor authentication on email or practice management system** — *Severity: Critical*
A single phished credential currently grants attacker access to patient records and email. This is the highest-probability incident path and the cheapest to close.

**2. Backups have never been test-restored** — *Severity: Critical*
If a ransomware event happened tomorrow, the practice has no proof its backups would actually restore. A test restore is a one-day exercise — running it converts an unknown risk into a known capability.

**3. Shared admin accounts across all three locations** — *Severity: High*
Auditability is zero — when something changes, there is no record of who did it. This is also a HIPAA finding if audited.

**4. EOL Windows Server still hosting the imaging share** — *Severity: High*
No security patches since the EOL date; one CVE away from forced downtime. Migration to Azure file shares is a 2-week project.

**5. SaaS sprawl — 9 of 14 tools unused but billed** — *Severity: Medium*
Roughly $1,400/mo in waste; also an attack surface (each unused tool is still a credential set someone needs to remember).

---

### Recommended next 90 days

**This week (quick wins)**
- Turn on MFA across M365 and the practice management system (half-day)
- Rotate shared admin credentials and create named admin accounts (half-day)

**Next 30 days**
- Run a backup test-restore and document the RTO
- Build an offboarding checklist and remove ex-staff from all systems
- Audit and cancel unused SaaS subscriptions

**60–90 days**
- Migrate imaging share off EOL Windows Server to Azure file shares
- Document HIPAA technical controls (encryption at rest, access logging, audit trail)
- Stand up a help ticketing channel so response times are measurable

---

### Your next step

This 1-pager is the diagnostic. The next step is a 45-minute scoping call where we turn it into a costed roadmap with start dates and the Preston East tier that fits.

For Tidewater Dental, the cluster of HIPAA + multi-site + 22 employees points to the **Growth tier** ($2,997/mo + $2,500 setup) as the natural fit, but we'll confirm on the call.

→ **Book scoping call:** prestoneastsolutions.com/book

---

## PART 3 — Render notes (markdown → branded PDF)

### Option A — Canva (recommended for first version)
1. Create a new doc, 8.5×11", dark background (#0E0E0E), lime accent (#C7F87C).
2. Body font: a serif (Lora, Cormorant, or PP Editorial New). All-caps tracked labels for section headings (Inter, +120 letter-spacing).
3. Paste the sample as starting layout, then save as a Canva Brand Template so future Health Checks are 10-minute fills.
4. Export as PDF (print quality). File name: `Preston-East-IT-Health-Check_{{ClientName}}_{{YYYY-MM-DD}}.pdf`.

### Option B — Google Docs (faster, less polished)
1. Page setup → letter, narrow margins.
2. Apply a dark page color via Drawing trick OR keep it light with lime accent rules.
3. Export → PDF.
4. Good enough for v0; replace with Canva version once volume justifies it.

### Option C — Pandoc (if Flo wants automation later)
- `pandoc it-health-check-1pager.md -o output.pdf --pdf-engine=xelatex --variable mainfont="Lora"`
- Stub for a future "Flo fills a YAML form → PDF auto-renders" workflow. Not worth building until 10+ Health Checks have been issued.

### Where this lives on the site
- Public sample (PART 2) → posted as a real PDF download under "See what's in your free IT Health Check" on the lead-magnet section of the homepage.
- Blank template (PART 1) → Flo's internal working copy; never sees the prospect.
- Filled, prospect-specific copies → emailed within 24h of the discovery call; also attached to the contact record in GHL.

### Tie-in to GHL build (deferred to next session)
When the GHL site build starts, the lead-magnet form should:
1. Capture: name, email, company, employee count, current IT setup (free-text), top concern (free-text).
2. Trigger workflow: confirmation email + internal Slack/email to Flo with the form data.
3. Calendar embed: 30-min "IT Health Check Discovery" slot, auto-booked.
4. Custom fields to create in GHL: `health_check_employee_count`, `health_check_top_concern`, `health_check_pdf_url`, `health_check_sent_date`.
