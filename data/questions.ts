import type { LocalizedText, Question, ScoreMap } from "@/types";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  AUTHENTIC HUMAN GEN-Z QUIZ QUESTIONS
 *  Written naturally like real Moroccan girls talking in group chat.
 *  No robotic repetition of "Moroccan" — just real vibes, witty choices.
 * ═══════════════════════════════════════════════════════════════════
 */

export const QUESTION_POOL: Question[] = [
  {
    id: "q1",
    axis: "top",
    prompt: {
      en: "Fa9ti m3a 8h dial sba7. What's the very first thing you do?",
      ar: "فقتي مع 8 ديال الصباح. شنو أول حاجة كتديريها؟",
    },
    options: [
      {
        id: "q1a",
        label: {
          en: "Stay in bed 15 min daydreaming & playing soft French indie",
          ar: "كنبقى مكسلة فالفراش 15 دقيقة كنتسنت لموسيقى هادية وكنحلم",
        },
        glyph: "☁️",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q1b",
        label: {
          en: "Up immediately, playlist blasting, dancing front of the mirror",
          ar: "كننوض بزربة، البلايليست شاعلة، وكنشطح قدام المراية",
        },
        glyph: "🔊",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q1c",
        label: {
          en: "Silence. Fresh coffee made slow, just enjoying my peace",
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
      en: "Galsa f café m3a les filles. What's your drink order?",
      ar: "جالسة فـ كافي مع البنات. شنو المشروب اللي غادي تطلبي؟",
    },
    options: [
      {
        id: "q2a",
        label: {
          en: "Iced strawberry matcha or Raibi with a cute straw",
          ar: "آيس ماتشا بالفريز ولا رايبي جميلة مثلج",
        },
        glyph: "🍓",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q2b",
        label: {
          en: "Passionfruit sparkling tea with lots of crushed ice",
          ar: "آيس تي باسيون فروت منعش فيه الثلج والنعناع",
        },
        glyph: "🍑",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q2c",
        label: {
          en: "Atay mcha7ar b na3na3 or rich iced caramel latte",
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
      en: "L'look dialek lyoum bla ma tfakri bzzaf. Which vibe won?",
      ar: "اللبسة ديالك اليوم بلا ما تفكري بزاف. أشمن فايب ربح؟",
    },
    options: [
      {
        id: "q3a",
        label: {
          en: "Cardigan pastel, ribbons in hair, cute juicy lipgloss",
          ar: "كارديغان ناعم، ريبونات فـ شعري، وكلوس فريز كيلمع",
        },
        glyph: "🎀",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q3b",
        label: {
          en: "Clean white linen, big gold earrings, effortlessly glowing",
          ar: "لينين أبيض، حلاقات ذهبيين، ونضاضر كلاص ومكياج طبيعي",
        },
        glyph: "✨",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q3c",
        label: {
          en: "Cozy knit, vintage thrifted leather bag & grandmother's rings",
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
      en: "Galou lik f dar: 'Nti m3e9da wlla fiki l'fchouch bzzaf'. Your reaction?",
      ar: "قالو ليك فالدار ولا صحاباتك: 'نتي فيك الفشوش ولا الإحساس بزاف'. شنو جوابك؟",
    },
    options: [
      {
        id: "q4a",
        label: {
          en: "I blush and laugh it off — I just love feeling everything deeply",
          ar: "كنحشم ونبتسم — قلبي رطب وما عندي ما ندير",
        },
        glyph: "🥺",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q4b",
        label: {
          en: "I laugh louder and tell them that's why they love me",
          ar: "كنضحك بـ صوت عالي ونقول ليهم: 'على نتوما قادين عليا؟'",
        },
        glyph: "😂",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q4c",
        label: {
          en: "Calm smile. I stay 100% authentic, unbothered",
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
      en: "Telephone f 2% w mazaal ma wselti l'dar. Last app you scroll?",
      ar: "التلفون فيه 2% ومازال ما وصلتي للدار. شنو آخر حاجة كتشوفيها؟",
    },
    options: [
      {
        id: "q5a",
        label: {
          en: "Pinterest aesthetic moodboards & room decor ideas",
          ar: "بينترست وبوردات ديال قفاطن موديرن وديكورات حالمة",
        },
        glyph: "🎨",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q5b",
        label: {
          en: "TikTok travel vlogs & girls living their main character life",
          ar: "فلوكات تيك توك وبنات مسافرين وعايشين الحياة",
        },
        glyph: "📹",
        weights: { orange: 3 },
        mood: "restless",
      },
      {
        id: "q5c",
        label: {
          en: "Voice notes from my bestie with all the juicy updates",
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
      en: "L'weekend wsal! Chnou houwa l'plan li kay-ch3el fik l'énergie?",
      ar: "الويكاند وصل! شنو هو البلان اللي كيشعل فيك الطاقة؟",
    },
    options: [
      {
        id: "q6a",
        label: {
          en: "Cute bakery date for pastries, coffee & sweet photos",
          ar: "باتيسري شيك ولطيفة نشربو قهيوة وناخدو تصاور فنين",
        },
        glyph: "🧁",
        weights: { pink: 2, orange: 1 },
        mood: "dreamy",
      },
      {
        id: "q6b",
        label: {
          en: "Rooftop sunset or beach trip with loud music and laughs",
          ar: "سطح واعر مع وقت الغروب ولا تبحيرة واعرة والضحك والنشاط",
        },
        glyph: "🌅",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q6c",
        label: {
          en: "Staying in: scented candle, comfort blanket & comfort food",
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
      en: "9:30 PM. L'lil dialek bou7dek. How does your evening look?",
      ar: "الساعة 9:30 ديال الليل. الوقت ديالك بوحدك. كيفاش داير؟",
    },
    options: [
      {
        id: "q7a",
        label: {
          en: "Hot shower, strawberry lotion, plush pjs & phone on DND",
          ar: "دوش سخون، ريحة الفريز والفانيلا، بيجاما رطبة وبلا صونيت",
        },
        glyph: "🛁",
        weights: { pink: 3 },
        mood: "dreamy",
      },
      {
        id: "q7b",
        label: {
          en: "Fresh perfume spray, late dessert out with favorite people",
          ar: "رشة عطر واعرة، خارجة ناكل حلا وندحك مع ناسي لعزاز",
        },
        glyph: "✨",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q7c",
        label: {
          en: "Hot herbal tea, warm ambient lighting & deep bedtime thoughts",
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
      en: "Last one. Which compliment actually enters your heart?",
      ar: "السؤال الأخير. أشمن مجاملة كتدخل نيشان لـ قلبك؟",
    },
    options: [
      {
        id: "q8a",
        label: {
          en: "“Nti zine w drayfa bzzaf, ro7ek bayda w katsam7i men 9albek”",
          ar: "“نتي زوينة ودريفة بزاف، روحك نقية وبيضاء من الداخل”",
        },
        glyph: "💌",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q8b",
        label: {
          en: "“3ndek wahd l'énergie mrew3a, finma dkhalti katnewri l'blasa”",
          ar: "“عندك واحد الطاقة كتحمق، فين ما دخلتي كتضوي البلاصة”",
        },
        glyph: "⚡",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q8c",
        label: {
          en: "“Glssek katraye7 l'bal, bent nass w 3a9lek kbir w mnin kathedri kanrtaho”",
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
