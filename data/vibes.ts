import type { ArchetypeId, LocalizedText, MoodId } from "@/types";

/**
 * The three girls. Every user-facing string is bilingual { en, ar } — the
 * site shows the `en` half, which is written in Latin-script Darija mixed
 * with generic English + simple French (how Moroccan girls actually type).
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
    name: { en: "Softie", ar: "الحنينة" },
    era: { en: "Soft Girl Era", ar: "عصر البنت الهادية" },
    emoji: "🩷",
    tagline: {
      en: "Sweet heart, soft life... walakin 3ndha attitude.",
      ar: "قلب أبيض، حياة هادية... ولكن بعزيمة.",
    },
    paragraph: {
      en: "Nti hiya l'girl li katfaker f les anniversaires, katla7eḍ mlli chi had kiskt, w katsam7 bzerba. Kat7ssi b kolchi 9bl ma tfkre fih — w hada houwa secret 3lach girls kimotou 3lik. Lyoum 3aycha f world pink, soft, w warm... Machi 7it weak, walakin 7it u chose to be soft.",
      ar: "نتِ هي البنت اللي كتفكر فعياد الميلاد، كتلاحظي ملي شي حد كيسكت، وكتسامحي بزربة. كتحسي بكلشي قبل ما تفكري فيه — وهادشي علاش كلشي كيتعلق بيك. اليوم عايشة فعالم بينك، هادي، ودافي... ماشي حيت ضعيفة، ولكن حيت اخترتي تكوني هكا.",
    },
    ritual: {
      en: "Spritz 3la lpulse points dyalek 9bl ma tkhrji. Stay soft lyoum ✨",
      ar: "رشي على نقط النبض قبل ما تخرجي. وخلي هذا النهار يكون هادي ورايق ✨",
    },
    defaultMood: "tender",
    scent: {
      productName: { en: "Velvet Sugar", ar: "فلفت شوجر" },
      notes: [
        { en: "Fraise Sauvage", ar: "فراولة برية" },
        { en: "Pivoine", ar: "بيوني" },
        { en: "Vanille Crème", ar: "فانيلا كريم" },
      ],
      description: {
        en: "Katbda b fraise juicy 3la lpulse points, w katsekken 3la pivoine w layer dyal vanille soft. Sweet, delicate, w ma-kat-tnsach.",
        ar: "كتبدا بفراولة منعشة على نبضك، ومن بعد كتهدن على بيوني وطبقة فانيلا ناعمة. حلوة، ناعمة، وما كيتنساش.",
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
      { label: { en: "Bows & lip gloss", ar: "فيونكات وجلوس" }, icon: "sparkles" },
      { label: { en: "Glossy lips", ar: "شفايف جلاسي" }, icon: "droplet" },
      { label: { en: "Baby pink aesthetic", ar: "طبقات بينك فاتح" }, icon: "shirt" },
    ],
    image: "/images/pink.jpg",
  },
  orange: {
    id: "orange",
    name: { en: "Main Character", ar: "الشرارة" },
    era: { en: "Golden Hour Era", ar: "عصر البنت الذهبية" },
    emoji: "🧡",
    tagline: {
      en: "Sunkissed energy, magnetic vibe, w zero tolerance for boredom.",
      ar: "طاقة دافية، شخصية جذابة، وحساسية من الملل.",
    },
    paragraph: {
      en: "Katdkhli any place w l'energy katbedel. Machi 7it you try-hard, walakin 7it bssa7 kat3ichi l'moment. Kat-haderi m3a nass ma kt3arfihomch, katdiri l'vibe f l-group chat, w nti lreason 3lach girls mazal kitsaraw berra f 1 dyal lil. Lyowm nti hiya SUNSHINE dyal room.",
      ar: "كتدخلي لأي بلاصة والطاقة كتتبدل بلا ما تحاولي. ماشي حيت كتمثلي، ولكن حيت بصح كتعيشي اللحظة. كتهضري مع كلشي، نتِ اللي كتديري الفايب فالمجموعة، ونتِ السبب علاش البنات مازال ناشطين مع ١ دالليل. اليوم نتِ هي الشمش دالمكان.",
    },
    ritual: {
      en: "Put on your favorite outfit, spritz and turn heads 💅",
      ar: "لبسي اللبسة اللي ترتاحي فيها، رشي العطر وخلي الكل يشوف ثقتك 💅",
    },
    defaultMood: "magnetic",
    scent: {
      productName: { en: "Golden Sunset", ar: "جولدن صانسيت" },
      notes: [
        { en: "Pêche Mûre", ar: "خوخ ناضج" },
        { en: "Néroli Solaire", ar: "نيرولي مشمس" },
        { en: "Ambre D'or", ar: "عنبر ذهبي" },
      ],
      description: {
        en: "Pêche juicy w néroli f l'start, w kayskno 3la ambre dafi f l'skin dyalek. Unforgettable sunset vibe.",
        ar: "خوخ ونيرولي فالبداية، ومن بعد كيستقرو على عنبر دافي على جلدك. ريحة غروب الشمش الدافية على كتافك.",
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
      { label: { en: "Chic gold hoops", ar: "حلقان ذهبيين" }, icon: "gem" },
      { label: { en: "Iced Matcha & Coffee", ar: "آيس كافيه" }, icon: "coffee" },
      { label: { en: "Linen outfits", ar: "كتان أنيق" }, icon: "sun" },
    ],
    image: "/images/orange.jpg",
  },
  brown: {
    id: "brown",
    name: { en: "That Girl", ar: "الدافية" },
    era: { en: "Cozy Luxe Era", ar: "عصر بنت الكاكاو" },
    emoji: "🤎",
    tagline: {
      en: "Quiet confidence... lpresence dyalha kaydir l'far9.",
      ar: "ثقة فهدوء... حضورها كيدير الفرق بلا مجهود.",
    },
    paragraph: {
      en: "Nti makatmthlich 7ta f haja. Katsm3i kter ma katdwi, katla7edi details l'sghar, w mli kathderi, word dyalek 3endha weight. L'girls kijiw 3ndek mlli kikonou overwhelmed 7it kat3tihom peace. Lyowm nti grounded, warm, w 100% comfortable in your own skin.",
      ar: "نتِ ما كتمثليش حتى فحاجة. كتسمعي كتر ما كتهضري، كتلاحظي التفاصيل الصغيرة، وملي كتهضري كلامك عندو قيمة. البنات كيجيو عندك ملي كيكونو محتاجين الهدوء والراحة. اليوم مرتاحة، دافية، ومرتاحة فراسك ١٠٠٪.",
    },
    ritual: {
      en: "Take a slow morning, enjoy your hot drink w keep l-vibe grounded.",
      ar: "ديري صباح هادي، استمتعي بقهوتك ولا أتاي دياك وخلي المود رايق.",
    },
    defaultMood: "grounded",
    scent: {
      productName: { en: "Warm Santal & Cocoa", ar: "صندل وكوكا" },
      notes: [
        { en: "Gousse de Vanille", ar: "فانيلا غنية" },
        { en: "Caramel Salé", ar: "كراميل مالح" },
        { en: "Fève Tonka", ar: "تونكا" },
        { en: "Bois de Santal", ar: "خشب الصندل" },
      ],
      description: {
        en: "Vanille w caramel salted kaydoubo 3la tonka w santal. Fragrance rich, warm, intimate, w makay-tnsash.",
        ar: "فانيلا وكراميل مالح كيدوبو على تونكا وخشب الصندل. عطر غني، دافي، قريب من الجلد، وما كيتنساش.",
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
      { label: { en: "Cozy knit wear", ar: "كنزة دافية" }, icon: "shirt" },
      { label: { en: "Minimalist gold jewelry", ar: "مجواهر ذهبية ناعمة" }, icon: "gem" },
      { label: { en: "Slow cozy mornings", ar: "صباح هادي" }, icon: "moon" },
    ],
    image: "/images/brown.jpg",
  },
};

export const ARCHETYPE_ORDER: ArchetypeId[] = ["pink", "orange", "brown"];

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES[id];
}
