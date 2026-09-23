import type { ArchetypeId, MoodId } from "@/types";

/**
 * ⚠️ PLACEHOLDER PRODUCT DATA
 * Variant names, scent notes and prices below are stand-ins. Swap them for the
 * real copy — everything else in the app reads from this file, so nothing else
 * needs to change. See data/site.ts for the WhatsApp number / IG handle.
 */

export interface Archetype {
  id: ArchetypeId;
  /** The "girl" — the identity she is given. */
  name: string;
  /** The era framing under the name. */
  era: string;
  /** Emoji stand-in for artwork. */
  emoji: string;
  /** One-line hook for the share card. */
  tagline: string;
  /** The emotional paragraph. Written to feel like the site *knows* her. */
  paragraph: string;
  /** The little thing she should do today. */
  ritual: string;
  /** Default mood if the mood scoring ties. */
  defaultMood: MoodId;
  /** Perfume facts. */
  scent: {
    productName: string;
    notes: string[];
    description: string;
  };
  /** Visual identity. */
  palette: {
    ink: string;
    accent: string;
    soft: string;
    wash: string;
  };
  /** Swatches shown in the style bento. */
  swatches: string[];
  /** Style chips — icon keys resolve in components/result/StyleBento.tsx. */
  chips: { label: string; icon: string }[];
  image: string;
}

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  pink: {
    id: "pink",
    name: "The Sweetheart",
    era: "Soft Girl Era",
    emoji: "🩷",
    tagline: "Sweet on purpose. Never by accident.",
    paragraph:
      "You feel everything first and think about it later, which is exactly why people fall for you. You're the one who remembers birthdays, notices when someone's gone quiet, and forgives too fast. Today you're running on rose-coloured everything — and it isn't softness, it's a decision.",
    ritual: "Spray once on your wrist before you leave. Let today be soft on purpose.",
    defaultMood: "tender",
    scent: {
      productName: "Rose Sugar",
      notes: ["Strawberry", "Peony", "Vanilla"],
      description:
        "Opens like a strawberry pressed to your pulse point, dries down into peony and a soft bed of vanilla. Sweet, but with a spine.",
    },
    palette: {
      ink: "#5C0B33",
      accent: "#F52B83",
      soft: "#FFD7E7",
      wash: "#FFF1F7",
    },
    swatches: ["#F52B83", "#FF8FBD", "#FFD7E7", "#FFF1F7"],
    chips: [
      { label: "Ribbon nails", icon: "sparkles" },
      { label: "Glossy lips", icon: "droplet" },
      { label: "Baby pink layers", icon: "shirt" },
    ],
    image: "/images/pink.jpg",
  },
  orange: {
    id: "orange",
    name: "The Spark",
    era: "Golden Girl Era",
    emoji: "🧡",
    tagline: "Sunny, magnetic, allergic to standing still.",
    paragraph:
      "You walk into a room and the energy changes — not because you tried, but because you're genuinely excited to be there. You talk to strangers, you order the thing nobody else is ordering, and you're the reason everyone's still out at 1am. Today you're lit from the inside.",
    ritual: "Put something on that makes you walk differently. Then go be seen.",
    defaultMood: "magnetic",
    scent: {
      productName: "Golden Hour",
      notes: ["Peach", "Neroli", "Amber"],
      description:
        "Juicy peach and neroli off the top, settling into warm amber skin. The smell of late afternoon sun on your shoulders.",
    },
    palette: {
      ink: "#5A2A00",
      accent: "#F4732B",
      soft: "#FFE0C7",
      wash: "#FFF5EC",
    },
    swatches: ["#F4732B", "#FFA05C", "#FFE0C7", "#FFF5EC"],
    chips: [
      { label: "Gold hoops", icon: "gem" },
      { label: "Iced coffee", icon: "coffee" },
      { label: "Linen everything", icon: "sun" },
    ],
    image: "/images/orange.jpg",
  },
  brown: {
    id: "brown",
    name: "The Warm One",
    era: "Cocoa Girl Era",
    emoji: "🤎",
    tagline: "Quietly the most powerful person in the room.",
    paragraph:
      "You don't perform. You listen more than you speak, you notice the small things, and when you finally say something it lands because you meant it. People come to you when they're falling apart. Today you're warm, unhurried, and completely at home in yourself.",
    ritual: "Do one thing slowly today. Make it the first thing.",
    defaultMood: "grounded",
    scent: {
      productName: "Warm Cocoa",
      notes: ["Vanilla", "Caramel", "Tonka", "Sandalwood"],
      description:
        "Vanilla and caramel melting into tonka bean and sandalwood. Rich, skin-close, and absolutely unforgettable in cold weather.",
    },
    palette: {
      ink: "#3A2218",
      accent: "#8A5A3B",
      soft: "#E7D8CB",
      wash: "#F8F2EC",
    },
    swatches: ["#8A5A3B", "#B98A66", "#E7D8CB", "#F8F2EC"],
    chips: [
      { label: "Cosy knit", icon: "shirt" },
      { label: "Gold jewellery", icon: "gem" },
      { label: "Slow mornings", icon: "moon" },
    ],
    image: "/images/brown.jpg",
  },
};

export const ARCHETYPE_ORDER: ArchetypeId[] = ["pink", "orange", "brown"];

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES[id];
}
