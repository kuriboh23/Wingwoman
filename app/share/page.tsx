import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand/Butterfly";
import { ShareActions } from "@/components/share/ShareActions";
import { MOODS } from "@/data/moods";
import { SITE, shareText } from "@/data/site";
import { ARCHETYPES } from "@/data/vibes";
import { ANSWERS_PARAM, decodeAnswers, encodeAnswers } from "@/lib/result-params";
import { isComplete, scoreQuiz } from "@/lib/scoring";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export const metadata: Metadata = {
  title: "Your card",
  description: "Your Pink In Sweet result card, ready to post.",
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
    <div className="mx-auto w-full max-w-md px-5 pb-16">
      <header className="flex items-center gap-3 pt-safe py-4">
        <Link
          href={`/result?${ANSWERS_PARAM}=${encoded}`}
          aria-label="Back to your result"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/5 hover:text-ink"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <Wordmark />
      </header>

      <p className="mt-2 text-[1.6rem] leading-tight font-semibold">
        Here she is. Go make people jealous.
      </p>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/60">
        Save it, post it, send it to the group chat. Every card quietly asks the next girl the same
        question.
      </p>

      <div className="mt-6">
        <ShareActions
          girl={girl}
          moodLabel={mood.label}
          moodEmoji={mood.emoji}
          percents={result.percents}
          shareText={shareText(girl.name, mood.label)}
          url={`${SITE.url}/share?${ANSWERS_PARAM}=${encoded}`}
        />
      </div>

      <Link
        href={`/result?${ANSWERS_PARAM}=${encoded}`}
        className="mt-8 block text-center text-[0.85rem] font-medium text-ink/50 underline underline-offset-4 transition hover:text-ink"
      >
        Back to the full result
      </Link>
    </div>
  );
}
