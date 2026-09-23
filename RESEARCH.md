# 🔎 Pink In Sweet — Research & Design Blueprint (pre-code)

> Read this together with `PRD.md`. Nothing gets built until section 12 is answered.

---

## 1. What the research actually says (the important bits)

### 1.1 Spotify Wrapped — the one lesson that matters

- **"Design the shareable artifact first, then build the experience around it."** (UX Playbook, Dec 2025)
  This is the single most important finding. The share card is not a feature of the result page — it *is* the product. Everything upstream (quiz length, question wording, result copy) exists to produce a card a girl is proud to post.
- Wrapped works because: **the user becomes the hero, the brand disappears.** The card says *you*, not *buy our perfume*. The brand is a signature in the corner.
- It is **identity + social proof in one object**. "I'm a Soft Girl" is a flex; "I use this perfume" is an ad.
- **Share UI is deliberately one tap** into the OS share sheet with the image already attached — no "download then open Instagram then find it" chain. Every extra step is a measurable drop-off.
- Wrapped is **annual & scarce** (FOMO). You don't have that lever, so `"Which girl are you TODAY?"` is the substitute — daily-changing, non-repeatable, so there's a reason to come back tomorrow.

### 1.2 Quiz UX benchmarks

- Quizzes drive **~67% more engagement than static content** (2026 benchmarks) and quiz landing pages hold attention for **~4m38s**.
- Strong quiz completion = **70%+**; mobile survey completion now peaks around **85%** when short.
- **Show progress.** People tolerate roughly 3x more waiting when a progress indicator is visible. For a 9-question quiz this is the cheapest completion-rate win available.
- Best-practice patterns that apply here: one question per screen, no scrolling, thumb-reachable answers, instant visual feedback on tap, no forced free-text, and a **felt** reward immediately after the last tap.
- **Guardrail:** keep it at **7–9 questions**. Longer = higher drop-off, and drop-off is exactly where your funnel dies.

### 1.3 2026 visual direction (what "modern" means right now)

- **Typography is the story, not decoration.** Oversized display headlines, tighter leading, editorial scale contrast. This is the biggest 2026 shift and it is cheap to implement.
- **Glassmorphism 2.0** — back, but as a *functional* layer (frosted panels over soft gradients for depth), not as the whole aesthetic.
- **Bento grids** for content clusters → perfect for the style-guide / scent-notes block on the result page.
- **Kinetic / variable type** — variable font axes animated on reveal. Huge "premium" signal, near-zero cost.
- **Subtle dynamic gradients + soft grain/texture** to avoid the flat "corporate Shopify" look PRD already bans.
- **Anti-trend guard:** heavy 3D, neumorphism, and cyber aesthetics are trending *away* from what a feminine fragrance brand needs. Don't chase them.

### 1.4 Perfume / scent quizzes — what already exists

Glossier, XLNC, Scentbird-style quizzes all run the same mechanics: answer about *lifestyle and feelings*, get a scent family back, get a product. What none of them do well:

- They ask **"what scent do you like?"** — which is the wrong question for a girl who doesn't know scent language yet.
- They return a **category** ("floral"), not an **identity**.

**Your wedge:** never ask about perfume. Ask about *her*. Then tell her which girl she is, and reveal that this girl has a scent. That's the difference between a funnel and a gift.

---

## 2. Concept: the emotional architecture

**Question on the landing page:** *Which girl are you today?*

| Stage | Her feeling | Your job |
|---|---|---|
| Landing | curiosity, "this is cute" | 3 seconds to understand, zero friction |
| Quiz | seen, playful | feel like a conversation, not a form |
| Result | **recognised** — "how did it know" | the emotional peak, must land |
| Share | proud, a little vain | one tap, gorgeous artifact |
| Purchase | "I want to *be* her" | the product is the costume, not the pitch |

**Emotional peak = result page.** Not the shop. The shop must ride the peak, never precede it.

---

## 3. Product ↔ personality mapping (3 variants)

The three product shots are `pink.jpeg`, `orange.jpeg`, `brown.jpeg`. I couldn't open the images, so names/notes below are **proposals** to be corrected by you (section 12).

| Variant | Archetype ("girl") | Mood today | Scent family | Style / identity |
|---|---|---|---|---|
| 🩷 **Pink** | **The Sweetheart** — *Soft Girl Era* | tender, flirty, a little dramatic | floral gourmand: strawberry, rose, vanilla | coquette — bows, gloss, baby pink, ribbon nails |
| 🧡 **Orange** | **The Spark** — *Golden Girl Era* | sunny, magnetic, restless | fruity citrus: peach, neroli, amber | clean girl — linen, gold hoops, iced coffee, glossy skin |
| 🤎 **Brown** | **The Warm One** — *Cocoa Girl Era* | grounded, cosy, quietly powerful | warm woody: vanilla, caramel, tonka, sandalwood | soft luxury — knit, gold jewellery, candle, slow mornings |

