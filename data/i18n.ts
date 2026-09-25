/**
 * UI strings — written in plain English so the site is clean and consistent
 * across every screen. The `ar` half lives in the data files as legacy
 * metadata and is never served to the user.
 */
export type Lang = "en";

export type Dict = Record<string, string>;

const en: Dict = {
  // ── Nav — short and one-word. The bottom pill must fit every phone. ──
  "nav.home": "Home",
  "nav.findGirl": "Quiz",
  "nav.shop": "Shop",

  // Home
  "home.eyebrow": "8 las2ila · 60 secondes · bla stress",
  "home.titleLines.0": "Ashmen bent",
  "home.titleLines.1": "nti",
  "home.titleLines.2": "lyoum?", 
  "home.body":
    "Machi ghir ri7a w safi — ashmen vibe nti fiha lyoum? 🌸 Passi l-quiz & discover your personality, w 3arfi l'perfume li kimatchi m3a lvibe dyalek. Yallah, let's go!",
  "home.cta": "Discover your vibe",
  "home.ctaNote": "Bla inscription, bla email. Ghir 8 taps — 60 secondes w safi.",
  "home.secondaryCta": "Discover lfragrances dyalna 🌸",
  "home.marquee": "SOFT GIRL ERA · GOLDEN GIRL ERA · COCOA GIRL ERA · WACH NTI? · YALLAH 60 SECONDES",
  "home.todayResult": "Today you're {name} — the result is yours",

  "girls.eyebrow": "3 dyal vibes — chkoun nti fihom? 💖.",
  "girls.title": "Khtari l'personality dyalek, machi l'perfume.",
  "girls.body":
    "Kol bent 3ndha world dyalha — mood, vibe, colors, w lroutine dyalha. Clicki 3la wa7da w discover your match!",
  "girls.herScent": "Wingwoman",

  "how.eyebrow": "How it works",
  "how.title": "3 khotwat. Safi.",
  "how.step1.title": "Answer 8 questions",
  "how.step1.body":
    "Lmorning routine dyalek, ldrink li katshorbi, w lvibe dyal night... Makhassek t3arfi walo 3la lperfume — 7na kansowlo 3lik NTI.",
  "how.step2.title": "L9ay lbent li ntiya lyoum",
  "how.step2.body":
    "Wa7da men 3. M3aha l'energy dyalek, mood, colors, w l'activity dyal lyoum.",
  "how.step3.title": "Shari lcard dyalek w discover l'perfume!",
  "how.step3.body":
    "Custom Card msawb 3la 9oblek — b smitek 3liha. W ta7t mnou, l'perfume li kimatchi lvibe dyalek.",

  "scents.eyebrow": "The trio",
  "scents.title": "3 dyal lfragrances 🌸",
  "scents.body":
    "Kol bent w l'perfume li katji m3aha. Ghadi tdiscoveri dyalek f lekher — mn ba3d ma t3arfi lvibe dyalek. Machi 9bel!",
  "scents.shopThis": "Get yours now",

  "final.title": "She's waiting for you. Just 60 seconds!",
  "final.body":
    "Kayn nhar katkoni fih sweet, w kayn nhar katkoni spicy 💅",
  "final.cta": "Discover your vibe",

  "footer.line": "Made with love lbanat li mood dyalhom ki-tbeddel kol nhar. W totally normal!",

  // Quiz
  "quiz.question": "Question {n} of {total}",
  "quiz.backHome": "Back home",
  "quiz.back": "Previous question",
  "quiz.footer": "Ma kaynch jawab ghalat hna — just be real, don't overthink it.",
  "quiz.streak": "Streak {n} days",
  "quiz.cheer.0": "Yallah, nti 9adra 3liha! 💅",
  "quiz.cheer.1": "Be honest with yourself — hadi hiya magic moment 👑",
  "quiz.cheer.2": "Nss l'tri9 mchat — the questions are getting juicy! 💖",
  "quiz.cheer.3": "9rrebti tsali, habibti — matw9efich daba ✨",

  // Result
  "result.todayYoure": "Lyoum ntiya:",
  "result.oneThing": "Activity dyalek lyoum",
  "result.energy": "Your energy lyoum",
  "result.style": "Your style",
  "result.palette": "Your color palette",
  "result.herScent": " Your signature scent 🌸",
  "result.matchedToYou": "Your Perfect Match ✨",
  "result.matchedBody":
    "Tl3ti {girl} b {mood} energy lyoum — w hada houwa l'perfume li ki-tmatcha m3ak.",
  "result.order": "Commandi f WhatsApp",
  "result.orDm": "Wla send a DM on Instagram",
  "result.orderNote":
    "Lmessage déjà msawb fih lprofile dyalek — 7na ghadi nfahmok. Sahl, yaak? 😉",
  "result.retake": "Retake l'quiz 🔄",
  "result.again": "7ssiti b l'vibe tbeddlat? Retake the quiz!",
  "result.shareCta": "Share your card",
  "result.shopCta": "Wla shop it directly 🛍️",

  // Share
  "share.title": "Ha hiya ✨ Daba kheli lgroup chat yghar 🔥",
  "share.cardTitle": "Your custom card 💖",
  "share.body":
    "Saviha, postiha, wla siftiha l lgroup. Kol card ktkheli lgirls lkhrin isowlo: Wach ntiya hadi?",
  "share.back": "Rej3i results",
  "share.backFull": "Rej3i full results",
  "share.formatStory": "Story format (9:16)",
  "share.formatSquare": "Square post (1:1)",
  "share.make": "Share my card",
  "share.making": "Kanwjd lcard dyalek...",
  "share.save": "Download",
  "share.copy": "Copy link",
  "share.idle": "2 formats wajdin — khtari li 3jbatek, habibti ✨",
  "share.shared": "T-postat! Lgirls ghadi ysowlok 3liha, promis 💅",
  "share.saved": "T-sejjlat f lphone dyalek! Yallah, go shop it now 🛍️",
  "share.copied": "Link tcopya! Siftih lbnat",
  "share.error": "Ma9drnach nnsawbo l'image. Take a screenshot or try again, habibti!",

  // Personalisation
  "personal.title": "Make it yours ✨",
  "personal.subtitle": "Smitek ghadi tban f lcard — optional, walakin cuter 💖",
  "personal.name": "Smitek",
  "personal.namePlaceholder": "ex: Alae",
  "personal.ig": "Instagram",
  "personal.igPlaceholder": "compte dyalek",
  "personal.for": "lchkoun?",
  "personal.forMe": "Liya",
  "personal.gift": "Gift",
  "personal.giftFor": "L chkoun?",
  "personal.giftPlaceholder": "ex: Lina",
  "personal.onCard": "F l'card ghadi tban:",

  // Card
  "card.todayIm": "Lyoum ana",
  "card.aGiftFor": "Gift To",

  // Daily vibe check
  "daily.title": "Daily Vibe Check",
  "daily.subtitle":
    "Kifash dayra blik daba? Tap wa7da w n7esso l'energie dyalek lyoum.",
  "daily.subtitleAgain":
    "Vibe locked. Beddelha ila tbeddel l'mood dyalek — hna ma kaynch jugement, habibti.",
  "daily.streakLabel": "Streak dyal {n} iyam — khelliha 3aycha",
  "daily.startStreak": "Bda l'streak dyalek lyoum",
  "daily.doneToday": "Dertih lyoum ✓",
  "daily.pendingToday": "Mazal lyoum",
  "daily.keepGoing": "Aji ghda bach tb9i l'flame cha3la 👑",
  "daily.newDay": "Nhar jdid, vibe jdid — l'flame kaybda mn hna 🔥",
  "daily.share": "Share l'vibe card dyalek",
  "daily.rendering": "Kanwjjed l'card...",
  "daily.shareNote":
    "Siftiha l'group — khelli l'banat ya3rfo lenergie dyalek lyoum.",
  "daily.cardTitle": "Vibe dyal lyoum",

  // Shop
  "shop.metaTitle": "Shop",
  "shop.eyebrow": "1 Perfume · 3 Personalities ✨",
  "shop.title": "1 Perfume, 3 Vibes 💖",
  "shop.subtitle":
    "Khtari lfragrance li ghadi tchri — w lpage ghadi tbeddel b lcolors dyalha!",
  "shop.choose": "Khtari lvibe dyalk 🌸",
  "shop.includes": "Kol order kiji m3ah:",
  "shop.notes": "Fragrance notes 🧪",
  "shop.order": "Commandi f WhatsApp",
  "shop.dm": "Wla Send DM f Instagram",
  "shop.reviews": "Chno 9alo l'banat",
  "shop.trustOriginal": "100% Original",
  "shop.trustFast": "Livraison f 1-3 days",
  "shop.trustWrap": "Emballage cadeau gratuit",
  "shop.discover": "Mazal ma3rfti lvibe dyalek? Passi l'quiz! 💫",
  "shop.quizCta": "Discover your vibe",
};

export const DICT: Record<"en", Dict> = { en };
