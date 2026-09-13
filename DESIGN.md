---
name: Maghanim
description: Shariah-compliant digital commerce for UAE SMEs — heritage emerald and rationed gold, executed at infrastructure precision.
colors:
  emerald-base: "#0B3328"
  emerald-lit: "#124434"
  emerald-deep: "#072019"
  gold: "#BE973A"
  gold-light: "#D4AF5A"
  cream: "#F5F0E8"
  paper: "#FFFFFF"
  ink: "#0B3328"
  body: "#3A3A3A"
  on-dark: "#F5F0E8"
typography:
  display:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.1rem, 5.6vw, 3.9rem)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Marcellus, Georgia, 'Times New Roman', serif"
    fontSize: "1.32rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.78
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.66rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.17em"
  display-ar:
    fontFamily: "Amiri, 'Geeza Pro', serif"
    fontSize: "clamp(2.1rem, 5.6vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body-ar:
    fontFamily: "'Noto Sans Arabic', 'Geeza Pro', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2.05
    letterSpacing: "0"
rounded:
  none: "0px"
  focus: "2px"
  pill: "9999px"
spacing:
  hairline-gap: "4px"
  xs: "12px"
  sm: "20px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  section-y: "96px"
  section-y-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.emerald-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1.15rem 2.5rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.emerald-deep}"
  button-primary-disabled:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.emerald-deep}"
  link-quiet-on-dark:
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 6px 0"
  nav-link:
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 6px 0"
  nav-link-active:
    textColor: "{colors.gold-light}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 0"
  input-field-focus:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  tab-rail-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "20px 0 20px 20px"
  partner-slot:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Maghanim

## Overview

**Creative North Star: "The Minted Instrument"**

Maghanim is the category's standard arrangement — emerald ground, gold calligraphic mark, Islamic geometry, display serif — built to a tolerance the category does not reach. Everything that usually carries decoration here carries structure instead: the pattern is a tintable alpha mask held under 12% and faded out at every seam, the rules are hairlines at 10–14% ink, the corners are square except where a pill is functionally a button, and gold is spent like metal rather than sprayed like paint. What reads as luxury is restraint plus precision, not ornament.

The page moves in dark-light-dark bands. Emerald is the authority register (hero, governance, footer, interior page headers), cream is the working register, white is the analytic register where tabs, features and partners are read. Each emerald field is a radial ellipse from `emerald-lit` at its centre through `emerald-base` to `emerald-deep` at the edges, so the dark is lit rather than flat. Type sets long and airy: body at 1.66–1.80 leading inside 42–62ch measures, headings balanced and capped at 14–26ch.

The system is bilingual by construction, not by translation. Every layout axis is logical (`start`/`end`, `ms`/`me`, `ps`/`pe`); the Arabic build mirrors genuinely, swaps into Amiri and Noto Sans Arabic, drops all letter-spacing, and rides a more generous leading. Only two things never mirror: the calligraphic mark and the coin.

**Key Characteristics:**
- Rationed gold, on four things and four states only
- Pattern as texture: 8–9.5% on emerald, 12% on cream, always gradient-masked at boundaries
- Flat and hairline-ruled; shadow only under the coin and the primary button
- Square corners; pill only where the element is an action
- Dark-light-dark section rhythm, radially lit emerald
- Logical properties only; a genuine RTL mirror with its own type stack
- Motion that carries meaning and vanishes entirely under reduced motion

## Colors

A single deep emerald family under two light grounds, with one metallic accent held in reserve.

