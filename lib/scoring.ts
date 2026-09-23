import { MOODS } from "@/data/moods";
import { QUESTIONS } from "@/data/questions";
import { ARCHETYPE_ORDER, ARCHETYPES } from "@/data/vibes";
import type { Answers, ArchetypeId, MoodId, QuizResult, ScoreMap } from "@/types";

const ZERO: ScoreMap = { pink: 0, orange: 0, brown: 0 };

/** Stable tie-break order — pink, then orange, then brown. */
const RANK: Record<ArchetypeId, number> = { pink: 0, orange: 1, brown: 2 };

/**
 * Distribute 100% across the archetypes using the largest-remainder method.
 * Naive rounding can produce 99% or 101%, which looks broken on a share card.
 */
function toPercents(scores: ScoreMap, total: number): ScoreMap {
  const raw = ARCHETYPE_ORDER.map((id) => ({
    id,
    exact: (scores[id] / total) * 100,
  }));

  const floors = raw.map((r) => ({ id: r.id, value: Math.floor(r.exact), frac: r.exact % 1 }));
  let remaining = 100 - floors.reduce((sum, f) => sum + f.value, 0);

  const byFrac = [...floors].sort((a, b) => b.frac - a.frac);
  for (const f of byFrac) {
    if (remaining <= 0) break;
    f.value += 1;
    remaining -= 1;
  }

  return floors.reduce(
    (acc, f) => {
      acc[f.id] = f.value;
      return acc;
    },
    { ...ZERO }
  );
}

/**
 * Pick the dominant mood. Ties fall back to the winning archetype's default
 * mood so the result is always deterministic.
 */
function pickMood(counts: Map<MoodId, number>, fallback: MoodId): MoodId {
  const moodOrder = Object.keys(MOODS) as MoodId[];
  let best: MoodId = fallback;
  let bestCount = -1;

  for (const mood of moodOrder) {
    const count = counts.get(mood) ?? 0;
    if (count > bestCount) {
      best = mood;
      bestCount = count;
    }
  }

  return bestCount <= 0 ? fallback : best;
}

export function scoreQuiz(answers: Answers): QuizResult {
  const scores: ScoreMap = { ...ZERO };
  const moodCounts = new Map<MoodId, number>();

  for (const question of QUESTIONS) {
    const chosen = question.options.find((o) => o.id === answers[question.id]);
    if (!chosen) continue;

    for (const [id, points] of Object.entries(chosen.weights)) {
      scores[id as ArchetypeId] += points ?? 0;
    }
    moodCounts.set(chosen.mood, (moodCounts.get(chosen.mood) ?? 0) + 1);
  }

  // ── Strong, deterministic ranking ────────────────────────────────
  // 1. Highest score wins.
  // 2. Ties are broken by head-to-head wins across the quiz (how many
  //    questions she answered in one girl's favour vs the other), then by
  //    stable RANK order — so the same answers ALWAYS produce the same girl,
  //    on every device, every time.
  const headToHead = new Map<ArchetypeId, number>([
    ["pink", 0],
    ["orange", 0],
    ["brown", 0],
  ]);
  for (const question of QUESTIONS) {
    const chosen = question.options.find((o) => o.id === answers[question.id]);
    if (!chosen) continue;
    const top = (Object.entries(chosen.weights) as [ArchetypeId, number][]).sort(
      (a, b) => b[1] - a[1] || RANK[a[0]] - RANK[b[0]]
    );
    if (top.length > 0) headToHead.set(top[0][0], (headToHead.get(top[0][0]) ?? 0) + 1);
  }

  const ranked = [...ARCHETYPE_ORDER].sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    const ha = headToHead.get(a) ?? 0;
    const hb = headToHead.get(b) ?? 0;
    if (hb !== ha) return hb - ha;
    return RANK[a] - RANK[b];
  });

  const winner = ranked[0];
  const total = ARCHETYPE_ORDER.reduce((sum, id) => sum + scores[id], 0);
  const percents = total === 0 ? { ...ZERO } : toPercents(scores, total);

  return {
    scores,
    percents,
    winner,
    runnerUp: ranked[1],
    mood: pickMood(moodCounts, ARCHETYPES[winner].defaultMood),
  };
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => Boolean(answers[q.id]));
}

export function progress(answers: Answers): number {
  return QUESTIONS.filter((q) => Boolean(answers[q.id])).length;
}
