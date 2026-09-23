/**
 * The two site languages. UI strings live here; content strings (girls,
 * questions, moods) carry their own { en, ar } pairs next to the data.
 */
export type Lang = "en" | "ar";

export type Dict = Record<string, string>;

const en: Dict = {
  // Header / nav
  "nav.home": "Home",
  "nav.findGirl": "Find my girl",
  "nav.shop": "Shop",
  "lang.aria": "Switch language",
  "header.order": "Nº1 — Nº3",

  // Home
  "home.eyebrow": "Eight questions · sixty seconds",
  "home.titleLines.0": "Which girl",
  "home.titleLines.1": "are you",
  "home.titleLines.2": "today?",
  "home.titleAccent": "2",
  "home.body":
    "Not which perfume you want — which girl you are. Right now, this morning, on this particular day. We'll tell you who she is. Then we'll tell you what she smells like.",
  "home.cta": "Find my girl",
  "home.ctaNote": "No sign-up. No email. Just eight taps.",
  "home.secondaryCta": "Shop the scents",
  "home.marquee": "SOFT GIRL ERA · GOLDEN GIRL ERA · COCOA GIRL ERA · WHICH ONE ARE YOU TODAY?",

  "girls.eyebrow": "Three girls — you're one of them",
  "girls.title": "Pick your personality, not your perfume",
  "girls.body":
    "Each girl is a whole world — a scent, a palette, a ritual, a mood. Tap one to meet her scent.",
  "girls.herScent": "Her scent",

  "how.eyebrow": "How it works",
  "how.title": "Three steps. That's it.",
  "how.step1.title": "Answer eight things",
  "how.step1.body":
    "About your morning, your drink, your evening. Never about perfume — you don't need to know anything about scent.",
  "how.step2.title": "Meet the girl you are today",
  "how.step2.body":
    "One of three. Plus your energy split, your mood, your palette and your one thing to do today.",
  "how.step3.title": "Post her, then meet her scent",
  "how.step3.body":
    "A card built for your story — with your name on it. And underneath, the Wingwoman that was made for her.",

  "scents.eyebrow": "The trio",
  "scents.title": "And three scents",
  "scents.body": "Each girl has one. You'll meet yours at the end — after you know who she is.",

  "final.title": "She's waiting. Sixty seconds.",
  "final.body":
    "Some days you're the sweet one. Some days you're the spark. Take it again tomorrow and see.",
  "final.cta": "Find my girl",

  "footer.line": "Made with love for girls who change their day, every day.",

  // Quiz
  "quiz.of": "of",
  "quiz.question": "Question {n} of {total}",
  "quiz.backHome": "Back to home",
  "quiz.back": "Previous question",
  "quiz.footer": "There are no wrong answers. Be honest, not impressive.",

  // Result
  "result.todayYoure": "Today you're",
  "result.oneThing": "Your one thing today",
  "result.energy": "Your energy today",
  "result.style": "Her style",
  "result.palette": "Your palette today",
  "result.herScent": "Her scent",
  "result.matchedToYou": "Matched to you",
  "result.matchedBody":
    "You came out as {girl} with {mood} energy today — this is the one built for her.",
  "result.order": "Order on WhatsApp",
  "result.orDm": "Or DM us on Instagram",
  "result.orderNote":
    "Your message already tells us which girl you are — so we know what you want.",
  "result.retake": "Retake",
  "result.again": "Feeling different? Take it again",
  "result.shareCta": "Share my girl",
  "result.shopCta": "Or shop it directly",

  // Share
  "share.title": "Here she is. Go make people jealous.",
  "share.cardTitle": "Your card",
  "share.body":
    "Save it, post it, send it to the group chat. Every card quietly asks the next girl the same question.",
  "share.back": "Back to your result",
  "share.backFull": "Back to the full result",
  "share.formatStory": "Story 9:16",
  "share.formatSquare": "Post 1:1",
  "share.make": "Share my card",
  "share.making": "Making your card...",
  "share.save": "Save image",
  "share.copy": "Copy link",
  "share.idle": "Both formats are ready — pick the one you want.",
  "share.shared": "Posted. Thank you for showing her off.",
  "share.saved": "Saved to your downloads.",
  "share.copied": "Link copied.",
  "share.error": "Couldn't make the image. Try a screenshot instead.",

  // Personalisation
  "personal.title": "Make it yours",
  "personal.subtitle": "Your name goes straight onto the card — optional, but cuter.",
  "personal.name": "Your name",
  "personal.namePlaceholder": "e.g. Sara",
  "personal.ig": "Instagram",
  "personal.igPlaceholder": "your.handle",
  "personal.for": "This card is",
  "personal.forMe": "For me",
  "personal.gift": "A gift",
  "personal.giftFor": "For who?",
  "personal.giftPlaceholder": "her name, e.g. Lina",
  "personal.onCard": "On the card",

  // Card
  "card.todayIm": "Today I'm",
  "card.aGiftFor": "A gift for",

  // Shop
  "shop.metaTitle": "Shop",
  "shop.eyebrow": "One perfume · three girls",
  "shop.title": "The one perfume, three personalities",
  "shop.subtitle": "Pick the girl you're buying for — the page follows her colour.",
  "shop.choose": "Choose her variant",
  "shop.includes": "Every order comes with",
  "shop.notes": "The notes",
  "shop.order": "Order on WhatsApp",
  "shop.dm": "Or DM us on Instagram",
  "shop.reviews": "What the girls say",
  "shop.trustOriginal": "100% original",
  "shop.trustFast": "1–3 day delivery",
  "shop.trustWrap": "Free gift wrap",
  "shop.discover": "Not sure which one is you? Take the quiz.",
  "shop.quizCta": "Find my girl",
};

