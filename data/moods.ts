import type { LocalizedText, MoodId } from "@/types";

/**
 * The "today" layer. Two girls can share an archetype and still get a
 * different result, because the mood is scored separately from the
 * archetype. This is what makes the quiz replayable.
 */
export const MOODS: Record<MoodId, { label: LocalizedText; emoji: string; line: LocalizedText }> = {
  dreamy: {
    label: { en: "Rêveuse", ar: "حالمة" },
    emoji: "☁️",
    line: {
      en: "Nti nass w ness f blassa a7la. 7asbi 3la l'7olm dyalek lyoum.",
      ar: "نصك هون ونصك فبلاصة أهدى. حافظي على الحلم ديالك اليوم.",
    },
  },
  playful: {
    label: { en: "Playful", ar: "لعوب" },
    emoji: "✨",
    line: {
      en: "S7iti w fik chi shwiya dyal sh9awa. Khrejiha f chi 7aja zwina.",
      ar: "صحيتي وفيك شوية شقاوة. خرجيها فشي حاجة زوينة.",
    },
  },
  quiet: {
    label: { en: "Hadia", ar: "هادية" },
    emoji: "🌙",
    line: {
      en: "Machi f l'mood temtheli lyoum. Hadi 9ouwa, machi t9alob mood.",
      ar: "ماشي فالمزاج تمثلي اليوم. هادي قوة، ماشي تقلب مزاج.",
    },
  },
  tender: {
    label: { en: "Tender", ar: "حنونة" },
    emoji: "🎀",
    line: {
      en: "Kolchi kayo sla9 3ame9 chi shwiya lyoum. Kouni ra7ima m3a rasek.",
      ar: "كلشي كيوسلك عمق شوية اليوم. كوني رحيمة مع راسك.",
    },
  },
  restless: {
    label: { en: "Restless", ar: "متحمسة" },
    emoji: "🔥",
    line: {
      en: "Khassek blassa t7etti fiha had l'energie. Siri l9iha.",
      ar: "خاصك بلاصة تحطي فيها هاد الطاقة. سيري لقيها.",
    },
  },
  cosy: {
    label: { en: "Cosy", ar: "مريحة" },
    emoji: "🍂",
    line: {
      en: "Lyoum nhar dyal btanya na3ma w daw khafif. Ghre9i fih kamel.",
      ar: "اليوم نهار بطانية ناعمة وضو خافت. غرقي فيه كامل.",
    },
  },
  magnetic: {
    label: { en: "Magnétique", ar: "مغناطيسية" },
    emoji: "⚡",
    line: {
      en: "Kayn chi fik lyoum kayjbed l'nes. Khellih ywe99e3.",
      ar: "كاين شي فيك اليوم كيجبد الناس. خليه يوقع.",
    },
  },
  grounded: {
    label: { en: "Grounded", ar: "واثقة" },
    emoji: "🪵",
    line: {
      en: "Nti thabta lyoum. Mn l'naw3 li l'nes katsnad 3lih.",
      ar: "نتِ ثابتة اليوم. من النوع اللي الناس كتسنّد عليه.",
    },
  },
};
