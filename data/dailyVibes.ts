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
      en: "Your energy shines today. The world's waiting for your light. 🍓",
      ar: "الطاقة ديالك بتشتغل اليوم. الدنيا معطّسة بانتظارك. 🍓",
    },
  },
  {
    id: "magnetic",
    emoji: "⚡",
    tone: "orange",
    label: { en: "Main Character", ar: "البطلة ديال القصة" },
    cheer: {
      en: "Yes! Today everyone's watching you. Own the room. ⚡",
      ar: "يالاه! اليوم الجميع عايز يرى كده. خد البُلاصة لذاتك. ⚡",
    },
  },
  {
    id: "romantic",
    emoji: "🎀",
    tone: "pink",
    label: { en: "Romantic bzzaf", ar: "رومانسية بزاف" },
    cheer: {
      en: "Your heart's beating extra fast today — take care of it, my love. 🎀",
      ar: "قلبك بيدق سريع جداً اليوم — اعناها، حبيبة. 🎀",
    },
  },
  {
    id: "feral",
    emoji: "🔥",
    tone: "orange",
    label: { en: "Feral Energy", ar: "طاقة واعر" },
    cheer: {
      en: "Feral mode is ON. How about we burn some of this energy out? 🔥",
      ar: "مود واعر خدام شغال. شوية بكاء للطاقة ديالك؟ 🔥",
    },
  },
  {
    id: "cozy",
    emoji: "☕",
    tone: "brown",
    label: { en: "Cozy Chic", ar: "راحة وفخامة" },
    cheer: {
      en: "Covers, candle, and zero drama. Stay safe from the stress. ☕",
      ar: "بطانية، شمعة، ودrama صفر. حماية من الإستريس. ☕",
    },
  },
  {
    id: "quiet",
    emoji: "🌙",
    tone: "brown",
    label: { en: "Low Battery", ar: "بطارية ضعيفة" },
    cheer: {
      en: "Battery low? Charge your socks. You're fine. 🌙",
      ar: "البطارية هuntu؟ شغّليها. أنت كويسة. 🌙",
    },
  },
];

export function findDailyVibe(id: string | null | undefined): DailyVibe | undefined {
  if (!id) return undefined;
  return DAILY_VIBES.find((vibe) => vibe.id === id);
}
