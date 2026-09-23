# 🦋 WINGWOMAN — PDR V0

## 1. Vision

WINGWOMAN is a playful digital world where girls discover their vibe,
express their personality, share results with friends, and eventually
discover products or gifts that match them.

Core loop:

DISCOVER → PLAY → GET YOUR VIBE → SHARE → SHOP/GIFT

The website should feel like a fun mobile app, NOT a traditional online store.

---

## 2. MVP Goal

Build a beautiful interactive experience that proves people enjoy
the WINGWOMAN concept before investing money in inventory.

MVP contains only:

1. Landing
2. Quiz
3. Result
4. Share Card

NO:
- Login
- Payment
- Database
- Admin panel
- Full shop
- Complex backend

---

## 3. Brand

Name:
WINGWOMAN

Personality:

- Playful
- Feminine
- Dreamy
- Gen-Z
- Emotional
- Interactive
- Slightly Y2K
- Cute but not childish
- Premium but not luxury/corporate

Main visual symbol:

BUTTERFLY

---

## 4. Colors

Primary Pink:
#F52B83

Soft Pink:
#FFD7E7

Dark:
#15131A

Background:
#FFF9FC

Accent:
#FF8FBD

Use mostly light/white backgrounds,
pink for actions and highlights,
dark colors for contrast.

---

## 5. Typography

Primary:
Plus Jakarta Sans

Optional expressive font:
Caveat

Maximum 2 font families.

---

## 6. Tech Stack

Frontend:
Next.js

Language:
TypeScript

Styling:
Tailwind CSS

Backend/database later:
Supabase

Icons:
Lucide

Animation:
Motion

Version control:
Git + GitHub

Deployment/testing:
Vercel during development/testing,
with production hosting reviewed before commercial launch.

---

## 7. Pages

/

Landing page

/quiz

Interactive personality/vibe quiz

/result

Personalized vibe result

/share

Shareable result card

Future:

/vibes
/gifts
/shop
/product/[slug]
/account
/orders
/admin

---

## 8. MVP User Flow

LANDING

↓
"DISCOVER MY VIBE"

↓
QUIZ

↓
ANSWER QUESTIONS

↓
CALCULATE RESULT

↓
VIBE RESULT

↓
SHARE MY VIBE

↓
OPTIONAL:
DISCOVER PRODUCTS / GIFTS

---

## 9. Initial Vibes

Temporary MVP identities:

1. The Soft Dreamer
2. The Main Character
3. The Mysterious One
4. The Wild Soul

These are placeholders and can be refined later.

---

## 10. Quiz

Questions should be:

- Visual
- Short
- Fun
- Mobile-first
- Easy to answer
- Emotionally relatable

Avoid boring personality-test questions.

Use cards, images, colors and animations.

Target:
5–8 questions.

---

## 11. Result

Each result contains:

- Vibe name
- Short personality description
- Visual identity
- Colors
- Energy percentages
- Butterfly animation
- Share button

Example:

"THE SOFT DREAMER"

Dreamy.
Romantic.
Creative.
Quietly confident.

---

## 12. Share

Create a beautiful result card suitable for:

- Instagram Story
- WhatsApp
- TikTok sharing
- Direct link

Goal:

Make users WANT to share their result.

---

## 13. Design Rules

Mobile-first.

Avoid:

- Generic Shopify appearance
- Corporate UI
- Too much pink
- Excessive animations
- Random gradients
- Too many fonts
- Clutter
- Cheap dropshipping aesthetic

Use:

- Large typography
- Rounded cards
- Soft spacing
- Strong visual hierarchy
- Butterfly details
- Micro-interactions
- Smooth transitions
- Playful copy

---

## 14. Project Structure

app/
├── page.tsx
├── quiz/
│   └── page.tsx
├── result/
│   └── page.tsx
├── share/
│   └── page.tsx
├── globals.css
└── layout.tsx

components/
├── ui/
├── brand/
├── quiz/
├── result/
└── shared/

data/
├── vibes.ts
└── questions.ts

lib/
├── quiz.ts
├── scoring.ts
└── utils.ts

public/
├── images/
├── logo/
└── icons/

types/
└── index.ts

---

## 15. Future Database

When MVP is validated, add Supabase.

Tables:

users
vibes
quiz_questions
quiz_answers
quiz_results
products
orders
order_items
shared_results

---

## 16. Development Rules

AI must:

1. Read PDR.md before major implementation.
2. Inspect existing files before changing them.
3. Reuse existing components.
4. Avoid unnecessary dependencies.
5. Keep mobile-first design.
6. Never rewrite unrelated working code.
7. Explain important changes.
8. Test after each major feature.
9. Keep code clean and modular.
10. Never add a feature that is not required without asking.

---

## 17. MVP Success Metrics

Track:

Visitors
↓
Quiz starts
↓
Quiz completions
↓
Results viewed
↓
Results shared
↓
Product interest

Primary validation question:

"Do people enjoy the WINGWOMAN experience enough to share it?"

---

## 18. MVP Principle

DO NOT BUILD THE STORE FIRST.

Build the EXPERIENCE first.

WINGWOMAN should make someone think:

"Wait... this is actually cute.
I want to know my vibe."