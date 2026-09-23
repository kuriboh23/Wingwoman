import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ShareView } from "@/components/share/ShareView";
import { ANSWERS_PARAM, decodeAnswers, encodeAnswers } from "@/lib/result-params";
import { isComplete, scoreQuiz } from "@/lib/scoring";
import { MOODS } from "@/data/moods";
import { ARCHETYPES } from "@/data/vibes";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export const metadata: Metadata = {
  title: "Your card",
  description: "Your Wingwoman result card, ready to post.",
};

export default async function SharePage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = params[ANSWERS_PARAM];
  const answers = decodeAnswers(typeof raw === "string" ? raw : undefined);

  if (!isComplete(answers)) redirect("/quiz");

  const result = scoreQuiz(answers);
  const girl = ARCHETYPES[result.winner];
  const mood = MOODS[result.mood];
  const encoded = encodeAnswers(answers);

  return (
    <ShareView
      girl={girl}
      moodLabel={mood.label}
      moodEmoji={mood.emoji}
      percents={result.percents}
      encoded={encoded}
    />
  );
}
