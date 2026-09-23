import { QUESTIONS } from "@/data/questions";
import type { Answers } from "@/types";

/**
 * There is no database in this MVP. The result lives in the URL instead —
 * which means results are shareable, deep-linkable and reconstructable on the
 * server for OG images, with zero infrastructure.
 *
 * Format: /result?a=q1a-q2b-q3c-q4a-q5b-q6c-q7a-q8b-q9c
 */

export const ANSWERS_PARAM = "a";
const SEPARATOR = "-";

const VALID_OPTION_IDS = new Set(
  QUESTIONS.flatMap((question) => question.options.map((option) => option.id))
);

export function encodeAnswers(answers: Answers): string {
  return QUESTIONS.map((question) => answers[question.id])
    .filter(Boolean)
    .join(SEPARATOR);
}

export function decodeAnswers(value: string | null | undefined): Answers {
  if (!value) return {};

  const picked = new Set(
    value
      .split(SEPARATOR)
      .map((token) => token.trim())
      .filter((token) => VALID_OPTION_IDS.has(token))
  );

  const answers: Answers = {};
  for (const question of QUESTIONS) {
    const match = question.options.find((option) => picked.has(option.id));
    if (match) answers[question.id] = match.id;
  }

  return answers;
}

export function resultPath(encoded: string): string {
  return `/result?${ANSWERS_PARAM}=${encoded}`;
}
