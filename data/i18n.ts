/**
 * UI strings — one voice only: Moroccan Gen-Z Darija in Latin script (the way
 * girls actually type), generic English where they'd use it anyway, and a
 * pinch of simple French (les notes, Livraison, Vérifié...).
 *
 * Content strings (girls, questions, moods) carry their own { en, ar } pairs
 * next to the data — the `en` half is what the site shows.
 *
 * Voice rule: if it wouldn't sound right in a Casablanca group chat, it does
 * not belong here. No MSA, no Google-Translate Arabic.
 */
export type Lang = "en";

export type Dict = Record<string, string>;

const en: Dict = {
  // ── Nav — short on purpose: the bottom pill must fit every phone ──
  "nav.home": "Dar",
  "nav.findGirl": "Quiz",
  "nav.shop": "Shop",

  // Home
  "home.eyebrow": "8 las2ila · 60 secondes · bla stress",
  "home.titleLines.0": "Ashmen bent",
  "home.titleLines.1": "nti",
  "home.titleLines.2": "lyoum?",
  "home.body":
    "Machi ghir ashmen parfum bghiti — ashmen bent nti daba, had sbah. N9olik chkoun nti, w mn ba3d chnou ri7tha. Yallah.",
  "home.cta": "Le9a chkoun nti",
  "home.ctaNote": "Bla inscription, bla email. Ghir 8 taps — 60 secondes w safi.",
  "home.secondaryCta": "Choufi les parfums",
  "home.marquee": "SOFT GIRL ERA · GOLDEN GIRL ERA · COCOA GIRL ERA · WACH NTI? · YALLAH 60 SECONDES",
  "home.todayResult": "Lyoum nti {name} — choufi résultat dyalek",

  "girls.eyebrow": "3 dyal l'banat — nti wa7da fihom",
  "girls.title": "Khtari l'personnalité, machi l'parfum",
  "girls.body":
    "Kol bent 3ndha 3lam kamel — ri7a, couleurs, mood, ritual. Kliki 3la wa7da bach tchoufi ri7tha.",
  "girls.herScent": "Ri7tha",

  "how.eyebrow": "Kifash kaykhdem",
  "how.title": "3 khotwat. Safi.",
  "how.step1.title": "Jawbi 3la 8 dyal las2ila",
  "how.step1.body":
    "Sbah dyalek, l'boisson dyalek, l'soir dyalek. Makhassek t3refi walo 3la parfum — 7na kans9so 3la NTI.",
  "how.step2.title": "Le9i l'bent li ntiha lyoum",
  "how.step2.body":
    "Wa7da mn 3. M3aha l'energie dyalek, mood dyalek, couleurs, w wa7d l'haja diriha lyoum.",
  "how.step3.title": "Postiha, w choufi ri7tha",
  "how.step3.body":
    "Card msawb 3la 9yassek — smitek 3lih. W t7tih, l'parfum dyal Wingwoman li mwjod liha.",

  "scents.eyebrow": "Le trio",
  "scents.title": "W 3 dyal riya7",
  "scents.body":
    "Kol bent 3ndha ri7tha. Ghadi tchoufi dyalek f lekher — mn ba3d ma t3refi chkoun nti. Machi 9bel.",
  "scents.shopThis": "Chri hada",

  "final.title": "Hiya katsennak. 60 secondes.",
  "final.body":
    "Kayn nhar nti l'7louwa, w kayn nhar nti l'charara. 3awdiha ghda — bla ma t7essi, ghatdouhki rassek.",
  "final.cta": "Le9a chkoun nti",

  "footer.line": "Msawb b l7ob l l'banat li kaybedl l'mood dyalhom kol nhar. W safi, 3adi.",

  // Quiz
  "quiz.question": "Question {n} mn {total}",
  "quiz.backHome": "Rje3 l'dar",
  "quiz.back": "L'so2al li 9bel",
  "quiz.footer": "Ma kaynch jawab ghalat hna — bs7, kouni sincere, machi impressive.",
  "quiz.streak": "Streak {n} iyam",
  "quiz.cheer.0": "Yallah, nti 9adra 💅",
  "quiz.cheer.1": "Bs7, kouni sincere — hadi hiya s-sirriya kamla 👑",
  "quiz.cheer.2": "Nass l'tri9 — las2ila zwina jayin 🔥",
  "quiz.cheer.3": "9rebiti, habibti — matw9efich daba ✨",

  // Result
  "result.todayYoure": "Lyoum nti",
  "result.oneThing": "Wa7d l'haja diriha lyoum",
  "result.energy": "L'energie dyalek lyoum",
  "result.style": "Style dyalha",
  "result.palette": "Couleurs dyalek lyoum",
  "result.herScent": "Ri7tha",
  "result.matchedToYou": "Matched m3ak",
  "result.matchedBody":
    "Tle3ti {girl} b {mood} energy lyoum — w hadi hiya l'parfum li msawb liha.",
  "result.order": "Commandi f WhatsApp",
  "result.orDm": "Wla DM 3la Instagram",
  "result.orderNote":
    "L'message deja fih chkoun nti — 7na kan3rfo chnou bghiti. Sahel, s7i7?",
  "result.retake": "3awdi",
  "result.again": "7ssiti rassek mkhalfa? 3awdi l'quiz",
  "result.shareCta": "Share l'card dyalek",
  "result.shopCta": "Wla chriha nichan",

  // Share
  "share.title": "Ha hiya. Daba khelli l'group chat yghar.",
  "share.cardTitle": "L'card dyalek",
  "share.body":
    "Sejjelha, postiha, siftiha l'group. Kol card kats9ssi l'bent li jaya nefs l'so2al: wach nti?",
  "share.back": "Rje3 l'résultat",
  "share.backFull": "Rje3 l'résultat kamel",
  "share.formatStory": "Story 9:16",
  "share.formatSquare": "Post 1:1",
  "share.make": "Share my card",
  "share.making": "Kanwjjed l'card...",
  "share.save": "Sejjel l'image",
  "share.copy": "Copy le lien",
  "share.idle": "Jouj formats wajdin — khtari li 3ejbek, habibti.",
  "share.shared": "T-postat! L'banat ghadi yseksouk 3liha, promis.",
  "share.saved": "Tsejjlat f downloads. Yallah, siri chriha.",
  "share.copied": "L'lien tcopya. Siftih l l'banat.",
  "share.error": "Ma9dernach nsawbo l'image. Dir screenshot, habibti.",

  // Personalisation
  "personal.title": "Khelliha b smitek",
  "personal.subtitle": "Smitek kat3lich nichan f l'card — optional, walakin cuter.",
  "personal.name": "Smitek",
  "personal.namePlaceholder": "matalan: Sara",
  "personal.ig": "Instagram",
  "personal.igPlaceholder": "compte dyalek",
  "personal.for": "Had l'card",
  "personal.forMe": "Liya",
  "personal.gift": "Cadeau",
  "personal.giftFor": "L chkoun?",
  "personal.giftPlaceholder": "smiytha, matalan: Lina",
  "personal.onCard": "F l'card",

  // Card
  "card.todayIm": "Lyoum ana",
  "card.aGiftFor": "Cadeau l",

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
    "Siftiha l'group — khelli l'banat ya3rfo l'energie dyalek lyoum.",
  "daily.cardTitle": "Vibe dyal lyoum",

  // Shop
  "shop.metaTitle": "Shop",
  "shop.eyebrow": "Parfum wa7d · 3 dyal l'banat",
  "shop.title": "Parfum wa7d, 3 bent, 3 vibe",
  "shop.subtitle":
    "Khtari l'bent li ghadi tchri liha — w l'page katban b les couleurs dyalha. Yallah.",
  "shop.choose": "Khtari la version dyalha",
  "shop.includes": "Kol commande ja m3aha",
  "shop.notes": "Les notes",
  "shop.order": "Commandi f WhatsApp",
  "shop.dm": "Wla DM 3la Instagram",
  "shop.reviews": "Chno 9alo l'banat",
  "shop.trustOriginal": "Original 100%",
  "shop.trustFast": "Livraison 1-3 iyam",
  "shop.trustWrap": "Emballage cadeau fabor",
  "shop.discover": "Mazal ma3rftich chkoun nti? Yallah, jrebbi l'quiz!",
  "shop.quizCta": "Le9a chkoun nti",
};

export const DICT: Record<"en", Dict> = { en };
