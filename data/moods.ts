import type { MoodId } from "@/types";

/**
 * The "today" layer. Two girls can share an archetype and still get a
 * different result, because the mood is scored separately from the
 * archetype. This is what makes the quiz replayable.
 */
export const MOODS: Record<MoodId, { label: string; emoji: string; line: string }> = {
  dreamy: {
    label: "Dreamy",
    emoji: "☁️",
    line: "You're half here, half somewhere softer. Protect the daydream today.",
  },
  playful: {
    label: "Playful",
    emoji: "✨",
    line: "You woke up with a bit of mischief in you. Use it on something fun.",
  },
  quiet: {
    label: "Quiet",
    emoji: "🌙",
    line: "You're not in the mood to perform today. That's a strength, not a mood swing.",
  },
  tender: {
    label: "Tender",
    emoji: "🎀",
    line: "Everything is landing a little deeper today. Be gentle with yourself.",
  },
  restless: {
    label: "Restless",
    emoji: "🔥",
    line: "You need somewhere to put all this energy. Go find it.",
  },
  cosy: {
    label: "Cosy",
    emoji: "🍂",
    line: "Today is a soft blanket and low light kind of day. Lean all the way in.",
  },
  magnetic: {
    label: "Magnetic",
    emoji: "⚡",
    line: "Something about you is pulling people in today. Let it happen.",
  },
  grounded: {
    label: "Grounded",
    emoji: "🪵",
    line: "You're steady today. The kind of steady that other people lean on.",
  },
};
