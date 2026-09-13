# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) with TypeScript, Tailwind CSS, next-intl for internationalisation, Motion for animation. Hosted on Vercel, deployed from a private GitHub repository. Use current stable versions and check official documentation rather than relying on memory for APIs. Keep dependencies minimal — confirm before adding any library beyond these. No secrets in code; sensitive values live in Vercel environment variables, documented in `.env.example`. Production domain is not settled.

## Users

**Primary — the SME owner or finance manager in the UAE.** Runs a hotel, clinic, travel agency, retail chain or professional services firm. Currently uses three or four separate vendors for payments, cards, expenses and accounting. Either prefers, or is required by their stakeholders, to deal with Shariah-compliant financial institutions. Not a technical person. Busy. The website has about ten seconds to tell them it solves a problem they recognise. Their action is to submit the contact form and request a sales meeting with a relationship manager — not to sign up themselves, not to download anything.

**Secondary — the institutional reader.** Someone at a bank, a development finance institution, a government entity, or a corporate/government-supplier client evaluating Maghanim as a vendor. They are doing due diligence: who is behind this, whether the governance is real, whether the partners are credible. Their action is to feel confident enough to take a meeting or make an introduction. The Shariah governance material and the partner slots do most of this work.

Copy addresses the SME owner first and lets the institutional reader find reassurance along the way, not the other way around.

## Product Purpose

Maghanim is a Shariah-compliant digital commerce platform for small and medium enterprises, based in Dubai, United Arab Emirates. One platform, one contract and one support relationship replace several separate vendors.

Maghanim sells direct B2B through relationship managers, so the public website exists to feed a single human conversation. Success is a qualified contact-form submission. Every section should end with either a reason to keep scrolling or a nudge toward that form.

The business is live and taking clients; the site reads as an operating company.

## Positioning

Maghanim does not operate its own banking or processing infrastructure. Licensed partners provide the regulated services. Maghanim provides the SME relationship, the product design and the Shariah governance.

The defensible position is that combination: one commercial relationship spanning payments, cards, business management and financing, with Shariah governance as the spine rather than a badge. A neighbouring vendor selling one of those four pillars cannot truthfully claim it.

## Operating Context

- **Markets:** UAE first, then GCC.
- **Target industries:** hospitality, retail, healthcare, education, professional services, corporate travel, government suppliers.
- **The four solution areas:**
  1. **Payments & acceptance** — POS terminals, tap-to-phone acceptance, online payment gateway, payment links, wallet acceptance.
  2. **Cards & spend** — Islamic cards, virtual cards, corporate expense management, B2B corporate travel payments, supplier payments.
  3. **Business management** — Odoo ERP, accounting, payroll, CRM, inventory, HR.
  4. **Financing** — Shariah-compliant working capital. *Live-or-coming-soon status is undecided.*
- **Named partners.** The client confirmed on 2026-09-12 that named licensed partners may appear publicly, and the kickoff brief instructs showing them as name-only slots until logo files arrive. (An earlier "confirm Mawarid naming approval" note came from the bilingual copy PDF, which the client has since disowned as unauthorised; it is not a live constraint.) These four, and no others:
  - Flocash — technology partner
  - Mawarid Finance — banking-as-a-service partner
  - Arab Financial Services (AFS) — payment solutions provider
  - Odoo — certified ERP partner
- **B2B travel settlement** is a real five-step process: Onboard → Fund → Issue → Book → Settle.

## Capabilities and Constraints

**Bilingual, English and Arabic (Modern Standard), as a first-class requirement.**

