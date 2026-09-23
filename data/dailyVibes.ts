import type { ArchetypeId, LocalizedText } from "@/types";

/**
 * ── The Daily Vibe Check ────────────────────────────────────────────
 * A one-tap ritual she can come back to every single day. Deliberately
 * separate from the quiz: the quiz is "who are you", this is "how are you
 * *today*" — which is what turns a one-time test into a habit.
 *
 * Every option is written like a group-chat message from a friend who
 * actually gets Moroccan Gen-Z: real Darija, zero corporate wellness.
 */
export interface DailyVibe {
  id: string;
  emoji: string;
  label: LocalizedText;
  /** One-line pep talk shown after she locks it in. */
  cheer: LocalizedText;
  /** Whose palette tints her shareable vibe card. */
  tone: ArchetypeId;
}

export const DAILY_VIBES: DailyVibe[] = [
  {
    id: "sweet",
    emoji: "🍓",
    tone: "pink",
    label: { en: "Soft & Sweet", ar: "سويت وهادية" },
    cheer: {
      en: "Habiba energy. The world can wait a minute. 🍓",
      ar: "طاقة الحبيبة. الدنيا تسنى شوية. 🍓",
    },
  },
  {
    id: "magnetic",
    emoji: "⚡",
    tone: "orange",
    label: { en: "Main Character", ar: "البطلة ديال القصة" },
    cheer: {
      en: "Yallah! Today everybody's watching you. ⚡",
      ar: "يالاه! اليوم الكل كيتفرج فيك. ⚡",
    },
  },
  {
    id: "romantic",
    emoji: "🎀",
    tone: "pink",
    label: { en: "Hopeless Romantic", ar: "رومانسية بزاف" },
    cheer: {
      en: "Your heart is extra soft today — protect it, habiba. 🎀",
      ar: "قلبك رطب بزاف اليوم — حافظي عليه، حبيبة. 🎀",
    },
  },
  {
    id: "feral",
    emoji: "🔥",
    tone: "orange",
    label: { en: "Feral Energy", ar: "طاقة واعر" },
    cheer: {
      en: "Feral mode ON. Fin ghadi tkhwi had l'énergie? 🔥",
      ar: "مود واعر خدام. فين غادي تخرجي هاد الطاقة؟ 🔥",
    },
  },
  {
    id: "cozy",
    emoji: "☕",
    tone: "brown",
    label: { en: "Cozy Chic", ar: "راحة وفخامة" },
    cheer: {
      en: "Blanket, candle, zero drama. Bslama l'stress. ☕",
      ar: "بطانية، شمعة، وبلا دراما. بسلامة للستريس. ☕",
    },
  },
  {
    id: "quiet",
    emoji: "🌙",
    tone: "brown",
    label: { en: "Low Battery", ar: "بطارية ضعيفة" },
    cheer: {
      en: "Battery low? Charge yourself. Mashi 3ib. 🌙",
      ar: "البطارية ضعيفة؟ شارجي راسك. ماشي عيب. 🌙",
    },
  },
];

export function findDailyVibe(id: string | null | undefined): DailyVibe | undefined {
  if (!id) return undefined;
  return DAILY_VIBES.find((vibe) => vibe.id === id);
}
