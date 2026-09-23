# 🩷 Pink In Sweet — *Which girl are you today?*

A one-product e-commerce experience for a 3-variant perfume line, built around a
9-question quiz that gives her an **identity**, not a product recommendation.

The loop: **landing → quiz → her girl → share card → order**.

No login, no database, no payment provider. The whole MVP is static-ish.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

Built on Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Motion +
lucide-react, with **Fraunces** (display) and **Plus Jakarta Sans** (body).

---

## Routes

| Route | What it is |
|---|---|
| `/` | Landing. Hero, the three girls, how it works, the three scents. |
| `/quiz` | Nine questions, one per screen, with a segmented progress bar. |
| `/result?a=…` | The reveal: identity → energy split → mood → style → product → share. |
| `/share?a=…` | Standalone card page, for deep links. |
| `/api/og?a=…` | Server-rendered 1200×630 OG image (Satori) for link unfurls. |

### The URL *is* the database

There is no backend. Her answers travel in a query param:

```
/result?a=q1a-q2b-q3c-q4a-q5b-q6c-q7a-q8b-q9c
```

`decodeAnswers()` validates every token against the real question bank, then
`scoreQuiz()` recomputes the result on the server. That single decision gives
you shareable links, correct OG images and zero infrastructure.

---

## How the scoring works

Each question probes one axis of the **scent pyramid, repurposed as a
personality model**:

- **top** → how she enters a room
- **heart** → who she is with people
- **base** → what she needs today

Every option awards points to one or two of the three archetypes, **and** tags a
*mood*. Archetype and mood are scored separately — which is how the same girl
can get "The Sweetheart" with *Tender* energy one day and *Dreamy* the next.
That's what makes `"…today?"` honest instead of a gimmick.

Percentages use the **largest-remainder method** (`lib/scoring.ts`) so they
always total exactly 100 — naive rounding produces 99% or 101%, which looks
broken on a share card.

---

## ⚠️ Placeholders to replace before launch

All of this is centralised so you never have to hunt through components.

**`data/site.ts`**
- `whatsapp` — full international format, digits only, no `+` (e.g. `971500000000`)
- `instagram` — handle without the `@`
- `url` — your real domain (used on the share card and in OG metadata)
- `showInstagram` — set `false` if there's no account yet

**`data/vibes.ts`**
- `scent.productName` — currently `Rose Sugar` / `Golden Hour` / `Warm Cocoa`
- `scent.notes`, `scent.description`
- `name` / `era` / `tagline` / `paragraph` / `ritual` — the archetype copy
- `swatches`, `chips`, `palette` — sampled to match each bottle, not the real thing

**Archetype names** (`The Sweetheart` / `The Spark` / `The Warm One`) are mine.
Swap them for your words — they're the heart of the whole product.

---

## Why ordering goes through WhatsApp

The prefilled message carries her archetype:

> Hi Pink In Sweet! 🩷 I did the quiz and I'm "The Sweetheart" — I'd like to
> order Rose Sugar. (from the quiz)

So the WhatsApp thread itself tells you **which girl converts**. Real funnel
data with no analytics stack. The tradeoff is that it's manual and stops scaling
around a few dozen orders a day — fine for validation, revisit at launch.

---

## The share card is the product

Everything upstream exists to produce a card she's proud to post.

- **Story 1080×1920** and **Square 1080×1080**, same layout, two canvases.
- Native share via `navigator.share({ files })`, with a PNG download fallback
  for desktop. On iOS, `files` must be the *only* payload — adding `url` makes
  the share fail silently.
- The card is rendered **once at full size** and scaled down for preview, so what
  she sees is exactly what exports. No second implementation to drift.
- Every card ends with *"Which girl are you today?"* — the prompt is the ad.

---

## Still to do

- [ ] **Arabic + RTL.** EN-only for now, but the CSS already uses logical
      properties (`ps-*`, `ms-*`, `text-start`) wherever direction matters, so
      mirroring is cheap to add. Arabic needs its own body face (Plus Jakarta
      Sans and Fraunces are Latin-only) and no letter-spacing.
- [ ] Real product photography — `public/images/*.jpg` are your originals.
- [ ] Analytics for the funnel: visitors → quiz starts → completions → shares →
      order clicks. Add *after* the experience is validated, not before.
- [ ] Price, shipping copy and a size/format line on the product card.