- Locale routes `/en` and `/ar`; `/en` is default; `/` redirects to `/en`. `<html lang>` and `dir` set from locale.
- The layout genuinely mirrors in Arabic. Logical properties and utilities only (start/end, ms/me, ps/pe); never `left`/`right` for layout.
- Directional icons (arrows, chevrons, step flows) flip in RTL. Logos and the coin do not flip.
- Language toggle sits in the header, shows «العربية» on English pages and "English" on Arabic pages, keeps the user on the equivalent page, and works on mobile.
- Never apply letter-spacing to Arabic text — it breaks letter joining. Arabic gets slightly more generous line-height than English.
- Each locale gets its own metadata (title, description, Open Graph) and hreflang alternates.
- Arabic copy is written and reviewed by a native speaker. Never machine-translate English into Arabic; use placeholders instead.

**Content ownership.**

- Every visible word lives in `messages/en.json` and `messages/ar.json`. Nothing hard-coded in components.
- The client supplies all approved copy. Where copy is missing, insert a clearly marked placeholder in both languages (e.g. `"[PLACEHOLDER: hero headline]"` / `"[عنصر نائب: عنوان الصفحة الرئيسية]"`). Never write marketing claims, statistics or product promises.

**Prohibited claims — a legal constraint, not a stylistic one.** Never state or imply:

- that Maghanim holds a central bank licence;
- that Maghanim issues cards, acquires, or lends on its own balance sheet;
- that Maghanim owns payment infrastructure;
- any certification (PCI DSS, ISO 27001, or any other);
- any customer names, transaction volumes, market-share figures or awards;
- any "world's first" or "leading" claim.

Also never show card scheme logos (Visa, Mastercard, Apple Pay and the like), unconfirmed partners, or any bank or partner not named above. Roadmap items are labelled "Coming soon" / "قريبًا", or omitted.

**Conversion.** The contact form is the single conversion point the site exists to feed. It needs server-side validation, spam protection, and success and error states in both languages. Field list and submission destination are undecided.

**Explicitly undecided product facts — record, do not invent:**

- production domain;
- financing pillar: live or coming soon;
- Solutions as one page with four sections or four separate pages;
- what content the Governance page carries;
- which social platforms appear in the footer;
- contact form fields and submission destination.

## Brand Commitments

- Legal entity: **Maghanim for Payment LLC**, confirmed by the client's own corporate profile (2026-09-12). Brand name: **Maghanim**. Arabic: **مغانم**. Dubai, United Arab Emirates. Note that "Maghanem" appears in places in the client's material; "Maghanim" is the spelling used throughout the site.
- A complete logo suite exists at `~/Desktop/Enterprise/MAGHANIM/MAGHANIM FINAL PRODUCT/` — SVG and PNG, in `ICON + TEXT`, `ICON ONLY` and `TEXT ONLY`, each in BLACK, WHITE, GOLD and DEFAULT.
- The gold calligraphy mark is never recoloured, stretched or redrawn.
- The wordmark inside the logo files is the official typeface. It is never substituted with a typed version.
- A binding visual direction — colour tokens, page rhythm, geometric pattern usage, the animated coin, and the motion specification — is pinned by the client in the kickoff brief (Sections 6, 7 and 9), together with the reference images it names. It is authoritative and lives there; DESIGN.md will carry it. It is deliberately not restated in this file.
- English and Arabic typeface choices are still unfilled placeholders in that brief.
- Voice: institutional and factual. The prohibited-claims list above is the enforcement mechanism.
- **Standing visual preference (confirmed 2026-09-12).** Offered three alternative visual worlds against the brief's own route, the client chose the brief's route: the category-standard heritage arrangement — emerald ground, gold calligraphic mark, Islamic geometric pattern as low-opacity texture, display serif headings, floating coin, dark-light-dark section rhythm. Convention is therefore the commitment. Execute it at full fidelity, without irony and without smuggled quirk; do not reopen the visual world without a new instruction.
- **Craft bar.** Two references set the finish this must reach: global fintech infrastructure (Stripe, Adyen, Checkout.com) for typographic precision, spacing discipline and engineered motion; luxury and heritage houses (Hermès, Rolex, Cartier) for material restraint and finish. Neither is a style reference — they are the quality level.
- **Coin asset.** The client holds the real 3D white-gold coin render and will supply it. `Maghanim_WhiteGold_Coin.png` on the Desktop is a screenshot of an old concept page, not a usable asset. Until the render arrives, comps carry a CSS-built stand-in.
- Brand assets are staged at `public/brand/` — mark, wordmark and combined logo in gold, white and black, as SVG, plus `-tight.svg` variants cropped to the artwork's true bounding box (the source files sit inside a large square canvas and render as specks at small sizes).

