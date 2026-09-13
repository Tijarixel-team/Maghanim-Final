---
version: 1
slug: "app-locale-page-tsx"
primary_target: "app/[locale]/page.tsx"
related_targets: []
---

---
version: 1
slug: "app-locale-page-tsx"
primary_target: "app/[locale]/page.tsx"
related_targets: []
---

---
version: 1
slug: "app-locale-page-tsx"
primary_target: "app/[locale]/page.tsx"
related_targets: []
---

## Scope

Maghanim public marketing homepage, `/en` and `/ar`. Visitor mode: **Persuade**.

Audience: a busy UAE SME owner or finance manager, not technical, running three or four
vendor relationships today. Secondary: an institutional reader doing due diligence.
Job: recognise their own problem, understand that one contract replaces four vendors, see
that the regulated parts sit with named licensed institutions.
Action: submit the contact form and request a meeting with a relationship manager. Single
conversion point; nothing competes with it.

Constraints: bilingual EN/AR with a genuine RTL mirror; every string in `messages/*.json`;
no client-supplied copy exists yet, so all wording is a marked placeholder; the
prohibited-claims list in PRODUCT.md is a legal constraint, not a style note.

## Direction contract

THESIS: The category's standard arrangement, executed at a craft level the category never
reaches. This surface owns heritage authority rendered with infrastructure-grade precision.
It refuses the thing that makes every Shariah-fintech site interchangeable — decoration
standing in for discipline: gold sprayed across the page, pattern at decorative opacity,
display serif set at default tracking, motion added as garnish.

OWN-WORLD: Deep emerald #0B3328 grounds hero and footer; cream #F5F0E8 and white alternate
between them. Gold #BE973A is rationed to four things — the calligraphic mark, the primary
action, the active nav marker, and step/accent dots; #D4AF5A is its hover state only. The
Islamic geometric pattern is texture, never ornament: 12% on cream, 8% on emerald,
gradient-masked at every section boundary so it never ends abruptly. A high-contrast display
serif for headings over a neutral workhorse with tabular figures for body; Arabic carries its
own Kufi display and Naskh body, more generous line-height, never letter-spaced. Components
are flat and hairline-ruled with generous spacing; shadow exists only beneath the coin and the
primary button.

STORY: The visitor recognises their own four-vendor problem within ten seconds, understands
that one contract and one relationship manager replace it, sees each regulated capability
attributed to the licensed institution that holds it, reads that governance is independent,
and requests a meeting. The institutional reader finds the governance and partner sections
without the SME reader ever being talked past.

FIRST VIEWPORT: Full-viewport emerald, pattern at 8% masked to fade before the fold. Header:
mark plus wordmark at reading-start; Home, Solutions, Governance, Contact and the language
toggle at reading-end, the active item marked by a gold underline. Centred stack occupying the
middle 46% of the viewport: gold calligraphic mark at 84px, headline in display serif at 58px
over no more than three lines, one 17px subheading line in cream at 72% opacity, then the gold
pill CTA — the only gold button anywhere on the page. The coin floats beneath it, cropped by
the lower edge at mobile widths. A 26px cream strip at the bottom edge announces the section
below.

FORM: The category canon, taken as the standing exit rather than dealt by the roll. The user
chose it over three alternative worlds — The Day-Book (ledger spread), The Instrument
(bilingual legal instrument), The Fascia (bolted control panel), all comped and retained under
`.impeccable/mocks/decision/`. Craft bar: Stripe, Adyen and Checkout.com for typographic
precision and engineered motion; Hermès, Rolex and Cartier for material restraint and finish.
Seed key 0b696fe5.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the
verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Legal entity name, production domain, financing live-or-coming-soon, Mawarid public-naming
  approval, contact form fields and submission destination.
- All copy, English and Arabic. Arabic must not be machine-translated.
- Copy, English and Arabic. Arabic must not be machine-translated.
- Whether the Solutions page stays one page with four sections (as built) or becomes four pages.
- What the Governance page may say about the oversight structure.

## Comp approval

Approved 2026-09-12: **composition A, centred** — `.impeccable/mocks/comp-a.png`
(source `.impeccable/mocks/src/canon.html`, also the direction round's locked card at
`.impeccable/mocks/decision/canon.png`). This is the comp the finish review audits the build
against. Rejected alternates retained: comp B asymmetric (`comp-b.png`), comp C the seal
(`comp-c.png`).

