"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { RotateCcw, Share2, Sparkles, Star } from "lucide-react";
import { Butterfly } from "@/components/brand/Butterfly";
import { Button, ButtonLink } from "@/components/ui/Button";
import { EnergyBar } from "@/components/result/EnergyBar";
import { StyleBento } from "@/components/result/StyleBento";
import { ProductReveal } from "@/components/result/ProductReveal";
import { ShareActions } from "@/components/share/ShareActions";
import { useLang } from "@/lib/i18n";
import { useResultTheme } from "@/lib/result-theme";
import { encodeAnswers, resultPath } from "@/lib/result-params";
import { mix } from "@/lib/variant-theme";
import { MOODS } from "@/data/moods";
import { shareText } from "@/data/config";
import { ARCHETYPES } from "@/data/vibes";
import { scoreQuiz } from "@/lib/scoring";
import type { Answers } from "@/types";

/** Applies the variant theme before paint on the client, and stays quiet on
 *  the server (where useLayoutEffect would warn). */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ResultView({ answers, url }: { answers: Answers; url: string }) {
  const reduced = useReducedMotion();
  const { t, pick, lang } = useLang();

  const result = useMemo(() => scoreQuiz(answers), [answers]);
  const girl = ARCHETYPES[result.winner];
  const runnerUp = ARCHETYPES[result.runnerUp];
  const mood = MOODS[result.mood];

  // From here on the entire site wears her girl's colours — home, quiz, share,
  // every button — until a new result lands. The shop opts out on its own.
  const { setTheme } = useResultTheme();
  const themeHref = useMemo(() => resultPath(encodeAnswers(answers)), [answers]);

  useIsoLayoutEffect(() => {
    setTheme({ variant: result.winner, href: themeHref });
  }, [result.winner, setTheme, themeHref]);

  const [showSticky, setShowSticky] = useState(false);
  const [userName, setUserName] = useState<string>("");

  // Load saved persona name so the result page can personalise the greeting
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("wingwoman:persona");
      if (raw) {
        const p = JSON.parse(raw);
        if (p?.name?.trim()) setUserName(p.name.trim());
      }
    } catch {
      // ignore
    }
  }, []);

  // Floating share button appears after initial reveal, disappears when
  // reaching the share section at the bottom.
  useEffect(() => {
    let shareInView = false;
    const shareEl = document.getElementById("share");

    const updateVisibility = () => {
      const pastReveal = window.scrollY > 380;
      setShowSticky(pastReveal && !shareInView);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        shareInView = Boolean(entry?.isIntersecting);
        updateVisibility();
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    if (shareEl) {
      observer.observe(shareEl);
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      observer.disconnect();
    };
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
    <div
      className="min-h-dvh transition-colors duration-700"
      style={{ backgroundColor: girl.palette.wash }}
    >
      {/* Dynamic radial glow background — shifts with the girl's palette */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${girl.palette.soft}90 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <header className="mx-auto flex w-full max-w-md items-center justify-between px-5 pt-3 pb-2">
        {/* Personalised greeting if name saved */}
        {userName ? (
          <p className="text-[0.8rem] font-semibold" style={{ color: girl.palette.accent }}>
            {lang === "ar" ? `مرحباً ${userName}` : `Hey ${userName} ✨`}
          </p>
        ) : (
          <span />
        )}
        <Link
          href="/quiz?reset=1"
          className="flex items-center gap-1.5 text-[0.8rem] font-medium text-ink/50 transition hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          {t("result.retake")}
        </Link>
      </header>

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-md px-5 pb-36"
      >
        {/* ── The identity. The emotional peak. ── */}
        <motion.section variants={item} className="pt-4">
          <div
            className="relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur"
            style={{
              backgroundColor: `${girl.palette.soft}60`,
              borderColor: `${girl.palette.accent}25`,
              boxShadow: `0 24px 64px -24px ${girl.palette.accent}40`,
            }}
          >
            {/* Radial glow top right */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full"
              style={{
                background: `radial-gradient(circle, ${girl.palette.soft} 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />
            {/* Radial glow bottom left */}
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full"
              style={{
                background: `radial-gradient(circle, ${girl.palette.accent}22 0%, transparent 70%)`,
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <motion.div
                animate={reduced ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="mb-4 inline-block"
              >
                <Butterfly className="h-11 w-11" color={girl.palette.accent} />
              </motion.div>

              <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase opacity-40">
                {userName
                  ? lang === "ar"
                    ? `${userName}، أنتِ اليوم`
                    : `${userName}, today you're`
                  : t("result.todayYoure")}
              </p>

              <h1
                className="mt-1 text-[2.75rem] leading-[0.95] font-semibold"
                style={{ color: girl.palette.ink }}
              >
                {pick(girl.name)}
              </h1>

              <p
                className="mt-1 font-display text-[1.15rem] italic opacity-55"
                style={{ color: girl.palette.ink }}
              >
                {pick(girl.era)}
              </p>

              {/* Mood pill */}
              <div
                className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{ backgroundColor: `${girl.palette.accent}1f` }}
              >
                <span className="text-[1rem]">{mood.emoji}</span>
                <span
                  className="text-[0.8rem] font-bold tracking-[0.08em] uppercase"
                  style={{ color: girl.palette.ink }}
                >
                  {pick(mood.label)}
                </span>
              </div>

              <p className="mt-4 text-[0.975rem] leading-relaxed text-ink/75">
                {pick(girl.paragraph)}
              </p>

              <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/55">
                {pick(mood.line)}{" "}
                <span style={{ color: girl.palette.accent }}>●</span>{" "}
                <span className="font-semibold" style={{ color: runnerUp.palette.accent }}>
                  {pick(runnerUp.name).replace(/^The /, "")}
                </span>
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Your One Thing Today — glowing ritual card ── */}
        <motion.section variants={item} className="mt-3">
          <div
            className="relative overflow-hidden rounded-[2rem] border p-5"
            style={{
              backgroundColor: `${girl.palette.accent}0f`,
              borderColor: `${girl.palette.accent}35`,
              boxShadow: `0 8px 32px -12px ${girl.palette.accent}35`,
            }}
          >
            {/* Glow accent strip at top */}
            <div
              className="absolute top-0 inset-x-0 h-[2px] rounded-t-[2rem]"
              style={{ background: `linear-gradient(90deg, transparent, ${girl.palette.accent}80, transparent)` }}
            />

            <div className="flex items-center gap-2 mb-3">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-white text-xs"
                style={{ backgroundColor: girl.palette.accent }}
              >
                <Star className="h-3 w-3 fill-white" />
              </span>
              <p
                className="text-[0.72rem] font-bold uppercase tracking-[0.18em]"
                style={{ color: girl.palette.accent }}
              >
                {t("result.oneThing")}
              </p>
            </div>
            <p
              className="font-display text-[1.2rem] leading-snug"
              style={{ color: girl.palette.ink }}
            >
              {pick(girl.ritual)}
            </p>
          </div>
        </motion.section>

        <motion.div variants={item} className="mt-6">
          <EnergyBar percents={result.percents} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <StyleBento girl={girl} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <ProductReveal girl={girl} moodLabel={pick(mood.label)} />
        </motion.div>

        <motion.div variants={item} className="mt-7">
          <ShareActions
            girl={girl}
            moodLabel={pick(mood.label)}
            moodEmoji={mood.emoji}
            percents={result.percents}
            shareText={shareText(pick(girl.name), pick(mood.label), lang)}
            url={url}
          />
        </motion.div>

        {/* Variant-colored retake button */}
        <motion.div variants={item} className="mt-8 text-center">
          <Link
            href="/quiz?reset=1"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[0.86rem] font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${girl.palette.accent}, ${mix(girl.palette.accent, "#ffffff", 0.35)})`,
              boxShadow: `0 8px 24px -8px ${girl.palette.accent}88`,
            }}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {t("result.again")}
          </Link>
        </motion.div>
      </motion.main>

      {/* ── Thumb-zone sticky share CTA ── */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 mb-20 transition-all duration-300 ${
          showSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-md px-5 pb-safe pt-3">
          <div
            className="rounded-full p-2 shadow-[0_16px_40px_-16px_rgba(21,19,26,0.4)] backdrop-blur-md"
            style={{ backgroundColor: `${girl.palette.wash}e0` }}
          >
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-full py-3 px-5 text-[0.95rem] font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${girl.palette.accent} 0%, ${mix(girl.palette.accent, "#ffffff", 0.35)} 100%)`,
                boxShadow: `0 8px 20px -6px ${girl.palette.accent}88`,
              }}
              onClick={() =>
                document.getElementById("share")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <Share2 className="h-4.5 w-4.5" strokeWidth={2} />
              {t("result.shareCta")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
