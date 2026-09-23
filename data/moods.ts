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
      en: "You're half here, half somewhere softer. Protect the daydream today.",
      ar: "نصك هون ونصك فبلاصة أهدى. حافظي على الحلم ديالك اليوم.",
    },
  },
  playful: {
    label: { en: "Playful", ar: "لعوب" },
    emoji: "✨",
    line: {
      en: "You woke up with a bit of mischief in you. Use it on something fun.",
      ar: "صحيتي وفيك شوية شقاوة. خرجيها فشي حاجة زوينة.",
    },
  },
  quiet: {
    label: { en: "Quiet", ar: "هادية" },
    emoji: "🌙",
    line: {
      en: "You're not in the mood to perform today. That's a strength, not a mood swing.",
      ar: "ماشي فالمزاج تمثلي اليوم. هادي قوة، ماشي تقلب مزاج.",
    },
  },
  tender: {
    label: { en: "Tender", ar: "حنونة" },
    emoji: "🎀",
    line: {
      en: "Everything is landing a little deeper today. Be gentle with yourself.",
      ar: "كلشي كيوسلك عمق شوية اليوم. كوني رحيمة مع راسك.",
    },
  },
  restless: {
    label: { en: "Restless", ar: "متحمسة" },
    emoji: "🔥",
    line: {
      en: "You need somewhere to put all this energy. Go find it.",
      ar: "خاصك بلاصة تحطي فيها هاد الطاقة. سيري لقيها.",
    },
  },
  cosy: {
    label: { en: "Cosy", ar: "مريحة" },
    emoji: "🍂",
    line: {
      en: "Today is a soft blanket and low light kind of day. Lean all the way in.",
      ar: "اليوم نهار بطانية ناعمة وضو خافت. غرقي فيه كامل.",
    },
  },
  magnetic: {
    label: { en: "Magnetic", ar: "مغناطيسية" },
    emoji: "⚡",
    line: {
      en: "Something about you is pulling people in today. Let it happen.",
      ar: "كاين شي فيك اليوم كيجبد الناس. خليه يوقع.",
    },
  },
  grounded: {
    label: { en: "Grounded", ar: "واثقة" },
    emoji: "🪵",
    line: {
      en: "You're steady today. The kind of steady that other people lean on.",
      ar: "نتِ ثابتة اليوم. من النوع اللي الناس كتسنّد عليه.",
    },
  },
};
