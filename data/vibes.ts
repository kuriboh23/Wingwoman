import type { ArchetypeId, LocalizedText, MoodId } from "@/types";

/**
 * The three girls. Every user-facing string is bilingual { en, ar }.
 * Everything commercial (price, overrides, badges) lives in data/config.ts —
 * change prices/images there, not here.
 */
export interface Archetype {
  id: ArchetypeId;
  /** The "girl" — the identity she is given. */
  name: LocalizedText;
  /** The era framing under the name. */
  era: LocalizedText;
  emoji: string;
  /** One-line hook for the share card. */
  tagline: LocalizedText;
  /** The emotional paragraph. Written to feel like the site *knows* her. */
  paragraph: LocalizedText;
  /** The little thing she should do today. */
  ritual: LocalizedText;
  /** Default mood if the mood scoring ties. */
  defaultMood: MoodId;
  /** Perfume facts. */
  scent: {
    productName: LocalizedText;
    notes: LocalizedText[];
    description: LocalizedText;
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
  chips: { label: LocalizedText; icon: string }[];
  image: string;
}

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  pink: {
    id: "pink",
    name: { en: "The Sweetheart", ar: "الحلوة" },
    era: { en: "Soft Girl Era", ar: "عصر البنت الهادية" },
    emoji: "🩷",
    tagline: {
      en: "Sweet on purpose. Never by accident.",
      ar: "حلوة عن قصد. مش بالصدفة.",
    },
    paragraph: {
      en: "You feel everything first and think about it later, which is exactly why people fall for you. You're the one who remembers birthdays, notices when someone's gone quiet, and forgives too fast. Today you're running on rose-coloured everything — and it isn't softness, it's a decision.",
      ar: "إحساسك بكل شي قبل ما تفكري فيه — ولهيك الناس بيحبوك. إنتِ اللي بتتذكري أعياد الميلاد، بتلاحظي لما أحد يصير هادي، وبتسامحي بسرعة. اليوم عايشة بكل شي وردي — ومش ضعف، هاي قرارات.",
    },
    ritual: {
      en: "Spray once on your wrist before you leave. Let today be soft on purpose.",
      ar: "رشّي مرة على معصمك قبل ما تطلعي. خلّي يومك هادي عن قصد.",
    },
    defaultMood: "tender",
    scent: {
      productName: { en: "Rose Sugar", ar: "روز شوجر" },
      notes: [
        { en: "Strawberry", ar: "فراولة" },
        { en: "Peony", ar: "بيوني" },
        { en: "Vanilla", ar: "فانيلا" },
      ],
      description: {
        en: "Opens like a strawberry pressed to your pulse point, dries down into peony and a soft bed of vanilla. Sweet, but with a spine.",
        ar: "بتفتح كأنها فراولة على نقطة النبض، وبتهدن على بيوني وسرير فانيلا ناعم. حلوة — بس بعناصة.",
      },
    },
    palette: {
      ink: "#5C0B33",
      accent: "#F52B83",
      soft: "#FFD7E7",
      wash: "#FFF1F7",
    },
    swatches: ["#F52B83", "#FF8FBD", "#FFD7E7", "#FFF1F7"],
    chips: [
      { label: { en: "Ribbon nails", ar: "أظافر ريبون" }, icon: "sparkles" },
      { label: { en: "Glossy lips", ar: "شفايف جلاسي" }, icon: "droplet" },
      { label: { en: "Baby pink layers", ar: "طبقات بينك فاتح" }, icon: "shirt" },
    ],
    image: "/images/pink.jpg",
  },
  orange: {
    id: "orange",
    name: { en: "The Spark", ar: "الشرارة" },
    era: { en: "Golden Girl Era", ar: "عصر البنت الذهبية" },
    emoji: "🧡",
    tagline: {
      en: "Sunny, magnetic, allergic to standing still.",
      ar: "شمسية، مغناطيسية، عندها حساسية من الوقوف بمكان.",
    },
    paragraph: {
      en: "You walk into a room and the energy changes — not because you tried, but because you're genuinely excited to be there. You talk to strangers, you order the thing nobody else is ordering, and you're the reason everyone's still out at 1am. Today you're lit from the inside.",
      ar: "بتدخلي الغرفة والطاقة بتتغير — مش لأنك حاولتي، لأنك فعلاً متحمسة تكوني موجودة. بتحكي مع الغرباء، بتبطي الشي اللي ما حد عم يبطه، وإنتِ السبب إن الكل لسا بالمقهى الساعة ١ بالليل. اليوم منورة من جوا.",
    },
    ritual: {
      en: "Put something on that makes you walk differently. Then go be seen.",
      ar: "البسي شي بيخليك تمشي بشكل مختلف. وبعدين اطلعي واخلّي الكل يشوفك.",
    },
    defaultMood: "magnetic",
    scent: {
      productName: { en: "Golden Hour", ar: "جولدن أور" },
      notes: [
        { en: "Peach", ar: "خوخ" },
        { en: "Neroli", ar: "نيرولي" },
        { en: "Amber", ar: "عنبر" },
      ],
      description: {
        en: "Juicy peach and neroli off the top, settling into warm amber skin. The smell of late afternoon sun on your shoulders.",
        ar: "خوخ نيري ونيرولي بالبداية، وبتستقر على عنبر دافي كأنه على جلدك. ريحة شمس العصر على أكتافك.",
      },
    },
    palette: {
      ink: "#5A2A00",
      accent: "#F4732B",
      soft: "#FFE0C7",
      wash: "#FFF5EC",
    },
    swatches: ["#F4732B", "#FFA05C", "#FFE0C7", "#FFF5EC"],
    chips: [
      { label: { en: "Gold hoops", ar: "حلق دهبي" }, icon: "gem" },
      { label: { en: "Iced coffee", ar: "قهوة مثلجة" }, icon: "coffee" },
      { label: { en: "Linen everything", ar: "كتان بكل شي" }, icon: "sun" },
    ],
    image: "/images/orange.jpg",
  },
  brown: {
    id: "brown",
    name: { en: "The Warm One", ar: "الدافية" },
    era: { en: "Cocoa Girl Era", ar: "عصر بنت الكاكاو" },
    emoji: "🤎",
    tagline: {
      en: "Quietly the most powerful person in the room.",
      ar: "بهدوء، أقوى شخص بالغرفة.",
    },
    paragraph: {
      en: "You don't perform. You listen more than you speak, you notice the small things, and when you finally say something it lands because you meant it. People come to you when they're falling apart. Today you're warm, unhurried, and completely at home in yourself.",
      ar: "إنتِ ما بتعملي عروض. بتسمعي أكتر ما بتحكي، بتلاحظي التفاصيل الصغيرة، ولما تحكي شي بيوصل لأنك قصدي. الناس بيجوا عندك لما بتنهاروا. اليوم دافية، بدون استعجال، ومرتاحة بجوسك ١٠٠٪.",
    },
    ritual: {
      en: "Do one thing slowly today. Make it the first thing.",
      ar: "اعملي شي واحد ببطء اليوم. وخليه أول شي.",
    },
    defaultMood: "grounded",
    scent: {
      productName: { en: "Warm Cocoa", ar: "وارم كوكا" },
      notes: [
        { en: "Vanilla", ar: "فانيلا" },
        { en: "Caramel", ar: "كراميل" },
        { en: "Tonka", ar: "تونكا" },
        { en: "Sandalwood", ar: "خشب الصندل" },
      ],
      description: {
        en: "Vanilla and caramel melting into tonka bean and sandalwood. Rich, skin-close, and absolutely unforgettable in cold weather.",
        ar: "فانيلا وكراميل بيتذوبوا على تونكا وخشب الصندل. غني، قريب من الجلد، ولا يُنسى بالجو البارد.",
      },
    },
    palette: {
      ink: "#3A2218",
      accent: "#8A5A3B",
      soft: "#E7D8CB",
      wash: "#F8F2EC",
    },
    swatches: ["#8A5A3B", "#B98A66", "#E7D8CB", "#F8F2EC"],
    chips: [
      { label: { en: "Cosy knit", ar: "كنزة دافية" }, icon: "shirt" },
      { label: { en: "Gold jewellery", ar: "دهب" }, icon: "gem" },
      { label: { en: "Slow mornings", ar: "صباح هادي" }, icon: "moon" },
    ],
    image: "/images/brown.jpg",
  },
};

export const ARCHETYPE_ORDER: ArchetypeId[] = ["pink", "orange", "brown"];

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES[id];
}