const ar: Dict = {
  // Header / nav
  "nav.home": "الرئيسية",
  "nav.findGirl": "اكتشفي بنتك",
  "nav.shop": "المتجر",
  "lang.aria": "تغيير اللغة",
  "header.order": "١ — ٣",

  // Home
  "home.eyebrow": "٨ أسئلة · ٦٠ ثانية",
  "home.titleLines.0": "مين البنت",
  "home.titleLines.1": "اللي إنتِها",
  "home.titleLines.2": "اليوم؟",
  "home.titleAccent": "2",
  "home.body":
    "مش أي عطر بدك ياه — مين البنت اللي أنتِها ها اللحظة، هذا الصبح، هذا اليوم بالذات. منخبرك مين هي… ومنقولك شو ريحتها.",
  "home.cta": "اكتشفي بنتك",
  "home.ctaNote": "بدون تسجيل. بدون إيميل. ٨ لمسات بس.",
  "home.secondaryCta": "تسوّقي الريحات",
  "home.marquee": "عصر البنت الهادية · عصر البنت الذهبية · عصر بنت الكاكاو · مين إنتِ اليوم؟",

  "girls.eyebrow": "ثلاث بنات — إنتِ وحدة منهن",
  "girls.title": "اختاري شخصيتك، مش عطرك",
  "girls.body": "كل بنت لها عالمها الكامل — ريحة، ألوان، طقوس، ومزاج. اضغطي على أي وحدة لتشوفي ريحتها.",
  "girls.herScent": "ريحتها",

  "how.eyebrow": "كيف منشتغل",
  "how.title": "٣ خطوات وبس.",
  "how.step1.title": "جاوي على ٨ أشياء",
  "how.step1.body": "عن صباحك، مشروبك، سهرك. عمّرنا منسأل عن العطر — ما لازم تعبي شي عن الريحة.",
  "how.step2.title": "تشوفي بنتك اليوم",
  "how.step2.body": "وحدة من ثلاث. مع طاقتك، مزاجك، ألوانك، وشي وحدة بتعطيه اليوم.",
  "how.step3.title": "انشريها وبعدين شوفي ريحتها",
  "how.step3.body": "كارت مبني لأجوالك — واسمك عليه. وتحته عطر Wingwoman المخصص لها.",

  "scents.eyebrow": "الثلاثية",
  "scents.title": "وثلاث ريحات",
  "scents.body": "كل بنت لها ريحتها. بتشوفي ريحتك بالآخر — بعد ما تعرفي مين إنتِ.",

  "final.title": "هي مستحاكة. ستين ثانية بس.",
  "final.body": "في أيام إنتِ الهادية، وأيام إنتِ الحماسة. أعيدي الكويز بكرة وشوفي.",
  "final.cta": "اكتشفي بنتك",

  "footer.line": "صُنع بحب للبنات اللي بيغيروا أيوم كل يوم.",

  // Quiz
  "quiz.of": "من",
  "quiz.question": "سؤال {n} من {total}",
  "quiz.backHome": "رجوع للرئيسية",
  "quiz.back": "السؤال السابق",
  "quiz.footer": "ما في إجابة غلط. كوني صادقة، مش مثالية.",

  // Result
  "result.todayYoure": "اليوم إنتِ",
  "result.oneThing": "شي واحد بتعطيه اليوم",
  "result.energy": "طاقتك اليوم",
  "result.style": "ستايلها",
  "result.palette": "ألوانك اليوم",
  "result.herScent": "ريحتها",
  "result.matchedToYou": "مخصصة لإلك",
  "result.matchedBody":
    "طلعتي {girl} بطاقة {mood} اليوم — وهي العطر المخصص لها.",
  "result.order": "اطلبي واتساب",
  "result.orDm": "أو راسلينا إنستغرام",
  "result.orderNote": "رسالتك أصلاً بتقولنا مين البنت اللي إنتِ — فمنعرف شو بدك.",
  "result.retake": "أعيدي",
  "result.again": "مزاجك مختلف؟ أعيدي الكويز",
  "result.shareCta": "شاركي بنتك",
  "result.shopCta": "أو اطلبيها مباشرة",

  // Share
  "share.title": "هي هي. خليهن يغاروا.",
  "share.cardTitle": "كارتك",
  "share.body": "احفظيها، انشريها، ابعتيها لقروب البنات. كل كارت بيسأل البنت اللي بعده نفس السؤال.",
  "share.back": "رجوع لنتيجتك",
  "share.backFull": "رجوع للنتيجة الكاملة",
  "share.formatStory": "ستوري ٩:١٦",
  "share.formatSquare": "بوست ١:١",
  "share.make": "شاركي الكارت",
  "share.making": "منجهز كارتك...",
  "share.save": "حفظ الصورة",
  "share.copy": "نسخ الرابط",
  "share.idle": "الصيغتين جاهزتين — اختاري اللي بدك ياها.",
  "share.shared": "نُشرت. شكراً لإظهارها بأحلى صورة.",
  "share.saved": "انحفظت بتنزيلاتك.",
  "share.copied": "الرابط انسخ.",
  "share.error": "ما قدرنا نبني الصورة. جرّبي سكرين شوت.",

  // Personalisation
  "personal.title": "خليها باسمك",
  "personal.subtitle": "اسمك كيطلع فـ الكارت مباشرة — اختياري، ولكن كيجي ألطف.",
  "personal.name": "اسمك",
  "personal.namePlaceholder": "مثلاً سارة",
  "personal.ig": "إنستغرام",
  "personal.igPlaceholder": "حسابك",
  "personal.for": "هالكارت",
  "personal.forMe": "لي أنا",
  "personal.gift": "هدية",
  "personal.giftFor": "لمين؟",
  "personal.giftPlaceholder": "اسمها، مثلاً لينا",
  "personal.onCard": "على الكارت",

  // Card
  "card.todayIm": "اليوم أنا",
  "card.aGiftFor": "هدية لـ",

  // Shop
  "shop.metaTitle": "المتجر",
  "shop.eyebrow": "عطر واحد · ثلاث بنات",
  "shop.title": "عطر واحد، ثلاث شخصيات",
  "shop.subtitle": "اختاري البنت اللي بتشتريلها — والصفحة بتلون بألوانها.",
  "shop.choose": "اختاري نسختها",
  "shop.includes": "كل طلبية بتيجي معها",
  "shop.notes": "المكوّنات",
  "shop.order": "اطلبي واتساب",
  "shop.dm": "أو راسلينا إنستغرام",
  "shop.reviews": "شو حكى البنات",
  "shop.trustOriginal": "أصلي ١٠٠٪",
  "shop.trustFast": "توصيل ١–٣ أيام",
  "shop.trustWrap": "تغليف هدية مجاني",
  "shop.discover": "متأكدة مين إنتِ؟ جربي الكويز.",
  "shop.quizCta": "اكتشفي بنتك",
};

export const DICT: Record<Lang, Dict> = { en, ar };
