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
    tagline: {
      en: "Ashmen bent nti lyoum?",
      ar: "أشمن بنت فيك نتي اليوم؟",
    } satisfies Localized,
    description: {
      en: "Quiz dyal 60 secondes kayle9a l'vibe dyalek w kaywjjed lik l'parfum dyal Wingwoman li mwaf9 m3ak.",
      ar: "كويز ديال دقيقة كيكتاشف الفايب ديالك وكيحدد العطر ديال Wingwoman لي مواتي مع شخصيتك.",
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
    collectionTitle: { en: "Le Trio dyal l'Banat", ar: "ثلاثية البنات" } satisfies Localized,
    subtitle: { en: "Eau de Parfum · 100 ml · Tenue longue durée", ar: "عطر مركز · 100 مل · ثبات يدوم" } satisfies Localized,
    price: { amount: 149, display: "149 DH" },
    compareAt: { amount: 210, display: "210 DH" },
    badge: { en: "-30% Lyoum", ar: "وفري 30% اليوم" } satisfies Localized,
    rating: {
      score: "4.7",
      count: { en: "", ar: "" } satisfies Localized,
    },
    /** Trust perks with icons */
    perks: [
      {
        icon: "gift",
        label: { en: "Emballage cadeau + nota cute", ar: "تغليف هدية كادو + نوطة مخصصة" } satisfies Localized,
      },
      {
        icon: "truck",
        label: { en: "Livraison 24-48h f l'Maghrib kamel", ar: "توصيل سريع فـ 24-48 ساعة فالمغرب كامل" } satisfies Localized,
      },
      {
        icon: "badge",
        label: { en: "Original 100%, scellé w garanti", ar: "أصلي 100% ومضمون" } satisfies Localized,
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
        en: "Rose Sugar hiya dik l'vibe dyal fraise-vanille 7louwa. Lbst-h f café f Maârif w 3 dyal l'banat sewni 3lach men smo4a!",
        ar: "روز شوجر خطييير! ريحة الفريز والفانيلا الناعمة، مشيت بيه لكافي فالمعاريف وكلشي سواني عليه.",
      },
    },
    {
      id: "t2",
      author: "Salma B.",
      city: "Marrakech (Guéliz)",
      stars: 5,
      variant: "orange",
      quote: {
        en: "Golden Hour ma fiha l'm9arona — l'ghroub f Marrakech w les soirées f roof. Magnétique, chamsia w fresh — signature dyali l'jbida.",
        ar: "جولدن أور كيحمق، خصوصاً مع الغروب فمراكش. ريحة الخوخ والعنبر كتعطي طاقة إيجابية وفخامة.",
      },
    },
    {
      id: "t3",
      author: "Yasmine L.",
      city: "Rabat (Agdal)",
      stars: 5,
      variant: "brown",
      quote: {
        en: "Warm Cocoa khditha cadeau l khti w sdeqt wakhda wa7da liya. L'tenue dyalha wa3ra — 8 swa3e w mazal kayn l'dfa w l'élégance.",
        ar: "وارم كوكا خديتها كادو لأختي وصدقت واخدة وحدة ليا. الثبات ديالها واعر وكتحسي بالدفء والأناقة.",
      },
    },
    {
      id: "t4",
      author: "Aya & Rim",
      city: "Agadir (Taghazout)",
      stars: 5,
      variant: "pink",
      quote: {
        en: "Drna l'quiz bjooj 9bel ma nekhrjo. L'réultat ja lase9 m3a l'personnalité dyalna bzzaf! W livraison jat f 2 iyam fabor — nqelna f WhatsApp 🩷",
        ar: "درنا الكويز مجموعين والنتيجة جات لاصقة مع الشخصية ديالنا. التوصيل كان سريع فـ يومين والباكاجينغ كيحمق!",
      },
    },
  ] as TestimonialItem[],

  /** ── 6. Marquee Ticker Strings ─────────────────────────────────── */
  marquee: [
    "WINGWOMAN",
    "MOROCCAN GEN-Z VIBE",
    "ASHMEN BENT NTI LYOUM?",
    "EAU DE PARFUM 100ML",
    "EMBALLAGE CADEAU FABOR",
    "LIVRAISON F L'MAGHRIB KAMEL",
    "RI7TEK F 60 SECONDES",
  ],

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
