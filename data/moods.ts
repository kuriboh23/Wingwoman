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
      ar: "نص إلك هون ونص بمكان أهدى. احمي حلم اليوم.",
    },
  },
  playful: {
    label: { en: "Playful", ar: "لعوب" },
    emoji: "✨",
    line: {
      en: "You woke up with a bit of mischief in you. Use it on something fun.",
      ar: "صحيتي فيك شوية شقاوة. استخدميها بشي حلو.",
    },
  },
  quiet: {
    label: { en: "Quiet", ar: "هادية" },
    emoji: "🌙",
    line: {
      en: "You're not in the mood to perform today. That's a strength, not a mood swing.",
      ar: "مو بمزاج تمثلي اليوم. هاي قوة، مش تقلب مزاج.",
    },
  },
  tender: {
    label: { en: "Tender", ar: "حنونة" },
    emoji: "🎀",
    line: {
      en: "Everything is landing a little deeper today. Be gentle with yourself.",
      ar: "كل شي واصل أعمق شوية اليوم. خليجي رحمة بحالك.",
    },
  },
  restless: {
    label: { en: "Restless", ar: "متحمسة" },
    emoji: "🔥",
    line: {
      en: "You need somewhere to put all this energy. Go find it.",
      ar: "بدك مكان تحطي بهاكل الطاقة. روحي دوري عليه.",
    },
  },
  cosy: {
    label: { en: "Cosy", ar: "مريحة" },
    emoji: "🍂",
    line: {
      en: "Today is a soft blanket and low light kind of day. Lean all the way in.",
      ar: "اليوم يوم بطانية ناعمة وإضاءة هادية. انغمسي فيها كلها.",
    },
  },
  magnetic: {
    label: { en: "Magnetic", ar: "مغناطيسية" },
    emoji: "⚡",
    line: {
      en: "Something about you is pulling people in today. Let it happen.",
      ar: "في شي فيك اليوم بيجذب الناس. خلّيه يصير.",
    },
  },
  grounded: {
    label: { en: "Grounded", ar: "واثقة" },
    emoji: "🪵",
    line: {
      en: "You're steady today. The kind of steady that other people lean on.",
      ar: "إنتِ ثابتة اليوم. النوعية من الثبات اللي الناس بتستند عليه.",
    },
  },
};