Each archetype carries 5 payloads (this matters — it's what makes the result feel *rich* instead of a single sentence):

1. **Name + emoji**
2. **One emotional paragraph** written in her voice
3. **Mood of the day** + 1-line affirmation/ritual
4. **Energy split** (percentages across the three — never a flat 100/0/0)
5. **Style bundle** (palette swatches, 3 style chips, scent notes) → slides into the product

---

## 4. The quiz — 9 questions, and why they're built this way

Rules every question obeys:
- One question per screen, 3 visual options max (mobile thumb reach).
- **Never** mentions perfume, notes, or the product.
- Answers are *behavioural or sensory*, not self-reported traits ("what's your personality?" is banned).
- Every question secretly scores the three archetypes.

### The logical core: a scent pyramid as a personality model

This is what makes it feel like it *knows* her rather than guessing randomly.

| Axis | Perfume meaning | Human meaning | Questions |
|---|---|---|---|
| **Top / Sweet** | first impression, brightness | how she enters a room | Q1, Q3, Q6 |
| **Heart / Sunny** | the personality, the middle | who she is with people | Q2, Q5, Q8 |
| **Base / Warm** | what lingers, comfort | what she needs today | Q4, Q7, Q9 |

Each option awards points to one or two axes → total → percentages → winning archetype. Order of questions interleaves the axes so the quiz never feels like it repeats itself.

### Draft question bank

1. **The first 10 seconds after you wake up decide your day.** What's playing? — *(cozy lo-fi · pop that makes you dance · something soft and sad)*
2. **Your phone is at 3%.** What's the last thing you scroll? — *(Pinterest boards · a vlog · the stars/astrology)*
3. **Pick today's drink.** — *(iced caramel latte · sparkling peach tea · dark hot chocolate)*
4. **Your outfit picked itself. Which one?** — *(3 visual cards)*
5. **Someone calls you "too much".** You… — *(blush and smile · laugh louder · quiet smirk)*
6. **It's 9pm and the day is yours.** What does it look like? — *(bath + playlist · out dancing · a candle and a book)*
7. **Pick a texture.** — *(silk · sun-warmed skin · cashmere)*
8. **Which compliment hits hardest?** — *("you're so sweet" · "you're magnetic" · "you're so comforting")*
9. **If today were a colour, it would be…** — *(pink · orange · brown)*

Q9 is the "palette reveal" — it also visually previews the result's colour scheme, so the transition into the result page feels earned.

Also plan: **a "mood weather" twist on Q9** so the same girl can get a different *today* even with the same archetype — this is what makes repeat plays possible.

---

## 5. Result page — the emotional peak

Order of reveal (each ~400ms apart, spring physics, skippable):

1. Card slides up, butterfly settles → **archetype name** in oversized display type
2. Emotional paragraph types/fades in
3. **Energy tri-bar** animates from 0 to her real split, with percentages counting up
4. **Mood today** + affirmation
5. **Style bundle** (bento grid: palette swatches / 3 chips / scent notes)
6. Product card appears — *"this is your scent"* — with the variant photo
7. Sticky bottom CTA: **Share my girl** (primary) · Meet {archetype}'s scent (secondary)

The product is revealed **after** the identity, never before. Selling first kills the gift.

---

## 6. Share — the free-marketing engine

Three layers, all needed:

| Layer | Mechanism | Why |
|---|---|---|
| **A. Native share sheet** | `navigator.share({ files: [png] })` with `navigator.canShare()` guard | One tap → Instagram Story / WhatsApp / TikTok. This is the Wrapped trick. |
| **B. Fallback download** | Client-render PNG → `<a download>` | For desktop and unsupported browsers (Web Share with files is iOS-only-ish). |
| **C. Link unfurl** | Server-generated OG image via `next/og` (Satori) | When the shared *link* lands in a chat, it must show a gorgeous preview card. |

### Card spec (the artifact to design first)

- **Story 1080×1920** (primary) + **Square 1080×1080** (WhatsApp/feed). Same layout, two canvases.
- Composition: brand signature top, giant archetype name centre, energy tri-bar, mood word, product hint bottom, small "which girl are you?" prompt + link.
- Safe zones respected: ~250px top / ~310px bottom clear for IG Story UI.
- **Every card is watermarked and self-referential** — the prompt is the ad.
- Note: "story sharing to Instagram" from the web is **not** direct — the OS share sheet is the correct and only reliable path. Anything else breaks.

### Deep-link without a database

No backend needed at all: encode the result in the URL, e.g. `/result?g=pink&e=62,24,14&m=tender`. Sharers get a live, correct result page; you get zero infra. If a variant of the card is later needed server-side, the same params feed `next/og`. This is MVP-right and PRD-compliant.

---

## 7. Tech decisions

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | per PRD |
| Styling | **Tailwind CSS v4** | CSS-first config, no `tailwind.config.js` needed; theme tokens in `globals.css` |
| Animation | **Motion** (`motion/react`) | PRD says "Motion"; use spring physics + `layout` animations, respect `prefers-reduced-motion` |
| Icons | **lucide-react** | PRD-mandated; tree-shakeable, consistent 24px grid, stroke-based → set `strokeWidth={1.5}` |
| Fonts | see §8 | `next/font/google`, self-hosted, no layout shift |
| Share image | **html-to-image** (client) + **next/og** (server OG) | two jobs, two tools |
| Analytics | optional, later | see §10 |
| Database | **none in MVP** | result lives in the URL |

**Icons — verified:** Lucide is the right call for this brand (clean, non-corporate, consistent). Alternatives for reference: Heroicons = smallest bundle, Phosphor = most icons + 6 weights. No reason to deviate from Lucide; PRD already specifies it.

---

## 8. Typography & colour

**PRD stack:** Plus Jakarta Sans (primary) + Caveat (optional expressive).

**✅ DECIDED: Fraunces + Plus Jakarta Sans.** Caveat is dropped.

Why: Fraunces is a variable serif with a **`SOFT` axis and optical sizing** — warm, dreamy and expensive, and because the axes are animatable it directly serves the 2026 "typography is the story" direction at zero extra cost. Plus Jakarta Sans stays as the body/UI face. Still 2 families, so PRD's limit holds.

Implementation notes:
- Load via `next/font/google` with explicit axes: `Fraunces({ axes: ['SOFT', 'WONK', 'opsz'] })`. Subset Latin + the Arabic face separately.
- Display use: large sizes, high `opsz`, slight `SOFT` bump for the dreamy look.
- Optional flourish: animate `SOFT`/`opsz` on reveal of the archetype name (variable-font motion — a genuine premium signal, ~free).
- Alternatives if you change your mind later: Bodoni Moda (fashion-editorial) · Instrument Serif (lighter, minimal) · Cormorant Garamond (classic feminine).

**Colour** — PRD palette plus per-variant accents (the variants must be *visually distinct* while staying one brand):

| Token | Value | Use |
|---|---|---|
| primary | `#F52B83` | actions, highlights |
| soft | `#FFD7E7` | surfaces, cards |
| dark | `#15131A` | contrast, type |
| bg | `#FFF9FC` | page background |
| accent | `#FF8FBD` | gradients, details |
| + `variant.pink / .orange / .brown` | from product shots | result theming, tri-bar, share card |

*(Exact variant hexes to be sampled from the product images — I can't read them.)*

---

## 9. Mobile-first spec (non-negotiables)

- Design at **390×844**, test 360px and 320px.
- Tap targets ≥ **44×44px**; primary CTAs in the **thumb zone**, bottom-anchored.
- Respect `env(safe-area-inset-bottom)` — the sticky CTA must not sit under the iOS home bar.
- No horizontal scroll, no zoom-on-input (`font-size ≥ 16px`).
- One-screen quiz → no scroll, no pinch, no "back button trap".
- Budget: **LCP < 2.5s on 4G.** Product images via `next/image`, priority on hero only.
- Motion must be **cancellable** and reduced-motion aware; never block the answer tap.
- Text contrast ≥ 4.5:1 — pink-on-pink is the easy trap here.

---

## 10. Measuring whether it worked

PRD §17 funnel: Visitors → Quiz starts → Completions → Results viewed → Shares → Product interest.

Instrument those 6 events only. Recommendation from research: **Simple Analytics** (privacy-first, cookie-free so no consent banner, trivial for a marketing site, custom events for the funnel). GA4 is the alternative if you need deep demographics; Matomo if you want to self-host and own the data.

I'd wire this **after** the experience works, not before.

---

## 11. Project setup notes (Windows 11 + VS Code)

- Node LTS, then `npx create-next-app@latest` with TypeScript + Tailwind + App Router + `src/` off (PRD's structure is root-level `app/`, `components/`, `data/`, `lib/`, `types/`).
- GSAP is *not* needed; Motion covers everything here.
- VS Code extensions worth having: **Tailwind CSS IntelliSense**, ESLint, Prettier, Error Lens, and the Next.js snippets pack.
- Commands in this environment run in **Git Bash** — POSIX syntax, forward slashes.
- Git init early; Vercel for preview deploys.

Recommended dependency set (small on purpose):
```
next react react-dom typescript
tailwindcss @tailwindcss/postcss
motion
lucide-react
html-to-image
```

---

## 12. ✅ LOCKED DECISIONS

1. **Brand:** WINGWOMAN is **rebranded to Pink In Sweet**, 3 vibes instead of 4. Keep the PRD's structure, palette, voice, and the no-store-first principle; drop the old name. Butterfly decision still open (see §13).
2. **Purchase:** **WhatsApp / Instagram DM order.** Zero infrastructure, launch-ready.
3. **Typography:** Fraunces + Plus Jakarta Sans.
4. **Language:** **English + Arabic with a toggle**, incl. RTL.

### 12.1 WhatsApp order flow — how "Buy" works with no backend

The product CTA must not feel like a dead end. Flow:

1. Result page reveals the variant matched to her archetype.
2. CTA: **"Order on WhatsApp"** → `https://wa.me/<number>?text=<prefilled>`
3. Prefilled message carries the marketing signal *and* her identity, e.g.
   `Hi! I'm 🩷 The Sweetheart — I'd like to order Pink In Sweet. (from the quiz)`
4. Secondary: Instagram DM link with the same idea.

Why this is good for MVP:
- The prefilled text quietly tells you **which archetype converts** — real funnel data with no analytics stack.
- Manual ordering means you validate demand before stock or payment integration.
- Caveat: it's manual and doesn't scale past a few dozen orders/day. That's fine for validation.

### 12.2 EN + AR / RTL — what this actually costs

This is the single biggest architectural decision in the project, so it must be set up on day one, not retrofitted:

- **`dir` handling:** `dir="rtl"` switches on the `<html>` element per locale; set `<html lang>` and `dir` from the active locale.
- **Logical CSS properties only** — `ms-*`/`me-*`, `ps-*`/`pe-*`, `start-*`/`end-*`, `text-start`/`text-end`. Never `ml-*`/`mr-*`/`left-*`/`right-*`. Tailwind gives you these built in; enforcing it from the first commit is what makes RTL nearly free.
- **Mirrored UI** for progress bar direction, chevrons, tri-bar order, carousels. Icons that imply direction must flip; icons that don't (a heart, a butterfly) must not.
- **Arabic type is not Fraunces.** A serif Latin display face has no Arabic counterpart. Pair Fraunces with a quality Arabic face — **IBM Plex Sans Arabic** (clean, variable, technical), **Noto Kufi Arabic** (geometric, modern), or **Tajawal** / **Cairo** (warmer, more everyday). Plus Jakarta Sans has no Arabic either, so an Arabic body face is required regardless. *My pick: Tajawal or IBM Plex Sans Arabic for body, and set Arabic headlines in a heavier weight rather than faking a display serif.*
- **Line height and letter-spacing differ.** Arabic needs more leading and takes **no** letter-spacing; the tight-tracking editorial look is a Latin-only move. Set per-locale type tokens.
- **Copy is not a translation.** The quiz is emotional and idiomatic — a literal translation of "Which girl are you today?" will read flat in Arabic. Plan for copywriting, not translation, and expect Arabic lines to change length materially.
- **The share card is localized too** — an Arabic card needs RTL layout, mirroring, and the Arabic face embedded for image rendering.
- **Scope warning:** ~20–30% more work on layout, copy, and the card. **Recommendation: build EN first, fully working end-to-end, then layer AR in.** Not because it's hard to add, but because you want to validate the concept once before doing every piece of copy twice.

---

## 13. STILL OPEN — product truth needed

I cannot open `pink.jpeg` / `orange.jpeg` / `brown.jpeg` or anything in `MVP/` (images aren't readable as text by me). I need these from you:

1. **Variant names** — what are the 3 perfumes actually called?
2. **Scent notes** for each (top / heart / base).
3. **Price** and bottle size/format.
4. **WhatsApp number + Instagram handle** for the order flow.
5. **Archetype names** — do you like *The Sweetheart / The Spark / The Warm One*, or do you want to name the girls yourself?
6. **Butterfly** — keep as the brand symbol, or retire it in the rebrand?
7. **The `MVP/` images** — a moodboard you want matched, or old references to ignore?
