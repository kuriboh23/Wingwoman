import type { LocalizedText, Question, ScoreMap } from "@/types";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  L'QUIZ — written exactly how Moroccan girls type: Darija in Latin
 *  script, generic English dropped in where they'd use it anyway, and
 *  a few simple French words (les filles, le look, l'weekend...).
 *  If it wouldn't sound right in a Casa group chat, it doesn't ship.
 * ═══════════════════════════════════════════════════════════════════
 */

export const QUESTION_POOL: Question[] = [
  {
    id: "q1",
    axis: "top",
    prompt: {
      en: "F9iti m3a 8h dyal sbah. Ashmen 7aja katdiri 9bel kolchi?",
      ar: "فقتي مع 8 ديال الصباح. شنو أول حاجة كتديريها؟",
    },
    options: [
      {
        id: "q1a",
        label: {
          en: "Kanb9a f l'frach 15 min, kan7lem w kansenn3 l music hania",
          ar: "كنبقى مكسلة فالفراش 15 دقيقة كنتسنت لموسيقى هادية وكنحلم",
        },
        glyph: "☁️",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q1b",
        label: {
          en: "Kannode b zarba, playlist 3ayla, w kanchate7 9ddam l'mraya",
          ar: "كننوض بزربة، البلايليست شاعلة، وكنشطح قدام المراية",
        },
        glyph: "🔊",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q1c",
        label: {
          en: "Silence. Qahwa sokhna, w peace kamla — 7ta 7ad ma kayhder",
          ar: "الهدوء التام. قهوة سخونة مقادة على حقها وراحة البال",
        },
        glyph: "☕",
        weights: { brown: 3 },
        mood: "quiet",
      },
    ],
  },
  {
    id: "q2",
    axis: "base",
    prompt: {
      en: "Galssa f café m3a les filles. Ashmen commande ghadi tdiri?",
      ar: "جالسة فـ كافي مع البنات. شنو المشروب اللي غادي تطلبي؟",
    },
    options: [
      {
        id: "q2a",
        label: {
          en: "Iced strawberry matcha, wla Raibi m3a straw 9ass7a",
          ar: "آيس ماتشا بالفريز ولا رايبي جميلة مثلج",
        },
        glyph: "🍓",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q2b",
        label: {
          en: "Passionfruit sparkling tea b l'thlj mkassar — fresh fakhira",
          ar: "آيس تي باسيون فروت منعش فيه الثلج والنعناع",
        },
        glyph: "🍑",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q2c",
        label: {
          en: "Atay mcharar b nana3, wla iced caramel latte ghani",
          ar: "براد أتاي مشحر بالنعناع ولا آيس كراميل لاتيه كيحمق",
        },
        glyph: "🫖",
        weights: { brown: 3 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q3",
    axis: "top",
    prompt: {
      en: "L'look dyalek lyoum — bla ma tfakri bzzaf. Ashmen vibe rbe7?",
      ar: "اللبسة ديالك اليوم بلا ما تفكري بزاف. أشمن فايب ربح؟",
    },
    options: [
      {
        id: "q3a",
        label: {
          en: "Cardigan pastel, ribbons f ch3er, w lipgloss kaylem3e",
          ar: "كارديغان ناعم، ريبونات فـ شعري، وكلوس فريز كيلمع",
        },
        glyph: "🎀",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q3b",
        label: {
          en: "White linen clean, boucles d'oreilles d'habib, glow tabi3i",
          ar: "لينين أبيض، حلاقات ذهبيين، ونضاضر كلاص ومكياج طبيعي",
        },
        glyph: "✨",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q3c",
        label: {
          en: "Knit cozy, sace leather vintage, w khawatim dyal jeddati",
          ar: "تريكو صوف أوفرسايز، صاك كوير فينتاج، وخواتم عاطيين همة",
        },
        glyph: "🧣",
        weights: { brown: 3 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q4",
    axis: "heart",
    prompt: {
      en: "9alo lik: 'nti f l'fchouch bzzaf'. Ashmen réaction dyalek?",
      ar: "قالو ليك فالدار ولا صحاباتك: 'نتي فيك الفشوش ولا الإحساس بزاف'. شنو جوابك؟",
    },
    options: [
      {
        id: "q4a",
        label: {
          en: "Kanchma w kand7ek — 9albi rtab w kan7ess b kolchi b s7"
          ,
          ar: "كنحشم ونبتسم — قلبي رطب وما عندي ما ندير",
        },
        glyph: "🥺",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q4b",
        label: {
          en: "Kand7ek b soout 3ali w n9olhom: '3la nass kamlin 3liya?'",
          ar: "كنضحك بـ صوت عالي ونقول ليهم: 'على نتوما قادين عليا؟'",
        },
        glyph: "😂",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q4c",
        label: {
          en: "Sorir hadi w wath9a. Ma kanbedelch f 7a9i9ti 7ta qatra",
          ar: "ابتسامة باردة وواثقة. ما كنبدل فحقيقتي تا قطرة",
        },
        glyph: "🤍",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
  {
    id: "q5",
    axis: "heart",
    prompt: {
      en: "L'telefone f 2% w mazalti machi f dar. Ashmen app kat-openi f lekher?",
      ar: "التلفون فيه 2% ومازال ما وصلتي للدار. شنو آخر حاجة كتشوفيها؟",
    },
    options: [
      {
        id: "q5a",
        label: {
          en: "Pinterest — moodboards aesthetic w idées dyal decor",
          ar: "بينترست وبوردات ديال قفاطن موديرن وديكورات حالمة",
        },
        glyph: "🎨",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q5b",
        label: {
          en: "TikTok — vlogs dyal safar w banat 3aychin main character life",
          ar: "فلوكات تيك توك وبنات مسافرين وعايشين الحياة",
        },
        glyph: "📹",
        weights: { orange: 3 },
        mood: "restless",
      },
      {
        id: "q5c",
        label: {
          en: "Voice notes mn khristi fihom kol l'blanat w l'tea ☕",
          ar: "أوديوات من صحبتي المفضلة كتعاود ليا لـ'بلانات كاملين",
        },
        glyph: "💬",
        weights: { brown: 2, orange: 1 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q6",
    axis: "heart",
    prompt: {
      en: "L'weekend wssel! Ashmen plan kaych3el fik l'energie?",
      ar: "الويكاند وصل! شنو هو البلان اللي كيشعل فيك الطاقة؟",
    },
    options: [
      {
        id: "q6a",
        label: {
          en: "Pâtisserie m3a les filles — qahwa, croissant, w tsawer cute",
          ar: "باتيسري شيك ولطيفة نشربو قهيوة وناخدو تصاور فنين",
        },
        glyph: "🧁",
        weights: { pink: 2, orange: 1 },
        mood: "dreamy",
      },
      {
        id: "q6b",
        label: {
          en: "Roof dyal dar 3nd l'ghroub, wla l'be7r m3a music 3alya",
          ar: "سطح واعر مع وقت الغروب ولا تبحيرة واعرة والضحك والنشاط",
        },
        glyph: "🌅",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q6c",
        label: {
          en: "F dar: chm3a m3atra, couverture dafiya, w comfort food",
          ar: "الدار دافية، شمعة معطرة، ماكلة لذيذة وتلفزة على راحتي",
        },
        glyph: "🕯️",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
  {
    id: "q7",
    axis: "base",
    prompt: {
      en: "9:30 PM, l'lil dyalek bou7dek. Kifash kayban l'soir dyalek?",
      ar: "الساعة 9:30 ديال الليل. الوقت ديالك بوحدك. كيفاش داير؟",
    },
    options: [
      {
        id: "q7a",
        label: {
          en: "Douch sokhne, lotion b strawberry, pyjama naim, phone DND",
          ar: "دوش سخون، ريحة الفريز والفانيلا، بيجاما رطبة وبلا صونيت",
        },
        glyph: "🛁",
        weights: { pink: 3 },
        mood: "dreamy",
      },
      {
        id: "q7b",
        label: {
          en: "Rcha dyal parfum, khrija l dessert m3a nass li kanbghi",
          ar: "رشة عطر واعرة، خارجة ناكل حلا وندحك مع ناسي لعزاز",
        },
        glyph: "✨",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q7c",
        label: {
          en: "Kas l'louiza sokhon, daw khafif, w afkar 9ddam l'noom",
          ar: "كاس اللويزة سخون، ضو خافت ومذكراتي كنعبر فيها على أفكاري",
        },
        glyph: "📖",
        weights: { brown: 3 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q8",
    axis: "heart",
    prompt: {
      en: "L'lekher — ashmen mojamma katd5ol nichan l 9albek?",
      ar: "السؤال الأخير. أشمن مجاملة كتدخل نيشان لـ قلبك؟",
    },
    options: [
      {
        id: "q8a",
        label: {
          en: "'Nti zina w draifa bzzaf, rou7ek bayda w katsem7i mn 9albek'",
          ar: "“نتي زوينة ودريفة بزاف، روحك نقية وبيضاء من الداخل”",
        },
        glyph: "💌",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q8b",
        label: {
          en: "'3ndek wa7d l'energie kayhmag — fin ma dkhalti katewwer l'blasa'",
          ar: "“عندك واحد الطاقة كتحمق، فين ما دخلتي كتضوي البلاصة”",
        },
        glyph: "⚡",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q8c",
        label: {
          en: "'Glassek katraye7 l'bal — bent nass w klamkek kayrtah lih l'kalb'",
          ar: "“جلستك كتريح البال، بنت ناس وعقلك رزين وكلشي كيرتاح فـ هضرتك”",
        },
        glyph: "🤍",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
];

/** Currently active questions */
export const QUESTIONS: Question[] = QUESTION_POOL;
export const ALL_QUESTIONS: Question[] = QUESTION_POOL;
