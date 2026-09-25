"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Download, Flame, Loader2, Share2, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { VibeCard, VIBE_CARD_SIZE } from "@/components/home/VibeCard";
import { DAILY_VIBES, findDailyVibe } from "@/data/dailyVibes";
import { ARCHETYPES } from "@/data/vibes";
import { CONFIG } from "@/data/config";
import { useDailyVibe } from "@/lib/useDailyVibe";
import { downloadBlob, renderCardBlob } from "@/lib/share-image";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Status = "idle" | "rendering" | "shared" | "saved" | "error";

export function DailyVibeCheck() {
  const { t, pick } = useLang();
  const reduced = useReducedMotion();
  const { mood, streak, checkedInToday, week, checkIn } = useDailyVibe();

  const selected = findDailyVibe(mood);
  const [burst, setBurst] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [scale, setScale] = useState(0.26);

  const previewRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  const tone = ARCHETYPES[selected?.tone ?? "pink"].palette;

  useEffect(() => {
    const el = previewRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / VIBE_CARD_SIZE);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [selected]);

  const onPick = useCallback(
    (id: string) => {
      const firstTimeToday = !checkedInToday;
      checkIn(id);
      setStatus("idle");
      if (firstTimeToday && !reduced) {
        setBurst(true);
        window.setTimeout(() => setBurst(false), 1000);
      }
    },
    [checkIn, checkedInToday, reduced]
  );

  const caption = useMemo(() => {
    if (!selected) return "";
    return `Today's vibe: ${selected.emoji} ${pick(selected.label)} — day ${streak} 🔥\nWach nti? Take the Wingwoman quiz ✨ ${CONFIG.brand.url}`;
  }, [pick, selected, streak]);

  const renderBlob = useCallback(async (): Promise<Blob | null> => {
    const node = captureRef.current;
    if (!node) return null;
    return renderCardBlob(node, {
      width: VIBE_CARD_SIZE,
      height: VIBE_CARD_SIZE,
      backgroundColor: tone.wash,
    });
  }, [tone.wash]);

  const handleShare = useCallback(async () => {
    if (!selected) return;
    setStatus("rendering");
    const blob = await renderBlob();
    if (!blob) {
      setStatus("error");
      return;
    }

    const filename = `wingwoman-vibe-${selected.id}.png`;
    const file = new File([blob], filename, { type: "image/png" });
    const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };

    if (nav.share && nav.canShare?.({ files: [file] })) {
      try {
        await nav.share({ files: [file], text: caption });
        setStatus("shared");
        return;
      } catch (error) {
        if ((error as Error)?.name === "AbortError") {
          setStatus("idle");
          return;
        }
      }
    }

    downloadBlob(blob, filename);
    setStatus("saved");
  }, [caption, renderBlob, selected]);

  const handleSave = useCallback(async () => {
    if (!selected) return;
    setStatus("rendering");
    const blob = await renderBlob();
    if (!blob) {
      setStatus("error");
      return;
    }
    downloadBlob(blob, `wingwoman-vibe-${selected.id}.png`);
    setStatus("saved");
  }, [renderBlob, selected]);

  const busy = status === "rendering";
  const dayLabels = week.map((day) => {
    const [y, m, d] = day.key.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-GB", { weekday: "narrow" });
  });

  return (
    <section
      aria-labelledby="daily-vibe-heading"
      className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/90 bg-white/80 p-4 shadow-[0_22px_50px_-24px_var(--glow)] backdrop-blur-md"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-colors duration-700"
        style={{
          background: `radial-gradient(120% 90% at 8% -10%, ${tone.accent}22 0%, transparent 62%), radial-gradient(110% 90% at 100% 110%, ${tone.soft}66 0%, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <AnimatePresence>{burst && <Confetti />}</AnimatePresence>

      <div className="relative">
        {/* Streak header — condensed to one line */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            <div
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{
                background: `conic-gradient(${tone.accent} ${Math.min(streak / 7, 1) * 100}%, ${tone.accent}1f 0)`,
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[0.85rem] font-black" style={{ color: tone.accent }}>
                {streak > 0 ? streak : "✨"}
              </span>
            </div>
            <div className="min-w-0">
              <p
                className="truncate text-[0.78rem] font-black"
                style={{ color: tone.accent, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                {t("daily.title")}
              </p>
              <p className="truncate text-[0.92rem] font-extrabold text-ink">
                {streak > 0
                  ? t("daily.streakLabel").replace("{n}", String(streak))
                  : t("daily.startStreak")}
              </p>
            </div>
          </div>

          <span
            className="flex shrink-0 items-center gap-1 rounded-full bg-white/80 px-2.5 py-1.5 text-[0.68rem] font-bold shadow-sm"
            style={{ color: tone.accent }}
          >
            <Flame className="h-3.5 w-3.5" style={{ color: tone.accent }} />
            {checkedInToday ? t("daily.doneToday") : t("daily.pendingToday")}
          </span>
        </div>

        {/* Floating vibe preview — instant reward */}
        <div
          className="relative mt-3 overflow-hidden rounded-[1.4rem] border border-white/70 bg-white/60 p-3 shadow-[0_16px_32px_-18px_rgba(21,19,26,0.3)]"
          style={{ backgroundColor: selected ? `${tone.accent}0e` : undefined }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-lg">{selected?.emoji ?? "🌸"}</span>
            {selected && (
              <span
                className="rounded-full px-2.5 py-0.5 text-[0.6rem] font-black uppercase tracking-wider"
                style={{ backgroundColor: `${tone.accent}1a`, color: tone.accent }}
              >
                {pick(selected.label)}
              </span>
            )}
          </div>
          <p
            className="mt-1 text-[0.55rem] font-black uppercase tracking-[0.18em]"
            style={{ color: selected ? tone.accent : "rgba(21,19,26,0.25)" }}
          >
            {t("daily.cardTitle")}
          </p>
        </div>

        {/* Six vibes in a clean 2-column grid */}
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {DAILY_VIBES.map((vibe) => {
            const isPicked = mood === vibe.id;
            const palette = ARCHETYPES[vibe.tone].palette;
            return (
              <button
                key={vibe.id}
                type="button"
                onClick={() => onPick(vibe.id)}
                aria-pressed={isPicked}
                className={
                  "relative flex flex-col items-center gap-1.5 rounded-2xl border p-2 text-center transition-all duration-200 " +
                  (isPicked
                    ? "scale-[0.97] border-rose bg-rose/7 shadow-sm"
                    : "border-ink/8 bg-white/80 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-sm")
                }
                style={isPicked ? { borderColor: palette.accent } : undefined}
              >
                <span className={"text-xl " + (isPicked ? "scale-110" : "")}>{vibe.emoji}</span>
                <span className={"text-[0.72rem] leading-tight font-bold " + (isPicked ? "text-white" : "text-ink")}>
                  {pick(vibe.label)}
                </span>
                {isPicked && (
                  <span
                    className="absolute -end-1.5 flex h-5 w-5 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: palette.accent }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Floating reward card */}
        <div className="relative mt-3">
          <AnimatePresence initial={false}>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-2 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_18px_40px_-22px_rgba(21,19,26,0.35)] backdrop-blur-md">
                  <p className="flex items-start gap-2 text-[0.8rem] font-semibold leading-snug" style={{ color: tone.ink }}>
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: tone.accent }} />
                    {pick(selected.cheer)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleShare}
                      disabled={busy}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-[0.86rem] font-bold text-white transition active:scale-[0.97] disabled:opacity-60"
                      style={{
                        background: `linear-gradient(135deg, ${tone.accent}, ${tone.accent}cc)`,
                        boxShadow: `0 10px 24px -10px ${tone.accent}88`,
                      }}
                    >
                      {busy ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Share2 className="h-4 w-4" />
                      )}
                      {busy ? t("daily.rendering") : t("daily.share")}
                    </button>

                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={busy}
                      aria-label={t("share.save")}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/70 transition hover:text-ink active:scale-95 disabled:opacity-60"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Week strip — one row */}
        {week.length > 0 && (
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex gap-1.5">
              {week.map((day, i) => (
                <div
                  key={day.key}
                  className="flex flex-1 flex-col items-center gap-1"
                  aria-hidden="true"
                >
                  <span
                    className="flex h-6 w-full items-center justify-center rounded-lg text-[0.62rem] font-extrabold transition-all duration-300"
                    style={{
                      backgroundColor: day.done ? tone.accent : `${tone.accent}0f`,
                      color: day.done ? "#fff" : "rgba(21,19,26,0.25)",
                      boxShadow: day.isToday ? `inset 0 0 0 2px ${tone.accent}` : undefined,
                    }}
                  >
                    {day.done ? "🔥" : "·"}
                  </span>
                  <span
                    className={"text-[0.55rem] font-bold uppercase tracking-wide " + (day.isToday ? "text-ink/70" : "text-ink/30")}
                  >
                    {dayLabels[i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-0.5">
              <span
                className="text-[0.62rem] font-bold"
                style={{ color: tone.accent, letterSpacing: "0.16em" }}
              >
                {t("daily.title")} · {checkedInToday ? t("daily.doneToday") : t("daily.pendingToday")}
              </span>
              <span className="text-[0.62rem] font-medium" style={{ color: "rgba(21,19,26,0.35)" }}>
                {t("daily.subtitle")}
              </span>
            </div>
          </div>
        )}

        <p
          className="mt-2.5 text-center text-[0.76rem] text-ink/45"
          role="status"
          aria-live="polite"
        >
          {status === "shared" && t("share.shared")}
          {status === "saved" && t("share.saved")}
          {status === "error" && t("share.error")}
          {status === "idle" && t("daily.shareNote")}
        </p>
      </div>

      {/* Off-screen full-size node used for export */}
      {selected && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <div style={{ position: "absolute", top: 0, left: "-200%" }}>
            <VibeCard innerRef={captureRef} vibe={selected} streak={streak} week={week} />
          </div>
        </div>
      )}
    </section>
  );
}

/** Confetti burst, engine-free: 14 fixed spans flung outward. */
function Confetti() {
  const pieces = ["🌸", "✨", "🩷", "💅", "⭐"];
  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 flex justify-center" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            className="absolute text-lg select-none"
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
            animate={{
              opacity: 0,
              x: Math.cos(angle) * (70 + (i % 4) * 22),
              y: Math.sin(angle) * (60 + (i % 3) * 26),
              scale: 1.1,
              rotate: (i % 2 ? 1 : -1) * 90,
            }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            {pieces[i % pieces.length]}
          </motion.span>
        );
      })}
    </div>
  );
}
