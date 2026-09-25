import type { ArchetypeId } from "@/types";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  WINGWOMAN — MASTER DYNAMIC CONFIGURATION
 *  Edit text, colors, names, prices, testimonials, and links here!
 *  Every component and page dynamically consumes this file.
 * ═══════════════════════════════════════════════════════════════════
 */

/** A bilingual string { en, ar }. */
export type Localized = { en: string; ar: string };

export interface TestimonialItem {
  id: string;
  author: string;
  city: string;
  stars: number;
  variant: ArchetypeId;
  quote: Localized;
}

export const CONFIG = {
  /** ── 1. Brand Identity ────────────────────────────────────────── */
  brand: {
    name: "WINGWOMAN",
    /** Short English hook — this is the name of the whole site.
     *  Shows in the browser tab, the OG image, and the header wordmark.
     */
    tagline: {
      en: "Ashmen bent nti lyoum?",
      ar: "أشمن بنت فيك نتي اليوم؟",
    } satisfies Localized,
    /** One-line English hook the site uses to introduce itself. */
    description: {
      en: "The Moroccan Gen-Z fragrance quiz — 60 seconds, one vibe, your signature scent.",
      ar: "كويز العطر الدارمالي الشاب — ٦٠ ثانية، فيب واحد، وعطرك المميز.",
    } satisfies Localized,
    url: "https://wingwoman.vercel.app",
    /** Stylized logo assets */
    logo: "/brand/butterfly.png",
    textLogo: "/brand/text-logo.png",
    themeColor: "#FFF9FC",
  },

  /** ── 2. Contact & Socials ─────────────────────────────────────── */
  contact: {
    /** WhatsApp order number (Moroccan format, digits only) */
    whatsapp: "212620283725",
    /** Brand Instagram handle (used in links and cards) */
    instagram: "Wingwoman 8",
    /** Display handle with '@' prefix */
    instagramHandle: "@wingwoman.8",
    showInstagram: true,
  },

  /** ── 3. Color Tokens & Variant Styles ─────────────────────────── */
  colors: {
    base: {
      cream: "#FFF9FC",
      ink: "#15131A",
      inkSoft: "#6B6472",
      rose: "#F52B83",
      petal: "#FF8FBD",
      blush: "#FFD7E7",
    },
    variants: {
      pink: {
        id: "pink",
        label: { en: "Sweetheart Pink", ar: "روز سويت" } satisfies Localized,
        accent: "#F52B83",
        soft: "#FFD7E7",
        wash: "#FFF1F7",
        ink: "#5C0B33",
        gradient: "from-[#F52B83] via-[#FF60A8] to-[#FF8FBD]",
        buttonBg: "from-[#F52B83] to-[#FF8FBD]",
        shadow: "rgba(245, 43, 131, 0.45)",
      },
      orange: {
        id: "orange",
        label: { en: "Spark Sunset", ar: "جولدن أور" } satisfies Localized,
        accent: "#F4732B",
        soft: "#FFE6D5",
        wash: "#FFF5EE",
        ink: "#5A2A00",
        gradient: "from-[#F4732B] via-[#FF8D4D] to-[#FFA768]",
        buttonBg: "from-[#F4732B] to-[#FFA768]",
        shadow: "rgba(244, 115, 43, 0.45)",
      },
      brown: {
        id: "brown",
        label: { en: "Grounded Cocoa", ar: "وارم كوكا" } satisfies Localized,
        accent: "#8A5A3B",
        soft: "#EEDFD5",
        wash: "#FAF5F0",
        ink: "#331E12",
        gradient: "from-[#8A5A3B] via-[#A8724F] to-[#C99672]",
        buttonBg: "from-[#8A5A3B] to-[#C99672]",
        shadow: "rgba(138, 90, 59, 0.45)",
      },
    },
  },

  /** ── 4. The Product (Shop Details) ────────────────────────────── */
  product: {
    /** The trio of the three girls. English name + cool Arabic description. */
    collectionTitle: { en: "Le Trio dyal l'Banat", ar: "ثلاثية البنات" } satisfies Localized,
    subtitle: { en: "Eau de Parfum · 100 ml · Tenue longue durée", ar: "عطر مركز · 100 مل · ثبات يدوم" } satisfies Localized,
    /** The price chip shown on the product card. */
    price: { amount: 149, display: "149 DH" },
    /** The crossed-out original price on the discount badge. */
    compareAt: { amount: 210, display: "210 DH" },
    /** The badge that floats on the product image. */
    badge: { en: "-30% For You", ar: "وفري 30% اليوم" } satisfies Localized,
    rating: {
      score: "4.7",
      count: { en: "", ar: "" } satisfies Localized,
    },
    /** Trust perks with icons */
    perks: [
      {
        icon: "gift",
        label: { en: "Gift box + cute note", ar: "تغليف هدية كادو + نوطة مخصصة" } satisfies Localized,
      },
      {
        icon: "truck",
        label: { en: "24–48h delivery all over Morocco", ar: "توصيل فـ 24–48 ساعة فالمغرب كامل" } satisfies Localized,
      },
      {
        icon: "badge",
        label: { en: "100% Original · Sealed & Guaranteed", ar: "أصلي 100% ومضمون" } satisfies Localized,
      },
    ],
  },

  /** ── 5. Automated Changing Testimonials (Moroccan Gen-Z) ───────── */
  testimonials: [
    {
      id: "t1",
      author: "Kenza M.",
      city: "Casablanca (Maârif)",
      stars: 5,
      variant: "pink",
      quote: {
        en: "Rose Sugar — it's my strawberry-vanilla vibe. I lava it with a flat white in Maârif. The Banat trio made me fall in love.",
        ar: "روز شوجر — اللي هي الفيب اللي معrencyة، فلطائفي قهوة مغروفة، ومجموعة البنات جعلتي أحببني.",
      },
    },
    {
      id: "t2",
      author: "Salma B.",
      city: "Marrakech (Guéliz)",
      stars: 5,
      variant: "orange",
      quote: {
        en: "Golden Hour hits different at golden hour — the sunset in Marrakech, the evening under the roof. Magnetic, charming, and fresh — it's my signature.",
        ar: "جولدن أور يختلف فيجولدن أور، الغروب في مراكش، وبعد كدة تحت السقف، مثالي جداً. مغناطيسية، أنيقة، وابتسامة بلا ما تعب.",
      },
    },
    {
      id: "t3",
      author: "Yasmine L.",
      city: "Rabat (Agdal)",
      stars: 5,
      variant: "brown",
      quote: {
        en: "Warm Cocoa — she gave me a gift and a hug. Her style is emotional, cozy, and elegant. It's been with me through every season.",
        ar: "وارم كوكا، هادت لي كادو ومقب ضغط، ونمطها عاطفي، دافئ، وأنيق، وكان معها كل عام.",
      },
    },
    {
      id: "t4",
      author: "Aya & Rim",
      city: "Agadir (Taghazout)",
      stars: 5,
      variant: "pink",
      quote: {
        en: "We took the quiz together and the result was spot on. The perfume arrived in 2 days, and the packaging is gorgeous. I love it!",
        ar: "درنا الكويز برفقة، والنتيجة كواسية جداً. وصلو العطر في يومين والغلاف حلو جداً. كلّي حبنا.",
      },
    },
  ] as TestimonialItem[],

  /** ── 7. Variant Overrides ─────────────────────────────────────── */
  overrides: {} as Partial<
    Record<ArchetypeId, { image?: string; name?: Localized; price?: string }>
  >,
} as const;

