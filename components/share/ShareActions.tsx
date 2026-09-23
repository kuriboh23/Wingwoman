"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toBlob } from "html-to-image";
import { AlertCircle, Check, Download, Link2, Loader2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ShareCard, type CardFormat } from "@/components/share/ShareCard";
import type { Archetype } from "@/data/vibes";
import { cn } from "@/lib/utils";
import type { ScoreMap } from "@/types";

type Status = "idle" | "rendering" | "shared" | "saved" | "copied" | "error";

const CANVAS: Record<CardFormat, { w: number; h: number }> = {
  story: { w: 1080, h: 1920 },
  square: { w: 1080, h: 1080 },
};

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Give the browser a beat to start the download before revoking.
  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

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
  const [format, setFormat] = useState<CardFormat>("story");
  const [status, setStatus] = useState<Status>("idle");
  const [scale, setScale] = useState(0.3);

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

    const options = {
      width: dims.w,
      height: dims.h,
      pixelRatio: 1,
      cacheBust: true,
      backgroundColor: girl.palette.wash,
    };

    try {
      return await toBlob(node, options);
    } catch {
      // Some browsers refuse to read the font stylesheet. A card with fallback
      // fonts still beats no card at all.
      try {
        return await toBlob(node, { ...options, skipFonts: true });
      } catch {
        return null;
      }
    }
  }, [dims.h, dims.w, girl.palette.wash]);

  const handleShare = useCallback(async () => {
    setStatus("rendering");
    const blob = await renderBlob();

    if (!blob) {
      setStatus("error");
      return;
    }

    const file = new File([blob], `pink-in-sweet-${girl.id}-${format}.png`, {
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
        // fall through to download
      }
    }

    downloadBlob(blob, `pink-in-sweet-${girl.id}-${format}.png`);
    setStatus("saved");
  }, [format, girl.id, renderBlob, shareText]);

  const handleSave = useCallback(async () => {
    setStatus("rendering");
    const blob = await renderBlob();

    if (!blob) {
      setStatus("error");
      return;
    }

    downloadBlob(blob, `pink-in-sweet-${girl.id}-${format}.png`);
    setStatus("saved");
  }, [format, girl.id, renderBlob]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }, [url]);

  const busy = status === "rendering";

  return (
    <section id="share" aria-labelledby="share-heading" className="scroll-mt-6">
      <h2
        id="share-heading"
        className="font-sans text-[0.72rem] font-semibold tracking-[0.14em] text-ink/45 uppercase"
      >
        Your card
      </h2>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink/60">
        Made to be posted. Tap share and it drops straight into Instagram, WhatsApp or TikTok.
      </p>

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
            {option === "story" ? "Story 9:16" : "Post 1:1"}
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
            />
          </div>
        </div>
      </div>

      {/* ── Actions ─────────────────────────────────────────── */}
      <div className="mt-4 flex flex-col gap-2.5">
        <Button onClick={handleShare} disabled={busy} className="w-full">
          {busy ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Share2 className="h-5 w-5" strokeWidth={2} />
          )}
          {busy ? "Making your card..." : "Share my card"}
        </Button>

        <div className="flex gap-2.5">
          <Button variant="secondary" size="md" onClick={handleSave} disabled={busy} className="flex-1">
            <Download className="h-4 w-4" strokeWidth={2} />
            Save image
          </Button>
          <Button variant="secondary" size="md" onClick={handleCopy} className="flex-1">
            <Link2 className="h-4 w-4" strokeWidth={2} />
            Copy link
          </Button>
        </div>
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
            <Check className="h-3.5 w-3.5" /> Posted. Thank you for showing her off.
          </>
        )}
        {status === "saved" && (
          <>
            <Check className="h-3.5 w-3.5" /> Saved to your downloads.
          </>
        )}
        {status === "copied" && (
          <>
            <Check className="h-3.5 w-3.5" /> Link copied.
          </>
        )}
        {status === "error" && (
          <>
            <AlertCircle className="h-3.5 w-3.5" /> Couldn&apos;t make the image. Try a screenshot instead.
          </>
        )}
        {status === "idle" && "Both formats are ready — pick the one you want."}
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
          />
        </div>
      </div>
    </section>
  );
}
