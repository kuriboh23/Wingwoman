"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { RotateCcw, Share2 } from "lucide-react";
import { Butterfly, Wordmark } from "@/components/brand/Butterfly";
import { Button, ButtonLink } from "@/components/ui/Button";
import { EnergyBar } from "@/components/result/EnergyBar";
import { StyleBento } from "@/components/result/StyleBento";
import { ProductReveal } from "@/components/result/ProductReveal";
import { ShareActions } from "@/components/share/ShareActions";
import { MOODS } from "@/data/moods";
import { SITE, shareText } from "@/data/site";
import { ARCHETYPES } from "@/data/vibes";
import { scoreQuiz } from "@/lib/scoring";
import type { Answers } from "@/types";

export function ResultView({ answers, url }: { answers: Answers; url: string }) {
  const reduced = useReducedMotion();

  const result = useMemo(() => scoreQuiz(answers), [answers]);
  const girl = ARCHETYPES[result.winner];
  const runnerUp = ARCHETYPES[result.runnerUp];
  const mood = MOODS[result.mood];

  const [showSticky, setShowSticky] = useState(false);

  // Only offer the floating CTA once she's past the reveal — before that it
  // competes with the moment.
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="min-h-dvh" style={{ backgroundColor: girl.palette.wash }}>
      <header className="mx-auto flex w-full max-w-md items-center justify-between px-5 pt-safe pb-2">
        <Link href="/" aria-label={`${SITE.name} home`}>
          <Wordmark />
        </Link>
        <Link
          href="/quiz"
          className="flex items-center gap-1.5 text-[0.8rem] font-medium text-ink/50 transition hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Retake
        </Link>
      </header>

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-md px-5 pb-32"
      >
        {/* ── The identity. The emotional peak of the whole experience. ── */}
        <motion.section variants={item} className="pt-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/8 bg-white/70 p-6 backdrop-blur">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full"
              style={{
                background: `radial-gradient(circle, ${girl.palette.soft} 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <motion.div
                animate={reduced ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 inline-block"
                style={{ color: girl.palette.accent }}
              >
                <Butterfly className="h-9 w-9" />
              </motion.div>

              <p className="font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-ink/40 uppercase">
                Today you&apos;re
              </p>

              <h1
                className="mt-1 text-[2.75rem] leading-[0.95] font-semibold"
                style={{ color: girl.palette.ink }}
              >
                {girl.name}
              </h1>

              <p
                className="mt-1 font-display text-[1.15rem] italic opacity-55"
                style={{ color: girl.palette.ink }}
              >
                {girl.era}
              </p>

              <div
                className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ backgroundColor: `${girl.palette.accent}1f` }}
              >
                <span className="text-[1rem]">{mood.emoji}</span>
                <span
                  className="text-[0.8rem] font-bold tracking-[0.08em] uppercase"
                  style={{ color: girl.palette.ink }}
                >
                  {mood.label}
                </span>
              </div>

              <p className="mt-4 text-[0.975rem] leading-relaxed text-ink/75">{girl.paragraph}</p>

              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/55">
                {mood.line} And there&apos;s a little{" "}
                <span className="font-semibold" style={{ color: ARCHETYPES[result.runnerUp].palette.accent }}>
                  {runnerUp.name.replace("The ", "")}
                </span>{" "}
                in there too.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── The little thing she should actually do today. ── */}
        <motion.section variants={item} className="mt-3">
          <div
            className="rounded-[2rem] border border-ink/8 bg-white/70 p-5 backdrop-blur"
          >
            <p className="font-sans text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
              Your one thing today
            </p>
            <p className="mt-2 font-display text-[1.2rem] leading-snug">{girl.ritual}</p>
          </div>
        </motion.section>

        <motion.div variants={item} className="mt-6">
          <EnergyBar percents={result.percents} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <StyleBento girl={girl} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <ProductReveal girl={girl} moodLabel={mood.label} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <ShareActions
            girl={girl}
            moodLabel={mood.label}
            moodEmoji={mood.emoji}
            percents={result.percents}
            shareText={shareText(girl.name, mood.label)}
            url={url}
          />
        </motion.div>

        <motion.div variants={item} className="mt-8 text-center">
          <ButtonLink href="/quiz" variant="ghost" size="md">
            <RotateCcw className="h-4 w-4" />
            Feeling different? Take it again
          </ButtonLink>
        </motion.div>
      </motion.main>

      {/* ── Thumb-zone CTA ── */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
          showSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-md px-5 pb-safe pt-3">
          <div className="rounded-full bg-white/80 p-2 shadow-[0_16px_40px_-16px_rgba(21,19,26,0.4)] backdrop-blur-md">
            <Button
              className="w-full"
              onClick={() =>
                document.getElementById("share")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <Share2 className="h-5 w-5" strokeWidth={2} />
              Share my girl
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
