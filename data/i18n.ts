/**
 * The two site languages. UI strings live here; content strings (girls,
 * questions, moods) carry their own { en, ar } pairs next to the data.
 *
 * Voice rule: English is Moroccan Gen-Z English (Darija words dropped in
 * where a real girl would drop them), Arabic is Darija — not MSA, not
 * Levantine. If it wouldn't sound right in a Casablanca group chat, it does
 * not belong here.
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
  "home.eyebrow": "8 questions · 60 seconds · bslama stress",
  "home.titleLines.0": "Which girl",
  "home.titleLines.1": "are you",
  "home.titleLines.2": "today?",
  "home.titleAccent": "2",
  "home.body":
    "Machi which perfume you want — which girl you are. Right now, this morning, this exact day. We'll tell you who she is. Then we'll tell you what she smells like.",
  "home.cta": "Find my girl",
  "home.ctaNote": "No sign-up, no email. Just 8 taps — yallah, 60 seconds.",
  "home.secondaryCta": "Shop the scents",
  "home.marquee": "SOFT GIRL ERA · GOLDEN GIRL ERA · COCOA GIRL ERA · WACH NTI? · YALLAH 60 SECONDS",
  "home.todayResult": "Today you're {name} — see your result",

  "girls.eyebrow": "Three girls — you're one of them",
  "girls.title": "Pick your personality, machi your perfume",
  "girls.body":
    "Each girl is a whole world — a scent, a palette, a ritual, a mood. Klik on one to meet her scent.",
  "girls.herScent": "Her scent",

  "how.eyebrow": "How it works",
  "how.title": "Three steps. Safi.",
  "how.step1.title": "Answer eight things",
  "how.step1.body":
    "About your morning, your drink, your evening. Never about perfume — 3la lah, you don't need to know anything about scent.",
  "how.step2.title": "Meet the girl you are today",
  "how.step2.body":
    "One of three. Plus your energy split, your mood, your palette and your one thing to do today.",
  "how.step3.title": "Post her, then meet her scent",
  "how.step3.body":
    "A card built for your story — with your name on it. And underneath, the Wingwoman that was made for her.",

  "scents.eyebrow": "The trio",
  "scents.title": "And three scents",
  "scents.body":
    "Each girl has one. You'll meet yours at the end — after you know who she is. Machi 9bel.",
  "scents.shopThis": "Shop this one",

  "final.title": "She's waiting. Sixty seconds.",
  "final.body":
    "Some days you're the sweet one. Some days you're the spark. Take it again tomorrow — wach 3la balek, maybe you'll surprise yourself.",
  "final.cta": "Find my girl",

  "footer.line": "Made with love for girls who change their mood every day. And that's perfect.",

  // Quiz
  "quiz.of": "of",
  "quiz.question": "Question {n} of {total}",
  "quiz.backHome": "Back to home",
  "quiz.back": "Previous question",
  "quiz.footer": "There are no wrong answers here — bsah, be honest, machi impressive.",
  "quiz.streak": "{n} day streak",
  "quiz.cheer.0": "Yallah, you got this 💅",
  "quiz.cheer.1": "Bsah, be honest — that's the whole trick 👑",
  "quiz.cheer.2": "Halfway — the pretty questions are coming 🔥",
  "quiz.cheer.3": "Almost there, habiba — don't stop now ✨",

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
    "Your message already says which girl you are — so we know what you want. Sahl, non?",
  "result.retake": "Retake",
  "result.again": "Feeling different? Take it again",
  "result.shareCta": "Share my girl",
  "result.shopCta": "Or shop it directly",

  // Share
  "share.title": "Here she is. Go make the group chat jealous.",
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
  "share.idle": "Both formats are ready — pick your favourite, habiba.",
  "share.shared": "Posted! The girls are definitely going to ask you about it.",
  "share.saved": "Saved to your downloads.",
  "share.copied": "Link copied. Send it to the girls.",
  "share.error": "Couldn't build the image. Try a screenshot instead, habiba.",

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

  // Daily vibe check
  "daily.title": "Daily Vibe Check",
  "daily.subtitle":
    "How are you actually feeling right now? One tap and we lock your energy for today.",
  "daily.subtitleAgain":
    "Vibe locked. Swap it if your mood changed — no judgement here, habiba.",
  "daily.streakLabel": "{n} day streak",
  "daily.startStreak": "Start your streak today",
  "daily.doneToday": "Checked in",
  "daily.pendingToday": "Not yet today",
  "daily.keepGoing": "Come back tomorrow to keep the flame alive 👑",
  "daily.newDay": "New day, new vibe — the flame starts right here 🔥",
  "daily.share": "Share my vibe card",
  "daily.rendering": "Making your card...",
  "daily.shareNote":
    "Send it to the group chat — let the girls know your energy today.",
  "daily.cardTitle": "Today's vibe",

  // Shop
  "shop.metaTitle": "Shop",
  "shop.eyebrow": "One perfume · three girls",
  "shop.title": "The one perfume, three personalities",
  "shop.subtitle": "Pick the girl you're buying for — the page follows her colour. Yallah.",
  "shop.choose": "Choose her variant",
  "shop.includes": "Every order comes with",
  "shop.notes": "The notes",
  "shop.order": "Order on WhatsApp",
  "shop.dm": "Or DM us on Instagram",
  "shop.reviews": "What the girls say",
  "shop.trustOriginal": "100% original",
  "shop.trustFast": "1–3 day delivery",
  "shop.trustWrap": "Free gift wrap",
  "shop.discover": "Not sure which one is you? Wach jrebti l'quiz?",
  "shop.quizCta": "Find my girl",
};

const ar: Dict = {
  // Header / nav
  "nav.home": "الرئيسية",
  "nav.findGirl": "لقاي بنتك",
  "nav.shop": "المتجر",
  "lang.aria": "بدلي اللغة",
  "header.order": "١ — ٣",

  // Home
  "home.eyebrow": "٨ أسئلة · ٦٠ ثانية · بلا ستريس",
  "home.titleLines.0": "أشمن بنت",
  "home.titleLines.1": "نتِ",
  "home.titleLines.2": "اليوم؟",
  "home.titleAccent": "2",
  "home.body":
    "ماشي أشمن عطر بغيتي — أشمن بنت نتِ دابا، هاد الصباح، هاد النهار بالضبط. غادي نقولك شكون هي… ومن بعد شنو ريحتها.",
  "home.cta": "لقاي بنتك",
  "home.ctaNote": "بلا تسجيل، بلا إيميل. غير ٨ تكليكات — يالاه، ٦٠ ثانية.",
  "home.secondaryCta": "تسوقي الروايح",
  "home.marquee": "عصر البنت الهادية · عصر البنت الذهبية · عصر بنت الكاكاو · واش نتِ؟ · يالاه ٦٠ ثانية",
  "home.todayResult": "اليوم نتِ {name} — شوفي النتيجة",

  "girls.eyebrow": "تلاتة بنات — نتِ وحدة فيهم",
  "girls.title": "ختاري الشخصية ديالك، ماشي العطر ديالك",
  "girls.body":
    "كل بنت عندها عالم كامل — ريحة، ألوان، طقوس، ومزاج. تكليكي على وحدة باش تعرفي ريحتها.",
  "girls.herScent": "ريحتها",

  "how.eyebrow": "كيفاش كتخدم",
  "how.title": "تلاتة خطوات. صافي.",
  "how.step1.title": "جاوي على ٨ حوايج",
  "how.step1.body":
    "على الصباح، المشروب، والسهرة. عمرنا ما غادي نسولوك على العطر — ٣لا الله، ما خاصك تعرفي والو على الروايح.",
  "how.step2.title": "تلقاي البنت اللي نتِ اليوم",
  "how.step2.body":
    "وحدة من تلاتة. مع الطاقة، المزاج، الألوان، وحاجة وحدة ديريها اليوم.",
  "how.step3.title": "نشريها، ومن بعد شوفي ريحتها",
  "how.step3.body":
    "كارت مصمم للستوري ديالك — وسميتك عليه. وتحته عطر Wingwoman اللي خصها.",
  "scents.shopThis": "شري هادا",

  "scents.eyebrow": "التلاتية",
  "scents.title": "وتلاتة روائح",
  "scents.body": "كل بنت عندها ريحتها. غادي تعرفي ريحتك فالآخر — من بعد ما تعرفي شكون نتِ. ماشي قبل.",

  "final.title": "هي كتسناك. ستين ثانية بس.",
  "final.body":
    "كاين نهار نتِ الحلوة، وكاين نهار نتِ الشرارة. عاوديها غدا — واش على بالك، يمكن تفاجئي راسك.",
  "final.cta": "لقاي بنتك",

  "footer.line": "مصنوع بالحب للبنات اللي كيبدلو مزاجهم كل نهار. وعادي.",

  // Quiz
  "quiz.of": "من",
  "quiz.question": "سؤال {n} من {total}",
  "quiz.backHome": "رجعي للرئيسية",
  "quiz.back": "السؤال اللي قبل",
  "quiz.footer": "ما كاينش جواب غلط — بصح، كوني صادقة ماشي مثالية.",
  "quiz.streak": "ستريك {n} أيام",
  "quiz.cheer.0": "يالاه، نتِ قادرة 💅",
  "quiz.cheer.1": "بصاح، كوني صادقة — هادي هي الحيلة كاملة 👑",
  "quiz.cheer.2": "وسط الطريق — الأسئلة الزوينة جايين 🔥",
  "quiz.cheer.3": "قربتي، حبيبة — ما توقفيش دابا ✨",

  // Result
  "result.todayYoure": "اليوم نتِ",
  "result.oneThing": "حاجة وحدة ديريها اليوم",
  "result.energy": "طاقتك اليوم",
  "result.style": "ستايلها",
  "result.palette": "ألوانك اليوم",
  "result.herScent": "ريحتها",
  "result.matchedToYou": "مخصصة ليك",
  "result.matchedBody":
    "طلعتي {girl} بطاقة {mood} اليوم — وهاد هو العطر اللي مبني عليها.",
  "result.order": "طلبي فالواتساب",
  "result.orDm": "ولا صيفطي لينا ميساج فالإنستغرام",
  "result.orderNote": "الرسالة ديالك كتقول شكون نتِ — فحنا كنعرفو شنو بغيتي. ساهل، صح؟",
  "result.retake": "عاودي",
  "result.again": "حسيتي راسك مبدلة؟ عاودي الكويز",
  "result.shareCta": "شاركي بنتك",
  "result.shopCta": "ولا شريها ديريكت",

  // Share
  "share.title": "ها هي. دابا خلّي الگروب يغار.",
  "share.cardTitle": "الكارت ديالك",
  "share.body":
    "سجليها، نشريها، وصيفطيها للگروب. كل كارت كيسول البنت اللي من بعد نفس السؤال.",
  "share.back": "رجعي للنتيجة",
  "share.backFull": "رجعي للنتيجة الكاملة",
  "share.formatStory": "ستوري ٩:١٦",
  "share.formatSquare": "بوست ١:١",
  "share.make": "شاركي الكارت",
  "share.making": "كنوجدو الكارت...",
  "share.save": "سجلي الصورة",
  "share.copy": "كوبي الرابط",
  "share.idle": "الجوج الصيغات واجدين — ختاري اللي بغيتي، حبيبة.",
  "share.shared": "تنشرات! البنات غادي يسولوك عليها.",
  "share.saved": "تسجلت فالداونلود.",
  "share.copied": "الرابط تكوبا. صيفطيه للبنات.",
  "share.error": "ما قدرناش نوجدو التصويرة. ديري سكرين شوت، حبيبة.",

  // Personalisation
  "personal.title": "خليها بسميتك",
  "personal.subtitle": "سميتك كتطلع فالكارت ديريكت — اختياري، ولكن زوينة كتر.",
  "personal.name": "سميتك",
  "personal.namePlaceholder": "مثلاً سارة",
  "personal.ig": "إنستغرام",
  "personal.igPlaceholder": "الحساب ديالك",
  "personal.for": "هاد الكارت",
  "personal.forMe": "ليا",
  "personal.gift": "كادو",
  "personal.giftFor": "لمن؟",
  "personal.giftPlaceholder": "سميتها، مثلاً لينا",
  "personal.onCard": "فالكارت",

  // Card
  "card.todayIm": "اليوم أنا",
  "card.aGiftFor": "كادو لـ",

  // Daily vibe check
  "daily.title": "شيك الفايب اليومي",
  "daily.subtitle": "كي داير حالك دابا بصح؟ تكليكة وحدة، وقفلنا طاقتك لليوم.",
  "daily.subtitleAgain": "الفايب تقفل. بدليه إلا بدل مزاجك — هنا ما كاينش الحكم، حبيبة.",
  "daily.streakLabel": "ستريك {n} أيام",
  "daily.startStreak": "بدي الستريك ديالك اليوم",
  "daily.doneToday": "شيكيتي",
  "daily.pendingToday": "مازال اليوم",
  "daily.keepGoing": "رجي غدا باش تخلّي اللهب شاعل 👑",
  "daily.newDay": "نهار جديد، فايب جديد — اللهب كيبدا من هنا 🔥",
  "daily.share": "شاركي كارت الفايب",
  "daily.rendering": "كنوجدو الكارت...",
  "daily.shareNote": "صيفطيه للگروب — خلّي البنات يعرفو طاقتك اليوم.",
  "daily.cardTitle": "فايب اليوم",

  // Shop
  "shop.metaTitle": "المتجر",
  "shop.eyebrow": "عطر واحد · تلاتة بنات",
  "shop.title": "عطر واحد، تلاتة شخصيات",
  "shop.subtitle": "ختاري البنت اللي غادي تشري ليها — والصفحة كتلون بألوانها. يالاه.",
  "shop.choose": "ختاري النسخة ديالها",
  "shop.includes": "كل كوموند كتجي معاها",
  "shop.notes": "المكونات",
  "shop.order": "طلبي فالواتساب",
  "shop.dm": "ولا صيفطي لينا فالإنستغرام",
  "shop.reviews": "شنو قالو البنات",
  "shop.trustOriginal": "أصلي ١٠٠٪",
  "shop.trustFast": "توصيل ١–٣ أيام",
  "shop.trustWrap": "تغليف كادو فابور",
  "shop.discover": "مازال ما عرفتي شكون نتِ؟ واش جربتي الكويز؟",
  "shop.quizCta": "لقاي بنتك",
};

export const DICT: Record<Lang, Dict> = { en, ar };
