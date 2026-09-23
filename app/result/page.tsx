import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ResultView } from "@/components/result/ResultView";
import { MOODS } from "@/data/moods";
import { SITE } from "@/data/site";
import { ARCHETYPES } from "@/data/vibes";
import { ANSWERS_PARAM, decodeAnswers, encodeAnswers } from "@/lib/result-params";
import { isComplete, scoreQuiz } from "@/lib/scoring";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function readParam(params: Record<string, string | string[] | undefined>): string | undefined {
  const raw = params[ANSWERS_PARAM];
  return typeof raw === "string" ? raw : undefined;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const answers = decodeAnswers(readParam(params));

  if (!isComplete(answers)) {
    return { title: "Which girl are you today?" };
  }

  const result = scoreQuiz(answers);
  const girl = ARCHETYPES[result.winner];
  const mood = MOODS[result.mood];
  const encoded = encodeAnswers(answers);
  const title = `${girl.name} · ${mood.label}`;
  const description = `${girl.tagline} ${girl.era}. Take the quiz and find your girl.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`${SITE.url}/api/og?${ANSWERS_PARAM}=${encoded}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.url}/api/og?${ANSWERS_PARAM}=${encoded}`],
    },
  };
}

export default async function ResultPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const encoded = readParam(params);
  const answers = decodeAnswers(encoded);

  // A result URL with no answers isn't an error, it's just someone who hasn't
  // played yet. Send her to the quiz instead of showing a broken page.
  if (!isComplete(answers)) redirect("/quiz");

  const url = `${SITE.url}/result?${ANSWERS_PARAM}=${encodeAnswers(answers)}`;

  return <ResultView answers={answers} url={url} />;
}
