"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Check, Flame, Sparkles } from "lucide-react";
import { QUESTIONS } from "@/data/questions";
import { encodeAnswers, resultPath } from "@/lib/result-params";
import { useDailyVibe } from "@/lib/useDailyVibe";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Answers } from "@/types";

const STORAGE_KEY = "wingwoman:quiz";
/** Long enough to see your own tap register, short enough to feel instant. */
const ADVANCE_DELAY = 220;

export function QuizFlow() {
  const router = useRouter();
  const reduced = useReducedMotion();
  const { t, pick, dir } = useLang();
  // Her flame follows her into the quiz — the cheapest reason to come back. Call back tomorrow.
  const { streak } = useDailyVibe();

  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [pending, setPending] = useState<string | null>(null);
  const [direction, setDirection] = useState(1);
  const [ready, setReady] = useState(false);

  // Restore progress so accidental refresh preserves progress, but fresh visits
  // or retakes with ?reset=1 start cleanly from Question 1 (index 0).
  useEffect(() => {
    try {
      const isReset =
        typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).get("reset") === "1";

      if (isReset) {
        window.sessionStorage.removeItem(STORAGE_KEY);
        setAnswers({});
        setIndex(0);
      } else {
        const raw = window.sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as Answers;
          const firstUnanswered = QUESTIONS.findIndex((q) => !parsed[q.id]);
          if (firstUnanswered === -1) {
            // Completed previously, start fresh from 0
            window.sessionStorage.removeItem(STORAGE_KEY);
            setAnswers({});
            setIndex(0);
          } else {
            setAnswers(parsed);
            setIndex(firstUnanswered);
          }
        }
      }
    } catch {
      // ignore
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers, ready]);

  const question = QUESTIONS[index];
  const total = QUESTIONS.length;
  const delay = reduced ? 0 : ADVANCE_DELAY;

  const onPick = useCallback(
    (optionId: string) => {
      if (pending) return;
      setPending(optionId);

      const next: Answers = { ...answers, [question.id]: optionId };

      window.setTimeout(() => {
        setAnswers(next);
        setPending(null);

        if (index < total - 1) {
          setDirection(1);
          setIndex(index + 1);
        } else {
          // Done. Wipe the draft so a fresh visit starts fresh.
          try {
            window.sessionStorage.removeItem(STORAGE_KEY);
          } catch {
            // ignore
          }
          router.push(resultPath(encodeAnswers(next)));
        }
      }, delay);
    },
    [answers, delay, index, pending, question.id, router, total]
  );

  const goBack = useCallback(() => {
    if (index === 0) {
      router.push("/");
      return;
    }
    setDirection(-1);
    setIndex(index - 1);
  }, [index, router]);

  const selectedInThisQuestion = answers[question.id];
  const progressRatio = (index + (pending ? 1 : 0)) / total;

  // In RTL the motion axis flips so the flow still reads "forward".
  const slide = dir === "rtl" ? -1 : 1;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 sm:px-6 pb-28 pt-safe">
      {/* ── Immersive progress header ────────────────────────────
          There is no site header on this screen anymore — instead the top of
          the page is the game itself: a chunky gradient track with a butterfly
          riding the tip, her streak, and a line of encouragement that changes
          with every question. */}
      <header className="relative">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[135%] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 28% 42%, var(--color-blush) 0%, transparent 64%), radial-gradient(circle at 76% 30%, var(--color-petal)55 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative flex items-center gap-3 pt-4">
          <button
            type="button"
            onClick={goBack}
            aria-label={index === 0 ? t("quiz.backHome") : t("quiz.back")}
            className="-ms-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/70 text-ink/60 backdrop-blur-md transition hover:text-ink active:scale-95"
          >
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </button>

          <div className="ms-auto flex items-center gap-1.5">
            {streak > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-rose/12 px-2.5 py-1 text-[0.72rem] font-black text-rose">
                <Flame className="h-3.5 w-3.5" />
                {t("quiz.streak").replace("{n}", String(streak))}
              </span>
            )}
            <span className="rounded-full border border-rose/15 bg-white/70 px-2.5 py-1 text-[0.72rem] font-black text-ink/60 backdrop-blur-md">
              {index + 1}
              <span className="text-ink/25">/{total}</span>
            </span>
          </div>
        </div>

        {/* Chunky track + a butterfly that actually travels with her. */}
        <div
          className="relative mt-4"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={index}
        >
          <div className="h-3 rounded-full bg-ink/8" />
          <motion.div
            className="absolute inset-y-0 start-0 rounded-full bg-gradient-to-r from-rose via-petal to-blush"
            animate={{ width: `${progressRatio * 100}%` }}
            transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
              <span className="animate-shine absolute inset-y-0 -start-10 w-10 -skew-x-12 bg-white/50 blur-[2px]" />
            </span>
            <span
              className="absolute -end-2.5 top-1/2 -translate-y-1/2 text-[1.05rem] leading-none drop-shadow-sm"
              aria-hidden="true"
            >
              🦋
            </span>
          </motion.div>
        </div>

        <p className="relative mt-3 text-center text-[0.8rem] font-bold text-rose/85">
          {t(`quiz.cheer.${index % 4}`)}
        </p>
      </header>

      {/* ── Question ─────────────────────────────────────────── */}
      <main className="flex flex-1 flex-col justify-center py-8">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 28 * slide }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -28 * slide }}
            transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-rose uppercase">
              {t("quiz.question").replace("{n}", String(index + 1)).replace("{total}", String(total))}
            </p>

            <h1 className="mt-2 text-[1.75rem] leading-[1.12] font-semibold text-balance sm:text-[2rem]">
              {pick(question.prompt)}
            </h1>

            <div className="mt-7 flex flex-col gap-3">
              {question.options.map((option, i) => {
                const isSelected =
                  pending === option.id || (!pending && selectedInThisQuestion === option.id);

                return (
                  <motion.button
                    key={option.id}
                    type="button"
                    onClick={() => onPick(option.id)}
                    disabled={Boolean(pending)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.35,
                      delay: reduced ? 0 : 0.05 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileTap={reduced ? undefined : { scale: 0.98 }}
                    aria-pressed={isSelected}
                    className={cn(
                      "group relative flex min-h-[5.25rem] w-full items-center gap-4 overflow-hidden rounded-3xl border p-4 text-start",
                      "transition-colors duration-200",
                      isSelected
                        ? "border-rose bg-rose/8"
                        : "border-ink/8 bg-white hover:border-ink/20"
                    )}
                  >
                    {/* Hover glow following the selected variant of joy */}
                    <span
                      className="pointer-events-none absolute -top-10 -end-10 h-24 w-24 rounded-full bg-rose/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl transition-all duration-200",
                        isSelected ? "scale-110 bg-rose/15" : "bg-cream group-hover:scale-105"
                      )}
                      aria-hidden="true"
                    >
                      {option.glyph}
                    </span>

                    <span className="flex-1 text-[0.975rem] leading-snug font-medium text-ink">
                      {pick(option.label)}
                    </span>

                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                        isSelected
                          ? "border-rose bg-rose text-white"
                          : "border-ink/12 text-transparent"
                      )}
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="flex items-center justify-center gap-2 pb-5 text-center text-[0.78rem] text-ink/40">
        <Sparkles className="h-3.5 w-3.5 shrink-0" />
        <span>{t("quiz.footer")}</span>
      </footer>
    </div>
  );
}
