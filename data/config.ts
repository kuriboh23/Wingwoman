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
      en: "Which girl are you today?",
      ar: "أشمن بنت فيك نتي اليوم؟",
    } satisfies Localized,
    description: {
      en: "A 60-second quiz matching your Moroccan Gen-Z vibe to your signature Wingwoman scent.",
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
    whatsapp: "0620283725",
    /** Brand Instagram handle (used in links and cards) */
    instagram: "wingwoman.ma",
    /** Display handle with '@' prefix */
    instagramHandle: "@wingwoman.ma",
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
    collectionTitle: { en: "The Moroccan Trio", ar: "ثلاثية البنات" } satisfies Localized,
    subtitle: { en: "Eau de Parfum · 100 ml · Long Lasting", ar: "عطر مركز · 100 مل · ثبات يدوم" } satisfies Localized,
    price: { amount: 149, display: "149 DH" },
    compareAt: { amount: 210, display: "210 DH" },
    badge: { en: "Save 30% Today", ar: "وفري 30% اليوم" } satisfies Localized,
    rating: {
      score: "4.7",
      count: { en: "312 girl reviews across Morocco", ar: "312 تقييم من بنات المغرب" } satisfies Localized,
    },
    /** Trust perks with icons */
    perks: [
      {
        icon: "gift",
        label: { en: "Free gift wrap + cute custom note", ar: "تغليف هدية كادو + نوطة مخصصة" } satisfies Localized,
      },
      {
        icon: "truck",
        label: { en: "Fast delivery in 24–48h across Morocco", ar: "توصيل سريع فـ 24-48 ساعة فالمغرب كامل" } satisfies Localized,
      },
      {
        icon: "badge",
        label: { en: "100% original, sealed & authentic", ar: "أصلي 100% ومضمون" } satisfies Localized,
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
        en: "Rose Sugar is literally that sweet strawberry-vanilla vibe. Wore it to a café f Maarif and 3 girls asked me what perfume it was!",
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
        en: "Golden Hour is unmatched for Marrakech sunsets and rooftop nights. So magnetic, sunny and fresh — my new daily signature.",
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
        en: "Warm Cocoa ordered as a gift for my sister and I ended up ordering a second bottle for myself. The cardamom and vanilla stay for 8+ hours.",
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
        en: "Did the quiz together before going out. The personality match is crazy accurate and delivery arrived super fast in 2 days via WhatsApp!",
        ar: "درنا الكويز مجموعين والنتيجة جات لاصقة مع الشخصية ديالنا. التوصيل كان سريع فـ يومين والباكاجينغ كيحمق!",
      },
    },
  ] as TestimonialItem[],

  /** ── 6. Marquee Ticker Strings ─────────────────────────────────── */
  marquee: [
    "WINGWOMAN",
    "MOROCCAN GEN-Z VIBE",
    "WHICH GIRL ARE YOU TODAY?",
    "EAU DE PARFUM 100ML",
    "FREE GIFT PACKAGING",
    "FAST DELIVERY ALL OVER MOROCCO",
    "FIND YOUR SCENT IN 60 SECONDS",
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

export function whatsappOrderUrl(message: string): string {
  return `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
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
    const me = persona?.name ? `أنا ${persona.name} و` : "";
    const gift =
      persona?.isGift && persona.recipient
        ? ` — وهادي كادو لـ ${persona.recipient} 🎁`
        : "";
    return `Salam Wingwoman! ${emoji} ${me}درت الكويز وطلعت ليا "${girlName}" — بغيت نكوموندي ${productName}${gift}.`;
  }
  const me = persona?.name ? `I'm ${persona.name} and ` : "";
  const gift =
    persona?.isGift && persona.recipient
      ? ` — it's a gift for ${persona.recipient} 🎁`
      : "";
  return `Salam Wingwoman! ${emoji} ${me}I did the quiz and I'm "${girlName}" — I'd like to order ${productName}${gift}. (via Wingwoman Quiz)`;
}

export function shareText(girlName: string, moodLabel: string, lang: "en" | "ar"): string {
  return lang === "ar"
    ? `اليوم أنا ${girlName} — طاقة ${moodLabel} 🩷 نتي أشمن بنت فيك؟ جربي كويز Wingwoman ✨`
    : `I'm ${girlName} today — ${moodLabel.toLowerCase()} energy 🩷 Which girl are you? Discover on Wingwoman ✨`;
}
