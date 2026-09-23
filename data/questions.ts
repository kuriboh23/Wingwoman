import type { Question } from "@/types";

/**
 * Nine questions. Three rules every one of them obeys:
 *
 *  1. One screen each, three options max — thumb-reachable on a phone.
 *  2. They NEVER mention perfume, notes or the product. They ask about *her*.
 *  3. Answers are behavioural or sensory — never "what's your personality?".
 *
 * Each question probes one axis of the scent pyramid, repurposed as a
 * personality model:
 *
 *   top   → how she enters a room     (first impression)
 *   heart → who she is with people    (the personality)
 *   base  → what she needs today      (what lingers)
 *
 * Axes are interleaved top → heart → base → top → … so the quiz never feels
 * like it repeats itself. Every option also tags a *mood*, which is scored
 * separately from the archetype — that's what makes the result say
 * "which girl are you TODAY" instead of "which girl are you".
 */
export const QUESTIONS: Question[] = [
  {
    id: "q1",
    axis: "top",
    prompt: "The first ten seconds after you wake up decide your whole day. What's playing?",
    options: [
      {
        id: "q1a",
        label: "Something soft and slow",
        glyph: "🎧",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q1b",
        label: "The one song that makes me dance in the mirror",
        glyph: "🔊",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q1c",
        label: "Silence. Just me and my thoughts.",
        glyph: "🌅",
        weights: { brown: 3 },
        mood: "quiet",
      },
    ],
  },
  {
    id: "q2",
    axis: "heart",
    prompt: "Your phone is at 3%. What's the one last thing you scroll?",
    options: [
      {
        id: "q2a",
        label: "Pinterest boards of things I'll never actually make",
        glyph: "🎨",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q2b",
        label: "Someone's vlog of a life I want",
        glyph: "📹",
        weights: { orange: 2, pink: 1 },
        mood: "restless",
      },
      {
        id: "q2c",
        label: "My horoscope. I need to know.",
        glyph: "🔮",
        weights: { brown: 2, orange: 1 },
        mood: "quiet",
      },
    ],
  },
  {
    id: "q3",
    axis: "base",
    prompt: "Pick today's drink.",
    options: [
      {
        id: "q3a",
        label: "Iced caramel latte",
        glyph: "☕",
        weights: { brown: 3 },
        mood: "cosy",
      },
      {
        id: "q3b",
        label: "Sparkling peach iced tea",
        glyph: "🍑",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q3c",
        label: "Strawberry matcha",
        glyph: "🍓",
        weights: { pink: 3 },
        mood: "tender",
      },
    ],
  },
  {
    id: "q4",
    axis: "top",
    prompt: "Your outfit picked itself this morning. Which one did it pick?",
    options: [
      {
        id: "q4a",
        label: "Soft pink, ribbons, a bow somewhere",
        glyph: "🎀",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q4b",
        label: "White linen, gold hoops, no effort visible",
        glyph: "✨",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q4c",
        label: "A big knit and my grandmother's rings",
        glyph: "🧶",
        weights: { brown: 3 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q5",
    axis: "heart",
    prompt: "Someone calls you “too much”.",
    options: [
      {
        id: "q5a",
        label: "I blush and apologise",
        glyph: "🥺",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q5b",
        label: "I laugh louder",
        glyph: "😂",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q5c",
        label: "I smile and change absolutely nothing",
        glyph: "🙂",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
  {
    id: "q6",
    axis: "base",
    prompt: "It's 9pm and the evening is finally yours. What does it look like?",
    options: [
      {
        id: "q6a",
        label: "Bath, playlist, phone face-down",
        glyph: "🛁",
        weights: { pink: 2, brown: 1 },
        mood: "dreamy",
      },
      {
        id: "q6b",
        label: "Out. Dancing. With everyone I love.",
        glyph: "💃",
        weights: { orange: 3 },
        mood: "restless",
      },
      {
        id: "q6c",
        label: "One candle, one book, one warm drink",
        glyph: "📖",
        weights: { brown: 3 },
        mood: "cosy",
      },
    ],
  },
  {
    id: "q7",
    axis: "top",
    prompt: "Pick a texture. Don't overthink it.",
    options: [
      {
        id: "q7a",
        label: "Cool, smooth silk",
        glyph: "🧵",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q7b",
        label: "Sun-warmed skin",
        glyph: "☀️",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q7c",
        label: "Soft, worn-in cashmere",
        glyph: "🧣",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
  {
    id: "q8",
    axis: "heart",
    prompt: "Which compliment actually lands?",
    options: [
      {
        id: "q8a",
        label: "“You're so sweet”",
        glyph: "💌",
        weights: { pink: 3 },
        mood: "tender",
      },
      {
        id: "q8b",
        label: "“You're magnetic”",
        glyph: "⚡",
        weights: { orange: 3 },
        mood: "magnetic",
      },
      {
        id: "q8c",
        label: "“You're so comforting”",
        glyph: "🤍",
        weights: { brown: 3 },
        mood: "grounded",
      },
    ],
  },
  {
    id: "q9",
    axis: "base",
    prompt: "If today had a colour, it would be...",
    options: [
      {
        id: "q9a",
        label: "Soft pink",
        glyph: "🩷",
        weights: { pink: 3 },
        mood: "dreamy",
      },
      {
        id: "q9b",
        label: "Bright orange",
        glyph: "🧡",
        weights: { orange: 3 },
        mood: "playful",
      },
      {
        id: "q9c",
        label: "Warm brown",
        glyph: "🤎",
        weights: { brown: 3 },
        mood: "quiet",
      },
    ],
  },
];