## Evidence on Hand

**Authorised source material:**

- Kickoff brief v2, the working document for this build: `~/Downloads/maghanim-kickoff-prompt-v2.md`
- **Corporate profile (supplied by the client 2026-09-12):** `~/Downloads/Untitled design.pdf`. Image-only, no text layer; the page rasters were extracted to read it. This is now the primary copy source, and the site's English copy is drawn from it.
- **Executive presentation (supplied by the client 2026-09-12):** `~/Downloads/Maghanim_Payments_Executive_Presentation_Updated.pptx`. Used for structure and factual content only — see the claims note below.
- Partner logo files, supplied by the client: staged at `public/partners/`.
- Logo suite: `~/Desktop/Enterprise/MAGHANIM/MAGHANIM FINAL PRODUCT/`
- Concept and reference images: `~/Downloads/Maghanim_Concept_1.png`, `_2.png`, `_3.png`, `~/Desktop/Maghanim_WhiteGold_Coin.png`, plus the coin and geometric-pattern references named in the brief.
- Prior Maghanim site — static HTML/CSS/JS, Newsreader and Geist webfonts: `~/Desktop/Maghanim`. Superseded by this build; evidence and anti-reference only.

**Present on disk but NOT authorised, and not to be used:**

- `~/Downloads/Maghanim_Website_Copy_Bilingual.pdf`
- `~/Downloads/Maghanem for Payment LLC - Marketing Website Proposal.pdf`

**Claims still held back, deliberately.** The supplied corporate profile is carefully worded and the site follows its wording exactly: "payment card industry data security standards" and "information security management standards" as *compliance framework* items, and "engagement with AAOIFI, the Islamic Financial Services Board and CIBAFI" rather than membership. The executive presentation states the stronger versions — PCI-DSS and ISO 27001 as held certifications, AAOIFI/IFSB/CIBAFI as memberships, "200+ payment methods across 60+ countries", and "the leading Shariah-compliant digital payments platform". Those contradict the kickoff brief's prohibited-claims list and are **not** used on the site. Publishing them needs an explicit instruction from the client.

**Absences that must not be papered over:** no approved copy exists yet, in either language. No client names, statistics, awards, certifications, case studies or partner logo files exist. None may be invented, and no placeholder may be dressed to read as a real one.

## Product Principles

1. **One conversation is the goal.** The whole site funnels to the contact form; nothing is allowed to compete with it.
2. **Say only what is supplied and approved.** Missing copy becomes a visibly marked placeholder, never a plausible invention.
3. **Regulated capability belongs to the licensed partner, never to Maghanim.** Attribution is a compliance requirement.
4. **Arabic is an original, not a translation layer.** It mirrors in layout and is authored by a native speaker.
5. **Speak to the busy SME owner first.** The institutional reader finds their reassurance in governance and partners without the SME reader being talked past.

## Accessibility & Inclusion

- WCAG AA contrast for all text. If a pinned colour pair fails, report it rather than silently changing the colour.
- Keyboard navigable with visible focus states, semantic HTML, correct heading order, and alt text sourced from the message files.
- All motion respects `prefers-reduced-motion`.
- Must hold up at 375px, 768px, 1280px and 1920px, in both `/en` and `/ar`.
- Target: Lighthouse 90 or above for Performance, Accessibility, Best Practices and SEO on mobile, in both locales.