Carry-forward constraints confirmed with the client at the approval point:

- Gold stays strictly rationed — the calligraphic mark, the primary CTA, the active nav
  marker. Nowhere else. This is the discipline that separates the build from the category.
- Named licensed partners appear early, not buried: Flocash, Mawarid Finance, Arab Financial
  Services, Odoo. Mawarid's public-naming approval is still outstanding.
- The geometric pattern is texture and never decoration: 8% on emerald, 12% on cream,
  gradient-masked at every section boundary, never a legible motif competing with type.

## Build hold

The client is supplying design material before implementation begins. Do not scaffold or write
component code until it arrives and has been reviewed against this contract. Expected in that
material, at minimum: the real 3D white-gold coin render with transparency, and whatever
reference or brand material governs typography — both English and Arabic faces are still
unfilled placeholders in the kickoff brief.


## Amendments after the finish review (2026-09-12)

**GROUND re-pinned.** OWN-WORLD originally carried #0A3340 from the kickoff brief's
colour table. The client then supplied Concept 2 and instructed that it is the exact
emerald. That artwork samples #0B3328 — a true emerald green, not the table's teal.
The client's instruction beats the table, so OWN-WORLD above now reads #0B3328 and the
build matches it. `comp-a.png` predates the re-pin and is teal; treat its hue as
superseded and its composition as still binding.

**Typefaces decided, not inherited.** Both faces were unfilled `[[ ]]` placeholders in
the brief, so this build chose them: Bodoni Moda (display, Latin), Archivo (body, Latin),
Amiri (display, Arabic), Noto Sans Arabic (body, Arabic). Recorded here because the
decision was the build's, not the client's, and is open to reversal.

**Coin delivered.** The client supplied the real transparent render; the CSS stand-in in
the comps is retired. Provenance for every shipping raster is in `public/ASSETS.md`.

**Finish review fixes applied.** False success on the contact route removed; unsourced
market claim, asserted governance structure and card-issuing implication struck from the
English copy; per-panel partner attribution added to the solution explorer; gold ration
restored to the mark, the primary CTA, the active nav marker and the step dots only;
WCAG AA contrast corrected across kickers, tab labels, step numbers, partner slots and
the footer; keyboard focus now follows tab selection and Escape closes the mobile nav;
unwritten metadata no longer reaches search results, and indexing is off until copy is
approved and a real origin is configured; the secondary hero link was removed so the
first viewport carries one action, as the comp specifies.


## Client revision round (2026-09-12, after the finish review)

Client feedback on the built page, and what changed:

- **Coin.** It was clipped by the hero and painted over by the cream section. It now
  carries `z-30` inside a hero raised to `z-20`, so nothing paints over it; it is anchored
  to the hero's bottom edge and translated 50% down, so exactly half of it shows on
  landing and the fold itself is the scroll cue. Motion raised to a 14px rise on a 5s
  cycle against a ±3.5° tilt on 8s. Its separate contact ellipse was removed: it was
  built for a dark ground and read as a smudge once the coin landed on cream.
- **"Cluttered and incohesive."** Every section now uses one header shape (`SectionHead`):
  heading plus supporting line, one left-aligned column, fixed measure. The structural
  redundancy — the pillars and the explorer both presenting the same four areas — was
  resolved by stripping the pillars to the claim (icon plus name only). All detail and
  all partner attribution live in the explorer, stated once. The client expressed no
  preference between merging the sections and differentiating them; differentiating was
  chosen because it honours the brief's section list.
- **Typography.** Bodoni Moda was rejected by the client as ugly. Three faces were
  rendered on the live page and **Marcellus** was chosen. It ships a single weight, so
  every `font-medium` on a display element was removed rather than synthesised.
- **"Subtexts are very generic."** Supporting copy rewritten from abstract to concrete,
  still inside the prohibited-claims list: no statistics, no customers, no certifications.
- **Detector findings** cleared in the same pass: text occluded by an overlapping element
  (the coin over the CTA), all-caps body text, and undersized functional text — all of
  which came from the 10.5px tracked-caps micro-labels, now removed or set in sentence
  case at a readable size.