/* ── Resolvers: components read variants through these, never raw ── */

import { ARCHETYPES } from "@/data/vibes";

export function variantImage(id: ArchetypeId): string {
  return CONFIG.overrides[id]?.image ?? ARCHETYPES[id].image;
}

export function variantName(id: ArchetypeId, lang: "en" | "ar"): string {
  return CONFIG.overrides[id]?.name?.[lang] ?? ARCHETYPES[id].scent.productName[lang];
}

export function variantPrice(id: ArchetypeId): string {
  return CONFIG.overrides[id]?.price ?? CONFIG.product.price.display;
}

export function variantColors(id: ArchetypeId) {
  return CONFIG.colors.variants[id] ?? CONFIG.colors.variants.pink;
}

/* ── Links & messages ─────────────────────────────────────────────── */

/**
 * wa.me only understands full international numbers. If the number in the
 * config was saved in local format (e.g. 0620283725), this lifts it to the
 * proper international form so the order button always opens the right chat.
 */
function normalizeWaNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("0") && digits.length <= 10) return "212" + digits.slice(1);
  return digits;
}

export function whatsappOrderUrl(message: string): string {
  return `https://wa.me/${normalizeWaNumber(CONFIG.contact.whatsapp)}?text=${encodeURIComponent(message)}`;
}

export function instagramUrl(): string {
  return `https://instagram.com/${CONFIG.contact.instagram}`;
}

/** Info the girl can attach to herself / her gift on the share page. */
export interface Persona {
  name?: string;
  instagram?: string;
  isGift: boolean;
  recipient?: string;
}

/**
 * The order message carrying her archetype and optional gift info.
 */
export function orderMessage(opts: {
  girlName: string;
  productName: string;
  emoji: string;
  persona?: Persona;
  lang: "en" | "ar";
}): string {
  const { girlName, productName, emoji, persona, lang } = opts;
  if (lang === "ar") {
    const me = persona?.name ? `Ana ${persona.name} w ` : "";
    const gift =
      persona?.isGift && persona.recipient
        ? ` — w hada cadeau l ${persona.recipient} 🎁`
        : "";
    return `Salam Wingwoman! ${emoji} ${me}dert l'quiz w tle3t liya "${girlName}" — bghit ncommandi ${productName}${gift}.`;
  }
  const me = persona?.name ? `Ana ${persona.name} w ` : "";
  const gift =
    persona?.isGift && persona.recipient
      ? ` — w hada cadeau l ${persona.recipient} 🎁`
      : "";
  return `Salam Wingwoman! ${emoji} ${me}dert l'quiz w tle3t liya "${girlName}" — bghit ncommandi ${productName}${gift}. (mn l'quiz dyal Wingwoman)`;
}

export function shareText(girlName: string, moodLabel: string, lang: "en" | "ar"): string {
  return lang === "ar"
    ? `Lyoum ana ${girlName} — energie ${moodLabel.toLowerCase()} 🩷 Wach nti? Jrebbi l'quiz dyal Wingwoman ✨`
    : `Lyoum ana ${girlName} — energie ${moodLabel.toLowerCase()} 🩷 Wach nti? Jrebbi l'quiz dyal Wingwoman ✨`;
}
