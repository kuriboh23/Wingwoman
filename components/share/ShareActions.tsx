"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AlertCircle, AtSign, Check, Download, Gift, Link2, Loader2, MessageCircle, Share2, User } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button, ButtonAnchor } from "@/components/ui/Button";
import { ShareCard, type CardFormat } from "@/components/share/ShareCard";
import { useLang } from "@/lib/i18n";
import { usePersona } from "@/lib/usePersona";
import { whatsappOrderUrl, type Persona } from "@/data/config";
import type { Archetype } from "@/data/vibes";
import { downloadBlob, renderCardBlob } from "@/lib/share-image";
import { cn } from "@/lib/utils";
import type { ScoreMap } from "@/types";

type Status = "idle" | "rendering" | "shared" | "saved" | "copied" | "error";

const CANVAS: Record<CardFormat, { w: number; h: number }> = {
  story: { w: 1080, h: 1920 },
  square: { w: 1080, h: 1080 },
};

export function ShareActions({
  girl,
  moodLabel,
  moodEmoji,
  percents,
  shareText,
  url,
}: {
  girl: Archetype;
  moodLabel: string;
  moodEmoji: string;
  percents: ScoreMap;
  shareText: string;
  url: string;
}) {
  const { t } = useLang();
  const reduced = useReducedMotion();

  const [format, setFormat] = useState<CardFormat>("story");
  const [status, setStatus] = useState<Status>("idle");
  const [scale, setScale] = useState(0.3);

  // ── Personalisation ────────────────────────────────────────────
  const { persona, update: updatePersona } = usePersona();

  const previewWrapRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  const dims = CANVAS[format];

  // The visible preview is the real 1080px card, scaled down. What she sees is
  // exactly what gets exported — no second implementation to drift.
  useEffect(() => {
    const el = previewWrapRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / dims.w);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [dims.w]);

  const renderBlob = useCallback(async (): Promise<Blob | null> => {
    const node = captureRef.current;
    if (!node) return null;

    return renderCardBlob(node, {
      width: dims.w,
      height: dims.h,
      backgroundColor: girl.palette.wash,
    });
  }, [dims.h, dims.w, girl.palette.wash]);

  const handleShare = useCallback(async () => {
    setStatus("rendering");
    const blob = await renderBlob();

    if (!blob) {
      setStatus("error");
      return;
    }

    const filename = `wingwoman-${girl.id}-${format}.png`;
    const file = new File([blob], filename, {
      type: "image/png",
    });

    const nav = navigator as Navigator & {
      canShare?: (data: ShareData) => boolean;
    };

    // The native share sheet is the whole trick. On iOS, `files` must be the
    // only payload — adding `url` makes the share silently fail.
    if (nav.share && nav.canShare?.({ files: [file] })) {
      try {
        await nav.share({ files: [file], text: shareText });
        setStatus("shared");
        return;
      } catch (error) {
        if ((error as Error)?.name === "AbortError") {
          setStatus("idle");
          return;
        }
        // Any other failure (quota, in-app browser quirks): fall through
        // to the download so she still walks away with the card.
      }
    }

    downloadBlob(blob, filename);
    setStatus("saved");
  }, [format, girl.id, renderBlob, shareText]);

  const handleSave = useCallback(async () => {
    setStatus("rendering");
    const blob = await renderBlob();

    if (!blob) {
      setStatus("error");
      return;
    }

    downloadBlob(blob, `wingwoman-${girl.id}-${format}.png`);
    setStatus("saved");
  }, [format, girl.id, renderBlob]);

  const handleCopy = useCallback(async () => {
    // navigator.clipboard only exists in secure contexts — plenty of mobile
    // webviews aren't. The textarea trick keeps copy working everywhere.
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
      return;
    } catch {
      // fall through to the legacy path
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      setStatus(ok ? "copied" : "error");
    } catch {
      setStatus("error");
    }
  }, [url]);

  const busy = status === "rendering";

  const field =
    "h-12 w-full rounded-2xl border border-ink/10 bg-white px-3.5 text-[0.9rem] outline-none transition focus:border-rose/50";

  return (
    <section id="share" aria-labelledby="share-heading" className="scroll-mt-6">
      <h2
        id="share-heading"
        className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        {t("share.cardTitle")}
      </h2>

      {/* ── Make it yours: name, Instagram, me-or-gift ──────────── */}
      <div className="mt-4 rounded-[1.75rem] border border-ink/8 bg-white p-4">
        <p className="flex items-center gap-2 text-[0.95rem] font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose/10">
            <User className="h-3.5 w-3.5 text-rose" />
          </span>
          {t("personal.title")}
        </p>
        <p className="mt-1 text-[0.8rem] leading-relaxed text-ink/50">{t("personal.subtitle")}</p>

        <div className="mt-3.5">
          <label className="flex flex-col gap-1.5">
            <span className="text-[0.66rem] font-bold tracking-wide text-ink/45 uppercase">
              {t("personal.name")}
            </span>
            <input
              value={persona.name ?? ""}
              onChange={(e) => updatePersona({ name: e.target.value })}
              placeholder={t("personal.namePlaceholder")}
              maxLength={24}
              className={field}
            />
          </label>
        </div>

        {/* For me / gift */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[0.66rem] font-bold tracking-wide text-ink/45 uppercase">
            {t("personal.for")}
          </span>

          <div className="flex rounded-full bg-ink/5 p-1" role="group" aria-label={t("personal.for")}>
            {[
              { id: "me", label: t("personal.forMe"), icon: null },
              { id: "gift", label: t("personal.gift"), icon: Gift },
            ].map((opt) => {
              const active = opt.id === "me" ? !persona.isGift : persona.isGift;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => updatePersona({ isGift: opt.id === "gift" })}
                  aria-pressed={active}
                  className={cn(
                    "flex h-9 items-center gap-1.5 rounded-full px-4 text-[0.78rem] font-bold transition",
                    active ? "bg-rose text-white shadow-[0_6px_16px_-6px_var(--glow-strong)]" : "text-ink/45"
                  )}
                >
                  {opt.icon && <opt.icon className="h-3.5 w-3.5" />}
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {persona.isGift && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <label className="mt-3 flex flex-col gap-1.5">
                <span className="text-[0.66rem] font-bold tracking-wide text-ink/45 uppercase">
                  {t("personal.giftFor")}
                </span>
                <input
                  value={persona.recipient ?? ""}
                  onChange={(e) => updatePersona({ recipient: e.target.value })}
                  placeholder={t("personal.giftPlaceholder")}
                  maxLength={24}
                  className={field}
                />
              </label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Card canvas ─────────────────────────────────────────── */}
      <p className="mt-5 text-[0.9rem] leading-relaxed text-ink/60">{t("share.body")}</p>

      {/* Format toggle — Story is the default because that's where it gets seen. */}
      <div className="mt-4 inline-flex rounded-full bg-ink/5 p-1">
        {(["story", "square"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFormat(option)}
            aria-pressed={format === option}
            className={cn(
              "h-9 rounded-full px-4 text-[0.8rem] font-semibold transition",
              format === option ? "bg-white text-ink shadow-sm" : "text-ink/50"
            )}
          >
            {option === "story" ? t("share.formatStory") : t("share.formatSquare")}
          </button>
        ))}
      </div>

      {/* ── Preview (the real card, scaled) ─────────────────── */}
      <div
        className={cn(
          "mt-4 overflow-hidden rounded-[1.75rem] ring-1 ring-ink/8",
          "shadow-[0_24px_60px_-30px_rgba(21,19,26,0.35)]"
        )}
      >
        <div
          ref={previewWrapRef}
          className="relative w-full"
          style={{ aspectRatio: `${dims.w} / ${dims.h}` }}
        >
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{ transform: `scale(${scale})` }}
            aria-hidden="true"
          >
            <ShareCard
              girl={girl}
              moodLabel={moodLabel}
              moodEmoji={moodEmoji}
              percents={percents}
              format={format}
              persona={persona}
            />
          </div>
        </div>
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="mt-4 flex flex-col gap-2.5">
        <Button onClick={handleShare} disabled={busy} className="w-full">
          {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <Share2 className="h-5 w-5" strokeWidth={2} />}
          {busy ? t("share.making") : t("share.make")}
        </Button>

        <div className="flex gap-2.5">
          <Button variant="secondary" size="md" onClick={handleSave} disabled={busy} className="flex-1">
            <Download className="h-4 w-4" strokeWidth={2} />
            {t("share.save")}
          </Button>
          <Button variant="secondary" size="md" onClick={handleCopy} className="flex-1">
            <Link2 className="h-4 w-4" strokeWidth={2} />
            {t("share.copy")}
          </Button>
        </div>

        {/* WhatsApp is where Moroccan girls actually forward things — give the
            card a one-tap ride there when the share sheet didn't fire. */}
        <ButtonAnchor
          variant="secondary"
          size="md"
          href={whatsappOrderUrl(
            `Salam! 🦋 ${shareText}\n${url}`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full [&>span]:w-full [&>span]:justify-center"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2} />
          {t("share.whatsapp")}
        </ButtonAnchor>
      </div>

      <p
        className={cn(
          "mt-3 flex min-h-5 items-center justify-center gap-1.5 text-center text-[0.78rem]",
          status === "error" ? "text-rose" : "text-ink/45"
        )}
        role="status"
        aria-live="polite"
      >
        {status === "shared" && (
          <>
            <Check className="h-3.5 w-3.5" /> {t("share.shared")}
          </>
        )}
        {status === "saved" && (
          <>
            <Check className="h-3.5 w-3.5" /> {t("share.saved")}
          </>
        )}
        {status === "copied" && (
          <>
            <Check className="h-3.5 w-3.5" /> {t("share.copied")}
          </>
        )}
        {status === "error" && (
          <>
            <AlertCircle className="h-3.5 w-3.5" /> {t("share.error")}
          </>
        )}
        {status === "idle" && t("share.idle")}
      </p>

      {/* ── Off-screen full-size node used for the actual export ──
          Two constraints shape this markup:
            1. It must stay in the document — `display: none` (or opacity 0)
               rasterises to an empty or transparent image.
            2. Motion animates ancestors with transforms, and a transformed
               ancestor becomes the containing block for `position: fixed`.
               So the card is parked inside a clipped, full-viewport wrapper
               rather than flung to left: -99999px, which could otherwise
               create sideways scroll. */}
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
          <ShareCard
            innerRef={captureRef}
            girl={girl}
            moodLabel={moodLabel}
            moodEmoji={moodEmoji}
            percents={percents}
            format={format}
            persona={persona}
          />
        </div>
      </div>
    </section>
  );
}
