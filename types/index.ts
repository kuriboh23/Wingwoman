/** Core domain types. */
export type ArchetypeId = "pink" | "orange" | "brown";

export type ScoreMap = Record<ArchetypeId, number>;

/** A "today" feeling, independent of the archetype — this is what makes the
 * result change on repeat plays. */
export type MoodId =
  | "dreamy"
  | "playful"
  | "quiet"
  | "tender"
  | "restless"
  | "cosy"
  | "magnetic"
  | "grounded";

/** A string that exists in both site languages. */
export interface LocalizedText {
  en: string;
  ar: string;
}

export interface QuizOption {
  id: string;
  label: LocalizedText;
  /** Tiny secondary line, e.g. "(no explanation needed)" */
  sub?: LocalizedText;
  /** Optional emoji used as the visual on the answer card. */
  glyph?: string;
  /** Points awarded to each archetype. Omitted keys score zero. */
  weights: Partial<ScoreMap>;
  mood: MoodId;
}

export interface Question {
  id: string;
  /** Which scent-pyramid axis this question probes. Kept for documentation
   * and for the "why did I get this?" explainer. */
  axis: "top" | "heart" | "base";
  prompt: LocalizedText;
  options: QuizOption[];
}

/** answers: questionId -> optionId */
export type Answers = Record<string, string>;

export interface QuizResult {
  scores: ScoreMap;
  /** Whole-number percentages that always sum to 100. */
  percents: ScoreMap;
  winner: ArchetypeId;
  runnerUp: ArchetypeId;
  mood: MoodId;
}

export interface StyleChip {
  label: LocalizedText;
  icon: string;
}
