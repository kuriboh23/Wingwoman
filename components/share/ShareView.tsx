"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Wordmark } from "@/components/brand/Butterfly";
import { ShareActions } from "@/components/share/ShareActions";
import { useLang } from "@/lib/i18n";
import { ANSWERS_PARAM } from "@/lib/result-params";
import { CONFIG, shareText } from "@/data/config";
import type { Archetype } from "@/data/vibes";
import type { LocalizedText, ScoreMap } from "@/types";

export function ShareView({
  girl,
  moodLabel,
  moodEmoji,
  percents,
  encoded,
}: {
  girl: Archetype;
  moodLabel: LocalizedText;
  moodEmoji: string;
  percents: ScoreMap;
  encoded: string;
}) {
  const { t, pick, lang } = useLang();

  return (
    <div className="mx-auto w-full max-w-md px-5 pb-40">
      <header className="flex items-center gap-3 pt-safe py-4">
        <Link
          href={`/result?${ANSWERS_PARAM}=${encoded}`}
          aria-label={t("share.back")}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/5 hover:text-ink"
        >
          <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
        </Link>
        <Wordmark />
      </header>

      <p className="mt-2 text-[1.6rem] leading-tight font-semibold">{t("share.title")}</p>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/60">{t("share.body")}</p>

      <div className="mt-6">
        <ShareActions
          girl={girl}
          moodLabel={pick(moodLabel)}
          moodEmoji={moodEmoji}
          percents={percents}
          shareText={shareText(pick(girl.name), pick(moodLabel), lang)}
          url={`${CONFIG.brand.url}/share?${ANSWERS_PARAM}=${encoded}`}
        />
      </div>

      <Link
        href={`/result?${ANSWERS_PARAM}=${encoded}`}
        className="mt-8 block text-center text-[0.85rem] font-medium text-ink/50 underline underline-offset-4 transition hover:text-ink"
      >
        {t("share.backFull")}
      </Link>
    </div>
  );
}