### Primary
- **Emerald Base** (#0B3328): the authority ground. Hero, governance band, interior page headers, the lifted header bar. Also the ink colour for all headings on light grounds.
- **Emerald Lit** (#124434): centre stop of every emerald radial gradient; never used as a flat fill.
- **Emerald Deep** (#072019): outer stop of those gradients, the footer ground, and the text colour that sits on gold.

### Secondary
- **Ration Gold** (#BE973A): the calligraphic mark, the primary action, the active nav marker, the step dots and the step rail. Also the focus ring and the selection highlight.
- **Gold Light** (#D4AF5A): state only — primary-button hover, active nav label, on-dark link hover.

### Neutral
- **Cream** (#F5F0E8): the working ground for alternating sections, and the on-emerald text colour (`on-dark`) at 60–86% opacity.
- **Paper** (#FFFFFF): the analytic ground — solution explorer, partners, alternating solution panels.
- **Ink** (#0B3328): headings, tab labels and muted UI text on light grounds, used at 12% for hairlines, 45–72% for secondary text, and full strength for headings.
- **Body** (#3A3A3A): running paragraph text on light grounds.
- **Error** (#A8321E): form field borders and messages in the error state. The only hue in the system outside emerald and gold.

### Named Rules

**The Gold Ration Rule.** Gold is a material, not a colour. It appears on exactly four surfaces — the calligraphic mark, the primary CTA, the active navigation marker, and the step dots/rail — plus three interaction states: the focus ring, the selection highlight, and the hover shift to `gold-light`. Everywhere else that a gold impulse arrives — section labels, icons, bullets, badges, numbers, partner slots, dividers — the answer is muted ink (`ink/45` to `ink/72`) or `on-dark` at reduced opacity. This is the discipline the whole build rests on and the first thing a later edit will break: a single gold eyebrow or gold icon set converts a rationed system into the interchangeable category default.

**The Muted-Ink Floor Rule.** Small, tracked, uppercase text on cream or white is `ink/70` or darker, never lighter. The floor is a contrast requirement (WCAG AA), and it is why this system's secondary text is muted ink rather than tinted gold. Lightening any of these to `ink/50` for elegance is a regression, not a refinement.

**The Lit-Dark Rule.** Emerald is never a flat fill at section scale. Each emerald field carries a radial ellipse — `emerald-lit` at the focal point, `emerald-base` mid, `emerald-deep` at the edges — so the ground has a centre.

## Typography

**Display Font:** Marcellus (Georgia, Times New Roman, serif) — one weight only (400); never ask for 500/600, `font-synthesis-weight: none` is set and a synthesised weight is a defect.
**Body Font:** Archivo (system sans fallback)
**Arabic Display:** Amiri (Geeza Pro, serif)
**Arabic Body:** Noto Sans Arabic (Geeza Pro, sans-serif)

**Character:** A high-contrast didone against a neutral grotesque: the serif carries all the heritage weight, the sans carries none and stays out of the way. Headings are set at medium (500), negatively tracked and tightly leaded; body is set loose and long. Arabic runs the same contract in its own idiom — Amiri for headings, Noto Sans Arabic for text — and never borrows Latin tracking.

### Hierarchy
- **Display** (500, `clamp(2.1rem, 5.6vw, 3.9rem)`, 1.14, -0.012em): hero headline only, balanced, capped at 18ch.
- **Headline** (500, `clamp(1.8rem, 3.6vw, 2.9rem)`, 1.16, -0.01em): section H2s, capped at 14–26ch. Interior page H1s use `clamp(2rem, 4.4vw, 3.2rem)`.
- **Subhead** (500, `clamp(1.4rem, 2.4vw, 2rem)`, 1.22): the explorer panel heading.
- **Title** (500, 1.30–1.32rem, 1.375): pillar, step and partner names.
- **Body** (400, 1rem, 1.78): running paragraphs, measure 42–62ch. Small body is 0.92–0.95rem at 1.66.
- **Label** (600–700, 0.62–0.68rem, 0.13em–0.26em, uppercase): form labels, partner attribution lines, step numbers, footer column headings, nav items (0.75rem/0.2em). Tabular figures come from the `tabular` utility.

### Named Rules

**The Arabic Never Tracks Rule.** `[lang="ar"] *` sets `letter-spacing: 0 !important`. Letter-spacing breaks Arabic joining, so no Arabic element — including uppercase-styled labels and nav — may carry tracking. Arabic paragraphs ride 2.05 leading and Arabic headings 1.55, both looser than their Latin counterparts.

**The Wordmark Is Artwork Rule.** The logo wordmark is served as SVG from `public/brand/`. It is never typeset in Marcellus or any other face, never recoloured, stretched or redrawn; only the gold/white/black `-tight` variants are used.

## Layout

A single centred container at `max-w-[1400px]` with `24px` gutters, `40px` from `md` up. Sections run `96px` vertical padding, `128px` from `md` up; the emerald governance band runs deeper (`112px`/`144px`). The fixed header is `84px` tall and every in-page anchor carries a matching `scroll-mt-[84px]`.

Content is set in two-column asymmetric grids — heading left, supporting paragraph right and bottom-aligned (`lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`, `64px` column gap) — with the solution explorer using a fixed `280px` tab rail against a fluid panel, and the contact section using `0.85fr / 1fr`. Card grids go 1 → 2 → 4 columns (`sm`, `lg`). The step rail is a 5-column grid from `md` up, stacked below it.

The hero fills `min-h-dvh` with `110px` top padding to clear the header, centres its stack, and lets the coin sit in a reserved `max-w-[500px]` box translated 30% below the fold line. A `24px` cream strip pinned to the hero's bottom edge announces the section below.

Spacing rhythm is a loose 4px-based ladder used at a small number of steps: `12px` between a title and its paragraph, `20–24px` between blocks, `40–64px` between a heading group and its grid, `64px` between grid columns, `96/128px` between sections.

## Elevation & Depth

The system is flat by default. Depth comes from tonal layering — emerald radial gradients, cream against white, hairline rules at 10–14% ink — not from shadows. Exactly two shadows exist, and both are physical rather than decorative: the coin's drop shadow with its separate compressing contact ellipse, and the lift under the hero's primary button. The scrolled header uses translucency and blur (`emerald-base/92` + `backdrop-blur-md`) instead of a shadow to separate itself from the content beneath.

### Shadow Vocabulary
- **Coin drop** (`drop-shadow(0 26px 44px rgba(0,0,0,0.45))`): only on the floating coin render.
- **Coin contact** (`radial-gradient(ellipse, rgba(0,0,0,0.46), transparent 72%)`): the ground shadow beneath it, animated in sync with the float.
- **Action lift** (`box-shadow: 0 14px 34px rgba(0,0,0,0.32)`): the hero primary CTA on emerald only. The contact form's submit button carries no shadow on cream.

### Named Rules

**The Two-Shadow Rule.** Shadow belongs to objects with mass: the coin, and the one gold button that sits on emerald. Cards, panels, inputs, nav and the mobile menu never take a shadow — they take a hairline or a change of ground.

## Shapes

Square by default. Cards, panels, partner slots, inputs, dividers and the mobile nav all have `0` radius; separation is a `1px` rule at `ink/10`–`ink/14` (or `on-dark/10`–`on-dark/15` on emerald) and a change of ground.

Two exceptions, both functional: actions are full pills (`9999px`) — the hero CTA, the submit button, the not-found link — and the step dots are `16px` circles with a `3px` cream ring cut out of the rail. The focus ring uses a `2px` radius so it reads as a ring rather than a box.

The icon language is drawn on the pattern's geometry: `1.25px` strokes, square caps, mitred joins, 45° turns, no fills, `32px` grid, rendered in `ink/60`. Bullets are `4px` dots at `ink/45`. The pattern itself is the only curved, dense form in the system, and it is always below 12% opacity.

### Named Rules

**The Pill-Means-Action Rule.** A rounded shape is a promise that something happens when you press it. Nothing decorative, informational or containing takes a radius.

## Components

### Buttons
- **Shape:** full pill (`9999px`).
- **Primary:** gold ground (#BE973A), emerald-deep label, `1.15rem 2.5rem` padding, 0.88–0.9rem uppercase at 0.11em tracking, semibold. On emerald it carries the action lift shadow; on cream it does not.
- **Hover / Focus:** background shifts to `gold-light` and the button rises `1px` over 200ms; the rise is cancelled under `motion-reduce`. Focus shows the global gold ring.
- **Disabled:** 65% opacity, used for the submitting state.
- **Quiet link:** on emerald, gold text with a `border-gold/50` underline that moves to `gold-light` on hover; on emerald grounds in the footer, `on-dark/76` text hovering to `gold-light`.

### Cards / Containers
- **Corner Style:** square (`0`).
- **Background:** the section ground itself; the partner slot is `cream/55` on white.
- **Shadow Strategy:** none — see Elevation.
- **Border:** `1px` at `ink/12`. The pillar grid is a single ruled block (`border-y`, `border-x` at `lg`) with `1px` internal column rules rather than four separated cards.
- **Internal Padding:** `36px` vertical, `32–36px` horizontal from `sm` up.

### Inputs / Fields
- **Style:** underline only — transparent ground, `1px` bottom border at `ink/22`, `12px` vertical padding, ink text at 1rem. Label above is a 0.68rem uppercase tracked line at `ink/72`.
- **Hover:** border to `ink/40`. **Focus:** border to gold, plus the global focus ring.
- **Error:** border and message in #A8321E, `aria-invalid` and `aria-describedby` wired to the message.
- **Success:** the whole form is replaced by a `role="status"` panel with a `gold/45` hairline border on `paper/60` and a display-serif confirmation line.

### Navigation
- **Desktop:** uppercase 0.75rem labels at 0.2em tracking, `on-dark/76`, hovering to full `on-dark`, spaced `36px`. The active item is marked by a `1.5px` gold-light underline `6px` below the label and `aria-current="page"`. The language toggle sits at reading-end behind a `1px` `on-dark/22` start-border with `28px` inset padding, showing the opposite language's own name and holding the user on the equivalent route.
- **Header behaviour:** transparent at the top; past `24px` of scroll it takes `emerald-base/92` with `backdrop-blur-md`, transitioning over 300ms.
- **Mobile:** a 24×14px three-line button that morphs into an X (lines translate `6.5px` and rotate ±45°). The panel is a full-width `emerald-base/97` sheet with `1px` `on-dark/10` row rules; Escape closes it and returns focus to the toggle; route changes close it.
- **Skip link:** hidden until focused, then a gold chip at reading-start.

### Solution Explorer (signature)
A vertical tab rail against a cross-fading panel. Tabs are hairline-ruled rows (`ink/12`), inactive at `ink/72`, active at full ink, each with a `2px` gold bar at the reading-start edge that scales in on the Y axis over 300ms from its centre. Arrow keys move selection (mapped to the reading direction: ArrowRight advances in LTR, ArrowLeft in RTL) and focus follows selection. Panels cross-fade with a `22px` slide along the reading direction, 400ms, `cubic-bezier(0.22, 0.61, 0.36, 1)`; under reduced motion the slide is zero and the fade shortens to 150ms. Every panel ends with a hairline-ruled partner attribution line in muted ink.

### Step Rail (signature)
Five steps across a `2px` rail. The rail's track is `ink/14`; the gold fill draws itself once on entry with a 1.4s `scaleX` from the reading-start edge (`origin-[left_center]`, flipped by `rtl:origin-[right_center]`), and each step's content rises in behind it on a 160ms stagger. Dots are gold circles ringed in cream so the rail appears to pass behind them. Under reduced motion the rail is drawn at full scale immediately and the steps do not animate.

### Coin (signature)
The client's transparent render, floating in a reserved square box at `min(84vw, 430px)`. Two deliberately unequal periods keep it from bouncing: `±8px` vertical float over 6s and `±2°` tilt over 9s, both `easeInOut`, both infinite. The contact ellipse under it compresses on the float's 6s period (`scaleX` 1 → 0.88, opacity 0.9 → 0.6). It is lazy-loaded and never the LCP element, and it never mirrors in RTL.

### Pattern Field
The Islamic geometry is a white-line alpha mask (`public/pattern/geo-alpha.png`) applied through the `pattern-field` utility: the mask carries the shape, a background colour token carries the hue, and opacity carries the weight. Tint is gold, opacity is `0.08–0.095` on emerald and `0.12` on cream, tile size `420–560px`. A second gradient mask fades the field at the section boundary — `both` (transparent → opaque 14%–86% → transparent), `bottom`, or `top` — so it never ends on a hard edge. The footer is the one variant: tint `#1B4A3B` at 0.55 on `emerald-deep`, so the pattern reads embossed a shade lighter than its ground rather than laid over it.

### Reveal
The scroll entrance: opacity 0 → 1 with a `20px` rise, 620ms on `cubic-bezier(0.22, 0.61, 0.36, 1)`, fired once at a `-90px` viewport margin and staggered by the caller in 60–100ms increments. Under `prefers-reduced-motion` it does not animate at all — it renders the plain element, not a slower effect. A `<noscript>` rule forces `[data-reveal]` visible so content can never depend on a script having run.

## Do's and Don'ts

### Do:
- **Do** keep gold on the four surfaces and three states named in the Gold Ration Rule; reach for muted ink (`ink/45`–`ink/72`) or `on-dark` at reduced opacity for everything else.
- **Do** hold small tracked uppercase text at `ink/70` or darker on light grounds, and `on-dark/66` or lighter-weight equivalents on emerald — the contrast floor is what forced this palette.
- **Do** apply the pattern through the `pattern-field` utility with a token tint, under 12% opacity, and always with a boundary fade (`both` / `top` / `bottom`).
- **Do** light every emerald field with the radial `lit → base → deep` ellipse.
- **Do** write layout in logical properties only (`start`/`end`, `ms`/`me`, `ps`/`pe`, `border-s`), and flip directional motion by reading direction.
- **Do** give every new animation a reduced-motion branch that removes it rather than slowing it, and a no-JS fallback if it gates content.
- **Do** separate with a `1px` hairline at `ink/12` and a change of ground.
- **Do** keep the mark and the coin unmirrored in Arabic, and serve the logo from the `-tight` SVG variants.

### Don't:
- **Don't** add a second gold button to any page; one primary action per screen, in gold, is the whole rule.
- **Don't** tint icons, bullets, section labels, numerals, badges or partner slots gold. The Islamic-fintech default is a gold-sprayed page; this system's value is that it isn't one.
- **Don't** raise the pattern above 12%, drop the boundary fade, or scale the tile so a motif becomes legible against type.
- **Don't** apply `letter-spacing` to Arabic, or use Latin leading values for Arabic text.
- **Don't** use `left`/`right`, `ml`/`mr`, or `pl`/`pr` for layout anywhere.
- **Don't** add shadows to cards, panels, inputs or nav — only the coin and the hero's gold button have mass.
- **Don't** round anything that is not an action.
- **Don't** invent a partner logo, a certification badge, a statistic or a scheme mark to fill a visual gap; the partner slot's labelled reservation and the bordered `PlaceholderNote` are the system's approved way to show an unfilled decision.
- **Don't** let the header's scrolled state become opaque; translucency plus blur is how it separates.
