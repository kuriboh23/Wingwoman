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
    name: { en: "L'7louwa", ar: "الحلوة" },
    era: { en: "Soft Girl Era", ar: "عصر البنت الهادية" },
    emoji: "🩷",
    tagline: {
      en: "7louwa b niya. Machi b s-sedf.",
      ar: "حلوة عن قصد. ماشي بالصدفة.",
    },
    paragraph: {
      en: "Kan7ess b kolchi 9bel ma nfekker fih — w hadi hiya l'7a9a 3lach l'nes kayhbo-k. Nti l'wa7da li kateftekker f a3yad milad, li katlahed milli wa7ed kaysekt, w katsem7i b zarba. Lyoum 3aycha f 3alam kamel rose — w hadi machi d3if, hadi decision.",
      ar: "كتحسي بكلشي قبل ما تفكري فيه — وهادشي علاش الناس كيتعلقو بيك. نتِ اللي كتفكري فعياد الميلاد، وكتلاحظي ملي شي واحد كيسكت، وكتسامحي بزربة. اليوم كاملة بالروزي — وماشي ضعف، هادي قرار.",
    },
    ritual: {
      en: "Rchi merra f l'mo3assem 9bel ma tkhreji. Khelli lyoum ra9i9 b niya.",
      ar: "رشي مرة على معصمك قبل ما تخرجي. وخلّي هاد النهار هادي عن قصد.",
    },
    defaultMood: "tender",
    scent: {
      productName: { en: "Rose Sugar", ar: "روز شوجر" },
      notes: [
        { en: "Fraise", ar: "فراولة" },
        { en: "Pivoine", ar: "بيوني" },
        { en: "Vanille", ar: "فانيلا" },
      ],
      description: {
        en: "Kat-bda b fraise 3la l'nabd, w kat-sekken 3la pivoine w couche dyal vanille na3ma. 7louwa — walakin fiha l'3azima.",
        ar: "كتحل بحال فراولة على نقطة النبض، ومن بعد كتهدن على بيوني وفراش فانيلا ناعم. حلوة — بصح بعناصة.",
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
      { label: { en: "Ribbons w le gloss", ar: "أظافر ريبون" }, icon: "sparkles" },
      { label: { en: "Lips glossy", ar: "شفايف جلاسي" }, icon: "droplet" },
      { label: { en: "Layers rose baby", ar: "طبقات بينك فاتح" }, icon: "shirt" },
    ],
    image: "/images/pink.jpg",
  },
  orange: {
    id: "orange",
    name: { en: "L'Charara", ar: "الشرارة" },
    era: { en: "Golden Girl Era", ar: "عصر البنت الذهبية" },
    emoji: "🧡",
    tagline: {
      en: "Chamsia, magnétique, w 3ndha allergie mn l'w9ef f blassa.",
      ar: "شمسية، مغناطيسية، وعندها حساسية من الوقوف فبلاصة وحدة.",
    },
    paragraph: {
      en: "KATD5OLI l blassa w l'energie katbeddel — machi 7it 7awelti, 7it bs7 mte7ssa tkon tmma. Kethderi m3a nass ma t3refihomch, kattalbi l'7aja li 7ta wa7ed ma talbha, w nti l'sabab 3lach l'kol mazal barra f 1 dyal l'liI. Lyoum mdeuya mn eddakhel.",
      ar: "كتدخلي لبلاصة وطاقة كتتبدل — ماشي حيت حاولتي، حيت بصح متحمسة تكوني تما. كتهضري مع الناس اللي ما تعرفيهمش، كتطلبي الحاجة اللي ما حد طالبها، ونتِ السبب علاش الكل مازال برا فالساعة ١ فالليل. اليوم مضوية من الداخل.",
    },
    ritual: {
      en: "Lbssi chi 7aja katkhellik temchi b tari9a mkhalfa. Mn ba3d khreji w khelli l'kol ychoufek.",
      ar: "لبسي شي حاجة كتخليك تمشي بشكل مختلف. ومن بعد خرجي وخلّي الكل يشوفك.",
    },
    defaultMood: "magnetic",
    scent: {
      productName: { en: "Golden Hour", ar: "جولدن أور" },
      notes: [
        { en: "Pêche", ar: "خوخ" },
        { en: "Néroli", ar: "نيرولي" },
        { en: "Ambre", ar: "عنبر" },
      ],
      description: {
        en: "Pêche juicy w néroli f l'bdaya, w kayskno 3la ambre dafi 7alo f jeldk. Ri7at chems l'3chir 3la ktefk.",
        ar: "خوخ ونيرولي فالبداية، ومن بعد كيستقرو على عنبر دافي بحالو على جلدك. ريحة شمس العصر على كتافك.",
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
      { label: { en: "Créoles dorées", ar: "حلقان ذهبيين" }, icon: "gem" },
      { label: { en: "Café glacé", ar: "قهوة مثلجة" }, icon: "coffee" },
      { label: { en: "Linen partout", ar: "كتان فكل شي" }, icon: "sun" },
    ],
    image: "/images/orange.jpg",
  },
  brown: {
    id: "brown",
    name: { en: "L'Dafya", ar: "الدافية" },
    era: { en: "Cocoa Girl Era", ar: "عصر بنت الكاكاو" },
    emoji: "🤎",
    tagline: {
      en: "B hdo0, a9wa wa7da f l'blassa.",
      ar: "بهدوء، أقوى وحدة فالبلاصة.",
    },
    paragraph: {
      en: "Nti ma katmthelich. Katsme3i kter ma kethderi, katle7ed l tfasil sghar, w milli kethder chi 7aja katozel 7it 9sdti. L'nes kayjo 3ndek milli kaykonou tay7in. Lyoum dafya, bla zarba, w mertaha f rasek 100%.",
      ar: "نتِ ما كتمثليش. كتسمعي كتر ما كتهضري، كتلاحظي التفاصيل الصغيرة، وملي كتهضري شي حاجة كتوصل حيت قصدك. الناس كيجيو عندك ملي كيكونو طايحين. اليوم دافية، بلا زيارة، ومرتاحة فراسك ١٠٠٪.",
    },
    ritual: {
      en: "Diri wa7d l'haja b bchwa lyoum. Khelliha hiya l'7aja l'oula.",
      ar: "ديري حاجة وحدة ببطء اليوم. وخلّيها أول حاجة.",
    },
    defaultMood: "grounded",
    scent: {
      productName: { en: "Warm Cocoa", ar: "وارم كوكا" },
      notes: [
        { en: "Vanille", ar: "فانيلا" },
        { en: "Caramel", ar: "كراميل" },
        { en: "Fève tonka", ar: "تونكا" },
        { en: "Bois de santal", ar: "خشب الصندل" },
      ],
      description: {
        en: "Vanille w caramel kaydobo 3la tonka w bois de santal. Ghani, 9rib mn l'jeld, w ma kaytnssech f l'jaw l'bard.",
        ar: "فانيلا وكراميل كيدوبو على تونكا وخشب الصندل. غني، قريب من الجلد، وما كيتنساش فالجو البارد.",
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
      { label: { en: "Knit cosy", ar: "كنزة دافية" }, icon: "shirt" },
      { label: { en: "Bijoux dorées", ar: "دهب" }, icon: "gem" },
      { label: { en: "Matinées lentes", ar: "صباح هادي" }, icon: "moon" },
    ],
    image: "/images/brown.jpg",
  },
};

export const ARCHETYPE_ORDER: ArchetypeId[] = ["pink", "orange", "brown"];

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES[id];
}
