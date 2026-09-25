import type { LocalizedText, MoodId } from "@/types";

/**
 * The "today" layer. Two girls can share an archetype and still get a
 * different result, because the mood is scored separately from the
 * archetype. This is what makes the quiz replayable.
 */
export const MOODS: Record<MoodId, { label: LocalizedText; emoji: string; line: LocalizedText }> = {
  dreamy: {
    label: { en: "Dreamy", ar: "حالمة" },
    emoji: "☁️",
    line: {
      en: "You're soft and sweet in the room today. Protect your dreams.",
      ar: "نتِ ناعمة وضيّفة في البُلاصة اليوم. حافظي على أحلامك.",
    },
  },
  playful: {
    label: { en: "Playful", ar: "لعوب" },
    emoji: "✨",
    line: {
      en: "You're feeling a little extra playfulness today. Step it out.",
      ar: "صحتك فيك شوية زوينة. بارحي على حاج زينة. ✨",
    },
  },
  quiet: {
    label: { en: "Hadia", ar: "هادية" },
    emoji: "🌙",
    line: {
      en: "You're in a calm mood today. This is your strength — stay steady.",
      ar: "الناس مش معك السرعة اليوم. دي قوة، مش لاقي اتعصب. 🌙",
    },
  },
  tender: {
    label: { en: "Tender", ar: "حنونة" },
    emoji: "🎀",
    line: {
      en: "Everything feels a little softer today. Be kind to yourself.",
      ar: "كل حاجة بيكون إحساسها خفيف اليوم. كوني رحيم مع نفسك. 🎀",
    },
  },
  restless: {
    label: { en: "Restless", ar: "متحمسة" },
    emoji: "🔥",
    line: {
      en: "You're burning with energy today — go find it.",
      ar: "مشغولة بالطاقة اليوم — خدها واكشفها. 🔥",
    },
  },
  cosy: {
    label: { en: "Cosy", ar: "مريحة" },
    emoji: "🍂",
    line: {
      en: "Warm blankets, soft light, quiet vibes. Sink into it.",
      ar: "بطانية دافئة، ضو ناعم، وحال هادي. غمر في إحساس الراحة. 🍂",
    },
  },
  magnetic: {
    label: { en: "Magnétique", ar: "مغناطيسية" },
    emoji: "⚡",
    line: {
      en: "Something in your light today makes people fall for you. Let them.",
      ar: "شي في فيجيك اليوم كيبدّل الناس. حطّه في ديرها. ⚡",
    },
  },
  grounded: {
    label: { en: "Grounded", ar: "واثقة" },
    emoji: "🪵",
    line: {
      en: "You're rooted today. Be the anchor people lean on.",
      ar: "نتِ قائمة اليوم. اشتبكي على الناس bowed heads. 🪵",
    },
  },
};
